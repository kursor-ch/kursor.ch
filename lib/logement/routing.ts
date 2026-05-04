import type { CrossSell, PartnerRouting, Priority } from "@/lib/shared/schemaTypes";
import type { LogementAnswers } from "./scoring";
import type { LogementPersonaCode } from "./personas";

// Priority from brief §6. Persona C is always very_hot regardless of score.
export function computePriority(
  personaCode: LogementPersonaCode,
  score: number
): Priority {
  if (personaCode === "C") return "very_hot";
  if (score >= 71) return "very_hot";
  if (score >= 41) return "hot";
  return "warm";
}

export function buildPartnerRouting(priority: Priority): PartnerRouting {
  const founderCallRequired = priority === "very_hot";
  const routing: PartnerRouting = {
    primary_partner: "logement_partner_v1",
    partner_products: ["placement_locatif"],
    founder_call_required: founderCallRequired,
    partner_transmission_sla_hours: 48,
  };
  if (founderCallRequired) {
    routing.founder_call_sla_hours = 2;
  }
  return routing;
}

export function buildCrossSell(personaCode: LogementPersonaCode): CrossSell {
  if (personaCode === "C") {
    return {
      applicable_funnels: ["assurance", "retraite"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Futur résident, arrivée imminente — déclenchera LAMal obligatoire dans 3 mois et ouvre l'opportunité 3a immédiate",
    };
  }
  return {
    applicable_funnels: ["assurance", "retraite"],
    cross_sell_priority: "medium",
    cross_sell_reason:
      "Résident francophone en Suisse romande — levier d'optimisation LAMal et prévoyance 3a",
  };
}

// Future-resident arrival window mapping. Schema enum
// (lt3m | 3m_6m | gt6m | not_applicable) differs from Q3 urgence enum
// (lt1m | 1_3m | 3_6m | gt6m), so we collapse lt1m + 1_3m into lt3m.
export function mapArrivalWindow(
  personaCode: LogementPersonaCode,
  urgence: LogementAnswers["q3_urgence"]
): "lt3m" | "3m_6m" | "gt6m" | "not_applicable" {
  if (personaCode !== "C") return "not_applicable";
  if (urgence === "lt1m" || urgence === "1_3m") return "lt3m";
  if (urgence === "3_6m") return "3m_6m";
  return "gt6m";
}

