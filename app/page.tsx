"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { questionScreens } from "@/lib/questions";
import { Answers, computeScore, ScoreBreakdown } from "@/lib/scoring";
import { getVerdict, Verdict } from "@/lib/verdicts";
import { buildPayload, sendWebhook, retryPendingWebhook } from "@/lib/webhook";
import ProgressBar from "@/components/ui/ProgressBar";
import IntroScreen from "@/components/diagnostic/IntroScreen";
import QuestionScreen from "@/components/diagnostic/QuestionScreen";
import ContactScreen, {
  ContactInfo,
  OptIns,
} from "@/components/diagnostic/ContactScreen";
import ResultsScreen from "@/components/diagnostic/ResultsScreen";
import LoadingScreen from "@/components/diagnostic/LoadingScreen";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

// Screens: 0=intro, 1-3=questions, 4=contact+consent, 5=loading, 6=results
const TOTAL_STEPS = 5;

function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}

export default function DiagnosticWorkPage() {
  const [screen, setScreen] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<ContactInfo>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });
  const [scores, setScores] = useState<ScoreBreakdown | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    retryPendingWebhook();
  }, []);

  const handleAnswer = useCallback((questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const canProceedFromQuestionScreen = (screenIndex: number): boolean => {
    const qs = questionScreens[screenIndex];
    return qs.questions.every((q) => answers[q.id] !== undefined);
  };

  const goNext = () => {
    const nextScreen = screen + 1;
    setScreen(nextScreen);
    setScreenKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });

    if (screen === 0) {
      trackEvent("Diagnostic Started", { funnel: "work" });
    }
    if (screen >= 1 && screen <= 3) {
      trackEvent("Question Screen Completed", {
        funnel: "work",
        screen: String(screen),
      });
    }
  };

  const goBack = () => {
    setScreen((prev) => Math.max(0, prev - 1));
    setScreenKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleSubmit = async (optIns: OptIns) => {
    const computed = computeScore(answers);
    const v = getVerdict(computed.total);
    setScores(computed);
    setVerdict(v);
    setScreen(5);
    setScreenKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });

    trackEvent("Contact Info Submitted", { funnel: "work" });
    trackEvent("Diagnostic Completed", {
      funnel: "work",
      verdict: v.key,
      score: String(computed.total),
    });

    const payload = buildPayload(contact, computed, v.key, answers, optIns);
    await sendWebhook(payload);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-creme/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/kursor-logo-amber.png" alt="Kursor" width={32} height={32} className="h-8 w-auto rounded-lg" />
          <span className="text-sm tracking-wide"><span className="text-amber font-heading font-semibold">Kursor</span> <span className="text-gray-900 font-normal">CH</span></span>
        </div>
        {screen > 0 && screen <= 4 && (
          <ProgressBar current={screen} total={TOTAL_STEPS} />
        )}
      </header>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 py-4 md:py-14" key={screenKey}>
        {screen === 0 && <IntroScreen onStart={goNext} />}

        {screen >= 1 && screen <= 3 && (
          <QuestionScreen
            screen={questionScreens[screen - 1]}
            answers={answers}
            onAnswer={handleAnswer}
            onNext={goNext}
            onBack={goBack}
            canProceed={canProceedFromQuestionScreen(screen - 1)}
          />
        )}

        {screen === 4 && (
          <ContactScreen
            contact={contact}
            onChange={setContact}
            onSubmit={handleSubmit}
            onBack={goBack}
          />
        )}

        {screen === 5 && (
          <LoadingScreen
            onComplete={() => {
              setScreen(6);
              setScreenKey((k) => k + 1);
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          />
        )}

        {screen === 6 && scores && verdict && (
          <ResultsScreen
            scores={scores}
            verdict={verdict}
            prenom={contact.prenom}
            answers={answers}
          />
        )}
      </div>
    </main>
  );
}
