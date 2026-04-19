// 2026 average adult LAMal monthly premium per canton (toutes franchises,
// tous modèles) — honest approximations derived from OFSP 2025 published
// averages. Used as a display-level estimate of the model-surcharge component
// of the résident surcoût calculator. Nathan does the real analysis.

import type { Q2Canton } from "../types";

export const CANTON_PRIME_MONTHLY_CHF: Record<Q2Canton, number> = {
  geneve: 489,
  vaud: 442,
  valais: 383,
  neuchatel: 472,
  fribourg: 398,
  jura: 403,
  berne: 447,
  zurich: 427,
  bale: 450,
  tessin: 501,
  autre: 420,
};

export function cantonPrime(canton: Q2Canton): number {
  return CANTON_PRIME_MONTHLY_CHF[canton];
}
