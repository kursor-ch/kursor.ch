"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

const DEFAULTS: Required<ScrollRevealOptions> = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
  once: true,
  delay: 0,
};

export function useScrollReveal(
  thresholdOrOptions: number | ScrollRevealOptions = DEFAULTS.threshold,
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const opts: Required<ScrollRevealOptions> =
    typeof thresholdOrOptions === "number"
      ? { ...DEFAULTS, threshold: thresholdOrOptions }
      : { ...DEFAULTS, ...thresholdOrOptions };

  const { threshold, rootMargin, once, delay } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const reveal = () => {
      if (delay > 0) {
        timeoutId = window.setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [threshold, rootMargin, once, delay]);

  return { ref, isVisible };
}
