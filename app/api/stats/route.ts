import { NextResponse } from "next/server";

export const revalidate = 3600;

interface StatsResponse {
  total_diagnostics: number;
  last_updated: string;
  source: "live" | "fallback";
}

const FALLBACK_TOTAL = 3247;

function fallbackResponse(): StatsResponse {
  return {
    total_diagnostics: FALLBACK_TOTAL,
    last_updated: new Date().toISOString(),
    source: "fallback",
  };
}

export async function GET() {
  const token = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) {
    return NextResponse.json(fallbackResponse());
  }

  try {
    const url =
      `https://api.airtable.com/v0/${baseId}/Stats?` +
      `filterByFormula=${encodeURIComponent(`{id}="global"`)}&maxRecords=1`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(fallbackResponse());
    }

    const data = (await res.json()) as {
      records?: Array<{ fields?: Record<string, unknown> }>;
    };

    const fields = data.records?.[0]?.fields;
    const total = fields?.total_diagnostics;

    if (typeof total !== "number" || !Number.isFinite(total) || total <= 0) {
      return NextResponse.json(fallbackResponse());
    }

    const lastUpdatedRaw = fields?.last_updated;
    const lastUpdated =
      typeof lastUpdatedRaw === "string" ? lastUpdatedRaw : new Date().toISOString();

    return NextResponse.json<StatsResponse>({
      total_diagnostics: Math.round(total),
      last_updated: lastUpdated,
      source: "live",
    });
  } catch (err) {
    console.error("[/api/stats] Airtable fetch failed", err);
    return NextResponse.json(fallbackResponse());
  }
}
