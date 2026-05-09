import type {
  AssuranceData,
  Consent,
  Contact,
  FrontalierData,
  Priority,
  WebhookPayloadV1,
} from "@/lib/shared/schemaTypes";
import { buildMetadata } from "@/lib/shared/metadata";
import {
  buildAssuranceDataResident,
  buildCrossSell,
  buildPartnerRouting,
} from "./routing";
import type {
  AssuranceAnswersFrontalier,
  AssuranceAnswersResident,
  AssurancePersona,
  FrontalierComparatif,
  SurcoutResult,
  TrouDeCouverture,
} from "./types";
import type { AssuranceVerdict } from "./verdicts";

export interface BuildAssurancePayloadResidentInput {
  leadId: string;
  contact: Contact;
  consent: Consent;
  answers: AssuranceAnswersResident;
  persona: AssurancePersona;
  surcout: SurcoutResult;
  trous: TrouDeCouverture[];
  verdict: AssuranceVerdict;
  priority: Priority;
  sessionStartTs: number;
  completionPath: "linear" | "non_linear";
}

export interface BuildAssurancePayloadFrontalierInput {
  leadId: string;
  contact: Contact;
  consent: Consent;
  answers: AssuranceAnswersFrontalier;
  persona: AssurancePersona;
  comparatif: FrontalierComparatif;
  trous: TrouDeCouverture[];
  verdict: AssuranceVerdict;
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

function summaryResident(
  persona: AssurancePersona,
  surcout: SurcoutResult,
  trous: TrouDeCouverture[]
): string {
  const critiques = trous.filter((t) => t.severity === "CRITIQUE").length;
  const trouStr =
    critiques > 0 ? `, ${critiques} trou(s) critique(s)` : "";
  return `Profil ${persona.label} — surcoût annuel estimé ${surcout.total_annuel.toLocaleString("fr-CH")} CHF${trouStr}.`;
}

function summaryFrontalier(
  persona: AssurancePersona,
  comparatif: FrontalierComparatif
): string {
  const reco =
    comparatif.recommandation === "audit_approfondi"
      ? "audit approfondi nécessaire"
      : `recommandation : ${comparatif.recommandation.toUpperCase()}`;
  const piege = comparatif.piege_n2 ? ", piège N-2 détecté" : "";
  return `Profil ${persona.label} — ${reco}${piege}.`;
}

export function buildAssurancePayloadResident(
  input: BuildAssurancePayloadResidentInput
): WebhookPayloadV1 {
  assertContract(input.consent, input.priority, input.contact.telephone);

  const assuranceDataFields = buildAssuranceDataResident(
    input.answers,
    input.surcout,
    input.trous
  );
  const assurance_data: AssuranceData = {
    branch: "resident",
    ...assuranceDataFields,
  };

  return {
    schema_version: "1.0",
    funnel_id: "assurance",
    lead_id: input.leadId,
    submitted_at: new Date().toISOString(),
    contact: input.contact,
    consent: input.consent,
    verdict: {
      type: "coverage_audit",
      score: {
        surcout_annuel_chf: input.surcout.total_annuel,
        trous_couverture_count: input.trous.length,
      },
      tier: input.verdict.tier,
      label: input.verdict.label,
      summary: summaryResident(input.persona, input.surcout, input.trous),
    },
    persona: { code: input.persona.code, label: input.persona.label },
    priority: input.priority,
    // q8_complementaires is a multi-select array internally — flatten to a
    // comma-separated string for the v1.0 webhook contract (`answers` is
    // Record<string, string>). n8n splits on comma to recover the array.
    answers: flattenResidentAnswers(input.answers),
    partner_routing: buildPartnerRouting(
      input.persona.code,
      input.priority,
      input.trous
    ),
    cross_sell: buildCrossSell(input.persona.code),
    metadata: buildMetadata({
      sessionStartTs: input.sessionStartTs,
      completionPath: input.completionPath,
    }),
    assurance_data,
  };
}

function flattenResidentAnswers(
  a: AssuranceAnswersResident
): Record<string, string> {
  return {
    q1_statut: a.q1_statut,
    q2_canton: a.q2_canton,
    q3_famille: a.q3_famille,
    q4_caisse: a.q4_caisse,
    q5_franchise: a.q5_franchise,
    q6_modele: a.q6_modele,
    q7_ijm: a.q7_ijm,
    q8_complementaires: a.q8_complementaires.join(","),
  };
}

function frontalierDecisionWindow(
  qf1: AssuranceAnswersFrontalier["qf1_droit_option"]
): FrontalierData["decision_window_status"] {
  switch (qf1) {
    case "dans_3mois":
      return "in_window_3m";
    case "depasse_affilie_office":
      return "window_expired_lamal_default";
    case "choisi_lamal":
      return "chose_lamal_installed";
    case "choisi_cmu":
      return "chose_cmu_installed";
    case "ne_sais_pas":
      return "unknown";
  }
}

function frontalierRfrBracket(
  qf3: AssuranceAnswersFrontalier["qf3_rfr"]
): FrontalierData["rfr_n_minus_2_eur_bracket"] {
  switch (qf3) {
    case "moins_15k":
      return "lt15k";
    case "15k_30k":
      return "15k_30k";
    case "30k_50k":
      return "30k_50k";
    case "50k_80k":
      return "50k_80k";
    case "plus_80k":
      return "gt80k";
    case "ne_sais_pas":
      return "unknown";
  }
}

function frontalierSalaryBracket(
  qf4: AssuranceAnswersFrontalier["qf4_salaire"]
): FrontalierData["swiss_salary_chf_bracket"] {
  switch (qf4) {
    case "moins_60k":
      return "lt60k";
    case "60k_100k":
      return "60k_100k";
    case "100k_150k":
      return "100k_150k";
    case "plus_150k":
      return "gt150k";
  }
}

function frontalierCoverage(
  qf5: AssuranceAnswersFrontalier["qf5_couverture"]
): FrontalierData["current_coverage"] {
  switch (qf5) {
    case "lamal_frontalier":
      return "lamal_active";
    case "cmu":
      return "cmu_active";
    case "rien_dans_3mois":
      return "none_pending";
    case "rien_depasse":
      return "none_expired";
  }
}

function frontalierZone(
  qf6: AssuranceAnswersFrontalier["qf6_acces_soins"]
): FrontalierData["residence_zone"] {
  switch (qf6) {
    case "frontaliere_consulte_france":
      return "frontalier_proche_consult_fr";
    case "frontaliere_consulte_suisse":
      return "frontalier_proche_consult_ch";
    case "loin_frontiere":
      return "frontalier_loin_consult_fr";
    case "en_installation":
      return "installation_en_cours";
  }
}

export function buildAssurancePayloadFrontalier(
  input: BuildAssurancePayloadFrontalierInput
): WebhookPayloadV1 {
  assertContract(input.consent, input.priority, input.contact.telephone);

  const frontalier_data: FrontalierData = {
    decision_window_status: frontalierDecisionWindow(
      input.answers.qf1_droit_option
    ),
    rfr_n_minus_2_eur_bracket: frontalierRfrBracket(input.answers.qf3_rfr),
    swiss_salary_chf_bracket: frontalierSalaryBracket(input.answers.qf4_salaire),
    current_coverage: frontalierCoverage(input.answers.qf5_couverture),
    residence_zone: frontalierZone(input.answers.qf6_acces_soins),
  };

  // Surcoût equivalent for the coverage_audit score: use the LAMal-minus-CMU
  // projected absolute delta as the magnitude of the decision at stake.
  const deltaAnnuel = Math.abs(
    input.comparatif.cout_lamal_annuel - input.comparatif.cout_cmu_projete
  );

  const assurance_data: AssuranceData = {
    branch: "frontalier",
    current_caisse_known:
      input.answers.qf5_couverture !== "rien_dans_3mois" &&
      input.answers.qf5_couverture !== "rien_depasse",
    franchise_chf: null,
    model: "unknown",
    ijm_status: "unknown",
    complementaires_count: 0,
    estimated_surcout_annuel_chf: deltaAnnuel,
    trous_couverture_identified: input.trous.map((t) => t.id),
  };

  return {
    schema_version: "1.0",
    funnel_id: "assurance",
    lead_id: input.leadId,
    submitted_at: new Date().toISOString(),
    contact: input.contact,
    consent: input.consent,
    verdict: {
      type: "coverage_audit",
      score: {
        surcout_annuel_chf: deltaAnnuel,
        trous_couverture_count: input.trous.length,
      },
      tier: input.verdict.tier,
      label: input.verdict.label,
      summary: summaryFrontalier(input.persona, input.comparatif),
    },
    persona: { code: input.persona.code, label: input.persona.label },
    priority: input.priority,
    answers: { ...input.answers } as Record<string, string>,
    partner_routing: buildPartnerRouting(
      input.persona.code,
      input.priority,
      input.trous
    ),
    cross_sell: buildCrossSell(input.persona.code),
    metadata: buildMetadata({
      sessionStartTs: input.sessionStartTs,
      completionPath: input.completionPath,
    }),
    assurance_data,
    frontalier_data,
  };
}
