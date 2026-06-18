import dynamic from "next/dynamic";
import type { Metadata } from "next";

// LP ciblée 3a — placeholder FR. La copie marketing finalisée est une tâche
// contenu séparée. Le funnel rendu est identique à /retraite ; seule
// l'attribution diffère (metadata.landing_page capturé automatiquement).
export const metadata: Metadata = {
  title: "Rachat rétroactif 3a 2026 — Audit gratuit | Kursor CH",
  description:
    "Estimez en 2 minutes votre perte fiscale annuelle et le montant rattrapable au titre du rachat rétroactif 3a 2026. Gratuit, sans engagement.",
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

export default function RetraiteThreeAPage() {
  return <RetraiteApp />;
}
