"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  format?: (value: number) => string;
  prefix?: string;
  suffix?: string;
  className?: string;
  threshold?: number;
}

const NARROW_NBSP = " ";

function defaultFormat(value: number): string {
  const rounded = Math.round(value);
  return rounded
    .toLocaleString("fr-CH")
    .replace(/[,    ]/g, NARROW_NBSP);
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CountUp({
  to,
  from = 0,
  duration = 1200,
  format = defaultFormat,
  prefix = "",
  suffix = "",
  className,
  threshold = 0.4,
}: CountUpProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });
  const [value, setValue] = useState<number>(from);

  useEffect(() => {
    if (!isVisible) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
