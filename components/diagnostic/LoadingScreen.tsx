"use client";

import { useState, useEffect } from "react";

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
    // Progress bar animation: 0 to 100 over 3s
    const startTime = Date.now();
    const duration = 3000;
    const raf = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct * 100);
      if (pct < 1) {
        requestAnimationFrame(raf);
      }
    };
    requestAnimationFrame(raf);

    // Message transitions at 1s and 2s, complete at 3s
    const t1 = setTimeout(() => setActiveIndex(1), 1000);
    const t2 = setTimeout(() => setActiveIndex(2), 2000);
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Pulsing amber dot */}
      <div className="mb-10">
        <span className="relative flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/40" />
          <span className="relative inline-flex h-5 w-5 rounded-full bg-amber" />
        </span>
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
