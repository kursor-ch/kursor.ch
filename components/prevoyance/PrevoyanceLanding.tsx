"use client";

import { useState } from "react";
import Link from "next/link";
import { KBullet } from "@/components/shared/KBullet";
import { KWatermark } from "@/components/shared/KWatermark";
import KCursor from "@/components/shared/KCursor";
import PrevoyancePreviewCard from "@/components/prevoyance/PrevoyancePreviewCard";
import { sendSoftExitWebhook } from "@/lib/shared/webhookClient";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistState = "idle" | "form" | "submitting" | "done";

interface PrevoyanceLandingProps {
  // When provided, the hero CTA starts the diagnostic instead of opening the
  // waitlist capture form. The landing page remains visually identical.
  onStart?: () => void;
}

export default function PrevoyanceLanding({
  onStart,
}: PrevoyanceLandingProps = {}) {
  const [waitlist, setWaitlist] = useState<WaitlistState>("idle");
  const [email, setEmail] = useState("");
  const [newsletterOptin, setNewsletterOptin] = useState(true);
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWaitlistSubmit = async () => {
    setError(null);
    if (!EMAIL_REGEX.test(email)) {
      setError("Email invalide");
      return;
    }
    if (!rgpdAccepted) {
      setError("Merci d\u2019accepter le traitement de vos données.");
      return;
    }
    setWaitlist("submitting");
    await sendSoftExitWebhook({
      funnel_id: "retraite",
      soft_exit_reason: "exploration",
      contact: { email },
      consent: { rgpd_accepted: true, newsletter_optin: newsletterOptin },
      applicable_funnels: ["emploi", "logement"],
      submitted_at: new Date().toISOString(),
    });
    setWaitlist("done");
  };

  const waitlistCta = (mobile?: boolean) => {
    if (waitlist === "done") {
      return (
        <p className={`text-sm text-vert font-body ${mobile ? "text-center" : ""}`}>
          Merci — nous vous préviendrons dès l&apos;ouverture de l&apos;audit
          prévoyance.
        </p>
      );
    }

    const diagnosticMode = typeof onStart === "function";
    const primaryLabel = diagnosticMode
      ? "Démarrer le diagnostic"
      : "Être notifié au lancement";
    const primarySubText = diagnosticMode
      ? "2 minutes · 100% gratuit · sans engagement"
      : "Audit gratuit disponible prochainement";

    return (
      <>
        <button
          type="button"
          onClick={() => {
            if (diagnosticMode) {
              onStart!();
              return;
            }
            setWaitlist(waitlist === "idle" ? "form" : "idle");
          }}
          className="group inline-flex items-center gap-3 bg-amber text-white px-8 py-5 text-base font-bold tracking-wide rounded-xl shadow-lg shadow-amber/20 ring-1 ring-amber/20 transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:shadow-amber/30 hover:-translate-y-0.5"
        >
          {primaryLabel}
          <span className="arrow inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p className="text-[13px] text-gray-400 mt-2">{primarySubText}</p>

        {!diagnosticMode && (waitlist === "form" || waitlist === "submitting") && (
          <div className={`mt-4 space-y-3 ${mobile ? "w-full" : "max-w-sm"}`}>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none focus:border-amber transition-colors"
            />
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={newsletterOptin}
                onChange={(e) => setNewsletterOptin(e.target.checked)}
                className="mt-0.5 accent-amber"
              />
              <span className="text-xs text-gray-500 font-body leading-relaxed">
                Je souhaite recevoir la newsletter Kursor (désinscription en
                1&nbsp;clic).
              </span>
            </label>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={rgpdAccepted}
                onChange={(e) => setRgpdAccepted(e.target.checked)}
                className="mt-0.5 accent-amber"
              />
              <span className="text-xs text-gray-500 font-body leading-relaxed">
                J&apos;accepte que Kursor CH traite mon email pour me
                recontacter.
              </span>
            </label>
            {error && <p className="text-xs text-rouge">{error}</p>}
            <button
              type="button"
              onClick={handleWaitlistSubmit}
              disabled={waitlist === "submitting"}
              className="w-full px-6 py-3 rounded-xl border-2 border-amber text-amber font-semibold hover:bg-amber hover:text-white transition-colors duration-200 disabled:opacity-60"
            >
              {waitlist === "submitting" ? "Envoi..." : "M\u2019inscrire"}
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {/* =================================================================
          DESKTOP + TABLET HERO (≥768px) — two-column grid
          ================================================================= */}
      <section
        className="hidden md:grid relative overflow-hidden w-full min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] grid-cols-12 gap-x-8 px-6 lg:px-10 py-16 lg:py-20 animate-hero-desktop-in"
        aria-label="Audit Prévoyance — introduction"
      >
        {/* Soft atmospheric wash */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(217,119,6,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 35% at 10% 90%, rgba(217,119,6,0.03) 0%, transparent 55%)",
          }}
        />

        <KWatermark position="top-right" size="lg" offset={80} />

        {/* Left column */}
        <div className="relative z-10 col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-2 flex flex-col justify-center max-w-[620px]">
          <p className="hero-eyebrow text-[12px] font-semibold uppercase tracking-[0.1em] text-amber mb-6 flex items-center">
            <span>AUDIT GRATUIT</span>
            <KBullet color="#D97706" />
            <span>PRÉVOYANCE</span>
          </p>

          <h1 className="hero-headline font-heading text-[36px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-gray-900 mb-6">
            Combien vous coûte chaque année sans{" "}
            <span className="hero-noun text-amber italic">prévoyance</span>
            <KCursor /> optimisée&nbsp;?
          </h1>

          <p className="hero-sub text-[16px] lg:text-[18px] text-gray-600 max-w-[480px] mb-4 leading-relaxed">
            Calculez votre perte fiscale cumulée et découvrez si vous êtes
            éligible au rachat rétroactif 3a — jusqu&apos;à 10 ans de
            cotisations rattrapables en 2026.
          </p>

          <p className="hero-urgency text-[16px] italic text-amber mb-8">
            En moyenne, un résident en Suisse perd 1&nbsp;400&nbsp;CHF
            d&apos;économies fiscales par année de 3a non cotisée.
          </p>

          <div className="mb-8">{waitlistCta()}</div>

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
              Perte fiscale chiffrée
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

        {/* Right column — static preview card (Approach A) */}
        <div className="relative z-10 col-span-12 md:col-span-5 lg:col-span-5 flex items-center">
          <div className="w-full">
            <PrevoyancePreviewCard />
          </div>
        </div>
      </section>

      {/* =================================================================
          MOBILE HERO (<768px) — single-column centered
          ================================================================= */}
      <div className="max-w-xl mx-auto px-6 py-4 md:py-14">
        <div className="relative flex flex-col items-center min-h-[calc(100vh-60px)] justify-center text-center px-6 py-4 overflow-hidden block md:hidden">
          {/* Atmospheric background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(217,119,6,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(217,119,6,0.04) 0%, transparent 50%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-amber/30 to-transparent"
            aria-hidden="true"
          />

          <h1 className="relative text-[2rem] font-heading font-bold text-gray-900 leading-[1.1] max-w-2xl mb-4 animate-intro-headline">
            Combien vous coûte chaque année sans{" "}
            <span className="relative text-amber">
              prévoyance
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber/25 rounded-full" />
            </span>{" "}
            optimisée&nbsp;?
          </h1>

          <p className="relative text-lg text-gray-500 text-center max-w-md mx-auto mb-3 leading-relaxed font-body animate-intro-subtitle">
            Calculez votre perte fiscale cumulée et découvrez si vous êtes
            éligible au rachat rétroactif 3a en 2026.
          </p>

          <p className="relative text-sm text-amber/80 font-medium max-w-sm mx-auto mb-3 animate-intro-urgency">
            En moyenne, un résident en Suisse perd 1&nbsp;400&nbsp;CHF par
            année de 3a non cotisée.
          </p>

          <div className="relative mb-6 animate-intro-badge">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-gradient-to-r from-amber/8 to-amber/4 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber shadow-sm shadow-amber/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              Audit gratuit
            </span>
          </div>

          {/* Trust badges */}
          <div className="relative grid grid-cols-3 w-full max-w-md mb-6 animate-intro-features">
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
              <span className="text-xs font-medium text-gray-500">Perte chiffrée</span>
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

          {/* CTA */}
          <div className="relative animate-intro-cta w-full max-w-md flex flex-col items-center">
            {waitlistCta(true)}
          </div>

          {/* Compliance */}
          <p className="relative mt-6 flex items-center justify-center gap-2 text-[12px] text-gray-400 animate-intro-social">
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
              Conformité nLPD · Données hébergées en Suisse
            </span>
          </p>
        </div>

        {/* Footer */}
        <footer className="px-6 py-6 text-center border-t border-gray-50 block md:hidden">
          <p className="text-xs text-gray-300">
            © Kursor 2026 — Tous droits réservés ·{" "}
            <Link
              href="/politique-de-confidentialite"
              className="underline hover:text-gray-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
