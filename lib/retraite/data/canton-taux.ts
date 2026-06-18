// Source de vérité : TABLE_FISCALE_Retraite_Calcul.md (constantes 2026).
// Modifier ces chiffres = changer le contrat numérique du diagnostic.
// `non_renseigne` mappe sur la colonne 80_120k du canton (règle table fiscale).

import type { Q3Canton, Q4Revenu } from "../types";

type RateBand = Exclude<Q4Revenu, "non_renseigne">;

export const MARGINAL_RATE: Record<Q3Canton, Record<RateBand, number>> = {
  geneve: {
    moins_50k: 0.16,
    "50_80k": 0.25,
    "80_120k": 0.33,
    "120_180k": 0.40,
    "180_250k": 0.43,
    plus_250k: 0.45,
  },
  vaud: {
    moins_50k: 0.14,
    "50_80k": 0.23,
    "80_120k": 0.31,
    "120_180k": 0.37,
    "180_250k": 0.40,
    plus_250k: 0.41,
  },
  neuchatel: {
    moins_50k: 0.14,
    "50_80k": 0.23,
    "80_120k": 0.31,
    "120_180k": 0.37,
    "180_250k": 0.40,
    plus_250k: 0.41,
  },
  jura: {
    moins_50k: 0.14,
    "50_80k": 0.23,
    "80_120k": 0.31,
    "120_180k": 0.37,
    "180_250k": 0.40,
    plus_250k: 0.41,
  },
  berne: {
    moins_50k: 0.14,
    "50_80k": 0.23,
    "80_120k": 0.31,
    "120_180k": 0.37,
    "180_250k": 0.40,
    plus_250k: 0.41,
  },
  bale: {
    moins_50k: 0.13,
    "50_80k": 0.21,
    "80_120k": 0.29,
    "120_180k": 0.35,
    "180_250k": 0.38,
    plus_250k: 0.40,
  },
  zurich: {
    moins_50k: 0.13,
    "50_80k": 0.21,
    "80_120k": 0.29,
    "120_180k": 0.35,
    "180_250k": 0.38,
    plus_250k: 0.40,
  },
  fribourg: {
    moins_50k: 0.12,
    "50_80k": 0.19,
    "80_120k": 0.26,
    "120_180k": 0.31,
    "180_250k": 0.34,
    plus_250k: 0.36,
  },
  valais: {
    moins_50k: 0.12,
    "50_80k": 0.19,
    "80_120k": 0.26,
    "120_180k": 0.31,
    "180_250k": 0.34,
    plus_250k: 0.36,
  },
  tessin: {
    moins_50k: 0.12,
    "50_80k": 0.19,
    "80_120k": 0.26,
    "120_180k": 0.31,
    "180_250k": 0.34,
    plus_250k: 0.36,
  },
  autre: {
    moins_50k: 0.12,
    "50_80k": 0.19,
    "80_120k": 0.26,
    "120_180k": 0.30,
    "180_250k": 0.32,
    plus_250k: 0.33,
  },
};

// Plafond 3a indépendant 2026 par tranche de revenu : min(36 288 ; 20% × midpoint).
// Utilisé uniquement pour le plafond annuel des indépendants ; le rachat
// rétroactif reste plafonné au 7 258 CHF salarié (règle table fiscale).
export const PLAFOND_INDEP: Record<Q4Revenu, number> = {
  moins_50k: 8_000,
  "50_80k": 13_000,
  "80_120k": 20_000,
  "120_180k": 30_000,
  "180_250k": 36_288,
  plus_250k: 36_288,
  non_renseigne: 20_000,
};

export function getTauxMarginal(canton: Q3Canton, revenu: Q4Revenu): number {
  const band: RateBand = revenu === "non_renseigne" ? "80_120k" : revenu;
  return MARGINAL_RATE[canton][band];
}
