"use client";

import { useEffect, useRef } from "react";
import type { AssuranceQuestionScreen as QScreen } from "@/lib/assurance/questions";
import AssuranceOptionCard from "@/components/assurance/AssuranceOptionCard";
import AssuranceOptionPill from "@/components/assurance/AssuranceOptionPill";
import AssuranceOptionMultiPill from "@/components/assurance/AssuranceOptionMultiPill";
import { pushEvent } from "@/lib/gtm";

const ACCENT = "#86A789";
const ACCENT_LIGHT = "#E6EFE6";
const ACCENT_HOVER = "#6F8E72";
const AUTO_ADVANCE_MS = 150;

// Q5 franchise + Q6 modèle render their "ne_sais_pas" option as a secondary
// text-link below the chip set, not as a chip. The link selects the value
// and auto-advances.
const SECONDARY_LINK_QUESTIONS = new Set(["q5_franchise", "q6_modele"]);

// Q7 IJM has 5 enum values for type compatibility but only 3 are user-facing
// at any time — choice depends on q1_statut.
const Q7_OPTIONS_SALARIE = new Set([
  "ijm_employeur",
  "echelle_berne",
  "ne_sais_pas",
]);
const Q7_OPTIONS_INDEPENDANT = new Set([
  "independant_avec_ijm",
  "independant_sans_ijm",
  "ne_sais_pas",
]);

interface QuestionScreenProps {
  screen: QScreen;
  answers: Record<string, string>;
  multiAnswers: Record<string, string[]>;
  onAnswer: (questionId: string, value: string) => void;
  onMultiAnswer: (questionId: string, values: string[]) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
  canGoBack: boolean;
  direction?: "forward" | "back";
}

export default function QuestionScreen({
  screen,
  answers,
  multiAnswers,
  onAnswer,
  onMultiAnswer,
  onNext,
  onBack,
  canProceed,
  canGoBack,
  direction = "forward",
}: QuestionScreenProps) {
  // Auto-advance when this is a single-question, single-select screen and a
  // selection happens. Multi-question screens (S2 canton+foyer) and
  // multi-select screens (S7 complémentaires) require manual Continuer.
  const hasMultiSelect = screen.questions.some((q) => q.multiSelect);
  const isAutoAdvance = screen.questions.length === 1 && !hasMultiSelect;
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
    };
  }, [screen]);

  const handleSingleAnswer = (questionId: string, value: string) => {
    onAnswer(questionId, value);
    pushEvent("assurance_step_completed", { step: questionId, value });

    if (isAutoAdvance) {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
      autoAdvanceTimerRef.current = setTimeout(() => {
        onNext();
      }, AUTO_ADVANCE_MS);
    }
  };

  // Multi-select toggle with mutex: selecting "aucune" or "ndr" clears all
  // others; selecting any other value clears "aucune"/"ndr".
  const toggleMulti = (questionId: string, value: string) => {
    const current = multiAnswers[questionId] || [];
    const isSentinel = value === "aucune" || value === "ndr";

    let next: string[];
    if (current.includes(value)) {
      // Toggle off — just remove.
      next = current.filter((v) => v !== value);
    } else if (isSentinel) {
      // Selecting a sentinel — clear all others, keep only this sentinel.
      next = [value];
    } else {
      // Selecting a regular option — strip out any sentinels, add this option.
      next = [...current.filter((v) => v !== "aucune" && v !== "ndr"), value];
    }

    onMultiAnswer(questionId, next);
    pushEvent("assurance_step_completed", {
      step: questionId,
      value: next.join(","),
    });
  };

  // For Q7 IJM: filter the option set based on q1_statut.
  const filterIjmOptions = <T extends { key: string }>(
    questionId: string,
    opts: readonly T[]
  ): readonly T[] => {
    if (questionId !== "q7_ijm") return opts;
    const statut = answers.q1_statut;
    if (statut === "independant" || statut === "dirigeant") {
      return opts.filter((o) => Q7_OPTIONS_INDEPENDANT.has(o.key));
    }
    // Default to salarié set (covers salarie_recent, salarie_installe).
    return opts.filter((o) => Q7_OPTIONS_SALARIE.has(o.key));
  };

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
        const filteredOpts = filterIjmOptions(q.id, q.options);
        const useSecondaryLink = SECONDARY_LINK_QUESTIONS.has(q.id);
        const chipOpts = useSecondaryLink
          ? filteredOpts.filter((o) => o.key !== "ne_sais_pas")
          : filteredOpts;
        const selectedMulti = multiAnswers[q.id] || [];

        return (
          <div key={q.id} className="space-y-3">
            <label
              id={labelId}
              className="block text-lg font-semibold text-gray-800"
            >
              {q.label}
            </label>
            {q.hint && <p className="text-sm text-gray-500 -mt-1">{q.hint}</p>}

            {q.multiSelect ? (
              <>
                <div
                  role="group"
                  aria-labelledby={labelId}
                  className="flex flex-wrap gap-2"
                >
                  {chipOpts.map((opt, i) => (
                    <div
                      key={opt.key}
                      className="animate-stagger-item"
                      style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                    >
                      <AssuranceOptionMultiPill
                        label={opt.label}
                        selected={selectedMulti.includes(opt.key)}
                        onClick={() => toggleMulti(q.id, opt.key)}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : q.type === "card" ? (
              <div
                role="radiogroup"
                aria-labelledby={labelId}
                className="space-y-2.5"
              >
                {chipOpts.map((opt, i) => (
                  <div
                    key={opt.key}
                    className="animate-stagger-item"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <AssuranceOptionCard
                      label={opt.label}
                      selected={answers[q.id] === opt.key}
                      onClick={() => handleSingleAnswer(q.id, opt.key)}
                    />
                  </div>
                ))}
              </div>
            ) : q.type === "pill" ? (
              <div
                role="radiogroup"
                aria-labelledby={labelId}
                className="flex flex-wrap gap-2"
              >
                {chipOpts.map((opt, i) => (
                  <div
                    key={opt.key}
                    className="animate-stagger-item"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <AssuranceOptionPill
                      label={opt.label}
                      selected={answers[q.id] === opt.key}
                      onClick={() => handleSingleAnswer(q.id, opt.key)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // "select" type fallback — defensive only; assurance no longer
              // uses select after the canton conversion to pill.
              <div
                className="animate-stagger-item"
                style={{ animationDelay: "0.3s" }}
              >
                <select
                  value={answers[q.id] || ""}
                  onChange={(e) => handleSingleAnswer(q.id, e.target.value)}
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
                  {chipOpts.map((opt) => (
                    <option key={opt.key} value={opt.key}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {useSecondaryLink && (
              <button
                type="button"
                onClick={() => handleSingleAnswer(q.id, "ne_sais_pas")}
                className="text-sm font-body underline mt-3 transition-colors"
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                Je ne sais pas →
              </button>
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
              if (canProceed) e.currentTarget.style.backgroundColor = ACCENT_HOVER;
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
