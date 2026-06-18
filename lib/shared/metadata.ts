import type { CompletionPath, Metadata } from "./schemaTypes";
import { getAttribution } from "./tracking";

interface BuildMetadataInput {
  sessionStartTs: number;
  completionPath: CompletionPath;
}

export function buildMetadata({
  sessionStartTs,
  completionPath,
}: BuildMetadataInput): Metadata {
  const metadata: Metadata = {
    source: "kursor.ch",
    completion_path: completionPath,
    session_duration_seconds: Math.max(
      0,
      Math.round((Date.now() - sessionStartTs) / 1000)
    ),
  };

  if (typeof window === "undefined") return metadata;

  metadata.user_agent = window.navigator.userAgent;

  const attribution = getAttribution();
  metadata.acquisition_channel = attribution?.source ?? "direct";

  // First-touch attribution (localStorage) prime sur l'URL courante :
  // si l'utilisateur a atterri via TikTok puis navigué, on garde la source TikTok.
  const params = new URLSearchParams(window.location.search);
  const utmSource = attribution?.utm_source ?? params.get("utm_source");
  const utmMedium = attribution?.utm_medium ?? params.get("utm_medium");
  const utmCampaign = attribution?.utm_campaign ?? params.get("utm_campaign");
  const utmContent = attribution?.utm_content ?? params.get("utm_content");
  const referrer = attribution?.referrer ?? document.referrer ?? null;
  const landingPage = attribution?.landing_page ?? null;

  if (utmSource) metadata.utm_source = utmSource;
  if (utmMedium) metadata.utm_medium = utmMedium;
  if (utmCampaign) metadata.utm_campaign = utmCampaign;
  if (utmContent) metadata.utm_content = utmContent;
  if (referrer) metadata.referrer = referrer;
  if (landingPage) metadata.landing_page = landingPage;

  return metadata;
}
