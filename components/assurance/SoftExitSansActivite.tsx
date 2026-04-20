"use client";

import { useState } from "react";
import Link from "next/link";
import { sendSoftExitWebhook } from "@/lib/shared/webhookClient";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCENT = "#86A789";
const ACCENT_HOVER = "#6F8E72";

export default function SoftExitSansActivite() {
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
      funnel_id: "assurance",
      soft_exit_reason: "sans_activite",
      contact: { prenom: prenom || undefined, email },
      consent: { rgpd_accepted: true, newsletter_optin: newsletterOptin },
      applicable_funnels: ["retraite"],
      submitted_at: new Date().toISOString(),
    });
    setStatus("done");
  };

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] font-body mb-4"
          style={{ backgroundColor: "#E6EFE6", color: ACCENT }}
        >
          Autre priorité
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-3">
          Merci pour vos réponses.
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          Notre audit assurances est conçu pour les actifs en Suisse (salariés,
          indépendants, frontaliers). Votre situation nécessite un
          accompagnement différent — mais vous pourriez être intéressé par
          notre Audit Retraite.
        </p>
      </div>

      <div className="rounded-xl border-2 border-stone-200 p-5 bg-white">
        <p className="text-sm text-gray-700 font-body leading-relaxed mb-4">
          Si vous préparez votre retraite ou si vous êtes expatrié de retour
          en France, l&apos;optimisation du 2e pilier suisse (LPP) et le rachat
          rétroactif 3a peuvent représenter plusieurs dizaines de milliers de
          francs.
        </p>
        <Link
          href="/retraite"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT)
          }
        >
          Faire l&apos;Audit Retraite →
        </Link>
      </div>

      <div className="border-t border-stone-200 pt-6">
        {status === "done" ? (
          <p className="text-sm font-body" style={{ color: ACCENT }}>
            Merci — nous vous tenons informé dès qu&apos;un audit pertinent est
            disponible pour votre situation.
          </p>
        ) : (
          <>
            <p className="text-sm text-gray-500 font-body mb-4">
              Ou recevez nos prochains guides Kursor par email.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Prénom (optionnel)"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none transition-colors"
                onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#E7E5E4")
                }
              />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none transition-colors"
                onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#E7E5E4")
                }
              />
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletterOptin}
                  onChange={(e) => setNewsletterOptin(e.target.checked)}
                  className="mt-0.5"
                  style={{ accentColor: ACCENT }}
                />
                <span className="text-xs text-gray-500 font-body leading-relaxed">
                  Je souhaite recevoir la newsletter Kursor (désinscription en
                  1 clic).
                </span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rgpdAccepted}
                  onChange={(e) => setRgpdAccepted(e.target.checked)}
                  className="mt-0.5"
                  style={{ accentColor: ACCENT }}
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
                className="w-full px-6 py-3 rounded-xl border-2 font-semibold transition-colors duration-200 disabled:opacity-60"
                style={{
                  borderColor: ACCENT,
                  color: ACCENT,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = ACCENT;
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = ACCENT;
                }}
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
