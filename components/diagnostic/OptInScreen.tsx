"use client";

import { useState } from "react";
import Link from "next/link";

interface OptInScreenProps {
  onSubmit: (optInPartners: boolean) => void;
  onBack: () => void;
}

export default function OptInScreen({ onSubmit, onBack }: OptInScreenProps) {
  const [consent, setConsent] = useState(false);
  const [optInPartners, setOptInPartners] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!consent) {
      setShowError(true);
      return;
    }
    onSubmit(optInPartners);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-2">
          Presque terminé
        </h2>
        <p className="text-sm text-gray-500">
          Cochez les cases ci-dessous pour recevoir votre diagnostic.
        </p>
      </div>

      <div className="space-y-4">
        {/* Mandatory consent */}
        <label
          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
            consent
              ? "border-amber bg-amber/5"
              : showError
              ? "border-rouge bg-rouge/5"
              : "border-gray-200 bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
            className="mt-0.5 h-5 w-5 rounded border-gray-300 text-amber focus:ring-amber"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            J&apos;accepte que Kursor CH traite mes données afin de me fournir
            mon score et me recontacter.
            <span className="text-rouge ml-0.5">*</span>
          </span>
        </label>
        {showError && (
          <p className="text-xs text-rouge -mt-2 ml-1">
            Ce consentement est obligatoire pour recevoir votre diagnostic.
          </p>
        )}

        {/* Optional partner opt-in */}
        <label
          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
            optInPartners
              ? "border-amber bg-amber/5"
              : "border-gray-200 bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={optInPartners}
            onChange={(e) => setOptInPartners(e.target.checked)}
            className="mt-0.5 h-5 w-5 rounded border-gray-300 text-amber focus:ring-amber"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            J&apos;accepte que Kursor partage mon profil avec ses partenaires de
            confiance (recrutement, assurance, prévoyance) afin de m&apos;adresser
            des propositions adaptées.
          </span>
        </label>
      </div>

      <p className="text-xs text-gray-400">
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
          className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors"
        >
          Retour
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex-1 px-6 py-3 rounded-full bg-amber text-white font-semibold hover:bg-amber/90 transition-colors"
        >
          Voir mon score
        </button>
      </div>
    </div>
  );
}
