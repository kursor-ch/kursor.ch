import type {
  RetraitePersona,
  RetraiteScoreResult,
  RetraiteTier,
} from "./types";

export interface RetraiteVerdict {
  tier: RetraiteTier;
  label: string;
  color: string;
  summary: string;
}

const VERDICTS: Record<RetraiteTier, Omit<RetraiteVerdict, "tier">> = {
  negligeable: {
    label: "Situation optimisée",
    color: "#15803D",
    summary:
      "Votre setup prévoyance est globalement solide. Quelques ajustements mineurs peuvent affiner votre plan.",
  },
  significatif: {
    label: "Optimisation accessible",
    color: "#7C3AED",
    summary:
      "Une marge d'optimisation nette est disponible. Chaque année sans action laisse plusieurs milliers de francs sur la table.",
  },
  eleve: {
    label: "Perte fiscale élevée",
    color: "#D97706",
    summary:
      "Votre configuration actuelle génère une perte fiscale significative chaque année — et le rachat rétroactif 2026 permet d'inverser la tendance immédiatement.",
  },
  critique: {
    label: "Perte fiscale critique",
    color: "#DC2626",
    summary:
      "Perte fiscale cumulée critique. Sans arbitrage rapide, vous laissez plusieurs dizaines de milliers de francs à l'administration fiscale évitables légalement.",
  },
};

// Thresholds validated with founders — these drive the urgency tone on the
// results page, not a real financial diagnosis (Nathan does that).
export function tierFromScore(score: RetraiteScoreResult): RetraiteTier {
  const loss = score.perte_annuelle_3a;
  if (loss >= 4_500) return "critique";
  if (loss >= 2_000) return "eleve";
  if (loss >= 800) return "significatif";
  return "negligeable";
}

export function getRetraiteVerdict(tier: RetraiteTier): RetraiteVerdict {
  return { tier, ...VERDICTS[tier] };
}

// Persona-specific verdict paragraph. Keyed on persona.code only since Q7
// (inquiétude principale) was dropped from the user-facing flow on 2026-05-09.
// Each variant interpolates score numbers so the paragraph stays specific.
export function getPersonaVerdictParagraph(
  persona: RetraitePersona,
  score: RetraiteScoreResult
): string {
  const tauxPct = Math.round(score.taux_marginal * 100);
  const rachatSentence =
    score.annees_sans_3a > 0
      ? ` Le rachat rétroactif 2026 vous permet de récupérer jusqu'à ${score.rachat_retroactif_economie.toLocaleString("fr-CH")} CHF d'économies fiscales immédiates sur vos ${score.annees_sans_3a} dernières années.`
      : "";

  switch (persona.code) {
    case "A":
      // Ignorant total — premiers pas frame.
      return `Bonne nouvelle : il n'y a qu'une seule action à prendre pour débloquer votre situation — ouvrir un 3a et activer le rachat rétroactif. À ${tauxPct}% de taux marginal, chaque franc versé revient net dans votre poche.${rachatSentence} Un spécialiste peut vous accompagner sur la première démarche.`;
    case "B":
      // Prudent informé — marge d'optimisation frame.
      return `Vous avez engagé l'optimisation, mais une marge nette reste à exploiter. À ${tauxPct}% de taux marginal, chaque franc supplémentaire versé jusqu'au plafond se traduit en économie fiscale immédiate.${rachatSentence}`;
    case "C":
      // Optimisateur — leviers composés.
      return `Votre 3a est en place, mais le rachat rétroactif 2026 et le rachat LPP volontaire restent deux leviers sous-exploités. Combinés à votre taux marginal de ${tauxPct}%, ils représentent l'optimisation fiscale la plus significative encore disponible.${rachatSentence}`;
    case "D":
      // Indépendant abandonné — plafond majoré + IJM.
      return `En tant qu'indépendant, vous bénéficiez du plafond 3a majoré (jusqu'à 36 288 CHF/an, 5× le plafond salarié) — c'est le levier fiscal le plus puissant du code suisse, et il est sous-exploité par 80% des indépendants. Combiné à votre taux marginal de ${tauxPct}%, l'arbitrage 3a + IJM mérite un audit personnalisé.${rachatSentence}`;
  }
}

// Fiscal_loss verdict summary for the webhook payload — one sentence,
// used in email subject and intro.
export function buildVerdictSummary(
  persona: RetraitePersona,
  score: RetraiteScoreResult
): string {
  const perte = score.perte_annuelle_3a.toLocaleString("fr-CH");
  const rachat =
    score.annees_sans_3a > 0
      ? `, ${score.annees_sans_3a} année(s) rattrapables au titre du rachat rétroactif 2026`
      : "";
  return `Profil ${persona.label} — perte fiscale annuelle estimée ${perte} CHF${rachat}.`;
}
