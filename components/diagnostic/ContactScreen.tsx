"use client";

import { useState } from "react";

export interface ContactInfo {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
}

interface ContactScreenProps {
  contact: ContactInfo;
  onChange: (contact: ContactInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ContactScreen({
  contact,
  onChange,
  onNext,
  onBack,
}: ContactScreenProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInfo, string>>>({});

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!contact.prenom.trim()) newErrors.prenom = "Requis";
    if (!contact.nom.trim()) newErrors.nom = "Requis";
    if (!contact.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
      newErrors.email = "Email invalide";
    if (!contact.telephone.trim() || contact.telephone.replace(/\D/g, "").length < 8)
      newErrors.telephone = "Numéro invalide";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onNext();
  };

  const update = (field: keyof ContactInfo, value: string) => {
    onChange({ ...contact, [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputCls = (field: keyof ContactInfo) =>
    `w-full px-4 py-3.5 rounded-xl border-2 text-[15px] transition-colors focus:outline-none focus:ring-0 ${
      errors[field]
        ? "border-rouge bg-rouge/5 focus:border-rouge"
        : "border-gray-200 bg-white focus:border-amber"
    }`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-2">
          Dernière étape
        </h2>
        <p className="text-sm text-gray-500">
          Vos informations sont protégées et ne seront jamais partagées sans votre accord.
        </p>
      </div>

      <div className="space-y-4">
        <div>
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
          Continuer
        </button>
      </div>
    </div>
  );
}
