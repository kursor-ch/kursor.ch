"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { Briefcase, Home, ShieldCheck, TrendingUp } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Card data ── */
const services = [
  {
    title: "Emploi",
    description:
      "83% des CV français sont éliminés en 6 secondes par les recruteurs suisses. Mauvais format, pas de références, prétentions salariales absentes — les erreurs sont invisibles jusqu'à ce qu'on vous les montre.",
    stat: "+40 à 80% de salaire vs France",
    statColor: "#D97706",
    cta: "Évaluer mon profil →",
    href: "/emploi",
    live: true,
    gradient: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
    Icon: Briefcase,
  },
  {
    title: "Logement",
    description:
      "Le taux de vacance est sous 1% en Suisse romande. Sans dossier optimisé et accès aux biens avant publication, la recherche peut durer 6 mois ou plus.",
    stat: "15 000 – 20 000 CHF de budget installation",
    statColor: "#0369A1",
    cta: "Bientôt disponible",
    href: "/logement",
    live: false,
    gradient: "linear-gradient(135deg, #0369A1 0%, #075985 100%)",
    Icon: Home,
  },
  {
    title: "Assurance",
    description:
      "LAMal, complémentaire, franchise — le mauvais choix dans les 3 premiers mois est quasi irréversible et coûte des milliers de francs par an.",
    stat: "2 400 CHF/an d'économie identifiée en moyenne",
    statColor: "#059669",
    cta: "Bientôt disponible",
    href: "/assurance",
    live: false,
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    Icon: ShieldCheck,
  },
  {
    title: "Prévoyance",
    description:
      "Chaque année sans 3ème pilier = 7 258 CHF de déduction fiscale perdus. Définitivement. 60% des nouveaux résidents ne l'ouvrent pas la première année.",
    stat: "7 258 CHF/an de déduction fiscale",
    statColor: "#7C3AED",
    cta: "Bientôt disponible",
    href: "/prevoyance",
    live: false,
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
    Icon: TrendingUp,
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

/* ── Hooks ── */

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

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [end, duration, started]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  return { ref, count };
}

/* ── Service Card ── */

function ServiceCard({
  service,
  index,
  entered,
}: {
  service: (typeof services)[number];
  index: number;
  entered: boolean;
}) {
  const direction = cardDirections[index];
  const desktopDelay = cardDesktopDelays[index];
  const mobileDelay = cardMobileDelays[index];
  const { Icon } = service;

  const card = (
    <div
      className={`relative overflow-hidden rounded-xl ${
        service.live ? "service-card-live cursor-pointer" : "service-card-soon"
      } service-card-enter ${direction} ${entered ? "entered" : ""}`}
      style={{
        transitionDelay: entered
          ? `var(--card-delay, ${desktopDelay}ms)`
          : "0ms",
        ["--card-delay-desktop" as string]: `${desktopDelay}ms`,
        ["--card-delay-mobile" as string]: `${mobileDelay}ms`,
      }}
    >
      {/* Coming soon overlay */}
      {!service.live && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        />
      )}

      {/* BIENTÔT badge */}
      {!service.live && (
        <span
          className="absolute z-20 font-body uppercase bientot-badge"
          style={{
            top: 12,
            right: 12,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            borderRadius: 10,
            padding: "3px 10px",
          }}
        >
          Bientôt
        </span>
      )}

      {/* TOP ZONE — gradient header */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          height: 140,
          background: service.gradient,
          padding: 24,
          borderRadius: "12px 12px 0 0",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <Icon size={28} color="white" strokeWidth={1.5} />
        </div>
        <h3
          className="font-heading text-center"
          style={{
            fontWeight: 600,
            fontSize: 20,
            color: "#FFFFFF",
            marginTop: 10,
          }}
        >
          {service.title}
        </h3>
      </div>

      {/* BOTTOM ZONE — white content */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: 20,
          borderRadius: "0 0 12px 12px",
          borderLeft: "1px solid #E5E7EB",
          borderRight: "1px solid #E5E7EB",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <p
          className="font-body"
          style={{
            fontWeight: 400,
            fontSize: 14,
            color: "#6B7280",
            lineHeight: 1.6,
          }}
        >
          {service.description}
        </p>
        <p
          className="font-body"
          style={{
            fontWeight: 600,
            fontSize: 14,
            color: service.statColor,
            marginTop: 12,
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
            fontSize: 14,
            color: service.live ? "#D97706" : "#9CA3AF",
            marginTop: 12,
            cursor: service.live ? "pointer" : "default",
          }}
        >
          <span className="card-cta-text">{service.cta}</span>
          {service.live && <span className="card-cta-arrow">&rarr;</span>}
        </span>
      </div>
    </div>
  );

  if (service.live) {
    return (
      <Link href={service.href} className="card-cta-link">
        {card}
      </Link>
    );
  }
  return card;
}

/* ── SVG icons for "Ce que vous recevrez" ── */

const ScoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="11" stroke="#D97706" strokeWidth="2" fill="none" />
    <circle cx="14" cy="14" r="6" stroke="#D97706" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
  </svg>
);

const ReportIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="5" y="3" width="18" height="22" rx="2" stroke="#D97706" strokeWidth="1.5" />
    <line x1="9" y1="9" x2="19" y2="9" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="9" y1="13" x2="19" y2="13" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="9" y1="17" x2="15" y2="17" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExpertsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="10" r="4" stroke="#D97706" strokeWidth="1.5" />
    <circle cx="18" cy="10" r="4" stroke="#D97706" strokeWidth="1.5" />
    <path d="M3 24c0-4 3-7 7-7s7 3 7 7" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M18 17c4 0 7 3 7 7" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

/* ── Hero headline components ── */

function HeroHeadlineDesktop() {
  const words = ["Chaque", "étape", "de", "votre", "vie", "en"];
  const baseDelay = 400;
  const stagger = 60;
  const suisseExtraDelay = 100;
  let wordIndex = 0;

  return (
    <h1
      className="font-heading text-center mx-auto hidden md:block"
      style={{ fontWeight: 600, color: "#111827", maxWidth: 640, marginTop: 20 }}
    >
      <span className="block text-[48px] leading-[1.2]">
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
        {[",", "simplifiée."].map((word, i) => {
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

function HeroHeadlineMobile() {
  const baseDelay = 400;
  return (
    <h1
      className="font-heading text-center mx-auto md:hidden"
      style={{ fontWeight: 600, color: "#111827", maxWidth: 640, marginTop: 20 }}
    >
      <span className="block text-[32px] leading-[1.2]">
        <span className="hero-line-mobile block" style={{ animationDelay: `${baseDelay}ms` }}>
          Chaque étape de votre
        </span>
        <span className="hero-line-mobile block" style={{ animationDelay: `${baseDelay + 200}ms` }}>
          vie en{" "}
          <span className="suisse-underline" style={{ color: "#D97706" }}>
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

/* ── Main page ── */

export default function HomePage() {
  const { containerRef: cardsRef, entered: cardsEntered } = useCardEntranceObserver(0.15);
  const { ref: proofRef, isVisible: proofVisible } = useScrollReveal(0.15);
  const { ref: receiveRef, isVisible: receiveVisible } = useScrollReveal(0.15);
  const { ref: processRef, isVisible: processVisible } = useScrollReveal(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal(0.15);
  const [sepReady, setSepReady] = useState(false);

  const subtitleDelay = 1180;
  const solutionDelay = subtitleDelay + 500 + 200;
  const separatorDelay = solutionDelay + 200 + 100;

  const { ref: stat1Ref, count: stat1Count } = useCountUp(3155, 1500);
  const { ref: stat2Ref, count: stat2Count } = useCountUp(4, 800);

  useEffect(() => {
    const timer = setTimeout(() => setSepReady(true), separatorDelay);
    return () => clearTimeout(timer);
  }, [separatorDelay]);

  // iOS Safari :active fix
  useEffect(() => {
    document.body.addEventListener("touchstart", function () {}, { passive: true });
  }, []);

  // Set card delays based on viewport
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
      {/* ═══ HERO ═══ */}
      <section
        className="relative bg-creme px-6 grain-overlay"
        style={{ paddingTop: 72, paddingBottom: 40 }}
      >
        <div className="relative mx-auto" style={{ maxWidth: 680 }}>
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
                padding: "5px 16px",
                borderRadius: 20,
              }}
            >
              Diagnostic gratuit &middot; 2 minutes
            </span>
          </div>

          {/* Headline */}
          <HeroHeadlineDesktop />
          <HeroHeadlineMobile />

          {/* Subtitle */}
          <p
            className="font-body text-center mx-auto text-[14px] md:text-[16px] animate-hero-subtitle"
            style={{
              fontWeight: 400,
              color: "#6B7280",
              maxWidth: 540,
              lineHeight: 1.7,
              marginTop: 16,
              animationDelay: `${subtitleDelay}ms`,
            }}
          >
            Un mauvais choix d&apos;assurance, un 3ème pilier non ouvert, un
            salaire mal négocié — les 3 premiers mois en Suisse coûtent en
            moyenne 8&nbsp;000 CHF aux personnes mal préparées.
          </p>

          {/* Solution line */}
          <p
            className="font-body text-center mx-auto animate-hero-subtitle"
            style={{
              fontWeight: 500,
              fontSize: 15,
              color: "#D97706",
              marginTop: 16,
              animationDelay: `${solutionDelay}ms`,
            }}
          >
            Nos diagnostics gratuits identifient exactement ce qui vous concerne.
          </p>

          {/* Amber separator */}
          <div
            className={`flex justify-center animate-hero-separator ${sepReady ? "sep-ready" : ""}`}
            style={{
              marginTop: 28,
              marginBottom: 28,
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

        {/* ═══ TRUST BAR ═══ */}
        <div
          className="mx-auto animate-hero-subtitle"
          style={{
            maxWidth: 680,
            marginBottom: 28,
            animationDelay: `${separatorDelay}ms`,
          }}
        >
          {/* Desktop */}
          <div
            className="hidden sm:flex items-center justify-center gap-1 font-body"
            style={{ fontSize: 13, fontWeight: 500, color: "#4B5563" }}
          >
            <span style={{ color: "#15803D" }}>✓</span> 100% gratuit
            <span style={{ color: "#9CA3AF", margin: "0 6px" }}>&middot;</span>
            <span style={{ color: "#15803D" }}>✓</span> Résultats en 2 min
            <span style={{ color: "#9CA3AF", margin: "0 6px" }}>&middot;</span>
            <span style={{ color: "#15803D" }}>✓</span> Données confidentielles
          </div>
          {/* Mobile */}
          <div
            className="flex sm:hidden flex-col items-center gap-1.5 font-body"
            style={{ fontSize: 13, fontWeight: 500, color: "#4B5563" }}
          >
            <span><span style={{ color: "#15803D" }}>✓</span> 100% gratuit</span>
            <span><span style={{ color: "#15803D" }}>✓</span> Résultats en 2 min</span>
            <span><span style={{ color: "#15803D" }}>✓</span> Données confidentielles</span>
          </div>
        </div>

        {/* ═══ SERVICE CARDS ═══ */}
        <div
          id="services"
          ref={cardsRef}
          className="mx-auto grid grid-cols-1 md:grid-cols-2"
          style={{ maxWidth: 680, gap: 18 }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} entered={cardsEntered} />
          ))}
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section
        ref={proofRef}
        className={`bg-creme px-6 scroll-reveal ${proofVisible ? "visible" : ""}`}
        style={{ paddingTop: 40, paddingBottom: 32 }}
      >
        <div className="mx-auto" style={{ maxWidth: 680 }}>
          {/* Desktop stats row */}
          <div className="hidden sm:flex items-center justify-center">
            {/* Stat 1 */}
            <div ref={stat1Ref} className="flex flex-col items-center" style={{ minWidth: 140 }}>
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full animate-green-pulse"
                  style={{ width: 8, height: 8, backgroundColor: "#15803D" }}
                />
                <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                  {stat1Count.toLocaleString("fr-CH")}+
                </span>
              </div>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF", marginTop: 2 }}>
                diagnostics complétés
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 32, backgroundColor: "#E5E7EB", margin: "0 32px" }} />

            {/* Stat 2 */}
            <div ref={stat2Ref} className="flex flex-col items-center" style={{ minWidth: 140 }}>
              <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                {stat2Count}
              </span>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF", marginTop: 2 }}>
                domaines d&apos;expertise
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 32, backgroundColor: "#E5E7EB", margin: "0 32px" }} />

            {/* Stat 3 */}
            <div className="flex flex-col items-center" style={{ minWidth: 140 }}>
              <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                2 min
              </span>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF", marginTop: 2 }}>
                pour votre diagnostic
              </span>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="flex sm:hidden flex-col items-center gap-4">
            <div ref={stat1Ref} className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full animate-green-pulse"
                  style={{ width: 8, height: 8, backgroundColor: "#15803D" }}
                />
                <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                  {stat1Count.toLocaleString("fr-CH")}+
                </span>
              </div>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF" }}>
                diagnostics complétés
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                {stat2Count}
              </span>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF" }}>
                domaines d&apos;expertise
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading" style={{ fontWeight: 700, fontSize: 32, color: "#111827" }}>
                2 min
              </span>
              <span className="font-body" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF" }}>
                pour votre diagnostic
              </span>
            </div>
          </div>

          {/* Data credibility line */}
          <p
            className="font-body text-center mx-auto"
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#9CA3AF",
              maxWidth: 480,
              marginTop: 20,
            }}
          >
            Nos analyses s&apos;appuient sur les données officielles de l&apos;OFS, du SECO,
            de l&apos;OFSP et de l&apos;administration fédérale suisse.
          </p>
        </div>
      </section>

      {/* ═══ CE QUE VOUS RECEVREZ ═══ */}
      <section
        className="bg-creme px-6"
        style={{ paddingTop: 48, paddingBottom: 40 }}
      >
        <div className="mx-auto" style={{ maxWidth: 480 }}>
          <h2
            className="font-heading text-center"
            style={{ fontSize: 22, fontWeight: 600, color: "#111827", marginBottom: 28 }}
          >
            Ce que vous recevrez
          </h2>

          <div
            ref={receiveRef}
            className="flex flex-col"
            style={{ gap: 24 }}
          >
            {[
              {
                icon: <ScoreIcon />,
                title: "Score de viabilité personnalisé",
                desc: "Un score /100 basé sur 8 critères, calculé à partir de vos réponses. Pas un score générique — le vôtre.",
              },
              {
                icon: <ReportIcon />,
                title: "Rapport détaillé par email",
                desc: "Forces détectées, risques identifiés, chiffres clés et recommandations concrètes. Reçu en quelques minutes.",
              },
              {
                icon: <ExpertsIcon />,
                title: "Connexion aux bons experts",
                desc: "Si vous le souhaitez, mise en relation directe avec des spécialistes sélectionnés — recruteurs, courtiers, conseillers. Gratuit et sans engagement.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 scroll-reveal-stagger ${receiveVisible ? "visible" : ""}`}
                style={{
                  transitionDelay: receiveVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="shrink-0" style={{ marginTop: 2 }}>
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-body"
                    style={{ fontWeight: 600, fontSize: 15, color: "#111827" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      color: "#6B7280",
                      lineHeight: 1.6,
                      marginTop: 4,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS STRIP ═══ */}
      <section
        ref={processRef}
        className={`px-6 scroll-reveal ${processVisible ? "visible" : ""}`}
        style={{ paddingTop: 32, paddingBottom: 32, backgroundColor: "#FDFAF5" }}
      >
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-start justify-center" style={{ gap: 0 }}>
            {[
              { num: "1", title: "Répondez", desc: "8 questions, 2 minutes." },
              { num: "2", title: "Recevez", desc: "Votre rapport personnalisé par email." },
              { num: "3", title: "Décidez", desc: "Avec les bonnes informations." },
            ].map((step, i) => (
              <div key={step.num} className="flex items-start" style={{ flex: 1 }}>
                <div className="flex flex-col items-center text-center" style={{ width: "100%" }}>
                  <div
                    className="flex items-center justify-center font-body"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: "#FEF3C7",
                      color: "#D97706",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {step.num}
                  </div>
                  <h4
                    className="font-body"
                    style={{ fontWeight: 600, fontSize: 14, color: "#111827", marginTop: 10 }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="font-body"
                    style={{ fontWeight: 400, fontSize: 13, color: "#6B7280", marginTop: 4 }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < 2 && (
                  <div
                    style={{
                      borderTop: "1px dashed #E5E7EB",
                      width: 48,
                      marginTop: 14,
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="flex sm:hidden flex-col items-center" style={{ gap: 0 }}>
            {[
              { num: "1", title: "Répondez", desc: "8 questions, 2 minutes." },
              { num: "2", title: "Recevez", desc: "Votre rapport personnalisé par email." },
              { num: "3", title: "Décidez", desc: "Avec les bonnes informations." },
            ].map((step, i) => (
              <div key={step.num}>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center font-body"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "#FEF3C7",
                        color: "#D97706",
                        fontWeight: 600,
                        fontSize: 14,
                        flexShrink: 0,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < 2 && (
                      <div
                        style={{
                          borderLeft: "1px dashed #E5E7EB",
                          height: 24,
                          marginTop: 6,
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < 2 ? 16 : 0 }}>
                    <h4
                      className="font-body"
                      style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="font-body"
                      style={{ fontWeight: 400, fontSize: 13, color: "#6B7280", marginTop: 2 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section
        ref={ctaRef}
        className={`bg-creme px-6 scroll-reveal ${ctaVisible ? "visible" : ""}`}
        style={{ paddingTop: 48, paddingBottom: 40 }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: 540 }}>
          <h2
            className="font-heading"
            style={{ fontSize: 24, fontWeight: 600, color: "#111827" }}
          >
            Prêt à savoir où vous en êtes ?
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#6B7280",
              marginTop: 12,
              marginBottom: 20,
            }}
          >
            Gratuit. Confidentiel. En 2 minutes vous saurez exactement quoi anticiper.
          </p>
          <a
            href="#services"
            className="inline-block font-body cta-btn"
            style={{
              backgroundColor: "#D97706",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 36px",
              borderRadius: 8,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B45309";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(217,119,6,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D97706";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Commencer mon diagnostic &rarr;
          </a>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <NewsletterSection />
    </>
  );
}
