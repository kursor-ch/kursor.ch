"use client";

import { useEffect, useRef, useState } from "react";
import { K_PATH_D, K_VIEWBOX, K_TRANSFORM } from "@/components/shared/k-path";

interface KDrawLoaderProps {
  size?: number;
  color?: string;
  durationMs?: number;
  className?: string;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function KDrawLoader({
  size = 120,
  color = "#D97706",
  durationMs = 1500,
  className,
}: KDrawLoaderProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState<number>(0);
  const [drawn, setDrawn] = useState<boolean>(false);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setDrawn(true);
      return;
    }

    const len = el.getTotalLength();
    setPathLen(len);

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setDrawn(true));
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <svg
      className={`k-draw-loader ${className ?? ""}`}
      width={size}
      height={size}
      viewBox={K_VIEWBOX}
      role="presentation"
      focusable="false"
      style={{ color }}
    >
      <g transform={K_TRANSFORM}>
        <path
          ref={pathRef}
          d={K_PATH_D}
          fill={drawn ? "currentColor" : "transparent"}
          stroke="currentColor"
          strokeOpacity={drawn ? 0 : 1}
          strokeWidth={200}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={
            pathLen > 0
              ? {
                  strokeDasharray: pathLen,
                  strokeDashoffset: drawn ? 0 : pathLen,
                }
              : undefined
          }
        />
      </g>
    </svg>
  );
}
