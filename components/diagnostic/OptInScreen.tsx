"use client";

import { useState } from "react";
import Link from "next/link";

export interface OptIns {
  consent: boolean;
  partnerContact: boolean;
}

interface OptInScreenProps {
  onSubmit: (optIns: OptIns) => void;
  onBack: () => void;
}

export default function OptInScreen({ onSubmit, onBack }: OptInScreenProps) {
  const [consent, setConsent] = useState(false);
  const [partnerContact, setPartnerContact] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!consent) {
      setShowError(true);
      return;
    }
    onSubmit({ consent, partnerContact });
  };

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-1" />
          Presque terminé
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body">
          Avant de recevoir votre diagnostic, veuillez confirmer votre accord.
        </p>
      </div>

      <div className="space-y-4">
        {/* Mandatory consent */}
        <label
          className={`flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm ${
            consent
              ? "border-amber bg-[#FEF3C7] shadow-md"
              : showError
              ? "border-rouge bg-rouge/5"
              : "border-stone-200 hover:border-amber/40 hover:shadow-md"
          }`}
        >
          <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            consent ? "border-amber bg-amber" : showError ? "border-rouge" : "border-gray-300"
          }`}>
            {consent && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800 leading-relaxed font-body">
              J&apos;accepte que Kursor CH traite mes données afin de me fournir
              mon score et me recontacter.
              <span className="text-rouge ml-0.5">*</span>
            </span>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setShowError(false);
              }}
              className="sr-only"
            />
          </div>
        </label>
        {showError && (
          <p className="text-xs text-rouge -mt-2 ml-1">
            Ce consentement est obligatoire pour recevoir votre diagnostic.
          </p>
        )}

        {/* Optional partner contact */}
        <label
          className={`flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm ${
            partnerContact
              ? "border-amber bg-[#FEF3C7] shadow-md"
              : "border-stone-200 hover:border-amber/40 hover:shadow-md"
          }`}
        >
          <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            partnerContact ? "border-amber bg-amber" : "border-gray-300"
          }`}>
            {partnerContact && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800 leading-relaxed font-body">
              Je souhaite être mis en relation avec les partenaires Kursor
              (recrutement, assurances, prévoyance, fiscalité, immobilier).
              Gratuit et sans engagement.
            </span>
            <input
              type="checkbox"
              checked={partnerContact}
              onChange={(e) => setPartnerContact(e.target.checked)}
              className="sr-only"
            />
          </div>
        </label>
      </div>

      <p className="text-xs text-gray-400 font-body">
        En soumettant ce formulaire, vous confirmez avoir pris connaissance de
        notre{" "}
        <Link
          href="/politique-de-confidentialite"
          className="underline hover:text-amber transition-colors"
          target="_blank"
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
          className="flex-1 px-6 py-3.5 rounded-full bg-amber text-white font-semibold shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
        >
          Voir mon score
        </button>
      </div>
    </div>
  );
}
