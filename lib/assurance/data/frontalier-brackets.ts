// Frontalier LAMal vs CMU calculator constants.
// Approximations for display — Nathan does the real arbitrage.

import type { QF2Famille, QF3Rfr, QF4Salaire } from "../types";

export const PASS_2025_EUR = 46_368;
export const CMU_RATE = 0.08;
export const CHF_TO_EUR = 0.92;

// LAMal monthly premium estimate per family situation (CHF).
// Each insured person pays their own prime — these are household totals.
export const LAMAL_MONTHLY_BY_FAMILLE: Record<QF2Famille, number> = {
  seul: 450,
  couple_revenus: 900,
  couple_sans_revenus: 900,
  avec_enfants: 1300,
};

// RFR midpoint in EUR for CMU calculation (Q-F3).
export const RFR_MIDPOINT_EUR: Record<QF3Rfr, number> = {
  moins_15k: 10_000,
  "15k_30k": 22_500,
  "30k_50k": 40_000,
  "50k_80k": 65_000,
  plus_80k: 100_000,
  ne_sais_pas: 40_000,
};

// Swiss gross salary midpoint in CHF (QF4), used to project future RFR.
export const SALAIRE_MIDPOINT_CHF: Record<QF4Salaire, number> = {
  moins_60k: 50_000,
  "60k_100k": 80_000,
  "100k_150k": 125_000,
  plus_150k: 180_000,
};
