import type {
  CrossSell,
  PartnerRouting,
  Priority,
  RetraiteData,
} from "@/lib/shared/schemaTypes";
import type {
  Q1Statut,
  Q2Arrivee,
  Q4Revenu,
  Q5TroisiemePilier,
  RetraiteAnswers,
  RetraitePersonaCode,
  RetraiteScoreResult,
} from "./types";

export type RetraiteSoftExitReason =
  | "sans_activite"
  | "pre_retraite"
  | "jeune_horizon";

// Q1 déclenche l'exit sans_activite avant toute question. Pre-retraite et
// jeune_horizon se déclenchent APRÈS Q8 — ils ont besoin du contexte complet.
export function resolveSoftExitQ1(
  q1: string | undefined
): RetraiteSoftExitReason | null {
  if (q1 === "sans_activite") return "sans_activite";
  return null;
}

export function resolveSoftExitEnd(
  answers: RetraiteAnswers
): RetraiteSoftExitReason | null {
  // Probablement >60 : horizon < 5 ans ET longue résidence (natif ou 10+ ans).
  if (
    answers.q8_horizon === "moins_5_ans" &&
    (answers.q2_arrivee === "depuis_naissance" ||
      answers.q2_arrivee === "plus_10_ans")
  ) {
    return "pre_retraite";
  }

  // Probablement <25 : revenu bas ET arrivée récente ET pas de 3a.
  if (
    answers.q4_revenu === "moins_50k" &&
    answers.q2_arrivee === "moins_2_ans" &&
    (answers.q5_3a === "non_ignore" || answers.q5_3a === "non_connait")
  ) {
    return "jeune_horizon";
  }

  return null;
}

// Règles priority field map v2 (lignes 120–124).
// richIncome = q4 ∈ {80_120k, 120_180k, 180_250k, plus_250k}.
export function computePriority(
  personaCode: RetraitePersonaCode,
  score: RetraiteScoreResult,
  q1_statut: Q1Statut,
  q4_revenu: Q4Revenu
): Priority {
  if (q1_statut === "sans_activite") return "cold";

  const richIncome =
    q4_revenu === "80_120k" ||
    q4_revenu === "120_180k" ||
    q4_revenu === "180_250k" ||
    q4_revenu === "plus_250k";
  const rachatBonus = score.annees_sans_3a >= 5;

  if (personaCode === "C") return "very_hot";
  if (personaCode === "D" && richIncome) return "very_hot";
  if (rachatBonus && richIncome) return "very_hot";

  if (
    personaCode === "B" &&
    (q4_revenu === "80_120k" || q4_revenu === "120_180k")
  ) {
    return "hot";
  }

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

export function buildCrossSell(personaCode: RetraitePersonaCode): CrossSell {
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

// Mappings vers la couche payload — field map v2.
const MAP_3A: Record<Q5TroisiemePilier, RetraiteData["current_3a_status"]> = {
  max: "maxes_each_year",
  partiel: "has_some_below_max",
  recent: "has_some_below_max",
  non_connait: "none",
  non_ignore: "none",
};

const MAP_PROF: Record<Q1Statut, RetraiteData["professional_status"]> = {
  salarie_suisse: "salarie_lpp",
  salarie_c: "salarie_lpp",
  salarie_b: "salarie_lpp",
  frontalier_g: "salarie_lpp",
  independant_suisse: "independant_ri",
  independant_bc: "independant_ri",
  sans_activite: "salarie_no_lpp",
};

const MAP_YEARS: Record<Q2Arrivee, number> = {
  depuis_naissance: 10,
  plus_10_ans: 10,
  "5_10_ans": 6,
  "2_5_ans": 3,
  moins_2_ans: 1,
};

const CURRENT_YEAR = 2026;

export function buildRetraiteData(
  answers: RetraiteAnswers,
  score: RetraiteScoreResult
): RetraiteData {
  return {
    year_arrival_switzerland: CURRENT_YEAR - MAP_YEARS[answers.q2_arrivee],
    years_eligible_for_rachat_retroactif: score.annees_sans_3a,
    estimated_rattrapage_max_chf: score.rachat_retroactif_montant,
    estimated_tax_savings_chf: score.rachat_retroactif_economie,
    current_3a_status: MAP_3A[answers.q5_3a],
    professional_status: MAP_PROF[answers.q1_statut],
  };
}
