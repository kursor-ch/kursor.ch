"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function StepVisual1() {
  return (
    <div className="flex gap-2 justify-center mt-6">
      {["Emploi", "Logement", "Assurance", "Prévoyance"].map((label) => (
        <div
          key={label}
          className="rounded-lg border font-body text-center"
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: "#6B7280",
            borderColor: "#E5E7EB",
            backgroundColor: "#FFFFFF",
            padding: "8px 10px",
            minWidth: 64,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function StepVisual2() {
  return (
    <div className="flex items-center gap-1 justify-center mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 28,
            height: 6,
            borderRadius: 3,
            backgroundColor: i < 5 ? "#D97706" : "#E5E7EB",
          }}
        />
      ))}
    </div>
  );
}

function StepVisual3() {
  return (
    <div
      className="mx-auto mt-6 rounded-xl border"
      style={{
        maxWidth: 260,
        borderColor: "#E5E7EB",
        backgroundColor: "#FFFFFF",
        padding: "16px 20px",
      }}
    >
      <div className="flex items-center gap-2" style={{ marginBottom: 10 }}>
        <div
          className="rounded"
          style={{ width: 20, height: 14, backgroundColor: "#D97706", opacity: 0.2 }}
        />
        <div
          className="font-body"
          style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}
        >
          Votre rapport
        </div>
      </div>
      <div className="flex items-center gap-2" style={{ marginBottom: 6 }}>
        <span
          className="font-heading"
          style={{ fontSize: 22, fontWeight: 700, color: "#D97706" }}
        >
          72
        </span>
        <span
          className="font-body"
          style={{ fontSize: 11, color: "#9CA3AF" }}
        >
          /100
        </span>
      </div>
      <div className="space-y-1">
        {[70, 85, 55].map((w, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              height: 4,
              width: `${w}%`,
              backgroundColor: "#D97706",
              opacity: 0.3 + i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StepVisual4() {
  const categories = [
    { icon: "💼", label: "Recruteurs" },
    { icon: "📋", label: "Fiduciaires" },
    { icon: "🛡️", label: "Courtiers" },
    { icon: "📊", label: "Conseillers" },
  ];
  return (
    <div className="flex gap-3 justify-center mt-6">
      {categories.map((c) => (
        <div key={c.label} className="text-center">
          <div
            className="mx-auto rounded-full flex items-center justify-center"
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#FEF3C7",
              fontSize: 18,
            }}
          >
            {c.icon}
          </div>
          <p
            className="font-body"
            style={{ fontSize: 10, color: "#9CA3AF", marginTop: 4 }}
          >
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}

const steps = [
  {
    number: "1",
    title: "Choisissez votre diagnostic",
    description:
      "Emploi, logement, assurance ou prévoyance — sélectionnez le domaine qui vous concerne. Chaque diagnostic est adapté à votre situation spécifique.",
    Visual: StepVisual1,
  },
  {
    number: "2",
    title: "Répondez à 8 questions",
    description:
      "En 2 minutes, nous analysons votre profil : situation actuelle, objectifs, budget, connaissances. Vos réponses restent strictement confidentielles.",
    Visual: StepVisual2,
  },
  {
    number: "3",
    title: "Recevez votre rapport personnalisé",
    description:
      "Score de viabilité, forces détectées, risques identifiés et chiffres clés — tout arrive par email dans les minutes qui suivent.",
    Visual: StepVisual3,
  },
  {
    number: "4",
    title: "Accédez aux bons experts",
    description:
      "Si vous le souhaitez, nous vous mettons en relation avec nos partenaires spécialisés. Recruteurs, courtiers, conseillers — chacun est sélectionné pour son expertise. Gratuit et sans engagement.",
    Visual: StepVisual4,
  },
];

function Step({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`relative scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Large number */}
        <span
          className="font-heading"
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#D97706",
            lineHeight: 1,
          }}
        >
          {step.number}
        </span>

        {/* Title */}
        <h3
          className="font-heading"
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#111827",
            marginTop: 12,
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p
          className="font-body mx-auto"
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: 440,
            marginTop: 12,
          }}
        >
          {step.description}
        </p>

        {/* Visual */}
        <step.Visual />

        {/* Connecting dotted line */}
        {!isLast && (
          <div
            className="mx-auto"
            style={{
              width: 2,
              height: 64,
              marginTop: 32,
              backgroundImage:
                "repeating-linear-gradient(to bottom, #D97706 0px, #D97706 4px, transparent 4px, transparent 10px)",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function CommentCamarchePage() {
  return (
    <div className="bg-creme">
      {/* Hero */}
      <section className="px-6 text-center" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <h1
          className="font-heading"
          style={{ fontSize: 36, fontWeight: 600, color: "#111827" }}
        >
          Comment ça marche
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
          De votre première question à la mise en relation avec un expert.
          Gratuit, confidentiel, sans engagement.
        </p>
      </section>

      {/* Steps */}
      <section
        className="px-6 mx-auto"
        style={{ maxWidth: 600, paddingTop: 32, paddingBottom: 48 }}
      >
        {steps.map((step, i) => (
          <Step key={step.number} step={step} isLast={i === steps.length - 1} />
        ))}
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
