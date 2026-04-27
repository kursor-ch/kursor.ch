"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import RetraiteProgressBar from "./RetraiteProgressBar";
import PrevoyanceLanding from "@/components/prevoyance/PrevoyanceLanding";
import QuestionScreen from "./QuestionScreen";
import ContactScreen, {
  RetraiteContactInfo,
  RetraiteOptIns,
} from "./ContactScreen";
import LoadingScreen from "./LoadingScreen";
import ResultsScreen from "./ResultsScreen";
import {
  SoftExitSansActivite,
  SoftExitPreRetraite,
  SoftExitJeuneHorizon,
} from "./SoftExitScreens";
import { retraiteScreens } from "@/lib/retraite/questions";
import type { RetraiteAnswers, RetraitePersona } from "@/lib/retraite/types";
import { computeRetraiteScore } from "@/lib/retraite/scoring";
import { identifyPersona } from "@/lib/retraite/personas";
import {
  buildPartnerRouting,
  computePriority,
  resolveSoftExitEnd,
  resolveSoftExitQ1,
  type RetraiteSoftExitReason,
} from "@/lib/retraite/routing";
import {
  getRetraiteVerdict,
  tierFromScore,
  type RetraiteVerdict,
} from "@/lib/retraite/verdicts";
import type { Priority } from "@/lib/shared/schemaTypes";
import { generateLeadId } from "@/lib/shared/leadId";
import {
  retryPendingWebhooks,
  sendSoftExitWebhook,
  sendWebhook,
} from "@/lib/shared/webhookClient";
import { buildRetraitePayload } from "@/lib/retraite/webhook";
import type { RetraiteScoreResult } from "@/lib/retraite/types";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props: Record<string, string> }
    ) => void;
  }
}

// Screen index layout:
//   0      — Intro (PrevoyanceLanding with onStart)
//   1..8   — Q1..Q8 (linear)
//   20     — Contact
//   21     — Loading
//   22     — Results
//   90     — SoftExit sans_activite
//   91     — SoftExit pre_retraite
//   92     — SoftExit jeune_horizon
const SCREEN_INTRO = 0;
const SCREEN_Q_START = 1; // Q1..Q8 map to screens 1..8
const SCREEN_Q_END = 8;
const SCREEN_CONTACT = 20;
const SCREEN_LOADING = 21;
const SCREEN_RESULTS = 22;
const SCREEN_SE_SANS_ACTIVITE = 90;
const SCREEN_SE_PRE_RETRAITE = 91;
const SCREEN_SE_JEUNE = 92;

function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}

function softExitScreen(reason: RetraiteSoftExitReason): number {
  switch (reason) {
    case "sans_activite":
      return SCREEN_SE_SANS_ACTIVITE;
    case "pre_retraite":
      return SCREEN_SE_PRE_RETRAITE;
    case "jeune_horizon":
      return SCREEN_SE_JEUNE;
  }
}

