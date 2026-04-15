import type { LogementAnswers } from "./scoring";

export type LogementPersonaCode = "A" | "B" | "C";

export interface LogementPersona {
  code: LogementPersonaCode;
  label: string;
  modifier: number;
}

const PERSONAS: Record<LogementPersonaCode, LogementPersona> = {
  A: {
    code: "A",
    label: "Expat fraîchement arrivé",
    modifier: 5,
  },
  B: {
    code: "B",
    label: "Résident qui doit déménager",
    modifier: 0,
  },
  C: {
    code: "C",
    label: "Futur résident avec offre confirmée",
    modifier: 10,
  },
};

// Resolve persona from the statut answer. Returns null for soft-exited
// statuses (frontalier, exploration) since they don't reach scoring.
export function resolvePersona(
  answers: LogementAnswers
): LogementPersona | null {
  switch (answers.q1_statut) {
    case "resident_b_recent":
      return PERSONAS.A;
    case "resident_installed":
      return PERSONAS.B;
    case "futur_resident_offre_confirmee":
      return PERSONAS.C;
    default:
      return null;
  }
}
