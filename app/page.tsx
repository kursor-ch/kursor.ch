import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

const services = [
  {
    icon: "\u{1F4BC}",
    title: "Emploi",
    description: "Trouvez un poste en Suisse et négociez au bon niveau.",
    stat: "+40% de salaire en moyenne",
    cta: "Faire le diagnostic \u2192",
    href: "/emploi",
    live: true,
  },
  {
    icon: "\u{1F3E0}",
    title: "Logement",
    description: "Trouvez votre logement en Suisse romande.",
    stat: "3 mois de caution à anticiper",
    cta: "Bientôt disponible",
    href: "/logement",
    live: false,
  },
  {
    icon: "\u{1F6E1}",
    title: "Assurance",
    description: "Optimisez votre couverture et évitez les surcoûts.",
    stat: "2\u00a0400 CHF/an d'économie potentielle",
    cta: "Bientôt disponible",
    href: "/assurance",
    live: false,
  },
  {
    icon: "\u{1F3E6}",
    title: "Prévoyance",
    description: "Ne perdez plus une année de déduction fiscale.",
    stat: "7\u00a0258 CHF/an de déduction 3ème pilier",
    cta: "Bientôt disponible",
    href: "/prevoyance",
    live: false,
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const inner = (
    <div
      className={`relative bg-white border border-gray-200 rounded-xl transition-all ${
        service.live
          ? "border-t-2 hover:shadow-sm cursor-pointer"
          : "opacity-[0.85] cursor-default"
      }`}
      style={{
        padding: "24px 22px",
        borderTopColor: service.live ? "#D97706" : undefined,
      }}
    >
      {!service.live && (
        <span
          className="absolute font-outfit uppercase"
          style={{
            top: 12,
            right: 12,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            borderRadius: 10,
            padding: "2px 8px",
          }}
        >
          Bientôt
        </span>
      )}

      {/* Icon + Title on same line */}
      <div className="flex items-center gap-2">
        <span style={{ fontSize: 24 }} role="img">
          {service.icon}
        </span>
        <h3
          className="font-outfit"
          style={{ fontWeight: 600, fontSize: 17, color: "#111827" }}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="font-outfit"
        style={{
          fontWeight: 400,
          fontSize: 14,
          color: "#6B7280",
          lineHeight: 1.5,
          marginTop: 8,
        }}
      >
        {service.description}
      </p>

      {/* Stat */}
      <p
        className="font-outfit"
        style={{
          fontWeight: 600,
          fontSize: 13,
          color: "#D97706",
          marginTop: 10,
        }}
      >
        {service.stat}
      </p>

      {/* CTA */}
      <span
        className="font-outfit"
        style={{
          display: "block",
          fontWeight: 500,
          fontSize: 13,
          color: service.live ? "#D97706" : "#9CA3AF",
          marginTop: 12,
        }}
      >
        {service.cta}
      </span>
    </div>
  );

  if (service.live) {
    return <Link href={service.href}>{inner}</Link>;
  }

  return inner;
}

export default function HomePage() {
  return (
    <>
      {/* Hero + Service Cards */}
      <section
        className="bg-creme px-6"
        style={{
          paddingTop: 64,
          paddingBottom: 48,
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          {/* Badge */}
          <div className="text-center">
            <span
              className="inline-block font-outfit uppercase"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#D97706",
                border: "1px solid #D97706",
                padding: "4px 12px",
                borderRadius: 20,
              }}
            >
              Diagnostic gratuit &middot; 2 minutes
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-center mx-auto"
            style={{
              fontWeight: 600,
              color: "#111827",
              maxWidth: 640,
              marginTop: 20,
            }}
          >
            <span className="block text-[28px] md:text-[40px] leading-[1.15]">
              Chaque étape de votre vie en{" "}
              <span style={{ color: "#D97706" }}>Suisse</span>, simplifiée.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-outfit text-center mx-auto text-[14px] md:text-[16px]"
            style={{
              fontWeight: 400,
              color: "#6B7280",
              maxWidth: 500,
              lineHeight: 1.7,
              marginTop: 16,
              marginBottom: 36,
            }}
          >
            Emploi, logement, assurances, prévoyance — identifiez vos
            forces, vos risques et les erreurs à éviter.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          id="services"
          className="mx-auto grid grid-cols-1 md:grid-cols-2"
          style={{ maxWidth: 600, gap: 14 }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        {/* Social proof */}
        <p
          className="font-outfit flex items-center justify-center gap-2"
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#9CA3AF",
            marginTop: 20,
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#15803D",
            }}
          />
          3&nbsp;155 diagnostics réalisés
        </p>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
