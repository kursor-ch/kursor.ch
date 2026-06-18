// Audit Retraite — types alignés sur FIELDMAP_Retraite_Front_n8n_Airtable.md v2.
// Slugs verrouillés : modifier ces unions = breaking change côté n8n / Airtable.
// Route /retraite, funnel_id "retraite", verdict.type "fiscal_loss".

export type Q1Statut =
  | "salarie_suisse"
  | "salarie_c"
  | "salarie_b"
  | "frontalier_g"
  | "independant_suisse"
  | "independant_bc"
  | "sans_activite";

export type Q2Arrivee =
  | "depuis_naissance"
  | "plus_10_ans"
  | "5_10_ans"
  | "2_5_ans"
  | "moins_2_ans";

export type Q3Canton =
  | "geneve"
  | "vaud"
  | "valais"
  | "neuchatel"
  | "fribourg"
  | "jura"
  | "berne"
  | "bale"
  | "zurich"
  | "tessin"
  | "autre";

export type Q4Revenu =
  | "moins_50k"
  | "50_80k"
  | "80_120k"
  | "120_180k"
  | "180_250k"
  | "plus_250k"
  | "non_renseigne";

export type Q5TroisiemePilier =
  | "max"
  | "partiel"
  | "recent"
  | "non_connait"
  | "non_ignore";

export type Q6Lpp =
  | "consulte_regulierement"
  | "lu_pas_compris"
  | "jamais_ouvert"
  | "ignore_existence"
  | "independant_na";

export type Q8Horizon =
  | "moins_5_ans"
  | "5_15_ans"
  | "15_30_ans"
  | "plus_30_ans"
  | "ne_sait_pas";

export interface RetraiteAnswers {
  q1_statut: Q1Statut;
  q2_arrivee: Q2Arrivee;
  q3_canton: Q3Canton;
  q4_revenu: Q4Revenu;
  q5_3a: Q5TroisiemePilier;
  q6_lpp: Q6Lpp;
  q8_horizon: Q8Horizon;
}

export type RetraitePersonaCode = "A" | "B" | "C" | "D";

export interface RetraitePersona {
  code: RetraitePersonaCode;
  label: string;
  tagline: string;
}

export interface RetraiteScoreResult {
  perte_annuelle_3a: number;
  perte_cumulee: number;
  annees_sans_3a: number;
  rachat_retroactif_montant: number;
  rachat_retroactif_economie: number;
  taux_marginal: number;
  plafond_3a: number;
  annees_suisse: number;
}

export type RetraiteTier =
  | "negligeable"
  | "significatif"
  | "eleve"
  | "critique";
