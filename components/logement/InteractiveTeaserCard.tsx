"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { KBullet } from "@/components/shared/KBullet";
import { KNegativeSpace } from "@/components/shared/KNegativeSpace";
import { logementQuestionScreens } from "@/lib/logement/questions";

/**
 * Canonical Q1 options — imported directly from the diagnostic's source of
 * truth so the teaser → diagnostic handoff is byte-identical. Do NOT hardcode
 * labels here; if Q1 ever changes shape, the teaser automatically follows.
 */
const LOGEMENT_Q1_OPTIONS = logementQuestionScreens[0].questions[0].options;
const LOGEMENT_Q1_KEYS = new Set(LOGEMENT_Q1_OPTIONS.map((o) => o.key));

export const LOGEMENT_Q1_STORAGE_KEY = "kursor_logement_q1";

export function isValidQ1OptionKey(value: unknown): value is string {
  return typeof value === "string" && LOGEMENT_Q1_KEYS.has(value);
}

function readPreviousAnswer(): string | null {
  try {
    const raw = localStorage.getItem(LOGEMENT_Q1_STORAGE_KEY);
    return isValidQ1OptionKey(raw) ? raw : null;
  } catch {
    return null;
  }
}

export default function InteractiveTeaserCard() {
  const router = useRouter();
  const [previousKey, setPreviousKey] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPreviousKey(readPreviousAnswer());
    setHydrated(true);
  }, []);

  const handleAnswer = (optionKey: string) => {
    try {
      localStorage.setItem(LOGEMENT_Q1_STORAGE_KEY, optionKey);
    } catch {
      /* private browsing / storage disabled — fall through to URL param */
    }
    // Navigate to /logement (NOT /diagnostic/logement — that route is a
    // server-side redirect that strips query strings).
    router.push(`/logement?q1=${encodeURIComponent(optionKey)}`);
  };

  const handleResume = () => {
    // Same navigation path; LogementApp reads localStorage on mount and
    // advances past Q1.
    router.push("/logement?resume=1");
  };

  const handleRestart = () => {
    try {
      localStorage.removeItem(LOGEMENT_Q1_STORAGE_KEY);
    } catch {
      /* no-op */
    }
    setPreviousKey(null);
  };

  const previousLabel = previousKey
    ? LOGEMENT_Q1_OPTIONS.find((o) => o.key === previousKey)?.label ?? null
    : null;

  const showResume = hydrated && previousKey !== null && previousLabel !== null;

  return (
    <KNegativeSpace
      corner="top-right"
      size={36}
      className="teaser-card bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
    >
      {showResume ? (
        <div className="teaser-resume">
          <p className="teaser-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-amber mb-4">
            VOUS AVIEZ COMMENCÉ
          </p>
          <p className="teaser-resume-answer font-heading text-[20px] leading-snug text-gray-900 mb-6">
            {previousLabel}
          </p>
          <button
            type="button"
            onClick={handleResume}
            className="teaser-resume-cta w-full bg-amber text-white font-semibold rounded-xl px-5 py-4 shadow-md shadow-amber/20 transition-all duration-200 hover:brightness-110 hover:shadow-lg"
          >
            Reprendre le diagnostic →
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="teaser-resume-restart mt-4 w-full text-center text-[13px] text-gray-500 underline-offset-4 hover:text-amber hover:underline transition-colors"
          >
            Recommencer
          </button>
        </div>
      ) : (
        <>
          <p className="teaser-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-amber mb-4">
            COMMENCEZ MAINTENANT
          </p>
          <h3 className="teaser-question font-heading text-[22px] leading-[1.3] font-medium text-gray-900 mb-6">
            Quelle est votre situation actuelle ?
          </h3>
          <div className="teaser-options flex flex-col gap-[6px] mb-6">
            {LOGEMENT_Q1_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleAnswer(opt.key)}
                className="teaser-option w-full text-left bg-creme border border-[#E5E7EB] rounded-xl px-4 py-[14px] text-[15px] text-gray-900 transition-colors duration-200 hover:border-amber hover:bg-[#FEF3E2] focus:outline-none focus:border-amber focus:bg-[#FEF3E2]"
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="teaser-footer text-[12px] text-gray-500 text-center flex items-center justify-center flex-wrap">
            <span>Diagnostic complet en 2 minutes</span>
            <KBullet />
            <span>6 questions restantes</span>
          </p>
        </>
      )}
    </KNegativeSpace>
  );
}
