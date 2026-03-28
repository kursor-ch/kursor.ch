"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    description: "83% des CV français sont éliminés en 6 secondes. Le vôtre est-il prêt ?",
    stat: "+40% de salaire en moyenne",
    cta: "Faire le diagnostic",
    href: "/emploi",
    live: true,
  },
  {
    title: "Logement",
    description: "Le taux de vacance est sous 1%. Sans stratégie, la recherche dure des mois.",
    stat: "3 mois de caution à anticiper",
    cta: "Bientôt disponible",
    href: "/logement",
    live: false,
  },
  {
    title: "Assurance",
    description: "LAMal, complémentaire, franchise — un mauvais choix, c\u2019est 2\u00a0400 CHF/an perdus.",
    stat: "2\u00a0400 CHF/an d\u2019économie potentielle",
    cta: "Bientôt disponible",
    href: "/assurance",
    live: false,
  },
  {
    title: "Prévoyance",
    description: "Chaque année sans 3ème pilier = 7\u00a0258 CHF de déduction fiscale perdus. Définitivement.",
    stat: "7\u00a0258 CHF/an de déduction 3ème pilier",
    cta: "Bientôt disponible",
    href: "/prevoyance",
    live: false,
  },
];

/* Card entrance directions: desktop alternates L/R, mobile all from left */
const cardDirections: Array<"from-left" | "from-right"> = [
  "from-left",
  "from-right",
  "from-left",
  "from-right",
];

/* Desktop stagger delays in ms */
const cardDesktopDelays = [0, 150, 300, 450];
/* Mobile stagger delays in ms */
const cardMobileDelays = [0, 120, 240, 360];

function useCardEntranceObserver(threshold = 0.15) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { containerRef, entered };
}

