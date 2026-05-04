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

// Main diagnostic webhook. POST to NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL (fallback
// NEXT_PUBLIC_WEBHOOK_URL). On non-200, retry once after 2s. On second
// failure, persist to localStorage under kursor_pending_submission_{lead_id}
// for flush on next page load.
export async function sendWebhook(
  payload: WebhookPayloadV1,
  leadId: string
): Promise<boolean> {
  const url = getMainWebhookUrl();
  if (!url) {
    console.log("[webhook] no URL configured — skipping submission", { leadId });
    return false;
  }

  const body = JSON.stringify(payload);
  const storageKey = `${PENDING_PREFIX}${leadId}`;

  console.log("[webhook] POST", { url, leadId, funnel: payload.funnel_id });

  try {
    const first = await postJson(url, body);
    console.log("[webhook] response (attempt 1)", { url, status: first.status, ok: first.ok });
    if (first.ok) {
      if (typeof window !== "undefined") {
        localStorage.removeItem(storageKey);
      }
      return true;
    }
    throw new Error(`HTTP ${first.status}`);
  } catch {
    await wait(2000);
    try {
      const second = await postJson(url, body);
      console.log("[webhook] response (attempt 2)", { url, status: second.status, ok: second.ok });
      if (second.ok) {
        if (typeof window !== "undefined") {
          localStorage.removeItem(storageKey);
        }
        return true;
      }
      throw new Error(`HTTP ${second.status}`);
    } catch {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(storageKey, body);
        } catch {
          // Storage quota exceeded or disabled — swallow.
        }
      }
      return false;
    }
  }
}

// Lightweight soft-exit capture. Fires to a separate n8n endpoint so the
// main schema stays clean. Silent no-op if the env var is unset (feature
// flagged off). No retry, no localStorage — this is best-effort.
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

// Flush any webhook submissions that were persisted during a previous
// session's offline/failure state. Called once on app mount.
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
        // Swallow — will retry on next mount.
      });
  }
}
