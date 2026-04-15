import type { LogementPersonaCode } from "./personas";
import type { LogementTier } from "./verdicts";
import { getLogementVerdict } from "./verdicts";

// Internal keys MUST match docs/Logement_Build_Brief.md §3 exactly.
export interface LogementAnswers {
  q1_statut:
    | "resident_b_recent"
    | "resident_installed"
    | "futur_resident_offre_confirmee"
    | "futur_resident_exploration"
    | "frontalier";
  q1bis_offer_confirmed?: "offer_confirmed_yes" | "offer_confirmed_no";
  q2_canton:
    | "geneve"
    | "vaud"
    | "valais"
    | "neuchatel"
    | "fribourg"
    | "jura"
    | "multi_canton";
  q3_urgence: "lt1m" | "1_3m" | "3_6m" | "gt6m";
  q4_budget: "lt1600" | "1600_2200" | "2200_3000" | "3000_4500" | "gt4500";
  q5_duree_recherche: "pas_commence" | "lt1m" | "1_3m" | "gt3m";
  q6_attestation_non_poursuite:
    | "oui_a_jour"
    | "oui_perimee"
    | "non_pas_encore"
    | "non_inconnu"
    | "na_pas_en_suisse";
}

export interface LogementScoreResult {
  base: number;
  personaModifier: number;
  adjusted: number;
  cantonMultiplier: number;
  final: number;
  tier: LogementTier;
  weeksMin: number;
  weeksMax: number;
}

// Difficulty-point tables — brief §3.
const Q3_POINTS: Record<LogementAnswers["q3_urgence"], number> = {
  lt1m: 20,
  "1_3m": 10,
  "3_6m": 0,
  gt6m: -5,
};

// lt1600 never reaches scoring (soft-exit at Q4), but included for completeness.
const Q4_POINTS: Record<LogementAnswers["q4_budget"], number> = {
  lt1600: 0,
  "1600_2200": 15,
  "2200_3000": 5,
  "3000_4500": 0,
  gt4500: -5,
};

const Q5_POINTS: Record<LogementAnswers["q5_duree_recherche"], number> = {
  pas_commence: 0,
  lt1m: 5,
  "1_3m": 15,
  gt3m: 25,
};

const Q6_POINTS: Record<
  LogementAnswers["q6_attestation_non_poursuite"],
  number
> = {
  oui_a_jour: -5,
  oui_perimee: 5,
  non_pas_encore: 10,
  non_inconnu: 15,
  na_pas_en_suisse: 0,
};

const PERSONA_MOD: Record<LogementPersonaCode, number> = {
  A: 5,
  B: 0,
  C: 10,
};

const CANTON_MULT: Record<LogementAnswers["q2_canton"], number> = {
  geneve: 1.4,
  vaud: 1.2,
  valais: 1.0,
  neuchatel: 1.0,
  fribourg: 1.0,
  jura: 1.0,
  multi_canton: 1.1,
};

export function getCantonMultiplier(
  canton: LogementAnswers["q2_canton"]
): number {
  return CANTON_MULT[canton];
}

export function computeLogementScore(
  answers: LogementAnswers,
  personaCode: LogementPersonaCode
): LogementScoreResult {
  const base =
    Q3_POINTS[answers.q3_urgence] +
    Q4_POINTS[answers.q4_budget] +
    Q5_POINTS[answers.q5_duree_recherche] +
    Q6_POINTS[answers.q6_attestation_non_poursuite];

  const personaModifier = PERSONA_MOD[personaCode];
  const adjusted = base + personaModifier;
  const cantonMultiplier = CANTON_MULT[answers.q2_canton];
  const raw = Math.round(adjusted * cantonMultiplier);
  const final = Math.max(0, Math.min(100, raw));

  const verdict = getLogementVerdict(final);

  return {
    base,
    personaModifier,
    adjusted,
    cantonMultiplier,
    final,
    tier: verdict.key,
    weeksMin: verdict.weeksMin,
    weeksMax: verdict.weeksMax,
  };
}
