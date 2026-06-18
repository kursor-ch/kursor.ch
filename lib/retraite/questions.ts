import type { QuestionScreen } from "@/lib/questions";

// 8 écrans UI pour 7 questions logiques v2.
// Q1 est découpé en S1 (statut) + S2 (permis) pour rester lisible ; la valeur
// canonique q1_statut est dérivée par deriveQ1Statut. Les "_form" sont des
// états UI strippés du payload — voir derivePersistedAnswers dans RetraiteApp.
//
// Slugs verrouillés FIELDMAP_Retraite_Front_n8n_Airtable.md v2 — modifier =
// breaking n8n / Airtable.
export const retraiteScreens: QuestionScreen[] = [
  // S1 — Q1 : statut professionnel
  {
    title: "Quelle est votre situation professionnelle ?",
    subtitle:
      "Votre statut détermine le plafond 3a applicable (7 258 CHF salarié, jusqu'à 36 288 CHF indépendant).",
    questions: [
      {
        id: "q1_statut_form",
        label: "Choisissez l'option qui correspond le mieux",
        type: "card",
        options: [
          { label: "Salarié(e)", key: "salarie" },
          { label: "Indépendant(e)", key: "independant" },
          {
            label: "Sans activité (étudiant, sans emploi, retraité)",
            key: "sans_activite",
          },
        ],
      },
    ],
  },

  // S2 — Q1 (suite) : permis
  {
    title: "Et quel est votre permis ?",
    subtitle:
      "Le permis conditionne l'éligibilité 3a et certaines règles fiscales.",
    questions: [
      {
        id: "q1_permis_form",
        label: "Votre permis",
        type: "pill",
        options: [
          { label: "Citoyen suisse", key: "citoyen" },
          { label: "Permis C", key: "permis_c" },
          { label: "Permis B", key: "permis_b" },
          { label: "Frontalier (G)", key: "permis_g" },
        ],
      },
    ],
  },

  // S3 — Q2 : arrivée en Suisse
  {
    title: "Depuis quand vivez-vous en Suisse ?",
    subtitle:
      "Le rachat rétroactif 3a permet de rattraper jusqu'à 10 années de cotisations manquées.",
    questions: [
      {
        id: "q2_arrivee",
        label: "Votre ancienneté",
        type: "card",
        options: [
          { label: "Depuis ma naissance", key: "depuis_naissance" },
          { label: "Plus de 10 ans", key: "plus_10_ans" },
          { label: "Entre 5 et 10 ans", key: "5_10_ans" },
          { label: "Entre 2 et 5 ans", key: "2_5_ans" },
          { label: "Moins de 2 ans", key: "moins_2_ans" },
        ],
      },
    ],
  },

  // S4 — Q3 : canton
  {
    title: "Dans quel canton résidez-vous ?",
    subtitle:
      "Le canton détermine votre taux marginal d'imposition — et donc l'économie fiscale réelle d'un versement 3a.",
    questions: [
      {
        id: "q3_canton",
        label: "Votre canton",
        type: "pill",
        options: [
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
    ],
  },

  // S5 — Q4 : revenu (l'option non_renseigne est rendue comme lien
  // secondaire en bas, pas comme chip — voir QuestionScreen)
  {
    title: "Revenu annuel brut approximatif ?",
    subtitle:
      "Indication seulement — utilisée uniquement pour estimer votre taux marginal d'imposition.",
    questions: [
      {
        id: "q4_revenu",
        label: "Votre revenu annuel brut",
        type: "pill",
        options: [
          { label: "< 50 000 CHF", key: "moins_50k" },
          { label: "50 000 – 80 000", key: "50_80k" },
          { label: "80 000 – 120 000", key: "80_120k" },
          { label: "120 000 – 180 000", key: "120_180k" },
          { label: "180 000 – 250 000", key: "180_250k" },
          { label: "> 250 000 CHF", key: "plus_250k" },
          // non_renseigne rendu en lien secondaire en bas
          { label: "Préfère ne pas répondre", key: "non_renseigne" },
        ],
      },
    ],
  },

  // S6 — Q5 : situation 3a (5 options)
  {
    title: "Votre 3ème pilier (3a) aujourd'hui ?",
    subtitle:
      "Le 3a est le levier fiscal le plus direct : chaque franc versé est déduit de votre revenu imposable.",
    questions: [
      {
        id: "q5_3a",
        label: "Votre situation 3a",
        type: "card",
        options: [
          { label: "Oui, je verse le maximum chaque année", key: "max" },
          { label: "Oui, mais en dessous du plafond", key: "partiel" },
          { label: "Ouvert récemment (< 2 ans)", key: "recent" },
          { label: "Je sais ce que c'est mais n'ai pas encore ouvert", key: "non_connait" },
          { label: "Je découvre, j'ignorais l'existence du 3a", key: "non_ignore" },
        ],
      },
    ],
  },

  // S7 — Q6 : LPP (l'option independant_na est filtrée côté RetraiteApp
  // si q1_statut_form !== "independant")
  {
    title: "Votre certificat LPP, vous en faites quoi ?",
    subtitle:
      "Le 2ème pilier (LPP) cache souvent des leviers de rachat non exploités — surtout après une augmentation ou un changement d'employeur.",
    questions: [
      {
        id: "q6_lpp",
        label: "Votre rapport au certificat LPP",
        type: "card",
        options: [
          { label: "Je le consulte régulièrement", key: "consulte_regulierement" },
          { label: "Je l'ai lu, mais sans tout comprendre", key: "lu_pas_compris" },
          { label: "Je le reçois mais ne l'ai jamais ouvert", key: "jamais_ouvert" },
          { label: "J'ignorais qu'il existait", key: "ignore_existence" },
          { label: "Je suis indépendant·e, je ne suis pas concerné·e", key: "independant_na" },
        ],
      },
    ],
  },

  // S8 — Q8 : horizon retraite / départ
  {
    title:
      "Dans combien d'années prévoyez-vous votre retraite — ou un départ de Suisse ?",
    subtitle:
      "Votre horizon détermine la stratégie : court terme, capitalisation, ou optimisation pré-départ.",
    questions: [
      {
        id: "q8_horizon",
        label: "Votre horizon",
        type: "card",
        options: [
          { label: "Moins de 5 ans", key: "moins_5_ans" },
          { label: "5 à 15 ans", key: "5_15_ans" },
          { label: "15 à 30 ans", key: "15_30_ans" },
          { label: "Plus de 30 ans", key: "plus_30_ans" },
          { label: "Je ne sais pas encore", key: "ne_sait_pas" },
        ],
      },
    ],
  },
];

// Mappe (statut, permis) UI vers la valeur canonique q1_statut field map v2.
// Renvoie null pour indépendant+G (UI désactive ce chip ; filet de sécurité).
export function deriveQ1Statut(
  statut: string | undefined,
  permis: string | undefined
): string | null {
  if (statut === "sans_activite") return "sans_activite";
  if (!statut || !permis) return null;

  if (statut === "salarie") {
    switch (permis) {
      case "citoyen":
        return "salarie_suisse";
      case "permis_c":
        return "salarie_c";
      case "permis_b":
        return "salarie_b";
      case "permis_g":
        return "frontalier_g";
    }
  }
  if (statut === "independant") {
    switch (permis) {
      case "citoyen":
        return "independant_suisse";
      case "permis_b":
      case "permis_c":
        return "independant_bc";
      case "permis_g":
        return null;
    }
  }
  return null;
}
