import type {
  CrossSell,
  PartnerRouting,
  Priority,
} from "@/lib/shared/schemaTypes";
import type {
  AssuranceAnswersFrontalier,
  AssuranceAnswersResident,
  AssurancePersonaCode,
  SurcoutResult,
  TrouDeCouverture,
} from "./types";

export type AssuranceSoftExitReason = "sans_activite";

export function resolveSoftExit(
  q1_statut: string | undefined
): AssuranceSoftExitReason | null {
  if (q1_statut === "sans_activite") return "sans_activite";
  return null;
}

export function computePriority(
  personaCode: AssurancePersonaCode,
  surcout: SurcoutResult | null,
  trous: TrouDeCouverture[]
): Priority {
  if (personaCode === "D") return "very_hot";
  const hasCritiqueIjm = trous.some(
    (t) => t.severity === "CRITIQUE" && (t.id === "indep_sans_apg" || t.id === "ijm_absente")
  );
  if (personaCode === "C" && hasCritiqueIjm) return "very_hot";
  if (personaCode === "A") return "hot";
  if (personaCode === "E") return "hot";
  if (personaCode === "B" && surcout && surcout.total_annuel > 1500)
    return "hot";
  return "warm";
}

export function founderCallSlaHours(
  personaCode: AssurancePersonaCode,
  hasCritiqueIjm: boolean
): number | null {
  if (personaCode === "D") return 2;
  if (personaCode === "C" && hasCritiqueIjm) return 4;
  return null;
}

export function buildPartnerRouting(
  personaCode: AssurancePersonaCode,
  priority: Priority,
  trous: TrouDeCouverture[]
): PartnerRouting {
  const hasCritiqueIjm = trous.some(
    (t) => t.severity === "CRITIQUE" && (t.id === "indep_sans_apg" || t.id === "ijm_absente")
  );
  const sla = founderCallSlaHours(personaCode, hasCritiqueIjm);
  const isFrontalier = personaCode === "D" || personaCode === "E";

  const routing: PartnerRouting = {
    primary_partner: "nathan_piliercompar",
    partner_products: isFrontalier
      ? ["lamal_cmu_arbitrage", "complementaire"]
      : ["lamal_3a", "complementaire"],
    founder_call_required: sla !== null,
    partner_transmission_sla_hours: 48,
  };
  if (sla !== null) routing.founder_call_sla_hours = sla;
  // Avoid "unused parameter" warning while keeping priority in the signature
  // for future scoring extensions.
  void priority;
  return routing;
}

export function buildCrossSell(
  personaCode: AssurancePersonaCode
): CrossSell {
  // Frontalier personas (D, E) cross-sell to Prévoyance primarily.
  if (personaCode === "D" || personaCode === "E") {
    return {
      applicable_funnels: ["retraite", "logement"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Frontalier — décisions LAMal/CMU et 2e pilier cross-tunnel à arbitrer ensemble.",
    };
  }
  // Résident personas (A, B, C) cross-sell to Logement + Prévoyance.
  if (personaCode === "A") {
    return {
      applicable_funnels: ["logement", "retraite"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Expatrié fraîchement arrivé — levier logement actif et 3a immédiat.",
    };
  }
  if (personaCode === "C") {
    return {
      applicable_funnels: ["retraite"],
      cross_sell_priority: "high",
      cross_sell_reason:
        "Indépendant — LPP facultative et 3a majoré à arbitrer sans délai.",
    };
  }
  return {
    applicable_funnels: ["retraite"],
    cross_sell_priority: "medium",
    cross_sell_reason:
      "Résident installé — optimisation 3a annuelle et rachat LPP à évaluer.",
  };
}

// Maps résident answers to the assurance_data webhook extension.
export function buildAssuranceDataResident(
  answers: AssuranceAnswersResident,
  surcout: SurcoutResult,
  trous: TrouDeCouverture[]
): {
  current_caisse_known: boolean;
  franchise_chf: 300 | 500 | 1000 | 1500 | 2000 | 2500 | null;
  model: "libre" | "medecin_famille" | "hmo" | "telmed" | "unknown";
  ijm_status:
    | "covered_employer_full"
    | "echelle_berne_only"
    | "unknown"
    | "independant_no_ijm"
    | "independant_with_ijm";
  complementaires_count: number;
  estimated_surcout_annuel_chf: number;
  trous_couverture_identified: string[];
} {
  const franchise: 300 | 500 | 1000 | 1500 | 2000 | 2500 | null = (() => {
    switch (answers.q5_franchise) {
      case "300":
        return 300;
      case "500":
        return 500;
      case "1000_1500":
        return 1500;
      case "2000_2500":
        return 2500;
      default:
        return null;
    }
  })();

  const model = (() => {
    switch (answers.q6_modele) {
      case "libre":
      case "medecin_famille":
      case "hmo":
      case "telmed":
        return answers.q6_modele;
      default:
        return "unknown" as const;
    }
  })();

  const ijm_status = (() => {
    switch (answers.q7_ijm) {
      case "ijm_employeur":
        return "covered_employer_full" as const;
      case "echelle_berne":
        return "echelle_berne_only" as const;
      case "independant_sans_ijm":
        return "independant_no_ijm" as const;
      case "independant_avec_ijm":
        return "independant_with_ijm" as const;
      default:
        return "unknown" as const;
    }
  })();

  const complementaires_count = (() => {
    switch (answers.q8_complementaires) {
      case "aucune":
        return 0;
      case "plusieurs":
        return 2;
      case "ne_sais_pas":
        return 0;
      default:
        return 1;
    }
  })();

  const current_caisse_known =
    answers.q4_caisse !== "pas_encore" && answers.q4_caisse !== "moins_1an";

  return {
    current_caisse_known,
    franchise_chf: franchise,
    model,
    ijm_status,
    complementaires_count,
    estimated_surcout_annuel_chf: surcout.total_annuel,
    trous_couverture_identified: trous.map((t) => t.id),
  };
}
