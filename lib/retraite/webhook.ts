import type {
  Consent,
  Contact,
  Priority,
  WebhookPayloadV1,
} from "@/lib/shared/schemaTypes";
import { buildMetadata } from "@/lib/shared/metadata";
import {
  buildCrossSell,
  buildPartnerRouting,
  buildRetraiteData,
} from "./routing";
import type {
  RetraiteAnswers,
  RetraitePersona,
  RetraiteScoreResult,
} from "./types";
import { buildVerdictSummary, type RetraiteVerdict } from "./verdicts";

export interface BuildRetraitePayloadInput {
  leadId: string;
  contact: Contact;
  consent: Consent;
  answers: RetraiteAnswers;
  persona: RetraitePersona;
  score: RetraiteScoreResult;
  verdict: RetraiteVerdict;
  priority: Priority;
  sessionStartTs: number;
  completionPath: "linear" | "non_linear";
}

function assertContract(consent: Consent, priority: Priority, phone?: string) {
  if (!consent.rgpd_accepted) {
    throw new Error("RGPD consent is required before submission");
  }
  if ((priority === "hot" || priority === "very_hot") && !phone) {
    throw new Error(
      `Telephone is required for priority "${priority}" submissions`
    );
  }
}

export function buildRetraitePayload(
  input: BuildRetraitePayloadInput
): WebhookPayloadV1 {
  assertContract(input.consent, input.priority, input.contact.telephone);

  return {
    schema_version: "1.0",
    funnel_id: "retraite",
    lead_id: input.leadId,
    submitted_at: new Date().toISOString(),
    contact: input.contact,
    consent: input.consent,
    verdict: {
      type: "fiscal_loss",
      score: input.score.perte_annuelle_3a,
      tier: input.verdict.tier,
      label: input.verdict.label,
      summary: buildVerdictSummary(input.persona, input.score),
    },
    persona: { code: input.persona.code, label: input.persona.label },
    priority: input.priority,
    answers: { ...input.answers } as Record<string, string>,
    partner_routing: buildPartnerRouting(input.persona.code, input.priority),
    cross_sell: buildCrossSell(input.persona.code),
    metadata: buildMetadata({
      sessionStartTs: input.sessionStartTs,
      completionPath: input.completionPath,
    }),
    retraite_data: buildRetraiteData(input.answers, input.score),
  };
}
