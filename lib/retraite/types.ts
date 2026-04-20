// Audit Retraite — answer keys MUST match docs/Tunnel_Retraite_Audit_Spec_Verrouillee
// and the question definitions in questions.ts exactly. Route is /prevoyance,
// internal funnel_id is "retraite" — intentionally divergent.

export type Q1Statut =
  | "salarie_suisse"
  | "salarie_c"
  | "salarie_b"
  | "frontalier"
  | "independant_suisse"
  | "independant_bc"
  | "sans_activite";

export type Q2Anciennete =
  | "naissance"
  | "plus_10ans"
  | "5_10ans"
  | "2_5ans"
  | "moins_2ans";

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
  | "50k_80k"
  | "80k_120k"
  | "120k_180k"
  | "180k_250k"
  | "plus_250k"
  | "prefere_pas";

export type Q5TroisiemePilier =
  | "oui_max"
  | "oui_partiel"
  | "oui_recent"
  | "non_sait"
  | "non_ignore";

export type Q6Lpp =
  | "oui_regulier"
  | "oui_incompris"
  | "non_jamais"
  | "non_inconnu"
  | "independant";

export type Q7Inquietude =
  | "niveau_vie"
  | "impots"
  | "droits_expat"
  | "par_ou_commencer"
  | "opportunite"
  | "depart_suisse";

export type Q8Horizon =
  | "moins_5ans"
  | "5_15ans"
  | "15_30ans"
  | "plus_30ans"
  | "ne_sais_pas";

export interface RetraiteAnswers {
  q1_statut: Q1Statut;
  q2_anciennete: Q2Anciennete;
  q3_canton: Q3Canton;
  q4_revenu: Q4Revenu;
  q5_3a: Q5TroisiemePilier;
  q6_lpp: Q6Lpp;
  q7_inquietude: Q7Inquietude;
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
  lpp_flag: boolean;
  horizon_years: number | null;
}

export type RetraiteTier =
  | "negligeable"
  | "significatif"
  | "eleve"
  | "critique";
