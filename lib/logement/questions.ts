import type { QuestionScreen } from "@/lib/questions";

export interface LogementQuestionScreen extends QuestionScreen {
  // Optional predicate: if it returns true, this screen is skipped when
  // advancing. Used for Q1bis verification that only applies to Persona C.
  skipWhen?: (answers: Record<string, string>) => boolean;
}

export const logementQuestionScreens: LogementQuestionScreen[] = [
  // Q1 — Statut résidentiel (filter principal)
  {
    title: "Quelle est votre situation actuelle ?",
    subtitle:
      "Votre statut détermine si notre diagnostic logement est le bon outil pour vous.",
    questions: [
      {
        id: "q1_statut",
        label: "Choisissez l'option qui correspond le mieux",
        type: "card",
        options: [
          {
            label: "Je vis en Suisse depuis moins de 12 mois",
            key: "resident_b_recent",
          },
          {
            label: "Je vis en Suisse depuis plus de 12 mois",
            key: "resident_installed",
          },
          {
            label:
              "J'ai un contrat de travail signé en Suisse, j'arrive bientôt",
            key: "futur_resident_offre_confirmee",
          },
          {
            label:
              "J'envisage de m'installer en Suisse, sans offre concrète encore",
            key: "futur_resident_exploration",
          },
          {
            label: "Je suis frontalier (permis G)",
            key: "frontalier",
          },
        ],
      },
    ],
  },

  // Q1bis — Vérification offre confirmée (Persona C only)
  {
    title: "Vérification : avez-vous une offre confirmée ?",
    subtitle:
      "Nos partenaires ne traitent que les projets avec une base contractuelle ferme. Cette vérification protège leur temps — et le vôtre.",
    skipWhen: (answers) =>
      answers.q1_statut !== "futur_resident_offre_confirmee",
    questions: [
      {
        id: "q1bis_offer_confirmed",
        label:
          "Confirmez-vous avoir un contrat de travail signé OU une offre écrite ferme avec une date de début ?",
        type: "card",
        options: [
          {
            label:
              "Oui, j'ai un contrat signé ou une offre ferme avec date de début",
            key: "offer_confirmed_yes",
          },
          {
            label: "Non, je suis encore en phase de recherche ou discussion",
            key: "offer_confirmed_no",
          },
        ],
      },
    ],
  },

  // Q2 — Canton visé
  {
    title: "Dans quel canton cherchez-vous ?",
    subtitle:
      "Chaque canton a son propre marché. Genève et Vaud sont structurellement plus tendus.",
    questions: [
      {
        id: "q2_canton",
        label: "Sélectionnez le canton visé",
        type: "select",
        options: [
          { label: "Genève", key: "geneve" },
          { label: "Vaud (Lausanne et alentours)", key: "vaud" },
          { label: "Valais", key: "valais" },
          { label: "Neuchâtel", key: "neuchatel" },
          { label: "Fribourg", key: "fribourg" },
          { label: "Jura", key: "jura" },
          { label: "Plusieurs cantons en parallèle", key: "multi_canton" },
        ],
      },
    ],
  },

  // Q3 — Urgence
  {
    title: "Pour quand devez-vous avoir trouvé un logement ?",
    subtitle:
      "Votre horizon de recherche change tout : plus la fenêtre est courte, plus la pression sur le dossier est forte.",
    questions: [
      {
        id: "q3_urgence",
        label: "Votre horizon cible",
        type: "card",
        options: [
          { label: "Sous 1 mois — c'est urgent", key: "lt1m" },
          { label: "Dans 1 à 3 mois", key: "1_3m" },
          { label: "Dans 3 à 6 mois", key: "3_6m" },
          { label: "Plus de 6 mois — j'anticipe", key: "gt6m" },
        ],
      },
    ],
  },

  // Q4 — Budget mensuel (avec gate)
  {
    title: "Quel est votre budget loyer mensuel maximum ?",
    subtitle: "Charges comprises. Soyez honnête — c'est ce que les régies liront.",
    questions: [
      {
        id: "q4_budget",
        label: "Votre budget",
        type: "card",
        options: [
          { label: "Moins de 1 600 CHF", key: "lt1600" },
          { label: "1 600 à 2 200 CHF", key: "1600_2200" },
          { label: "2 200 à 3 000 CHF", key: "2200_3000" },
          { label: "3 000 à 4 500 CHF", key: "3000_4500" },
          { label: "Plus de 4 500 CHF", key: "gt4500" },
        ],
      },
    ],
  },

  // Q5 — Durée de recherche déjà engagée
  {
    title: "Depuis combien de temps cherchez-vous activement ?",
    subtitle:
      "Si vous cherchez depuis plusieurs mois sans succès, c'est un signal — souvent lié à la méthode, pas au profil.",
    questions: [
      {
        id: "q5_duree_recherche",
        label: "Durée de recherche",
        type: "card",
        options: [
          { label: "Je n'ai pas encore commencé", key: "pas_commence" },
          { label: "Moins d'un mois", key: "lt1m" },
          { label: "1 à 3 mois", key: "1_3m" },
          { label: "Plus de 3 mois — je galère", key: "gt3m" },
        ],
      },
    ],
  },

  // Q6 — Attestation de non-poursuite
  {
    title: "Avez-vous une attestation de non-poursuite à jour ?",
    subtitle:
      "Document obligatoire pour la majorité des régies. Sans attestation de moins de 3 mois, votre dossier est souvent écarté d'entrée.",
    questions: [
      {
        id: "q6_attestation_non_poursuite",
        label: "Votre situation",
        type: "card",
        options: [
          { label: "Oui, j'en ai une à jour (< 3 mois)", key: "oui_a_jour" },
          {
            label: "Oui, mais elle date de plus de 3 mois",
            key: "oui_perimee",
          },
          {
            label: "Non, je ne l'ai pas encore demandée",
            key: "non_pas_encore",
          },
          {
            label: "Non, je ne savais pas que c'était requis",
            key: "non_inconnu",
          },
          {
            label: "Pas applicable, je ne suis pas encore en Suisse",
            key: "na_pas_en_suisse",
          },
        ],
      },
    ],
  },
];

// Count of screens that will actually be shown given the current answers
// (used to power the ProgressBar total).
export function countActiveScreens(answers: Record<string, string>): number {
  return logementQuestionScreens.filter((s) => !s.skipWhen?.(answers)).length;
}

// Next screen index after `current`, skipping any screens whose skipWhen
// predicate returns true for the current answers. Returns -1 if none left.
export function nextQuestionIndex(
  current: number,
  answers: Record<string, string>
): number {
  for (let i = current + 1; i < logementQuestionScreens.length; i++) {
    if (!logementQuestionScreens[i].skipWhen?.(answers)) return i;
  }
  return -1;
}

// Previous screen index before `current`, respecting skipWhen.
export function prevQuestionIndex(
  current: number,
  answers: Record<string, string>
): number {
  for (let i = current - 1; i >= 0; i--) {
    if (!logementQuestionScreens[i].skipWhen?.(answers)) return i;
  }
  return -1;
}
