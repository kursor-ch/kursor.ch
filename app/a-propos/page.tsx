"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    title: "Gratuit, toujours.",
    description:
      "Nos diagnostics sont financés par nos partenaires. Vous ne payez jamais rien.",
  },
  {
    title: "Confidentiel.",
    description:
      "Vos données ne sont partagées qu\u2019avec votre accord explicite. Jamais revendues.",
  },
  {
    title: "Spécialisé Suisse.",
    description:
      "Chaque donnée, chaque conseil, chaque partenaire est ancré dans la réalité suisse. Pas des généralités copiées d\u2019internet.",
  },
];

const stats = [
  { number: "3\u00a0155+", label: "diagnostics réalisés" },
  { number: "4", label: "domaines d\u2019expertise" },
  { number: "6", label: "cantons couverts" },
];

function ValueProp({
  value,
  isLast,
}: {
  value: (typeof values)[number];
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
      <div style={{ paddingTop: 28, paddingBottom: 28 }}>
        <h3
          className="font-heading"
          style={{ fontSize: 20, fontWeight: 600, color: "#111827" }}
        >
          {value.title}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: 1.7,
            marginTop: 8,
          }}
        >
          {value.description}
        </p>
      </div>
      {!isLast && (
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #D97706 30%, #D97706 70%, transparent)",
          }}
        />
      )}
    </div>
  );
}

export default function AProposPage() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal(0.15);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);

  return (
    <div className="bg-creme">
      {/* Hero */}
      <section className="px-6 text-center" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <h1
          className="font-heading"
          style={{ fontSize: 36, fontWeight: 600, color: "#111827" }}
        >
          Pourquoi Kursor CH
        </h1>
        <p
          className="font-body mx-auto"
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: 520,
            marginTop: 16,
          }}
        >
          Un interlocuteur unique pour chaque étape de votre vie en Suisse.
        </p>
      </section>

      {/* Mission statement */}
      <section
        ref={missionRef}
        className={`px-6 mx-auto scroll-reveal ${missionVisible ? "visible" : ""}`}
        style={{ maxWidth: 560, paddingTop: 24, paddingBottom: 40 }}
      >
        <p
          className="font-body text-center"
          style={{
            fontSize: 17,
            fontWeight: 400,
            color: "#4B5563",
            lineHeight: 1.8,
          }}
        >
          Le système suisse est complexe. Fiscalité, assurances, prévoyance,
          chaque décision prise dans les premiers mois engage pour des
          années. Kursor CH existe pour que ces décisions soient éclairées,
          pas subies.
        </p>
      </section>

      {/* Value propositions */}
      <section className="px-6 mx-auto" style={{ maxWidth: 560, paddingBottom: 40 }}>
        {values.map((v, i) => (
          <ValueProp key={v.title} value={v} isLast={i === values.length - 1} />
        ))}
      </section>

      {/* Numbers strip */}
      <section
        ref={statsRef}
        className={`px-6 scroll-reveal ${statsVisible ? "visible" : ""}`}
        style={{ paddingTop: 32, paddingBottom: 48 }}
      >
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          style={{ maxWidth: 600 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span
                className="font-heading block"
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1,
                }}
              >
                {s.number}
              </span>
              <span
                className="font-body block"
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#9CA3AF",
                  marginTop: 4,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="px-6 text-center"
        style={{ paddingTop: 24, paddingBottom: 80 }}
      >
        <h2
          className="font-heading"
          style={{ fontSize: 24, fontWeight: 600, color: "#111827" }}
        >
          Prêt à commencer ?
        </h2>
        <Link
          href="/#services"
          className="inline-block rounded-lg text-white font-body transition-all duration-200"
          style={{
            backgroundColor: "#D97706",
            fontSize: 15,
            fontWeight: 500,
            padding: "14px 28px",
            marginTop: 20,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#B45309";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(217,119,6,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#D97706";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Choisir mon diagnostic &rarr;
        </Link>
      </section>
    </div>
  );
}
