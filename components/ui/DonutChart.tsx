"use client";

import { useEffect, useState, useRef } from "react";

interface CategorySegment {
  label: string;
  score: number;
  color: string;
}

interface DonutChartProps {
  total: number;
  categories: CategorySegment[];
  verdictLabel: string;
  verdictColor: string;
  onAnimationComplete?: () => void;
}

export default function DonutChart({
  total,
  categories,
  verdictLabel,
  verdictColor,
  onAnimationComplete,
}: DonutChartProps) {
  const [animProgress, setAnimProgress] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);

      setAnimProgress(eased);
      setDisplayScore(Math.round(eased * total));

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        if (!completedRef.current) {
          completedRef.current = true;
          onAnimationComplete?.();
        }
      }
    };

    requestAnimationFrame(animate);
  }, [total, onAnimationComplete]);

  // SVG donut math
  const size = 220;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Total filled portion = (total / 100) of the ring
  const filledLength = (total / 100) * circumference;
  const unfilledLength = circumference - filledLength;

  // Build category arcs
  const totalScore = categories.reduce((sum, c) => sum + c.score, 0);
  const segments: { offset: number; length: number; color: string }[] = [];
  let accumulated = 0;

  for (const cat of categories) {
    if (cat.score <= 0) {
      segments.push({ offset: 0, length: 0, color: cat.color });
      continue;
    }
    const proportion = cat.score / (totalScore || 1);
    const segLength = proportion * filledLength;
    segments.push({
      offset: accumulated,
      length: segLength,
      color: cat.color,
    });
    accumulated += segLength;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          {/* Background ring (unfilled) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E7E5E4"
            strokeWidth={strokeWidth}
          />

          {/* Category segments */}
          {segments.map((seg, i) => {
            const animatedLength = seg.length * animProgress;
            const animatedOffset = seg.offset * animProgress;
            // dasharray: visible portion, then gap for the rest
            const dasharray = `${animatedLength} ${circumference - animatedLength}`;
            // dashoffset: negative to rotate to correct position
            const dashoffset = -animatedOffset;

            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                strokeLinecap="butt"
              />
            );
          })}
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
          <span
            className="text-5xl font-heading font-bold leading-none"
            style={{ color: verdictColor }}
          >
            {displayScore}
          </span>
          <span className="text-base text-gray-400 font-heading mt-0.5">
            /100
          </span>
          <span
            className="text-xs font-bold uppercase tracking-wider mt-2 px-3 py-1 rounded-full"
            style={{
              color: verdictColor,
              backgroundColor: `${verdictColor}15`,
            }}
          >
            {verdictLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
