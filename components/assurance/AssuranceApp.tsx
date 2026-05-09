"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AssuranceProgressBar from "./AssuranceProgressBar";
import AssuranceLanding from "./AssuranceLanding";
import QuestionScreen from "./QuestionScreen";
import ContactScreen, {
  AssuranceContactInfo,
} from "./ContactScreen";
import ConsentScreen, { AssuranceOptIns } from "./ConsentScreen";
import LoadingScreen from "./LoadingScreen";
import ResultsScreenResident from "./ResultsScreenResident";
import ResultsScreenFrontalier from "./ResultsScreenFrontalier";
import SoftExitSansActivite from "./SoftExitSansActivite";
import {
  assuranceFrontalierScreens,
  assuranceQ1,
  assuranceResidentScreens,
} from "@/lib/assurance/questions";
import type { AssuranceQuestionScreen } from "@/lib/assurance/questions";
import type {
  AssuranceAnswersFrontalier,
  AssuranceAnswersResident,
  AssurancePersona,
  FrontalierComparatif,
  Q8Complementaire,
  SurcoutResult,
  TrouDeCouverture,
} from "@/lib/assurance/types";
import { computeSurcout } from "@/lib/assurance/scoring";
import { computeFrontalierComparatif } from "@/lib/assurance/scoring-frontalier";
import {
  detectFrontalierTrous,
  detectResidentTrous,
} from "@/lib/assurance/risks";
import {
  identifyPersonaFrontalier,
  identifyPersonaResident,
} from "@/lib/assurance/personas";
import {
  computePriority,
  resolveSoftExit,
} from "@/lib/assurance/routing";
import {
  getAssuranceVerdict,
  tierFromSurcout,
  type AssuranceVerdict,
} from "@/lib/assurance/verdicts";
import type { Priority } from "@/lib/shared/schemaTypes";
import { generateLeadId } from "@/lib/shared/leadId";
import {
  retryPendingWebhooks,
  sendSoftExitWebhook,
  sendWebhook,
} from "@/lib/shared/webhookClient";
import {
  buildAssurancePayloadFrontalier,
  buildAssurancePayloadResident,
} from "@/lib/assurance/webhook";
import { pushEvent } from "@/lib/gtm";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props: Record<string, string> }
    ) => void;
  }
}

type Branch = "resident" | "frontalier";

// Screen index layout (post-2026-05-09 refactor):
//   0           — Intro (AssuranceLanding with onStart)
//   1           — Q1 (shared filter)
//   2..7        — Résident screens (6 total: S2 canton+foyer merged, S3 caisse,
//                 S4 franchise, S5 modèle, S6 IJM, S7 complémentaires)
//   11..16      — Frontalier QF1 → QF6
//   20          — Contact
//   21          — Consent (NEW)
//   22          — Loading
//   23          — Results
//   90          — SoftExitSansActivite
const SCREEN_INTRO = 0;
const SCREEN_Q1 = 1;
const SCREEN_RESIDENT_START = 2; // → 7 (6 screens)
const SCREEN_RESIDENT_LAST = SCREEN_RESIDENT_START + assuranceResidentScreens.length - 1;
const SCREEN_FRONTALIER_START = 11; // → 16 (6 screens)
const SCREEN_FRONTALIER_LAST = SCREEN_FRONTALIER_START + assuranceFrontalierScreens.length - 1;
const SCREEN_CONTACT = 20;
const SCREEN_CONSENT = 21;
const SCREEN_LOADING = 22;
const SCREEN_RESULTS = 23;
const SCREEN_SOFTEXIT_SANS_ACTIVITE = 90;

function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}

