import { Answers, ScoreBreakdown } from "./scoring";

interface InsightFragment {
  condition: (a: Answers, s: ScoreBreakdown) => boolean;
  text: string;
  priority: number; // lower = shown first
}

const fragments: InsightFragment[] = [
  // === PRIORITY 1 — Warning signals (show first if present) ===
  {
    condition: (a) => a.connaissance === "aucune",
    text: "Plusieurs décisions quasi irréversibles vous attendent dans les 3 premiers mois — LAMal, fiscalité, prévoyance. Chacune peut représenter des milliers de francs par an.",
    priority: 1,
  },
  {
    condition: (a) => a.horizon === "lt3m" && a.demarches === "recherches",
    text: "Votre horizon est court et les démarches sont encore au stade de recherche — un accompagnement ciblé fera la différence.",
    priority: 1,
  },
  {
    condition: (a) => a.statut === "freelance" && a.budget === "lt3k",
    text: "Un projet indépendant en Suisse nécessite un montage juridique adapté et un capital initial conséquent — votre rapport détaille les points critiques.",
    priority: 1,
  },
  {
    condition: (a) => a.budget === "lt3k" && a.statut !== "freelance",
    text: "Le budget d'installation moyen en Suisse dépasse 15 000 CHF. Votre rapport détaille comment anticiper ce point.",
    priority: 1,
  },

  // === PRIORITY 2 — Contextual observations ===
  {
    condition: (a) =>
      ["tech", "pharma_sante", "ingenierie", "horlogerie"].includes(a.secteur) &&
      ["geneve", "vaud"].includes(a.canton),
    text: "Votre secteur est en forte demande dans la région que vous visez — les employeurs peinent à recruter des profils comme le vôtre.",
    priority: 2,
  },
  {
    condition: (a) =>
      ["tech", "pharma_sante", "ingenierie", "horlogerie"].includes(a.secteur) &&
      !["geneve", "vaud"].includes(a.canton),
    text: "Votre secteur fait partie des plus recherchés en Suisse — les opportunités existent pour les profils qualifiés.",
    priority: 2,
  },
  {
    condition: (a) =>
      ["zurich", "berne", "bale"].includes(a.canton) &&
      a.connaissance !== "tres_bien",
    text: "Votre canton cible est germanophone — votre rapport aborde les implications pour votre intégration professionnelle.",
    priority: 2,
  },
  {
    condition: (a) => ["2500_3k", "3k_4k"].includes(a.revenu),
    text: "Votre tranche de revenu correspond au plus fort multiplicateur salarial France → Suisse.",
    priority: 2,
  },
  {
    condition: (a) =>
      a.horizon === "lt3m" && ["entretiens", "offre"].includes(a.demarches),
    text: "Votre horizon court combiné à des démarches avancées indique un projet mûr — le timing est bon.",
    priority: 2,
  },
  {
    condition: (a) => a.statut === "freelance" && a.budget !== "lt3k",
    text: "En tant qu'indépendant, le choix de votre structure juridique aura des conséquences fiscales majeures — votre rapport détaille les options.",
    priority: 2,
  },

  // === PRIORITY 3 — Positive reinforcement ===
  {
    condition: (a) => a.statut === "cdi",
    text: "Votre CDI est un signal fort pour les recruteurs suisses et facilite l'obtention du permis de travail.",
    priority: 3,
  },
  {
    condition: (a) => ["entretiens", "offre"].includes(a.demarches),
    text: "Vous avez déjà franchi des étapes concrètes — c'est un indicateur fort de la maturité de votre projet.",
    priority: 3,
  },
  {
    condition: (a) => a.connaissance === "tres_bien",
    text: "Votre connaissance du système suisse réduit significativement les risques de mauvaises surprises.",
    priority: 3,
  },
  {
    condition: (a) => a.budget === "gt5k",
    text: "Votre budget vous donne une marge de manœuvre saine pour les premiers mois.",
    priority: 3,
  },
  {
    condition: (a) =>
      ["geneve", "vaud"].includes(a.canton) &&
      !["tech", "pharma_sante", "ingenierie", "horlogerie"].includes(a.secteur),
    text: "Genève et Vaud concentrent le plus d'offres pour les profils francophones.",
    priority: 3,
  },
];

export function generateInsight(answers: Answers, scores: ScoreBreakdown): string {
  const matched = fragments
    .filter((f) => f.condition(answers, scores))
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3);

  if (matched.length === 0) {
    return "Votre diagnostic révèle un profil avec des atouts et des points d\u2019attention. Consultez votre rapport détaillé par email pour une analyse complète.";
  }

  return matched.map((f) => f.text).join(" ");
}
