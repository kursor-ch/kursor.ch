"use client";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="mb-6">
        <span className="text-sm font-semibold text-amber uppercase tracking-wider">
          Diagnostic gratuit — 2 minutes
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gray-900 leading-tight max-w-2xl mb-6">
        Évaluez la viabilité de votre projet d&apos;expatriation en Suisse
      </h1>
      <p className="text-lg text-gray-600 max-w-lg mb-10">
        8 questions pour obtenir votre score de viabilité, identifier les risques
        et recevoir des recommandations personnalisées.
      </p>
      <button
        onClick={onStart}
        className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-white font-semibold text-lg hover:bg-amber/90 transition-colors shadow-lg shadow-amber/20"
      >
        Commencer le diagnostic gratuit
      </button>
      <p className="text-xs text-gray-400 mt-4">
        Confidentiel. Aucun paiement requis.
      </p>
    </div>
  );
}
