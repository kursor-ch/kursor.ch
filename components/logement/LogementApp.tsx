"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ProgressBar from "@/components/ui/ProgressBar";
import IntroScreen from "@/components/logement/IntroScreen";
import QuestionScreen from "@/components/logement/QuestionScreen";
import ContactScreen from "@/components/logement/ContactScreen";
import type {
  LogementContactInfo,
  LogementOptIns,
} from "@/components/logement/ContactScreen";
import LoadingScreen from "@/components/logement/LoadingScreen";
import ResultsScreen from "@/components/logement/ResultsScreen";
import SoftExitFrontalier from "@/components/logement/SoftExitFrontalier";
import SoftExitExploration from "@/components/logement/SoftExitExploration";
import SoftExitLowBudget from "@/components/logement/SoftExitLowBudget";
import {
  logementQuestionScreens,
  countActiveScreens,
  nextQuestionIndex,
  prevQuestionIndex,
} from "@/lib/logement/questions";
import type { LogementAnswers, LogementScoreResult } from "@/lib/logement/scoring";
import { computeLogementScore } from "@/lib/logement/scoring";
import type { LogementVerdict } from "@/lib/logement/verdicts";
import { getLogementVerdict } from "@/lib/logement/verdicts";
import type { LogementPersona } from "@/lib/logement/personas";
import { resolvePersona } from "@/lib/logement/personas";
import { computePriority, resolveSoftExit } from "@/lib/logement/routing";
import type { Priority } from "@/lib/shared/schemaTypes";
import { generateLeadId } from "@/lib/shared/leadId";
import {
  retryPendingWebhooks,
  sendWebhook,
} from "@/lib/shared/webhookClient";
import { buildLogementPayload } from "@/lib/logement/webhook";
import {
  LOGEMENT_Q1_STORAGE_KEY,
  isValidQ1OptionKey,
} from "@/components/logement/InteractiveTeaserCard";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props: Record<string, string> }
    ) => void;
  }
}

// Screen index layout:
//   0            — Intro
//   1..N         — Question screens (offset-by-1 into logementQuestionScreens,
//                  respecting Q1bis skipWhen)
//   QUESTION_END — Contact form  (computed dynamically as N+1)
//   LOADING      — QUESTION_END + 1
//   RESULTS      — QUESTION_END + 2
//   97           — SoftExitFrontalier
//   98           — SoftExitExploration
//   99           — SoftExitLowBudget
//
// Using large sentinel indices for soft-exits keeps the "linear advance"
// logic simple — if screen < 90 we're in the main flow, otherwise terminal.
const SOFT_EXIT_FRONTALIER = 97;
const SOFT_EXIT_EXPLORATION = 98;
const SOFT_EXIT_LOW_BUDGET = 99;

// Maximum possible question index in the flow (7 question screens → 1..7).
const MAX_QUESTION_INDEX = logementQuestionScreens.length;
const CONTACT_SCREEN = MAX_QUESTION_INDEX + 1;
const LOADING_SCREEN = MAX_QUESTION_INDEX + 2;
const RESULTS_SCREEN = MAX_QUESTION_INDEX + 3;

function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}

