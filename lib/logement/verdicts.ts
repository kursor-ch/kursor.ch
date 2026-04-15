export type LogementTier =
  | "faisable"
  | "moderee"
  | "difficile"
  | "tres_difficile"
  | "quasi_impossible";

export interface LogementVerdict {
  key: LogementTier;
  label: string;
  color: string;
  bgLight: string;
  summary: string;
  weeksMin: number;
  weeksMax: number;
  weeksLabel: string;
}

const VERDICTS: LogementVerdict[] = [
  {
    key: "faisable",
    label: "Recherche faisable",
    color: "#15803D",
    bgLight: "#F0FDF4",
    summary:
      "Votre profil coche les cases attendues par les régies. Avec un dossier bien préparé, la recherche devrait aboutir rapidement.",
    weeksMin: 2,
    weeksMax: 3,
    weeksLabel: "2 à 3 semaines",
  },
  {
    key: "moderee",
    label: "Recherche modérée",
    color: "#D97706",
    bgLight: "#FFFBEB",
    summary:
      "Votre recherche est dans la norme du marché romand. Quelques points à soigner — préparation du dossier, suivi des visites — et tout devrait se faire.",
    weeksMin: 3,
    weeksMax: 6,
    weeksLabel: "3 à 6 semaines",
  },
  {
    key: "difficile",
    label: "Recherche difficile",
    color: "#EA580C",
    bgLight: "#FFF7ED",
    summary:
      "Votre combinaison de facteurs (canton, budget, préparation) tend le marché pour vous. Un accompagnement peut réduire significativement la durée.",
    weeksMin: 6,
    weeksMax: 10,
    weeksLabel: "6 à 10 semaines",
  },
  {
    key: "tres_difficile",
    label: "Recherche très difficile",
    color: "#DC2626",
    bgLight: "#FEF2F2",
    summary:
      "Plusieurs freins cumulés rendent votre recherche longue et exigeante. Sans méthode ou accompagnement, beaucoup de candidats abandonnent à ce stade.",
    weeksMin: 10,
    weeksMax: 16,
    weeksLabel: "10 à 16 semaines",
  },
  {
    key: "quasi_impossible",
    label: "Quasi-impossible sans accompagnement",
    color: "#991B1B",
    bgLight: "#FEF2F2",
    summary:
      "Votre dossier tel qu'il est aujourd'hui affronte un mur. L'accompagnement d'un professionnel local n'est plus une option — c'est la condition pour aboutir.",
    weeksMin: 16,
    weeksMax: 24,
    weeksLabel: "16 semaines ou plus",
  },
];

export function getLogementVerdict(score: number): LogementVerdict {
  if (score <= 20) return VERDICTS[0];
  if (score <= 40) return VERDICTS[1];
  if (score <= 60) return VERDICTS[2];
  if (score <= 80) return VERDICTS[3];
  return VERDICTS[4];
}

export { VERDICTS };
