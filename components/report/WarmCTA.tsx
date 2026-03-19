export default function WarmCTA() {
  return (
    <section className="py-8 text-center space-y-6">
      <h2 className="text-xl font-heading font-semibold text-gray-900">
        Besoin d&apos;un accompagnement personnalisé ?
      </h2>
      <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
        Nos experts peuvent vous guider gratuitement sur chaque point identifié
        dans votre diagnostic — fiscalité, assurance, recrutement, prévoyance.
      </p>
      <div className="space-y-3">
        <a
          href="mailto:equipe@kursor.ch"
          className="block text-base font-medium text-gray-700 hover:text-amber transition-colors"
        >
          📩 Répondez directement à cet email
        </a>
        <a
          href="https://calendly.com/sav-gcconsulting/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-3.5 text-white font-semibold hover:bg-amber/90 transition-colors"
        >
          📅 Réservez un appel gratuit de 15 minutes
        </a>
      </div>
      <p className="text-xs text-gray-400 max-w-sm mx-auto">
        Sans engagement. Vos données ne sont partagées qu&apos;avec votre accord
        explicite.
      </p>
    </section>
  );
}
