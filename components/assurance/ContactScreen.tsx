"use client";

import { useEffect, useState } from "react";
import { pushEvent } from "@/lib/gtm";

export interface AssuranceContactInfo {
  prenom: string;
  email: string;
  telephone: string;
}

interface ContactScreenProps {
  contact: AssuranceContactInfo;
  onChange: (contact: AssuranceContactInfo) => void;
  onContinue: () => void;
  onBack: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCENT = "#86A789";
const ACCENT_HOVER = "#6F8E72";

// Accept either:
//   • Swiss format: +41 followed by 9 digits, or 0 followed by 9 digits.
//   • Generic E.164: + followed by 8–15 digits.
// Spaces, dots, dashes, parentheses are stripped before matching.
function isValidPhone(raw: string): boolean {
  const compact = raw.replace(/[\s().-]/g, "");
  if (/^\+41\d{9}$/.test(compact)) return true;
  if (/^0\d{9}$/.test(compact)) return true;
  if (/^\+\d{8,15}$/.test(compact)) return true;
  return false;
}

export default function ContactScreen({
  contact,
  onChange,
  onContinue,
  onBack,
}: ContactScreenProps) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof AssuranceContactInfo, string>>
  >({});

  useEffect(() => {
    pushEvent("assurance_contact_shown");
  }, []);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!contact.prenom.trim()) newErrors.prenom = "Requis";
    if (!contact.email.trim() || !EMAIL_REGEX.test(contact.email))
      newErrors.email = "Email invalide";
    if (!contact.telephone.trim() || !isValidPhone(contact.telephone))
      newErrors.telephone = "Numéro invalide";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onContinue();
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

  return (
    <div className="animate-screen-in space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-1">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 -translate-y-1"
            style={{ backgroundColor: ACCENT }}
          />
          Votre audit assurance est prêt
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed font-body mt-1">
          Encore quelques secondes — entrez vos coordonnées. Un spécialiste
          assurance santé vous contactera sous 48h ouvrées.
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
            Numéro de téléphone <span className="text-rouge">*</span>
          </label>
          <input
            type="tel"
            inputMode="tel"
            placeholder="+41 79 123 45 67"
            value={contact.telephone}
            onChange={(e) => update("telephone", e.target.value)}
            className={inputCls}
            style={inputStyle("telephone")}
            onFocus={(e) => {
              if (!errors.telephone)
                e.currentTarget.style.borderColor = ACCENT;
            }}
            onBlur={(e) => {
              if (!errors.telephone)
                e.currentTarget.style.borderColor = "#E7E5E4";
            }}
          />
          {errors.telephone && (
            <p className="text-xs text-rouge mt-1">{errors.telephone}</p>
          )}
          <p className="text-xs text-gray-400 mt-1">
            Un spécialiste assurance santé vous contactera sous 48h ouvrées.
          </p>
        </div>
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
          className="flex-1 px-6 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          style={{ backgroundColor: ACCENT }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = ACCENT)
          }
        >
          Continuer →
        </button>
      </div>
    </div>
  );
}
