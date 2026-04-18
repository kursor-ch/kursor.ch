import { KNegativeSpace } from "@/components/shared/KNegativeSpace";

const COVERAGE_GAPS = [
  "Perte de gain\u00a0: aucune couverture au-delà de 90\u00a0jours",
  "RC ménage\u00a0: plafond insuffisant (100k\u00a0CHF)",
  "Dentaire\u00a0: non couvert malgré option disponible",
];

export default function AssurancePreviewCard() {
  return (
    <div className="w-full">
      <p className="preview-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
        APERÇU DE VOTRE AUDIT
      </p>

      <KNegativeSpace
        corner="top-right"
        size={36}
        className="assurance-preview-card bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      >
        <p className="card-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">
          CAS SIMILAIRE AU VÔTRE
        </p>
        <p className="card-meta text-[13px] text-gray-400 mb-6">
          Salarié · Genève · 35 ans · Complémentaire LCA
        </p>

        <p className="card-hero-amount font-heading text-[44px] font-medium text-amber leading-none mb-1">
          +1&nbsp;240{" "}
          <span className="card-currency text-[20px] font-normal">
            CHF / an
          </span>
        </p>
        <p className="card-hero-label text-[13px] text-gray-500 mb-5">
          surcoût annuel identifié
        </p>

        <div className="card-divider border-t border-[#E5E7EB] mb-5" />

        <p className="card-section-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-[#B45309] mb-3">
          TROUS DE COUVERTURE
        </p>
        <ul className="card-gaps text-[13px] text-gray-700 leading-relaxed mb-5 space-y-2">
          {COVERAGE_GAPS.map((gap) => (
            <li key={gap} className="flex items-start gap-2">
              <span
                className="inline-block w-[6px] h-[6px] mt-[7px] flex-shrink-0"
                style={{ backgroundColor: "#B45309" }}
                aria-hidden="true"
              />
              {gap}
            </li>
          ))}
        </ul>

        <p className="card-footnote text-[11px] italic text-gray-400">
          Analyse basée sur 8 critères OFSP + contrats types Suisse romande
        </p>
      </KNegativeSpace>

      <p className="preview-subtext text-[13px] italic text-gray-500 mt-3">
        Calculé en 2 minutes à partir de vos réponses.
      </p>
    </div>
  );
}
