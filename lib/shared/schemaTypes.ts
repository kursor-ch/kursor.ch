// Cross-funnel webhook payload type contracts — schema v1.0.
// Source of truth: docs/WEBHOOK_SCHEMA.md.
//
// TODO(post-logement): migrate Emploi funnel (lib/webhook.ts) to this v1.0
// schema in a follow-up PR. Currently Emploi sends a pre-v1.0 flat payload;
// n8n handles both shapes during the transition window.

export type FunnelId = "emploi" | "logement" | "assurance" | "retraite";

export type Priority = "cold" | "warm" | "hot" | "very_hot";

export type CompletionPath = "linear" | "non_linear";

export interface Contact {
  prenom: string;
  email: string;
  telephone?: string;
}

export interface Consent {
  rgpd_accepted: boolean;
  partner_share_optin: boolean;
  newsletter_optin: boolean;
  // Additif schema v1.0 (retraite-first). Consentement explicite pour la
  // transmission des coordonnées à des courtiers tiers — distinct de
  // partner_share_optin (qui ne vise que le partenaire primaire nommé).
  // Décoché par défaut.
  resale_optin?: boolean;
}

export interface VerdictScore {
  type: "score";
  score: number;
  tier: string;
  label: string;
  summary: string;
}

export interface VerdictDifficulty {
  type: "difficulty";
  score: number;
  tier:
    | "faisable"
    | "moderee"
    | "difficile"
    | "tres_difficile"
    | "quasi_impossible";
  label: string;
  summary: string;
}

export interface VerdictCoverageAudit {
  type: "coverage_audit";
  score: {
    surcout_annuel_chf: number;
    trous_couverture_count: number;
  };
  tier:
    | "optimal"
    | "ajustements_mineurs"
    | "surcouts_significatifs"
    | "couverture_critique";
  label: string;
  summary: string;
}

export interface VerdictFiscalLoss {
  type: "fiscal_loss";
  score: number;
  tier: "negligeable" | "significatif" | "eleve" | "critique";
  label: string;
  summary: string;
}

export type Verdict =
  | VerdictScore
  | VerdictDifficulty
  | VerdictCoverageAudit
  | VerdictFiscalLoss;

export interface Persona {
  code: "A" | "B" | "C" | "D" | "E";
  label: string;
}

export interface PartnerRouting {
  primary_partner: string;
  partner_products: string[];
  founder_call_required: boolean;
  founder_call_sla_hours?: number;
  partner_transmission_sla_hours: number;
}

export interface CrossSell {
  applicable_funnels: FunnelId[];
  cross_sell_priority: "none" | "low" | "medium" | "high";
  cross_sell_reason?: string;
}

export interface Metadata {
  source?: string;
  acquisition_channel?: string;
  user_agent?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  landing_page?: string;
  session_duration_seconds?: number;
  completion_path?: CompletionPath;
}

export interface HousingData {
  canton_difficulty_multiplier: number;
  budget_eligible: boolean;
  min_budget_threshold_chf: number;
  actual_budget_chf_bracket:
    | "lt1600"
    | "1600_2200"
    | "2200_3000"
    | "3000_4500"
    | "gt4500";
  search_duration_estimate_weeks: number;
  frontalier_soft_exit: boolean;
  future_resident_arrival_window: "lt3m" | "3m_6m" | "gt6m" | "not_applicable";
}

export interface AssuranceData {
  branch: "resident" | "frontalier";
  current_caisse_known: boolean;
  franchise_chf: 300 | 500 | 1000 | 1500 | 2000 | 2500 | null;
  model: "libre" | "medecin_famille" | "hmo" | "telmed" | "alternatif" | "unknown";
  ijm_status:
    | "covered_employer_full"
    | "echelle_berne_only"
    | "unknown"
    | "independant_no_ijm"
    | "independant_with_ijm";
  complementaires_count: number;
  estimated_surcout_annuel_chf: number;
  trous_couverture_identified: string[];
}

export interface RetraiteData {
  year_arrival_switzerland: number | null;
  years_eligible_for_rachat_retroactif: number;
  estimated_rattrapage_max_chf: number;
  estimated_tax_savings_chf: number;
  current_3a_status:
    | "none"
    | "has_some_below_max"
    | "maxes_each_year"
    | "unsure";
  professional_status:
    | "salarie_lpp"
    | "salarie_no_lpp"
    | "independant_ri"
    | "independant_sarl_sa";
}

export interface FrontalierData {
  decision_window_status:
    | "in_window_3m"
    | "window_expired_lamal_default"
    | "chose_lamal_installed"
    | "chose_cmu_installed"
    | "unknown";
  rfr_n_minus_2_eur_bracket:
    | "lt15k"
    | "15k_30k"
    | "30k_50k"
    | "50k_80k"
    | "gt80k"
    | "unknown";
  swiss_salary_chf_bracket: "lt60k" | "60k_100k" | "100k_150k" | "gt150k";
  current_coverage:
    | "lamal_active"
    | "cmu_active"
    | "none_pending"
    | "none_expired";
  residence_zone:
    | "frontalier_proche_consult_fr"
    | "frontalier_proche_consult_ch"
    | "frontalier_loin_consult_fr"
    | "installation_en_cours";
}

export interface WebhookPayloadV1 {
  schema_version: "1.0";
  funnel_id: FunnelId;
  // n8n assigne lead_id à la réception et le renvoie dans la réponse 200.
  // Les funnels v1.0 récents (retraite) ne l'envoient pas ; legacy emploi le pose.
  lead_id?: string;
  submitted_at: string;
  contact: Contact;
  consent: Consent;
  verdict: Verdict;
  persona: Persona;
  priority: Priority;
  answers: Record<string, string>;
  partner_routing: PartnerRouting;
  cross_sell: CrossSell;
  metadata: Metadata;
  housing_data?: HousingData;
  assurance_data?: AssuranceData;
  frontalier_data?: FrontalierData;
  retraite_data?: RetraiteData;
}

// Lightweight soft-exit capture payload. Fires to a separate n8n endpoint
// (NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL); cross-sell activation without
// bloating schema v1.0 with incomplete-flow variants.
export interface SoftExitPayload {
  funnel_id: FunnelId;
  soft_exit_reason:
    | "frontalier"
    | "exploration"
    | "low_budget"
    | "sans_activite"
    | "pre_retraite"
    | "jeune_horizon";
  contact: {
    prenom?: string;
    email: string;
  };
  consent: {
    rgpd_accepted: boolean;
    newsletter_optin: boolean;
  };
  applicable_funnels: FunnelId[];
  submitted_at: string;
}
