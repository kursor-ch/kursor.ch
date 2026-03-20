"use client";

import { useEffect, useState } from "react";
import { ScoreBreakdown } from "@/lib/scoring";
import { Verdict } from "@/lib/verdicts";
import CategoryBar from "@/components/ui/CategoryBar";
import VerdictBadge from "@/components/ui/VerdictBadge";

interface ResultsScreenProps {
  scores: ScoreBreakdown;
  verdict: Verdict;
  prenom: string;
}

export default function ResultsScreen({
  scores,
  verdict,
  prenom,
}: ResultsScreenProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const target = scores.total;
    const duration = 1200;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayScore(target);
        clearInterval(interval);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [scores.total]);

  const categories = [
    { label: "Profil professionnel", score: scores.profil, max: 30 },
    { label: "Maturité projet", score: scores.projet, max: 30 },
    { label: "Solidité financière", score: scores.financier, max: 20 },
    { label: "Préparation", score: scores.preparation, max: 20 },
  ];

  return (
    <div className="animate-screen-in space-y-8 text-center">
      <div className="space-y-4 animate-count-up">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-px" />
          Votre score de viabilité
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span
            className="text-6xl md:text-7xl font-heading font-bold"
            style={{ color: verdict.color }}
          >
            {displayScore}
          </span>
          <span className="text-2xl text-gray-400 font-heading">/100</span>
        </div>
        <VerdictBadge
          label={verdict.label}
          color={verdict.color}
          bgLight={verdict.bgLight}
        />
      </div>

      <div className="max-w-md mx-auto space-y-4 text-left">
        {categories.map((cat) => (
          <CategoryBar
            key={cat.label}
            label={cat.label}
            score={cat.score}
            max={cat.max}
            color={verdict.color}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-base text-gray-600 leading-relaxed">
          {verdict.summary}
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <p className="text-sm text-gray-500">
          Votre rapport détaillé arrive dans votre boîte email sous quelques minutes.
        </p>
      </div>

      <div className="max-w-md mx-auto pt-4 border-t border-gray-100 space-y-3">
        <a
          href="https://calendly.com/sav-gcconsulting/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-white font-semibold text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
        >
          Réserver un appel gratuit de 15 minutes →
        </a>
        <p className="text-xs text-gray-400">
          Sans engagement. Un expert analyse votre situation et vous oriente.
        </p>
      </div>
    </div>
  );
}
