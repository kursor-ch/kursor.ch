import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon } from "@/components/ui/ServiceIcons";

export const metadata: Metadata = {
  title: "Audit Assurances — Kursor CH",
  description:
    "Audit LAMal, complémentaires, perte de gain et RC privée pour résidents et frontaliers. Bientôt disponible.",
};

export default function AssurancePage() {
  return (
    <main
      className="min-h-[calc(100vh-60px)] flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#FDFAF5" }}
    >
      <div className="max-w-xl w-full text-center">
        <div
          className="mx-auto mb-6 flex items-center justify-center"
          style={{
            width: 64,
            height: 64,
            backgroundColor: "rgba(217,119,6,0.08)",
            border: "1px solid rgba(217,119,6,0.18)",
            borderRadius: 14,
          }}
        >
          <ShieldCheckIcon size={32} />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] bg-gray-100 text-gray-500 font-body mb-5">
          Bientôt disponible
        </span>

        <h1 className="font-heading text-[32px] sm:text-[40px] font-semibold text-[#0F172A] leading-[1.15] tracking-[-0.01em] mb-4">
          Audit Assurances
        </h1>

        <p className="text-[15px] sm:text-base text-gray-500 font-body leading-relaxed max-w-md mx-auto mb-8">
          Identifiez simultanément combien vous surpayez et où vous n&apos;êtes
          pas couvert&nbsp;: LAMal, complémentaires, perte de gain, RC privée.
          Cet audit arrive prochainement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/emploi"
            className="inline-flex items-center justify-center rounded-xl bg-amber text-white font-semibold px-6 py-3.5 shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            Faire le Diagnostic Emploi →
          </Link>
          <Link
            href="/#outils"
            className="inline-flex items-center justify-center rounded-full border-2 border-stone-300 text-gray-600 font-semibold px-6 py-3 hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
          >
            Voir tous les outils
          </Link>
        </div>
      </div>
    </main>
  );
}
