"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  HouseKeyIcon,
  ShieldCheckIcon,
  PiggyBankIcon,
} from "@/components/ui/ServiceIcons";
import { KBullet } from "@/components/shared/KBullet";
import { KWatermark } from "@/components/shared/KWatermark";

const dashboardItems = [
  {
    Icon: BriefcaseIcon,
    title: "Diagnostic Emploi",
    subtitle: "Évaluez votre potentiel salaire suisse",
    progress: 100,
    live: true,
  },
  {
    Icon: HouseKeyIcon,
    title: "Diagnostic Logement",
    subtitle: "Estimez votre temps de recherche",
    progress: 65,
    live: false,
  },
  {
    Icon: ShieldCheckIcon,
    title: "Audit Assurances",
    subtitle: "Identifiez vos surcoûts et trous de couverture",
    progress: 40,
    live: false,
  },
  {
    Icon: PiggyBankIcon,
    title: "Audit Retraite",
    subtitle: "Calculez votre perte fiscale annuelle",
    progress: 25,
    live: false,
  },
];

const stats = [
  "3 155 diagnostics réalisés",
  "6 cantons romands couverts",
  "4 partenaires spécialisés",
  "100% gratuit",
];

export default function HeroSection() {
  return (
    <section
      className="relative bg-creme px-6 grain-overlay"
      style={{ paddingTop: 64, paddingBottom: 64 }}
    >
      <KWatermark position="top-right" size="lg" offset={80} />

      {/* Subtle Alps silhouette watermark — subliminal Swiss landscape anchor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[100px] md:h-[180px]"
        style={{ zIndex: 0 }}
      >
        <svg
          viewBox="0 0 1280 180"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          style={{ display: "block", opacity: 0.08 }}
        >
          <path
            d="M 0 180 L 0 150 L 120 80 L 200 110 L 320 50 L 440 90 L 620 10 L 720 120 L 860 60 L 980 100 L 1100 85 L 1280 150 L 1280 180 Z"
            fill="#D97706"
          />
        </svg>
      </div>

      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center"
        style={{ maxWidth: 1120, zIndex: 10 }}
      >
        {/* Left column — copy */}
        <div className="text-center lg:text-left">
          {/* Eyebrow */}
          <span
            className="inline-block font-body uppercase animate-hero-badge"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#D97706",
              border: "1px solid rgba(217,119,6,0.35)",
              backgroundColor: "rgba(217,119,6,0.06)",
              padding: "5px 12px",
              borderRadius: 20,
            }}
          >
            <span>Diagnostic gratuit</span>
            <KBullet color="#D97706" />
            <span>Romandie</span>
          </span>

          {/* Headline */}
          <h1
            className="font-heading animate-hero-subtitle text-[36px] sm:text-[44px] lg:text-[56px]"
            style={{
              fontWeight: 600,
              color: "#111827",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              marginTop: 20,
              animationDelay: "120ms",
            }}
          >
            La vie en Suisse,
            <br />
            <span
              className="font-heading italic"
              style={{ color: "#D97706", fontWeight: 500 }}
            >
              enfin simplifiée.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="font-body animate-hero-subtitle mx-auto lg:mx-0"
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#475569",
              lineHeight: 1.65,
              maxWidth: 520,
              marginTop: 20,
              animationDelay: "260ms",
            }}
          >
            Emploi, logement, assurances, prévoyance. Quatre diagnostics
            gratuits pour identifier, en 5 minutes, les décisions qui vont peser
            sur votre budget pendant 10 ans.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 animate-hero-subtitle"
            style={{ marginTop: 32, animationDelay: "400ms" }}
          >
            <Link
              href="/emploi"
              className="font-body cta-btn group"
              style={{
                backgroundColor: "#D97706",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 26px",
                borderRadius: 10,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 16px rgba(217,119,6,0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B45309";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D97706";
              }}
            >
              Commencer mon diagnostic
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </Link>

            <Link
              href="#outils"
              className="font-body"
              style={{
                color: "#475569",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 4px",
                borderBottom: "1px solid transparent",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111827";
                e.currentTarget.style.borderBottomColor = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#475569";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              Voir les 4 outils
            </Link>
          </div>

          {/* Stats grid */}
          <ul
            className="animate-hero-subtitle grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-6 lg:gap-x-8 lg:gap-y-3 font-body justify-items-center lg:justify-items-start"
            style={{
              marginTop: 36,
              animationDelay: "560ms",
              fontSize: 13,
              fontWeight: 400,
              color: "#64748B",
            }}
          >
            {stats.map((stat) => (
              <li key={stat} className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full animate-green-pulse shrink-0"
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: "#15803D",
                  }}
                />
                <span>{stat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — dashboard preview card */}
        <div
          className="relative animate-hero-subtitle mx-auto w-full"
          style={{
            animationDelay: "340ms",
            maxWidth: 520,
          }}
        >
          {/* Ambient amber glow behind card */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(217,119,6,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(217,119,6,0.08) 0%, transparent 55%)",
              transform: "translate(0, 0)",
            }}
          />

          <div
            className="relative bg-white rounded-2xl"
            style={{
              border: "1px solid #E2E8F0",
              boxShadow:
                "0 24px 48px -12px rgba(15,23,42,0.12), 0 8px 16px -8px rgba(15,23,42,0.08)",
              padding: "22px 22px 18px",
            }}
          >
            {/* Card header */}
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: 18 }}
            >
              <div>
                <p
                  className="font-body uppercase"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#94A3B8",
                    marginBottom: 4,
                  }}
                >
                  Tableau de bord
                </p>
                <p
                  className="font-heading"
                  style={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}
                >
                  Vos 4 diagnostics
                </p>
              </div>
              <span
                className="font-body uppercase"
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#15803D",
                  backgroundColor: "rgba(21,128,61,0.08)",
                  padding: "4px 8px",
                  borderRadius: 6,
                }}
              >
                ● En ligne
              </span>
            </div>

            {/* Diagnostic rows */}
            <ul className="flex flex-col" style={{ gap: 10 }}>
              {dashboardItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3"
                  style={{
                    padding: "12px 14px",
                    backgroundColor: item.live ? "#FFFBF0" : "#F8FAFC",
                    border: `1px solid ${item.live ? "rgba(217,119,6,0.25)" : "#E2E8F0"}`,
                    borderRadius: 10,
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: item.live
                        ? "rgba(217,119,6,0.10)"
                        : "#FFFFFF",
                      border: "1px solid rgba(217,119,6,0.15)",
                      borderRadius: 8,
                    }}
                  >
                    <item.Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body truncate"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#0F172A",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-body italic truncate"
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#64748B",
                        marginTop: 1,
                      }}
                    >
                      {item.subtitle}
                    </p>
                    {/* Progress bar */}
                    <div
                      className="relative overflow-hidden"
                      style={{
                        marginTop: 6,
                        height: 3,
                        backgroundColor: "#E2E8F0",
                        borderRadius: 2,
                      }}
                    >
                      <div
                        style={{
                          width: `${item.progress}%`,
                          height: "100%",
                          backgroundColor: "#D97706",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer strip */}
            <div
              className="flex items-center justify-between font-body"
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid #E2E8F0",
                fontSize: 12,
                fontWeight: 400,
                color: "#64748B",
              }}
            >
              <span>5 minutes par diagnostic</span>
              <span style={{ color: "#D97706", fontWeight: 500 }}>
                100% gratuit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
