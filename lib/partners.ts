export interface Partner {
  id: string;
  name: string;
  headline: string;
  description: string;
  value: string;
  icon: string;
}

export const partners: Partner[] = [
  {
    id: "recrutement",
    name: "Recrutement",
    headline: "Accédez à des offres exclusives en Suisse romande",
    description:
      "Nos partenaires recruteurs vous connectent à des postes qualifiés dans votre secteur, avec un accompagnement personnalisé tout au long du processus.",
    value: "Postes avec +20 à 40% vs France",
    icon: "briefcase",
  },
  {
    id: "fiscalite",
    name: "Fiduciaire & Fiscalité",
    headline: "Structurez votre projet avec un expert fiscal",
    description:
      "Accompagnement clé en main pour votre structure juridique, votre fiscalité et votre domiciliation en Suisse.",
    value: "Optimisation fiscale dès le jour 1",
    icon: "calculator",
  },
  {
    id: "prevoyance",
    name: "3ème pilier & Prévoyance",
    headline: "Optimisez votre prévoyance dès le premier jour",
    description:
      "Ne laissez pas passer les déductions fiscales auxquelles vous avez droit. Chaque année compte.",
    value: "Économie fiscale jusqu'à 3 500 CHF/an",
    icon: "shield",
  },
  {
    id: "assurance",
    name: "Assurance maladie",
    headline: "Comparez et choisissez la bonne couverture LAMal",
    description:
      "L'assurance maladie est obligatoire en Suisse. Les primes varient du simple au triple selon vos choix.",
    value: "Économie potentielle de 2 400 CHF/an",
    icon: "heart",
  },
  {
    id: "immobilier",
    name: "Immobilier & Régie",
    headline: "Trouvez votre logement dans le canton visé",
    description:
      "Accès à des biens adaptés aux profils expatriés solvables, avec un accompagnement sur les spécificités locales.",
    value: "Accès à des biens hors marché",
    icon: "home",
  },
];
