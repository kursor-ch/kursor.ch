// Approximate marginal tax rates by canton × income bracket.
// Source: 2025 cantonal tax scales simplified to bracket midpoints.
// These are display-level estimates — Nathan does the precise calculation.
// `prefere_pas` mirrors the 50k–80k column as a conservative default.

import type { Q3Canton, Q4Revenu } from "../types";

export const CANTON_TAUX: Record<Q3Canton, Record<Q4Revenu, number>> = {
  geneve: {
    moins_50k: 0.25,
    "50k_80k": 0.30,
    "80k_120k": 0.33,
    "120k_180k": 0.35,
    "180k_250k": 0.37,
    plus_250k: 0.38,
    prefere_pas: 0.30,
  },
  vaud: {
    moins_50k: 0.24,
    "50k_80k": 0.28,
    "80k_120k": 0.31,
    "120k_180k": 0.33,
    "180k_250k": 0.35,
    plus_250k: 0.36,
    prefere_pas: 0.28,
  },
  valais: {
    moins_50k: 0.22,
    "50k_80k": 0.26,
    "80k_120k": 0.29,
    "120k_180k": 0.31,
    "180k_250k": 0.33,
    plus_250k: 0.34,
    prefere_pas: 0.26,
  },
  neuchatel: {
    moins_50k: 0.26,
    "50k_80k": 0.30,
    "80k_120k": 0.33,
    "120k_180k": 0.35,
    "180k_250k": 0.37,
    plus_250k: 0.38,
    prefere_pas: 0.30,
  },
  fribourg: {
    moins_50k: 0.23,
    "50k_80k": 0.27,
    "80k_120k": 0.30,
    "120k_180k": 0.32,
    "180k_250k": 0.34,
    plus_250k: 0.35,
    prefere_pas: 0.27,
  },
  jura: {
    moins_50k: 0.25,
    "50k_80k": 0.29,
    "80k_120k": 0.32,
    "120k_180k": 0.34,
    "180k_250k": 0.36,
    plus_250k: 0.37,
    prefere_pas: 0.29,
  },
  berne: {
    moins_50k: 0.23,
    "50k_80k": 0.27,
    "80k_120k": 0.30,
    "120k_180k": 0.32,
    "180k_250k": 0.34,
    plus_250k: 0.35,
    prefere_pas: 0.27,
  },
  bale: {
    moins_50k: 0.24,
    "50k_80k": 0.28,
    "80k_120k": 0.31,
    "120k_180k": 0.33,
    "180k_250k": 0.35,
    plus_250k: 0.36,
    prefere_pas: 0.28,
  },
  zurich: {
    moins_50k: 0.20,
    "50k_80k": 0.24,
    "80k_120k": 0.27,
    "120k_180k": 0.29,
    "180k_250k": 0.31,
    plus_250k: 0.32,
    prefere_pas: 0.24,
  },
  tessin: {
    moins_50k: 0.22,
    "50k_80k": 0.26,
    "80k_120k": 0.29,
    "120k_180k": 0.31,
    "180k_250k": 0.33,
    plus_250k: 0.34,
    prefere_pas: 0.26,
  },
  autre: {
    moins_50k: 0.22,
    "50k_80k": 0.26,
    "80k_120k": 0.29,
    "120k_180k": 0.31,
    "180k_250k": 0.33,
    plus_250k: 0.34,
    prefere_pas: 0.26,
  },
};

export function getTauxMarginal(canton: Q3Canton, revenu: Q4Revenu): number {
  return CANTON_TAUX[canton][revenu];
}

// Bracket midpoint in CHF — used to estimate the 20% plafond indépendant
// and to derive the year_arrival_switzerland proxy. `prefere_pas` gets a
// conservative 80k default (median Swiss salary).
export function estimateRevenuChf(revenu: Q4Revenu): number {
  switch (revenu) {
    case "moins_50k":
      return 40_000;
    case "50k_80k":
      return 65_000;
    case "80k_120k":
      return 100_000;
    case "120k_180k":
      return 150_000;
    case "180k_250k":
      return 215_000;
    case "plus_250k":
      return 300_000;
    case "prefere_pas":
      return 80_000;
  }
}
