import type { QuestionScreen } from "@/lib/questions";

// Eight linear screens (Q1 → Q8). No branching. Frontaliers (Q1=frontalier)
// stay in the same flow — routing and results messaging are flagged via
// answers, not via a separate branch.
export const retraiteScreens: QuestionScreen[] = [
  {
    title: "Quelle est votre situation actuelle en Suisse ?",
    subtitle:
      "Votre statut détermine le plafond 3a applicable (salarié : 7 258 CHF, indépendant : jusqu'à 36 288 CHF) et la logique de rachat rétroactif.",
    questions: [
      {
        id: "q1_statut",
        label: "Choisissez l'option qui correspond le mieux",
        type: "card",
        options: [
          { label: "Salarié, citoyen suisse", key: "salarie_suisse" },
          { label: "Salarié, permis C", key: "salarie_c" },
          { label: "Salarié, permis B", key: "salarie_b" },
          { label: "Frontalier, permis G", key: "frontalier" },
          { label: "Indépendant, citoyen suisse", key: "independant_suisse" },
          { label: "Indépendant, permis B ou C", key: "independant_bc" },
          {
            label:
              "Sans activité professionnelle (étudiant, sans emploi, retraité)",
            key: "sans_activite",
          },
        ],
      },
    ],
  },

  {
    title: "Depuis quand vivez-vous en Suisse ?",
    subtitle:
      "Le rachat rétroactif 3a permet de rattraper jusqu'à 10 années de cotisations manquées. Votre ancienneté détermine votre potentiel de rattrapage.",
    questions: [
      {
        id: "q2_anciennete",
        label: "Votre ancienneté en Suisse",
        type: "card",
        options: [
          { label: "Depuis ma naissance", key: "naissance" },
          { label: "Plus de 10 ans", key: "plus_10ans" },
          { label: "Entre 5 et 10 ans", key: "5_10ans" },
          { label: "Entre 2 et 5 ans", key: "2_5ans" },
          { label: "Moins de 2 ans", key: "moins_2ans" },
        ],
      },
    ],
  },

  {
    title: "Dans quel canton résidez-vous actuellement ?",
    subtitle:
      "Le taux marginal d'imposition varie de plus de 15 points entre cantons. Votre canton conditionne l'économie fiscale réelle par franc cotisé en 3a.",
    questions: [
      {
        id: "q3_canton",
        label: "Sélectionnez votre canton",
        type: "select",
        options: [
          { label: "Genève", key: "geneve" },
          { label: "Vaud", key: "vaud" },
          { label: "Valais", key: "valais" },
          { label: "Neuchâtel", key: "neuchatel" },
          { label: "Fribourg", key: "fribourg" },
          { label: "Jura", key: "jura" },
          { label: "Berne", key: "berne" },
          { label: "Bâle-Ville ou Bâle-Campagne", key: "bale" },
          { label: "Zurich", key: "zurich" },
          { label: "Tessin", key: "tessin" },
          { label: "Autre canton", key: "autre" },
        ],
      },
    ],
  },

  {
    title: "Quel est votre revenu annuel brut approximatif ?",
    subtitle:
      "Votre revenu détermine le plafond 3a pour les indépendants (20% max) et votre taux marginal — donc l'économie fiscale réelle sur chaque versement.",
    questions: [
      {
        id: "q4_revenu",
        label: "Votre revenu annuel brut",
        type: "card",
        options: [
          { label: "Moins de 50 000 CHF", key: "moins_50k" },
          { label: "50 000 à 80 000 CHF", key: "50k_80k" },
          { label: "80 000 à 120 000 CHF", key: "80k_120k" },
          { label: "120 000 à 180 000 CHF", key: "120k_180k" },
          { label: "180 000 à 250 000 CHF", key: "180k_250k" },
          { label: "Plus de 250 000 CHF", key: "plus_250k" },
          { label: "Préfère ne pas répondre", key: "prefere_pas" },
        ],
      },
    ],
  },

  {
    title: "Avez-vous actuellement un 3ème pilier (3a) ?",
    subtitle:
      "Le 3a est le levier fiscal le plus direct en Suisse : chaque franc versé est déduit de votre revenu imposable. Sans 3a, vous payez l'impôt plein.",
    questions: [
      {
        id: "q5_3a",
        label: "Votre situation 3a",
        type: "card",
        options: [
          {
            label: "Oui, et je verse le maximum chaque année",
            key: "oui_max",
          },
          {
            label: "Oui, mais je verse moins que le maximum",
            key: "oui_partiel",
          },
          {
            label: "Oui, mais je l'ai ouvert il y a moins de 2 ans",
            key: "oui_recent",
          },
          { label: "Non, mais je sais ce que c'est", key: "non_sait" },
          {
            label: "Non, et je ne sais pas vraiment ce que c'est",
            key: "non_ignore",
          },
        ],
      },
    ],
  },

  {
    title: "Avez-vous déjà lu votre certificat LPP ?",
    subtitle:
      "Le certificat LPP révèle votre potentiel de rachat volontaire sur le 2e pilier — souvent plusieurs dizaines de milliers de francs déductibles, ignorés faute de lecture.",
    questions: [
      {
        id: "q6_lpp",
        label: "Votre rapport au certificat LPP",
        type: "card",
        options: [
          {
            label:
              "Oui, je le consulte régulièrement et je connais mon potentiel de rachat",
            key: "oui_regulier",
          },
          {
            label:
              "Oui, mais je ne comprends pas vraiment ce qu'il contient",
            key: "oui_incompris",
          },
          { label: "Non, je ne l'ouvre jamais", key: "non_jamais" },
          { label: "Je ne savais pas que ça existait", key: "non_inconnu" },
          { label: "Je suis indépendant / pas concerné", key: "independant" },
        ],
      },
    ],
  },

  {
    title: "Quelle est votre plus grande inquiétude concernant votre retraite ?",
    subtitle:
      "Votre préoccupation principale guide le type d'optimisation qui aura le plus d'impact pour vous.",
    questions: [
      {
        id: "q7_inquietude",
        label: "Votre préoccupation principale",
        type: "card",
        options: [
          {
            label: "Ne pas avoir assez pour maintenir mon niveau de vie",
            key: "niveau_vie",
          },
          {
            label: "Payer trop d'impôts sans raison maintenant",
            key: "impots",
          },
          {
            label: "Ne pas comprendre mes droits en tant qu'expatrié",
            key: "droits_expat",
          },
          { label: "Ne pas savoir par où commencer", key: "par_ou_commencer" },
          {
            label:
              "Manquer une opportunité d'optimisation que je ne connais pas",
            key: "opportunite",
          },
          {
            label: "Mon départ futur de Suisse et mes droits acquis",
            key: "depart_suisse",
          },
        ],
      },
    ],
  },

  {
    title:
      "Dans combien d'années prévoyez-vous de prendre votre retraite ou de quitter la Suisse ?",
    subtitle:
      "Votre horizon détermine la stratégie : arbitrage fiscal court terme, capitalisation long terme, ou optimisation pré-départ.",
    questions: [
      {
        id: "q8_horizon",
        label: "Votre horizon",
        type: "card",
        options: [
          { label: "Moins de 5 ans", key: "moins_5ans" },
          { label: "5 à 15 ans", key: "5_15ans" },
          { label: "15 à 30 ans", key: "15_30ans" },
          { label: "Plus de 30 ans", key: "plus_30ans" },
          { label: "Je ne sais pas encore", key: "ne_sais_pas" },
        ],
      },
    ],
  },
];
