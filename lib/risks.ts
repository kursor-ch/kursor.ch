import { Answers } from "./scoring";

export interface Risk {
  id: string;
  severity: "CRITIQUE" | "ÉLEVÉ" | "MOYEN";
  title: string;
  cost: string;
  description: string;
}

const SEVERITY_ORDER = { CRITIQUE: 0, "ÉLEVÉ": 1, MOYEN: 2 };

export const SEVERITY_COLORS: Record<string, string> = {
  CRITIQUE: "#DC2626",
  "ÉLEVÉ": "#EA580C",
  MOYEN: "#D97706",
};

export function detectRisks(answers: Answers): Risk[] {
  const risks: Risk[] = [];

  // R1: Double imposition — Q8 = aucune
  if (answers.connaissance === "aucune") {
    risks.push({
      id: "R1",
      severity: "CRITIQUE",
      title: "Double imposition potentielle",
      cost: "5 000 – 40 000 CHF/an",
      description:
        "Sans connaissance du système fiscal suisse, vous risquez de payer des impôts dans deux pays simultanément. La convention bilatérale France-Suisse permet d'éviter cela, mais elle nécessite des démarches spécifiques dès votre arrivée.",
    });
  }

  // R2: Sous-capitalisation — Q6 = lt3k
  if (answers.budget === "lt3k") {
    risks.push({
      id: "R2",
      severity: "CRITIQUE",
      title: "Sous-capitalisation du projet",
      cost: "Min. 15 000 – 20 000 CHF",
      description:
        "S'installer en Suisse requiert un capital initial conséquent : caution logement (3 mois), premier mois de loyer, assurance maladie, frais administratifs. Un budget inférieur à 3 000€ expose à un risque de blocage.",
    });
  }

  // R5: Délai trop court — Q5 = lt3m AND Q7 = recherches
  if (answers.horizon === "lt3m" && answers.demarches === "recherches") {
    risks.push({
      id: "R5",
      severity: "CRITIQUE",
      title: "Délai potentiellement trop court",
      cost: "—",
      description:
        "Moins de 3 mois pour concrétiser un projet d'expatriation avec uniquement des recherches en ligne effectuées : le risque de précipitation est élevé. Les démarches administratives suisses prennent du temps.",
    });
  }

  // R7: Montage juridique freelance — Q1 = freelance AND Q8 != tres_bien
  if (
    answers.statut === "freelance" &&
    answers.connaissance !== "tres_bien"
  ) {
    risks.push({
      id: "R7",
      severity: "ÉLEVÉ",
      title: "Risque de montage juridique inadapté",
      cost: "10 000 – 100 000+ CHF",
      description:
        "En tant qu'indépendant, le choix de la structure juridique (RI, Sàrl, SA) et du canton d'implantation a des conséquences fiscales majeures. Un mauvais montage peut coûter très cher sur plusieurs années.",
    });
  }

  // R3: 3ème pilier non optimisé — Q8 <= quelques
  if (
    answers.connaissance === "aucune" ||
    answers.connaissance === "quelques"
  ) {
    risks.push({
      id: "R3",
      severity: "ÉLEVÉ",
      title: "3ème pilier non optimisé",
      cost: "2 000 – 3 500 CHF/an de déduction fiscale manquée",
      description:
        "Le 3ème pilier permet une déduction fiscale annuelle significative. Chaque année sans souscription est une économie d'impôt perdue définitivement.",
    });
  }

  // R4: Surcoût LAMal — Q8 = aucune
  if (answers.connaissance === "aucune") {
    risks.push({
      id: "R4",
      severity: "ÉLEVÉ",
      title: "Surcoût LAMal probable",
      cost: "2 000 – 8 000 CHF/an",
      description:
        "L'assurance maladie suisse (LAMal) est obligatoire et les primes varient énormément selon le canton, le modèle et la franchise. Sans comparaison préalable, la plupart des expatriés surpayent leur couverture.",
    });
  }

  // R6: Barrière linguistique — Q4 in (zurich, berne, bale) AND Q8 <= quelques
  if (
    ["zurich", "berne", "bale"].includes(answers.canton) &&
    answers.connaissance !== "tres_bien"
  ) {
    risks.push({
      id: "R6",
      severity: "ÉLEVÉ",
      title: "Barrière linguistique",
      cost: "—",
      description:
        "Vous visez un canton germanophone ou bilingue. Sans une préparation linguistique adaptée, l'intégration professionnelle et administrative sera plus complexe.",
    });
  }

  // R8: Budget tendu — Q6 <= 3k_4k AND Q4 in (geneve, vaud, zurich, bale)
  if (
    ["lt3k", "3k_4k"].includes(answers.budget) &&
    ["geneve", "vaud", "zurich", "bale"].includes(answers.canton)
  ) {
    risks.push({
      id: "R8",
      severity: "MOYEN",
      title: "Budget tendu pour le canton visé",
      cost: "—",
      description:
        "Les cantons de Genève, Vaud, Zurich et Bâle ont un coût de la vie parmi les plus élevés de Suisse. Votre budget actuel pourrait limiter vos options de logement et créer du stress financier les premiers mois.",
    });
  }

  // Sort by severity
  risks.sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  );

  return risks;
}
