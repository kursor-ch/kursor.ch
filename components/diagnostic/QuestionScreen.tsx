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
    <div className="animate-screen-in space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-1" />
          {screen.title}
        </h2>
        {screen.subtitle && (
          <p className="text-sm text-gray-500 ml-4">{screen.subtitle}</p>
        )}
      </div>

      {screen.questions.map((q) => (
        <div key={q.id} className="space-y-3">
          <label className="block text-lg font-semibold text-gray-800">
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
            <div className="flex flex-wrap gap-2.5">
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
          className="px-6 py-3.5 rounded-full border-2 border-stone-300 text-gray-700 font-medium hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
        >
          Retour
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 px-6 py-3.5 rounded-full bg-amber text-white font-semibold shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
