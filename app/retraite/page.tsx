import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Retraite — Kursor CH",
  description:
    "Calculez votre perte fiscale cumulée et découvrez si vous êtes éligible au rachat rétroactif 3a — jusqu'à 10 ans de cotisations rattrapables en 2026. 2 minutes, gratuit, sans engagement.",
};

const RetraiteApp = dynamic(
  () => import("@/components/retraite/RetraiteApp"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function RetraitePage() {
  return <RetraiteApp />;
}
