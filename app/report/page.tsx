"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { getVerdict } from "@/lib/verdicts";
import ReportHeader from "@/components/report/ReportHeader";
import ScoreBreakdown from "@/components/report/ScoreBreakdown";
import TierContent from "@/components/report/TierContent";
import RiskCards from "@/components/report/RiskCards";
import PartnerCards from "@/components/report/PartnerCards";
import WarmCTA from "@/components/report/WarmCTA";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

function ReportContent() {
  const searchParams = useSearchParams();

  const prenom = searchParams.get("p") ?? "Candidat";
  const score = parseInt(searchParams.get("s") ?? "0", 10);
  const profil = parseInt(searchParams.get("sp") ?? "0", 10);
  const projet = parseInt(searchParams.get("sj") ?? "0", 10);
  const financier = parseInt(searchParams.get("sf") ?? "0", 10);
  const preparation = parseInt(searchParams.get("sr") ?? "0", 10);

  const verdict = getVerdict(score);

  useEffect(() => {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible("Report Viewed", { props: { funnel: "work" } });
    }
  }, []);

  const handleDownloadPDF = async () => {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible("PDF Downloaded", { props: { funnel: "work" } });
    }

    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("report-content");
    if (!element) return;

    html2pdf()
      .set({
        margin: [10, 10, 10, 10],
        filename: `diagnostic-kursor-${prenom.toLowerCase()}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  if (!searchParams.get("s")) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-heading font-semibold text-gray-900">
            Rapport non trouvé
          </h1>
          <p className="text-gray-500">
            Ce lien ne semble pas contenir de données de diagnostic.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-creme">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12" id="report-content">
        <ReportHeader
          prenom={prenom}
          score={score}
          verdictLabel={verdict.label}
          verdictColor={verdict.color}
          verdictBgLight={verdict.bgLight}
        />
        <ScoreBreakdown
          profil={profil}
          projet={projet}
          financier={financier}
          preparation={preparation}
          verdictColor={verdict.color}
          summary={verdict.summary}
        />
        <TierContent reportContent={verdict.reportContent} />
        <RiskCards />
        <PartnerCards />
        <WarmCTA />
      </div>

      {/* PDF download button — outside the report content div for clean PDF */}
      <div className="max-w-2xl mx-auto px-4 pb-12 text-center">
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:border-amber hover:text-amber transition-colors"
        >
          📄 Télécharger votre rapport en PDF
        </button>
      </div>
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400">Chargement...</p>
        </div>
      }
    >
      <ReportContent />
    </Suspense>
  );
}
