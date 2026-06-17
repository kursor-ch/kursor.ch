import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { ARTICLE_IMAGES, getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Prendre sa retraite en Suisse : le guide complet 2026",
  description: "Permis B, système AVS, coût de la vie, fiscalité : tout ce qu'un Français doit savoir pour préparer et vivre sa retraite en Suisse sereinement.",
  alternates: {
    canonical: "https://kursor.ch/prendre-sa-retraite-en-suisse",
  },
  other: {
    "geo.region": "CH",
    "geo.placename": "Suisse",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-suisse", label: "Pourquoi choisir la Suisse" },
  { id: "conditions", label: "Conditions pour s'installer" },
  { id: "trois-piliers", label: "Le système de retraite suisse" },
  { id: "pension-francaise", label: "Votre pension française" },
  { id: "fiscalite", label: "Fiscalité du retraité" },
  { id: "sante", label: "Assurance maladie obligatoire" },
  { id: "budget", label: "Combien faut-il pour vivre" },
  { id: "villes", label: "Où s'installer" },
  { id: "maisons-retraite", label: "Maisons de retraite" },
];

const A_RETENIR = [
  "Le <strong>permis B retraité</strong> est obligatoire pour s'installer en Suisse : il exige des ressources d'au moins <strong>50 000 CHF par an</strong> et est valable 5 ans, renouvelable automatiquement pour les ressortissants français.",
  "L'âge de la retraite en Suisse est fixé à <strong>65 ans</strong> pour les hommes et les femmes depuis la réforme AVS 21.",
  "Le système de retraite suisse repose sur <strong>trois piliers</strong> : l'AVS (retraite de base), la LPP (retraite professionnelle) et la prévoyance privée (3e pilier).",
  "Vous devez souscrire une <strong>assurance maladie privée</strong> dans les 3 mois suivant votre installation.",
  "Votre <strong>pension française continue d'être versée</strong> même si vous résidez en Suisse, grâce au système d'échange franco-suisse.",
  "Il faut compter entre <strong>3 680 et 4 600 € par mois</strong> pour vivre confortablement en Suisse en tant que retraité.",
  "La Suisse et la France évitent la double imposition via une <strong>convention fiscale bilatérale</strong>.",
];

const COUT_VIE = [
  { poste: "Logement (loyer en centre-ville)", prix: "à partir de 1 500 €" },
  { poste: "Alimentation et vie quotidienne", prix: "800 à 1 000 €" },
  { poste: "Assurance maladie", prix: "300 à 500 €" },
  { poste: "Transports", prix: "150 à 300 €" },
  { poste: "Loisirs et sorties", prix: "300 à 500 €" },
  { poste: "Budget confortable total", prix: "3 680 à 4 600 €/mois" },
];

const VILLES = [
  { name: "Lausanne", desc: "Au bord du lac Léman avec vue sur les Alpes, Lausanne offre un cadre paisible et pittoresque adapté aux retraités. Climat doux, promenades au bord du lac et vie culturelle riche en font l'une des destinations préférées des retraités francophones, avec d'excellentes infrastructures de santé." },
  { name: "Genève", desc: "Ville cosmopolite et francophone par excellence, Genève accueille de nombreux retraités français grâce à son atmosphère internationale, ses institutions culturelles et son accès direct au lac Léman. C'est aussi la ville la plus chère de Suisse, notamment pour le logement." },
  { name: "Zurich", desc: "Plus grande ville de Suisse, Zurich propose une qualité de vie élevée avec ses parcs, ses musées et ses lacs. Elle abrite des établissements de santé de réputation mondiale (Hôpital universitaire de Zurich, clinique Hirslanden). La langue officielle du canton est l'allemand." },
  { name: "Bâle", desc: "Régulièrement citée parmi les villes suisses où il fait bon vivre. Ville verte par excellence avec son zoo, ses jardins botaniques et les rives du Rhin. Sa proximité immédiate avec la France et l'Allemagne facilite le maintien des liens familiaux." },
  { name: "Lugano", desc: "Dans le canton du Tessin, Lugano séduit par son climat méditerranéen et son cadre lacustre exceptionnel. Idéal pour les retraités qui recherchent la douceur de vivre du Sud sans quitter la Suisse." },
  { name: "Berne", desc: "Capitale fédérale, Berne offre un environnement plus institutionnel avec une belle vieille ville classée au patrimoine mondial de l'UNESCO et des infrastructures complètes pour les retraités." },
];

const RELATED_ARTICLES = [
  { href: "/retraite-suisse", icon: "\u{1F3E6}", tag: "PATRIMOINE", title: "3e pilier suisse 2026 : guide complet", author: "Équipe Kursor", date: "Mai 2026", readTime: "16 min" },
  { href: "/assurance-maladie", icon: "\u{1FA7A}", tag: "SANTÉ", title: "Assurance maladie en Suisse : bien choisir", author: "Équipe Kursor", date: "Avril 2026", readTime: "15 min" },
  { href: "/cout-vie-en-suisse", icon: "\u{1F4B6}", tag: "PRATIQUE", title: "Coût de la vie en Suisse en 2026", author: "Équipe Kursor", date: "Mai 2026", readTime: "15 min" },
];

/* ───────── PAGE ───────── */

export default function PrendreSaRetraiteEnSuissePage() {
  const heroImg = getArticleImage("/prendre-sa-retraite-en-suisse");

  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>RETRAITE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Prendre sa retraite en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet 2026</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Juin 2026 {"·"} 15 min de lecture</p>
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
              Prendre sa retraite en Suisse est un projet séduisant pour de nombreux Français. Qualité de vie exceptionnelle, système de santé parmi les meilleurs au monde, proximité géographique avec la France, cadre naturel entre lacs et montagnes : les arguments ne manquent pas. Mais <a href="/s-installer-en-suisse-pour-un-francais" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>s{"'"}installer en Suisse</a> à la retraite implique des démarches administratives précises, un budget conséquent et une bonne compréhension du système de prévoyance helvétique. Ce guide vous accompagne étape par étape pour préparer votre retraite en Suisse en toute sérénité.
            </p>

            {/* Section 1 — Pourquoi */}
            <h2 id="pourquoi-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi choisir la Suisse pour sa retraite ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse figure régulièrement parmi les destinations préférées des retraités européens, et les Français ne font pas exception. Plusieurs raisons expliquent cet attrait durable.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Une qualité de vie sans équivalent.</strong> Infrastructures modernes, transports publics efficaces, espaces verts omniprésents et environnement sécurisé : la Suisse offre un cadre de vie que peu de pays peuvent égaler. Elle se classe systématiquement parmi les meilleures destinations mondiales en termes de qualité de vie.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Un système de santé d{"'"}excellence.</strong> Le Centre Hospitalier Universitaire Vaudois (CHUV) figure parmi les dix meilleurs hôpitaux au monde selon le classement Newsweek 2021. Zurich, Berne et Genève disposent également d{"'"}établissements de santé de premier plan. Pour les retraités, la qualité des soins est souvent un critère déterminant.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>La proximité avec la France.</strong> Contrairement à d{"'"}autres destinations d{"'"}expatriation, la Suisse reste accessible facilement depuis la France, en train comme en voiture. Une proximité rassurante pour maintenir des liens familiaux et revenir facilement en cas de besoin.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Un cadre naturel exceptionnel.</strong> Entre les 175 lacs du territoire, les massifs alpins, les sentiers de randonnée et les stations de ski, la Suisse offre un environnement idéal pour une retraite active et épanouissante.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              En revanche, prendre sa retraite en Suisse reste réservé aux profils disposant de ressources confortables. Le pays est le plus cher d{"'"}Europe et les disparités de richesse y sont importantes : environ une personne âgée sur cinq vit sous le seuil de la pauvreté selon l{"'"}Office fédéral de la statistique.
            </p>

            {/* Section 2 — Conditions */}
            <h2 id="conditions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les conditions pour s{"'"}installer en Suisse à la retraite</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le permis B retraité : la démarche incontournable</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour s{"'"}installer en Suisse à la retraite, tout ressortissant français doit obtenir un permis B, l{"'"}autorisation de séjour de base. La demande se fait auprès de l{"'"}office cantonal des migrations de votre futur lieu de résidence. Pour le détail des différentes catégories, consultez notre guide sur le <a href="/permis-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>permis de séjour en Suisse</a>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La condition principale est de justifier de ressources financières d{"'"}au moins <strong style={{ color: "#111827" }}>50 000 CHF par an</strong> (environ 51 500 €), tous revenus confondus : pensions de retraite françaises, revenus immobiliers, revenus de placements. Ce permis est accordé pour 5 ans et est automatiquement renouvelable pour les ressortissants français. Aucun âge minimum n{"'"}est requis depuis juin 2002.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Un document d{"'"}identité valide (carte nationale d{"'"}identité ou passeport) est suffisant pour entrer sur le territoire. Aucun vaccin n{"'"}est obligatoire, mais un bilan vaccinal à jour est recommandé.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La déclaration d{"'"}arrivée à la commune</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Comme pour tout résident, vous devez déclarer votre arrivée auprès de l{"'"}administration communale dans les <strong style={{ color: "#111827" }}>8 jours</strong> suivant votre installation. Cette démarche est indispensable pour l{"'"}ensemble des formalités qui suivent.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>L{"'"}immobilier en Suisse</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              En tant que ressortissant français titulaire d{"'"}un permis B, vous pouvez acheter un bien immobilier en Suisse sans restriction particulière. C{"'"}est un avantage notable par rapport à d{"'"}autres nationalités soumises à des quotas d{"'"}acquisition.
            </p>

            {/* Section 3 — Trois piliers */}
            <h2 id="trois-piliers" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le système de retraite suisse : les trois piliers</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Comprendre le système de retraite helvétique est essentiel pour anticiper vos revenus une fois installé en Suisse. Il repose sur une architecture à trois piliers complémentaires.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le 1er pilier : l{"'"}AVS (Assurance Vieillesse et Survivants)</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L{"'"}AVS est le pilier de base de la prévoyance suisse. Elle garantit une rente minimale à tous les résidents ayant cotisé. L{"'"}âge ordinaire de la retraite est fixé à <strong style={{ color: "#111827" }}>65 ans</strong> depuis la réforme AVS 21, aussi bien pour les hommes que pour les femmes.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour percevoir votre rente AVS, vous devez en faire la demande par écrit à votre caisse de compensation au moins trois mois avant l{"'"}âge ordinaire de la retraite. Si vous avez été salarié en Suisse, votre employeur peut vous indiquer quelle est votre caisse de compensation.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Retraite anticipée :</strong> la réforme AVS 21 permet de percevoir votre rente jusqu{"'"}à deux ans avant 65 ans, avec une réduction proportionnelle par mois anticipé. Il est possible d{"'"}anticiper une partie seulement de la rente (entre 20 et 80 %).
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              <strong style={{ color: "#111827" }}>Report de la retraite :</strong> vous pouvez également ajourner le versement de votre rente AVS d{"'"}un an au minimum et de cinq ans au maximum, ce qui augmente le montant de la rente perçue.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le 2e pilier : la LPP (prévoyance professionnelle)</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La LPP complète l{"'"}AVS pour les salariés ayant travaillé en Suisse. Elle est gérée par votre caisse de pension et représente une part significative du revenu de retraite. Prenez contact avec votre caisse de pension plusieurs mois avant votre départ en retraite pour connaître le montant exact de votre rente et les modalités de versement.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La retraite anticipée via le 2e pilier est possible dès 58 ans dans certaines institutions, mais n{"'"}est pas universelle. Renseignez-vous au moins un an à l{"'"}avance.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Si vous continuez à travailler après 65 ans, le versement de votre rente LPP peut être repoussé jusqu{"'"}à 70 ans.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le 3e pilier : la prévoyance privée</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <a href="/retraite-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>3e pilier suisse</a> est une épargne individuelle facultative, déductible fiscalement (pilier 3a) ou libre (pilier 3b). Il permet de compléter les deux premiers piliers, notamment pour les profils ayant connu des interruptions de carrière.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le retrait du 3e pilier est possible au plus tôt 5 ans avant l{"'"}âge ordinaire de la retraite, soit dès 60 ans. Si vous continuez à travailler après 65 ans, vous pouvez différer ce retrait jusqu{"'"}à 5 ans après l{"'"}âge ordinaire.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              En pratique, les deux premiers piliers couvrent en moyenne <strong style={{ color: "#111827" }}>55 à 60 % du dernier salaire</strong>. Le 3e pilier est donc un levier important pour maintenir son niveau de vie à la retraite.
            </p>

            {/* Section 4 — Pension française */}
            <h2 id="pension-francaise" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Votre pension française : que devient-elle ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              C{"'"}est l{"'"}une des premières questions des retraités français souhaitant s{"'"}installer en Suisse : vont-ils continuer à percevoir leur pension ?
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La réponse est <strong style={{ color: "#111827" }}>oui</strong>. Votre pension de retraite française continue d{"'"}être versée, même si vous résidez en Suisse. La France et la Suisse ont mis en place un système d{"'"}échange automatique pour les assurés qui résident dans un pays et perçoivent une pension dans un autre. Dans la grande majorité des cas, vous n{"'"}êtes pas tenus d{"'"}adresser chaque année un certificat de vie à votre caisse de retraite française.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              En revanche, votre situation fiscale change. Vous ne serez plus soumis à la CSG ni à la CRDS françaises. En contrepartie, vous paierez une cotisation de <strong style={{ color: "#111827" }}>3,2 % sur votre pension de base</strong> et de <strong style={{ color: "#111827" }}>4,2 % sur votre retraite complémentaire</strong>.
            </p>

            {/* Section 5 — Fiscalité */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Fiscalité : ce que change l{"'"}installation en Suisse pour un retraité français</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              S{"'"}installer en Suisse à la retraite entraîne en principe la perte du statut de résident fiscal français. C{"'"}est alors la législation fiscale suisse qui s{"'"}applique, avec des taux d{"'"}imposition qui varient sensiblement d{"'"}un canton à l{"'"}autre.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Il est indispensable de signaler votre déménagement à l{"'"}administration fiscale française pour éviter toute situation de double imposition. Une convention fiscale bilatérale entre la France et la Suisse encadre la répartition des droits d{"'"}imposition sur vos différents revenus. Pour aller plus loin sur ce point, consultez notre guide sur <a href="/impots-suisse-etrangers" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>les impôts en Suisse pour les étrangers</a>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>forfait fiscal suisse</strong> est un régime particulier accordé aux personnes fortunées n{"'"}exerçant aucune activité professionnelle en Suisse et dont l{"'"}imposition est calculée sur la base des dépenses plutôt que des revenus réels. Ce dispositif se raréfie progressivement et s{"'"}adresse à des profils patrimoniaux très spécifiques.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Certaines obligations fiscales subsistent côté français, notamment les taxes foncières sur les biens immobiliers que vous continueriez à détenir en France.
            </p>

            {/* Section 6 — Santé */}
            <h2 id="sante" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Santé : l{"'"}assurance maladie obligatoire pour les retraités</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, la Sécurité sociale n{"'"}existe pas au sens français du terme. Toute personne résidant sur le territoire doit souscrire <a href="/assurance-maladie" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>une assurance maladie en Suisse</a> de base auprès d{"'"}un organisme privé, dans un délai de <strong style={{ color: "#111827" }}>3 mois</strong> suivant l{"'"}installation.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Avant même votre départ de France, vous pouvez anticiper cette démarche en demandant auprès de votre caisse de retraite française votre rattachement au régime de sécurité sociale suisse via le <strong style={{ color: "#111827" }}>formulaire S1</strong> (Inscription en vue de bénéficier de la couverture de l{"'"}assurance maladie). Cette demande est individuelle et doit être effectuée pour chaque membre de votre famille.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour les retraités, les dépenses de santé peuvent rapidement devenir significatives : une consultation chez le généraliste coûte environ <strong style={{ color: "#111827" }}>60 € pour 20 minutes</strong>, et un contrôle dentaire dépasse souvent les 200 €. Une assurance santé internationale en complément de l{"'"}assurance de base suisse est vivement recommandée, notamment pour être couvert lors de vos séjours en France.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Par ailleurs, depuis votre mise à la retraite, votre assurance-accident n{"'"}est plus prise en charge par un employeur. Pensez à souscrire une assurance-accident individuelle dès votre départ en retraite.
            </p>

            {/* Section 7 — Budget */}
            <h2 id="budget" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Combien faut-il pour vivre sa retraite en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La Suisse est le pays le plus cher d{"'"}Europe. Voici les principaux postes de dépenses à anticiper pour un retraité français. Pour creuser le sujet, voyez notre analyse complète du <a href="/cout-vie-en-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>coût de la vie en Suisse</a>.
            </p>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Poste de dépense</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Budget mensuel indicatif</th>
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
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les ressources minimales requises pour le permis B (50 000 CHF par an, soit environ 4 300 € par mois) correspondent peu ou prou au budget nécessaire pour vivre correctement. En dessous de ce seuil, la vie en Suisse devient financièrement tendue.
            </p>

            {/* Section 8 — Villes */}
            <h2 id="villes" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Où s{"'"}installer en Suisse pour sa retraite ?</h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {VILLES.map((v) => (
                <div key={v.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <p className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{v.name}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 9 — Maisons de retraite */}
            <h2 id="maisons-retraite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les maisons de retraite en Suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les retraités nécessitant un accompagnement médical ou en établissement, la Suisse compte de nombreuses maisons de retraite et établissements médicalisés sur l{"'"}ensemble du territoire. Entre <strong style={{ color: "#111827" }}>5 000 et 6 000 personnes âgées</strong> y font leur entrée chaque année. Les standards de qualité y sont élevés, mais les coûts le sont également : l{"'"}hébergement en établissement spécialisé peut dépasser <strong style={{ color: "#111827" }}>5 000 à 8 000 CHF par mois</strong> selon les cantons et le niveau de soins requis.
            </p>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>Pour résumer</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Prendre sa retraite en Suisse est un projet accessible aux Français disposant de ressources suffisantes (au moins 50 000 CHF par an) et bien préparés administrativement. Les étapes clés sont : obtenir le permis B retraité auprès de l{"'"}office cantonal des migrations, déclarer son arrivée à la commune sous 8 jours, souscrire une assurance maladie dans les 3 mois, anticiper les démarches auprès de sa caisse de retraite française (formulaire S1) et signaler son départ à l{"'"}administration fiscale française. En contrepartie d{"'"}une préparation rigoureuse, la Suisse offre une qualité de vie et un système de santé parmi les meilleurs au monde, dans un cadre naturel exceptionnel et à quelques heures seulement de la France. Les villes de Lausanne, Genève, Zurich et Bâle concentrent l{"'"}essentiel des retraités français expatriés, chacune avec ses spécificités en termes de coût de la vie, de langue et d{"'"}environnement.
              </p>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <SidebarGuides exclude="/prendre-sa-retraite-en-suisse" />
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Retraite, permis, fiscalité : les bons réflexes pour réussir votre installation.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"'"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
