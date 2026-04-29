import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides pratiques pour vivre en Suisse | Kursor",
  description:
    "Retrouvez tous les guides pratiques Kursor pour bien vivre en Suisse : permis de séjour, logement, assurance maladie, emploi, création d'entreprise et retraite.",
};

/* ───────── DATA ───────── */

const GUIDES = [
  {
    icon: "\u{1F4CB}",
    title: "Permis de s\u00E9jour en Suisse",
    description: "Permis B, C, L, G, frontalier : identifiez le titre adapt\u00E9 \u00E0 votre situation et ma\u00EEtrisez les d\u00E9marches.",
    href: "/permis-suisse",
    tag: "S'INSTALLER",
  },
  {
    icon: "\u{1F3E0}",
    title: "Louer un appartement en Suisse",
    description: "Dossier de location, garantie de loyer, r\u00E9siliation de bail : tout savoir avant de signer un contrat.",
    href: "/logement-en-suisse",
    tag: "LOGEMENT",
  },
  {
    icon: "\u{1F3E5}",
    title: "Assurance maladie en Suisse",
    description: "LAMal, LCA, franchise, primes : comment choisir la meilleure caisse maladie et r\u00E9duire vos co\u00FBts.",
    href: "/assurance-maladie",
    tag: "SANT\u00C9",
  },
  {
    icon: "\u{1F4BC}",
    title: "Trouver un emploi en Suisse",
    description: "CV suisse, m\u00E9tiers qui recrutent, permis de travail, canaux de recherche et salaires 2026.",
    href: "/emploi-suisse",
    tag: "EMPLOI",
  },
  {
    icon: "\u{1F4B0}",
    title: "Calcul salaire net suisse frontalier",
    description: "Simulateur brut-net, cotisations, imp\u00F4t \u00E0 la source, diff\u00E9rences cantonales et charges invisibles.",
    href: "/salaire-suisse",
    tag: "EMPLOI",
  },
  {
    icon: "\u{1F3E2}",
    title: "Cr\u00E9er une soci\u00E9t\u00E9 en Suisse",
    description: "S\u00E0rl, SA ou raison individuelle : d\u00E9marches, capital, co\u00FBts et obligations l\u00E9gales.",
    href: "/creation-entreprise",
    tag: "ENTREPRENDRE",
  },
  {
    icon: "\u{1F4C8}",
    title: "Optimisation fiscale en Suisse",
    description: "6 leviers pour r\u00E9duire vos imp\u00F4ts : 3e pilier, LPP, immobilier, dividendes, frontaliers.",
    href: "/fiscalite-business",
    tag: "FISCALIT\u00C9",
  },
  {
    icon: "\u{1F3AF}",
    title: "3e pilier suisse : le guide complet",
    description: "Pilier 3a vs 3b, banque vs assurance, multi-comptes, rattrapage 2026, frontaliers TOU.",
    href: "/retraite-suisse",
    tag: "PATRIMOINE",
  },
  {
    icon: "\u{1F4B8}",
    title: "Placement suisse : guide pour investir",
    description: "ETF, actions, 3e pilier, immobilier, fiscalit\u00E9 : le guide pour r\u00E9sidents et non-r\u00E9sidents.",
    href: "/analyse-lpp",
    tag: "PATRIMOINE",
  },
  {
    icon: "\u{1F4DD}",
    title: "Imp\u00F4ts en Suisse pour les \u00E9trangers",
    description: "Imp\u00F4t \u00E0 la source, TOU, permis B/C/L, d\u00E9ductions, double imposition et d\u00E9claration fiscale.",
    href: "/impots-suisse-etrangers",
    tag: "FISCALIT\u00C9",
  },
  {
    icon: "\u{1F465}",
    title: "Coaching carri\u00E8re en Suisse",
    description: "Optimiser votre CV, pr\u00E9parer vos entretiens, n\u00E9gocier votre salaire avec un accompagnement personnalis\u00E9.",
    href: "/coaching-carriere",
    tag: "EMPLOI",
  },
];

/* ───────── PAGE ───────── */

export default function GuidePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#FFFBF0",
          borderTop: "1px solid rgba(217,119,6,0.15)",
          borderBottom: "1px solid rgba(217,119,6,0.15)",
          paddingTop: 56,
          paddingBottom: 56,
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span
            className="inline-block font-body uppercase rounded-full"
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#D97706",
              backgroundColor: "rgba(217,119,6,0.1)",
              padding: "4px 12px",
              marginBottom: 16,
            }}
          >
            RESSOURCES
          </span>
          <h1
            className="font-heading"
            style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginBottom: 16 }}
          >
            Nos guides{" "}
            <span className="font-heading italic" style={{ color: "#D97706" }}>
              pratiques
            </span>
          </h1>
          <p
            className="font-body"
            style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, maxWidth: 560 }}
          >
            Des guides rédigés par des experts pour vous accompagner à chaque étape de votre
            installation et de votre vie en Suisse. Clairs, complets, et mis à jour régulièrement.
          </p>
        </div>
      </section>

      {/* GUIDES GRID */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 56, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map((guide) => (
            <div
              key={guide.href}
              className="rounded-xl bg-white overflow-hidden"
              style={{ border: "1px solid #E2E8F0" }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-center"
                style={{ height: 100, backgroundColor: "#FFFBF0", fontSize: 42 }}
              >
                {guide.icon}
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 24px 20px" }}>
                <span
                  className="inline-block font-body uppercase"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#D97706",
                    marginBottom: 10,
                  }}
                >
                  {guide.tag}
                </span>
                <h2
                  className="font-heading"
                  style={{ fontSize: 18, fontWeight: 600, color: "#111827", lineHeight: 1.3, marginBottom: 10 }}
                >
                  {guide.title}
                </h2>
                <p
                  className="font-body"
                  style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 20 }}
                >
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="font-body"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#D97706",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {"Lire le guide →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2
            className="font-heading"
            style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}
          >
            Recevez nos conseils chaque semaine
          </h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
            {"Un email par semaine. Les pièges à éviter, les économies à faire."}
          </p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input
              type="email"
              placeholder="Votre email"
              className="font-body rounded-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 18px",
                fontSize: 14,
                color: "#FFFFFF",
                width: 240,
                outline: "none",
              }}
            />
            <button
              className="font-body rounded-lg text-white border-0 cursor-pointer"
              style={{
                backgroundColor: "#D97706",
                fontSize: 14,
                fontWeight: 500,
                padding: "12px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {"S'inscrire →"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
