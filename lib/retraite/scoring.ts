import { estimateRevenuChf, getTauxMarginal } from "./data/canton-taux";
import type {
  Q1Statut,
  Q2Anciennete,
  Q5TroisiemePilier,
  RetraiteAnswers,
  RetraiteScoreResult,
} from "./types";

export const PLAFOND_3A_SALARIE = 7_258; // 2025/2026 ceiling
export const PLAFOND_3A_INDEPENDANT_MAX = 36_288; // 2026 value, 20% net capped

function isIndependant(q1: Q1Statut): boolean {
  return q1 === "independant_suisse" || q1 === "independant_bc";
}

function plafondFor(q1: Q1Statut, estimatedRevenu: number): number {
  if (!isIndependant(q1)) return PLAFOND_3A_SALARIE;
  return Math.min(
    PLAFOND_3A_INDEPENDANT_MAX,
    Math.round(estimatedRevenu * 0.20)
  );
}

function estimateVersementActuel(
  q5: Q5TroisiemePilier,
  plafond: number
): number {
  switch (q5) {
    case "oui_max":
      return plafond;
    case "oui_partiel":
      return Math.round(plafond * 0.5);
    case "oui_recent":
      // Recent opener — typically near max, but missing-years count is what matters.
      return Math.round(plafond * 0.8);
    case "non_sait":
    case "non_ignore":
      return 0;
  }
}

function anneesSansCotisation(
  q2: Q2Anciennete,
  q5: Q5TroisiemePilier
): number {
  // When the person has no 3a at all: every year in Switzerland counts, capped
  // at the legal 10-year rachat window.
  if (q5 === "non_sait" || q5 === "non_ignore") {
    switch (q2) {
      case "naissance":
      case "plus_10ans":
        return 10;
      case "5_10ans":
        return 7;
      case "2_5ans":
        return 3;
      case "moins_2ans":
        return 1;
    }
  }
  // Recently opened — years_in_switzerland minus 2.
  if (q5 === "oui_recent") {
    switch (q2) {
      case "naissance":
      case "plus_10ans":
        return 8;
      case "5_10ans":
        return 5;
      case "2_5ans":
        return 1;
      case "moins_2ans":
        return 0;
    }
  }
  // oui_max / oui_partiel — treat as no missed years for rachat purposes
  // (simplification — Nathan does real reconstruction case by case).
  return 0;
}

function horizonYears(q8: RetraiteAnswers["q8_horizon"]): number | null {
  switch (q8) {
    case "moins_5ans":
      return 3;
    case "5_15ans":
      return 10;
    case "15_30ans":
      return 22;
    case "plus_30ans":
      return 35;
    case "ne_sais_pas":
      return null;
  }
}

function shouldFlagLpp(
  q1: Q1Statut,
  q6: RetraiteAnswers["q6_lpp"]
): boolean {
  if (isIndependant(q1)) return false;
  return (
    q6 === "oui_incompris" || q6 === "non_jamais" || q6 === "non_inconnu"
  );
}

export function computeRetraiteScore(
  answers: RetraiteAnswers
): RetraiteScoreResult {
  const estimatedRevenu = estimateRevenuChf(answers.q4_revenu);
  const taux_marginal = getTauxMarginal(answers.q3_canton, answers.q4_revenu);
  const plafond_3a = plafondFor(answers.q1_statut, estimatedRevenu);

  const versement_actuel = estimateVersementActuel(answers.q5_3a, plafond_3a);
  const perte_annuelle_3a = Math.max(
    0,
    Math.round((plafond_3a - versement_actuel) * taux_marginal)
  );

  const annees_sans_3a = anneesSansCotisation(
    answers.q2_anciennete,
    answers.q5_3a
  );
  const perte_cumulee = perte_annuelle_3a * Math.max(annees_sans_3a, 1);

  // Rachat rétroactif always uses the salarié ceiling, even for indépendants —
  // the 2026 law caps retroactive catch-up at the petit 3a ceiling.
  const rachat_retroactif_montant = annees_sans_3a * PLAFOND_3A_SALARIE;
  const rachat_retroactif_economie = Math.round(
    rachat_retroactif_montant * taux_marginal
  );

  return {
    perte_annuelle_3a,
    perte_cumulee,
    annees_sans_3a,
    rachat_retroactif_montant,
    rachat_retroactif_economie,
    taux_marginal,
    plafond_3a,
    lpp_flag: shouldFlagLpp(answers.q1_statut, answers.q6_lpp),
    horizon_years: horizonYears(answers.q8_horizon),
  };
}
