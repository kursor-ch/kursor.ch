import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Logement — Kursor CH",
  description:
    "Estimez la difficulté de votre recherche de logement en Suisse romande. Diagnostic gratuit en 2 minutes.",
};

const LogementApp = dynamic(
  () => import("@/components/logement/LogementApp"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function LogementPage() {
  return <LogementApp />;
}
