"use client";

import { useState, useEffect } from "react";
import KDrawLoader from "@/components/shared/KDrawLoader";

interface LoadingScreenProps {
  onComplete: () => void;
}

const messages = [
  "Analyse de votre profil...",
  "Évaluation de votre projet...",
  "Calcul de votre score de viabilité...",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation: 0 to 100 over 2.2s
    const startTime = Date.now();
    const duration = 2200;
    const raf = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct * 100);
      if (pct < 1) {
        requestAnimationFrame(raf);
      }
    };
    requestAnimationFrame(raf);

    // Message transitions evenly spaced, complete at 2.2s
    const t1 = setTimeout(() => setActiveIndex(1), 733);
    const t2 = setTimeout(() => setActiveIndex(2), 1466);
    const t3 = setTimeout(() => onComplete(), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* K logo drawing itself */}
      <div className="mb-10">
        <KDrawLoader size={120} color="#D97706" durationMs={1500} />
      </div>

      {/* Messages */}
      <div className="h-16 flex items-center justify-center mb-10">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`absolute text-lg font-body text-gray-700 transition-all duration-500 ${
              i === activeIndex
                ? "opacity-100 translate-y-0"
                : i < activeIndex
                ? "opacity-0 -translate-y-3"
                : "opacity-0 translate-y-3"
            }`}
          >
            {msg}
          </p>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs h-1 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber rounded-full transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
