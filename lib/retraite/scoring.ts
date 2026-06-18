// Moteur de calcul Retraite — applique strictement TABLE_FISCALE_Retraite_Calcul.md.
// Aucun chiffre n'est inventé : tous les paramètres viennent de la table fiscale
// ou de canton-taux.ts. taux_marginal et perte_cumulee sont retournés pour
// l'affichage interne / le report email mais NE SONT PAS transmis dans le payload.

import { getTauxMarginal, PLAFOND_INDEP } from "./data/canton-taux";
import type {
  Q1Statut,
  Q2Arrivee,
  Q5TroisiemePilier,
  RetraiteAnswers,
  RetraiteScoreResult,
} from "./types";

export const PLAFOND_3A_SALARIE = 7_258;
export const PLAFOND_3A_INDEP_CAP = 36_288;
export const RACHAT_MAX_ANNEES = 10;

const VERSEMENT_ACTUEL: Record<Q5TroisiemePilier, number> = {
  max: 1.0,
  partiel: 0.5,
  recent: 1.0,
  non_connait: 0.0,
  non_ignore: 0.0,
};

// Conservatif : bottom-of-bracket. Mieux vaut sous-estimer le rattrapage
// que sur-promettre (un audit Nathan corrigera vers le haut si possible).
const ANNEES_SUISSE: Record<Q2Arrivee, number> = {
  depuis_naissance: 10,
  plus_10_ans: 10,
  "5_10_ans": 6,
  "2_5_ans": 3,
  moins_2_ans: 1,
};

function isIndependant(q1: Q1Statut): boolean {
  return q1 === "independant_suisse" || q1 === "independant_bc";
}

export function computeRetraiteScore(
  answers: RetraiteAnswers
): RetraiteScoreResult {
  const taux = getTauxMarginal(answers.q3_canton, answers.q4_revenu);
  const plafond = isIndependant(answers.q1_statut)
    ? PLAFOND_INDEP[answers.q4_revenu]
    : PLAFOND_3A_SALARIE;

  const versementActuel = plafond * VERSEMENT_ACTUEL[answers.q5_3a];
  const perteAnnuelle = Math.round(
    Math.max(0, plafond - versementActuel) * taux
  );

  const anneesSuisse = ANNEES_SUISSE[answers.q2_arrivee];
  const sans3a =
    answers.q5_3a === "non_connait" ||
    answers.q5_3a === "non_ignore" ||
    answers.q5_3a === "recent";
  const eligibleRachat = sans3a && anneesSuisse >= 2;
  const anneesSans3a = eligibleRachat
    ? Math.min(
        anneesSuisse - (answers.q5_3a === "recent" ? 1 : 0),
        RACHAT_MAX_ANNEES
      )
    : 0;

  // Le rachat rétroactif est plafonné au 7 258 CHF salarié même pour les
  // indépendants — règle 2026 (table fiscale).
  const rachatPotentiel = anneesSans3a * PLAFOND_3A_SALARIE;
  const economieRachat = Math.round(rachatPotentiel * taux);

  const perteCumulee = Math.round(
    perteAnnuelle * Math.min(anneesSuisse, RACHAT_MAX_ANNEES)
  );

  return {
    perte_annuelle_3a: perteAnnuelle,
    perte_cumulee: perteCumulee,
    annees_sans_3a: anneesSans3a,
    rachat_retroactif_montant: rachatPotentiel,
    rachat_retroactif_economie: economieRachat,
    taux_marginal: taux,
    plafond_3a: plafond,
    annees_suisse: anneesSuisse,
  };
}
