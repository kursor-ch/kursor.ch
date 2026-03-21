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
    key: "profil_confirme",
    label: "Profil confirmé",
    color: "#15803D",
    bgLight: "#F0FDF4",
    summary:
      "Votre profil fait partie des mieux positionnés que nous évaluons. Votre projet est viable et bien engagé. Il reste à optimiser les détails qui séparent une bonne expatriation d\u2019une expatriation vraiment rentable : fiscalité, couverture santé, négociation salariale. Nos partenaires spécialisés peuvent vous accompagner sur ces derniers ajustements.",
    reportContent:
      "Votre diagnostic révèle un profil bien positionné pour une expatriation en Suisse. Les fondamentaux sont réunis : compétences recherchées, projet structuré et préparation avancée. À ce stade, l'enjeu n'est plus de savoir si votre projet est viable, mais d'optimiser chaque aspect pour maximiser votre gain net et éviter les erreurs coûteuses que même les profils les mieux préparés commettent. Un accompagnement ciblé sur la fiscalité, l'assurance maladie et la prévoyance peut représenter plusieurs milliers de francs d'économie dès la première année.",
  },
  {
    key: "profil_prometteur",
    label: "Profil prometteur",
    color: "#D97706",
    bgLight: "#FFFBEB",
    summary:
      "Vous avez de bonnes bases, mais certains aspects méritent votre attention avant de vous lancer. Assurance, fiscalité, négociation salariale — les ignorer maintenant pourrait vous coûter plusieurs milliers de francs par an. La bonne nouvelle : avec un accompagnement ciblé, ces points se règlent rapidement.",
    reportContent:
      "Votre diagnostic montre un projet d'expatriation avec des bases solides, mais des zones d'ombre subsistent. Les lacunes identifiées sont courantes et corrigeables — la plupart des candidats à l'expatriation se trouvent dans cette situation. L'essentiel est d'adresser ces points avant votre départ plutôt qu'après, car les erreurs administratives et fiscales en Suisse sont coûteuses et souvent irréversibles la première année. Un accompagnement professionnel sur les points identifiés peut accélérer significativement votre transition.",
  },
  {
    key: "analyse_approfondie",
    label: "Analyse approfondie requise",
    color: "#EA580C",
    bgLight: "#FFF7ED",
    summary:
      "Votre projet a du potentiel, mais plusieurs points doivent être traités avant de vous engager sereinement. Ce n\u2019est pas une question de profil — c\u2019est une question de préparation. Chaque point de vigilance identifié a une solution concrète. Un accompagnement structuré peut transformer ces risques en atouts.",
    reportContent:
      "Votre diagnostic met en lumière plusieurs zones de risque qui méritent une attention sérieuse. Partir en Suisse sans adresser ces points expose à des surcoûts significatifs — double imposition, assurance maladie mal calibrée, prévoyance non optimisée. Ces erreurs représentent typiquement 10 000 à 30 000 CHF de perte sur les deux premières années. La bonne nouvelle : ces risques sont entièrement évitables avec la bonne préparation et le bon accompagnement. Structurer votre projet maintenant vous évitera des corrections coûteuses après votre arrivée.",
  },
  {
    key: "profil_a_structurer",
    label: "Profil à structurer",
    color: "#DC2626",
    bgLight: "#FEF2F2",
    summary:
      "Votre projet en est à ses débuts, et c\u2019est tout à fait normal. Plusieurs étapes restent à franchir avant de pouvoir avancer sereinement. La bonne nouvelle : des milliers de personnes dans votre situation ont réussi leur expatriation. Il suffit de commencer par les bonnes étapes, dans le bon ordre. Nos partenaires sont là pour ça.",
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
