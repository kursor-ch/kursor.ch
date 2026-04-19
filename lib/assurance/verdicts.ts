import type { AssuranceTier, SurcoutResult } from "./types";

export interface AssuranceVerdict {
  tier: AssuranceTier;
  label: string;
  color: string;
  summary: string;
}

const VERDICTS: Record<AssuranceTier, Omit<AssuranceVerdict, "tier">> = {
  optimal: {
    label: "Couverture optimale",
    color: "#15803D",
    summary:
      "Votre setup d'assurances est globalement optimisé. Quelques points de vigilance à garder sous surveillance.",
  },
  ajustements_mineurs: {
    label: "Ajustements mineurs",
    color: "#D97706",
    summary:
      "Votre couverture est correcte mais laisse de l'argent sur la table. Quelques ajustements ciblés peuvent libérer un budget significatif.",
  },
  surcouts_significatifs: {
    label: "Surcoûts significatifs",
    color: "#EA580C",
    summary:
      "Votre configuration actuelle vous coûte nettement plus que nécessaire et laisse plusieurs risques non couverts. Un audit approfondi est justifié.",
  },
  couverture_critique: {
    label: "Couverture critique",
    color: "#DC2626",
    summary:
      "Plusieurs trous de couverture critiques cumulés avec un surcoût élevé. Sans réorganisation, vous exposez votre foyer à des risques financiers lourds.",
  },
};

export function tierFromSurcout(
  surcout: SurcoutResult,
  criticalTrousCount: number
): AssuranceTier {
  if (criticalTrousCount >= 2) return "couverture_critique";
  if (criticalTrousCount >= 1 && surcout.total_annuel >= 1500)
    return "couverture_critique";
  if (surcout.total_annuel >= 2000 || criticalTrousCount >= 1)
    return "surcouts_significatifs";
  if (surcout.total_annuel >= 800) return "ajustements_mineurs";
  return "optimal";
}

export function getAssuranceVerdict(tier: AssuranceTier): AssuranceVerdict {
  return { tier, ...VERDICTS[tier] };
}
