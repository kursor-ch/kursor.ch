import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ARTICLE_IMAGES } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Guides pratiques pour vivre en Suisse | Kursor",
  description:
    "Retrouvez tous les guides pratiques Kursor pour bien vivre en Suisse : permis de séjour, logement, assurance maladie, emploi, création d'entreprise et retraite.",
};

/* ───────── DATA ───────── */

const GUIDES = [
  {
    icon: "\u{1F4DD}",
    title: "Imp\u00F4ts en Suisse pour les \u00E9trangers",
    description: "Imp\u00F4t \u00E0 la source, TOU, permis B/C/L, d\u00E9ductions, double imposition et d\u00E9claration fiscale.",
    href: "/impots-suisse-etrangers",
    tag: "FISCALIT\u00C9",
  },
  {
    icon: "\u{1F4CA}",
    title: "Bar\u00E8mes d\u2019imp\u00F4t sur le revenu en Suisse",
    description: "Bar\u00E8me IFD 2026 officiel, imp\u00F4ts cantonaux et coefficients communaux. M\u00E9thode de calcul pas-\u00E0-pas.",
    href: "/impot-suisse",
    tag: "FISCALIT\u00C9",
  },
  {
    icon: "\u{1F3E2}",
    title: "Meilleures entreprises suisses 2026",
    description: "Top 10 Randstad et liste des meilleures entreprises suisses par secteur : horlogerie, banque, pharma, tech, transports.",
    href: "/meilleures-entreprises-suisses",
    tag: "EMPLOI",
  },
  {
    icon: "\u{1F4B6}",
    title: "Coût de la vie en Suisse en 2026",
    description: "Prix par poste, budgets types par profil, comparaison Suisse-France et écarts entre cantons. Le guide complet pour s’installer.",
    href: "/cout-vie-en-suisse",
    tag: "S’INSTALLER",
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
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-xl bg-white overflow-hidden block transition-shadow hover:shadow-lg"
              style={{ border: "1px solid #E2E8F0", textDecoration: "none" }}
            >
              {/* Card header */}
              {ARTICLE_IMAGES[guide.href] ? (
                <div className="relative w-full" style={{ height: 180, backgroundColor: "#FFFBF0" }}>
                  <Image
                    src={ARTICLE_IMAGES[guide.href].src}
                    alt={ARTICLE_IMAGES[guide.href].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center"
                  style={{ height: 100, backgroundColor: "#FFFBF0", fontSize: 42 }}
                >
                  {guide.icon}
                </div>
              )}

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
                <span
                  className="font-body"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#D97706",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {"Lire le guide →"}
                </span>
              </div>
            </Link>
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
