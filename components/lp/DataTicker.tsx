import { Fragment } from "react";
import { KBullet } from "@/components/shared/KBullet";

interface DataPoint {
  text: string;
  source: string;
}

const DATA_POINTS: DataPoint[] = [
  { text: "Salaire médian Suisse 6 800 CHF/mois", source: "OFS 2024" },
  { text: "Taux de vacance Genève 0,38%", source: "OCSTAT 2025" },
  { text: "Hausse primes LAMal 2026 +6%", source: "OFSP" },
  { text: "Plafond 3a 2026 7 258 CHF", source: "OPP3" },
  { text: "Chômage mars 2026 3,1%", source: "SECO" },
  { text: "Taux de conversion LPP 6,8%", source: "Chiffres-clés 2026" },
  { text: "Franchise LAMal minimum 300 CHF", source: "OFSP" },
  { text: "Salaire max assuré LAA 148 200 CHF", source: "Chiffres-clés 2026" },
];

function TickerItems({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {DATA_POINTS.map((point, i) => (
        <Fragment key={`${keyPrefix}-${i}`}>
          <span className="data-ticker-item">
            <span style={{ color: "#9CA3AF" }}>{point.text}</span>
            <span style={{ color: "#C4B5A0", marginLeft: 6, fontSize: 11 }}>
              ({point.source})
            </span>
          </span>
          <span className="data-ticker-bullet" aria-hidden="true">
            <KBullet size={9} color="#C4B5A0" />
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function DataTicker() {
  return (
    <section
      className="data-ticker"
      aria-label="Statistiques suisses de référence"
    >
      <div className="data-ticker-track font-body">
        <TickerItems keyPrefix="a" />
        <TickerItems keyPrefix="b" />
      </div>
    </section>
  );
}
