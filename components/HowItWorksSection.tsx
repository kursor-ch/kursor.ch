const steps = [
  {
    number: "1",
    title: "Répondez au diagnostic",
    description:
      "8 questions sur votre situation. 2 minutes. Aucune inscription préalable.",
  },
  {
    number: "2",
    title: "Recevez votre rapport",
    description:
      "Score personnalisé, points forts, risques identifiés et chiffres clés — directement dans votre boîte email.",
  },
  {
    number: "3",
    title: "Accédez aux bons experts",
    description:
      "Recruteurs, courtiers, conseillers — nos partenaires spécialisés vous accompagnent. Gratuit et sans engagement.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-creme px-6 pt-[60px] pb-[60px]">
      {/* Top separator */}
      <div className="max-w-2xl mx-auto">
        <div className="border-t border-gray-200 mb-[60px]" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[40px]">
          <span className="block font-outfit text-[12px] uppercase tracking-[0.1em] text-amber mb-2">
            Comment ça marche
          </span>
          <h2 className="font-heading font-semibold text-[28px] text-gray-900">
            Simple, rapide, gratuit.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop dotted connector line */}
          <div
            className="hidden md:block absolute top-[20px] left-[calc(16.666%+20px)] right-[calc(16.666%+20px)] border-t-2 border-dashed border-amber/25"
            aria-hidden="true"
          />

          {/* Mobile vertical dotted connector line */}
          <div
            className="md:hidden absolute left-1/2 -translate-x-1/2 top-[40px] bottom-[40px] border-l-2 border-dashed border-amber/25"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Number circle */}
              <div className="relative z-10 w-[40px] h-[40px] rounded-full bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
                <span className="font-outfit font-semibold text-[16px] text-amber leading-none">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-outfit font-semibold text-[16px] text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-outfit font-normal text-[14px] text-gray-500 leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
