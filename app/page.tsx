"use client";

import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── SVG Icons ── */
const BriefcaseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </svg>
);

const HouseKeyIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z" />
    <path d="M9 21V14h6v7" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PiggyBankIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" />
    <path d="M2 9.5a2.5 2.5 0 0 1 2-1" />
    <circle cx="15" cy="9" r="1" fill="#D97706" />
  </svg>
);

const icons = [BriefcaseIcon, HouseKeyIcon, ShieldCheckIcon, PiggyBankIcon];

const services = [
  {
    title: "Emploi",
    description: "Trouvez un poste en Suisse et négociez au bon niveau.",
    stat: "+40% de salaire en moyenne",
    cta: "Faire le diagnostic",
    href: "/emploi",
    live: true,
  },
  {
    title: "Logement",
    description: "Trouvez votre logement en Suisse romande.",
    stat: "3 mois de caution à anticiper",
    cta: "Bientôt disponible",
    href: "/logement",
    live: false,
  },
  {
    title: "Assurance",
    description: "Optimisez votre couverture et évitez les surcoûts.",
    stat: "2\u00a0400 CHF/an d\u2019économie potentielle",
    cta: "Bientôt disponible",
    href: "/assurance",
    live: false,
  },
  {
    title: "Prévoyance",
    description: "Ne perdez plus une année de déduction fiscale.",
    stat: "7\u00a0258 CHF/an de déduction 3ème pilier",
    cta: "Bientôt disponible",
    href: "/prevoyance",
    live: false,
  },
];

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[number];
  index: number;
  isVisible: boolean;
}) {
  const Icon = icons[index];

  const inner = (
    <div
      className={`relative bg-white border rounded-xl transition-all duration-250 ${
        service.live
          ? "border-t-2 cursor-pointer hover:scale-[1.02] hover:border-amber hover:shadow-[0_8px_30px_rgba(217,119,6,0.12)]"
          : "opacity-[0.85] cursor-default"
      } ${!service.live ? "stripe-pattern" : ""} scroll-reveal-card ${isVisible ? "visible" : ""}`}
      style={{
        padding: "24px 22px",
        borderTopColor: service.live ? "#D97706" : undefined,
        borderColor: service.live ? undefined : "#E5E7EB",
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {!service.live && (
        <span
          className="absolute font-body uppercase"
          style={{
            top: 12,
            right: 12,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            borderRadius: 10,
            padding: "2px 8px",
          }}
        >
          Bientôt
        </span>
      )}

      <div className="flex items-center gap-3">
        <Icon />
        <h3
          className="font-body"
          style={{ fontWeight: 600, fontSize: 17, color: "#111827" }}
        >
          {service.title}
        </h3>
      </div>

      <p
        className="font-body"
        style={{
          fontWeight: 400,
          fontSize: 14,
          color: "#6B7280",
          lineHeight: 1.5,
          marginTop: 10,
        }}
      >
        {service.description}
      </p>

      <p
        className="font-body"
        style={{
          fontWeight: 600,
          fontSize: 13,
          color: "#D97706",
          marginTop: 10,
        }}
      >
        {service.stat}
      </p>

      <span
        className={`font-body inline-flex items-center gap-1 ${
          service.live ? "group" : ""
        }`}
        style={{
          display: "block",
          fontWeight: 500,
          fontSize: 13,
          color: service.live ? "#D97706" : "#9CA3AF",
          marginTop: 12,
        }}
      >
        {service.cta}
        {service.live && (
          <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">
            &rarr;
          </span>
        )}
      </span>
    </div>
  );

  if (service.live) {
    return (
      <Link href={service.href} className="group">
        {inner}
      </Link>
    );
  }

  return inner;
}

export default function HomePage() {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.15);
  const { ref: proofRef, isVisible: proofVisible } = useScrollReveal(0.15);

  return (
    <>
      {/* Hero + Service Cards */}
      <section
        className="relative bg-creme px-6 grain-overlay"
        style={{
          paddingTop: 64,
          paddingBottom: 48,
        }}
      >
        <div className="relative mx-auto" style={{ maxWidth: 640 }}>
          {/* Badge */}
          <div className="text-center animate-hero-badge">
            <span
              className="inline-block font-body uppercase animate-badge-pulse"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#D97706",
                border: "1px solid #D97706",
                padding: "4px 12px",
                borderRadius: 20,
              }}
            >
              Diagnostic gratuit &middot; 2 minutes
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-center mx-auto animate-hero-headline"
            style={{
              fontWeight: 600,
              color: "#111827",
              maxWidth: 640,
              marginTop: 20,
            }}
          >
            <span className="block text-[32px] md:text-[48px] leading-[1.12]">
              Chaque étape de votre vie en{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#D97706",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "2px",
                }}
              >
                Suisse
              </span>
              , simplifiée.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-center mx-auto text-[14px] md:text-[16px] animate-hero-subtitle"
            style={{
              fontWeight: 400,
              color: "#6B7280",
              maxWidth: 500,
              lineHeight: 1.7,
              marginTop: 16,
              marginBottom: 32,
            }}
          >
            Emploi, logement, assurances, prévoyance — identifiez vos
            forces, vos risques et les erreurs à éviter.
          </p>

          {/* Amber gradient separator */}
          <div className="flex justify-center animate-hero-separator" style={{ marginBottom: 32 }}>
            <div
              style={{
                width: 200,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #D97706 30%, #D97706 70%, transparent)",
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div
          id="services"
          ref={cardsRef}
          className="mx-auto grid grid-cols-1 md:grid-cols-2"
          style={{ maxWidth: 600, gap: 22 }}
        >
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              index={i}
              isVisible={cardsVisible}
            />
          ))}
        </div>

        {/* Social proof */}
        <div
          ref={proofRef}
          className={`scroll-reveal ${proofVisible ? "visible" : ""}`}
          style={{ marginTop: 24 }}
        >
          {/* Desktop: inline */}
          <div
            className="hidden sm:flex items-center justify-center gap-2 font-body"
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "#9CA3AF",
            }}
          >
            <span
              className="inline-block rounded-full animate-green-pulse"
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#15803D",
              }}
            />
            <span>3&nbsp;155 diagnostics réalisés</span>
            <span style={{ color: "#D97706" }}>&middot;</span>
            <span>6 cantons couverts</span>
            <span style={{ color: "#D97706" }}>&middot;</span>
            <span>4 partenaires</span>
          </div>

          {/* Mobile: stacked */}
          <div
            className="flex sm:hidden flex-col items-center gap-1 font-body"
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "#9CA3AF",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block rounded-full animate-green-pulse"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#15803D",
                }}
              />
              <span>3&nbsp;155 diagnostics réalisés</span>
            </div>
            <span>6 cantons couverts</span>
            <span>4 partenaires</span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
