"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pushEvent } from "@/lib/gtm";

export interface RetraiteOptIns {
  rgpd_accepted: boolean;
  partner_share_optin: boolean;
  newsletter_optin: boolean;
  // Consentement explicite pour la transmission à des courtiers et conseillers
  // partenaires Kursor en Suisse (modèle de revente B2B). Décoché par défaut.
  resale_optin: boolean;
}

interface ConsentScreenProps {
  onSubmit: (optIns: RetraiteOptIns) => void;
  onBack: () => void;
}

const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#EDE9FE";
const ACCENT_HOVER = "#6D28D9";

interface ConsentCardProps {
  checked: boolean;
  onToggle: (next: boolean) => void;
  error?: boolean;
  children: React.ReactNode;
}

function ConsentCard({ checked, onToggle, error, children }: ConsentCardProps) {
  return (
    <label
      className="flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm"
      style={{
        borderColor: checked
          ? ACCENT
          : error
            ? "#DC2626"
            : "#E7E5E4",
        backgroundColor: checked
          ? ACCENT_LIGHT
          : error
            ? "#FEF2F2"
            : "#FFFFFF",
      }}
    >
      <div
        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200"
        style={{
          borderColor: checked ? ACCENT : error ? "#DC2626" : "#D1D5DB",
          backgroundColor: checked ? ACCENT : "transparent",
        }}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-800 leading-relaxed font-body">
          {children}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
          className="sr-only"
        />
      </div>
    </label>
  );
}

export default function ConsentScreen({ onSubmit, onBack }: ConsentScreenProps) {
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [partnerShareOptin, setPartnerShareOptin] = useState(false);
  const [resaleOptin, setResaleOptin] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    pushEvent("retraite_consent_shown");
  }, []);

  const handleSubmit = () => {
    if (isSubmitting) return;
    if (!rgpdAccepted) {
      setShowConsentError(true);
      return;
    }
    setIsSubmitting(true);
    onSubmit({
      rgpd_accepted: rgpdAccepted,
      partner_share_optin: partnerShareOptin,
      newsletter_optin: false,
      resale_optin: resaleOptin,
    });
  };

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 -translate-y-1"
            style={{ backgroundColor: ACCENT }}
          />
          Une dernière chose avant vos résultats
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body mt-1">
          Vos données sont traitées de manière confidentielle et hébergées en
          Suisse.
        </p>
      </div>

      <div className="space-y-4">
        {/* RGPD / nLPD — obligatoire */}
        <ConsentCard
          checked={rgpdAccepted}
          onToggle={(next) => {
            setRgpdAccepted(next);
            if (next) setShowConsentError(false);
          }}
          error={showConsentError}
        >
          J&apos;ai lu et j&apos;accepte la{" "}
          <Link
            href="/politique-de-confidentialite"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: ACCENT }}
          >
            politique de confidentialité
          </Link>{" "}
          de Kursor.
          <span className="text-rouge ml-0.5">*</span>
        </ConsentCard>
        {showConsentError && (
          <p className="text-xs text-rouge -mt-2 ml-1">
            Ce consentement est obligatoire pour recevoir votre audit.
          </p>
        )}

        {/* Mise en relation avec le spécialiste primaire — facultatif */}
        <ConsentCard
          checked={partnerShareOptin}
          onToggle={setPartnerShareOptin}
        >
          Je souhaite être mis(e) en relation avec notre spécialiste prévoyance
          indépendant. Gratuit et sans engagement.
        </ConsentCard>

        {/* Revente B2B vers courtiers partenaires — décoché par défaut */}
        <ConsentCard checked={resaleOptin} onToggle={setResaleOptin}>
          J&apos;accepte que mes coordonnées et les résultats de mon diagnostic
          soient transmis à des courtiers et conseillers en prévoyance et
          assurance, partenaires de Kursor en Suisse, afin d&apos;être
          recontacté(e) au sujet de ma situation (3e pilier, rachat,
          optimisation). Je peux retirer ce consentement à tout moment en
          écrivant à equipe@kursor.ch.
        </ConsentCard>

        <p className="text-xs text-rouge ml-1">
          <span>*</span> requis
        </p>
      </div>

      <div className="rounded-lg bg-stone-50 border border-stone-200 p-4">
        <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-gray-500 mb-1 font-body">
          Transparence nLPD
        </p>
        <p className="text-[12px] text-gray-500 leading-relaxed font-body">
          Responsable du traitement : Kursor CH / GC Consulting. Finalité : mise
          en relation avec des courtiers et conseillers partenaires en Suisse
          pour vous accompagner sur le 3e pilier, le rachat rétroactif et
          l&apos;optimisation fiscale. Destinataires : courtiers et conseillers
          partenaires en Suisse. Droits d&apos;accès, de rectification et de
          retrait à tout moment via equipe@kursor.ch.
        </p>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3.5 rounded-full border-2 border-stone-300 text-gray-600 font-semibold hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
        >
          Retour
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="flex-1 px-6 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:hover:scale-100"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) => {
            if (!isSubmitting)
              e.currentTarget.style.backgroundColor = ACCENT_HOVER;
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = ACCENT;
          }}
        >
          {isSubmitting ? "Envoi en cours…" : "Voir mon audit prévoyance →"}
        </button>
      </div>
    </div>
  );
}
