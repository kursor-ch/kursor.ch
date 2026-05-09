"use client";

import { useEffect, useRef } from "react";
import type { LogementQuestionScreen } from "@/lib/logement/questions";
import OptionCard from "@/components/ui/OptionCard";
import OptionPill from "@/components/ui/OptionPill";
import { pushEvent } from "@/lib/gtm";

interface QuestionScreenProps {
  screen: LogementQuestionScreen;
  answers: Record<string, string>;
  onAnswer: (questionId: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
  canGoBack: boolean;
  direction?: "forward" | "back";
}

// Delay between selecting an option and auto-advancing to the next screen.
// Long enough for the user to register the visual confirmation, short enough
// not to feel sluggish.
const AUTO_ADVANCE_MS = 150;

export default function QuestionScreen({
  screen,
  answers,
  onAnswer,
  onNext,
  onBack,
  canProceed,
  canGoBack,
  direction = "forward",
}: QuestionScreenProps) {
  // Single-question screens auto-advance after a short confirmation pulse.
  // Multi-question screens (e.g. merged canton + urgence) need a manual
  // Continuer because the user has more than one selection to make.
  const isAutoAdvance = screen.questions.length === 1;
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cancel any pending auto-advance on unmount or back navigation so we don't
  // race with the parent's screen transition.
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
    };
  }, [screen]);

  const handleAnswer = (questionId: string, value: string) => {
    onAnswer(questionId, value);
    pushEvent("logement_step_completed", { step: questionId, value });

    if (isAutoAdvance) {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      autoAdvanceTimerRef.current = setTimeout(() => {
        onNext();
      }, AUTO_ADVANCE_MS);
    }
  };

  return (
    <div
      className={`${direction === "back" ? "screen-enter-back" : "screen-enter-forward"} space-y-10`}
    >
      <div>
        <h2 className="animate-q-title text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-1" />
          {screen.title}
        </h2>
        {screen.subtitle && (
          <p className="animate-q-subtitle text-sm text-gray-500 mt-1">
            {screen.subtitle}
          </p>
        )}
      </div>

      {screen.questions.map((q) => {
        const labelId = `${q.id}-label`;
        return (
          <div key={q.id} className="space-y-3">
            <label
              id={labelId}
              className="block text-lg font-semibold text-gray-800"
            >
              {q.label}
            </label>
            {q.hint && <p className="text-sm text-gray-500 -mt-1">{q.hint}</p>}

            {q.type === "card" ? (
              <div
                role="radiogroup"
                aria-labelledby={labelId}
                className="space-y-2.5"
              >
                {q.options.map((opt, i) => (
                  <div
                    key={opt.key}
                    className="animate-stagger-item"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <OptionCard
                      label={opt.label}
                      selected={answers[q.id] === opt.key}
                      onClick={() => handleAnswer(q.id, opt.key)}
                    />
                  </div>
                ))}
              </div>
            ) : q.type === "select" ? (
              <div
                className="animate-stagger-item"
                style={{ animationDelay: "0.3s" }}
              >
                <select
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  aria-labelledby={labelId}
                  className={`w-full rounded-xl border bg-white py-4 px-4 text-base appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2378716c%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    answers[q.id]
                      ? "border-[#E7E5E4] text-gray-900 focus:border-amber"
                      : "border-[#E7E5E4] text-gray-400 focus:border-amber"
                  }`}
                >
                  <option value="" disabled>
                    Sélectionnez une option
                  </option>
                  {q.options.map((opt) => (
                    <option key={opt.key} value={opt.key}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div
                role="radiogroup"
                aria-labelledby={labelId}
                className="flex flex-wrap gap-2"
              >
                {q.options.map((opt, i) => (
                  <div
                    key={opt.key}
                    className="animate-stagger-item"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <OptionPill
                      label={opt.label}
                      selected={answers[q.id] === opt.key}
                      onClick={() => handleAnswer(q.id, opt.key)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="flex gap-3 pt-4">
        {canGoBack && (
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3.5 rounded-full border-2 border-stone-300 text-gray-600 font-semibold hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
          >
            Retour
          </button>
        )}
        {!isAutoAdvance && (
          <button
            type="button"
            onClick={onNext}
            disabled={!canProceed}
            className="flex-1 px-6 py-3.5 rounded-xl bg-amber text-white font-semibold shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            Continuer
          </button>
        )}
      </div>
    </div>
  );
}
