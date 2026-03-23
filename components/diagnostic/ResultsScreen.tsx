"use client";

import { useState, useCallback } from "react";
import { Answers, ScoreBreakdown } from "@/lib/scoring";
import { Verdict } from "@/lib/verdicts";
import { generateInsight } from "@/lib/insights";
import { detectStrengths } from "@/lib/strengths";
import { detectRisks, SEVERITY_COLORS } from "@/lib/risks";
import DonutChart from "@/components/ui/DonutChart";

interface ResultsScreenProps {
  scores: ScoreBreakdown;
  verdict: Verdict;
  prenom: string;
  answers: Answers;
}

const CATEGORY_COLORS = {
  profil: "#D97706",
  projet: "#15803D",
  financier: "#3B82F6",
  preparation: "#8B5CF6",
};

const SEVERITY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  CRITIQUE: { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA" },
  "ÉLEVÉ": { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  MOYEN: { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A" },
};

export default function ResultsScreen({
  scores,
  verdict,
  prenom,
  answers,
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

  const insight = generateInsight(answers, scores);
  const strengths = detectStrengths(answers);
  const risks = detectRisks(answers).slice(0, 3);

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

      {/* Answer-aware insight paragraph */}
      <div className="max-w-[520px] mx-auto">
        <p className="text-base text-gray-600 leading-[1.75] text-center">
          {insight}
        </p>
      </div>

      {/* Detected strengths */}
      {strengths.length > 0 && (
        <div>
          <h3 className="text-lg text-gray-900 mb-3">Vos atouts</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {strengths.map((s, i) => (
              <span
                key={s.id}
                className="animate-fade-stagger inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium border"
                style={{
                  animationDelay: `${i * 150}ms`,
                  backgroundColor: "#F0FDF4",
                  borderColor: "#BBF7D0",
                  color: "#15803D",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {s.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Detected risks */}
      {risks.length > 0 && (
        <div className="max-w-md mx-auto">
          <h3 className="text-lg text-gray-900 mb-3">Points d&apos;attention</h3>
          <div className="space-y-2">
            {risks.map((r, i) => {
              const style = SEVERITY_STYLES[r.severity];
              return (
                <div
                  key={r.id}
                  className="animate-fade-stagger text-left rounded-lg border bg-white p-3.5"
                  style={{
                    animationDelay: `${i * 150}ms`,
                    borderColor: "#E5E7EB",
                    borderLeftWidth: "3px",
                    borderLeftColor: SEVERITY_COLORS[r.severity],
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: style.bg,
                        color: style.text,
                        border: `1px solid ${style.border}`,
                      }}
                    >
                      {r.severity}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {r.title}
                    </span>
                  </div>
                  {r.cost && r.cost !== "—" && (
                    <p
                      className="text-[13px] font-semibold mt-1"
                      style={{ color: style.text }}
                    >
                      {r.cost}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-[13px] text-gray-400 text-center mt-4">
            Votre rapport détaillé par email analyse chaque point et vous donne les clés pour les anticiper.
          </p>
        </div>
      )}

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
          Réservez un appel gratuit avec un conseiller Kursor →
        </a>
        <p className="text-xs text-gray-400">
          Sans engagement. Un expert analyse votre situation et vous oriente.
        </p>
      </div>
    </div>
  );
}
