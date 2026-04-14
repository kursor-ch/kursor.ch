"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagnostic gratuit",
    body: "Vous répondez à 6 à 9 questions ciblées sur votre situation. 5 minutes maximum, aucun engagement, aucune carte bancaire.",
  },
  {
    number: "02",
    title: "Bilan personnalisé",
    body: "Vous recevez par email un bilan chiffré avec les arbitrages prioritaires pour votre profil. Ce document vous appartient, que vous alliez plus loin ou non.",
  },
  {
    number: "03",
    title: "Mise en relation qualifiée",
    body: "Si vous le souhaitez, nous transmettons votre dossier au partenaire spécialisé adapté à votre situation. Premier contact garanti sous 48h ouvrées.",
  },
  {
    number: "04",
    title: "Accompagnement partenaire",
    body: "Notre partenaire gère votre dossier de bout en bout. Vous validez chaque étape. Nous restons disponibles en cas de friction.",
  },
];

export default function HowItWorksSection() {
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
        style={{ maxWidth: 1120 }}
      >
        {/* Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
          <span
            className="inline-block font-body uppercase"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#D97706",
            }}
          >
            Notre méthode
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
            Quatre étapes pour passer
            <br />
            <span
              className="font-heading italic"
              style={{ color: "#D97706", fontWeight: 500 }}
            >
              de l&rsquo;incertitude à la clarté.
            </span>
          </h2>
          <p
            className="font-body mx-auto"
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#475569",
              lineHeight: 1.65,
              marginTop: 18,
              maxWidth: 640,
            }}
          >
            Kursor est gratuit pour vous. Nous sommes rémunérés par notre
            réseau de partenaires spécialisés quand votre dossier aboutit. Vous
            ne payez rien, jamais.
          </p>
        </div>

        {/* Steps grid */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
          style={{ marginTop: 64 }}
        >
          {steps.map((step) => (
            <li key={step.number} className="relative">
              {/* Top divider line (amber, short) */}
              <div
                aria-hidden="true"
                style={{
                  width: 32,
                  height: 2,
                  backgroundColor: "#D97706",
                  borderRadius: 1,
                  marginBottom: 14,
                }}
              />
              <p
                className="font-heading italic"
                style={{
                  fontSize: 44,
                  fontWeight: 500,
                  color: "#D97706",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {step.number}
              </p>
              <h3
                className="font-heading"
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  color: "#0F172A",
                  lineHeight: 1.3,
                  marginTop: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: 14.5,
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: 1.65,
                  marginTop: 10,
                }}
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
