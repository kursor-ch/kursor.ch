const GENERAL_RISKS = [
  {
    severity: "CRITIQUE" as const,
    title: "Double imposition",
    cost: "5 000 – 40 000 CHF/an",
    description:
      "Sans les bonnes démarches fiscales dès votre arrivée, vous risquez de payer des impôts dans deux pays. La convention bilatérale France-Suisse l'évite, mais nécessite des actions spécifiques.",
  },
  {
    severity: "ÉLEVÉ" as const,
    title: "Surcoût LAMal",
    cost: "2 000 – 8 000 CHF/an",
    description:
      "L'assurance maladie suisse est obligatoire. Les primes varient énormément selon le canton, le modèle et la franchise. Sans comparaison préalable, la plupart des expatriés surpayent.",
  },
  {
    severity: "ÉLEVÉ" as const,
    title: "3ème pilier non optimisé",
    cost: "2 000 – 3 500 CHF/an de déduction manquée",
    description:
      "Le 3ème pilier permet une déduction fiscale annuelle significative. Chaque année sans souscription est une économie d'impôt perdue définitivement.",
  },
  {
    severity: "MOYEN" as const,
    title: "Logement et coût de la vie",
    cost: "Variable selon le canton",
    description:
      "Les loyers suisses sont 2 à 4 fois supérieurs à ceux de la France. La caution représente souvent 3 mois de loyer. Un budget sous-estimé peut bloquer votre installation.",
  },
];

const SEVERITY_COLORS: Record<string, string> = {
  CRITIQUE: "#DC2626",
  "ÉLEVÉ": "#EA580C",
  MOYEN: "#D97706",
};

export default function RiskCards() {
  return (
    <section className="space-y-6 py-8 border-b border-gray-100">
      <h2 className="text-xl font-heading font-semibold text-gray-900">
        Les risques les plus fréquents
      </h2>
      <p className="text-sm text-gray-500">
        Ces risques concernent la majorité des candidats à l&apos;expatriation en
        Suisse.
      </p>
      <div className="space-y-4">
        {GENERAL_RISKS.map((risk) => (
          <div
            key={risk.title}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
            style={{ borderLeftWidth: "4px", borderLeftColor: SEVERITY_COLORS[risk.severity] }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: SEVERITY_COLORS[risk.severity] }}
              >
                {risk.severity}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {risk.title}
            </h3>
            <p className="text-sm font-semibold text-gray-800 mb-2">
              {risk.cost}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {risk.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
