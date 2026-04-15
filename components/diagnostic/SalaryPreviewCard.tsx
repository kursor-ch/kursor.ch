import { KNegativeSpace } from "@/components/shared/KNegativeSpace";

/**
 * SalaryPreviewCard — static "Approach A" result preview used in the right
 * column of the Emploi desktop hero. Illustrative only (not personalized);
 * the numbers and profile metadata are hardcoded samples. Any future
 * personalization work (Phase B) would take props here — for now the card is
 * self-contained and takes no props.
 *
 * Visual rules (per Desktop Hero Pattern Spec + K Motif System Spec):
 *   - White card, 1px #E5E7EB border, rounded-2xl, subtle shadow
 *   - KNegativeSpace cutout in top-right corner (size 36)
 *   - Fraunces 44px amber hero amount; IBM Plex 11px uppercase eyebrow
 *   - Mini histogram: 7 divs, heights [20,40,65,100,90,60,30]%, peak bars
 *     (indices 3 & 4) amber, others gray-200, top-only radius.
 *   - No animation on the histogram or card.
 */

const HISTOGRAM_BARS: { heightPct: number; isPeak: boolean }[] = [
  { heightPct: 20, isPeak: false },
  { heightPct: 40, isPeak: false },
  { heightPct: 65, isPeak: false },
  { heightPct: 100, isPeak: true },
  { heightPct: 90, isPeak: true },
  { heightPct: 60, isPeak: false },
  { heightPct: 30, isPeak: false },
];

export default function SalaryPreviewCard() {
  return (
    <div className="w-full">
      <p className="preview-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
        APERÇU DE VOTRE RÉSULTAT
      </p>

      <KNegativeSpace
        corner="top-right"
        size={36}
        className="salary-preview-card bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      >
        <p className="card-eyebrow text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">
          PROFIL SIMILAIRE AU VÔTRE
        </p>
        <p className="card-meta text-[13px] text-gray-400 mb-6">
          Ingénieur logiciel · Genève · 5 ans d&apos;expérience
        </p>

        <p className="card-hero-amount font-heading text-[44px] font-medium text-amber leading-none mb-1">
          7 800 – 9 200{" "}
          <span className="card-currency text-[24px] font-normal">CHF</span>
        </p>
        <p className="card-hero-label text-[13px] text-gray-500 mb-6">
          salaire mensuel brut estimé
        </p>

        <div
          className="card-histogram flex items-end gap-1 h-[60px] mb-4"
          aria-hidden="true"
        >
          {HISTOGRAM_BARS.map((bar, idx) => (
            <div
              key={idx}
              className={`flex-1 rounded-t-sm ${
                bar.isPeak ? "bg-amber" : "bg-gray-200"
              }`}
              style={{ height: `${bar.heightPct}%` }}
            />
          ))}
        </div>

        <p className="card-footnote text-[12px] italic text-gray-400">
          Basé sur 47 profils similaires en Suisse romande
        </p>
      </KNegativeSpace>

      <p className="preview-subtext text-[13px] italic text-gray-500 mt-3">
        Calculé en 2 minutes à partir de vos réponses.
      </p>
    </div>
  );
}
