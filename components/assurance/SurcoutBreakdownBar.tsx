"use client";

import type { SurcoutBreakdown } from "@/lib/assurance/types";

interface SurcoutBreakdownBarProps {
  breakdown: SurcoutBreakdown;
  total: number;
}

const SEGMENTS: { key: keyof SurcoutBreakdown; label: string; color: string }[] = [
  { key: "franchise", label: "Franchise mal calibrée", color: "#D97706" },
  { key: "modele", label: "Modèle d'assurance", color: "#EA580C" },
  { key: "inertie", label: "Inertie (non-comparé)", color: "#B45309" },
  { key: "doublons", label: "Doublons de couverture", color: "#92400E" },
  { key: "complementaires", label: "Complémentaires", color: "#78350F" },
];

export default function SurcoutBreakdownBar({
  breakdown,
  total,
}: SurcoutBreakdownBarProps) {
  // Guard against zero to avoid div-by-zero in percentage computation.
  const safeTotal = total > 0 ? total : 1;

  const segments = SEGMENTS.map((seg) => ({
    ...seg,
    value: breakdown[seg.key],
    pct: (breakdown[seg.key] / safeTotal) * 100,
  })).filter((s) => s.value > 0);

  if (segments.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic text-center">
        Aucun surcoût significatif détecté — votre configuration est proche de
        l&apos;optimum.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full h-4 rounded-full overflow-hidden bg-stone-100 flex">
        {segments.map((seg) => (
          <div
            key={seg.key}
            className="h-full transition-all duration-500"
            style={{
              width: `${seg.pct}%`,
              backgroundColor: seg.color,
            }}
            title={`${seg.label}: ${seg.value} CHF`}
          />
        ))}
      </div>

      <ul className="space-y-2">
        {segments.map((seg) => (
          <li
            key={seg.key}
            className="flex items-center justify-between text-sm font-body"
          >
            <span className="flex items-center gap-2.5 text-gray-700">
              <span
                className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              {seg.label}
            </span>
            <span className="font-semibold text-gray-900 tabular-nums">
              +{seg.value.toLocaleString("fr-CH")} CHF/an
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
