import type { LogementPersonaCode } from "./personas";
import type { LogementTier } from "./verdicts";
import { getLogementVerdict } from "./verdicts";

// Internal keys MUST match docs/Logement_Build_Brief.md §3 exactly.
//
// Q5 (durée de recherche) was dropped from the user-facing flow on 2026-05-09
// because it overlapped with Q3 (urgence) and stretched the funnel for marginal
// signal. Its 0–25 scoring weight was redistributed across Q3 and Q6 below to
// keep the difficulty score in the same ~0–100 range and preserve the verdict
// thresholds in verdicts.ts without re-tuning.
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

// Difficulty-point tables.
//
// Q5 (durée de recherche) used to contribute 0/5/15/25 points. After Q5 was
// dropped from the flow (2026-05-09), its signal was redistributed:
//   • Q3 absorbs the urgency-pressure portion (+10/+8/+3 to the three short
//     horizons).
//   • Q6 absorbs the preparation-friction portion (+5/+8/+10/+5 to the
//     "attestation absent or stale" branches).
// Realistic ceiling stays ~100 (Genève · 1600–2200 budget · lt1m · non_inconnu
// + Persona C ⇒ 30+15+25+10 = 80, ×1.4 = 112 → clamp 100). Floor stays ~0.
const Q3_POINTS: Record<LogementAnswers["q3_urgence"], number> = {
  lt1m: 30,
  "1_3m": 18,
  "3_6m": 3,
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

const Q6_POINTS: Record<
  LogementAnswers["q6_attestation_non_poursuite"],
  number
> = {
  oui_a_jour: -5,
  oui_perimee: 10,
  non_pas_encore: 18,
  non_inconnu: 25,
  na_pas_en_suisse: 5,
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
