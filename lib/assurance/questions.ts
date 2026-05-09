import type { QuestionScreen } from "@/lib/questions";

export interface AssuranceQuestionScreen extends QuestionScreen {
  // Either "resident" branch screens or "frontalier" branch screens.
  // Q1 is neutral (branch === "shared") — it feeds the branch router.
  branch: "shared" | "resident" | "frontalier";
}

// Q1 — filter partagé. All subsequent résident screens reference q1_statut
// via the branch router in AssuranceApp.
export const assuranceQ1: AssuranceQuestionScreen = {
  branch: "shared",
  title: "Quelle est votre situation actuelle en Suisse ?",
  subtitle:
    "Votre statut détermine le calcul : surcoût LAMal + trous de couverture pour les résidents, arbitrage LAMal / CMU pour les frontaliers.",
  questions: [
    {
      id: "q1_statut",
      label: "Choisissez l'option qui correspond le mieux",
      type: "card",
      options: [
        { label: "Salarié, en Suisse depuis moins de 12 mois", key: "salarie_recent" },
        { label: "Salarié, en Suisse depuis plus de 12 mois", key: "salarie_installe" },
        { label: "Indépendant ou freelance", key: "independant" },
        { label: "Dirigeant de Sàrl ou SA", key: "dirigeant" },
        { label: "Frontalier permis G", key: "frontalier" },
        {
          label:
            "Sans activité professionnelle (étudiant, retraité, sans emploi)",
          key: "sans_activite",
        },
      ],
    },
  ],
};

