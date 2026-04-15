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

export type Verdict = VerdictScore | VerdictDifficulty;

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
  user_agent?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
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

export interface WebhookPayloadV1 {
  schema_version: "1.0";
  funnel_id: FunnelId;
  lead_id: string;
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
}

// Lightweight soft-exit capture payload. Fires to a separate n8n endpoint
// (NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL); cross-sell activation without
// bloating schema v1.0 with incomplete-flow variants.
export interface SoftExitPayload {
  funnel_id: FunnelId;
  soft_exit_reason: "frontalier" | "exploration" | "low_budget";
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
