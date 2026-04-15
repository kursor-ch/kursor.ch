import type {
  Consent,
  Contact,
  HousingData,
  Priority,
  WebhookPayloadV1,
} from "@/lib/shared/schemaTypes";
import { buildMetadata } from "@/lib/shared/metadata";
import type { LogementPersona } from "./personas";
import type { LogementAnswers, LogementScoreResult } from "./scoring";
import type { LogementVerdict } from "./verdicts";
import {
  buildCrossSell,
  buildPartnerRouting,
  mapArrivalWindow,
} from "./routing";

export interface BuildLogementPayloadInput {
  leadId: string;
  contact: Contact;
  consent: Consent;
  answers: LogementAnswers;
  persona: LogementPersona;
  score: LogementScoreResult;
  verdict: LogementVerdict;
  priority: Priority;
  sessionStartTs: number;
  completionPath: "linear" | "non_linear";
}

function buildHousingData(
  answers: LogementAnswers,
  score: LogementScoreResult,
  personaCode: LogementPersona["code"]
): HousingData {
  return {
    canton_difficulty_multiplier: score.cantonMultiplier,
    budget_eligible: answers.q4_budget !== "lt1600",
    min_budget_threshold_chf: 1600,
    actual_budget_chf_bracket: answers.q4_budget,
    search_duration_estimate_weeks: Math.round(
      (score.weeksMin + score.weeksMax) / 2
    ),
    frontalier_soft_exit: false,
    future_resident_arrival_window: mapArrivalWindow(
      personaCode,
      answers.q3_urgence
    ),
  };
}

function buildSummary(
  answers: LogementAnswers,
  verdict: LogementVerdict,
  persona: LogementPersona
): string {
  const cantonLabel: Record<LogementAnswers["q2_canton"], string> = {
    geneve: "genevois",
    vaud: "vaudois",
    valais: "valaisan",
    neuchatel: "neuchâtelois",
    fribourg: "fribourgeois",
    jura: "jurassien",
    multi_canton: "multi-cantonal",
  };
  const market = cantonLabel[answers.q2_canton];
  const weeks = verdict.weeksLabel;
  return `Profil ${persona.label} sur le marché ${market} — recherche estimée à ${weeks}.`;
}

export function buildLogementPayload(
  input: BuildLogementPayloadInput
): WebhookPayloadV1 {
  if (!input.consent.rgpd_accepted) {
    throw new Error("RGPD consent is required before submission");
  }
  if (
    (input.priority === "hot" || input.priority === "very_hot") &&
    !input.contact.telephone
  ) {
    throw new Error(
      `Telephone is required for priority "${input.priority}" submissions`
    );
  }

  return {
    schema_version: "1.0",
    funnel_id: "logement",
    lead_id: input.leadId,
    submitted_at: new Date().toISOString(),
    contact: input.contact,
    consent: input.consent,
    verdict: {
      type: "difficulty",
      score: input.score.final,
      tier: input.verdict.key,
      label: input.verdict.label,
      summary: buildSummary(input.answers, input.verdict, input.persona),
    },
    persona: {
      code: input.persona.code,
      label: input.persona.label,
    },
    priority: input.priority,
    answers: { ...input.answers } as Record<string, string>,
    partner_routing: buildPartnerRouting(input.priority),
    cross_sell: buildCrossSell(input.persona.code),
    metadata: buildMetadata({
      sessionStartTs: input.sessionStartTs,
      completionPath: input.completionPath,
    }),
    housing_data: buildHousingData(
      input.answers,
      input.score,
      input.persona.code
    ),
  };
}
