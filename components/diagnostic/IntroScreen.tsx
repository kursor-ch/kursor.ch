"use client";

import Image from "next/image";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="animate-screen-in relative flex flex-col items-center min-h-[85vh] text-center px-6 pt-16 pb-20 overflow-hidden">
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
          src="/kursor-logo-amber.png"
          alt="Kursor"
          width={72}
          height={72}
          className="h-[72px] w-auto rounded-lg"
          priority
        />
      </div>

      {/* Badge */}
      <span className="relative inline-block text-sm font-semibold text-amber uppercase tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full border border-amber/30 bg-amber/5">
        Diagnostic gratuit — 2 minutes
      </span>

      {/* Headline */}
      <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gray-900 leading-tight max-w-2xl mb-6">
        Évaluez la viabilité de votre projet d&apos;expatriation en Suisse
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg md:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed font-body">
        8 questions pour obtenir votre score de viabilité, identifier les risques
        et recevoir des recommandations personnalisées.
      </p>

      {/* CTA Button */}
      <button
        onClick={onStart}
        className="relative inline-flex items-center justify-center rounded-full bg-amber px-10 py-4 text-white font-semibold text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
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
      <p className="relative text-xs text-gray-400 mt-4">
        Confidentiel. Aucun paiement requis.
      </p>
    </div>
  );
}
