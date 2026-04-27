"use client";

import Link from "next/link";
import { KWatermark } from "@/components/shared/KWatermark";
import { KBullet } from "@/components/shared/KBullet";
import CountUp from "@/components/shared/CountUp";
import type {
  RetraiteAnswers,
  RetraitePersona,
  RetraiteScoreResult,
} from "@/lib/retraite/types";
import {
  getPersonaVerdictParagraph,
  type RetraiteVerdict,
} from "@/lib/retraite/verdicts";

const CANTON_LABELS: Record<RetraiteAnswers["q3_canton"], string> = {
  geneve: "Genève",
  vaud: "Vaud",
  valais: "Valais",
  neuchatel: "Neuchâtel",
  fribourg: "Fribourg",
  jura: "Jura",
  berne: "Berne",
  bale: "Bâle",
  zurich: "Zurich",
  tessin: "Tessin",
  autre: "votre canton",
};

const AVG_LOYER_CHF: Record<RetraiteAnswers["q3_canton"], number> = {
  geneve: 2200,
  vaud: 1900,
  valais: 1500,
  neuchatel: 1600,
  fribourg: 1500,
  jura: 1300,
  berne: 1700,
  bale: 1700,
  zurich: 2100,
  tessin: 1500,
  autre: 1700,
};

interface ResultsScreenProps {
  prenom: string;
  persona: RetraitePersona;
  score: RetraiteScoreResult;
  verdict: RetraiteVerdict;
  answers: RetraiteAnswers;
}

function formatChf(n: number): string {
  return n.toLocaleString("fr-CH");
}

function cantonLabel(canton: RetraiteAnswers["q3_canton"]): string {
  return CANTON_LABELS[canton];
}

function currentYear(): number {
  return new Date().getFullYear();
}