export default function LogementApp() {
  const [screen, setScreen] = useState(0);
  const [screenKey, setScreenKey] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<LogementContactInfo>({
    prenom: "",
    email: "",
    telephone: "",
  });
  const [scoreResult, setScoreResult] = useState<LogementScoreResult | null>(
    null
  );
  const [verdict, setVerdict] = useState<LogementVerdict | null>(null);
  const [persona, setPersona] = useState<LogementPersona | null>(null);
  const [priority, setPriority] = useState<Priority>("warm");

  const sessionStartRef = useRef<number>(Date.now());
  const usedBackRef = useRef<boolean>(false);
  const leadIdRef = useRef<string>(generateLeadId());
  const directionRef = useRef<"forward" | "back">("forward");

  useEffect(() => {
    retryPendingWebhooks();
  }, []);

  // Q1 pre-fill hydration on mount.
  //
  // Sources (in priority order):
  //   1) URL param  ?q1=<key>     — used by fresh teaser clicks and shareable
  //                                  deep links (cross-device, social share).
  //   2) localStorage              — used when the user returns after a partial
  //                                  session (resume path; "Reprendre le
  //                                  diagnostic" in the teaser).
  //
  // Both sources are validated against the canonical Q1 option whitelist
  // (`isValidQ1OptionKey`) to prevent blind trust of URL input.
  //
  // If the value came from a URL param, it is mirrored into localStorage so
  // subsequent same-device visits can show the "Reprendre le diagnostic"
  // resume UI on the teaser.
  //
  // After seeding the answer, soft-exit resolution runs — frontalier and
  // futur_resident_exploration route directly to their soft-exit screens
  // (preserves qualification logic). Otherwise we advance to the first
  // non-skipped active question after Q1 (respects Q1bis skipWhen, which
  // means Persona C lands on Q1bis, not Q2).
  //
  // localStorage is intentionally NOT cleared here — it is cleared only on
  // webhook submission success (`handleSubmit`) or the teaser's "Recommencer"
  // button. This preserves the resume-after-bounce feature.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const q1FromUrl = new URLSearchParams(window.location.search).get("q1");
    const q1FromStorage = (() => {
      try {
        return localStorage.getItem(LOGEMENT_Q1_STORAGE_KEY);
      } catch {
        return null;
      }
    })();
    const prefill = q1FromUrl ?? q1FromStorage;

    // Always strip ?q1= from the URL on mount — even if invalid — so a bad
    // param doesn't persist in the address bar.
    if (q1FromUrl) {
      const url = new URL(window.location.href);
      url.searchParams.delete("q1");
      url.searchParams.delete("resume");
      window.history.replaceState({}, "", url.pathname + url.search);
    }

    if (!prefill || !isValidQ1OptionKey(prefill)) return;

    // Mirror URL-param pre-fills into localStorage so cross-device shares
    // benefit from the resume UI on subsequent same-device visits.
    if (q1FromUrl) {
      try {
        localStorage.setItem(LOGEMENT_Q1_STORAGE_KEY, q1FromUrl);
      } catch {
        /* no-op */
      }
    }

    setAnswers((prev) => ({ ...prev, q1_statut: prefill }));

    const seededAnswers = { q1_statut: prefill } as Partial<LogementAnswers>;
    const softExit = resolveSoftExit(seededAnswers);

    if (softExit === "frontalier") {
      trackEvent("Soft Exit Shown", {
        funnel: "logement",
        reason: softExit,
        source: "prefill",
      });
      bumpScreen(SOFT_EXIT_FRONTALIER);
      return;
    }
    if (softExit === "exploration") {
      trackEvent("Soft Exit Shown", {
        funnel: "logement",
        reason: softExit,
        source: "prefill",
      });
      bumpScreen(SOFT_EXIT_EXPLORATION);
      return;
    }
    if (softExit === "low_budget") {
      trackEvent("Soft Exit Shown", {
        funnel: "logement",
        reason: softExit,
        source: "prefill",
      });
      bumpScreen(SOFT_EXIT_LOW_BUDGET);
      return;
    }

    // Advance to the first non-skipped active question after Q1 (e.g. Q1bis
    // for Persona C, Q2 otherwise).
    trackEvent("Diagnostic Started", {
      funnel: "logement",
      source: "prefill",
    });
    const nextIdx = nextQuestionIndex(0, { q1_statut: prefill });
    bumpScreen(nextIdx === -1 ? CONTACT_SCREEN : nextIdx + 1);
  }, []);

  const handleAnswer = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  // Is the current question screen answered?
  const canProceedFromQuestion = (screenIndex: number): boolean => {
    const qs = logementQuestionScreens[screenIndex - 1];
    if (!qs) return false;
    return qs.questions.every((q) => answers[q.id] !== undefined);
  };

  const bumpScreen = (next: number) => {
    setScreen(next);
    setScreenKey((k) => k + 1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const goNext = () => {
    directionRef.current = "forward";
    if (screen === 0) {
      trackEvent("Diagnostic Started", { funnel: "logement" });
      // First question index (0) → screen index 1
      bumpScreen(1);
      return;
    }

    if (screen >= 1 && screen <= MAX_QUESTION_INDEX) {
      // Check for soft-exit conditions with current answers.
      const softExit = resolveSoftExit(answers as Partial<LogementAnswers>);
      if (softExit) {
        trackEvent("Soft Exit Shown", {
          funnel: "logement",
          reason: softExit,
        });
        if (softExit === "frontalier") bumpScreen(SOFT_EXIT_FRONTALIER);
        else if (softExit === "exploration") bumpScreen(SOFT_EXIT_EXPLORATION);
        else if (softExit === "low_budget") bumpScreen(SOFT_EXIT_LOW_BUDGET);
        return;
      }

      trackEvent("Question Screen Completed", {
        funnel: "logement",
        screen: String(screen),
      });

      const nextIdx = nextQuestionIndex(screen - 1, answers);
      if (nextIdx === -1) {
        // No more questions → pre-compute persona/score/priority so the
        // ContactScreen can gate phone requirement correctly.
        const typedAnswers = answers as unknown as LogementAnswers;
        const resolvedPersona = resolvePersona(typedAnswers);
        if (resolvedPersona) {
          const result = computeLogementScore(
            typedAnswers,
            resolvedPersona.code
          );
          setPersona(resolvedPersona);
          setScoreResult(result);
          setVerdict(getLogementVerdict(result.final));
          setPriority(computePriority(resolvedPersona.code, result.final));
        }
        bumpScreen(CONTACT_SCREEN);
      } else {
        bumpScreen(nextIdx + 1);
      }
    }
  };

  const goBack = () => {
    usedBackRef.current = true;
    directionRef.current = "back";

    if (screen >= 1 && screen <= MAX_QUESTION_INDEX) {
      const prevIdx = prevQuestionIndex(screen - 1, answers);
      bumpScreen(prevIdx === -1 ? 0 : prevIdx + 1);
      return;
    }

    if (screen === CONTACT_SCREEN) {
      // Last active question
      const last = prevQuestionIndex(MAX_QUESTION_INDEX, answers);
      bumpScreen(last === -1 ? 0 : last + 1);
      return;
    }

    bumpScreen(Math.max(0, screen - 1));
  };

  const handleSubmit = async (optIns: LogementOptIns) => {
    if (!persona || !scoreResult || !verdict) return;

    trackEvent("Contact Info Submitted", { funnel: "logement" });

    bumpScreen(LOADING_SCREEN);

    trackEvent("Diagnostic Completed", {
      funnel: "logement",
      verdict: verdict.key,
      score: String(scoreResult.final),
      priority,
    });

    try {
      const payload = buildLogementPayload({
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
        answers: answers as unknown as LogementAnswers,
        persona,
        score: scoreResult,
        verdict,
        priority,
        sessionStartTs: sessionStartRef.current,
        completionPath: usedBackRef.current ? "non_linear" : "linear",
      });

      await sendWebhook(payload, leadIdRef.current);

      // Diagnostic completed successfully — clear the teaser resume key so a
      // post-submission return to the landing page shows the fresh teaser,
      // not the stale "Reprendre" state.
      try {
        localStorage.removeItem(LOGEMENT_Q1_STORAGE_KEY);
      } catch {
        /* no-op */
      }
    } catch (err) {
      // Build/validation errors: don't block the user from seeing results;
      // the diagnostic ran client-side. Log and continue.
      if (process.env.NODE_ENV !== "production") {
        console.error("buildLogementPayload failed", err);
      }
    }
  };

  // Progress bar math — counts only screens that will actually be shown.
  const totalSteps = countActiveScreens(answers) + 1; // + contact
  const currentStep =
    screen >= 1 && screen <= MAX_QUESTION_INDEX
      ? // 1-based position among active screens up to and including `screen`
        logementQuestionScreens
          .slice(0, screen)
          .filter((s) => !s.skipWhen?.(answers)).length
      : screen === CONTACT_SCREEN
      ? totalSteps
      : 0;

  const showProgress =
    (screen >= 1 && screen <= MAX_QUESTION_INDEX) || screen === CONTACT_SCREEN;

  return (
    <main
      className="min-h-screen"
      style={{
        "--funnel-accent": "#D97706",
        "--funnel-accent-soft": "#FEF3C7",
      } as React.CSSProperties}
    >
      {showProgress && (
        <ProgressBar current={currentStep} total={totalSteps} />
      )}

      {screen === 0 ? (
        // IntroScreen manages its own layout widths: its desktop hero needs
        // to span the viewport (breaks out of the funnel's max-w-xl cap) and
        // its mobile branch + below-the-fold sections re-apply the same
        // max-w-xl wrapper internally to stay byte-identical to the pre-Step-2
        // rendering. See IntroScreen.tsx for the inner wrapper.
        <div key={screenKey}>
          <IntroScreen onStart={goNext} />
        </div>
      ) : (
        <div className="max-w-xl mx-auto px-6 py-4 md:py-14" key={screenKey}>
          {screen >= 1 && screen <= MAX_QUESTION_INDEX && (
            <QuestionScreen
              screen={logementQuestionScreens[screen - 1]}
              answers={answers}
              onAnswer={handleAnswer}
              onNext={goNext}
              onBack={goBack}
              canProceed={canProceedFromQuestion(screen)}
              canGoBack={screen > 1}
              direction={directionRef.current}
            />
          )}

          {screen === CONTACT_SCREEN && (
            <ContactScreen
              contact={contact}
              onChange={setContact}
              onSubmit={handleSubmit}
              onBack={goBack}
              phoneRequired={priority === "hot" || priority === "very_hot"}
            />
          )}

          {screen === LOADING_SCREEN && (
            <LoadingScreen onComplete={() => bumpScreen(RESULTS_SCREEN)} />
          )}

          {screen === RESULTS_SCREEN &&
            scoreResult &&
            verdict &&
            persona && (
              <ResultsScreen
                score={scoreResult}
                verdict={verdict}
                persona={persona}
                prenom={contact.prenom}
                answers={answers as unknown as LogementAnswers}
              />
            )}

          {screen === SOFT_EXIT_FRONTALIER && <SoftExitFrontalier />}
          {screen === SOFT_EXIT_EXPLORATION && <SoftExitExploration />}
          {screen === SOFT_EXIT_LOW_BUDGET && <SoftExitLowBudget />}
        </div>
      )}
    </main>
  );
}
