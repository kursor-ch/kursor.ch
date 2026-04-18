import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Assurances — Kursor CH",
  description:
    "Audit LAMal, complémentaires, perte de gain et RC privée pour résidents et frontaliers. Bientôt disponible.",
};

const AssuranceLanding = dynamic(
  () => import("@/components/assurance/AssuranceLanding"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function AssurancePage() {
  return <AssuranceLanding />;
}
