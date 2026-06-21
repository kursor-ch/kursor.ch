import { Answers, ScoreBreakdown } from "./scoring";
import { getAttribution } from "./shared/tracking";

const STORAGE_KEY = "kursor_pending_lead";

export interface OptIns {
  consent: boolean;
  partnerContact: boolean;
}

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
  opt_ins: OptIns;
  consent: boolean;
  timestamp: string;
  acquisition_channel: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  referrer: string | null;
  landing_page: string | null;
}

export function buildPayload(
  contact: { prenom: string; nom: string; email: string; telephone: string },
  scores: ScoreBreakdown,
  verdict: string,
  answers: Answers,
  optIns: OptIns
): WebhookPayload {
  const attribution = getAttribution();

  // Repli sur l'URL courante quand le first-touch localStorage est vide
  // (ex. navigateur in-app TikTok sans storage) — même logique de repli que
  // buildMetadata() côté v1.0 (lib/shared/metadata.ts). On garde null (jamais
  // de chaîne vide) pour les champs absents : "" casse les Single Select Airtable.
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const docReferrer =
    typeof document !== "undefined" ? document.referrer || null : null;

  const utmSource = attribution?.utm_source ?? params.get("utm_source");
  const utmMedium = attribution?.utm_medium ?? params.get("utm_medium");
  const utmCampaign = attribution?.utm_campaign ?? params.get("utm_campaign");
  const utmContent = attribution?.utm_content ?? params.get("utm_content");

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
    opt_ins: optIns,
    consent: optIns.consent,
    timestamp: new Date().toISOString(),
    acquisition_channel: attribution?.source ?? "direct",
    utm_source: utmSource || null,
    utm_medium: utmMedium || null,
    utm_campaign: utmCampaign || null,
    utm_content: utmContent || null,
    referrer: attribution?.referrer ?? docReferrer,
    landing_page: attribution?.landing_page ?? null,
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
