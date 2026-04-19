"use client";

import { SEVERITY_COLORS } from "@/lib/assurance/risks";
import type { TrouDeCouverture, TrouSeverity } from "@/lib/assurance/types";

const SEVERITY_STYLES: Record<
  TrouSeverity,
  { bg: string; text: string; border: string }
> = {
  CRITIQUE: { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA" },
  "ÉLEVÉ": { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  MODÉRÉ: { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A" },
};

interface TrousListProps {
  trous: TrouDeCouverture[];
}

export default function TrousList({ trous }: TrousListProps) {
  if (trous.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic text-center">
        Aucun trou de couverture majeur détecté.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {trous.map((t, i) => {
        const style = SEVERITY_STYLES[t.severity];
        return (
          <div
            key={t.id}
            className="animate-fade-stagger text-left rounded-lg border bg-white p-3.5"
            style={{
              animationDelay: `${i * 150}ms`,
              borderColor: "#E5E7EB",
              borderLeftWidth: "3px",
              borderLeftColor: SEVERITY_COLORS[t.severity],
            }}
          >
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  border: `1px solid ${style.border}`,
                }}
              >
                {t.severity}
              </span>
              <span className="text-sm font-semibold text-gray-900 flex-1">
                {t.label}
              </span>
              <span
                className="text-xs font-semibold tabular-nums"
                style={{ color: style.text }}
              >
                ≈ {t.risque_chf.toLocaleString("fr-CH")} CHF
              </span>
            </div>
            <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">
              {t.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
