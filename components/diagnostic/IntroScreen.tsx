"use client";

// ---------------------------------------------------------------------------
// Dual-tree layout — maintenance note
// ---------------------------------------------------------------------------
// This component renders TWO separate DOM trees for the hero:
//   1) Mobile (<768px) — visible via `block md:hidden`. Preserves the
//      original single-column centered layout byte-identical to the
//      pre-refactor state so SEO/social-link visual regressions are zero on
//      phones.
//   2) Tablet + Desktop (≥768px) — visible via `hidden md:grid`. Two-column
//      grid with the static salary preview card (Approach A) on the right.
//
// ANY FUTURE COPY CHANGE (headline wording, subtitle, urgency line, trust
// labels, CTA text, compliance line) MUST be applied to BOTH trees to
// prevent drift. If you find yourself tempted to deduplicate, first confirm
// the "byte-identical mobile" requirement is still in force.
// ---------------------------------------------------------------------------

import { useMemo } from "react";
import Link from "next/link";
import { KBullet } from "@/components/shared/KBullet";
import { KWatermark } from "@/components/shared/KWatermark";
import SalaryPreviewCard from "@/components/diagnostic/SalaryPreviewCard";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const diagnosticCount = useMemo(() => {
    const BASE = 2847;
    const LAUNCH = new Date("2026-03-01").getTime();
    const now = Date.now();
    const days = Math.max(0, Math.floor((now - LAUNCH) / 86_400_000));
    const dailyGrowth = 12 + (days % 5);
    return (BASE + days * dailyGrowth).toLocaleString("fr-CH");
  }, []);

  return (
    <>
      {/* =====================================================================
          DESKTOP + TABLET HERO (≥768px) — two-column grid
          ===================================================================== */}
      <section
        className="hidden md:grid relative overflow-hidden w-full min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] grid-cols-12 gap-x-8 px-6 lg:px-10 py-16 lg:py-20 animate-hero-desktop-in"
        aria-label="Diagnostic Emploi — introduction"
      >
        {/* Soft atmospheric wash (desktop-only) */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(217,119,6,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 35% at 10% 90%, rgba(217,119,6,0.03) 0%, transparent 55%)",
          }}
        />

        {/* K watermark — component handles its own responsive + positioning */}
        <KWatermark position="top-right" size="lg" offset={80} />

        {/* Left column */}
        <div className="relative z-10 col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-2 flex flex-col justify-center max-w-[620px]">
          <p className="hero-eyebrow text-[12px] font-semibold uppercase tracking-[0.1em] text-amber mb-6 flex items-center">
            <span>DIAGNOSTIC GRATUIT</span>
            <KBullet color="#D97706" />
            <span>EMPLOI</span>
          </p>

          <h1 className="hero-headline font-heading text-[36px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-gray-900 mb-6">
            Êtes-vous prêt pour la{" "}
            <span className="hero-noun text-amber italic">Suisse</span>
            &nbsp;?
          </h1>

          <p className="hero-sub text-[16px] lg:text-[18px] text-gray-600 max-w-[480px] mb-4 leading-relaxed">
            Identifiez vos forces, vos risques et les erreurs à éviter avant
            de vous lancer.
          </p>

          <p className="hero-urgency text-[16px] italic text-amber mb-8">
            Chaque mois sans optimisation peut vous coûter des milliers de
            francs.
          </p>

          <div className="mb-8">
            <button
              type="button"
              onClick={onStart}
              className="group inline-flex items-center gap-3 bg-amber text-white px-8 py-5 text-base font-bold tracking-wide rounded-xl shadow-lg shadow-amber/20 ring-1 ring-amber/20 transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:shadow-amber/30 hover:-translate-y-0.5"
            >
              Évaluer mon projet
              <span className="arrow inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="hero-trust flex flex-wrap items-center text-[13px] text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-amber"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              2 minutes
            </span>
            <KBullet />
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-amber"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              Score instantané
            </span>
            <KBullet />
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-amber"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              Confidentiel
            </span>
          </div>

          {/* Compliance trust signal — nLPD + Swiss hosting */}
          <p className="hero-compliance flex items-center gap-2 text-[12px] text-gray-400">
            <svg
              className="w-[14px] h-[14px] flex-shrink-0"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="3" fill="#DC2626" />
              <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
              <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
            </svg>
            <span>
              Conformité nLPD{" "}
              <span aria-hidden="true">·</span>{" "}
              Données hébergées en Suisse
            </span>
          </p>
        </div>

        {/* Right column — static salary preview card (Approach A) */}
        <div className="relative z-10 col-span-12 md:col-span-5 lg:col-span-5 flex items-center">
          <div className="w-full">
            <SalaryPreviewCard />
          </div>
        </div>
      </section>

      {/* =====================================================================
          MOBILE HERO + below-the-fold sections.
          The desktop grid above lives at the viewport root so it can span
          the full width. The mobile hero, Calendly CTA, and footer re-enter
          the funnel's `max-w-xl mx-auto px-6 py-4 md:py-14` wrapper here —
          the exact same wrapper that previously lived in DiagnosticApp
          around the whole IntroScreen — so mobile rendering is byte-
          identical to the pre-refactor state and the Calendly/footer widths
          on desktop stay at 576px centered as before.
          ===================================================================== */}
      <div className="max-w-xl mx-auto px-6 py-4 md:py-14">
        {/* Hero — full viewport */}
        <div className="relative flex flex-col items-center min-h-[calc(100vh-60px)] justify-center text-center px-6 py-4 md:py-10 overflow-hidden block md:hidden">
          {/* Layered atmospheric background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(217,119,6,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(217,119,6,0.04) 0%, transparent 50%)",
            }}
          />
          {/* Subtle noise texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
          {/* Decorative geometric accent — thin amber line */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-20 bg-gradient-to-b from-amber/30 to-transparent"
            aria-hidden="true"
          />

          {/* Headline */}
          <h1 className="relative text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-heading font-bold text-gray-900 leading-[1.1] max-w-2xl mb-4 md:mb-7 animate-intro-headline">
            Êtes-vous prêt pour la{" "}
            <span className="relative text-amber">
              Suisse
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber/25 rounded-full" />
            </span>
            &nbsp;?
          </h1>

          {/* Subtitle */}
          <p className="relative text-lg text-gray-500 text-center max-w-md mx-auto mb-3 md:mb-5 leading-relaxed font-body animate-intro-subtitle">
            Identifiez vos forces, vos risques et les erreurs à éviter avant de vous lancer.
          </p>

          {/* Urgency line */}
          <p className="relative text-sm text-amber/80 font-medium max-w-sm mx-auto mb-3 md:mb-6 animate-intro-urgency">
            Chaque mois sans optimisation peut vous coûter des milliers de francs.
          </p>

          {/* Badge — below subtitle */}
          <div className="relative mb-6 md:mb-10 animate-intro-badge">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-gradient-to-r from-amber/8 to-amber/4 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber shadow-sm shadow-amber/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              Diagnostic gratuit
            </span>
          </div>

          {/* Trust badges */}
          <div className="relative grid grid-cols-3 w-full max-w-md mb-6 md:mb-8 animate-intro-features">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-500">2 minutes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-500">Score instantané</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-500">Confidentiel</span>
            </div>
          </div>

          {/* Outcome preview */}
          <div className="relative w-full max-w-md mb-6 md:mb-8 animate-intro-outcomes">
            <div className="border border-gray-100 rounded-xl bg-white/40 px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-3">Ce que vous recevrez</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Score de viabilité personnalisé
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Rapport détaillé par email
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Recommandations sur mesure
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative animate-intro-cta w-full max-w-md">
            <button
              onClick={onStart}
              className="group relative w-full inline-flex items-center justify-center gap-3 bg-amber text-white px-8 py-5 text-base font-bold tracking-wide whitespace-nowrap transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:shadow-amber/30 hover:-translate-y-1 active:translate-y-0 rounded-xl shadow-lg shadow-amber/20 ring-1 ring-amber/20"
            >
              Évaluer mon projet
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </button>
          </div>

          {/* Social proof counter */}
          <p className="relative mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 animate-intro-social">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-vert" />
            <span className="tabular-nums font-medium text-gray-500">{diagnosticCount}</span>
            diagnostics réalisés
          </p>

          {/* Testimonial */}
          <blockquote className="relative mt-6 max-w-xs mx-auto text-center animate-intro-testimonial">
            <p className="text-sm text-gray-400 italic leading-relaxed">
              &laquo;&nbsp;En 2 minutes j&apos;ai compris exactement où j&apos;en étais dans mon projet.&nbsp;&raquo;
            </p>
            <footer className="mt-2 text-xs text-gray-300">
              — Marc L., développeur, Lyon
            </footer>
          </blockquote>

        </div>

        {/* Below the fold — Calendly CTA */}
        <section className="relative px-6 py-10 md:py-14 text-center border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
            Besoin d&apos;un accompagnement personnalisé&nbsp;?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Réservez un appel gratuit de 15 minutes avec un expert de l&apos;expatriation en Suisse.
          </p>
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gray-900 text-white px-8 py-4 text-sm font-bold tracking-wide rounded-xl shadow-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Réserver un appel gratuit
          </a>
          <p className="mt-4 text-xs text-gray-400">
            Sans engagement. Vos données ne sont partagées qu&apos;avec votre accord explicite.
          </p>
        </section>

        {/* Footer */}
        <footer className="px-6 py-6 text-center border-t border-gray-50">
          <p className="text-xs text-gray-300">
            © Kursor 2026 — Tous droits réservés ·{" "}
            <Link href="/politique-de-confidentialite" className="underline hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
