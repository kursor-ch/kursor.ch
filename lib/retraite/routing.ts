import type {
  CrossSell,
  PartnerRouting,
  Priority,
  RetraiteData,
} from "@/lib/shared/schemaTypes";
import type {
  RetraiteAnswers,
  RetraitePersonaCode,
  RetraiteScoreResult,
} from "./types";

export type RetraiteSoftExitReason =
  | "sans_activite"
  | "pre_retraite"
  | "jeune_horizon";

// Q1 triggers the sans_activite exit before any questions load. Pre-retraite
// and jeune_horizon exits fire AFTER Q8 — they need full context to detect.
export function resolveSoftExitQ1(
  q1: string | undefined
): RetraiteSoftExitReason | null {
  if (q1 === "sans_activite") return "sans_activite";
  return null;
}

export function resolveSoftExitEnd(
  answers: RetraiteAnswers
): RetraiteSoftExitReason | null {
  // Likely >60: horizon < 5 ans AND long Swiss residence (born here or 10+ ans).
  if (
    answers.q8_horizon === "moins_5ans" &&
    (answers.q2_anciennete === "naissance" ||
      answers.q2_anciennete === "plus_10ans")
  ) {
    return "pre_retraite";
  }

  // Likely <25: low income AND recent arrival AND no 3a (collapsed branch
  // covers prior non_ignore + non_sait).
  if (
    answers.q4_revenu === "moins_50k" &&
    answers.q2_anciennete === "moins_2ans" &&
    answers.q5_3a === "non"
  ) {
    return "jeune_horizon";
  }

  return null;
}

export function computePriority(
  personaCode: RetraitePersonaCode,
  score: RetraiteScoreResult,
  revenu: RetraiteAnswers["q4_revenu"]
): Priority {
  const isHighIncome =
    revenu === "120k_180k" ||
    revenu === "180k_250k" ||
    revenu === "plus_250k";
  const isMidIncome = revenu === "80k_120k";
  const rachatBonus = score.annees_sans_3a >= 5;

  // Persona D (indépendant) is always very_hot — plafond majoré is the single
  // largest fiscal lever in the Swiss tax code.
  if (personaCode === "D") return "very_hot";

  // Persona C with high income — optimisateur underusing the ceiling.
  if (personaCode === "C" && isHighIncome) return "very_hot";

  // Rachat bonus: 5+ years of missed 3a is a big operational lever that
  // justifies a founder call regardless of persona.
  if (rachatBonus && isHighIncome) return "very_hot";
  if (rachatBonus) return "hot";

  if (personaCode === "C") return "hot";
  if (personaCode === "B" && (isHighIncome || isMidIncome)) return "hot";
  if (personaCode === "A" && isHighIncome) return "hot";

  return "warm";
}

function founderCallSla(priority: Priority): number | null {
  if (priority === "very_hot") return 4;
  if (priority === "hot") return 24;
  return null;
}

export function buildPartnerRouting(
  personaCode: RetraitePersonaCode,
  priority: Priority
): PartnerRouting {
  const sla = founderCallSla(priority);
  const products =
    personaCode === "D"
      ? ["3a_rachat_retroactif", "lpp_2e_pilier", "ijm_independant"]
      : ["3a_rachat_retroactif", "lpp_2e_pilier"];

  const routing: PartnerRouting = {
    primary_partner: "nathan_piliercompar",
    partner_products: products,
    founder_call_required: sla !== null,
    partner_transmission_sla_hours: 48,
  };
  if (sla !== null) routing.founder_call_sla_hours = sla;
  return routing;
}

export function buildCrossSell(
  personaCode: RetraitePersonaCode
): CrossSell {
  if (personaCode === "D") {
    return {
      applicable_funnels: ["assurance"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Indépendant — protection revenu (IJM) et 3a majoré à arbitrer ensemble.",
    };
  }
  if (personaCode === "C") {
    return {
      applicable_funnels: ["assurance"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Profil optimisateur — analyse complémentaires et 3a à optimiser en parallèle.",
    };
  }
  if (personaCode === "A") {
    return {
      applicable_funnels: ["emploi", "logement", "assurance"],
      cross_sell_priority: "medium",
      cross_sell_reason:
        "Premier pas dans le système suisse — couverture et installation à cadrer.",
    };
  }
  // Persona B
  return {
    applicable_funnels: ["assurance", "logement"],
    cross_sell_priority: "medium",
    cross_sell_reason:
      "Optimisation 3a engagée — audit assurances et logement en complément.",
  };
}

// Approximate year of arrival derived from Q2 bucket. `naissance` → null
// (born here, no arrival year). Otherwise, current year minus bucket midpoint.
function yearArrivalSwitzerland(
  q2: RetraiteAnswers["q2_anciennete"]
): number | null {
  const year = new Date().getFullYear();
  switch (q2) {
    case "naissance":
      return null;
    case "plus_10ans":
      return year - 12;
    case "5_10ans":
      return year - 7;
    case "2_5ans":
      return year - 3;
    case "moins_2ans":
      return year - 1;
  }
}

function current3aStatus(
  q5: RetraiteAnswers["q5_3a"]
): RetraiteData["current_3a_status"] {
  switch (q5) {
    case "oui_max":
      return "maxes_each_year";
    case "oui_partiel":
    case "oui_recent":
      return "has_some_below_max";
    case "non":
      // Collapsed from prior non_sait + non_ignore on 2026-05-09. We default
      // to "unsure" — the more conservative of the two prior values.
      return "unsure";
  }
}

function professionalStatus(
  q1: RetraiteAnswers["q1_statut"]
): RetraiteData["professional_status"] {
  switch (q1) {
    case "salarie_suisse":
    case "salarie_c":
    case "salarie_b":
    case "frontalier":
      return "salarie_lpp";
    case "independant_suisse":
    case "independant_bc":
      return "independant_ri";
    case "sans_activite":
      // Shouldn't reach here — sans_activite is soft-exited before payload.
      return "salarie_lpp";
  }
}

export function buildRetraiteData(
  answers: RetraiteAnswers,
  score: RetraiteScoreResult
): RetraiteData {
  return {
    year_arrival_switzerland: yearArrivalSwitzerland(answers.q2_anciennete),
    years_eligible_for_rachat_retroactif: score.annees_sans_3a,
    estimated_rattrapage_max_chf: score.rachat_retroactif_montant,
    estimated_tax_savings_chf: score.rachat_retroactif_economie,
    current_3a_status: current3aStatus(answers.q5_3a),
    professional_status: professionalStatus(answers.q1_statut),
  };
}
