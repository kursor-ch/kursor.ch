"use client";

import { KWatermark } from "@/components/shared/KWatermark";
import { KBullet } from "@/components/shared/KBullet";
import LamalCmuComparisonCard from "./LamalCmuComparisonCard";
import TrousList from "./TrousList";
import type {
  AssurancePersona,
  FrontalierComparatif,
  TrouDeCouverture,
} from "@/lib/assurance/types";
import type { AssuranceVerdict } from "@/lib/assurance/verdicts";

interface ResultsScreenFrontalierProps {
  prenom: string;
  persona: AssurancePersona;
  comparatif: FrontalierComparatif;
  trous: TrouDeCouverture[];
  verdict: AssuranceVerdict;
}

const RECO_LABELS: Record<FrontalierComparatif["recommandation"], string> = {
  lamal: "LAMal recommandée",
  cmu: "CMU recommandée",
  audit_approfondi: "Audit approfondi nécessaire",
};

const RECO_COLORS: Record<FrontalierComparatif["recommandation"], string> = {
  lamal: "#86A789",
  cmu: "#D97706",
  audit_approfondi: "#6B7280",
};

export default function ResultsScreenFrontalier({
  prenom,
  persona,
  comparatif,
  trous,
  verdict,
}: ResultsScreenFrontalierProps) {
  return (
    <section className="relative">
      <KWatermark position="top-right" size="lg" offset={80} />

      <div className="animate-screen-in space-y-8">
        <div className="text-center">
          <p className="text-[12px] font-body uppercase tracking-[0.1em] text-gray-500 flex items-center justify-center">
            <span>{prenom ? `${prenom.toUpperCase()},` : ""}</span>
            <KBullet color="#D97706" />
            <span>VOTRE COMPARATIF SANTÉ</span>
          </p>
        </div>

        <LamalCmuComparisonCard comparatif={comparatif} />

        {comparatif.piege_n2 && (
          <div
            className="max-w-xl mx-auto rounded-xl border-l-4 p-5 text-left"
            style={{
              backgroundColor: "#FFF7ED",
              borderColor: "#EA580C",
            }}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl" aria-hidden="true">
                ⚠
              </span>
              <div className="space-y-2 font-body">
                <p className="text-sm font-semibold text-gray-900">
                  Attention : piège N-2 détecté
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Votre cotisation CMU va passer de{" "}
                  <strong className="tabular-nums">
                    {comparatif.cout_cmu_actuel.toLocaleString("fr-CH")} EUR
                  </strong>{" "}
                  à{" "}
                  <strong className="tabular-nums">
                    {comparatif.cout_cmu_projete.toLocaleString("fr-CH")} EUR
                  </strong>{" "}
                  par an dans 2 ans, lorsque votre salaire suisse deviendra
                  votre nouveau RFR. Anticipez dès maintenant.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center space-y-3">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: RECO_COLORS[comparatif.recommandation] }}
          >
            {RECO_LABELS[comparatif.recommandation]}
          </span>
          <p
            className="text-[11px] font-body font-semibold uppercase tracking-[0.1em]"
            style={{ color: verdict.color }}
          >
            {verdict.label} — persona : {persona.label}
          </p>
          <p className="max-w-[560px] mx-auto text-base text-gray-600 leading-[1.75]">
            {verdict.summary}
          </p>
        </div>

        {trous.length > 0 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg text-gray-900 mb-3 text-center">
              Risques transfrontaliers à surveiller
            </h3>
            <TrousList trous={trous} />
          </div>
        )}

        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-gray-500">
            Votre bilan détaillé arrive dans votre boîte email sous quelques
            minutes.
          </p>
        </div>

        <div className="max-w-md mx-auto text-center pt-4 border-t border-gray-100 space-y-3">
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: "#86A789",
              boxShadow: "0 10px 15px -3px rgba(134,167,137,0.25)",
            }}
          >
            Parler à un spécialiste LAMal/CMU →
          </a>
          <p className="text-xs text-gray-400">
            Arbitrage personnalisé sous 48h — gratuit et sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
