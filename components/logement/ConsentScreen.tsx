"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pushEvent } from "@/lib/gtm";

export interface LogementOptIns {
  rgpd_accepted: boolean;
  partner_share_optin: boolean;
  newsletter_optin: boolean;
}

interface ConsentScreenProps {
  onSubmit: (optIns: LogementOptIns) => void;
  onBack: () => void;
}

export default function ConsentScreen({ onSubmit, onBack }: ConsentScreenProps) {
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [partnerShareOptin, setPartnerShareOptin] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    pushEvent("logement_consent_shown");
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
    });
  };

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-1" />
          Une dernière chose avant vos résultats
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body mt-1">
          Vos données sont traitées de manière confidentielle et ne sont jamais
          revendues.
        </p>
      </div>

      <div className="space-y-4">
        {/* Mandatory RGPD */}
        <label
          className={`flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm ${
            rgpdAccepted
              ? "border-amber bg-[#FEF3C7] shadow-md"
              : showConsentError
              ? "border-rouge bg-rouge/5"
              : "border-stone-200 hover:border-amber/40 hover:shadow-md"
          }`}
        >
          <div
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              rgpdAccepted
                ? "border-amber bg-amber"
                : showConsentError
                ? "border-rouge"
                : "border-gray-300"
            }`}
          >
            {rgpdAccepted && (
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
          <div>
            <span className="text-sm font-medium text-gray-800 leading-relaxed font-body">
              J&apos;accepte que Kursor CH traite mes données afin de me
              fournir mon estimation et me recontacter.
              <span className="text-rouge ml-0.5">*</span>
            </span>
            <input
              type="checkbox"
              checked={rgpdAccepted}
              onChange={(e) => {
                setRgpdAccepted(e.target.checked);
                if (e.target.checked) setShowConsentError(false);
              }}
              className="sr-only"
            />
          </div>
        </label>
        {showConsentError && (
          <p className="text-xs text-rouge -mt-2 ml-1">
            Ce consentement est obligatoire pour recevoir votre estimation.
          </p>
        )}

        {/* Partner share — RGPD/nLPD requires explicit opt-in: default unchecked */}
        <label
          className={`flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm ${
            partnerShareOptin
              ? "border-amber bg-[#FEF3C7] shadow-md"
              : "border-stone-200 hover:border-amber/40 hover:shadow-md"
          }`}
        >
          <div
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              partnerShareOptin ? "border-amber bg-amber" : "border-gray-300"
            }`}
          >
            {partnerShareOptin && (
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
          <div>
            <span className="text-sm font-medium text-gray-800 leading-relaxed font-body">
              Mettre mon dossier en avant auprès de notre partenaire logement
              exclusif. Gratuit et sans engagement.
            </span>
            <input
              type="checkbox"
              checked={partnerShareOptin}
              onChange={(e) => setPartnerShareOptin(e.target.checked)}
              className="sr-only"
            />
          </div>
        </label>

        <p className="text-xs text-rouge ml-1">
          <span>*</span> requis
        </p>
      </div>

      <p className="text-xs text-gray-400 font-body">
        En soumettant ce formulaire, vous confirmez avoir pris connaissance de
        notre{" "}
        <Link
          href="/politique-de-confidentialite"
          className="underline hover:text-amber transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité
        </Link>
        .
      </p>

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
          className="flex-1 px-6 py-3.5 rounded-xl bg-amber text-white font-semibold shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:hover:scale-100"
        >
          {isSubmitting ? "Envoi en cours…" : "Voir mon estimation →"}
        </button>
      </div>
    </div>
  );
}
