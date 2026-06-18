"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { QuestionScreen as QScreen } from "@/lib/questions";
import RetraiteOptionCard from "./RetraiteOptionCard";
import RetraiteOptionPill from "./RetraiteOptionPill";
import { pushEvent } from "@/lib/gtm";

const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#EDE9FE";
const ACCENT_HOVER = "#6D28D9";

// Delay between selecting an option and auto-advancing to the next screen.
// Long enough for the user to register the visual confirmation, short enough
// not to feel sluggish.
const AUTO_ADVANCE_MS = 150;

interface QuestionScreenProps {
  screen: QScreen;
  answers: Record<string, string>;
  onAnswer: (questionId: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
  canGoBack: boolean;
  direction?: "forward" | "back";
}

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
  // Multi-question screens (e.g. permis + canton) need a manual Continuer.
  const isAutoAdvance = screen.questions.length === 1;
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    pushEvent("retraite_step_completed", { step: questionId, value });

    if (isAutoAdvance) {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      autoAdvanceTimerRef.current = setTimeout(() => {
        onNext();
      }, AUTO_ADVANCE_MS);
    }
  };

  // Independant + permis G is not a supported combination — the indep
  // frontalier path is routed elsewhere. Disable the chip and surface a
  // helper link.
  const isPermisGDisabled = (questionId: string, optionKey: string) =>
    questionId === "q1_permis_form" &&
    optionKey === "permis_g" &&
    answers.q1_statut_form === "independant";

  return (
    <div
      className={`${direction === "back" ? "screen-enter-back" : "screen-enter-forward"} space-y-10`}
    >
      <div>
        <h2 className="animate-q-title text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 -translate-y-1"
            style={{ backgroundColor: ACCENT }}
          />
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

        // Cas spécial q4_revenu : "non_renseigne" est rendu en lien secondaire
        // sous les chips, pas comme chip. On le retire du rendu chip.
        // Cas spécial q6_lpp : "independant_na" est réservé aux indépendants.
        const isRevenu = q.id === "q4_revenu";
        const isLpp = q.id === "q6_lpp";
        let chipOptions = q.options;
        if (isRevenu) {
          chipOptions = chipOptions.filter((o) => o.key !== "non_renseigne");
        }
        if (isLpp && answers.q1_statut_form !== "independant") {
          chipOptions = chipOptions.filter((o) => o.key !== "independant_na");
        }

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
                {chipOptions.map((opt, i) => (
                  <div
                    key={opt.key}
                    className="animate-stagger-item"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <RetraiteOptionCard
                      label={opt.label}
                      selected={answers[q.id] === opt.key}
                      onClick={() => handleAnswer(q.id, opt.key)}
                    />
                  </div>
                ))}
              </div>
            ) : q.type === "pill" ? (
              <>
                <div
                  role="radiogroup"
                  aria-labelledby={labelId}
                  className="flex flex-wrap gap-2"
                >
                  {chipOptions.map((opt, i) => {
                    const disabled = isPermisGDisabled(q.id, opt.key);
                    return (
                      <div
                        key={opt.key}
                        className="animate-stagger-item"
                        style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                      >
                        <RetraiteOptionPill
                          label={opt.label}
                          selected={answers[q.id] === opt.key}
                          disabled={disabled}
                          onClick={() => {
                            if (disabled) return;
                            handleAnswer(q.id, opt.key);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                {q.id === "q1_permis_form" &&
                  answers.q1_statut_form === "independant" && (
                    <p className="text-xs text-gray-500 mt-2 font-body">
                      Pour les indépendants frontaliers, voir{" "}
                      <Link
                        href="/assurance"
                        className="underline transition-colors"
                        style={{ color: ACCENT }}
                      >
                        Audit Assurances
                      </Link>
                      .
                    </p>
                  )}
                {isRevenu && (
                  <button
                    type="button"
                    onClick={() => handleAnswer(q.id, "non_renseigne")}
                    className="text-sm font-body underline mt-3 transition-colors"
                    style={{ color: "#9CA3AF" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = ACCENT)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9CA3AF")
                    }
                  >
                    Préfère ne pas répondre →
                  </button>
                )}
              </>
            ) : (
              // Legacy "select" rendering — kept as a defensive fallback for
              // any question type that might still pass through.
              <div
                className="animate-stagger-item"
                style={{ animationDelay: "0.3s" }}
              >
                <select
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  aria-labelledby={labelId}
                  className="w-full rounded-xl border-2 bg-white py-4 px-4 text-base appearance-none pr-10 transition-colors duration-200 focus:outline-none focus:ring-0"
                  style={{
                    borderColor: "#E7E5E4",
                    color: answers[q.id] ? "#111827" : "#9CA3AF",
                  }}
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
            className="flex-1 px-6 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100"
            style={{
              backgroundColor: ACCENT,
              opacity: canProceed ? 1 : 0.5,
              boxShadow: `0 4px 6px -1px ${ACCENT_LIGHT}`,
            }}
            onMouseEnter={(e) => {
              if (canProceed)
                e.currentTarget.style.backgroundColor = ACCENT_HOVER;
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
          >
            Continuer
          </button>
        )}
      </div>
    </div>
  );
}
