export type QuestionType = "card" | "pill" | "select";

export interface QuestionOption {
  label: string;
  key: string;
}

export interface Question {
  id: string;
  label: string;
  hint?: string;
  type: QuestionType;
  options: QuestionOption[];
}

export interface QuestionScreen {
  title: string;
  subtitle?: string;
  questions: Question[];
}

export const questionScreens: QuestionScreen[] = [
  {
    title: "Commençons par votre situation actuelle",
    subtitle: "Le marché suisse valorise certains profils plus que d\u2019autres. Ces trois questions nous permettent d\u2019évaluer votre positionnement.",
    questions: [
      {
        id: "statut",
        label: "Quel est votre statut professionnel ?",
        type: "card",
        options: [
          { label: "Salarié(e) en CDI", key: "cdi" },
          { label: "Salarié(e) en CDD / Intérim", key: "cdd" },
          { label: "En recherche d'emploi", key: "recherche" },
          { label: "Autre (Freelances, Indépendants,...)", key: "freelance" },
        ],
      },
      {
        id: "secteur",
        label: "Dans quel secteur travaillez-vous ?",
        hint: "Certains secteurs sont en forte pénurie en Suisse — votre profil pourrait être très demandé.",
        type: "select",
        options: [
          { label: "Tech / IT / Digital", key: "tech" },
          { label: "Finance / Banque / Assurance", key: "finance" },
          { label: "Pharma / Biotech / Santé", key: "pharma_sante" },
          { label: "Ingénierie / Industrie", key: "ingenierie" },
          { label: "Horlogerie / Luxe", key: "horlogerie" },
          { label: "Conseil / Audit / Juridique", key: "conseil" },
          { label: "BTP / Construction", key: "btp" },
          { label: "Commerce / Vente", key: "commerce" },
          { label: "Hôtellerie / Restauration", key: "hotellerie" },
          { label: "Éducation / Recherche", key: "education" },
          { label: "Autre", key: "autre" },
        ],
      },
      {
        id: "revenu",
        label: "Votre revenu mensuel brut actuel",
        hint: "On utilise cette info pour estimer votre gain potentiel en Suisse.",
        type: "card",
        options: [
          { label: "Moins de 2 000€", key: "lt2k" },
          { label: "2 000€ - 2 500€", key: "2k_2500" },
          { label: "2 500€ - 3 000€", key: "2500_3k" },
          { label: "3 000€ - 4 000€", key: "3k_4k" },
          { label: "Plus de 4 000€", key: "gt4k" },
        ],
      },
    ],
  },
  {
    title: "Parlons de votre projet",
    subtitle: "Le canton que vous visez et votre horizon de départ changent tout : fiscalité, opportunités, coût de la vie. Précisons votre projet.",
    questions: [
      {
        id: "canton",
        label: "Quelle région ou canton visez-vous ?",
        hint: "Le canton change tout : fiscalité, primes d'assurance, coût de la vie, marché de l'emploi.",
        type: "select",
        options: [
          { label: "Genève", key: "geneve" },
          { label: "Vaud (Lausanne)", key: "vaud" },
          { label: "Neuchâtel", key: "neuchatel" },
          { label: "Jura", key: "jura" },
          { label: "Berne", key: "berne" },
          { label: "Fribourg", key: "fribourg" },
          { label: "Valais", key: "valais" },
          { label: "Zurich", key: "zurich" },
          { label: "Bâle", key: "bale" },
          { label: "Tessin", key: "tessin" },
          { label: "Pas encore décidé", key: "indecis" },
        ],
      },
      {
        id: "horizon",
        label: "Dans combien de temps aimeriez-vous démarrer votre projet ?",
        type: "card",
        options: [
          { label: "Moins de 3 mois", key: "lt3m" },
          { label: "3 à 6 mois", key: "3_6m" },
          { label: "Je me renseigne", key: "exploration" },
        ],
      },
    ],
  },
  {
    title: "Évaluons votre préparation",
    subtitle: "C\u2019est souvent là que se cachent les erreurs les plus coûteuses. Assurance maladie, budget, démarches — faisons le point.",
    questions: [
      {
        id: "budget",
        label: "Quel montant avez-vous budgétisé pour ce projet ?",
        type: "card",
        options: [
          { label: "Moins de 3 000€", key: "lt3k" },
          { label: "Entre 3 000€ et 4 000€", key: "3k_4k" },
          { label: "Entre 4 000€ et 5 000€", key: "4k_5k" },
          { label: "Plus de 5 000€", key: "gt5k" },
        ],
      },
      {
        id: "demarches",
        label: "Avez-vous déjà commencé des démarches ?",
        type: "card",
        options: [
          { label: "J'ai fait des recherches en ligne", key: "recherches" },
          { label: "J'ai postulé à des offres", key: "postule" },
          { label: "J'ai des entretiens en cours", key: "entretiens" },
          { label: "J'ai une offre ou promesse d'embauche", key: "offre" },
        ],
      },
      {
        id: "connaissance",
        label: "Vous êtes-vous renseigné(e) sur le système administratif suisse (fiscalité, assurance maladie, prévoyance) ?",
        type: "card",
        options: [
          { label: "Pas du tout", key: "aucune" },
          { label: "Quelques recherches", key: "quelques" },
          { label: "Très bien", key: "tres_bien" },
        ],
      },
    ],
  },
];
