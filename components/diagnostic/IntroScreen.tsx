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

      {/* Headline */}
      <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gray-900 leading-tight max-w-2xl mb-6">
        Votre projet d&apos;expatriation en Suisse est-il vraiment viable ?
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg md:text-xl text-gray-500 max-w-lg mb-4 leading-relaxed font-body">
        Chaque année, des milliers de francophones s&apos;installent en Suisse.
        Certains réussissent brillamment. D&apos;autres perdent des milliers de
        francs en erreurs évitables. La différence ? La préparation.
      </p>

      {/* Secondary line */}
      <p className="relative text-sm text-gray-400 mb-12 font-body">
        8 questions · Score instantané · Recommandations personnalisées
      </p>

      {/* CTA Button */}
      <button
        onClick={onStart}
        className="relative inline-flex items-center justify-center rounded-full bg-amber px-10 py-4 text-white font-semibold text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
      >
        Évaluer mon projet →
      </button>

      {/* Trust line */}
      <p className="relative text-xs text-gray-400 mt-4">
        Confidentiel · Gratuit · Sans engagement
      </p>
    </div>
  );
}
