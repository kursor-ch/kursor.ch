const STORAGE_KEY = "kursor_attribution";

export type Attribution = {
  source: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  referrer: string | null;
  landing_page: string;
  captured_at: string;
};

function resolveSource(
  utmSource: string | null,
  referrer: string | null
): string {
  // UTM prime : seul signal fiable pour TikTok (le navigateur in-app de
  // TikTok masque souvent le referrer).
  if (utmSource) return utmSource.toLowerCase();
  if (!referrer) return "direct";
  const r = referrer.toLowerCase();
  if (r.includes("google.")) return "google_organic";
  if (r.includes("tiktok.")) return "tiktok";
  if (
    r.includes("bing.") ||
    r.includes("duckduckgo") ||
    r.includes("ecosia") ||
    r.includes("yahoo")
  ) {
    return "search_other";
  }
  return "referral";
}

// First-touch : on ne réécrit jamais une attribution déjà capturée.
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source");
  const referrer = document.referrer || null;

  const attribution: Attribution = {
    source: resolveSource(utm_source, referrer),
    utm_source,
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    referrer,
    landing_page: window.location.pathname,
    captured_at: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}
