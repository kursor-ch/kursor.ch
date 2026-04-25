import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités Suisse : lois, réformes et conseils | Kursor",
  description:
    "Suivez l'actualité suisse en matière de lois, réformes sociales et fiscales : 3e pilier, LAMal, marché immobilier, frontaliers et bien plus. Mis à jour régulièrement.",
};

type Article = {
  icon: string;
  tag: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  href?: string;
};

/* ───────── DATA ───────── */

const ARTICLES: Article[] = [
  {
    icon: "🎯",
    tag: "PRÉVOYANCE",
    title: "Rachat rétroactif 3a 2026 : rattraper jusqu'à 10 ans de cotisations manquées",
    description:
      "Depuis le 1er janvier 2026, l'OPP3 modifiée permet de combler les lacunes de pilier 3a sur 10 ans glissants. Conditions, plafonds, exemples chiffrés et stratégie de séquencement pour ne rien laisser sur la table.",
    author: "Équipe Kursor",
    date: "25 avril 2026",
    readTime: "8 min",
    href: "/actualite/rachat-retroactif-3a-2026-guide",
  },
  {
    icon: "🏠",
    tag: "LOGEMENT",
    title: "Lex Koller 2026 : ce que le durcissement change pour les résidents en Suisse",
    description:
      "Le Conseil fédéral a annoncé le 15 avril 2026 un avant-projet qui restreint l'acquisition d'immeubles par des étrangers. Décryptage des cinq mesures et impact concret par profil — résidents, frontaliers, locataires.",
    author: "Équipe Kursor",
    date: "25 avril 2026",
    readTime: "6 min",
    href: "/actualite/lex-koller-2026-immobilier-suisse",
  },
  {
    icon: "💼",
    tag: "EMPLOI",
    title: "« Pas de Gen Z » : une offre d'emploi en Suisse relance le débat sur les jeunes au travail",
    description:
      "Une entreprise zurichoise a exclu la génération Z de ses candidatures. Derrière la polémique, les vraies tensions du marché du travail suisse en 2026 et ce que cela signifie pour les candidats internationaux.",
    author: "Équipe Kursor",
    date: "25 avril 2026",
    readTime: "5 min",
    href: "/actualite/generation-z-emploi-suisse-2026",
  },
  {
    icon: "🏥",
    tag: "ASSURANCES",
    title: "Chiffres-clés 2026 : assurance, prévoyance et salaire en Suisse — tout ce qui change",
    description:
      "Plafonds 3a, seuils LAA, paramètres LPP, taux de conversion, échelle de Berne : les chiffres actualisés pour 2026 et leur impact concret sur votre budget et votre couverture.",
    author: "Équipe Kursor",
    date: "25 avril 2026",
    readTime: "7 min",
    href: "/actualite/chiffres-cles-assurance-prevoyance-2026",
  },
  {
    icon: "🎯",
    tag: "PRÉVOYANCE",
    title: "3e pilier 2026 : plafond relevé et nouvelles déductions fiscales",
    description:
      "Le Conseil fédéral a confirmé le relèvement du plafond de versement au pilier 3a à 7 258 CHF pour les salariés. Une opportunité à saisir avant le 31 décembre pour optimiser votre charge fiscale.",
    author: "Équipe Kursor",
    date: "14 avril 2026",
    readTime: "5 min",
  },
  {
    icon: "🏥",
    tag: "SANTÉ",
    title: "LAMal 2026 : hausse des primes et nouvelles caisses moins chères",
    description:
      "Les primes d'assurance maladie ont encore augmenté en moyenne de 6 % pour 2026. Tour d'horizon des caisses qui tirent leur épingle du jeu et des astuces pour réduire votre facture.",
    author: "Laura B.",
    date: "8 avril 2026",
    readTime: "7 min",
  },
  {
    icon: "🏠",
    tag: "LOGEMENT",
    title: "Marché immobilier suisse : les loyers sous pression en 2026",
    description:
      "Le taux d'intérêt de référence maintenu à 1,75 % n'a pas suffi à freiner la hausse des loyers dans les grandes villes. Genève, Zurich et Lausanne restent les marchés les plus tendus.",
    author: "Marc T.",
    date: "1er avril 2026",
    readTime: "6 min",
  },
  {
    icon: "🌍",
    tag: "FRONTALIERS",
    title: "Frontaliers franco-suisses : ce qui change au 1er janvier 2026",
    description:
      "Nouveau régime fiscal pour les frontaliers, règles de télétravail assouplies à 40 % et mise à jour de la convention de sécurité sociale franco-suisse : le point complet sur les changements 2026.",
    author: "Karim D.",
    date: "24 mars 2026",
    readTime: "8 min",
  },
  {
    icon: "💼",
    tag: "EMPLOI",
    title: "Salaires en Suisse 2026 : quels secteurs ont le plus augmenté ?",
    description:
      "L'indexation des salaires sur l'inflation a profité à l'industrie pharmaceutique, à l'IT et à la construction. Les données de l'OFS révèlent un écart croissant entre cantons.",
    author: "Sophie M.",
    date: "18 mars 2026",
    readTime: "5 min",
  },
  {
    icon: "🏢",
    tag: "ENTREPRENEURIAT",
    title: "Créer une Sàrl en Suisse en 2026 : capital réduit à 20 000 CHF confirmé",
    description:
      "La réforme du droit des sociétés entre en vigueur. Le capital minimum pour une Sàrl passe à 20 000 CHF, rendant la création d'entreprise plus accessible pour les indépendants et startups.",
    author: "Équipe Kursor",
    date: "10 mars 2026",
    readTime: "4 min",
  },
];