// Résident branch — 6 screens after Q1 (Q2+Q3 merged → Q4 → Q5 → Q6 → Q7 →
// Q8). Q9 (événements) was dropped on 2026-05-09; the laa_gap risk it fed
// is no longer surfaced automatically.
export const assuranceResidentScreens: AssuranceQuestionScreen[] = [
  // S2 — Canton + foyer (merged)
  {
    branch: "resident",
    title: "Où vivez-vous, et avec qui ?",
    subtitle:
      "Le canton conditionne la prime LAMal de référence. Le foyer impacte les complémentaires utiles et les doublons à éliminer.",
    questions: [
      {
        id: "q2_canton",
        label: "Canton de résidence",
        type: "pill",
        options: [
          // Order — high-volume cantons first, then alphabetical.
          { label: "Genève", key: "geneve" },
          { label: "Vaud", key: "vaud" },
          { label: "Zurich", key: "zurich" },
          { label: "Berne", key: "berne" },
          { label: "Bâle", key: "bale" },
          { label: "Fribourg", key: "fribourg" },
          { label: "Neuchâtel", key: "neuchatel" },
          { label: "Valais", key: "valais" },
          { label: "Jura", key: "jura" },
          { label: "Tessin", key: "tessin" },
          { label: "Autre canton", key: "autre" },
        ],
      },
      {
        id: "q3_famille",
        label: "Foyer",
        type: "card",
        options: [
          { label: "Seul(e)", key: "seul" },
          { label: "En couple, sans enfant", key: "couple_sans_enfant" },
          { label: "En couple, avec enfants à charge", key: "couple_avec_enfants" },
          { label: "Parent solo avec enfants à charge", key: "parent_solo" },
        ],
      },
    ],
  },

  // S3 — Caisse maladie inertie
  {
    branch: "resident",
    title:
      "Avec quelle caisse maladie êtes-vous actuellement assuré, et depuis combien de temps ?",
    subtitle:
      "L'inertie est le premier facteur de surcoût LAMal. Chaque année sans comparer coûte en moyenne 200 à 800 CHF.",
    questions: [
      {
        id: "q4_caisse",
        label: "Votre situation",
        type: "card",
        options: [
          {
            label: "Je viens d'arriver en Suisse, je n'ai pas encore choisi de caisse",
            key: "pas_encore",
          },
          {
            label: "Je suis assuré depuis moins d'un an et je n'ai pas comparé",
            key: "moins_1an",
          },
          {
            label:
              "Je suis assuré depuis plusieurs années avec la même caisse, je n'ai jamais changé",
            key: "plusieurs_annees_jamais_change",
          },
          {
            label: "J'ai changé de caisse au moins une fois mais pas récemment",
            key: "change_pas_recemment",
          },
          { label: "Je compare et change régulièrement", key: "compare_regulierement" },
        ],
      },
    ],
  },

  // S4 — Franchise LAMal. The "ne_sais_pas" option is rendered as a secondary
  // text-link in QuestionScreen, not as a chip.
  {
    branch: "resident",
    title: "Quel est le montant de votre franchise LAMal ?",
    subtitle:
      "La franchise est le 1er levier d'optimisation. Mal calibrée, elle vous coûte des centaines de francs en trop chaque année.",
    questions: [
      {
        id: "q5_franchise",
        label: "Votre franchise",
        type: "card",
        options: [
          { label: "300 CHF (la plus basse)", key: "300" },
          { label: "500 CHF", key: "500" },
          { label: "1 000 ou 1 500 CHF", key: "1000_1500" },
          { label: "2 000 ou 2 500 CHF (la plus haute)", key: "2000_2500" },
          { label: "Je ne sais pas exactement", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  // S5 — Modèle d'assurance. The "ne_sais_pas" option is rendered as a
  // secondary link. "alternatif" replaces the prior hmo+telmed split in the
  // user-facing UI; the schema enum still accepts hmo/telmed for backward
  // compatibility.
  {
    branch: "resident",
    title: "Quel modèle d'assurance avez-vous ?",
    subtitle:
      "Les modèles alternatifs (médecin de famille, HMO, Telmed) offrent 10 à 20% de réduction par rapport au modèle libre.",
    questions: [
      {
        id: "q6_modele",
        label: "Votre modèle",
        type: "card",
        options: [
          { label: "Libre (je consulte n'importe quel médecin)", key: "libre" },
          { label: "Médecin de famille", key: "medecin_famille" },
          { label: "HMO ou Telmed", key: "alternatif" },
          { label: "Je ne sais pas", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  // S6 — Perte de gain / IJM. QuestionScreen renders only the subset of
  // options that match q1_statut (3 cards: salarié variants vs indépendant
  // variants). The full 5-value enum is preserved for type compatibility.
  {
    branch: "resident",
    title: "En cas de maladie longue durée, qui paie votre salaire ?",
    subtitle:
      "Sans IJM adaptée, une incapacité prolongée peut coûter des dizaines de milliers de francs.",
    questions: [
      {
        id: "q7_ijm",
        label: "Votre couverture perte de gain",
        type: "card",
        options: [
          {
            label: "Mon employeur paie ≥80% pendant 730 jours",
            key: "ijm_employeur",
          },
          {
            label: "Mon employeur paie le minimum légal seulement",
            key: "echelle_berne",
          },
          { label: "Je ne sais pas", key: "ne_sais_pas" },
          {
            label: "Oui, j'ai une IJM personnelle",
            key: "independant_avec_ijm",
          },
          {
            label: "Non, aucune IJM personnelle",
            key: "independant_sans_ijm",
          },
        ],
      },
    ],
  },

  // S7 — Complémentaires LCA (multi-select). "aucune" and "ndr" are
  // mutually-exclusive sentinels enforced in QuestionScreen.
  {
    branch: "resident",
    title: "Quelles complémentaires (LCA) avez-vous aujourd'hui ?",
    subtitle:
      "Les complémentaires sont l'angle mort le plus coûteux : doublons fréquents, garanties inadaptées au profil, ou couverture trop maigre.",
    questions: [
      {
        id: "q8_complementaires",
        label: "Sélectionnez tout ce qui s'applique",
        type: "pill",
        multiSelect: true,
        options: [
          {
            label: "Hospitalisation (privée ou semi-privée)",
            key: "hospitalisation_privee",
          },
          {
            label: "Hospitalisation (division commune flexible)",
            key: "hospitalisation_commune",
          },
          {
            label: "Soins ambulatoires (médecines alternatives, prévention)",
            key: "ambulatoire",
          },
          { label: "Dentaire (soins, orthodontie)", key: "dentaire" },
          { label: "Maternité", key: "maternite" },
          { label: "Voyage / assistance", key: "voyage_assistance" },
          { label: "Aucune complémentaire", key: "aucune" },
          { label: "Je ne sais pas exactement", key: "ndr" },
        ],
      },
    ],
  },
];

// Frontalier branch — 6 screens after Q1 (QF1 → QF6). Comparator inputs
// (qf3_rfr + qf4_salaire + qf5_couverture + qf6_acces_soins) all preserved
// so computeFrontalierComparatif stays accurate. UI refreshed with pill
// rendering for the bracket questions (QF3, QF4).
export const assuranceFrontalierScreens: AssuranceQuestionScreen[] = [
  {
    branch: "frontalier",
    title: "Où en êtes-vous dans votre droit d'option santé ?",
    subtitle:
      "Le droit d'option entre LAMal et CMU est irréversible après 3 mois. C'est la décision la plus coûteuse du statut frontalier.",
    questions: [
      {
        id: "qf1_droit_option",
        label: "Votre phase actuelle",
        type: "card",
        options: [
          {
            label:
              "Je viens de prendre mon poste, j'ai moins de 3 mois pour décider",
            key: "dans_3mois",
          },
          {
            label:
              "Mon délai de 3 mois est dépassé, j'ai été affilié à la LAMal d'office",
            key: "depasse_affilie_office",
          },
          {
            label: "J'ai choisi la LAMal et je suis assuré en Suisse depuis plus de 3 mois",
            key: "choisi_lamal",
          },
          {
            label: "J'ai choisi la CMU et je suis assuré en France depuis plus de 3 mois",
            key: "choisi_cmu",
          },
          { label: "Je ne sais pas exactement où j'en suis", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  {
    branch: "frontalier",
    title: "Quelle est votre situation familiale ?",
    subtitle:
      "La composition familiale change radicalement le calcul : la CMU couvre gratuitement les ayants-droit, la LAMal fait payer chaque membre séparément.",
    questions: [
      {
        id: "qf2_famille",
        label: "Votre situation",
        type: "card",
        options: [
          { label: "Seul, sans personne à charge", key: "seul" },
          {
            label: "En couple, conjoint avec revenus en Suisse ou en France",
            key: "couple_revenus",
          },
          { label: "En couple, conjoint sans revenus", key: "couple_sans_revenus" },
          { label: "Avec enfants à charge", key: "avec_enfants" },
        ],
      },
    ],
  },

  {
    branch: "frontalier",
    title: "Quel était votre Revenu Fiscal de Référence en France il y a deux ans ?",
    subtitle:
      "La cotisation CMU est indexée sur votre RFR N-2. À salaire suisse élevé, cette cotisation va exploser dans 2 ans — c'est le piège N-2.",
    questions: [
      {
        id: "qf3_rfr",
        label: "Votre RFR N-2",
        type: "pill",
        options: [
          { label: "< 15 000 EUR", key: "moins_15k" },
          { label: "15 000 – 30 000", key: "15k_30k" },
          { label: "30 000 – 50 000", key: "30k_50k" },
          { label: "50 000 – 80 000", key: "50k_80k" },
          { label: "> 80 000 EUR", key: "plus_80k" },
          { label: "Je ne sais pas", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  {
    branch: "frontalier",
    title: "Quel est votre salaire annuel brut en Suisse ?",
    subtitle:
      "Votre salaire actuel deviendra votre RFR dans 2 ans. C'est avec ce chiffre qu'on projette votre cotisation CMU future.",
    questions: [
      {
        id: "qf4_salaire",
        label: "Votre salaire brut annuel",
        type: "pill",
        options: [
          { label: "< 60 000 CHF", key: "moins_60k" },
          { label: "60 000 – 100 000", key: "60k_100k" },
          { label: "100 000 – 150 000", key: "100k_150k" },
          { label: "> 150 000 CHF", key: "plus_150k" },
        ],
      },
    ],
  },

  {
    branch: "frontalier",
    title: "Avez-vous actuellement une couverture santé en place ?",
    subtitle:
      "Si vous n'avez rien souscrit et que votre délai de 3 mois est dépassé, vous êtes automatiquement affilié à la LAMal — c'est rarement le choix optimal.",
    questions: [
      {
        id: "qf5_couverture",
        label: "Votre couverture actuelle",
        type: "card",
        options: [
          { label: "Oui, LAMal frontalier en Suisse", key: "lamal_frontalier" },
          { label: "Oui, CMU en France (CNTFS)", key: "cmu" },
          {
            label: "Non, je n'ai encore rien souscrit (dans les 3 mois)",
            key: "rien_dans_3mois",
          },
          {
            label: "Non, et mon délai de 3 mois est dépassé",
            key: "rien_depasse",
          },
        ],
      },
    ],
  },

  {
    branch: "frontalier",
    title:
      "Où habitez-vous en France et où consultez-vous habituellement vos médecins ?",
    subtitle:
      "L'accès aux soins est un critère majeur : consulter côté suisse avec la CMU implique des remboursements partiels, consulter côté français avec la LAMal limite les choix.",
    questions: [
      {
        id: "qf6_acces_soins",
        label: "Votre zone et vos consultations",
        type: "card",
        options: [
          {
            label: "Zone frontalière proche, je consulte côté français",
            key: "frontaliere_consulte_france",
          },
          {
            label: "Zone frontalière proche, je préfère consulter côté suisse",
            key: "frontaliere_consulte_suisse",
          },
          {
            label: "Je vis loin de la frontière (plus de 30 km), je consulte côté français",
            key: "loin_frontiere",
          },
          {
            label: "Je suis en train de m'installer, je ne sais pas encore",
            key: "en_installation",
          },
        ],
      },
    ],
  },
];
