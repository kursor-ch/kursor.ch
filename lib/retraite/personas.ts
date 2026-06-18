import type {
  RetraiteAnswers,
  RetraitePersona,
  RetraitePersonaCode,
} from "./types";

const LABELS: Record<RetraitePersonaCode, { label: string; tagline: string }> = {
  A: {
    label: "Ignorant total",
    tagline: "Aucun 3a ouvert · premiers pas à faire",
  },
  B: {
    label: "Prudent informé",
    tagline: "Situation à clarifier · marge d'optimisation nette",
  },
  C: {
    label: "Optimisateur",
    tagline: "3a en place · levier rachat et LPP sous-exploité",
  },
  D: {
    label: "Indépendant abandonné",
    tagline: "Plafond majoré disponible · levier fiscal majeur",
  },
};

function makePersona(code: RetraitePersonaCode): RetraitePersona {
  return { code, ...LABELS[code] };
}

// Règles field map v2. Ordre verrouillé : D > A > C > B.
export function identifyPersona(answers: RetraiteAnswers): RetraitePersona {
  if (
    answers.q1_statut === "independant_suisse" ||
    answers.q1_statut === "independant_bc"
  ) {
    return makePersona("D");
  }

  if (answers.q5_3a === "non_ignore") {
    return makePersona("A");
  }

  if (
    (answers.q5_3a === "max" || answers.q5_3a === "partiel") &&
    (answers.q4_revenu === "120_180k" ||
      answers.q4_revenu === "180_250k" ||
      answers.q4_revenu === "plus_250k")
  ) {
    return makePersona("C");
  }

  return makePersona("B");
}