function ServiceCard({
  service,
  index,
  entered,
}: {
  service: (typeof services)[number];
  index: number;
  entered: boolean;
}) {
  const Icon = icons[index];
  const direction = cardDirections[index];
  const desktopDelay = cardDesktopDelays[index];
  const mobileDelay = cardMobileDelays[index];

  const inner = (
    <div
      className={`relative bg-white border rounded-xl ${
        service.live
          ? "border-t-2 cursor-pointer service-card-live"
          : "opacity-[0.85] service-card-soon"
      } ${!service.live ? "stripe-pattern" : ""} service-card-enter ${direction} ${entered ? "entered" : ""}`}
      style={{
        padding: "24px 22px",
        borderTopColor: service.live ? "#D97706" : undefined,
        borderColor: service.live ? undefined : "#E5E7EB",
        transitionDelay: entered
          ? `var(--card-delay, ${desktopDelay}ms)`
          : "0ms",
        // CSS custom property for responsive delay
        ["--card-delay-desktop" as string]: `${desktopDelay}ms`,
        ["--card-delay-mobile" as string]: `${mobileDelay}ms`,
      }}
    >
      {!service.live && (
        <span
          className="absolute font-body uppercase bientot-badge"
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
          service.live ? "card-cta-link" : ""
        }`}
        style={{
          display: "block",
          fontWeight: 500,
          fontSize: 13,
          color: service.live ? "#D97706" : "#9CA3AF",
          marginTop: 12,
        }}
      >
        <span className="card-cta-text">{service.cta}</span>
        {service.live && (
          <span className="card-cta-arrow">
            &rarr;
          </span>
        )}
      </span>
    </div>
  );

  if (service.live) {
    return (
      <Link href={service.href} className="card-cta-link">
        {inner}
      </Link>
    );
  }

  return inner;
}

/* Hero word-by-word animation component (desktop) */
function HeroHeadlineDesktop() {
  const words = ["Chaque", "étape", "de", "votre", "vie", "en"];
  const afterSuisse = [",", "simplifiée."];
  // Base delay: badge is 0ms + 400ms duration = words start at ~400ms
  const baseDelay = 400; // ms after page load
  const stagger = 60; // ms between words
  const suisseExtraDelay = 100; // extra delay for "Suisse"

  let wordIndex = 0;

  return (
    <h1
      className="font-heading text-center mx-auto hidden md:block"
      style={{
        fontWeight: 600,
        color: "#111827",
        maxWidth: 640,
        marginTop: 20,
      }}
    >
      <span className="block text-[48px] leading-[1.12]">
        {words.map((word) => {
          const delay = baseDelay + wordIndex * stagger;
          wordIndex++;
          return (
            <span
              key={`${word}-${wordIndex}`}
              className="hero-word"
              style={{ animationDelay: `${delay}ms`, marginRight: "0.25em" }}
            >
              {word}
            </span>
          );
        })}
        <span
          className="hero-word suisse-underline"
          style={{
            animationDelay: `${baseDelay + wordIndex * stagger + suisseExtraDelay}ms`,
            color: "#D97706",
            marginRight: "0",
          }}
        >
          Suisse
          <style>{`
            .suisse-underline::after {
              animation-delay: ${baseDelay + wordIndex * stagger + suisseExtraDelay + 500}ms;
            }
          `}</style>
        </span>
        {afterSuisse.map((word, i) => {
          wordIndex++;
          const delay = baseDelay + wordIndex * stagger + suisseExtraDelay;
          return (
            <span
              key={`after-${i}`}
              className="hero-word"
              style={{ animationDelay: `${delay}ms`, marginRight: i === 0 ? "0.25em" : "0" }}
            >
              {word}
            </span>
          );
        })}
      </span>
    </h1>
  );
}

/* Hero line-by-line animation (mobile) */
function HeroHeadlineMobile() {
  const baseDelay = 400;

  return (
    <h1
      className="font-heading text-center mx-auto md:hidden"
      style={{
        fontWeight: 600,
        color: "#111827",
        maxWidth: 640,
        marginTop: 20,
      }}
    >
      <span className="block text-[32px] leading-[1.12]">
        <span
          className="hero-line-mobile block"
          style={{ animationDelay: `${baseDelay}ms` }}
        >
          Chaque étape de votre
        </span>
        <span
          className="hero-line-mobile block"
          style={{ animationDelay: `${baseDelay + 200}ms` }}
        >
          vie en{" "}
          <span
            className="suisse-underline"
            style={{ color: "#D97706" }}
          >
            Suisse
            <style>{`
              @media (max-width: 767px) {
                .suisse-underline::after {
                  animation-delay: ${baseDelay + 200 + 500}ms;
                }
              }
            `}</style>
          </span>
          , simplifiée.
        </span>
      </span>
    </h1>
  );
}

export default function HomePage() {
  const { containerRef: cardsRef, entered: cardsEntered } = useCardEntranceObserver(0.15);
  const { ref: proofRef, isVisible: proofVisible } = useScrollReveal(0.15);
  const [sepReady, setSepReady] = useState(false);

  // Calculate when subtitle finishes to trigger separator
  // Badge: 0 + 400ms, Words: ~400ms + 8 words * 60ms + 100ms extra = ~980ms, Subtitle: 980 + 200 + 500 = ~1680ms
  // Separator: 1680 + 100 = 1780ms
  const subtitleDelay = 1180; // After last word finishes
  const separatorDelay = subtitleDelay + 500 + 100; // After subtitle finishes

  useEffect(() => {
    const timer = setTimeout(() => setSepReady(true), separatorDelay);
    return () => clearTimeout(timer);
  }, [separatorDelay]);

  // iOS Safari :active fix
  useEffect(() => {
    document.body.addEventListener("touchstart", function () {}, { passive: true });
  }, []);

  // Re-run delay calculation when entered changes
  const cardsRefCurrent = cardsRef.current;
  useEffect(() => {
    if (cardsRefCurrent) {
      const cards = cardsRefCurrent.querySelectorAll<HTMLElement>(".service-card-enter");
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      cards.forEach((card, i) => {
        const delay = isMobile ? cardMobileDelays[i] : cardDesktopDelays[i];
        card.style.transitionDelay = cardsEntered ? `${delay}ms` : "0ms";
      });
    }
  }, [cardsEntered, cardsRefCurrent]);

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

          {/* Headline — desktop: word-by-word, mobile: line-by-line */}
          <HeroHeadlineDesktop />
          <HeroHeadlineMobile />

          {/* Subtitle */}
          <p
            className="font-body text-center mx-auto text-[14px] md:text-[16px] animate-hero-subtitle"
            style={{
              fontWeight: 400,
              color: "#6B7280",
              maxWidth: 520,
              lineHeight: 1.7,
              marginTop: 16,
              marginBottom: 32,
              animationDelay: `${subtitleDelay}ms`,
            }}
          >
            Les mauvaises décisions des 3 premiers mois coûtent en moyenne
            5&nbsp;000 à 15&nbsp;000 CHF. Nos diagnostics gratuits vous
            montrent lesquelles vous concernent.
          </p>

          {/* Amber gradient separator */}
          <div
            className={`flex justify-center animate-hero-separator ${sepReady ? "sep-ready" : ""}`}
            style={{
              marginBottom: 32,
              animationDelay: `${separatorDelay - 100}ms`,
            }}
          >
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
          className="mx-auto grid grid-cols-1 md:grid-cols-2 cards-grid-mobile-snap"
          style={{ maxWidth: 600, gap: 22 }}
        >
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              index={i}
              entered={cardsEntered}
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
