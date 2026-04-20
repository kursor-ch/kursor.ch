"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  HouseKeyIcon,
  ShieldCheckIcon,
  PiggyBankIcon,
} from "@/components/ui/ServiceIcons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KWatermark } from "@/components/shared/KWatermark";

const tools = [
  {
    Icon: BriefcaseIcon,
    status: "Disponible" as const,
    live: true,
    title: "Diagnostic Emploi",
    body: "Évaluez la viabilité de votre projet professionnel en Suisse. Potentiel salaire, adéquation du CV au marché suisse, secteurs en demande.",
    metric: "+40 000 CHF/an de potentiel moyen",
    cta: "Faire le diagnostic",
    href: "/emploi",
  },
  {
    Icon: HouseKeyIcon,
    status: "Disponible" as const,
    live: true,
    title: "Diagnostic Logement",
    body: "Estimez votre temps de recherche selon votre canton, budget, statut et préparation. Identifiez les pièges qui éliminent 80% des candidatures.",
    metric: "Recherche optimisée à 3 semaines",
    cta: "Faire le diagnostic",
    href: "/logement",
  },
  {
    Icon: ShieldCheckIcon,
    status: "Disponible" as const,
    live: true,
    title: "Audit Assurances",
    body: "Identifiez simultanément combien vous surpayez et où vous n\u2019êtes pas couvert. LAMal, complémentaires, perte de gain, RC privée.",
    metric: "2 400 CHF/an d\u2019économie potentielle",
    cta: "Faire le diagnostic",
    href: "/assurance",
  },
  {
    Icon: PiggyBankIcon,
    status: "Bientôt" as const,
    live: false,
    title: "Audit Retraite",
    body: "Calculez votre perte fiscale annuelle et découvrez combien vous pouvez rattraper avec la nouvelle loi 2026 sur le 3ème pilier.",
    metric: "36 290 CHF rattrapables en 2026",
    cta: "Bientôt disponible",
    href: "/prevoyance",
  },
];

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  const inner = (
    <div
      className={`relative h-full flex flex-col bg-white rounded-xl ${
        tool.live ? "service-card-live" : "service-card-soon stripe-pattern"
      }`}
      style={{
        border: "1px solid #E2E8F0",
        borderTopWidth: tool.live ? 2 : 1,
        borderTopColor: tool.live ? "#D97706" : "#E2E8F0",
        padding: "26px 24px 22px",
      }}
    >
      {/* Status pill */}
      <span
        className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase font-body ${
          tool.live ? "bg-vert/10 text-vert" : "bg-gray-100 text-gray-500"
        }`}
      >
        {tool.status}
      </span>

      <div className="flex items-center gap-3">
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "rgba(217,119,6,0.08)",
            border: "1px solid rgba(217,119,6,0.18)",
            borderRadius: 10,
          }}
        >
          <tool.Icon size={22} />
        </div>
        <h3
          className="font-heading"
          style={{
            fontSize: 19,
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.3,
          }}
        >
          {tool.title}
        </h3>
      </div>

      <p
        className="font-body flex-1"
        style={{
          fontSize: 14.5,
          fontWeight: 400,
          color: "#475569",
          lineHeight: 1.65,
          marginTop: 14,
        }}
      >
        {tool.body}
      </p>

      <p
        className="font-body"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#D97706",
          marginTop: 14,
        }}
      >
        {tool.metric}
      </p>

      <span
        className={`font-body inline-flex items-center gap-1 ${
          tool.live ? "card-cta-link" : ""
        }`}
        style={{
          marginTop: 16,
          fontSize: 14,
          fontWeight: 500,
          color: tool.live ? "#D97706" : "#94A3B8",
        }}
      >
        <span className="card-cta-text">{tool.cta}</span>
        {tool.live && <span className="card-cta-arrow">→</span>}
      </span>
    </div>
  );

  if (tool.live) {
    return (
      <Link href={tool.href} className="card-cta-link h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="outils"
      className="relative px-6 scroll-mt-20"
      style={{
        backgroundColor: "#FDFAF5",
        paddingTop: 88,
        paddingBottom: 88,
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <KWatermark position="top-right" size="lg" offset={80} />

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
            Nos diagnostics
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
            Quatre outils. Une vie suisse.
            <br />
            <span
              className="font-heading italic"
              style={{ color: "#D97706", fontWeight: 500 }}
            >
              Cinq minutes par diagnostic.
            </span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto"
          style={{ marginTop: 56, maxWidth: 960 }}
        >
          {tools.map((t) => (
            <ToolCard key={t.title} tool={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
