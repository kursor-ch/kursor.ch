import type { LogementAnswers } from "./scoring";
import type { LogementPersonaCode } from "./personas";

export type RiskSeverity = "CRITIQUE" | "ÉLEVÉ" | "MOYEN";

export interface LogementRisk {
  id: string;
  severity: RiskSeverity;
  title: string;
  detail?: string;
}

export const SEVERITY_COLORS: Record<RiskSeverity, string> = {
  CRITIQUE: "#DC2626",
  "ÉLEVÉ": "#EA580C",
  MOYEN: "#D97706",
};

// Condition-based risk detection. Returns up to 3 prioritized risks
// applicable to the lead. Tuned to reflect the specific frictions raised
// by the brief's scoring model.
export function detectLogementRisks(
  answers: LogementAnswers,
  personaCode: LogementPersonaCode
): LogementRisk[] {
  const risks: LogementRisk[] = [];

  // Canton + budget mismatch: high-tension canton with mid/low budget
  if (
    (answers.q2_canton === "geneve" || answers.q2_canton === "vaud") &&
    (answers.q4_budget === "1600_2200" || answers.q4_budget === "2200_3000")
  ) {
    risks.push({
      id: "canton_budget_mismatch",
      severity: "CRITIQUE",
      title:
        "Budget tendu sur un marché très concurrentiel (Genève / Lausanne)",
      detail:
        "À ce niveau de loyer, vous êtes en compétition directe avec plusieurs dizaines de dossiers par annonce.",
    });
  }

  // Urgence + pas d'attestation
  if (
    (answers.q3_urgence === "lt1m" || answers.q3_urgence === "1_3m") &&
    (answers.q6_attestation_non_poursuite === "non_pas_encore" ||
      answers.q6_attestation_non_poursuite === "non_inconnu")
  ) {
    risks.push({
      id: "urgence_sans_attestation",
      severity: "CRITIQUE",
      title: "Urgence + attestation de non-poursuite manquante",
      detail:
        "Sans ce document (délivré en 48h par l'Office des poursuites), votre dossier sera écarté d'entrée.",
    });
  }

  // Galère depuis plus de 3 mois
  if (answers.q5_duree_recherche === "gt3m") {
    risks.push({
      id: "recherche_longue",
      severity: "ÉLEVÉ",
      title: "Recherche supérieure à 3 mois sans aboutir",
      detail:
        "Signal fort qu'un blocage structurel existe — méthode, dossier, ou positionnement de budget.",
    });
  }

  // Budget gate proximity (1600-2200)
  if (answers.q4_budget === "1600_2200") {
    risks.push({
      id: "budget_seuil",
      severity: "ÉLEVÉ",
      title: "Budget dans la tranche la plus tendue du marché",
      detail:
        "Les loyers 1 600 – 2 200 CHF concentrent la plus forte demande et la plus faible offre en Suisse romande.",
    });
  }

  // Persona C without Swiss documents
  if (personaCode === "C" && answers.q6_attestation_non_poursuite === "na_pas_en_suisse") {
    risks.push({
      id: "persona_c_no_docs",
      severity: "ÉLEVÉ",
      title: "Dossier hors-Suisse à monter avant l'arrivée",
      detail:
        "Depuis l'étranger, vos références locatives et fiscales sont peu valorisées — préparer un dossier complet en amont fait toute la différence.",
    });
  }

  // Attestation périmée
  if (answers.q6_attestation_non_poursuite === "oui_perimee") {
    risks.push({
      id: "attestation_perimee",
      severity: "MOYEN",
      title: "Attestation de non-poursuite périmée (> 3 mois)",
      detail:
        "À refaire immédiatement — la plupart des régies exigent un document de moins de 3 mois.",
    });
  }

  // Ignorance de l'attestation
  if (answers.q6_attestation_non_poursuite === "non_inconnu") {
    risks.push({
      id: "connaissance_procedures",
      severity: "MOYEN",
      title: "Lacune sur les procédures locatives suisses",
      detail:
        "Un accompagnement de 30 minutes peut combler l'essentiel des angles morts — dossier type, courrier de motivation, checklist.",
    });
  }

  return risks.slice(0, 3);
}
