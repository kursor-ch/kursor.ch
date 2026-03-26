import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Emploi — Kursor CH",
  description:
    "Évaluez la viabilité de votre projet d'expatriation professionnelle en Suisse. Diagnostic gratuit en 2 minutes.",
};

const DiagnosticApp = dynamic(
  () => import("@/components/diagnostic/DiagnosticApp"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function EmploiPage() {
  return <DiagnosticApp />;
}
