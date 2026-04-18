import { KNegativeSpace } from "@/components/shared/KNegativeSpace";

const MISSED_YEARS = [
  { year: "2019", value: "−2\u00a0840\u00a0CHF" },
  { year: "2020", value: "−2\u00a0840\u00a0CHF" },
  { year: "2021", value: "−2\u00a0840\u00a0CHF" },
  { year: "2022", value: "−2\u00a0840\u00a0CHF" },
  { year: "2023", value: "−2\u00a0840\u00a0CHF" },
];

export default function PrevoyancePreviewCard() {
  return (
    <div className="w-full">
      <p className="preview-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
        APERÇU DE VOTRE AUDIT
      </p>

      <KNegativeSpace
        corner="top-right"
        size={36}
        className="prevoyance-preview-card bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      >
        <p className="card-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">
          PROFIL SIMILAIRE AU VÔTRE
        </p>
        <p className="card-meta text-[13px] text-gray-400 mb-6">
          Salarié · Genève · Arrivé en 2019 · Aucun 3a ouvert
        </p>

        <p className="card-hero-amount font-heading text-[44px] font-medium text-amber leading-none mb-1">
          14&nbsp;200{" "}
          <span className="card-currency text-[20px] font-normal">CHF</span>
        </p>
        <p className="card-hero-label text-[13px] text-gray-500 mb-5">
          perte fiscale cumulée estimée
        </p>

        <div className="card-divider border-t border-[#E5E7EB] mb-5" />

        <div
          className="card-rachat-callout rounded-lg p-4 mb-5"
          style={{
            backgroundColor: "#FEF3E2",
            borderLeft: "3px solid #D97706",
          }}
        >
          <p className="card-rachat-eyebrow text-[10px] font-semibold uppercase tracking-[0.1em] text-amber mb-1.5">
            RACHAT RÉTROACTIF 3A 2026
          </p>
          <p className="card-rachat-body text-[13px] text-gray-700 leading-relaxed">
            Éligible au rattrapage de <strong>5&nbsp;années</strong> de
            cotisations manquées — soit jusqu&apos;à{" "}
            <strong>36&nbsp;290&nbsp;CHF</strong> déductibles.
          </p>
        </div>

        <div className="card-year-breakdown mb-4">
          {MISSED_YEARS.map(({ year, value }) => (
            <div
              key={year}
              className="card-year-row flex items-center gap-2 mb-1.5 last:mb-0"
            >
              <span className="card-year-label text-[12px] text-gray-500 w-9 flex-shrink-0">
                {year}
              </span>
              <div
                className="card-year-bar h-2 flex-grow rounded-full"
                style={{ backgroundColor: "rgba(217,119,6,0.4)" }}
                aria-hidden="true"
              />
              <span className="card-year-value text-[12px] font-medium w-20 flex-shrink-0 text-right" style={{ color: "#B45309" }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <p className="card-footnote text-[11px] italic text-gray-400">
          Basé sur le plafond 3a 2025 de 7&nbsp;258&nbsp;CHF · Taux marginal
          estimé 39%
        </p>
      </KNegativeSpace>

      <p className="preview-subtext text-[13px] italic text-gray-500 mt-3">
        Calculé en 2 minutes à partir de vos réponses.
      </p>
    </div>
  );
}
