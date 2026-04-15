"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function OpportunitySection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      className="relative px-6"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: 88,
        paddingBottom: 88,
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 960 }}
      >
        <div
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center p-7 sm:p-9 lg:p-11"
          style={{
            backgroundColor: "#FFFBF0",
            border: "1px solid rgba(217,119,6,0.28)",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(217,119,6,0.06)",
          }}
        >
          {/* Left: copy */}
          <div>
            {/* Urgent eyebrow */}
            <span
              className="inline-flex items-center gap-2 font-body uppercase"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#B91C1C",
                backgroundColor: "rgba(220,38,38,0.08)",
                border: "1px solid rgba(220,38,38,0.25)",
                padding: "5px 12px",
                borderRadius: 999,
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#DC2626",
                }}
              />
              Opportunité fiscale 2026
            </span>

            <h2
              className="font-heading text-[28px] sm:text-[34px] lg:text-[40px]"
              style={{
                fontWeight: 600,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginTop: 16,
              }}
            >
              La loi qui va faire parler
              <br />
              <span
                className="font-heading italic"
                style={{ color: "#D97706", fontWeight: 500 }}
              >
                pendant 12 mois.
              </span>
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: 15.5,
                fontWeight: 400,
                color: "#475569",
                lineHeight: 1.7,
                marginTop: 20,
              }}
            >
              Depuis le 1er janvier 2026, la loi suisse permet aux résidents de
              rattraper rétroactivement les versements 3ème pilier non
              effectués pendant les 10 dernières années. Un rattrapage qui peut
              atteindre{" "}
              <span style={{ fontWeight: 600, color: "#0F172A" }}>
                36 290 CHF de versements
              </span>
              , et générer jusqu&rsquo;à{" "}
              <span style={{ fontWeight: 600, color: "#0F172A" }}>
                13 000 CHF d&rsquo;économie fiscale immédiate
              </span>
              .
            </p>

            <p
              className="font-body"
              style={{
                fontSize: 15.5,
                fontWeight: 400,
                color: "#475569",
                lineHeight: 1.7,
                marginTop: 14,
              }}
            >
              La majorité des résidents francophones en Suisse n&rsquo;ont
              jamais entendu parler de cette réforme. Ceux qui agissent avant
              2027 prendront plusieurs longueurs d&rsquo;avance sur leur
              patrimoine retraite.
            </p>

            <Link
              href="/prevoyance"
              className="font-body cta-btn group"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 28,
                backgroundColor: "#D97706",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 500,
                padding: "13px 24px",
                borderRadius: 10,
                boxShadow: "0 4px 16px rgba(217,119,6,0.22)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B45309";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D97706";
              }}
            >
              Calculer mon rattrapage
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </Link>
          </div>

          {/* Right: numeric visual (hidden on mobile, shown on lg+) */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-col items-center justify-center shrink-0"
            style={{
              width: 220,
              padding: "24px 20px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(217,119,6,0.25)",
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(15,23,42,0.05)",
            }}
          >
            <p
              className="font-body uppercase"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#94A3B8",
                marginBottom: 10,
              }}
            >
              Rattrapage max.
            </p>
            <p
              className="font-heading italic"
              style={{
                fontSize: 40,
                fontWeight: 500,
                color: "#D97706",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              36 290
            </p>
            <p
              className="font-body"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#475569",
                marginTop: 4,
                letterSpacing: "0.02em",
              }}
            >
              CHF sur 10 ans
            </p>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#E2E8F0",
                margin: "16px 0",
              }}
            />
            <p
              className="font-body uppercase"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#94A3B8",
                marginBottom: 6,
              }}
            >
              Économie fiscale
            </p>
            <p
              className="font-heading"
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#0F172A",
                lineHeight: 1,
              }}
            >
              jusqu&rsquo;à 13 000 CHF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
