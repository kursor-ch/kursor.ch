import { partners } from "@/lib/partners";

const ICONS: Record<string, string> = {
  briefcase: "💼",
  calculator: "📊",
  shield: "🛡️",
  heart: "❤️",
  home: "🏠",
};

export default function PartnerCards() {
  return (
    <section className="space-y-6 py-8 border-b border-gray-100">
      <h2 className="text-xl font-heading font-semibold text-gray-900">
        Nos partenaires
      </h2>
      <p className="text-sm text-gray-500">
        Des experts sélectionnés pour accompagner chaque aspect de votre
        expatriation.
      </p>
      <div className="space-y-4">
        {partners.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5">
                {ICONS[p.icon] ?? "✦"}
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-amber">{p.headline}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>
                <p className="text-xs font-semibold text-vert">{p.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
