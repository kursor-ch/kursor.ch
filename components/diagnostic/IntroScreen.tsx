"use client";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="relative flex flex-col items-center min-h-[calc(100vh-60px)] justify-center text-center px-6 py-4 md:py-10 overflow-hidden">
      {/* Layered atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(217,119,6,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(217,119,6,0.04) 0%, transparent 50%)",
        }}
      />
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      {/* Decorative geometric accent — thin amber line */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-20 bg-gradient-to-b from-amber/30 to-transparent"
        aria-hidden="true"
      />

      {/* Headline */}
      <h1 className="relative text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-heading font-bold text-gray-900 leading-[1.1] max-w-2xl mb-4 md:mb-7 animate-intro-headline">
        Êtes-vous prêt pour la{" "}
        <span className="relative text-amber">
          Suisse
          <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber/25 rounded-full" />
        </span>
        &nbsp;?
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg text-gray-500 text-center max-w-md mx-auto mb-3 md:mb-6 leading-relaxed font-body animate-intro-subtitle">
        Identifiez vos forces, vos risques et les erreurs à éviter avant de vous lancer.
      </p>

      {/* Badge — below subtitle */}
      <div className="relative mb-6 md:mb-10 animate-intro-badge">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/30 bg-gradient-to-r from-amber/8 to-amber/4 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber shadow-sm shadow-amber/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          Diagnostic gratuit
        </span>
      </div>

      {/* Trust badges */}
      <div className="relative grid grid-cols-3 w-full max-w-md mb-6 md:mb-12 animate-intro-features">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-500">2 minutes</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-500">Score instantané</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber/8 border border-amber/10 flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-500">100% confidentiel</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative animate-intro-cta w-full max-w-md">
        <button
          onClick={onStart}
          className="group relative w-full inline-flex items-center justify-center gap-3 bg-amber text-white px-8 py-5 text-base font-bold tracking-wide whitespace-nowrap transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:shadow-amber/30 hover:-translate-y-1 active:translate-y-0 rounded-xl shadow-lg shadow-amber/20 ring-1 ring-amber/20"
        >
          Évaluer mon projet
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-base transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-intro-scroll">
        <div className="flex flex-col items-center gap-2 text-gray-300">
          <div className="w-5 h-8 rounded-full border-2 border-gray-300/50 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
