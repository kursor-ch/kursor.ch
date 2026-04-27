"use client";

import type { QuestionScreen as QScreen } from "@/lib/questions";
import RetraiteOptionCard from "./RetraiteOptionCard";

const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#EDE9FE";
const ACCENT_HOVER = "#6D28D9";

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

      {screen.questions.map((q) => (
        <div key={q.id} className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">
            {q.label}
          </label>
          {q.hint && <p className="text-sm text-gray-500 -mt-1">{q.hint}</p>}

          {q.type === "card" ? (
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <div
                  key={opt.key}
                  className="animate-stagger-item"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  <RetraiteOptionCard
                    label={opt.label}
                    selected={answers[q.id] === opt.key}
                    onClick={() => onAnswer(q.id, opt.key)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="animate-stagger-item"
              style={{ animationDelay: "0.3s" }}
            >
              <select
                value={answers[q.id] || ""}
                onChange={(e) => onAnswer(q.id, e.target.value)}
                className="w-full rounded-xl border-2 bg-white py-4 px-4 text-base appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2378716c%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10 transition-colors duration-200 focus:outline-none focus:ring-0"
                style={{
                  borderColor: "#E7E5E4",
                  color: answers[q.id] ? "#111827" : "#9CA3AF",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#E7E5E4")}
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
      ))}

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
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 px-6 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-100 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md"
          style={{
            backgroundColor: ACCENT,
            opacity: canProceed ? 1 : 0.5,
            boxShadow: `0 4px 6px -1px ${ACCENT_LIGHT}`,
          }}
          onMouseEnter={(e) => {
            if (canProceed) e.currentTarget.style.backgroundColor = ACCENT_HOVER;
          }}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
