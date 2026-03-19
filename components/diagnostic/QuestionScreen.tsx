"use client";

import { QuestionScreen as QScreen } from "@/lib/questions";
import { Answers } from "@/lib/scoring";
import OptionCard from "@/components/ui/OptionCard";
import OptionPill from "@/components/ui/OptionPill";

interface QuestionScreenProps {
  screen: QScreen;
  answers: Answers;
  onAnswer: (questionId: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export default function QuestionScreen({
  screen,
  answers,
  onAnswer,
  onNext,
  onBack,
  canProceed,
}: QuestionScreenProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          {screen.title}
        </h2>
        {screen.subtitle && (
          <p className="text-sm text-gray-500">{screen.subtitle}</p>
        )}
      </div>

      {screen.questions.map((q) => (
        <div key={q.id} className="space-y-3">
          <label className="block text-base font-medium text-gray-800">
            {q.label}
          </label>
          {q.hint && (
            <p className="text-sm text-gray-500 -mt-1">{q.hint}</p>
          )}

          {q.type === "card" ? (
            <div className="space-y-2.5">
              {q.options.map((opt) => (
                <OptionCard
                  key={opt.key}
                  label={opt.label}
                  selected={answers[q.id] === opt.key}
                  onClick={() => onAnswer(q.id, opt.key)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => (
                <OptionPill
                  key={opt.key}
                  label={opt.label}
                  selected={answers[q.id] === opt.key}
                  onClick={() => onAnswer(q.id, opt.key)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors"
        >
          Retour
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 px-6 py-3 rounded-full bg-amber text-white font-semibold hover:bg-amber/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
