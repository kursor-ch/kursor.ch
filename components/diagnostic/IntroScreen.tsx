"use client";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="relative flex flex-col items-center min-h-[calc(100vh-60px)] justify-center text-center px-6 py-10 overflow-hidden">
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

      {/* Title — first element below header */}
      <h1 className="relative text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-[1.1] mb-6 text-center">
        <span className="animate-intro-title-line1 inline-block">Prêt pour la </span>
        <span className="animate-intro-title-suisse inline-block text-amber">Suisse&nbsp;?</span>
      </h1>

      {/* Subtitle */}
      <p className="relative text-lg text-gray-500 text-center max-w-md mx-auto mb-6 leading-relaxed font-body animate-intro-subtitle">
        Identifiez vos forces, vos risques et les erreurs à éviter avant de vous lancer.
      </p>

      {/* Badge — elegant luxury-brand tagline style */}
      <div className="relative animate-intro-badge flex flex-col items-center mb-10">
        <div className="w-full max-w-xs h-px bg-stone-300" />
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-400 font-body">
          Diagnostic gratuit · 2 minutes · Résultat instantané
        </p>
      </div>

      {/* CTA Button */}
      <div className="relative w-full max-w-sm mx-auto animate-intro-cta">
        <button
          onClick={onStart}
          className="w-full bg-amber text-white rounded-2xl py-5 text-lg font-semibold shadow-lg shadow-amber/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-100"
        >
          Évaluer mon projet →
        </button>
      </div>
    </div>
  );
}
