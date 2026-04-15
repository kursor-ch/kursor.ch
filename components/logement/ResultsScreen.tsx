"use client";

import { useState, useCallback } from "react";
import DonutChart from "@/components/ui/DonutChart";
import type { LogementScoreResult } from "@/lib/logement/scoring";
import type { LogementAnswers } from "@/lib/logement/scoring";
import type { LogementVerdict } from "@/lib/logement/verdicts";
import type { LogementPersona } from "@/lib/logement/personas";
import { detectLogementRisks, SEVERITY_COLORS } from "@/lib/logement/risks";
import type { RiskSeverity } from "@/lib/logement/risks";

interface ResultsScreenProps {
  score: LogementScoreResult;
  verdict: LogementVerdict;
  persona: LogementPersona;
  prenom: string;
  answers: LogementAnswers;
}

const SEVERITY_STYLES: Record<
  RiskSeverity,
  { bg: string; text: string; border: string }
> = {
  CRITIQUE: { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA" },
  "ÉLEVÉ": { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  MOYEN: { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A" },
};

export default function ResultsScreen({
  score,
  verdict,
  persona,
  prenom,
  answers,
}: ResultsScreenProps) {
  const [legendVisible, setLegendVisible] = useState(false);

  const handleDonutComplete = useCallback(() => {
    setLegendVisible(true);
  }, []);

  const risks = detectLogementRisks(answers, persona.code);

  return (
    <div className="animate-screen-in space-y-8 text-center">
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-px" />
        {prenom ? `${prenom}, ` : ""}votre score de difficulté
      </p>

      <DonutChart
        total={score.final}
        categories={[
          { label: "Difficulté", score: score.final, color: verdict.color },
        ]}
        verdictLabel={verdict.label}
        verdictColor={verdict.color}
        onAnimationComplete={handleDonutComplete}
      />

      {/* Estimated weeks */}
      <div
        className="max-w-sm mx-auto transition-all duration-500"
        style={{
          opacity: legendVisible ? 1 : 0,
          transform: legendVisible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-2">
          Durée estimée de recherche
        </p>
        <p
          className="text-4xl font-heading font-bold leading-none"
          style={{ color: verdict.color }}
        >
          {verdict.weeksLabel}
        </p>
      </div>

      {/* Summary paragraph */}
      <div className="max-w-[520px] mx-auto">
        <p className="text-base text-gray-600 leading-[1.75] text-center">
          {verdict.summary}
        </p>
      </div>

      {/* Risks */}
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
                  {r.detail && (
                    <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">
                      {r.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-[13px] text-gray-400 text-center mt-4">
            Votre bilan détaillé par email analyse chaque point et vous donne
            les leviers concrets pour les traiter.
          </p>
        </div>
      )}

      {/* Email notification */}
      <div className="max-w-md mx-auto">
        <p className="text-sm text-gray-500">
          Votre bilan détaillé arrive dans votre boîte email sous quelques
          minutes.
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
          Parler à un expert logement Kursor →
        </a>
        <p className="text-xs text-gray-400">
          Sans engagement. Un expert analyse votre dossier et vous oriente.
        </p>
      </div>
    </div>
  );
}
