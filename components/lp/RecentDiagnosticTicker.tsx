"use client";

import { useEffect, useState } from "react";
import { KBullet } from "@/components/shared/KBullet";

interface RecentData {
  minutes_ago: number;
  canton: string;
  funnel: string;
}

function formatTimeAgo(minutes: number): string {
  if (minutes < 60) return `il y a ${minutes} minute${minutes === 1 ? "" : "s"}`;
  if (minutes < 1440) {
    const h = Math.floor(minutes / 60);
    return `il y a ${h}h`;
  }
  const days = Math.floor(minutes / 1440);
  return `il y a ${days} jour${days === 1 ? "" : "s"}`;
}

export function RecentDiagnosticTicker() {
  const [data, setData] = useState<RecentData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/recent")
      .then(async (res) => {
        if (res.status !== 200) return null;
        try {
          return (await res.json()) as RecentData;
        } catch {
          return null;
        }
      })
      .then((parsed) => {
        if (!cancelled && parsed && typeof parsed.minutes_ago === "number") {
          setData(parsed);
        }
      })
      .catch(() => {
        // silent fail per spec
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) return null;

  return (
    <section
      className="bg-creme"
      style={{ paddingTop: 18, paddingBottom: 18 }}
      aria-label="Dernier diagnostic complété"
    >
      <p
        className="font-body mx-auto px-6 flex flex-wrap items-center justify-center"
        style={{
          fontSize: 13,
          color: "#6B7280",
          maxWidth: 900,
          lineHeight: 1.6,
          textAlign: "center",
          gap: 0,
        }}
      >
        <span className="recent-ticker-dot" aria-hidden="true" />
        <span>Dernier diagnostic complété {formatTimeAgo(data.minutes_ago)}</span>
        <KBullet size={10} />
        <span>{data.canton}</span>
        <KBullet size={10} />
        <span>{data.funnel}</span>
      </p>
    </section>
  );
}
