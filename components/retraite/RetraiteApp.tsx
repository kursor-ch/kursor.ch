"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import RetraiteProgressBar from "./RetraiteProgressBar";
import PrevoyanceLanding from "@/components/prevoyance/PrevoyanceLanding";
import QuestionScreen from "./QuestionScreen";
import ContactScreen, {
  RetraiteContactInfo,
} from "./ContactScreen";
import ConsentScreen, { RetraiteOptIns } from "./ConsentScreen";
import LoadingScreen from "./LoadingScreen";
import ResultsScreen from "./ResultsScreen";
import {
  SoftExitSansActivite,
  SoftExitPreRetraite,
  SoftExitJeuneHorizon,
} from "./SoftExitScreens";
import {
  retraiteScreens,
  deriveQ1Statut,
} from "@/lib/retraite/questions";
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
import { pushEvent } from "@/lib/gtm";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props: Record<string, string> }
    ) => void;
  }
}

// Layout d'index d'écran (7 questions logiques en 8 écrans UI : Q1 statut +
// Q1 permis + Q2..Q6 + Q8) + contact + consent + loading + results + 3 soft-exits :
//   0      — Intro (PrevoyanceLanding avec onStart)
//   1..8   — S1..S8 (linéaire)
//   20     — Contact
//   21     — Consent
//   22     — Loading
//   23     — Results
//   90     — SoftExit sans_activite
//   91     — SoftExit pre_retraite
//   92     — SoftExit jeune_horizon
const SCREEN_INTRO = 0;
const SCREEN_Q_START = 1;
const SCREEN_Q_END = 8;
const SCREEN_CONTACT = 20;
const SCREEN_CONSENT = 21;
const SCREEN_LOADING = 22;
const SCREEN_RESULTS = 23;
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

// Strippe les clés UI-only (q1_statut_form, q1_permis_form) du payload typé
// et y substitue la valeur canonique q1_statut field map v2.
function derivePersistedAnswers(
  raw: Record<string, string>
): Record<string, string> {
  const { q1_statut_form, q1_permis_form, ...rest } = raw;
  const derived = deriveQ1Statut(q1_statut_form, q1_permis_form);
  if (derived) rest.q1_statut = derived;
  return rest;
}

// Pour les non-indépendants, q6_lpp = "independant_na" n'est pas affichable.
// Filet de sécurité si l'option est sélectionnée puis q1 change : on la coupe.
function sanitizeQ6Lpp(raw: Record<string, string>): Record<string, string> {
  if (
    raw.q6_lpp === "independant_na" &&
    raw.q1_statut_form !== "independant"
  ) {
    const { q6_lpp: _, ...rest } = raw;
    void _;
    return rest;
  }
  return raw;
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
  const funnelStartedRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
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
    const pri = computePriority(p.code, s, typed.q1_statut, typed.q4_revenu);

    setScore(s);
    setPersona(p);
    setVerdict(v);
    setPriority(pri);

    trackEvent("Diagnostic Scored", {
      funnel: "retraite",
      persona: p.code,
      tier: t,
      priority: pri,
      rachat_years: String(s.annees_sans_3a),
    });
    void buildPartnerRouting(p.code, pri);
  };

  const goNext = () => {
    directionRef.current = "forward";
    if (screen === SCREEN_INTRO) {
      trackEvent("Diagnostic Started", { funnel: "retraite" });
      if (!funnelStartedRef.current) {
        pushEvent("retraite_funnel_started");
        funnelStartedRef.current = true;
      }
      bumpScreen(SCREEN_Q_START);
      return;
    }

    if (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) {
      // S1 soft-exit check: sans_activite branches before advancing.
      if (screen === SCREEN_Q_START) {
        const reason = resolveSoftExitQ1(answers.q1_statut_form);
        if (reason) {
          trackEvent("Soft Exit Shown", { funnel: "retraite", reason });
          pushEvent("retraite_disqualified", { reason });
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

      // Dernier écran question (S8) atteint — dérive q1_statut, nettoie q6_lpp
      // selon le statut, vérifie les soft-exits post-questionnaire, sinon
      // calcule les résultats et avance vers Contact.
      const sanitized = sanitizeQ6Lpp(answers);
      const persisted = derivePersistedAnswers(sanitized);
      const typed = persisted as unknown as RetraiteAnswers;
      const endReason = resolveSoftExitEnd(typed);
      if (endReason) {
        trackEvent("Soft Exit Shown", {
          funnel: "retraite",
          reason: endReason,
        });
        pushEvent("retraite_disqualified", { reason: endReason });
        // Fire-and-forget newsletter-adjacent soft-exit ping.
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

      // Persist the derived q1_statut so the rest of the flow can read it.
      setAnswers(persisted);
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
    if (screen === SCREEN_CONSENT) {
      bumpScreen(SCREEN_CONTACT);
      return;
    }
  };

  const goToConsent = () => {
    directionRef.current = "forward";
    bumpScreen(SCREEN_CONSENT);
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
        contact: {
          prenom: contact.prenom,
          email: contact.email,
          telephone: contact.telephone || undefined,
        },
        consent: {
          rgpd_accepted: optIns.rgpd_accepted,
          partner_share_optin: optIns.partner_share_optin,
          newsletter_optin: optIns.newsletter_optin,
          resale_optin: optIns.resale_optin,
        },
        answers: typed,
        persona,
        score,
        verdict,
        priority,
        sessionStartTs: sessionStartRef.current,
        completionPath: usedBackRef.current ? "non_linear" : "linear",
      });
      // leadIdRef sert uniquement de clé locale pour le retry localStorage.
      // n8n assigne le lead_id canonique et le renvoie dans la réponse 200.
      const { ok, leadId: assignedLeadId } = await sendWebhook(
        payload,
        leadIdRef.current
      );
      if (assignedLeadId) {
        leadIdRef.current = assignedLeadId;
      }
      if (ok) {
        pushEvent("retraite_submitted", {
          persona: persona.code,
          priority,
        });
      } else {
        pushEvent("retraite_submit_failed", {
          message: "webhook returned non-200 or persisted to localStorage",
        });
      }
    } catch (err) {
      pushEvent("retraite_submit_failed", {
        message: err instanceof Error ? err.message : "unknown error",
      });
      if (process.env.NODE_ENV !== "production") {
        console.error("buildRetraitePayload failed", err);
      }
    }
  };

  // Barre de progression : 8 écrans questions + contact + consent = 10 étapes.
  const totalSteps = 10;
  const currentStep = (() => {
    if (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) {
      return screen - SCREEN_Q_START + 1;
    }
    if (screen === SCREEN_CONTACT) return totalSteps - 1;
    if (screen === SCREEN_CONSENT) return totalSteps;
    return 0;
  })();

  const showProgress =
    (screen >= SCREEN_Q_START && screen <= SCREEN_Q_END) ||
    screen === SCREEN_CONTACT ||
    screen === SCREEN_CONSENT;

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
              onContinue={goToConsent}
              onBack={goBack}
              phoneRequired={priority === "hot" || priority === "very_hot"}
            />
          )}

          {screen === SCREEN_CONSENT && (
            <ConsentScreen onSubmit={handleSubmit} onBack={goBack} />
          )}

          {screen === SCREEN_LOADING && (
            <LoadingScreen onComplete={() => bumpScreen(SCREEN_RESULTS)} />
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
