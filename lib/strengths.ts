import { Answers } from "./scoring";

export interface Strength {
  id: string;
  title: string;
  description: string;
}

export function detectStrengths(answers: Answers): Strength[] {
  const strengths: Strength[] = [];

  // S1: Secteur en forte demande
  if (
    ["tech", "pharma_sante", "ingenierie", "horlogerie"].includes(
      answers.secteur
    )
  ) {
    strengths.push({
      id: "S1",
      title: "Secteur en forte demande",
      description:
        "Votre secteur fait partie des plus recherchés en Suisse romande. Les opportunités sont nombreuses et les employeurs peinent à recruter.",
    });
  }

  // S2: Potentiel de gain salarial élevé
  if (["2500_3k", "3k_4k"].includes(answers.revenu)) {
    strengths.push({
      id: "S2",
      title: "Potentiel de gain salarial élevé",
      description:
        "Votre tranche de revenu actuelle correspond au plus fort multiplicateur salarial France → Suisse. L'augmentation nette peut atteindre 40 à 80%.",
    });
  }

  // S3: Profil senior valorisé
  if (answers.revenu === "gt4k") {
    strengths.push({
      id: "S3",
      title: "Profil senior valorisé",
      description:
        "Votre niveau de rémunération indique un profil expérimenté, recherché pour des postes à responsabilité en Suisse.",
    });
  }

  // S4: Stabilité professionnelle
  if (answers.statut === "cdi") {
    strengths.push({
      id: "S4",
      title: "Stabilité professionnelle",
      description:
        "Votre CDI actuel est un signal fort pour les recruteurs suisses et facilite l'obtention du permis de travail.",
    });
  }

  // S5: Démarches bien avancées
  if (["entretiens", "offre"].includes(answers.demarches)) {
    strengths.push({
      id: "S5",
      title: "Démarches bien avancées",
      description:
        "Vous avez déjà franchi des étapes concrètes. C'est un indicateur fort de la maturité de votre projet.",
    });
  }

  // S6: Bonne maîtrise administrative
  if (answers.connaissance === "tres_bien") {
    strengths.push({
      id: "S6",
      title: "Bonne maîtrise administrative",
      description:
        "Votre connaissance du système suisse réduit significativement les risques de mauvaises surprises fiscales et administratives.",
    });
  }

  // S7: Budget confortable
  if (answers.budget === "gt5k") {
    strengths.push({
      id: "S7",
      title: "Budget confortable",
      description:
        "Votre budget vous donne une marge de manœuvre saine pour les premiers mois (caution, assurances, installation).",
    });
  }

  // S8: Marché de l'emploi dynamique
  if (["geneve", "vaud"].includes(answers.canton)) {
    strengths.push({
      id: "S8",
      title: "Marché de l'emploi dynamique",
      description:
        "Genève et Vaud concentrent le plus grand nombre d'offres pour les profils francophones. Votre canton cible maximise vos opportunités.",
    });
  }

  // S9: Momentum fort
  if (
    answers.horizon === "lt3m" &&
    ["entretiens", "offre"].includes(answers.demarches)
  ) {
    strengths.push({
      id: "S9",
      title: "Momentum fort",
      description:
        "Un horizon court combiné à des démarches avancées indique un projet mûr et une transition rapide possible.",
    });
  }

  return strengths;
}
