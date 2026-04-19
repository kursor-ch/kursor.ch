"use client";

import { KNegativeSpace } from "@/components/shared/KNegativeSpace";
import type { FrontalierComparatif } from "@/lib/assurance/types";

interface LamalCmuComparisonCardProps {
  comparatif: FrontalierComparatif;
}

export default function LamalCmuComparisonCard({
  comparatif,
}: LamalCmuComparisonCardProps) {
  const { cout_lamal_annuel, cout_cmu_actuel, cout_cmu_projete } = comparatif;

  return (
    <KNegativeSpace
      corner="top-right"
      size={36}
      className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-6">
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-gray-500">
            LAMal frontalier
          </p>
          <p
            className="font-heading font-medium text-gray-900 tabular-nums"
            style={{ fontSize: "clamp(28px, 5vw, 36px)" }}
          >
            {cout_lamal_annuel.toLocaleString("fr-CH")} CHF
          </p>
          <p className="text-sm text-gray-500 font-body">
            par an — prime moyenne estimée
          </p>
        </div>

        <div className="space-y-3 md:pl-6">
          <p className="text-[11px] font-body uppercase tracking-[0.15em] text-gray-500">
            CMU (CNTFS)
          </p>
          <p
            className="font-heading font-medium text-gray-900 tabular-nums"
            style={{ fontSize: "clamp(28px, 5vw, 36px)" }}
          >
            {cout_cmu_actuel.toLocaleString("fr-CH")} EUR
          </p>
          <p className="text-sm text-gray-500 font-body">
            par an — actuel (basé sur RFR N-2)
          </p>
          <p className="text-sm text-gray-700 font-body pt-1">
            →{" "}
            <strong className="text-amber tabular-nums">
              {cout_cmu_projete.toLocaleString("fr-CH")} EUR
            </strong>{" "}
            dans 2 ans
          </p>
        </div>
      </div>
    </KNegativeSpace>
  );
}
