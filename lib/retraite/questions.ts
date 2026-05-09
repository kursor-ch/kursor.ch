import type { QuestionScreen } from "@/lib/questions";

// Six linear screens (S1 → S6). No branching at the question level. Soft-exit
// branching is orchestrated by RetraiteApp from outside the screen array.
//
// Screen-to-payload mapping:
//   S1 (q1_statut_form) + S2 (q1_permis_form) → q1_statut on advance from S2.
//     The "_form" keys are UI-only intermediate state and must be stripped
//     from the payload before submission. See RetraiteApp.derivePersistedAnswers.
//   S2 also collects q3_canton (one of the 11 canton chips).
//   S3 collects q2_anciennete (5 cards).
//   S4 collects q4_revenu (6 chips + secondary "préfère pas répondre" link
//     handled in QuestionScreen — selecting it sets q4_revenu: "prefere_pas").
//   S5 collects q5_3a (4 cards, collapsed from prior 5 on 2026-05-09).
//   S6 collects q8_horizon (5 cards).
//
// Q6 (LPP) and Q7 (inquiétude) were dropped on 2026-05-09 — see types.ts
// header comment for context.
export const retraiteScreens: QuestionScreen[] = [
  // S1 — Statut professionnel
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

  // S2 — Permis + Canton (two questions on one screen, manual Continuer)
  {
    title: "Où et avec quel statut ?",
    subtitle:
      "Permis et canton conditionnent l'éligibilité 3a et votre taux marginal d'imposition.",
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
      {
        id: "q3_canton",
        label: "Votre canton",
        type: "pill",
        options: [
          // Order matters — GE/VD/ZH/BE first cover the bulk of intent.
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

  // S3 — Ancienneté en Suisse
  {
    title: "Depuis quand vivez-vous en Suisse ?",
    subtitle:
      "Le rachat rétroactif 3a permet de rattraper jusqu'à 10 années de cotisations manquées.",
    questions: [
      {
        id: "q2_anciennete",
        label: "Votre ancienneté",
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

  // S4 — Revenu annuel brut. The "prefere_pas" option is rendered as a
  // secondary text-link below the chips in QuestionScreen, not as a chip.
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
          { label: "50 000 – 80 000", key: "50k_80k" },
          { label: "80 000 – 120 000", key: "80k_120k" },
          { label: "120 000 – 180 000", key: "120k_180k" },
          { label: "180 000 – 250 000", key: "180k_250k" },
          { label: "> 250 000 CHF", key: "plus_250k" },
          // "prefere_pas" is rendered separately as a secondary link.
          { label: "Préfère ne pas répondre", key: "prefere_pas" },
        ],
      },
    ],
  },

  // S5 — Situation 3a (4 cards, collapsed from prior 5)
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
          { label: "Oui, je verse le maximum", key: "oui_max" },
          { label: "Oui, mais sous-utilisé", key: "oui_partiel" },
          { label: "Ouvert récemment (< 2 ans)", key: "oui_recent" },
          { label: "Pas encore", key: "non" },
        ],
      },
    ],
  },

  // S6 — Horizon retraite/départ
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

// Map (statut, permis) UI selections to the canonical q1_statut value.
// Returns null for the indep+G combination (UI disables this chip; this is a
// safety net in case it ever leaks through).
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
        return "frontalier";
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
        // Disabled in UI; we never reach here, but guard for safety.
        return null;
    }
  }
  return null;
}
