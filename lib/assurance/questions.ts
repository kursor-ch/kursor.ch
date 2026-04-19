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

// Résident branch — 8 screens after Q1 (Q2 → Q9).
export const assuranceResidentScreens: AssuranceQuestionScreen[] = [
  {
    branch: "resident",
    title: "Dans quel canton résidez-vous actuellement ?",
    subtitle:
      "Les primes LAMal varient de plus de 100 CHF par mois entre cantons. Votre canton conditionne la base du calcul.",
    questions: [
      {
        id: "q2_canton",
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
          { label: "Zurich", key: "zurich" },
          { label: "Bâle-Ville ou Bâle-Campagne", key: "bale" },
          { label: "Tessin", key: "tessin" },
          { label: "Autre canton", key: "autre" },
        ],
      },
    ],
  },

  {
    branch: "resident",
    title: "Quelle est votre situation familiale ?",
    subtitle:
      "Couple et enfants changent les doublons de couverture (RC ménage, assurances complémentaires) et les modèles d'optimisation.",
    questions: [
      {
        id: "q3_famille",
        label: "Votre situation",
        type: "card",
        options: [
          { label: "Seul", key: "seul" },
          { label: "En couple, sans enfant", key: "couple_sans_enfant" },
          { label: "En couple, avec enfants à charge", key: "couple_avec_enfants" },
          { label: "Parent solo avec enfants à charge", key: "parent_solo" },
        ],
      },
    ],
  },

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

  {
    branch: "resident",
    title: "Quel est le montant de votre franchise LAMal annuelle ?",
    subtitle:
      "La franchise est le premier levier d'optimisation — si elle est mal calibrée, vous payez trop, souvent des centaines de francs par an.",
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

  {
    branch: "resident",
    title: "Quel modèle d'assurance avez-vous choisi ?",
    subtitle:
      "Les modèles alternatifs (médecin de famille, HMO, Telmed) offrent 10 à 20% de réduction sur la prime. Le modèle libre est le plus cher.",
    questions: [
      {
        id: "q6_modele",
        label: "Votre modèle",
        type: "card",
        options: [
          {
            label: "Modèle libre (je peux consulter n'importe quel médecin directement)",
            key: "libre",
          },
          {
            label: "Modèle médecin de famille (je passe par mon généraliste)",
            key: "medecin_famille",
          },
          { label: "Modèle HMO (je vais dans un centre médical défini)", key: "hmo" },
          { label: "Modèle Telmed (j'appelle avant chaque consultation)", key: "telmed" },
          { label: "Je ne sais pas", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  {
    branch: "resident",
    title: "En cas de maladie longue durée, qui paie votre salaire ?",
    subtitle:
      "Sans IJM, une incapacité de travail de plus de quelques semaines peut coûter des dizaines de milliers de francs — c'est le trou de couverture le plus critique.",
    questions: [
      {
        id: "q7_ijm",
        label: "Votre couverture perte de gain",
        type: "card",
        options: [
          {
            label:
              "Mon employeur a souscrit une assurance IJM, je suis couvert à 80% pendant 730 jours",
            key: "ijm_employeur",
          },
          {
            label:
              "Mon employeur ne paie que selon l'Échelle de Berne (quelques semaines)",
            key: "echelle_berne",
          },
          { label: "Je ne sais pas, je n'ai jamais vérifié", key: "ne_sais_pas" },
          {
            label: "Je suis indépendant et je n'ai pas souscrit d'IJM personnelle",
            key: "independant_sans_ijm",
          },
          {
            label: "Je suis indépendant et j'ai une IJM personnelle",
            key: "independant_avec_ijm",
          },
        ],
      },
    ],
  },

  {
    branch: "resident",
    title: "Avez-vous des assurances complémentaires (LCA) ? Si oui, lesquelles ?",
    subtitle:
      "Les complémentaires sont souvent mal calibrées — trop de doublons, trop de protections inutiles, ou à l'inverse une famille non couverte pour les soins dentaires et ambulatoires.",
    questions: [
      {
        id: "q8_complementaires",
        label: "Vos complémentaires",
        type: "card",
        options: [
          { label: "Aucune complémentaire", key: "aucune" },
          { label: "Hospitalisation (mi-privée ou privée)", key: "hospitalisation" },
          {
            label: "Ambulatoire (médecines alternatives, lunettes, soins non LAMal)",
            key: "ambulatoire",
          },
          { label: "Dentaire", key: "dentaire" },
          { label: "Plusieurs complémentaires combinées", key: "plusieurs" },
          { label: "Je ne sais plus exactement", key: "ne_sais_pas" },
        ],
      },
    ],
  },

  {
    branch: "resident",
    title:
      "Quelle est votre situation personnelle ou professionnelle dans les prochains mois ?",
    subtitle:
      "Certains événements (changement d'emploi, déménagement, naissance, indépendance) ouvrent une fenêtre de recalibrage — voire créent temporairement des trous de couverture.",
    questions: [
      {
        id: "q9_evenements",
        label: "Votre situation à venir",
        type: "card",
        options: [
          { label: "Stable, pas de changement prévu", key: "stable" },
          {
            label: "Je vais changer d'emploi ou je viens de quitter mon emploi",
            key: "changement_emploi",
          },
          {
            label: "Je vais déménager dans un autre canton",
            key: "demenagement_canton",
          },
          {
            label: "Je vais avoir un enfant ou je viens d'en avoir un",
            key: "enfant",
          },
          {
            label: "Je vais passer en indépendant ou créer une société",
            key: "independant",
          },
          { label: "Je vais quitter la Suisse", key: "quitter_suisse" },
        ],
      },
    ],
  },
];

// Frontalier branch — 6 screens after Q1 (QF1 → QF6).
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
        type: "card",
        options: [
          { label: "Moins de 15 000 EUR", key: "moins_15k" },
          { label: "15 000 à 30 000 EUR", key: "15k_30k" },
          { label: "30 000 à 50 000 EUR", key: "30k_50k" },
          { label: "50 000 à 80 000 EUR", key: "50k_80k" },
          { label: "Plus de 80 000 EUR", key: "plus_80k" },
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
        type: "card",
        options: [
          { label: "Moins de 60 000 CHF", key: "moins_60k" },
          { label: "60 000 à 100 000 CHF", key: "60k_100k" },
          { label: "100 000 à 150 000 CHF", key: "100k_150k" },
          { label: "Plus de 150 000 CHF", key: "plus_150k" },
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
