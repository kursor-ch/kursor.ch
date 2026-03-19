"use client";

import { useState } from "react";
import Link from "next/link";

export interface OptIns {
  recrutement: boolean;
  assurance: boolean;
  prevoyance: boolean;
  fiscalite: boolean;
}

interface OptInScreenProps {
  onSubmit: (optIns: OptIns) => void;
  onBack: () => void;
}

const PARTNER_OPTIONS: { key: keyof OptIns; label: string; description: string }[] = [
  {
    key: "recrutement",
    label: "Recrutement",
    description:
      "Trouver un emploi plus rapidement grâce à notre réseau de partenaires",
  },
  {
    key: "assurance",
    label: "Assurance maladie",
    description:
      "Éviter toutes les erreurs liées au processus d'affiliation des assurances obligatoires",
  },
  {
    key: "prevoyance",
    label: "Prévoyance & 3e pilier",
    description:
      "Comprendre et optimiser votre épargne afin de créer votre retraite",
  },
  {
    key: "fiscalite",
    label: "Fiscalité",
    description:
      "Être accompagné(e) par un professionnel dans la création et la gestion de sa société en Suisse (SA/SÀRL/RI)",
  },
];

export default function OptInScreen({ onSubmit, onBack }: OptInScreenProps) {
  const [consent, setConsent] = useState(false);
  const [optIns, setOptIns] = useState<OptIns>({
    recrutement: false,
    assurance: false,
    prevoyance: false,
    fiscalite: false,
  });
  const [showError, setShowError] = useState(false);

  const toggleOptIn = (key: keyof OptIns) => {
    setOptIns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    if (!consent) {
      setShowError(true);
      return;
    }
    onSubmit(optIns);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-2">
          Presque terminé
        </h2>
        <p className="text-sm text-gray-500">
          Avant de recevoir votre diagnostic, souhaitez-vous être mis en
          relation avec nos experts ? Sélectionnez les domaines où vous
          aimeriez un accompagnement. Gratuit et sans engagement — vos données
          sont partagées uniquement avec les partenaires que vous choisissez.
        </p>
      </div>

      <div className="space-y-3">
        {PARTNER_OPTIONS.map((opt) => (
          <label
            key={opt.key}
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
              optIns[opt.key]
                ? "border-amber bg-amber/5"
                : "border-gray-200 bg-white"
            }`}
          >
            <input
              type="checkbox"
              checked={optIns[opt.key]}
              onChange={() => toggleOptIn(opt.key)}
              className="mt-0.5 h-5 w-5 rounded border-gray-300 text-amber focus:ring-amber"
            />
            <div>
              <span className="text-sm font-medium text-gray-800">
                {opt.label}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">{opt.description}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="space-y-4 pt-2">
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
