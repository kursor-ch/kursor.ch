"use client";

import { Fragment, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KBullet } from "@/components/shared/KBullet";
import CountUp from "@/components/shared/CountUp";

const FALLBACK_TOTAL_DIAGNOSTICS = 3155;

const STATIC_STATS: Array<{ to: number; suffix?: string; label: string }> = [
  { to: FALLBACK_TOTAL_DIAGNOSTICS, label: "diagnostics réalisés" },
  { to: 6, label: "cantons romands couverts" },
  { to: 4, label: "partenaires spécialisés" },
  { to: 100, suffix: "%", label: "gratuit" },
];

const CANTONS = [
  "Genève",
  "Vaud",
  "Valais",
  "Neuchâtel",
  "Fribourg",
  "Jura",
];

export default function StatsBand() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [totalDiagnostics, setTotalDiagnostics] = useState<number>(
    FALLBACK_TOTAL_DIAGNOSTICS,
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/api/stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { total_diagnostics?: unknown } | null) => {
        if (cancelled) return;
        const n = data?.total_diagnostics;
        if (typeof n === "number" && Number.isFinite(n) && n > 0) {
          setTotalDiagnostics(Math.round(n));
        }
      })
      .catch(() => {
        // silent fail — keep fallback
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = STATIC_STATS.map((s, i) =>
    i === 0 ? { ...s, to: totalDiagnostics } : s,
  );

  return (
    <>
      <div style={{ backgroundColor: "#FDFAF5" }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <p
            className="font-body text-center uppercase tracking-widest text-[11px] md:text-[12px]"
            style={{
              fontWeight: 500,
              color: "#D97706",
              marginBottom: 16,
            }}
          >
            Présent à :{" "}
            {CANTONS.map((canton, i) => (
              <Fragment key={canton}>
                {i > 0 && <KBullet />}
                {canton}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    <section
      ref={ref}
      className={`relative w-full scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{
        backgroundColor: "#D97706",
        paddingTop: 56,
        paddingBottom: 56,
        overflow: "hidden",
      }}
    >
      {/* Subtle radial highlights for texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(255,255,255,0.08) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, rgba(255,255,255,0.06) 0%, transparent 55%)",
        }}
      />

      <div
        className="relative mx-auto px-6 grid grid-cols-2 lg:grid-cols-4"
        style={{ maxWidth: 1120, gap: 24 }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center lg:text-left relative scroll-fade scroll-stagger-${i + 1} ${isVisible ? "visible" : ""}`}
            style={
              i > 0
                ? {
                    paddingLeft: 0,
                  }
                : undefined
            }
          >
            {/* Vertical divider on lg+ */}
            {i > 0 && (
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-2 bottom-2"
                style={{
                  left: -12,
                  width: 1,
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
              />
            )}
            <p
              className="font-heading italic text-[36px] sm:text-[42px] lg:text-[44px]"
              style={{
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              <CountUp to={stat.to} suffix={stat.suffix ?? ""} duration={1400} />
            </p>
            <p
              className="font-body"
              style={{
                fontSize: 13.5,
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.5,
                marginTop: 10,
                letterSpacing: "0.01em",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
