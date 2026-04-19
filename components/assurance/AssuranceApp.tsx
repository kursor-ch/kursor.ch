"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AssuranceProgressBar from "./AssuranceProgressBar";
import AssuranceLanding from "./AssuranceLanding";
import QuestionScreen from "./QuestionScreen";
import ContactScreen, {
  AssuranceContactInfo,
  AssuranceOptIns,
} from "./ContactScreen";
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

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props: Record<string, string> }
    ) => void;
  }
}

type Branch = "resident" | "frontalier";

// Screen index layout:
//   0           — Intro (AssuranceLanding with onStart)
//   1           — Q1 (shared filter)
//   2..9        — Résident Q2 → Q9 (screen i = résident index i-2)
//   11..16      — Frontalier QF1 → QF6 (screen i = frontalier index i-11)
//   20          — Contact
//   21          — Loading
//   22          — Results
//   90          — SoftExitSansActivite
const SCREEN_INTRO = 0;
const SCREEN_Q1 = 1;
const SCREEN_RESIDENT_START = 2; // → 9 (Q2..Q9)
const SCREEN_FRONTALIER_START = 11; // → 16 (QF1..QF6)
const SCREEN_CONTACT = 20;
const SCREEN_LOADING = 21;
const SCREEN_RESULTS = 22;
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

  // Resolve the current question screen (Q1, résident, or frontalier) from
  // the screen index. Returns null for non-question screens.
  const currentQuestionScreen = (
    idx: number
  ): AssuranceQuestionScreen | null => {
    if (idx === SCREEN_Q1) return assuranceQ1;
    if (idx >= SCREEN_RESIDENT_START && idx <= SCREEN_RESIDENT_START + 7) {
      return assuranceResidentScreens[idx - SCREEN_RESIDENT_START];
    }
    if (
      idx >= SCREEN_FRONTALIER_START &&
      idx <= SCREEN_FRONTALIER_START + 5
    ) {
      return assuranceFrontalierScreens[idx - SCREEN_FRONTALIER_START];
    }
    return null;
  };

  const canProceedFromQuestion = (idx: number): boolean => {
    const qs = currentQuestionScreen(idx);
    if (!qs) return false;
    return qs.questions.every((q) => answers[q.id] !== undefined);
  };

  // Submit a background soft-exit webhook — email isn't collected here (user
  // hasn't given one yet). The actual newsletter capture lives on
  // SoftExitSansActivite. This ping is a no-op unless the env var is set;
  // it signals "sans_activite reached" for analytics purposes. Skipping to
  // keep behavior conservative — the user-initiated soft-exit submit in
  // SoftExitSansActivite carries the email/consent.
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
    if (screen === SCREEN_INTRO) {
      trackEvent("Diagnostic Started", { funnel: "assurance" });
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
        void pingSoftExit();
        bumpScreen(SCREEN_SOFTEXIT_SANS_ACTIVITE);
        return;
      }

      if (q1 === "frontalier") {
        setBranch("frontalier");
        bumpScreen(SCREEN_FRONTALIER_START);
      } else {
        setBranch("resident");
        bumpScreen(SCREEN_RESIDENT_START);
      }
      return;
    }

    // Résident flow: Q2..Q9 → Contact
    if (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_START + 7) {
      trackEvent("Question Screen Completed", {
        funnel: "assurance",
        branch: "resident",
        screen: String(screen - SCREEN_RESIDENT_START + 2),
      });
      if (screen < SCREEN_RESIDENT_START + 7) {
        bumpScreen(screen + 1);
      } else {
        // Q9 completed — compute and advance to Contact
        prepareResidentResults();
        bumpScreen(SCREEN_CONTACT);
      }
      return;
    }

    // Frontalier flow: QF1..QF6 → Contact
    if (
      screen >= SCREEN_FRONTALIER_START &&
      screen <= SCREEN_FRONTALIER_START + 5
    ) {
      trackEvent("Question Screen Completed", {
        funnel: "assurance",
        branch: "frontalier",
        screen: String(screen - SCREEN_FRONTALIER_START + 1),
      });
      if (screen < SCREEN_FRONTALIER_START + 5) {
        bumpScreen(screen + 1);
      } else {
        prepareFrontalierResults();
        bumpScreen(SCREEN_CONTACT);
      }
      return;
    }
  };

  const prepareResidentResults = () => {
    const typed = answers as unknown as AssuranceAnswersResident;
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
    // Frontalier tier: always at least "surcouts_significatifs" if piège N-2,
    // else compute from delta.
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

    if (screen === SCREEN_Q1) {
      bumpScreen(SCREEN_INTRO);
      return;
    }
    if (screen > SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_START + 7) {
      bumpScreen(screen - 1);
      return;
    }
    if (screen === SCREEN_RESIDENT_START) {
      bumpScreen(SCREEN_Q1);
      return;
    }
    if (
      screen > SCREEN_FRONTALIER_START &&
      screen <= SCREEN_FRONTALIER_START + 5
    ) {
      bumpScreen(screen - 1);
      return;
    }
    if (screen === SCREEN_FRONTALIER_START) {
      bumpScreen(SCREEN_Q1);
      return;
    }
    if (screen === SCREEN_CONTACT) {
      if (branch === "resident") bumpScreen(SCREEN_RESIDENT_START + 7);
      else if (branch === "frontalier")
        bumpScreen(SCREEN_FRONTALIER_START + 5);
      else bumpScreen(SCREEN_Q1);
      return;
    }
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

      if (branch === "resident" && surcout) {
        const payload = buildAssurancePayloadResident({
          leadId: leadIdRef.current,
          contact: commonContact,
          consent: commonConsent,
          answers: answers as unknown as AssuranceAnswersResident,
          persona,
          surcout,
          trous,
          verdict,
          priority,
          sessionStartTs: sessionStartRef.current,
          completionPath,
        });
        await sendWebhook(payload, leadIdRef.current);
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
        await sendWebhook(payload, leadIdRef.current);
      }
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("buildAssurancePayload failed", err);
      }
    }
  };

  // Progress bar math: Q1 + branch questions + Contact.
  const totalSteps =
    (branch === "resident" ? 8 : branch === "frontalier" ? 6 : 0) + 2;
  const currentStep = (() => {
    if (screen === SCREEN_Q1) return 1;
    if (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_START + 7)
      return 1 + (screen - SCREEN_RESIDENT_START + 1);
    if (
      screen >= SCREEN_FRONTALIER_START &&
      screen <= SCREEN_FRONTALIER_START + 5
    )
      return 1 + (screen - SCREEN_FRONTALIER_START + 1);
    if (screen === SCREEN_CONTACT) return totalSteps;
    return 0;
  })();

  const showProgress =
    screen === SCREEN_Q1 ||
    (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_START + 7) ||
    (screen >= SCREEN_FRONTALIER_START &&
      screen <= SCREEN_FRONTALIER_START + 5) ||
    screen === SCREEN_CONTACT;

  const isQuestionScreen =
    screen === SCREEN_Q1 ||
    (screen >= SCREEN_RESIDENT_START && screen <= SCREEN_RESIDENT_START + 7) ||
    (screen >= SCREEN_FRONTALIER_START &&
      screen <= SCREEN_FRONTALIER_START + 5);

  return (
    <main className="min-h-screen">
      {showProgress && (
        <AssuranceProgressBar current={currentStep} total={totalSteps} />
      )}

      {screen === SCREEN_INTRO ? (
        <div key={screenKey}>
          <AssuranceLanding onStart={() => goNext()} />
        </div>
      ) : (
        <div
          className="max-w-xl mx-auto px-6 py-4 md:py-14"
          key={screenKey}
        >
          {isQuestionScreen && (() => {
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
                canGoBack={screen > SCREEN_Q1}
              />
            );
          })()}

          {screen === SCREEN_CONTACT && branch && (
            <ContactScreen
              contact={contact}
              onChange={setContact}
              onSubmit={handleSubmit}
              onBack={goBack}
              phoneRequired={priority === "hot" || priority === "very_hot"}
              branch={branch}
            />
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
                answers={answers as unknown as AssuranceAnswersResident}
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