export default function ResultsScreen({
  prenom,
  persona,
  score,
  verdict,
  answers,
}: ResultsScreenProps) {
  const annees_sans_3a = Math.min(score.annees_sans_3a, 10);
  const startYear = currentYear() - annees_sans_3a;
  const yearRows = Array.from({ length: annees_sans_3a }, (_, i) => ({
    year: startYear + i,
    loss: score.perte_annuelle_3a,
  }));
  const yearLabel = cantonLabel(answers.q3_canton);
  const monthsOfRent =
    score.rachat_retroactif_economie > 0
      ? Math.round(
          score.rachat_retroactif_economie / AVG_LOYER_CHF[answers.q3_canton]
        )
      : 0;

  const personaParagraph = getPersonaVerdictParagraph(
    answers.q7_inquietude,
    persona,
    score
  );

  const showRachat = score.annees_sans_3a > 0;
  const showEmphasis = score.annees_sans_3a >= 5 && monthsOfRent > 0;

  return (
    <section className="relative">
      <KWatermark position="top-right" size="lg" offset={80} />

      <div className="animate-screen-in space-y-8">
        {/* ===== HERO ===== */}
        <div className="text-center space-y-3">
          <p className="text-[12px] font-body uppercase tracking-[0.1em] text-gray-500 flex items-center justify-center">
            <span>{prenom ? `${prenom.toUpperCase()},` : ""}</span>
            <KBullet color="#D97706" />
            <span>VOTRE AUDIT PRÉVOYANCE</span>
          </p>

          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-gray-500">
            Perte fiscale annuelle estimée
          </p>
          <h1
            className="font-heading font-medium leading-[1.05] text-amber"
            style={{ fontSize: "clamp(40px, 8vw, 56px)" }}
          >
            <CountUp to={score.perte_annuelle_3a} suffix=" CHF / an" duration={1400} />
          </h1>
          <p className="text-sm text-gray-600 font-body max-w-md mx-auto">
            d&apos;économies fiscales perdues chaque année sur votre 3ème pilier
          </p>
          {annees_sans_3a > 0 && (
            <p className="text-sm text-gray-500 font-body">
              Sur {annees_sans_3a} année{annees_sans_3a > 1 ? "s" : ""}, cela
              représente{" "}
              <strong className="text-gray-800">
                {formatChf(score.perte_cumulee)} CHF
              </strong>{" "}
              laissés sur la table.
            </p>
          )}

          <div>
            <p
              className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] pt-2"
              style={{ color: verdict.color }}
            >
              {verdict.label} — persona : {persona.label}
            </p>
          </div>
        </div>

        {/* ===== CTA #1 — sandwich top ===== */}
        <div className="max-w-md mx-auto">
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: "#D97706",
              boxShadow: "0 10px 15px -3px rgba(217,119,6,0.25)",
            }}
          >
            Récupérer mes économies fiscales →
          </a>
          <p className="text-xs text-gray-400 text-center mt-2">
            Échange gratuit avec un spécialiste · Rappel sous 48h
          </p>
        </div>

        {/* ===== RACHAT RÉTROACTIF 2026 CALLOUT ===== */}
        {showRachat && (
          <div className="max-w-xl mx-auto">
            <div
              className="rounded-xl p-5 sm:p-6"
              style={{
                backgroundColor: "#FEF3E2",
                borderLeft: "3px solid #D97706",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-amber mb-2">
                LOI 2026 — RACHAT RÉTROACTIF 3A
              </p>
              <p className="text-[15px] text-gray-800 leading-relaxed">
                Bonne nouvelle&nbsp;: depuis 2026, vous pouvez rattraper jusqu&apos;à{" "}
                <strong>{formatChf(score.rachat_retroactif_montant)} CHF</strong>{" "}
                de versements 3a manquants sur les{" "}
                <strong>{annees_sans_3a} dernières années</strong>. Cela
                représenterait une économie fiscale immédiate de{" "}
                <strong>
                  {formatChf(score.rachat_retroactif_economie)} CHF
                </strong>
                .
              </p>
              {showEmphasis && (
                <p
                  className="text-[13px] italic mt-3 pt-3 border-t"
                  style={{
                    borderColor: "rgba(217,119,6,0.2)",
                    color: "#B45309",
                  }}
                >
                  C&apos;est l&apos;équivalent de {monthsOfRent} mois de loyer à{" "}
                  {yearLabel}.
                </p>
              )}
            </div>
          </div>
        )}

        {/* ===== YEAR-BY-YEAR BREAKDOWN ===== */}
        {annees_sans_3a > 0 && (
          <div className="max-w-xl mx-auto">
            <h3 className="text-base font-heading font-semibold text-gray-900 mb-3">
              Votre perte fiscale année par année
            </h3>
            <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm space-y-1.5">
              {yearRows.map(({ year, loss }) => (
                <div
                  key={year}
                  className="flex items-center gap-3"
                >
                  <span className="text-[12px] text-gray-500 w-12 flex-shrink-0 font-body">
                    {year}
                  </span>
                  <div
                    className="h-2 flex-grow rounded-full"
                    style={{ backgroundColor: "rgba(217,119,6,0.4)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[12px] font-medium w-24 flex-shrink-0 text-right font-body"
                    style={{ color: "#B45309" }}
                  >
                    −{formatChf(loss)}&nbsp;CHF
                  </span>
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-stone-200 flex items-center gap-3">
                <span className="text-[12px] font-semibold text-gray-700 w-12 flex-shrink-0 font-body">
                  Total
                </span>
                <div
                  className="h-2.5 flex-grow rounded-full"
                  style={{ backgroundColor: "rgba(217,119,6,0.7)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-[13px] font-semibold w-24 flex-shrink-0 text-right font-body"
                  style={{ color: "#B45309" }}
                >
                  −{formatChf(score.perte_cumulee)}&nbsp;CHF
                </span>
              </div>
            </div>
            <p className="text-[11px] italic text-gray-400 mt-3 text-center">
              Basé sur le plafond 3a 2026 de {formatChf(score.plafond_3a)} CHF ·
              Taux marginal estimé {Math.round(score.taux_marginal * 100)}%
            </p>
          </div>
        )}

        {/* ===== LPP info card ===== */}
        {score.lpp_flag && (
          <div className="max-w-xl mx-auto">
            <div className="flex gap-3 p-4 rounded-xl bg-[#F5F3FF] border border-[#E9D5FF]">
              <svg
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="#7C3AED"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <p className="text-[13px] text-gray-700 leading-relaxed font-body">
                Votre certificat LPP contient probablement un potentiel de
                rachat supplémentaire non chiffré ici. Un spécialiste peut
                analyser votre certificat et identifier des économies fiscales
                additionnelles sur votre 2ème pilier.
              </p>
            </div>
          </div>
        )}

        {/* ===== Persona verdict paragraph ===== */}
        <div className="max-w-xl mx-auto">
          <p className="text-base text-gray-700 leading-[1.75] font-body">
            {personaParagraph}
          </p>
        </div>

        {/* ===== CTA #2 — bottom of the sandwich ===== */}
        <div className="max-w-md mx-auto pt-4 border-t border-gray-100 space-y-3">
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: "#7C3AED",
              boxShadow: "0 10px 15px -3px rgba(124,58,237,0.25)",
            }}
          >
            Parler à un spécialiste prévoyance →
          </a>
          <p className="text-xs text-gray-500 text-center">
            Audit personnalisé gratuit · Sans engagement · Rappel sous 48h
          </p>
          <p className="text-xs text-gray-400 text-center">
            Confidentiel · Données hébergées en Suisse
          </p>
        </div>

        {/* ===== CROSS-SELL CARD ===== */}
        <div className="max-w-xl mx-auto">
          <Link
            href="/assurance"
            className="block rounded-xl border border-stone-200 bg-white p-5 hover:border-stone-300 hover:shadow-sm transition-all duration-200 group"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-2 font-body">
              PROCHAINE ÉTAPE SUGGÉRÉE
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-1 font-body">
              Votre audit a aussi révélé un signal sur vos assurances.
            </p>
            <p className="text-[13px] text-gray-500 mb-3 font-body">
              Vérifiez votre couverture en 2 minutes — surcoût et trous de
              couverture.
            </p>
            <span
              className="inline-flex items-center gap-2 text-[14px] font-semibold font-body group-hover:gap-3 transition-all duration-200"
              style={{ color: "#86A789" }}
            >
              Lancer mon Audit Assurances →
            </span>
          </Link>
        </div>

        <p className="text-center text-xs text-gray-400 font-body pt-2">
          Votre bilan détaillé arrive dans votre boîte email sous quelques
          minutes.
        </p>
      </div>
    </section>
  );
}
