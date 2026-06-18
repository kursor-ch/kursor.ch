import type { SoftExitPayload, WebhookPayloadV1 } from "./schemaTypes";

const PENDING_PREFIX = "kursor_pending_submission_";

function getMainWebhookUrl(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_WEBHOOK_URL ||
    undefined
  );
}

function getSoftExitWebhookUrl(): string | undefined {
  return process.env.NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL || undefined;
}

async function postJson(url: string, body: string): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function readLeadIdFromResponse(res: Response): Promise<string | undefined> {
  try {
    const json = (await res.clone().json()) as { lead_id?: unknown };
    if (typeof json.lead_id === "string" && json.lead_id.length > 0) {
      return json.lead_id;
    }
  } catch {
    // Réponse non-JSON ou vide — c'est OK, n8n peut ne pas renvoyer de body.
  }
  return undefined;
}

export interface SendWebhookResult {
  ok: boolean;
  leadId?: string;
}

// Webhook diagnostic principal. POST vers NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL
// (fallback NEXT_PUBLIC_WEBHOOK_URL). On non-200, retry une fois après 2s.
// À la seconde échec, persiste le body dans localStorage sous
// kursor_pending_submission_{pendingKey} pour flush au prochain mount.
// `pendingKey` est un identifiant côté front (jamais transmis) qui sert
// uniquement de clé de cache local. En cas de succès, on tente de lire un
// `lead_id` dans la réponse — c'est n8n qui le génère / le renumérote.
export async function sendWebhook(
  payload: WebhookPayloadV1,
  pendingKey: string
): Promise<SendWebhookResult> {
  const url = getMainWebhookUrl();
  if (!url) return { ok: false };

  const body = JSON.stringify(payload);
  const storageKey = `${PENDING_PREFIX}${pendingKey}`;

  try {
    const first = await postJson(url, body);
    if (first.ok) {
      if (typeof window !== "undefined") {
        localStorage.removeItem(storageKey);
      }
      const leadId = await readLeadIdFromResponse(first);
      return { ok: true, leadId };
    }
    throw new Error(`HTTP ${first.status}`);
  } catch {
    await wait(2000);
    try {
      const second = await postJson(url, body);
      if (second.ok) {
        if (typeof window !== "undefined") {
          localStorage.removeItem(storageKey);
        }
        const leadId = await readLeadIdFromResponse(second);
        return { ok: true, leadId };
      }
      throw new Error(`HTTP ${second.status}`);
    } catch {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(storageKey, body);
        } catch {
          // Quota dépassé / storage désactivé — on ne casse pas le flux.
        }
      }
      return { ok: false };
    }
  }
}

// Capture soft-exit légère vers un endpoint n8n distinct. Best-effort :
// pas de retry, pas de localStorage. Silent no-op si l'env var est absente.
export async function sendSoftExitWebhook(
  payload: SoftExitPayload
): Promise<boolean> {
  const url = getSoftExitWebhookUrl();
  if (!url) return false;

  try {
    const res = await postJson(url, JSON.stringify(payload));
    return res.ok;
  } catch {
    return false;
  }
}

// Flush les payloads persistés pendant une session offline/échec précédente.
// Appelé une fois au mount de chaque App.
export function retryPendingWebhooks(): void {
  if (typeof window === "undefined") return;
  const url = getMainWebhookUrl();
  if (!url) return;

  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(PENDING_PREFIX)) keys.push(key);
  }

  for (const key of keys) {
    const body = localStorage.getItem(key);
    if (!body) continue;
    postJson(url, body)
      .then((res) => {
        if (res.ok) localStorage.removeItem(key);
      })
      .catch(() => {
        // Re-tente au prochain mount.
      });
  }
}
