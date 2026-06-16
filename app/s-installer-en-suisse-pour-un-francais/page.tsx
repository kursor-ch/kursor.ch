import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { ARTICLE_IMAGES, getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "S'installer en Suisse pour un Français : le guide complet",
  description: "Permis de séjour, fiscalité, logement, santé : tout ce qu'un Français doit savoir pour s'installer en Suisse. Démarches, coûts et conseils pratiques.",
  alternates: {
    canonical: "https://kursor.ch/s-installer-en-suisse-pour-un-francais",
  },
  other: {
    "geo.region": "CH",
    "geo.placename": "Suisse",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-suisse", label: "Pourquoi s'installer en Suisse" },
  { id: "formalites", label: "Les formalités administratives" },
  { id: "fiscalite", label: "Fiscalité" },
  { id: "se-loger", label: "Se loger en Suisse" },
  { id: "sante", label: "Santé : l'assurance maladie" },
  { id: "travail", label: "Trouver du travail" },
  { id: "famille", label: "S'installer en famille" },
  { id: "mariage", label: "Mariage et vie civile" },
  { id: "nationalite", label: "Vers la nationalité suisse" },
];

const A_RETENIR = [
  "Aucun visa n'est requis pour un ressortissant français : une carte d'identité ou un passeport suffit.",
  "Le <strong>permis de séjour</strong> (livret B, C, G ou L) dépend de votre situation professionnelle et de la durée d'installation envisagée.",
  "Vous devez déclarer votre arrivée à la commune dans les <strong>8 jours</strong> suivant votre installation.",
  "Le coût de la vie en Suisse est en moyenne <strong>75 % plus élevé qu'en France</strong>, mais les salaires compensent partiellement cet écart.",
  "Une <strong>assurance maladie privée</strong> est obligatoire dans les 3 mois suivant votre arrivée.",
  "Votre permis de conduire français doit être échangé contre un permis suisse dans les <strong>12 mois</strong>.",
];

const PERMIS = [
  { name: "Livret L", subtitle: "Autorisation de courte durée", desc: "Valable 12 mois et renouvelable, il s'adresse aux salariés disposant d'un contrat de travail inférieur à un an, ainsi qu'aux demandeurs d'emploi en recherche active." },
  { name: "Livret B", subtitle: "Autorisation de séjour", desc: "C'est le permis le plus courant pour s'installer durablement en Suisse. D'une validité de 5 ans et renouvelable, il est accordé sur présentation d'un contrat de travail de plus de 12 mois, ou à des personnes sans activité lucrative disposant de ressources financières suffisantes. Le conjoint et les enfants de moins de 18 ans peuvent bénéficier du même titre, sous conditions (vie en commun, logement adapté, absence de dépendance à l'aide sociale)." },
  { name: "Livret C", subtitle: "Autorisation d'établissement", desc: "Après 5 ans de résidence ininterrompue en Suisse, vous pouvez prétendre au livret C. Sa validité est illimitée et il garantit une pleine mobilité géographique et professionnelle sur le territoire." },
  { name: "Livret G", subtitle: "Autorisation frontalière", desc: "Destiné aux travailleurs frontaliers, c'est-à-dire aux Français qui résident en France mais travaillent en Suisse, ce permis est valable 5 ans pour les contrats à durée indéterminée ou supérieure à un an. Il suffit d'avoir un contrat de travail suisse et de résider sur le territoire européen pour l'obtenir auprès des autorités cantonales." },
];

const COUT_VIE = [
  { poste: "Loyer en centre-ville (appartement)", prix: "~2 960 €/mois" },
  { poste: "Déjeuner au restaurant", prix: "~26 €" },
  { poste: "Menu fast-food", prix: "~16 €" },
  { poste: "Consultation chez un généraliste (20 min)", prix: "~60 €" },
  { poste: "Contrôle dentaire", prix: "~200 €" },
  { poste: "Ticket de bus", prix: "~3,50 €" },
  { poste: "Abonnement internet", prix: "~55 €/mois" },
];

const SECTEURS_PORTEURS = [
  "La <strong>santé</strong> (médecins, infirmiers, spécialistes)",
  "Les <strong>industries pharmaceutiques et chimiques</strong> (principaux recruteurs du pays)",
  "L'<strong>horlogerie</strong> (profils techniques et qualifiés)",
  "Les <strong>nouvelles technologies</strong> (grandes entreprises internationales présentes sur le territoire)",
  "Le <strong>conseil et les services aux entreprises</strong>",
];

const RELATED_ARTICLES = [
  { href: "/impots-suisse-etrangers", icon: "\u{1F4DD}", tag: "FISCALITÉ", title: "Impôts en Suisse pour les étrangers : guide 2026", author: "Équipe Kursor", date: "Avril 2026", readTime: "18 min" },
  { href: "/cout-vie-en-suisse", icon: "\u{1F4B6}", tag: "PRATIQUE", title: "Coût de la vie en Suisse en 2026", author: "Équipe Kursor", date: "Mai 2026", readTime: "15 min" },
  { href: "/permis-suisse", icon: "\u{1F4CB}", tag: "S'INSTALLER", title: "Permis de séjour en Suisse : le guide complet", author: "Équipe Kursor", date: "Avril 2026", readTime: "14 min" },
];

/* ───────── PAGE ───────── */

export default function SInstallerEnSuissePage() {
  const heroImg = getArticleImage("/s-installer-en-suisse-pour-un-francais");

  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>S{"'"}INSTALLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            S{"'"}installer en Suisse pour un Français :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Juin 2026 {"·"} 14 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBARS */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR — TOC */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Sommaire</p>
                <ul className="list-none p-0 m-0">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="font-body block" style={{ fontSize: 13, color: "#475569", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative", textDecoration: "none" }}>
                        <span style={{ position: "absolute", left: 0, color: "#D97706", fontWeight: 600 }}>{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article>
            {heroImg && <GuideHeroImage src={heroImg.src} alt={heroImg.alt} />}

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {A_RETENIR.map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              S{"'"}installer en Suisse pour un Français est une démarche accessible, mais qui demande une préparation sérieuse. Qualité de vie, salaires attractifs, stabilité politique et proximité géographique : la Suisse s{"'"}impose régulièrement comme la première destination d{"'"}expatriation pour les ressortissants français. Pourtant, entre les permis de séjour, les obligations fiscales, la couverture santé et le coût de la vie, les points d{"'"}attention ne manquent pas. Ce guide vous donne toutes les clés pour préparer votre installation sereinement.
            </p>

            {/* Section 1 */}
            <h2 id="pourquoi-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi s{"'"}installer en Suisse quand on est Français ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse figure systématiquement en tête des classements des pays où il fait bon s{"'"}expatrier. Plusieurs raisons expliquent cet attrait durable.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Des salaires nettement supérieurs à la France.</strong> La rémunération brute moyenne y est environ 75 % plus élevée. À Genève, le salaire minimum mensuel brut dépasse les 4 000 €. Une fois <a href="/cout-vie-en-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le coût de la vie en Suisse</a> pris en compte, le gain réel se situe autour de 30 %, ce qui reste significatif sur le long terme.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Une stabilité politique et économique rare.</strong> La neutralité helvétique, son système bancaire solide et son économie diversifiée (pharmaceutique, horlogerie, finance, nouvelles technologies) en font l{"'"}un des pays les plus stables au monde. La Suisse figure parmi les dix pays les plus sûrs selon le Global Peace Index.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Un cadre de vie de qualité.</strong> Avec 175 lacs, des massifs alpins accessibles et des villes à taille humaine, la Suisse conjugue nature et modernité. Les horaires de travail, souvent de 42 heures hebdomadaires, laissent de la place aux activités extra-professionnelles.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>La langue, un atout pour les Français.</strong> Genève, Lausanne, Neuchâtel, le Jura et le Valais sont francophones ou bilingues. Un Français peut donc s{"'"}installer en Suisse romande sans barrière linguistique, tout en ayant la possibilité d{"'"}apprendre l{"'"}allemand ou l{"'"}italien dans d{"'"}autres cantons.
            </p>

            {/* Section 2 */}
            <h2 id="formalites" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les formalités administratives pour s{"'"}installer en Suisse</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Visa et documents d{"'"}entrée</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Bonne nouvelle : aucun visa n{"'"}est nécessaire pour un ressortissant français souhaitant s{"'"}expatrier en Suisse. Depuis le 1er juin 2004, la libre circulation des travailleurs s{"'"}applique entre la Suisse et les pays membres de l{"'"}Union européenne. Une carte nationale d{"'"}identité ou un passeport en cours de validité suffisent pour entrer sur le territoire.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              En revanche, pour toute installation de plus de 90 jours ou l{"'"}exercice d{"'"}une activité professionnelle, l{"'"}obtention d{"'"}un titre de séjour devient obligatoire.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les différents permis de séjour</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le <a href="/permis-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>permis de séjour en Suisse</a> pour un Français dépend de votre situation. Voici les quatre principaux livrets :
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 24 }}>
              {PERMIS.map((p) => (
                <div key={p.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <div className="flex items-baseline gap-3" style={{ marginBottom: 8 }}>
                    <p className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: "#D97706" }}>{p.name}</p>
                    <p className="font-body italic" style={{ fontSize: 13, color: "#64748B" }}>{p.subtitle}</p>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "16px 20px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Important :</strong> il est interdit de débuter une activité professionnelle en Suisse avant d{"'"}avoir obtenu votre autorisation de travail, sauf pour les missions de moins de 90 jours déclarées en ligne par l{"'"}employeur.
              </p>
            </div>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La déclaration d{"'"}arrivée à la commune</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Toute personne s{"'"}installant en Suisse doit déclarer son arrivée auprès de l{"'"}administration communale dans les <strong style={{ color: "#111827" }}>8 jours</strong> suivant son installation. Cette déclaration doit impérativement intervenir avant votre premier jour de travail. C{"'"}est également le bon moment pour ouvrir un compte local : pour comparer les offres, consultez notre sélection de <a href="/meilleure-banque-suisse" style={{ color: "#D97706", textDecoration: "underline" }}>la meilleure banque suisse</a> selon votre profil.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le permis de conduire</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Votre permis de conduire français reste valable pendant les <strong style={{ color: "#111827" }}>12 premiers mois</strong> de résidence en Suisse. Passé ce délai, vous avez l{"'"}obligation de l{"'"}échanger contre un permis suisse. La démarche s{"'"}effectue auprès du Service des Automobiles de votre canton. Aucun examen de conduite n{"'"}est requis pour les ressortissants de l{"'"}UE, mais un test de la vue est systématiquement demandé.
            </p>

            {/* Section 3 */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Fiscalité : ce que change l{"'"}installation en Suisse pour un Français</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              S{"'"}installer en Suisse entraîne en principe la perte du statut de résident fiscal français. C{"'"}est alors la législation fiscale suisse qui s{"'"}applique à l{"'"}ensemble de vos revenus.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Quelques obligations subsistent côté français, notamment les taxes foncières sur les biens immobiliers que vous continueriez à détenir en France. Il est indispensable de signaler votre déménagement à l{"'"}administration fiscale française pour éviter toute situation de double imposition. Pour aller plus loin, consultez notre guide sur <a href="/impots-suisse-etrangers" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>les impôts en Suisse pour les étrangers</a>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les taux d{"'"}imposition varient significativement d{"'"}un canton à l{"'"}autre, c{"'"}est l{"'"}un des critères à intégrer dans le choix de votre lieu de résidence.
            </p>

            {/* Section 4 */}
            <h2 id="se-loger" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Se loger en Suisse : villes et budget</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les villes privilégiées par les Français</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Genève</strong> est la destination par excellence des expatriés francophones. Siège de nombreuses organisations internationales, elle attire fonctionnaires, diplomates et profils qualifiés du monde entier. Son cadre au bord du lac Léman est exceptionnel, mais elle reste l{"'"}une des villes les plus chères au monde, notamment pour le logement.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Lausanne</strong>, quatrième ville du pays, offre une atmosphère plus jeune et cosmopolite, une vie culturelle riche et un rythme plus accessible. Elle séduit de plus en plus d{"'"}expatriés français à la recherche d{"'"}un meilleur équilibre vie professionnelle et vie personnelle.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              <strong style={{ color: "#111827" }}>Zurich</strong>, centre économique et financier du pays, concentre les sièges des grandes entreprises internationales et offre d{"'"}innombrables opportunités de carrière. La langue officielle du canton est l{"'"}allemand. Comme Genève, les loyers y sont très élevés, mais les transports en commun permettent de s{"'"}éloigner facilement du centre. Découvrez aussi notre liste des <a href="/meilleures-entreprises-suisses" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>meilleures entreprises en Suisse</a> par secteur.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le coût de la vie en Suisse</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              S{"'"}installer en Suisse implique d{"'"}accepter un coût de la vie environ <strong style={{ color: "#111827" }}>75 % supérieur à la France</strong>. Voici quelques repères concrets :
            </p>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Poste de dépense</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Prix indicatif</th>
                  </tr>
                </thead>
                <tbody>
                  {COUT_VIE.map((row, i) => (
                    <tr key={row.poste} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
                      <td className="font-body" style={{ fontSize: 13, color: "#111827", fontWeight: 500, padding: "10px 14px" }}>{row.poste}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.prix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 id="sante" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Santé : l{"'"}assurance maladie obligatoire en Suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Il n{"'"}existe pas de Sécurité sociale en Suisse au sens français du terme. En revanche, la loi fédérale sur l{"'"}assurance maladie (LAMal) impose à toute personne résidant en Suisse de souscrire <a href="/assurance-maladie" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>une caisse maladie en Suisse</a> de base auprès d{"'"}un organisme privé, dans un délai de <strong style={{ color: "#111827" }}>3 mois</strong> à compter de l{"'"}installation.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Cette couverture de base prend en charge la médecine générale, les hospitalisations en division commune, la maternité et les médicaments prescrits. Elle est assortie d{"'"}une franchise annuelle (seuil à partir duquel les remboursements s{"'"}activent) et d{"'"}une quote-part de 10 % à votre charge.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les expatriés français souhaitant être couverts également lors de leurs séjours en France ou à l{"'"}étranger, une assurance santé internationale est vivement recommandée en complément.
            </p>

            {/* Section 6 */}
            <h2 id="travail" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Trouver du travail pour s{"'"}installer en Suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le marché de l{"'"}emploi suisse est parmi les plus dynamiques d{"'"}Europe, avec un taux de chômage structurellement bas. Les secteurs les plus porteurs pour les Français sont :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 24 }}>
              {SECTEURS_PORTEURS.map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La maîtrise de l{"'"}anglais est un avantage réel. Sur le plan des conditions de travail, le droit suisse est plus souple qu{"'"}en France : durée hebdomadaire légale entre 45 et 50 heures (42 heures en pratique), minimum 4 semaines de congés payés par an, avec souvent une 5e semaine prévue par les conventions collectives.
            </p>

            {/* Section 7 */}
            <h2 id="famille" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>S{"'"}installer en Suisse en famille</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La scolarité des enfants</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              Le système éducatif suisse est reconnu comme l{"'"}un des meilleurs au monde. Deux options s{"'"}offrent aux familles françaises :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 24 }}>
              {[
                "L'<strong>inscription dans une école suisse</strong> de la commune de résidence, possible dès l'arrivée (permis de séjour et attestation d'assurance maladie requis).",
                "L'<strong>inscription dans un établissement français homologué</strong>, présents à Genève, Lausanne, Zurich, Berne et Bâle. Ces écoles privées couvrent de la maternelle au lycée mais représentent un coût annuel de plusieurs milliers d'euros.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ color: "#D97706" }}>{"•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le regroupement familial</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Votre conjoint et vos enfants de moins de 18 ans peuvent vous rejoindre en Suisse dans le cadre du regroupement familial. Ils bénéficient du même titre de séjour que vous, sous réserve de vivre en ménage commun, de disposer d{"'"}un logement approprié et de ne pas dépendre de l{"'"}aide sociale.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "16px 20px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>À noter :</strong> le droit du sol n{"'"}existe pas en Suisse. Un enfant né en Suisse d{"'"}un parent français conserve la nationalité française, pas la nationalité suisse.
              </p>
            </div>

            {/* Section 8 */}
            <h2 id="mariage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Mariage et vie civile en Suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les mariages célébrés en France sont généralement reconnus en Suisse. Le PACS n{"'"}a pas d{"'"}équivalent direct dans le droit suisse : les couples non mariés relèvent du régime du concubinage. Depuis juillet 2022, le mariage pour tous est ouvert en Suisse, les partenariats enregistrés antérieurs pouvant être convertis en mariage.
            </p>

            {/* Section 9 */}
            <h2 id="nationalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Vers la nationalité suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour les Français souhaitant acquérir la nationalité suisse, deux voies existent :
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>La naturalisation ordinaire :</strong> accessible après <strong style={{ color: "#111827" }}>10 ans de résidence</strong> en Suisse, dont 3 ans consécutifs dans les 5 dernières années, et sur présentation d{"'"}un permis C.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>La naturalisation facilitée :</strong> possible si votre conjoint est citoyen suisse, après <strong style={{ color: "#111827" }}>5 ans de résidence commune</strong> en Suisse (ou 6 ans de mariage si l{"'"}un des deux réside à l{"'"}étranger).
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La double nationalité franco-suisse est reconnue par les deux pays. Devenir citoyen suisse ne signifie donc pas renoncer à sa nationalité française.
            </p>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>Pour résumer</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                S{"'"}installer en Suisse pour un Français est une démarche accessible grâce à la libre circulation européenne, mais qui exige une préparation rigoureuse. Les étapes clés sont : obtenir le bon permis de séjour selon votre situation (livret B pour la majorité des actifs), déclarer votre arrivée à la commune sous 8 jours, souscrire une assurance maladie dans les 3 mois, signaler votre départ aux impôts français et échanger votre permis de conduire dans l{"'"}année. En contrepartie de démarches bien menées, la Suisse offre des salaires supérieurs, une qualité de vie reconnue mondialement et un cadre francophone accessible en Suisse romande. À vous de jouer.
              </p>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <SidebarGuides exclude="/s-installer-en-suisse-pour-un-francais" />
            </div>
          </aside>
        </div>
      </section>

      {/* À LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827", marginBottom: 32 }}>À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <Link key={a.title} href={a.href} className="rounded-xl bg-white overflow-hidden block no-underline" style={{ border: "1px solid #E2E8F0", color: "inherit" }}>
                {ARTICLE_IMAGES[a.href] ? (
                  <div className="relative w-full" style={{ height: 160, backgroundColor: "#FFFBF0" }}>
                    <Image
                      src={ARTICLE_IMAGES[a.href].src}
                      alt={ARTICLE_IMAGES[a.href].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                )}
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"·"} {a.date}</p>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Permis, fiscalité, bons plans pour réussir votre installation.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"'"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
