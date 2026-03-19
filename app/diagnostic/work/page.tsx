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
} from "@/components/diagnostic/ContactScreen";
import OptInScreen, { OptIns } from "@/components/diagnostic/OptInScreen";
import ResultsScreen from "@/components/diagnostic/ResultsScreen";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

// Screens: 0=intro, 1-3=questions, 4=contact, 5=optin, 6=results
const TOTAL_STEPS = 6;

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
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (screen === 0) {
      trackEvent("Diagnostic Started", { funnel: "work" });
    }
    if (screen >= 1 && screen <= 3) {
      trackEvent("Question Screen Completed", {
        funnel: "work",
        screen: String(screen),
      });
    }
    if (screen === 4) {
      trackEvent("Contact Info Submitted", { funnel: "work" });
    }
  };

  const goBack = () => {
    setScreen((prev) => Math.max(0, prev - 1));
    setScreenKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (optIns: OptIns) => {
    const computed = computeScore(answers);
    const v = getVerdict(computed.total);
    setScores(computed);
    setVerdict(v);
    setScreen(6);
    setScreenKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });

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
          <span className="flex items-center gap-2 font-heading font-semibold text-lg text-gray-900">
            <Image src="/kursor-logo-amber.png" alt="Kursor" width={40} height={40} className="h-10 w-auto" />
            Kursor <span className="text-amber">CH</span>
          </span>
          {screen > 0 && screen < 6 && (
            <ProgressBar current={screen} total={TOTAL_STEPS} />
          )}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-xl mx-auto px-6 py-8 md:py-12" key={screenKey}>
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
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {screen === 5 && (
          <OptInScreen onSubmit={handleSubmit} onBack={goBack} />
        )}

        {screen === 6 && scores && verdict && (
          <ResultsScreen
            scores={scores}
            verdict={verdict}
            prenom={contact.prenom}
          />
        )}
      </div>
    </main>
  );
}