export default function RetraiteApp() {
  const [screen, setScreen] = useState(SCREEN_INTRO);
  const [screenKey, setScreenKey] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<RetraiteContactInfo>({
    prenom: "",
    email: "",
    telephone: "",
  });

  const [persona, setPersona] = useState<RetraitePersona | null>(null);
  const [score, setScore] = useState<RetraiteScoreResult | null>(null);
  const [verdict, setVerdict] = useState<RetraiteVerdict | null>(null);
  const [priority, setPriority] = useState<Priority>("warm");

  const sessionStartRef = useRef<number>(Date.now());
  const usedBackRef = useRef<boolean>(false);
  const leadIdRef = useRef<string>(generateLeadId());
  const directionRef = useRef<"forward" | "back">("forward");

  useEffect(() => {
    retryPendingWebhooks();
  }, []);

  const bumpScreen = (next: number) => {
    setScreen(next);
    setScreenKey((k) => k + 1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleAnswer = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const currentQuestionScreen = (idx: number) => {
    if (idx >= SCREEN_Q_START && idx <= SCREEN_Q_END) {
      return retraiteScreens[idx - SCREEN_Q_START];
    }
    return null;
  };

  const canProceedFromQuestion = (idx: number): boolean => {
    const qs = currentQuestionScreen(idx);
    if (!qs) return false;
    return qs.questions.every((q) => answers[q.id] !== undefined);
  };

  const prepareResults = (typed: RetraiteAnswers) => {
    const s = computeRetraiteScore(typed);
    const p = identifyPersona(typed);
    const t = tierFromScore(s);
    const v = getRetraiteVerdict(t);
    const pri = computePriority(p.code, s, typed.q4_revenu);

    setScore(s);
    setPersona(p);
    setVerdict(v);
    setPriority(pri);

    // Recompute founder routing for event tracking.
    trackEvent("Diagnostic Scored", {
      funnel: "retraite",
      persona: p.code,
      tier: t,
      priority: pri,
      rachat_years: String(s.annees_sans_3a),
    });
    // Guarantee partner routing is referenced (keeps import graph tight and
    // surfaces any build-time breakage of the builder). No side-effect.
    void buildPartnerRouting(p.code, pri);
  };

  const goNext = () => {
    directionRef.current = "forward";
    if (screen === SCREEN_INTRO) {
      trackEvent("Diagnostic Started", { funnel: "retraite" });
      bumpScreen(SCREEN_Q_START);
      return;
    }

    if (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) {
      // Q1 soft-exit check runs before advancing.
      if (screen === SCREEN_Q_START) {
        const reason = resolveSoftExitQ1(answers.q1_statut);
        if (reason) {
          trackEvent("Soft Exit Shown", {
            funnel: "retraite",
            reason,
          });
          bumpScreen(softExitScreen(reason));
          return;
        }
      }

      trackEvent("Question Screen Completed", {
        funnel: "retraite",
        screen: String(screen - SCREEN_Q_START + 1),
      });

      if (screen < SCREEN_Q_END) {
        bumpScreen(screen + 1);
        return;
      }

      // Q8 completed — check post-questions soft-exit branches, else compute
      // results and advance to Contact.
      const typed = answers as unknown as RetraiteAnswers;
      const endReason = resolveSoftExitEnd(typed);
      if (endReason) {
        trackEvent("Soft Exit Shown", {
          funnel: "retraite",
          reason: endReason,
        });
        // Fire-and-forget newsletter-adjacent soft-exit ping (no email yet —
        // the actual email capture happens on the soft-exit screen itself).
        void sendSoftExitWebhook({
          funnel_id: "retraite",
          soft_exit_reason: endReason,
          contact: { email: "" },
          consent: { rgpd_accepted: false, newsletter_optin: false },
          applicable_funnels:
            endReason === "pre_retraite" ? ["assurance"] : ["emploi", "logement"],
          submitted_at: new Date().toISOString(),
        }).catch(() => {});
        bumpScreen(softExitScreen(endReason));
        return;
      }

      prepareResults(typed);
      bumpScreen(SCREEN_CONTACT);
      return;
    }
  };

  const goBack = () => {
    usedBackRef.current = true;
    directionRef.current = "back";

    if (screen === SCREEN_Q_START) {
      bumpScreen(SCREEN_INTRO);
      return;
    }
    if (screen > SCREEN_Q_START && screen <= SCREEN_Q_END) {
      bumpScreen(screen - 1);
      return;
    }
    if (screen === SCREEN_CONTACT) {
      bumpScreen(SCREEN_Q_END);
      return;
    }
  };

  const handleSubmit = async (optIns: RetraiteOptIns) => {
    if (!persona || !verdict || !score) return;

    trackEvent("Contact Info Submitted", { funnel: "retraite" });
    bumpScreen(SCREEN_LOADING);

    trackEvent("Diagnostic Completed", {
      funnel: "retraite",
      persona: persona.code,
      priority,
    });

    try {
      const typed = answers as unknown as RetraiteAnswers;
      const payload = buildRetraitePayload({
        leadId: leadIdRef.current,
        contact: {
          prenom: contact.prenom,
          email: contact.email,
          telephone: contact.telephone || undefined,
        },
        consent: {
          rgpd_accepted: optIns.rgpd_accepted,
          partner_share_optin: optIns.partner_share_optin,
          newsletter_optin: optIns.newsletter_optin,
        },
        answers: typed,
        persona,
        score,
        verdict,
        priority,
        sessionStartTs: sessionStartRef.current,
        completionPath: usedBackRef.current ? "non_linear" : "linear",
      });
      await sendWebhook(payload, leadIdRef.current);
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("buildRetraitePayload failed", err);
      }
    }
  };

  // Progress bar: Q1..Q8 = 8 steps + contact = 9.
  const totalSteps = 9;
  const currentStep = (() => {
    if (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) {
      return screen - SCREEN_Q_START + 1;
    }
    if (screen === SCREEN_CONTACT) return totalSteps;
    return 0;
  })();

  const showProgress =
    (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) ||
    screen === SCREEN_CONTACT;

  const isQuestionScreen =
    screen >= SCREEN_Q_START && screen <= SCREEN_Q_END;

  return (
    <main
      className="min-h-screen"
      style={{
        "--funnel-accent": "#7C3AED",
        "--funnel-accent-soft": "#EDE9FE",
      } as React.CSSProperties}
    >
      {showProgress && (
        <RetraiteProgressBar current={currentStep} total={totalSteps} />
      )}

      {screen === SCREEN_INTRO ? (
        <div key={screenKey}>
          <PrevoyanceLanding onStart={() => goNext()} />
        </div>
      ) : (
        <div className="max-w-xl mx-auto px-6 py-4 md:py-14" key={screenKey}>
          {isQuestionScreen &&
            (() => {
              const qs = currentQuestionScreen(screen);
              if (!qs) return null;
              return (
                <QuestionScreen
                  screen={qs}
                  answers={answers}
                  onAnswer={handleAnswer}
                  onNext={goNext}
                  onBack={goBack}
                  canProceed={canProceedFromQuestion(screen)}
                  canGoBack={screen > SCREEN_Q_START}
                  direction={directionRef.current}
                />
              );
            })()}

          {screen === SCREEN_CONTACT && (
            <ContactScreen
              contact={contact}
              onChange={setContact}
              onSubmit={handleSubmit}
              onBack={goBack}
              phoneRequired={priority === "hot" || priority === "very_hot"}
            />
          )}

          {screen === SCREEN_LOADING && (
            <LoadingScreen
              onComplete={() => bumpScreen(SCREEN_RESULTS)}
            />
          )}

          {screen === SCREEN_RESULTS && persona && score && verdict && (
            <ResultsScreen
              prenom={contact.prenom}
              persona={persona}
              score={score}
              verdict={verdict}
              answers={answers as unknown as RetraiteAnswers}
            />
          )}

          {screen === SCREEN_SE_SANS_ACTIVITE && <SoftExitSansActivite />}
          {screen === SCREEN_SE_PRE_RETRAITE && <SoftExitPreRetraite />}
          {screen === SCREEN_SE_JEUNE && <SoftExitJeuneHorizon />}
        </div>
      )}
    </main>
  );
}
