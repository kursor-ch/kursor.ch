"use client";

import { KWatermark } from "@/components/shared/KWatermark";
import { KBullet } from "@/components/shared/KBullet";
import SurcoutBreakdownBar from "./SurcoutBreakdownBar";
import TrousList from "./TrousList";
import type {
  AssuranceAnswersResident,
  AssurancePersona,
  SurcoutResult,
  TrouDeCouverture,
} from "@/lib/assurance/types";
import type { AssuranceVerdict } from "@/lib/assurance/verdicts";

interface ResultsScreenResidentProps {
  prenom: string;
  persona: AssurancePersona;
  surcout: SurcoutResult;
  trous: TrouDeCouverture[];
  verdict: AssuranceVerdict;
  answers: AssuranceAnswersResident;
}

export default function ResultsScreenResident({
  prenom,
  persona,
  surcout,
  trous,
  verdict,
}: ResultsScreenResidentProps) {
  return (
    <section className="relative">
      <KWatermark position="top-right" size="lg" offset={80} />

      <div className="animate-screen-in space-y-8 text-center">
        <p className="text-[12px] font-body uppercase tracking-[0.1em] text-gray-500 flex items-center justify-center">
          <span>{prenom ? `${prenom.toUpperCase()},` : ""}</span>
          <KBullet color="#D97706" />
          <span>VOTRE AUDIT ASSURANCES</span>
        </p>

        <div className="space-y-3">
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-gray-500">
            Surcoût annuel estimé
          </p>
          <h1
            className="font-heading font-medium leading-[1.05] text-amber"
            style={{ fontSize: "clamp(40px, 8vw, 56px)" }}
          >
            +{surcout.total_annuel.toLocaleString("fr-CH")} CHF / an
          </h1>
          <p className="text-sm text-gray-500 font-body">
            soit{" "}
            <strong className="text-gray-700">
              {surcout.total_5ans.toLocaleString("fr-CH")} CHF
            </strong>{" "}
            cumulés sur 5 ans
          </p>
        </div>

        <div className="max-w-[560px] mx-auto">
          <p className="text-base text-gray-600 leading-[1.75] text-center">
            {verdict.summary}
          </p>
        </div>

        <div>
          <p
            className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] mb-2"
            style={{ color: verdict.color }}
          >
            {verdict.label} — persona : {persona.label}
          </p>
        </div>

        <div className="max-w-md mx-auto text-left bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
          <h3 className="text-sm font-heading font-semibold text-gray-900 mb-4 text-center">
            D&apos;où vient votre surcoût
          </h3>
          <SurcoutBreakdownBar
            breakdown={surcout.breakdown}
            total={surcout.total_annuel}
          />
        </div>

        {trous.length > 0 && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg text-gray-900 mb-3">
              Trous de couverture identifiés
            </h3>
            <TrousList trous={trous} />
            <p className="text-[13px] text-gray-400 text-center mt-4">
              Votre bilan détaillé par email analyse chaque point et chiffre le
              risque financier réel pour votre foyer.
            </p>
          </div>
        )}

        <div className="max-w-md mx-auto">
          <p className="text-sm text-gray-500">
            Votre bilan détaillé arrive dans votre boîte email sous quelques
            minutes.
          </p>
        </div>

        <div className="max-w-md mx-auto pt-4 border-t border-gray-100 space-y-3">
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
            Obtenir mon audit personnalisé gratuit →
          </a>
          <p className="text-xs text-gray-400">
            Un spécialiste indépendant analysera votre situation sous 48h.
            Données confidentielles · Aucun engagement · 100% gratuit
          </p>
        </div>
      </div>
    </section>
  );
}
