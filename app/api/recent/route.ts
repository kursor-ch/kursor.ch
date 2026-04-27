import { NextResponse } from "next/server";

export const revalidate = 300;

interface RecentResponse {
  minutes_ago: number;
  canton: string;
  funnel: string;
}

const FUNNEL_LABELS: Record<string, string> = {
  emploi: "Emploi",
  logement: "Logement",
  assurance: "Assurances",
  retraite: "Retraite",
  entrepreneur: "Entrepreneur",
};

function noContent() {
  return new NextResponse(null, { status: 204 });
}

export async function GET() {
  const token = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) {
    return noContent();
  }

  try {
    const params = new URLSearchParams();
    params.append("sort[0][field]", "created_at");
    params.append("sort[0][direction]", "desc");
    params.append("pageSize", "1");
    params.append("fields[]", "created_at");
    params.append("fields[]", "canton");
    params.append("fields[]", "funnel_id");

    const url = `https://api.airtable.com/v0/${baseId}/Leads?${params.toString()}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return noContent();
    }

    const data = (await res.json()) as {
      records?: Array<{ fields?: Record<string, unknown> }>;
    };

    const fields = data.records?.[0]?.fields;
    if (!fields) return noContent();

    const createdAtRaw = fields.created_at;
    const cantonRaw = fields.canton;
    const funnelIdRaw = fields.funnel_id;

    if (
      typeof createdAtRaw !== "string" ||
      typeof cantonRaw !== "string" ||
      typeof funnelIdRaw !== "string"
    ) {
      return noContent();
    }

    const createdAt = Date.parse(createdAtRaw);
    if (Number.isNaN(createdAt)) return noContent();

    const minutesAgo = Math.max(0, Math.floor((Date.now() - createdAt) / 60000));
    const funnelLabel = FUNNEL_LABELS[funnelIdRaw.toLowerCase()] ?? funnelIdRaw;

    return NextResponse.json<RecentResponse>({
      minutes_ago: minutesAgo,
      canton: cantonRaw,
      funnel: funnelLabel,
    });
  } catch (err) {
    console.error("[/api/recent] Airtable fetch failed", err);
    return noContent();
  }
}
