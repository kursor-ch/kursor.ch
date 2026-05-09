"use client";

import { useState } from "react";
import Link from "next/link";
import { sendSoftExitWebhook } from "@/lib/shared/webhookClient";
import type { SoftExitPayload } from "@/lib/shared/schemaTypes";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#EDE9FE";
const ACCENT_HOVER = "#6D28D9";

type Reason = SoftExitPayload["soft_exit_reason"];

interface NewsletterCaptureProps {
  reason: Reason;
  applicable: SoftExitPayload["applicable_funnels"];
  helper: string;
}

function NewsletterCapture({ reason, applicable, helper }: NewsletterCaptureProps) {
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
      funnel_id: "retraite",
      soft_exit_reason: reason,
      contact: { prenom: prenom || undefined, email },
      consent: { rgpd_accepted: true, newsletter_optin: newsletterOptin },
      applicable_funnels: applicable,
      submitted_at: new Date().toISOString(),
    });
    setStatus("done");
  };

  if (status === "done") {
    return (
      <p className="text-sm font-body" style={{ color: ACCENT }}>
        Merci — nous vous tenons informé dès qu&apos;un contenu pertinent est
        publié.
      </p>
    );
  }

  return (
    <>
      <p className="text-sm text-gray-500 font-body mb-4">{helper}</p>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Prénom (optionnel)"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none transition-colors"
          onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E7E5E4")}
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-[#E7E5E4] bg-white text-[15px] font-body focus:outline-none transition-colors"
          onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E7E5E4")}
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
            Je souhaite recevoir la newsletter Kursor (désinscription en 1
            clic).
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
            J&apos;accepte que Kursor CH traite mon email pour me recontacter.
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
  );
}

// ===========================================================================
// Soft exit 1: sans_activite (Q1) — cross-sell Assurances + newsletter
// ===========================================================================
export function SoftExitSansActivite() {
  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] font-body mb-4"
          style={{
            backgroundColor: "var(--funnel-accent-soft, #EDE9FE)",
            color: "var(--funnel-accent, #7C3AED)",
          }}
        >
          Autre priorité
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-3">
          Merci pour votre réponse.
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          Notre audit prévoyance est conçu pour les actifs en Suisse (salariés,
          indépendants, frontaliers). Votre situation nécessite un
          accompagnement différent — mais vous pourriez être intéressé par
          notre Audit Assurances, utile dans toutes les situations.
        </p>
      </div>

      <div className="rounded-xl border-2 border-stone-200 p-5 bg-white">
        <p className="text-sm text-gray-700 font-body leading-relaxed mb-4">
          L&apos;audit assurances identifie votre surcoût annuel LAMal, vos
          trous de couverture et les leviers d&apos;optimisation immédiats —
          pertinents pour tout résident suisse.
        </p>
        <Link
          href="/assurance"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT)
          }
        >
          Faire l&apos;Audit Assurances →
        </Link>
      </div>

      <div className="border-t border-stone-200 pt-6">
        <NewsletterCapture
          reason="sans_activite"
          applicable={["assurance"]}
          helper="Ou recevez nos prochains guides Kursor par email."
        />
      </div>
    </div>
  );
}

// ===========================================================================
// Soft exit 2: pre_retraite (likely >60) — gentle direct CTA to Nathan
// ===========================================================================
export function SoftExitPreRetraite() {
  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] font-body mb-4"
          style={{
            backgroundColor: "var(--funnel-accent-soft, #EDE9FE)",
            color: "var(--funnel-accent, #7C3AED)",
          }}
        >
          Stratégie pré-retraite
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-3">
          Votre horizon demande un audit personnalisé.
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          Les stratégies d&apos;optimisation pré-retraite diffèrent
          significativement des optimisations long terme : retraits en capital,
          arbitrage entre rente et retrait, rachats LPP dans les 3 dernières
          années, fiscalité du départ. Nous vous recommandons un échange direct
          avec un spécialiste plutôt qu&apos;un calcul automatisé qui ne
          capturerait pas ces subtilités.
        </p>
      </div>

      <div className="rounded-xl border-2 border-stone-200 p-5 bg-white space-y-4">
        <p className="text-sm text-gray-700 font-body leading-relaxed">
          Un spécialiste indépendant peut analyser votre situation complète —
          LPP, 3a, AVS, rachats résiduels, fiscalité du retrait — en 30 minutes
          gratuitement.
        </p>
        <a
          href="https://calendly.com/sav-gcconsulting/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT)
          }
        >
          Réserver un échange gratuit →
        </a>
        <p className="text-xs text-gray-400">
          Confidentiel · Sans engagement · Données hébergées en Suisse
        </p>
      </div>

      <div className="border-t border-stone-200 pt-6">
        <NewsletterCapture
          reason="pre_retraite"
          applicable={["assurance"]}
          helper="Ou recevez nos guides pré-retraite par email."
        />
      </div>
    </div>
  );
}

// ===========================================================================
// Soft exit 3: jeune_horizon (likely <25) — educational + newsletter
// ===========================================================================
export function SoftExitJeuneHorizon() {
  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] font-body mb-4"
          style={{
            backgroundColor: "var(--funnel-accent-soft, #EDE9FE)",
            color: "var(--funnel-accent, #7C3AED)",
          }}
        >
          Le temps est votre allié
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-3">
          Vous avez le temps devant vous.
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          À votre horizon, la première étape est de comprendre le système, pas
          d&apos;optimiser à la marge. Les montants en jeu sont encore modestes,
          mais chaque année de 3a ouvert tôt compte — l&apos;effet cumul sur
          40 ans transforme 7 258 CHF annuels en plus de 500 000 CHF à la
          retraite.
        </p>
      </div>

      <div className="rounded-xl border-2 border-stone-200 p-5 bg-white">
        <p className="text-sm text-gray-700 font-body leading-relaxed mb-4">
          Nous préparons un guide complet&nbsp;: les 3 piliers, comment ouvrir
          un 3a, quand commencer, comment choisir sa caisse. Inscrivez-vous
          pour être notifié à sa publication.
        </p>
      </div>

      <div>
        <NewsletterCapture
          reason="jeune_horizon"
          applicable={["emploi", "logement"]}
          helper="Recevez le guide dès publication."
        />
      </div>
    </div>
  );
}
