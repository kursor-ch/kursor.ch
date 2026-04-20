import type {
  Q7Inquietude,
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

// Persona-specific verdict paragraph — adapted to Q7 (inquietude principale).
// Drives the tone of the results page body copy below the data sections.
export function getPersonaVerdictParagraph(
  q7: Q7Inquietude,
  persona: RetraitePersona,
  score: RetraiteScoreResult
): string {
  const rachatSentence =
    score.annees_sans_3a > 0
      ? ` Le rachat rétroactif 2026 vous permet de récupérer jusqu'à ${score.rachat_retroactif_economie.toLocaleString("fr-CH")} CHF d'économies fiscales immédiates sur vos ${score.annees_sans_3a} dernières années.`
      : "";

  switch (q7) {
    case "impots":
      return `Chaque année sans action est une année d'impôts payés inutilement. À ${Math.round(score.taux_marginal * 100)}% de taux marginal, chaque franc versé en 3a vous revient net dans votre poche.${rachatSentence}`;
    case "par_ou_commencer":
      return `La bonne nouvelle : il n'y a qu'une seule action à prendre pour débloquer votre situation — ouvrir un 3a et activer le rachat rétroactif.${rachatSentence} Un spécialiste peut vous accompagner sur la première démarche.`;
    case "niveau_vie":
      return `L'AVS et la LPP ne couvrent en moyenne que 60% de votre dernier salaire. Le 3e pilier et le rachat LPP sont les deux leviers qui permettent de combler ce gap.${rachatSentence}`;
    case "opportunite":
      return `Le rachat rétroactif 3a 2026 est exactement l'opportunité que vous cherchez : jusqu'à 10 ans de cotisations manquées rattrapables, avec une économie fiscale immédiate.${rachatSentence}`;
    case "droits_expat":
      return `En tant qu'expatrié, vos droits acquis sont protégés mais souvent sous-exploités. Le 3a est portable, le rachat rétroactif reste exploitable avant votre départ, et le rachat LPP peut être retiré en capital lors de votre départ de Suisse.${rachatSentence}`;
    case "depart_suisse":
      return `Si vous quittez la Suisse, optimiser maintenant maximise ce que vous emporterez. Un rachat LPP effectué dans les 3 ans avant le départ est récupérable, et le 3a est retirable à l'étranger — chaque franc versé avant le départ sera économisé en impôts.${rachatSentence}`;
  }

  // Exhaustiveness guard — unreachable.
  void persona;
  return "";
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
