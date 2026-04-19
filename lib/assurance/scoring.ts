import { cantonPrime } from "./data/canton-primes";
import type {
  AssuranceAnswersResident,
  SurcoutBreakdown,
  SurcoutResult,
} from "./types";

const FRANCHISE_POINTS: Record<AssuranceAnswersResident["q5_franchise"], number> = {
  "300": 700,
  "500": 200,
  "1000_1500": 0,
  "2000_2500": 0,
  ne_sais_pas: 400,
};

// Re-cost franchise 2000_2500 as under-coverage surcharge when the person
// also runs on the libre model — they probably picked a high franchise
// blindly and are paying libre-premium on top of that.
function franchiseSurcoutAdjusted(
  q5: AssuranceAnswersResident["q5_franchise"],
  q6: AssuranceAnswersResident["q6_modele"]
): number {
  if (q5 === "2000_2500" && q6 === "libre") return 400;
  return FRANCHISE_POINTS[q5];
}

const INERTIE_POINTS: Record<AssuranceAnswersResident["q4_caisse"], number> = {
  pas_encore: 200,
  moins_1an: 200,
  plusieurs_annees_jamais_change: 800,
  change_pas_recemment: 400,
  compare_regulierement: 0,
};

function modeleSurcout(
  q6: AssuranceAnswersResident["q6_modele"],
  canton: AssuranceAnswersResident["q2_canton"]
): number {
  if (q6 !== "libre") return 0;
  const prime = cantonPrime(canton);
  // ~12% of annual prime is the typical alternative-model discount.
  return Math.round(prime * 12 * 0.12);
}

function doublonsSurcout(
  q3: AssuranceAnswersResident["q3_famille"],
  q8: AssuranceAnswersResident["q8_complementaires"]
): number {
  let total = 0;

  const isCouple =
    q3 === "couple_sans_enfant" || q3 === "couple_avec_enfants";
  const hasComplementaire =
    q8 !== "aucune" && q8 !== "ne_sais_pas";

  if (isCouple && hasComplementaire) total += 300;
  if (q8 === "plusieurs") total += 200;

  return total;
}

// Missing family complementaires is an under-coverage not a surcoût, so we
// keep it at 0 here — the gap surfaces in risks.ts instead.
function complementairesSurcout(
  _q3: AssuranceAnswersResident["q3_famille"],
  _q8: AssuranceAnswersResident["q8_complementaires"]
): number {
  return 0;
}

export function computeSurcout(
  answers: AssuranceAnswersResident
): SurcoutResult {
  const breakdown: SurcoutBreakdown = {
    franchise: franchiseSurcoutAdjusted(answers.q5_franchise, answers.q6_modele),
    modele: modeleSurcout(answers.q6_modele, answers.q2_canton),
    inertie: INERTIE_POINTS[answers.q4_caisse],
    doublons: doublonsSurcout(answers.q3_famille, answers.q8_complementaires),
    complementaires: complementairesSurcout(
      answers.q3_famille,
      answers.q8_complementaires
    ),
  };

  const total_annuel =
    breakdown.franchise +
    breakdown.modele +
    breakdown.inertie +
    breakdown.doublons +
    breakdown.complementaires;

  return {
    total_annuel,
    total_5ans: total_annuel * 5,
    breakdown,
  };
}
