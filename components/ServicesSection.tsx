import Link from "next/link";

const services = [
  {
    icon: "💼",
    title: "Emploi",
    pain: "Trouvez un poste en Suisse et négociez au bon niveau.",
    stat: "+40% de salaire en moyenne",
    cta: "Faire le diagnostic →",
    href: "/emploi",
    live: true,
  },
  {
    icon: "🏠",
    title: "Logement",
    pain: "Trouvez votre logement en Suisse romande sans stress.",
    stat: "3 mois de caution à anticiper",
    cta: "Bientôt disponible",
    href: null,
    live: false,
  },
  {
    icon: "🛡",
    title: "Assurance",
    pain: "Optimisez votre couverture et évitez les surcoûts.",
    stat: "2 400 CHF/an d'économie potentielle",
    cta: "Bientôt disponible",
    href: null,
    live: false,
  },
  {
    icon: "🏦",
    title: "Prévoyance",
    pain: "Ne perdez plus une année de déduction fiscale.",
    stat: "7 258 CHF/an de déduction 3ème pilier",
    cta: "Bientôt disponible",
    href: null,
    live: false,
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const card = (
    <div
      className={`bg-white border rounded-xl px-6 py-7 transition-all ${
        service.live
          ? "border-gray-200 border-t-2 border-t-amber hover:border-amber hover:shadow-sm cursor-pointer"
          : "border-gray-200 opacity-[0.85]"
      } relative`}
    >
      {!service.live && (
        <span className="absolute top-3 right-3 font-outfit text-[10px] uppercase tracking-[0.05em] text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
          Bientôt
        </span>
      )}

      <span className="text-[32px] block mb-3" role="img">
        {service.icon}
      </span>

      <h3 className="font-outfit font-semibold text-[18px] text-gray-900 mb-1.5">
        {service.title}
      </h3>

      <p className="font-outfit font-normal text-[14px] text-gray-500 leading-[1.6] mb-3">
        {service.pain}
      </p>

      <p className="font-outfit font-semibold text-[13px] text-amber mb-4">
        {service.stat}
      </p>

      <span
        className={`font-outfit font-medium text-[14px] ${
          service.live ? "text-amber" : "text-gray-400 text-[13px]"
        }`}
      >
        {service.cta}
      </span>
    </div>
  );

  if (service.live && service.href) {
    return <Link href={service.href}>{card}</Link>;
  }

  return card;
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-creme px-6 py-[60px]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="block font-outfit text-[12px] uppercase tracking-[0.1em] text-amber mb-2">
            Nos diagnostics
          </span>
          <h2 className="font-heading font-semibold text-[28px] text-gray-900 mb-2">
            Quel est votre projet ?
          </h2>
          <p className="font-outfit font-normal text-[15px] text-gray-400">
            Choisissez le diagnostic adapté à votre situation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
