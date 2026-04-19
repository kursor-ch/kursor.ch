import type {
  AssuranceAnswersFrontalier,
  AssuranceAnswersResident,
  TrouDeCouverture,
  TrouSeverity,
} from "./types";

export const SEVERITY_COLORS: Record<TrouSeverity, string> = {
  CRITIQUE: "#DC2626",
  "ÉLEVÉ": "#EA580C",
  MODÉRÉ: "#D97706",
};

export function detectResidentTrous(
  answers: AssuranceAnswersResident
): TrouDeCouverture[] {
  const trous: TrouDeCouverture[] = [];

  const isIndep =
    answers.q1_statut === "independant" || answers.q1_statut === "dirigeant";

  // Indépendant sans IJM supersedes "IJM absente" (more severe framing).
  if (isIndep && answers.q7_ijm === "independant_sans_ijm") {
    trous.push({
      id: "indep_sans_apg",
      label: "Indépendant sans couverture perte de gain",
      severity: "CRITIQUE",
      risque_chf: 60_000,
      description:
        "En cas d'incapacité, aucun revenu de remplacement pendant plusieurs mois. Zéro filet de sécurité — c'est le risque financier le plus critique pour un indépendant.",
    });
  } else if (
    answers.q7_ijm === "echelle_berne" ||
    answers.q7_ijm === "ne_sais_pas"
  ) {
    trous.push({
      id: "ijm_absente",
      label: "Perte de gain non couverte",
      severity: "CRITIQUE",
      risque_chf: 45_000,
      description:
        "L'Échelle de Berne ne couvre que quelques semaines. Au-delà, 6 mois d'arrêt maladie représentent 30 000 à 60 000 CHF de salaire perdu.",
    });
  }

  if (answers.q9_evenements === "changement_emploi") {
    trous.push({
      id: "laa_gap",
      label: "Gap LAA au changement d'emploi",
      severity: "ÉLEVÉ",
      risque_chf: 20_000,
      description:
        "La règle des 31 jours de la LAA crée une fenêtre où aucune assurance accident professionnelle ne vous couvre — frais médicaux à votre charge, souvent >20 000 CHF.",
    });
  }

  if (
    answers.q8_complementaires === "aucune" &&
    (answers.q3_famille === "couple_avec_enfants" ||
      answers.q3_famille === "parent_solo")
  ) {
    trous.push({
      id: "complementaires_famille_absente",
      label: "Famille sans complémentaire dentaire / ambulatoire",
      severity: "MODÉRÉ",
      risque_chf: 3_000,
      description:
        "Enfants et soins dentaires ne sont pas couverts par la LAMal. Un orthodontie ou une hospitalisation d'enfant peut coûter plusieurs milliers de francs.",
    });
  }

  // RC privée implicit — we don't have a direct question so we surface this
  // as a MODÉRÉ reminder whenever the household has liability exposure
  // (family or couple setup). Kept intentionally generic.
  if (
    answers.q3_famille === "couple_avec_enfants" ||
    answers.q3_famille === "parent_solo"
  ) {
    trous.push({
      id: "rc_privee",
      label: "RC privée à vérifier",
      severity: "MODÉRÉ",
      risque_chf: 50_000,
      description:
        "Avec des enfants, une RC privée adéquate (min. 5 MCHF de couverture) est indispensable. L'absence ou un plafond trop bas peut exposer à 50 000+ CHF de responsabilité.",
    });
  }

  return trous;
}

export function detectFrontalierTrous(
  answers: AssuranceAnswersFrontalier
): TrouDeCouverture[] {
  const trous: TrouDeCouverture[] = [];

  if (answers.qf5_couverture === "rien_depasse") {
    trous.push({
      id: "delai_depasse",
      label: "Délai de 3 mois dépassé — affiliation LAMal d'office",
      severity: "CRITIQUE",
      risque_chf: 15_000,
      description:
        "Vous êtes automatiquement rattaché à la LAMal sans avoir pu arbitrer. Récupérer l'option CMU demande un recours long et incertain.",
    });
  }

  if (
    answers.qf1_droit_option === "choisi_cmu" &&
    answers.qf6_acces_soins === "frontaliere_consulte_suisse"
  ) {
    trous.push({
      id: "cmu_mal_adapte",
      label: "CMU + consultations côté suisse = remboursements partiels",
      severity: "ÉLEVÉ",
      risque_chf: 4_000,
      description:
        "Si vous consultez majoritairement en Suisse, la CMU ne couvre qu'une fraction de vos soins. Une LCA suisse ou un repositionnement LAMal corrige ce décalage.",
    });
  }

  if (answers.qf2_famille === "avec_enfants") {
    trous.push({
      id: "enfants_ayants_droit",
      label: "Enfants ayants-droit — couverture CMU souvent avantageuse",
      severity: "MODÉRÉ",
      risque_chf: 5_000,
      description:
        "Les enfants sont gratuits en CMU mais payants en LAMal. Sans arbitrage, une famille LAMal surpaie facilement 3 000 à 8 000 CHF par an pour les enfants.",
    });
  }

  // 2e pilier cross-tunnel retirement flag — frontaliers rarely optimize
  // this. Surfaced here as a MODÉRÉ reminder to trigger cross-sell to
  // Prévoyance.
  trous.push({
    id: "pilier2_crosstunnel",
    label: "2e pilier suisse — retrait ou transfert à arbitrer",
    severity: "MODÉRÉ",
    risque_chf: 10_000,
    description:
      "En fin de carrière ou en cas de retour en France, les règles de retrait ou de transfert du 2e pilier varient selon les cantons et votre statut fiscal français.",
  });

  return trous;
}
