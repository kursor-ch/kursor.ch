export default function HeroSection() {
  return (
    <section className="bg-creme px-6 pt-20 pb-16 md:pt-[80px] md:pb-[60px]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block font-outfit text-[12px] uppercase tracking-[0.1em] text-amber border border-amber/30 rounded-full px-4 py-1.5 mb-6">
          Diagnostic gratuit · 2 minutes
        </span>

        {/* Headline */}
        <h1 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.15] text-gray-900 max-w-[680px] mx-auto mb-5">
          Chaque étape de votre vie en{" "}
          <span className="text-amber">Suisse</span>, simplifiée.
        </h1>

        {/* Subtitle */}
        <p className="font-outfit font-normal text-[15px] md:text-[17px] leading-[1.7] text-gray-500 max-w-[520px] mx-auto mb-8">
          Emploi, logement, assurances, prévoyance — identifiez vos forces, vos
          risques et les erreurs à éviter. Gratuit, confidentiel, en 2 minutes.
        </p>

        {/* CTA */}
        <a
          href="#services"
          className="inline-block font-outfit font-medium text-[16px] text-white bg-amber hover:bg-[#B45309] rounded-lg px-8 py-4 transition-colors"
        >
          Choisir mon diagnostic →
        </a>

        {/* Social proof */}
        <p className="mt-6 font-outfit text-[13px] text-gray-400 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          3 155 diagnostics réalisés
        </p>
      </div>
    </section>
  );
}
