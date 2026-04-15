import type { CompletionPath, Metadata } from "./schemaTypes";

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
  metadata.referrer = document.referrer || undefined;

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  if (utmSource) metadata.utm_source = utmSource;
  if (utmMedium) metadata.utm_medium = utmMedium;
  if (utmCampaign) metadata.utm_campaign = utmCampaign;

  return metadata;
}
