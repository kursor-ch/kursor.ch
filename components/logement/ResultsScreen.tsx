"use client";

import { useState } from "react";
import DifficultyGauge from "./DifficultyGauge";
import { KWatermark } from "@/components/shared/KWatermark";
import type { LogementScoreResult } from "@/lib/logement/scoring";
import type { LogementAnswers } from "@/lib/logement/scoring";
import type { LogementVerdict } from "@/lib/logement/verdicts";
import type { LogementPersona } from "@/lib/logement/personas";
import { detectLogementRisks, SEVERITY_COLORS } from "@/lib/logement/risks";
import type { RiskSeverity } from "@/lib/logement/risks";
import { pushEvent } from "@/lib/gtm";

interface ResultsScreenProps {
  score: LogementScoreResult;
  verdict: LogementVerdict;
  persona: LogementPersona;
  prenom: string;
  answers: LogementAnswers;
}

const SEVERITY_STYLES: Record<
  RiskSeverity,
  { bg: string; text: string; border: string }
> = {
  CRITIQUE: { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA" },
  "ÉLEVÉ": { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  MOYEN: { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A" },
};

export default function ResultsScreen({
  score,
  verdict,
  persona,
  prenom,
  answers,
}: ResultsScreenProps) {
  const risks = detectLogementRisks(answers, persona.code);
  const [newsletterDismissed, setNewsletterDismissed] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubscribe = () => {
    // TODO(team): wire to dedicated newsletter endpoint when n8n exposes one.
    // Until then, the dataLayer event is the source of truth so the marketing
    // team can route it via GTM.
    pushEvent("newsletter_optin_logement", { source: "results_page" });
    setNewsletterSubscribed(true);
  };

  return (
    <section className="relative">
      {/* K watermark — decorative, hidden <768px via component defaults.
          Sits as a section-level sibling so it does not interfere with
          the inner space-y stack. */}
      <KWatermark position="top-right" size="lg" offset={80} />

      <div className="animate-screen-in space-y-8 text-center">
        {/* Eyebrow — diagnostic label */}
        <p className="text-[12px] font-body uppercase tracking-[0.1em] text-gray-500">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-px" />
          {prenom ? `${prenom.toUpperCase()}, ` : ""}VOTRE DIAGNOSTIC
        </p>

        {/* Hero — timeline */}
        <div className="space-y-3">
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-gray-500">
            Durée estimée de recherche
          </p>
          <h1
            className="font-heading font-medium leading-[1.1] text-amber"
            style={{ fontSize: "clamp(40px, 8vw, 56px)" }}
          >
            {verdict.weeksLabel}
          </h1>
        </div>

        {/* Verdict copy */}
        <div className="max-w-[560px] mx-auto">
          <p className="text-base text-gray-600 leading-[1.75] text-center">
            {verdict.summary}
          </p>
        </div>

        {/* Verdict tier badge + difficulty gauge */}
        <div>
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-amber mb-2">
            {verdict.label}
          </p>
          <DifficultyGauge score={score.final} tier={verdict.key} />
        </div>

        {/* Risks */}
        {risks.length > 0 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg text-gray-900 mb-3">Points d&apos;attention</h3>
            <div className="space-y-2">
              {risks.map((r, i) => {
                const style = SEVERITY_STYLES[r.severity];
                return (
                  <div
                    key={r.id}
                    className="animate-fade-stagger text-left rounded-lg border bg-white p-3.5"
                    style={{
                      animationDelay: `${i * 150}ms`,
                      borderColor: "#E5E7EB",
                      borderLeftWidth: "3px",
                      borderLeftColor: SEVERITY_COLORS[r.severity],
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: style.bg,
                          color: style.text,
                          border: `1px solid ${style.border}`,
                        }}
                      >
                        {r.severity}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {r.title}
                      </span>
                    </div>
                    {r.detail && (
                      <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">
                        {r.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-[13px] text-gray-400 text-center mt-4">
              Votre bilan détaillé par email analyse chaque point et vous donne
              les leviers concrets pour les traiter.
            </p>
          </div>
        )}

        {/* Email notification */}
        <div className="max-w-md mx-auto">
          <p className="text-sm text-gray-500">
            Votre bilan détaillé arrive dans votre boîte email sous quelques
            minutes.
          </p>
        </div>

        {/* Newsletter card — dismissible. The dataLayer event is the source of
            truth until n8n exposes a dedicated newsletter endpoint. */}
        {!newsletterDismissed && (
          <div className="max-w-md mx-auto">
            <div className="relative text-left rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
              <button
                type="button"
                onClick={() => setNewsletterDismissed(true)}
                aria-label="Masquer la proposition d'inscription à la newsletter"
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                ×
              </button>
              {newsletterSubscribed ? (
                <p className="text-sm font-body text-vert pr-6">
                  Merci, vous êtes inscrit·e. Premier conseil dans votre boîte
                  email cette semaine.
                </p>
              ) : (
                <>
                  <p className="text-sm font-semibold text-gray-900 pr-6 mb-1">
                    1 conseil concret par semaine
                  </p>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                    Recevez 1 conseil concret par semaine pour votre
                    installation en Suisse romande.
                  </p>
                  <button
                    type="button"
                    onClick={handleNewsletterSubscribe}
                    className="px-4 py-2 rounded-lg bg-amber text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Je m&apos;inscris
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Calendly CTA */}
        <div className="max-w-md mx-auto pt-4 border-t border-gray-100 space-y-3">
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-amber px-6 py-4 text-white font-semibold text-base sm:text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
          >
            Parler à un expert logement Kursor →
          </a>
          <p className="text-xs text-gray-400">
            Sans engagement. Un expert analyse votre dossier et vous oriente.
          </p>
        </div>
      </div>
    </section>
  );
}
