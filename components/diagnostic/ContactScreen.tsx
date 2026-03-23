"use client";

import { useState } from "react";
import Link from "next/link";

export interface ContactInfo {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
}

export interface OptIns {
  consent: boolean;
  partnerContact: boolean;
}

interface ContactScreenProps {
  contact: ContactInfo;
  onChange: (contact: ContactInfo) => void;
  onSubmit: (optIns: OptIns) => void;
  onBack: () => void;
}

export default function ContactScreen({
  contact,
  onChange,
  onSubmit,
  onBack,
}: ContactScreenProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInfo, string>>>({});
  const [consent, setConsent] = useState(false);
  const [partnerContact, setPartnerContact] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!contact.prenom.trim()) newErrors.prenom = "Requis";
    if (!contact.nom.trim()) newErrors.nom = "Requis";
    if (!contact.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
      newErrors.email = "Email invalide";
    if (!contact.telephone.trim() || contact.telephone.replace(/\D/g, "").length < 8)
      newErrors.telephone = "Numéro invalide";

    setErrors(newErrors);

    if (!consent) {
      setShowConsentError(true);
    }

    return Object.keys(newErrors).length === 0 && consent;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit({ consent, partnerContact });
    }
  };

  const update = (field: keyof ContactInfo, value: string) => {
    onChange({ ...contact, [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputCls = (field: keyof ContactInfo) =>
    `w-full px-4 py-3.5 rounded-xl border-2 text-[15px] bg-white font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber/20 ${
      errors[field]
        ? "border-rouge bg-rouge/5 focus:border-rouge focus:ring-rouge/20"
        : "border-[#E7E5E4] focus:border-amber"
    }`;

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-2 -translate-y-1" />
          Votre diagnostic est prêt
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body mt-1">
          Encore quelques secondes — entrez vos coordonnées pour recevoir votre score de viabilité et un rapport avec des recommandations concrètes.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 font-body mb-1 block">
            Prénom <span className="text-rouge">*</span>
          </label>
          <input
            type="text"
            placeholder="Prénom"
            value={contact.prenom}
            onChange={(e) => update("prenom", e.target.value)}
            className={inputCls("prenom")}
          />
          {errors.prenom && (
            <p className="text-xs text-rouge mt-1">{errors.prenom}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 font-body mb-1 block">
            Nom <span className="text-rouge">*</span>
          </label>
          <input
            type="text"
            placeholder="Nom"
            value={contact.nom}
            onChange={(e) => update("nom", e.target.value)}
            className={inputCls("nom")}
          />
          {errors.nom && (
            <p className="text-xs text-rouge mt-1">{errors.nom}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 font-body mb-1 block">
            Email <span className="text-rouge">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls("email")}
          />
          {errors.email && (
            <p className="text-xs text-rouge mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 font-body mb-1 block">
            Numéro de téléphone <span className="text-rouge">*</span>
          </label>
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={contact.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            className={inputCls("telephone")}
          />
          {errors.telephone && (
            <p className="text-xs text-rouge mt-1">{errors.telephone}</p>
          )}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-stone-200" />

      {/* Consent intro */}
      <div>
        <h3 className="text-[16px] font-heading text-[#111827] mb-2">
          Une dernière chose avant vos résultats
        </h3>
        <p className="text-[13px] font-body text-[#9CA3AF] mb-4">
          Vos données sont traitées de manière confidentielle et ne sont jamais revendues.
        </p>
      </div>

      {/* Consent checkboxes */}
      <div className="space-y-4">
        {/* Mandatory consent */}
        <label
          className={`flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm ${
            consent
              ? "border-amber bg-[#FEF3C7] shadow-md"
              : showConsentError
              ? "border-rouge bg-rouge/5"
              : "border-stone-200 hover:border-amber/40 hover:shadow-md"
          }`}
        >
          <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            consent ? "border-amber bg-amber" : showConsentError ? "border-rouge" : "border-gray-300"
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
                if (e.target.checked) setShowConsentError(false);
              }}
              className="sr-only"
            />
          </div>
        </label>
        {showConsentError && (
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
          className="flex-1 px-6 py-3.5 rounded-xl bg-amber text-white font-semibold shadow-md shadow-amber/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
        >
          Générer mon score →
        </button>
      </div>
    </div>
  );
}
