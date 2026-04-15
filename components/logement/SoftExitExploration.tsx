"use client";

import { useState } from "react";
import Link from "next/link";
import { sendSoftExitWebhook } from "@/lib/shared/webhookClient";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SoftExitExploration() {
  const [email, setEmail] = useState("");
  const [prenom, setPrenom] = useState("");
  const [newsletterOptin, setNewsletterOptin] = useState(true);
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    if (!EMAIL_REGEX.test(email)) {
      setError("Email invalide");
      return;
    }
    if (!rgpdAccepted) {
      setError("Merci d'accepter le traitement de vos données.");
      return;
    }

    setStatus("submitting");
    await sendSoftExitWebhook({
      funnel_id: "logement",
      soft_exit_reason: "exploration",
      contact: { prenom: prenom || undefined, email },
      consent: { rgpd_accepted: true, newsletter_optin: newsletterOptin },
      applicable_funnels: ["emploi"],
      submitted_at: new Date().toISOString(),
    });
    setStatus("done");
  };

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] bg-amber/10 text-amber font-body mb-4">
          D&apos;abord l&apos;emploi, ensuite le logement
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-3">
          Décrochez votre offre suisse avant de chercher un logement.
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          Sans contrat de travail signé, aucune régie ne validera votre
          dossier. Le parcours expatriation se joue dans cet ordre&nbsp;:{" "}
          <strong className="text-gray-900">offre d&apos;abord</strong>,
          logement ensuite. Notre Diagnostic Emploi évalue la viabilité de
          votre projet pro et les secteurs en demande.
        </p>
      </div>

      <Link
        href="/emploi"
        className="inline-flex items-center justify-center w-full rounded-xl bg-amber text-white font-semibold px-6 py-4 shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
      >
        Faire le Diagnostic Emploi →
      </Link>

      <div className="border-t border-stone-200 pt-6">
        {status === "done" ? (
          <p className="text-sm text-vert font-body">
            Merci — on vous partage nos meilleurs contenus emploi Suisse.
          </p>
        ) : (
          <>
            <p className="text-sm text-gray-500 font-body mb-4">
              Ou recevez nos guides emploi pour structurer votre recherche.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Prénom (optionnel)"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none focus:border-amber transition-colors"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none focus:border-amber transition-colors"
              />
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletterOptin}
                  onChange={(e) => setNewsletterOptin(e.target.checked)}
                  className="mt-0.5 accent-amber"
                />
                <span className="text-xs text-gray-500 font-body leading-relaxed">
                  Je souhaite recevoir la newsletter Kursor (désinscription en 1
                  clic).
                </span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rgpdAccepted}
                  onChange={(e) => setRgpdAccepted(e.target.checked)}
                  className="mt-0.5 accent-amber"
                />
                <span className="text-xs text-gray-500 font-body leading-relaxed">
                  J&apos;accepte que Kursor CH traite mon email pour me
                  recontacter.
                </span>
              </label>
              {error && <p className="text-xs text-rouge">{error}</p>}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="w-full px-6 py-3 rounded-xl border-2 border-amber text-amber font-semibold hover:bg-amber hover:text-white transition-colors duration-200 disabled:opacity-60"
              >
                {status === "submitting" ? "Envoi..." : "M'inscrire"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
