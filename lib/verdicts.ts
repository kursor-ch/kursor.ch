export interface Verdict {
  key: string;
  label: string;
  color: string;
  bgLight: string;
  summary: string;
  reportContent: string;
}

const verdicts: Verdict[] = [
  {
    key: "pret_a_partir",
    label: "Prêt à partir",
    color: "#15803D",
    bgLight: "#F0FDF4",
    summary:
      "Votre profil est solide et votre projet d'expatriation en Suisse est bien engagé. Quelques optimisations ciblées peuvent encore maximiser votre transition.",
    reportContent:
      "Votre diagnostic révèle un profil bien positionné pour une expatriation en Suisse. Les fondamentaux sont réunis : compétences recherchées, projet structuré et préparation avancée. À ce stade, l'enjeu n'est plus de savoir si votre projet est viable, mais d'optimiser chaque aspect pour maximiser votre gain net et éviter les erreurs coûteuses que même les profils les mieux préparés commettent. Un accompagnement ciblé sur la fiscalité, l'assurance maladie et la prévoyance peut représenter plusieurs milliers de francs d'économie dès la première année.",
  },
  {
    key: "en_bonne_voie",
    label: "En bonne voie",
    color: "#D97706",
    bgLight: "#FFFBEB",
    summary:
      "Vous avez une base solide, mais certains aspects de votre projet nécessitent une attention particulière avant de franchir le pas.",
    reportContent:
      "Votre diagnostic montre un projet d'expatriation avec des bases solides, mais des zones d'ombre subsistent. Les lacunes identifiées sont courantes et corrigeables — la plupart des candidats à l'expatriation se trouvent dans cette situation. L'essentiel est d'adresser ces points avant votre départ plutôt qu'après, car les erreurs administratives et fiscales en Suisse sont coûteuses et souvent irréversibles la première année. Un accompagnement professionnel sur les points identifiés peut accélérer significativement votre transition.",
  },
  {
    key: "points_vigilance",
    label: "Points de vigilance",
    color: "#EA580C",
    bgLight: "#FFF7ED",
    summary:
      "Plusieurs aspects de votre projet nécessitent un travail de préparation important. Un accompagnement professionnel est fortement recommandé.",
    reportContent:
      "Votre diagnostic met en lumière plusieurs zones de risque qui méritent une attention sérieuse. Partir en Suisse sans adresser ces points expose à des surcoûts significatifs — double imposition, assurance maladie mal calibrée, prévoyance non optimisée. Ces erreurs représentent typiquement 10 000 à 30 000 CHF de perte sur les deux premières années. La bonne nouvelle : ces risques sont entièrement évitables avec la bonne préparation et le bon accompagnement. Structurer votre projet maintenant vous évitera des corrections coûteuses après votre arrivée.",
  },
  {
    key: "preparation_necessaire",
    label: "Préparation nécessaire",
    color: "#DC2626",
    bgLight: "#FEF2F2",
    summary:
      "Votre projet en est à ses débuts. Des fondations importantes doivent être posées avant d'envisager une expatriation sereine.",
    reportContent:
      "Votre diagnostic indique que votre projet d'expatriation nécessite un travail de fond avant de passer à l'action. Ce n'est pas un jugement négatif — de nombreux expatriés réussis sont passés par cette étape. L'important est de construire des fondations solides plutôt que de se précipiter. Les risques financiers d'une expatriation mal préparée en Suisse sont considérables : jusqu'à 50 000 CHF de surcoûts cumulés sur les premières années. Commencer par un accompagnement professionnel gratuit peut transformer un projet fragile en projet solide.",
  },
];

export function getVerdict(score: number): Verdict {
  if (score >= 75) return verdicts[0];
  if (score >= 50) return verdicts[1];
  if (score >= 25) return verdicts[2];
  return verdicts[3];
}

export { verdicts };
