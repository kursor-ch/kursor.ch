import { Answers, ScoreBreakdown } from "./scoring";

const STORAGE_KEY = "kursor_pending_lead";

export interface WebhookPayload {
  funnel_id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  score_total: number;
  score_profil: number;
  score_projet: number;
  score_financier: number;
  score_preparation: number;
  verdict: string;
  answers: Answers;
  opt_in_partners: boolean;
  consent: boolean;
  timestamp: string;
}

export function buildPayload(
  contact: { prenom: string; nom: string; email: string; telephone: string },
  scores: ScoreBreakdown,
  verdict: string,
  answers: Answers,
  optInPartners: boolean
): WebhookPayload {
  return {
    funnel_id: "work",
    prenom: contact.prenom,
    nom: contact.nom,
    email: contact.email,
    telephone: contact.telephone,
    score_total: scores.total,
    score_profil: scores.profil,
    score_projet: scores.projet,
    score_financier: scores.financier,
    score_preparation: scores.preparation,
    verdict,
    answers,
    opt_in_partners: optInPartners,
    consent: true,
    timestamp: new Date().toISOString(),
  };
}

export async function sendWebhook(payload: WebhookPayload): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!url) return false;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Webhook failed");

    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return false;
  }
}

export function retryPendingWebhook(): void {
  const pending = localStorage.getItem(STORAGE_KEY);
  if (!pending) return;

  const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (!url) return;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: pending,
  })
    .then((response) => {
      if (response.ok) localStorage.removeItem(STORAGE_KEY);
    })
    .catch(() => {});
}