export default function AssuranceApp() {
  const [screen, setScreen] = useState(SCREEN_INTRO);
  const [screenKey, setScreenKey] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // q8_complementaires is the only multi-select question — stored separately
  // as an array. Flattened to a comma-separated string at payload-build time
  // so the webhook contract `answers: Record<string, string>` stays satisfied.
  const [multiAnswers, setMultiAnswers] = useState<Record<string, string[]>>({});
  const [branch, setBranch] = useState<Branch | null>(null);
  const [contact, setContact] = useState<AssuranceContactInfo>({
    prenom: "",
    email: "",
    telephone: "",
  });

  const [persona, setPersona] = useState<AssurancePersona | null>(null);
  const [priority, setPriority] = useState<Priority>("warm");
  const [surcout, setSurcout] = useState<SurcoutResult | null>(null);
  const [trous, setTrous] = useState<TrouDeCouverture[]>([]);
  const [comparatif, setComparatif] = useState<FrontalierComparatif | null>(
    null
  );
  const [verdict, setVerdict] = useState<AssuranceVerdict | null>(null);

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

  const handleMultiAnswer = useCallback(
    (questionId: string, values: string[]) => {
      setMultiAnswers((prev) => ({ ...prev, [questionId]: values }));
    },
    []
  );

  const currentQuestionScreen = (
    idx: number
  ): AssuranceQuestionScreen | null => {
    if (idx === SCREEN_Q1) return assuranceQ1;
    if (idx >= SCREEN_RESIDENT_START && idx <= SCREEN_RESIDENT_LAST) {
      return assuranceResidentScreens[idx - SCREEN_RESIDENT_START];
    }
    if (idx >= SCREEN_FRONTALIER_START && idx <= SCREEN_FRONTALIER_LAST) {
      return assuranceFrontalierScreens[idx - SCREEN_FRONTALIER_START];
    }
    return null;
  };

  const canProceedFromQuestion = (idx: number): boolean => {
    const qs = currentQuestionScreen(idx);
    if (!qs) return false;
    return qs.questions.every((q) => {
      if (q.multiSelect) {
        return (multiAnswers[q.id] || []).length >= 1;
      }
      return answers[q.id] !== undefined;
    });
  };

  // Background analytics ping for the sans_activite branch — fires only if
  // the user has already entered an email earlier (rare). The user-initiated
  // capture in SoftExitSansActivite carries the actual newsletter opt-in.
  const pingSoftExit = async () => {
    if (!contact.email) return;
    await sendSoftExitWebhook({
      funnel_id: "assurance",
      soft_exit_reason: "sans_activite",
      contact: { email: contact.email },
      consent: { rgpd_accepted: true, newsletter_optin: false },
      applicable_funnels: ["retraite"],
      submitted_at: new Date().toISOString(),
    });
  };

  const goNext = () => {
    directionRef.current = "forward";
    if (screen === SCREEN_INTRO) {
      trackEvent("Diagnostic Started", { funnel: "assurance" });
      if (!funnelStartedRef.current) {
        pushEvent("assurance_funnel_started");
        funnelStartedRef.current = true;
      }
      bumpScreen(SCREEN_Q1);
      return;
    }

    if (screen === SCREEN_Q1) {
      const q1 = answers.q1_statut;
      if (!q1) return;

      const softExit = resolveSoftExit(q1);
      if (softExit === "sans_activite") {
        trackEvent("Soft Exit Shown", {
          funnel: "assurance",
          reason: "sans_activite",
        });
        pushEvent("assurance_disqualified", { reason: "sans_activite" });
        void pingSoftExit();
        bumpScreen(SCREEN_SOFTEXIT_SANS_ACTIVITE);
        return;
      }

      if (q1 === "frontalier") {
        setBranch("frontalier");
        pushEvent("assurance_frontalier_branch");
        bumpScreen(SCREEN_FRONTALIER_START);
      } else {
        setBranch("resident");
        bumpScreen(SCREEN_RESIDENT_START);
      }
      return;
    }

    // Résident flow
    if (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_LAST) {
      trackEvent("Question Screen Completed", {
        funnel: "assurance",
        branch: "resident",
        screen: String(screen - SCREEN_RESIDENT_START + 2),
      });
      if (screen < SCREEN_RESIDENT_LAST) {
        bumpScreen(screen + 1);
      } else {
        prepareResidentResults();
        bumpScreen(SCREEN_CONTACT);
      }
      return;
    }

    // Frontalier flow
    if (screen >= SCREEN_FRONTALIER_START && screen <= SCREEN_FRONTALIER_LAST) {
      trackEvent("Question Screen Completed", {
        funnel: "assurance",
        branch: "frontalier",
        screen: String(screen - SCREEN_FRONTALIER_START + 1),
      });
      if (screen < SCREEN_FRONTALIER_LAST) {
        bumpScreen(screen + 1);
      } else {
        prepareFrontalierResults();
        bumpScreen(SCREEN_CONTACT);
      }
      return;
    }
  };

  const buildResidentAnswers = (): AssuranceAnswersResident => {
    const q8 = (multiAnswers.q8_complementaires || []) as Q8Complementaire[];
    return {
      ...(answers as unknown as AssuranceAnswersResident),
      q8_complementaires: q8,
    };
  };

  const prepareResidentResults = () => {
    const typed = buildResidentAnswers();
    const s = computeSurcout(typed);
    const t = detectResidentTrous(typed);
    const p = identifyPersonaResident(typed);
    const criticalCount = t.filter((x) => x.severity === "CRITIQUE").length;
    const tier = tierFromSurcout(s, criticalCount);
    const v = getAssuranceVerdict(tier);

    setSurcout(s);
    setTrous(t);
    setPersona(p);
    setVerdict(v);
    setPriority(computePriority(p.code, s, t));
  };

  const prepareFrontalierResults = () => {
    const typed = answers as unknown as AssuranceAnswersFrontalier;
    const c = computeFrontalierComparatif(typed);
    const t = detectFrontalierTrous(typed);
    const p = identifyPersonaFrontalier(typed);
    const deltaAnnuel = Math.abs(c.cout_lamal_annuel - c.cout_cmu_projete);
    const criticalCount = t.filter((x) => x.severity === "CRITIQUE").length;
    const syntheticSurcout: SurcoutResult = {
      total_annuel: deltaAnnuel,
      total_5ans: deltaAnnuel * 5,
      breakdown: {
        franchise: 0,
        modele: 0,
        inertie: 0,
        doublons: 0,
        complementaires: 0,
      },
    };
    const tier = c.piege_n2
      ? tierFromSurcout(
          { ...syntheticSurcout, total_annuel: Math.max(deltaAnnuel, 2500) },
          criticalCount
        )
      : tierFromSurcout(syntheticSurcout, criticalCount);
    const v = getAssuranceVerdict(tier);

    setComparatif(c);
    setTrous(t);
    setPersona(p);
    setVerdict(v);
    setPriority(computePriority(p.code, syntheticSurcout, t));
  };

  const goBack = () => {
    usedBackRef.current = true;
    directionRef.current = "back";

    if (screen === SCREEN_Q1) {
      bumpScreen(SCREEN_INTRO);
      return;
    }
    if (screen > SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_LAST) {
      bumpScreen(screen - 1);
      return;
    }
    if (screen === SCREEN_RESIDENT_START) {
      bumpScreen(SCREEN_Q1);
      return;
    }
    if (screen > SCREEN_FRONTALIER_START && screen <= SCREEN_FRONTALIER_LAST) {
      bumpScreen(screen - 1);
      return;
    }
    if (screen === SCREEN_FRONTALIER_START) {
      bumpScreen(SCREEN_Q1);
      return;
    }
    if (screen === SCREEN_CONTACT) {
      if (branch === "resident") bumpScreen(SCREEN_RESIDENT_LAST);
      else if (branch === "frontalier") bumpScreen(SCREEN_FRONTALIER_LAST);
      else bumpScreen(SCREEN_Q1);
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

  const handleSubmit = async (optIns: AssuranceOptIns) => {
    if (!persona || !verdict || !branch) return;

    trackEvent("Contact Info Submitted", { funnel: "assurance" });
    bumpScreen(SCREEN_LOADING);

    trackEvent("Diagnostic Completed", {
      funnel: "assurance",
      branch,
      persona: persona.code,
      priority,
    });

    try {
      const commonContact = {
        prenom: contact.prenom,
        email: contact.email,
        telephone: contact.telephone || undefined,
      };
      const commonConsent = {
        rgpd_accepted: optIns.rgpd_accepted,
        partner_share_optin: optIns.partner_share_optin,
        newsletter_optin: optIns.newsletter_optin,
      };
      const completionPath: "linear" | "non_linear" = usedBackRef.current
        ? "non_linear"
        : "linear";

      let ok = false;

      if (branch === "resident" && surcout) {
        const payload = buildAssurancePayloadResident({
          leadId: leadIdRef.current,
          contact: commonContact,
          consent: commonConsent,
          answers: buildResidentAnswers(),
          persona,
          surcout,
          trous,
          verdict,
          priority,
          sessionStartTs: sessionStartRef.current,
          completionPath,
        });
        // q8_complementaires array → comma-separated string conversion
        // happens inside buildAssurancePayloadResident so the webhook
        // contract stays Record<string, string>.
        ok = await sendWebhook(payload, leadIdRef.current);
      } else if (branch === "frontalier" && comparatif) {
        const payload = buildAssurancePayloadFrontalier({
          leadId: leadIdRef.current,
          contact: commonContact,
          consent: commonConsent,
          answers: answers as unknown as AssuranceAnswersFrontalier,
          persona,
          comparatif,
          trous,
          verdict,
          priority,
          sessionStartTs: sessionStartRef.current,
          completionPath,
        });
        ok = await sendWebhook(payload, leadIdRef.current);
      }

      if (ok) {
        pushEvent("assurance_submitted", {
          branch,
          persona: persona.code,
          priority,
        });
      } else {
        pushEvent("assurance_submit_failed", {
          message: "webhook returned non-200 or persisted to localStorage",
        });
      }
    } catch (err) {
      pushEvent("assurance_submit_failed", {
        message: err instanceof Error ? err.message : "unknown error",
      });
      if (process.env.NODE_ENV !== "production") {
        console.error("buildAssurancePayload failed", err);
      }
    }
  };

  // Progress bar: Q1 (shared) + branch questions + Contact + Consent.
  const branchQuestionCount =
    branch === "resident"
      ? assuranceResidentScreens.length
      : branch === "frontalier"
      ? assuranceFrontalierScreens.length
      : 0;
  const totalSteps = 1 + branchQuestionCount + 2; // Q1 + branch + Contact + Consent

  const currentStep = (() => {
    if (screen === SCREEN_Q1) return 1;
    if (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_LAST)
      return 1 + (screen - SCREEN_RESIDENT_START + 1);
    if (screen >= SCREEN_FRONTALIER_START && screen <= SCREEN_FRONTALIER_LAST)
      return 1 + (screen - SCREEN_FRONTALIER_START + 1);
    if (screen === SCREEN_CONTACT) return totalSteps - 1;
    if (screen === SCREEN_CONSENT) return totalSteps;
    return 0;
  })();

  const showProgress =
    screen === SCREEN_Q1 ||
    (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_LAST) ||
    (screen >= SCREEN_FRONTALIER_START && screen <= SCREEN_FRONTALIER_LAST) ||
    screen === SCREEN_CONTACT ||
    screen === SCREEN_CONSENT;

  const isQuestionScreen =
    screen === SCREEN_Q1 ||
    (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_LAST) ||
    (screen >= SCREEN_FRONTALIER_START && screen <= SCREEN_FRONTALIER_LAST);

  return (
    <main
      className="min-h-screen"
      style={{
        "--funnel-accent": "#86A789",
        "--funnel-accent-soft": "#E6EFE6",
      } as React.CSSProperties}
    >
      {showProgress && (
        <AssuranceProgressBar current={currentStep} total={totalSteps} />
      )}

      {screen === SCREEN_INTRO ? (
        <div key={screenKey}>
          <AssuranceLanding onStart={() => goNext()} />
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
                  multiAnswers={multiAnswers}
                  onAnswer={handleAnswer}
                  onMultiAnswer={handleMultiAnswer}
                  onNext={goNext}
                  onBack={goBack}
                  canProceed={canProceedFromQuestion(screen)}
                  canGoBack={screen > SCREEN_Q1}
                  direction={directionRef.current}
                />
              );
            })()}

          {screen === SCREEN_CONTACT && branch && (
            <ContactScreen
              contact={contact}
              onChange={setContact}
              onContinue={goToConsent}
              onBack={goBack}
            />
          )}

          {screen === SCREEN_CONSENT && (
            <ConsentScreen onSubmit={handleSubmit} onBack={goBack} />
          )}

          {screen === SCREEN_LOADING && branch && (
            <LoadingScreen
              branch={branch}
              onComplete={() => bumpScreen(SCREEN_RESULTS)}
            />
          )}

          {screen === SCREEN_RESULTS &&
            branch === "resident" &&
            surcout &&
            persona &&
            verdict && (
              <ResultsScreenResident
                prenom={contact.prenom}
                persona={persona}
                surcout={surcout}
                trous={trous}
                verdict={verdict}
                answers={buildResidentAnswers()}
              />
            )}

          {screen === SCREEN_RESULTS &&
            branch === "frontalier" &&
            comparatif &&
            persona &&
            verdict && (
              <ResultsScreenFrontalier
                prenom={contact.prenom}
                persona={persona}
                comparatif={comparatif}
                trous={trous}
                verdict={verdict}
              />
            )}

          {screen === SCREEN_SOFTEXIT_SANS_ACTIVITE && <SoftExitSansActivite />}
        </div>
      )}
    </main>
  );
}
