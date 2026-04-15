"use client";

import { useEffect, useState } from "react";
import type { LogementTier } from "@/lib/logement/verdicts";

interface DifficultyGaugeProps {
  score: number;
  tier: LogementTier;
}

const TIERS: { key: LogementTier; label: string; color: string }[] = [
  { key: "faisable", label: "Faisable", color: "#86A789" },
  { key: "moderee", label: "Modérée", color: "#B8C99D" },
  { key: "difficile", label: "Difficile", color: "#E8B86D" },
  { key: "tres_difficile", label: "Très difficile", color: "#D97706" },
  { key: "quasi_impossible", label: "Quasi-impossible", color: "#B45309" },
];

export default function DifficultyGauge({ score, tier }: DifficultyGaugeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clampedScore = Math.max(0, Math.min(100, Math.round(score)));
  const activeTier = TIERS.find((t) => t.key === tier) ?? TIERS[1];
  const markerLeft = mounted ? clampedScore : 0;

  return (
    <div
      role="img"
      aria-label={`Difficulté de votre recherche : ${activeTier.label}, ${clampedScore} sur 100`}
      className="mx-auto w-full max-w-[600px]"
    >
      {/* Track + marker */}
      <div className="relative">
        {/* Bar: 5 segments */}
        <div className="flex h-3 w-full gap-[2px] rounded-full overflow-hidden">
          {TIERS.map((t) => (
            <div
              key={t.key}
              className="flex-1 first:rounded-l-full last:rounded-r-full"
              style={{
                backgroundColor: t.color,
                opacity: t.key === tier ? 1 : 0.35,
              }}
            />
          ))}
        </div>

        {/* Marker line — 3px wide, 8px overhang top/bottom.
            Animates from 0% to the target score on mount (800ms ease-out). */}
        <div
          className="absolute w-[3px] pointer-events-none"
          style={{
            left: `${markerLeft}%`,
            top: "-8px",
            bottom: "-8px",
            transform: "translateX(-50%)",
            backgroundColor: "#1F2937",
            transition: "left 800ms ease-out",
          }}
        />

        {/* Marker circle — 10px, sits on top of bar. Animates with the line. */}
        <div
          className="absolute w-[10px] h-[10px] rounded-full pointer-events-none"
          style={{
            left: `${markerLeft}%`,
            top: "6px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1F2937",
            transition: "left 800ms ease-out",
          }}
        />
      </div>

      {/* Zone labels */}
      <div className="mt-4 flex w-full gap-[2px]">
        {TIERS.map((t) => {
          const active = t.key === tier;
          return (
            <div
              key={t.key}
              aria-hidden="true"
              className="flex-1 text-center font-body uppercase text-[9px] sm:text-[11px]"
              style={{
                letterSpacing: "0.05em",
                color: active ? "#1F2937" : "#6B7280",
                fontWeight: active ? 600 : 400,
              }}
            >
              {t.label}
            </div>
          );
        })}
      </div>

      {/* Score annotation */}
      <p
        className="mt-3 text-center font-body"
        style={{ fontSize: "13px", color: "#6B7280" }}
      >
        Score de difficulté : {clampedScore}/100
      </p>
    </div>
  );
}
