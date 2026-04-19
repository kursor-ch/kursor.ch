import type {
  AssuranceAnswersFrontalier,
  AssuranceAnswersResident,
  AssurancePersona,
  AssurancePersonaCode,
} from "./types";

const LABELS: Record<AssurancePersonaCode, string> = {
  A: "Expatrié perdu",
  B: "Suisse qui surpaie",
  C: "Indépendant mal protégé",
  D: "Frontalier en décision",
  E: "Frontalier installé",
};

export function identifyPersonaResident(
  answers: AssuranceAnswersResident
): AssurancePersona {
  if (
    answers.q1_statut === "independant" ||
    answers.q1_statut === "dirigeant"
  ) {
    return { code: "C", label: LABELS.C };
  }
  if (answers.q1_statut === "salarie_recent") {
    return { code: "A", label: LABELS.A };
  }
  return { code: "B", label: LABELS.B };
}

export function identifyPersonaFrontalier(
  answers: AssuranceAnswersFrontalier
): AssurancePersona {
  if (
    answers.qf1_droit_option === "dans_3mois" ||
    answers.qf1_droit_option === "depasse_affilie_office"
  ) {
    return { code: "D", label: LABELS.D };
  }
  return { code: "E", label: LABELS.E };
}
