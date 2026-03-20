"use client";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="animate-screen-in relative flex flex-col items-center min-h-[calc(100vh-60px)] justify-center text-center px-6 py-10 overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217,119,6,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div className="relative mb-6">
        <span className="inline-block rounded-full bg-[#FEF3C7] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber">
          Diagnostic gratuit — 2 minutes
        </span>
      </div>

      {/* Headline */}
      <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gray-900 leading-tight max-w-2xl mb-6">
        Votre projet d&apos;expatriation en Suisse est-il vraiment{" "}
        <span className="text-amber">viable</span>&nbsp;?
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg md:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed font-body">
        Certains réussissent brillamment leur expatriation. D&apos;autres
        perdent des milliers de francs en erreurs évitables. La différence ?
        La préparation.
      </p>

      {/* Feature row */}
      <div className="relative flex items-center justify-center gap-6 md:gap-8 mb-10">
        <div className="flex flex-col items-center gap-1">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-xs text-gray-400">2 minutes</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
          <span className="text-xs text-gray-400">Score instantané</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          <span className="text-xs text-gray-400">100% confidentiel</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onStart}
        className="relative w-full max-w-sm inline-flex items-center justify-center rounded-full bg-amber px-10 py-5 text-white font-semibold text-lg shadow-lg shadow-amber/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 hover:scale-[1.02] hover:-translate-y-0.5 active:translate-y-0"
      >
        Évaluer mon projet →
      </button>
    </div>
  );
}
