"use client";

import { useState, useCallback } from "react";
import { ScoreBreakdown } from "@/lib/scoring";
import { Verdict } from "@/lib/verdicts";
import DonutChart from "@/components/ui/DonutChart";

interface ResultsScreenProps {
  scores: ScoreBreakdown;
  verdict: Verdict;
  prenom: string;
}

const CATEGORY_COLORS = {
  profil: "#D97706",
  projet: "#15803D",
  financier: "#3B82F6",
  preparation: "#8B5CF6",
};

export default function ResultsScreen({
  scores,
  verdict,
  prenom,
}: ResultsScreenProps) {
  const [legendVisible, setLegendVisible] = useState(false);

  const handleDonutComplete = useCallback(() => {
    setLegendVisible(true);
  }, []);

  const categories = [
    { label: "Profil professionnel", score: scores.profil, max: 30, color: CATEGORY_COLORS.profil },
    { label: "Maturité projet", score: scores.projet, max: 30, color: CATEGORY_COLORS.projet },
    { label: "Ancrage financier", score: scores.financier, max: 20, color: CATEGORY_COLORS.financier },
    { label: "Préparation administrative", score: scores.preparation, max: 20, color: CATEGORY_COLORS.preparation },
  ];

  return (
    <div className="animate-screen-in space-y-8 text-center">
      {/* Section label */}
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-px" />
        Votre score de viabilité
      </p>

      {/* Donut chart */}
      <DonutChart
        total={scores.total}
        categories={categories.map((c) => ({
          label: c.label,
          score: c.score,
          color: c.color,
        }))}
        verdictLabel={verdict.label}
        verdictColor={verdict.color}
        onAnimationComplete={handleDonutComplete}
      />

      {/* Category legend */}
      <div className="max-w-sm mx-auto space-y-2.5 text-left">
        {categories.map((cat, i) => (
          <div
            key={cat.label}
            className="flex items-center gap-3 text-sm transition-all duration-500"
            style={{
              opacity: legendVisible ? 1 : 0,
              transform: legendVisible ? "translateY(0)" : "translateY(8px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <span
              className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-gray-700 font-medium">{cat.label}</span>
            <span className="ml-auto text-gray-400 font-body tabular-nums">
              {cat.score}/{cat.max}
            </span>
          </div>
        ))}
      </div>

      {/* Verdict summary */}
      <div className="max-w-md mx-auto">
        <p className="text-base text-gray-600 leading-relaxed">
          {verdict.summary}
        </p>
      </div>

      {/* Email notification */}
      <div className="max-w-md mx-auto">
        <p className="text-sm text-gray-500">
          Votre rapport détaillé arrive dans votre boîte email sous quelques minutes.
        </p>
      </div>

      {/* Calendly CTA */}
      <div className="max-w-md mx-auto pt-4 border-t border-gray-100 space-y-3">
        <a
          href="https://calendly.com/sav-gcconsulting/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-amber px-6 py-4 text-white font-semibold text-base sm:text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
        >
          Réservez un appel gratuit avec un conseiller →
        </a>
        <p className="text-xs text-gray-400">
          Sans engagement. Un expert analyse votre situation et vous oriente.
        </p>
      </div>
    </div>
  );
}
