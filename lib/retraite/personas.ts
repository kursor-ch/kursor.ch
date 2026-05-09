import type { RetraiteAnswers, RetraitePersona, RetraitePersonaCode } from "./types";

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

export function identifyPersona(
  answers: RetraiteAnswers
): RetraitePersona {
  const isIndependant =
    answers.q1_statut === "independant_suisse" ||
    answers.q1_statut === "independant_bc";

  if (isIndependant) return makePersona("D");

  if (answers.q5_3a === "oui_max") return makePersona("C");

  if (answers.q5_3a === "oui_partiel" || answers.q5_3a === "oui_recent") {
    // Suboptimal 3a — B or C depending on income. High earners who underuse
    // the ceiling have the most to gain from an audit — route as C.
    const highIncome =
      answers.q4_revenu === "120k_180k" ||
      answers.q4_revenu === "180k_250k" ||
      answers.q4_revenu === "plus_250k";
    if (highIncome) return makePersona("C");
    return makePersona("B");
  }

  // q5_3a === "non" (collapsed from prior non_sait + non_ignore on 2026-05-09).
  // Default to Persona A — the more conservative cross-sell when we can't tell
  // ignorant-but-aware from outright unaware.
  return makePersona("A");
}
