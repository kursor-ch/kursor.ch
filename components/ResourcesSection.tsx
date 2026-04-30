"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KBullet } from "@/components/shared/KBullet";

const resources = [
  {
    category: "Prévoyance",
    title:
      "Guide Retraite 2026 : pourquoi les expatriés perdent en moyenne 180 000 CHF",
    source: "Kursor CH",
    reading: "12 min de lecture",
    href: "/actualite",
  },
  {
    category: "Assurances",
    title:
      "Guide Audit Assurances 2026 : les 7 erreurs qui coûtent le plus cher",
    source: "Kursor CH",
    reading: "10 min de lecture",
    href: "/actualite",
  },
  {
    category: "Logement",
    title:
      "Guide Logement Suisse romande : le dossier qui passe du premier coup",
    source: "Kursor CH",
    reading: "8 min de lecture",
    href: "/actualite",
  },
];

export default function ResourcesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="ressources"
      className="relative px-6 scroll-mt-20"
      style={{
        backgroundColor: "#FDFAF5",
        paddingTop: 88,
        paddingBottom: 88,
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 1120 }}
      >
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div style={{ maxWidth: 620 }}>
            <span
              className="inline-block font-body uppercase"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#D97706",
              }}
            >
              Ressources gratuites
            </span>
            <h2
              className="font-heading text-[28px] sm:text-[34px] lg:text-[40px]"
              style={{
                fontWeight: 600,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginTop: 14,
              }}
            >
              Comprendre la Suisse,
              <span
                className="font-heading italic"
                style={{ color: "#D97706", fontWeight: 500 }}
              >
                {" "}
                sans jargon.
              </span>
            </h2>
            <p
              className="font-body"
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#475569",
                lineHeight: 1.65,
                marginTop: 16,
              }}
            >
              Nos guides détaillés, mis à jour avec les données officielles
              OFSP, SECO et BSV 2026.
            </p>
          </div>
          <Link
            href="/actualite"
            className="font-body shrink-0 self-start lg:self-end"
            style={{
              color: "#D97706",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 0",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.15s ease, color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "#D97706";
              e.currentTarget.style.color = "#B45309";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "transparent";
              e.currentTarget.style.color = "#D97706";
            }}
          >
            Tous les articles →
          </Link>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ marginTop: 48 }}
        >
          {resources.map((r) => (
            <li key={r.title}>
              <Link
                href={r.href}
                className="group block h-full bg-white rounded-xl transition-all"
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "24px 22px",
                  boxShadow: "0 2px 8px rgba(15,23,42,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(217,119,6,0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(217,119,6,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(15,23,42,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Category pill */}
                <span
                  className="inline-block font-body uppercase"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#D97706",
                    backgroundColor: "#FEF3C7",
                    border: "1px solid rgba(217,119,6,0.25)",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {r.category}
                </span>

                <h3
                  className="font-heading"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#0F172A",
                    lineHeight: 1.35,
                    marginTop: 16,
                  }}
                >
                  {r.title}
                </h3>

                <p
                  className="font-body"
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#94A3B8",
                    marginTop: 20,
                    letterSpacing: "0.01em",
                  }}
                >
                  <span>{r.source}</span>
                  <KBullet />
                  <span>{r.reading}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
