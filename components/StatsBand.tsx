"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { figure: "3 155", label: "diagnostics réalisés" },
  { figure: "6", label: "cantons romands couverts" },
  { figure: "4", label: "partenaires spécialisés" },
  { figure: "100%", label: "gratuit" },
];

export default function StatsBand() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
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
            className="text-center lg:text-left relative"
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
              className="font-heading italic"
              style={{
                fontSize: 44,
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {stat.figure}
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
  );
}
