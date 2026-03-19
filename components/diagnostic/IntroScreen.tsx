"use client";

import Image from "next/image";

interface IntroScreenProps {
  onStart: () => void;
}

const steps = [
  { num: "1", label: "Répondez à 8 questions" },
  { num: "2", label: "Recevez votre score" },
  { num: "3", label: "Obtenez votre rapport" },
];

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="relative flex flex-col items-center min-h-[85vh] text-center px-4 pt-16 pb-20 overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217,119,6,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="relative mb-10">
        <Image
          src="/logo.svg"
          alt="Kursor"
          width={56}
          height={56}
          priority
        />
      </div>

      {/* Eyebrow */}
      <span className="relative text-sm font-semibold text-amber uppercase tracking-[0.2em] mb-6">
        Diagnostic gratuit — 2 minutes
      </span>

      {/* Headline */}
      <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gray-900 leading-tight max-w-2xl mb-6">
        Évaluez la viabilité de votre projet d&apos;expatriation en Suisse
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg md:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
        8 questions pour obtenir votre score de viabilité, identifier les risques
        et recevoir des recommandations personnalisées.
      </p>

      {/* CTA Button */}
      <button
        onClick={onStart}
        className="relative inline-flex items-center justify-center rounded-full bg-amber px-10 py-4 text-white font-semibold text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:bg-amber/90 hover:shadow-xl hover:shadow-amber/30 hover:-translate-y-0.5 active:translate-y-0"
      >
        Commencer le diagnostic gratuit
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {/* Confidentiality */}
      <p className="relative text-xs text-gray-400 mt-4 mb-2">
        Confidentiel. Aucun paiement requis.
      </p>

      {/* Social proof */}
      <p className="relative text-sm text-gray-500 mt-2">
        Rejoint par plus de <span className="font-semibold text-gray-700">2&nbsp;500</span> professionnels
      </p>

      {/* Divider */}
      <div className="relative w-12 h-px bg-gray-200 mt-16 mb-12" />

      {/* How it works */}
      <div className="relative w-full max-w-xl">
        <h2 className="text-xs font-semibold text-amber uppercase tracking-[0.2em] mb-8">
          Comment ça marche
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-amber/30 bg-amber/5 text-amber font-heading font-semibold text-lg mb-3">
                {step.num}
              </span>
              <p className="text-sm text-gray-600 leading-snug">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
