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
    icon: "📋",
    title: "Permis de séjour en Suisse",
    description:
      "Permis B, C, L, G, frontalier… Identifiez le titre adapté à votre situation et maîtrisez les démarches auprès du canton.",
    href: "/test/permis-suisse",
    tag: "S'INSTALLER",
  },
  {
    icon: "🏠",
    title: "Louer un appartement en Suisse",
    description:
      "Dossier de location, garantie de loyer, résiliation de bail : tout ce qu'il faut savoir avant de signer un contrat.",
    href: "/test/logement-en-suisse",
    tag: "LOGEMENT",
  },
  {
    icon: "🏥",
    title: "Assurance maladie en Suisse",
    description:
      "LAMal, LCA, franchise, primes : comment choisir la meilleure caisse maladie et réduire votre facture santé.",
    href: "/test/assurance-maladie",
    tag: "SANTÉ",
  },
  {
    icon: "💼",
    title: "Trouver un emploi en Suisse",
    description:
      "CV suisse, entretien, salaire minimum, conventions collectives : toutes les clés pour décrocher votre poste.",
    href: "/test/emploi-suisse",
    tag: "EMPLOI",
  },
  {
    icon: "🏢",
    title: "Créer une entreprise en Suisse",
    description:
      "Sàrl, SA ou raison individuelle ? Démarches d'inscription au RC, capital, obligations fiscales et sociales.",
    href: "/test/creation-entreprise",
    tag: "ENTREPRENEURIAT",
  },
  {
    icon: "🎯",
    title: "La retraite en Suisse",
    description:
      "1er, 2e et 3e pilier : comprendre le système de prévoyance suisse et optimiser votre pension dès aujourd'hui.",
    href: "/test/retraite-suisse",
    tag: "FINANCES",
  },
];

/* ───────── PAGE ───────── */

export default function GuidePage() {
  return (
    <div className="bg-creme">

      {/* BREADCRUMB */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/test" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/test" style={{ color: "#94A3B8" }}>Ressources</Link>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>Guide</span>
        </nav>
      </div>

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
