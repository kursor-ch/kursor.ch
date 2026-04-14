"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import NewsletterSection from "@/components/NewsletterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  BriefcaseIcon,
  HouseKeyIcon,
  ShieldCheckIcon,
  PiggyBankIcon,
} from "@/components/ui/ServiceIcons";

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

const cardDirections: Array<"from-left" | "from-right"> = [
  "from-left",
  "from-right",
  "from-left",
  "from-right",
];

const cardDesktopDelays = [0, 150, 300, 450];
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
        {service.live && <span className="card-cta-arrow">&rarr;</span>}
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

export default function HomePage() {
  const { containerRef: cardsRef, entered: cardsEntered } = useCardEntranceObserver(0.15);
  useScrollReveal(0.15);

  // iOS Safari :active fix
  useEffect(() => {
    document.body.addEventListener("touchstart", function () {}, { passive: true });
  }, []);

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
      <HeroSection />

      <ProblemSection />

      <HowItWorksSection />

      {/* Transitional: old service cards grid — replaced in a later commit */}
      <section className="relative bg-creme px-6" style={{ paddingBottom: 48 }}>
        <div
          id="outils"
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
      </section>

      <NewsletterSection />
    </>
  );
}
