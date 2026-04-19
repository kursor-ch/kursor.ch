import {
  CHF_TO_EUR,
  CMU_RATE,
  LAMAL_MONTHLY_BY_FAMILLE,
  PASS_2025_EUR,
  RFR_MIDPOINT_EUR,
  SALAIRE_MIDPOINT_CHF,
} from "./data/frontalier-brackets";
import type { AssuranceAnswersFrontalier, FrontalierComparatif } from "./types";

function cmuCost(rfrEur: number): number {
  const base = Math.max(0, rfrEur - PASS_2025_EUR);
  return Math.round(base * CMU_RATE);
}

export function computeFrontalierComparatif(
  answers: AssuranceAnswersFrontalier
): FrontalierComparatif {
  const lamalMonthly = LAMAL_MONTHLY_BY_FAMILLE[answers.qf2_famille];
  const cout_lamal_annuel = lamalMonthly * 12;

  const rfrMid = RFR_MIDPOINT_EUR[answers.qf3_rfr];
  const cout_cmu_actuel = cmuCost(rfrMid);

  const salaryChf = SALAIRE_MIDPOINT_CHF[answers.qf4_salaire];
  const projectedRfrEur = Math.round(salaryChf * CHF_TO_EUR);
  const cout_cmu_projete = cmuCost(projectedRfrEur);

  // Piège N-2: either a >50% jump over actuel, or a jump from zero that
  // lands above a noticeable 1 500 EUR/yr threshold.
  const piege_n2 =
    (cout_cmu_actuel > 0 &&
      cout_cmu_projete > cout_cmu_actuel * 1.5) ||
    (cout_cmu_actuel === 0 && cout_cmu_projete > 1500);

  const difference_5ans = (cout_lamal_annuel - cout_cmu_projete) * 5;

  let recommandation: FrontalierComparatif["recommandation"];
  if (answers.qf1_droit_option === "ne_sais_pas") {
    recommandation = "audit_approfondi";
  } else if (
    answers.qf2_famille === "avec_enfants" &&
    answers.qf2_famille !== ("couple_revenus" as typeof answers.qf2_famille)
  ) {
    recommandation = "cmu";
  } else if (
    (answers.qf4_salaire === "100k_150k" ||
      answers.qf4_salaire === "plus_150k") &&
    answers.qf2_famille === "seul"
  ) {
    recommandation = "lamal";
  } else {
    // Compare projected costs — prefer the cheaper unless within 1 000 EUR.
    const deltaAbs = Math.abs(cout_lamal_annuel - cout_cmu_projete);
    if (deltaAbs < 1000) recommandation = "audit_approfondi";
    else
      recommandation = cout_lamal_annuel < cout_cmu_projete ? "lamal" : "cmu";
  }

  return {
    cout_lamal_annuel,
    cout_cmu_actuel,
    cout_cmu_projete,
    difference_5ans,
    piege_n2,
    recommandation,
  };
}
