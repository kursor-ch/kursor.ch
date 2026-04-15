"use client";

import {
  BriefcaseIcon,
  HouseKeyIcon,
  ShieldCheckIcon,
  PiggyBankIcon,
} from "@/components/ui/ServiceIcons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    Icon: BriefcaseIcon,
    title: "Un marché qui filtre vite",
    body: "Les recruteurs suisses lisent un CV en 6 secondes. Sans structure locale, le vôtre est éliminé avant d\u2019être lu. Ceux qui connaissent les codes décrochent en moyenne 40 000 CHF de plus par an.",
    metric: "↑ +40 000 CHF/an de différence salariale",
  },
  {
    Icon: HouseKeyIcon,
    title: "Un dossier qui doit être irréprochable",
    body: "Taux de vacance à Genève et Lausanne sous 1%. Sans attestation de non-poursuite, 3 mois de caution, et dossier conforme aux exigences des régies, la recherche s\u2019étale sur 3 à 6 mois.",
    metric: "↑ 3 à 6 mois de recherche sans méthode",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Un système qui punit l\u2019inertie",
    body: "Primes LAMal +184% depuis 1997. Franchise mal calibrée, modèle inadapté, complémentaires inutilisées — la plupart des résidents surpaient 2 000 à 3 000 CHF par an sans le savoir.",
    metric: "↑ 2 400 CHF/an de surcoût moyen",
  },
  {
    Icon: PiggyBankIcon,
    title: "Un système à trois piliers que 70% ignorent",
    body: "Chaque année sans 3ème pilier, c\u2019est 1 500 à 3 500 CHF d\u2019impôts perdus. Définitivement. En 2026, une nouvelle loi permet de rattraper jusqu\u2019à 10 ans de versements manqués — personne n\u2019en parle encore.",
    metric: "↑ 36 290 CHF rattrapables en 2026",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      className="relative px-6"
      style={{
        backgroundColor: "#FDFAF5",
        paddingTop: 88,
        paddingBottom: 88,
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 1120 }}
      >
        {/* Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
          <span
            className="inline-block font-body uppercase"
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#D97706",
            }}
          >
            Le constat
          </span>
          <h2
            className="font-heading text-[28px] sm:text-[34px] lg:text-[40px]"
            style={{
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginTop: 14,
            }}
          >
            La Suisse récompense les préparés.
            <br />
            <span
              className="font-heading italic"
              style={{ color: "#D97706", fontWeight: 500 }}
            >
              Les autres paient le prix fort.
            </span>
          </h2>
          <p
            className="font-body mx-auto"
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#475569",
              lineHeight: 1.65,
              marginTop: 18,
              maxWidth: 620,
            }}
          >
            Sans les bons arbitrages, chaque décision administrative se
            transforme en dette silencieuse. Voici les quatre zones où l&rsquo;écart
            se creuse le plus vite.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto"
          style={{ marginTop: 56, maxWidth: 960 }}
        >
          {problems.map((p) => (
            <li
              key={p.title}
              className="relative flex flex-col bg-white rounded-xl"
              style={{
                border: "1px solid #E2E8F0",
                padding: "26px 24px 20px",
                boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "rgba(217,119,6,0.08)",
                    border: "1px solid rgba(217,119,6,0.18)",
                    borderRadius: 10,
                  }}
                >
                  <p.Icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 19,
                      fontWeight: 600,
                      color: "#0F172A",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
              </div>

              <p
                className="font-body"
                style={{
                  fontSize: 14.5,
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: 1.65,
                  marginTop: 14,
                }}
              >
                {p.body}
              </p>

              {/* Metric pill */}
              <span
                className="inline-flex items-center self-start font-body"
                style={{
                  marginTop: 18,
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "#B45309",
                  backgroundColor: "#FEF3C7",
                  border: "1px solid rgba(217,119,6,0.25)",
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                {p.metric}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
