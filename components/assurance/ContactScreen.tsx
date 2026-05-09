"use client";

import { useState } from "react";
import Link from "next/link";

export interface AssuranceContactInfo {
  prenom: string;
  email: string;
  telephone: string;
}

export interface AssuranceOptIns {
  rgpd_accepted: boolean;
  partner_share_optin: boolean;
  newsletter_optin: boolean;
}

interface ContactScreenProps {
  contact: AssuranceContactInfo;
  onChange: (contact: AssuranceContactInfo) => void;
  onSubmit: (optIns: AssuranceOptIns) => void;
  onBack: () => void;
  phoneRequired: boolean;
  branch: "resident" | "frontalier";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCENT = "#86A789";
const ACCENT_LIGHT = "#E6EFE6";
const ACCENT_HOVER = "#6F8E72";

export default function ContactScreen({
  contact,
  onChange,
  onSubmit,
  onBack,
  phoneRequired,
  branch,
}: ContactScreenProps) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof AssuranceContactInfo, string>>
  >({});
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [partnerShareOptin, setPartnerShareOptin] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!contact.prenom.trim()) newErrors.prenom = "Requis";
    if (!contact.email.trim() || !EMAIL_REGEX.test(contact.email))
      newErrors.email = "Email invalide";
    if (phoneRequired) {
      if (
        !contact.telephone.trim() ||
        contact.telephone.replace(/\D/g, "").length < 8
      )
        newErrors.telephone = "Numéro invalide";
    }

    setErrors(newErrors);

    if (!rgpdAccepted) setShowConsentError(true);

    return Object.keys(newErrors).length === 0 && rgpdAccepted;
  };

  const handleSubmit = () => {
    if (isSubmitting) return;
    if (validate()) {
      setIsSubmitting(true);
      onSubmit({
        rgpd_accepted: rgpdAccepted,
        partner_share_optin: partnerShareOptin,
        newsletter_optin: false,
      });
    }
  };

  const update = (field: keyof AssuranceContactInfo, value: string) => {
    onChange({ ...contact, [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputStyle = (field: keyof AssuranceContactInfo) => ({
    borderColor: errors[field] ? "#DC2626" : "#E7E5E4",
    backgroundColor: errors[field] ? "#FEF2F2" : "#FFFFFF",
  });

  const inputCls =
    "w-full px-4 py-3.5 rounded-xl border-2 text-[15px] bg-white font-body transition-all duration-200 focus:outline-none focus:ring-2";

  const ctaLabel =
    branch === "frontalier"
      ? "Voir mon comparatif LAMal/CMU →"
      : "Voir mon audit assurances →";

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 -translate-y-1"
            style={{ backgroundColor: ACCENT }}
          />
          Votre audit est prêt
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body mt-1">
          Encore quelques secondes — entrez vos coordonnées pour recevoir votre
          {" "}
          {branch === "frontalier"
            ? "comparatif LAMal / CMU avec projection du piège N-2"
            : "surcoût annuel chiffré et la liste de vos trous de couverture"}
          .
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
            className={inputCls}
            style={inputStyle("prenom")}
            onFocus={(e) => {
              if (!errors.prenom) e.currentTarget.style.borderColor = ACCENT;
            }}
            onBlur={(e) => {
              if (!errors.prenom)
                e.currentTarget.style.borderColor = "#E7E5E4";
            }}
          />
          {errors.prenom && (
            <p className="text-xs text-rouge mt-1">{errors.prenom}</p>
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
            className={inputCls}
            style={inputStyle("email")}
            onFocus={(e) => {
              if (!errors.email) e.currentTarget.style.borderColor = ACCENT;
            }}
            onBlur={(e) => {
              if (!errors.email) e.currentTarget.style.borderColor = "#E7E5E4";
            }}
          />
          {errors.email && (
            <p className="text-xs text-rouge mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 font-body mb-1 block">
            Numéro de téléphone
            {phoneRequired ? (
              <span className="text-rouge"> *</span>
            ) : (
              <span className="text-gray-400 font-normal"> (optionnel)</span>
            )}
          </label>
          <input
            type="tel"
            placeholder="+41 79 123 45 67"
            value={contact.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            className={inputCls}
            style={inputStyle("telephone")}
            onFocus={(e) => {
              if (!errors.telephone) e.currentTarget.style.borderColor = ACCENT;
            }}
            onBlur={(e) => {
              if (!errors.telephone)
                e.currentTarget.style.borderColor = "#E7E5E4";
            }}
          />
          {errors.telephone && (
            <p className="text-xs text-rouge mt-1">{errors.telephone}</p>
          )}
          {phoneRequired && (
            <p className="text-xs text-gray-400 mt-1">
              Un spécialiste indépendant vous contactera sous 48h ouvrées.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-stone-200" />

      <div>
        <h3 className="text-[16px] font-heading text-[#111827] mb-2">
          Une dernière chose avant vos résultats
        </h3>
        <p className="text-[13px] font-body text-[#9CA3AF] mb-4">
          Vos données sont traitées de manière confidentielle et ne sont jamais
          revendues.
        </p>
      </div>

      <div className="space-y-4">
        <label
          className="flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm"
          style={{
            borderColor: rgpdAccepted
              ? ACCENT
              : showConsentError
              ? "#DC2626"
              : "#E7E5E4",
            backgroundColor: rgpdAccepted
              ? ACCENT_LIGHT
              : showConsentError
              ? "#FEF2F2"
              : "#FFFFFF",
          }}
        >
          <div
            className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: rgpdAccepted
                ? ACCENT
                : showConsentError
                ? "#DC2626"
                : "#D1D5DB",
              backgroundColor: rgpdAccepted ? ACCENT : "transparent",
            }}
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
              J&apos;accepte que Kursor CH traite mes données afin de me fournir
              mon audit et me recontacter.
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
            Ce consentement est obligatoire pour recevoir votre audit.
          </p>
        )}

        <label
          className="flex items-start gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white shadow-sm"
          style={{
            borderColor: partnerShareOptin ? ACCENT : "#E7E5E4",
            backgroundColor: partnerShareOptin ? ACCENT_LIGHT : "#FFFFFF",
          }}
        >
          <div
            className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: partnerShareOptin ? ACCENT : "#D1D5DB",
              backgroundColor: partnerShareOptin ? ACCENT : "transparent",
            }}
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
              Je souhaite être mis en relation avec notre spécialiste
              assurances indépendant. Gratuit et sans engagement.
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
          className="underline transition-colors"
          style={{ color: "#9CA3AF" }}
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
          className="flex-1 px-6 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:hover:scale-100"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = ACCENT_HOVER;
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = ACCENT;
          }}
        >
          {isSubmitting ? "Envoi en cours…" : ctaLabel}
        </button>
      </div>
    </div>
  );
}