/* ───────── PAGE ───────── */

export default function ActualitePage() {
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
            {"ACTUALITÉS"}
          </span>
          <h1
            className="font-heading"
            style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginBottom: 16 }}
          >
            {"Actualités et réformes"}{" "}
            <span className="font-heading italic" style={{ color: "#D97706" }}>
              en Suisse
            </span>
          </h1>
          <p
            className="font-body"
            style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, maxWidth: 560 }}
          >
            {"Lois, réformes sociales, évolutions du marché : restez informé de tout ce qui"}{" "}
            {"impacte votre vie en Suisse. Nos analyses claires, sans jargon."}
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 56, paddingBottom: 64 }}>

        {/* Featured article (first card, full width) */}
        {(() => {
          const featured = ARTICLES[0];
          const FeaturedWrapper: React.ElementType = featured.href ? Link : "div";
          const wrapperProps = featured.href ? { href: featured.href } : {};
          return (
            <FeaturedWrapper
              {...wrapperProps}
              className="rounded-xl bg-white overflow-hidden block"
              style={{ border: "1px solid #E2E8F0", marginBottom: 32, textDecoration: "none" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
                <div
                  className="flex items-center justify-center"
                  style={{ minHeight: 160, backgroundColor: "#FFFBF0", fontSize: 56 }}
                >
                  {featured.icon}
                </div>
                <div style={{ padding: "32px 32px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                    <span
                      className="inline-block font-body uppercase rounded-full"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "#D97706",
                        backgroundColor: "rgba(217,119,6,0.1)",
                        padding: "3px 10px",
                      }}
                    >
                      {featured.tag}
                    </span>
                    <span className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>À LA UNE</span>
                  </div>
                  <h2
                    className="font-heading"
                    style={{ fontSize: 22, fontWeight: 600, color: "#111827", lineHeight: 1.35, marginBottom: 12 }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="font-body"
                    style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 20 }}
                  >
                    {featured.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>
                      {featured.author} · {featured.date}
                    </p>
                    <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>{featured.readTime}</p>
                  </div>
                </div>
              </div>
            </FeaturedWrapper>
          );
        })()}

        {/* Remaining articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.slice(1).map((article) => {
            const Wrapper: React.ElementType = article.href ? Link : "div";
            const wrapperProps = article.href ? { href: article.href } : {};
            return (
              <Wrapper
                key={article.title}
                {...wrapperProps}
                className="rounded-xl bg-white overflow-hidden block"
                style={{ border: "1px solid #E2E8F0", textDecoration: "none" }}
              >
                {/* Card header */}
                <div
                  className="flex items-center justify-center"
                  style={{ height: 100, backgroundColor: "#FFFBF0", fontSize: 40 }}
                >
                  {article.icon}
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 24px" }}>
                  <span
                    className="inline-block font-body uppercase"
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "#D97706",
                      marginBottom: 8,
                    }}
                  >
                    {article.tag}
                  </span>
                  <h2
                    className="font-body"
                    style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4, marginBottom: 10 }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="font-body"
                    style={{ fontSize: 13, color: "#475569", lineHeight: 1.65, marginBottom: 16 }}
                  >
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between" style={{ paddingTop: 12, borderTop: "1px solid #F1F5F9" }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>
                      {article.author} · {article.date}
                    </p>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{article.readTime}</p>
                  </div>
                </div>
              </Wrapper>
            );
          })}
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
