// Assurance funnel — answer keys MUST match docs/Audit_Assurances_Spec_Verrouillee
// and the question definitions in questions.ts exactly.

export type AssuranceBranch = "resident" | "frontalier";

export type Q1Statut =
  | "salarie_recent"
  | "salarie_installe"
  | "independant"
  | "dirigeant"
  | "frontalier"
  | "sans_activite";

export type Q2Canton =
  | "geneve"
  | "vaud"
  | "valais"
  | "neuchatel"
  | "fribourg"
  | "jura"
  | "berne"
  | "zurich"
  | "bale"
  | "tessin"
  | "autre";

export type Q3Famille =
  | "seul"
  | "couple_sans_enfant"
  | "couple_avec_enfants"
  | "parent_solo";

export type Q4Caisse =
  | "pas_encore"
  | "moins_1an"
  | "plusieurs_annees_jamais_change"
  | "change_pas_recemment"
  | "compare_regulierement";

export type Q5Franchise =
  | "300"
  | "500"
  | "1000_1500"
  | "2000_2500"
  | "ne_sais_pas";

export type Q6Modele =
  | "libre"
  | "medecin_famille"
  | "hmo"
  | "telmed"
  | "ne_sais_pas";

export type Q7Ijm =
  | "ijm_employeur"
  | "echelle_berne"
  | "ne_sais_pas"
  | "independant_sans_ijm"
  | "independant_avec_ijm";

export type Q8Complementaires =
  | "aucune"
  | "hospitalisation"
  | "ambulatoire"
  | "dentaire"
  | "plusieurs"
  | "ne_sais_pas";

export type Q9Evenements =
  | "stable"
  | "changement_emploi"
  | "demenagement_canton"
  | "enfant"
  | "independant"
  | "quitter_suisse";

export interface AssuranceAnswersResident {
  q1_statut: Q1Statut;
  q2_canton: Q2Canton;
  q3_famille: Q3Famille;
  q4_caisse: Q4Caisse;
  q5_franchise: Q5Franchise;
  q6_modele: Q6Modele;
  q7_ijm: Q7Ijm;
  q8_complementaires: Q8Complementaires;
  q9_evenements: Q9Evenements;
}

export type QF1DroitOption =
  | "dans_3mois"
  | "depasse_affilie_office"
  | "choisi_lamal"
  | "choisi_cmu"
  | "ne_sais_pas";

export type QF2Famille =
  | "seul"
  | "couple_revenus"
  | "couple_sans_revenus"
  | "avec_enfants";

export type QF3Rfr =
  | "moins_15k"
  | "15k_30k"
  | "30k_50k"
  | "50k_80k"
  | "plus_80k"
  | "ne_sais_pas";

export type QF4Salaire = "moins_60k" | "60k_100k" | "100k_150k" | "plus_150k";

export type QF5Couverture =
  | "lamal_frontalier"
  | "cmu"
  | "rien_dans_3mois"
  | "rien_depasse";

export type QF6AccesSoins =
  | "frontaliere_consulte_france"
  | "frontaliere_consulte_suisse"
  | "loin_frontiere"
  | "en_installation";

export interface AssuranceAnswersFrontalier {
  q1_statut: "frontalier";
  qf1_droit_option: QF1DroitOption;
  qf2_famille: QF2Famille;
  qf3_rfr: QF3Rfr;
  qf4_salaire: QF4Salaire;
  qf5_couverture: QF5Couverture;
  qf6_acces_soins: QF6AccesSoins;
}

export type AssuranceAnswers =
  | AssuranceAnswersResident
  | AssuranceAnswersFrontalier;

export type AssurancePersonaCode = "A" | "B" | "C" | "D" | "E";

export interface AssurancePersona {
  code: AssurancePersonaCode;
  label: string;
}

export type TrouSeverity = "CRITIQUE" | "ÉLEVÉ" | "MODÉRÉ";

export interface TrouDeCouverture {
  id: string;
  label: string;
  severity: TrouSeverity;
  risque_chf: number;
  description: string;
}

export interface SurcoutBreakdown {
  franchise: number;
  modele: number;
  inertie: number;
  doublons: number;
  complementaires: number;
}

export interface SurcoutResult {
  total_annuel: number;
  total_5ans: number;
  breakdown: SurcoutBreakdown;
}

export interface FrontalierComparatif {
  cout_lamal_annuel: number;
  cout_cmu_actuel: number;
  cout_cmu_projete: number;
  difference_5ans: number;
  piege_n2: boolean;
  recommandation: "lamal" | "cmu" | "audit_approfondi";
}

export type AssuranceTier =
  | "optimal"
  | "ajustements_mineurs"
  | "surcouts_significatifs"
  | "couverture_critique";
