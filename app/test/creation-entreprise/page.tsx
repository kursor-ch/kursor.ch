import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cr\u00E9er une soci\u00E9t\u00E9 en Suisse : guide 2026 des formes juridiques",
  description:
    "Guide complet pour cr\u00E9er une soci\u00E9t\u00E9 en Suisse : SA, S\u00E0rl, raison individuelle, capital minimum, d\u00E9marches RC, co\u00FBts, fiscalit\u00E9 et erreurs \u00E0 \u00E9viter.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-suisse", label: "Pourquoi cr\u00E9er en Suisse ?" },
  { id: "formes-juridiques", label: "Les formes juridiques" },
  { id: "comparatif", label: "Comparatif SA vs S\u00E0rl vs RI" },
  { id: "demarches", label: "D\u00E9marches pas \u00E0 pas" },
  { id: "couts", label: "Co\u00FBts et capital minimum" },
  { id: "fiscalite", label: "Fiscalit\u00E9 et imposition" },
  { id: "fiduciaire", label: "R\u00F4le du fiduciaire" },
  { id: "erreurs", label: "Erreurs \u00E0 \u00E9viter" },
];

const FORMES_JURIDIQUES = [
  {
    name: "Raison individuelle",
    subtitle: "Ind\u00E9pendant solo",
    capital: "Aucun",
    desc: "La forme la plus simple et la plus rapide \u00E0 constituer. Id\u00E9ale pour les <strong>freelances, artisans et professions lib\u00E9rales</strong>. L\u2019inscription au Registre du commerce est obligatoire d\u00E8s que le chiffre d\u2019affaires annuel d\u00E9passe <strong>100\u2009000 CHF</strong>. Attention\u00A0: le propri\u00E9taire est <strong>personnellement et illimit\u00E9ment responsable</strong> des dettes de l\u2019entreprise.",
  },
  {
    name: "S\u00E0rl",
    subtitle: "Soci\u00E9t\u00E9 \u00E0 responsabilit\u00E9 limit\u00E9e",
    capital: "20\u2009000 CHF",
    desc: "La structure pr\u00E9f\u00E9r\u00E9e des <strong>PME et startups suisses</strong>. Le capital social minimum est de <strong>20\u2009000 CHF</strong>, enti\u00E8rement lib\u00E9r\u00E9 \u00E0 la fondation. Les associ\u00E9s ne r\u00E9pondent des dettes qu\u2019\u00E0 hauteur de leur apport. La S\u00E0rl est inscrite au RC et soumise \u00E0 l\u2019<strong>imp\u00F4t sur le b\u00E9n\u00E9fice</strong> en tant que personne morale.",
  },
  {
    name: "SA",
    subtitle: "Soci\u00E9t\u00E9 anonyme",
    capital: "100\u2009000 CHF",
    desc: "La forme de r\u00E9f\u00E9rence pour les <strong>soci\u00E9t\u00E9s de taille importante</strong> ou celles cherchant des investisseurs. Capital minimum de <strong>100\u2009000 CHF</strong> (50\u2009000 CHF lib\u00E9r\u00E9s \u00E0 la fondation). Les actionnaires sont anonymes et leur responsabilit\u00E9 est limit\u00E9e. La SA doit nommer un <strong>conseil d\u2019administration</strong> et, en g\u00E9n\u00E9ral, un organe de r\u00E9vision.",
  },
  {
    name: "Soci\u00E9t\u00E9 en nom collectif",
    subtitle: "Associ\u00E9s solidaires",
    capital: "Aucun",
    desc: "Con\u00E7ue pour <strong>deux personnes physiques ou plus</strong> exer\u00E7ant une activit\u00E9 commerciale en commun. Aucun capital minimum requis, mais les associ\u00E9s sont <strong>solidairement et illimit\u00E9ment responsables</strong>. Adapt\u00E9e aux cabinets d\u2019avocats, m\u00E9decins ou architectes qui souhaitent s\u2019associer sans constituer une personne morale.",
  },
  {
    name: "Succursale / filiale",
    subtitle: "Extension d\u2019une soci\u00E9t\u00E9 \u00E9trang\u00E8re",
    capital: "Variable",
    desc: "Une <strong>soci\u00E9t\u00E9 \u00E9trang\u00E8re</strong> souhaitant op\u00E9rer en Suisse peut y ouvrir une succursale (d\u00E9pendante de la maison-m\u00E8re) ou une filiale (entit\u00E9 juridique ind\u00E9pendante, g\u00E9n\u00E9ralement sous forme de SA ou S\u00E0rl). Les obligations comptables et fiscales varient selon le choix retenu.",
  },
];

const COMPARATIF = [
  { critere: "Capital minimum", ri: "Aucun", sarl: "20\u2009000 CHF", sa: "100\u2009000 CHF" },
  { critere: "Responsabilit\u00E9 fondateur", ri: "Illimit\u00E9e", sarl: "Limit\u00E9e \u00E0 l\u2019apport", sa: "Limit\u00E9e \u00E0 l\u2019apport" },
  { critere: "Inscription RC", ri: "D\u00E8s 100k CHF CA", sarl: "Obligatoire", sa: "Obligatoire" },
  { critere: "Anonymat associ\u00E9s", ri: "Non", sarl: "Non (connu du RC)", sa: "Oui" },
  { critere: "Imposition", ri: "Revenu personnel", sarl: "B\u00E9n\u00E9fice soci\u00E9t\u00E9", sa: "B\u00E9n\u00E9fice soci\u00E9t\u00E9" },
  { critere: "Nombre fondateurs min.", ri: "1", sarl: "1", sa: "1" },
  { critere: "Organe de r\u00E9vision", ri: "Non requis", sarl: "Sous conditions", sa: "G\u00E9n\u00E9ralement requis" },
  { critere: "Cr\u00E9dibilit\u00E9 bancaire", ri: "Faible", sarl: "Bonne", sa: "Tr\u00E8s bonne" },
  { critere: "Cession des parts", ri: "Non applicable", sarl: "Restreinte", sa: "Libre (actions)" },
  { critere: "D\u00E9lai de cr\u00E9ation", ri: "1\u20133 jours", sarl: "1\u20134 semaines", sa: "2\u20136 semaines" },
];

const DEMARCHES = [
  {
    num: "1",
    title: "Choisir la forme juridique",
    desc: "D\u00E9finissez vos besoins\u00A0: capital disponible, nombre d\u2019associ\u00E9s, niveau de responsabilit\u00E9 souhait\u00E9 et objectifs de croissance. Un fiduciaire peut vous conseiller gratuitement lors d\u2019un premier entretien.",
  },
  {
    num: "2",
    title: "R\u00E9diger les statuts",
    desc: "Pour une SA ou S\u00E0rl, des statuts sign\u00E9s devant <strong>notaire</strong> sont obligatoires. Ils d\u00E9finissent le nom, si\u00E8ge, but social, capital et gouvernance. Le nom doit \u00EAtre <strong>unique</strong> et v\u00E9rifiable sur le portail Zefix.",
  },
  {
    num: "3",
    title: "D\u00E9poser le capital sur un compte de consignation",
    desc: "La banque bloque le capital (20\u2009000 CHF pour la S\u00E0rl, 50\u2009000 CHF minimum pour la SA) jusqu\u2019\u00E0 inscription au RC. Elle \u00E9met une <strong>attestation de d\u00E9p\u00F4t</strong> remise au notaire.",
  },
  {
    num: "4",
    title: "Inscription au Registre du commerce (RC)",
    desc: "Le notaire ou votre fiduciaire d\u00E9pose le dossier aupr\u00E8s du RC cantonal. Une fois inscrite, la soci\u00E9t\u00E9 acquiert la <strong>personnalit\u00E9 juridique</strong> et le capital est d\u00E9bloqu\u00E9.",
  },
  {
    num: "5",
    title: "S\u2019affilier aux assurances sociales",
    desc: "AVS/AI/APG, assurance ch\u00F4mage (si salari\u00E9s), LPP (caisse de pension) et assurance accidents (LAA). Ces affiliations sont <strong>obligatoires</strong> d\u00E8s le premier employ\u00E9.",
  },
  {
    num: "6",
    title: "S\u2019enregistrer \u00E0 la TVA (si n\u00E9cessaire)",
    desc: "Obligatoire d\u00E8s <strong>100\u2009000 CHF</strong> de chiffre d\u2019affaires annuel en Suisse. L\u2019inscription volontaire est possible d\u00E8s le premier franc et permet la d\u00E9duction de la TVA sur les achats.",
  },
  {
    num: "7",
    title: "Ouvrir un compte bancaire d\u2019entreprise",
    desc: "Apr\u00E8s inscription au RC, ouvrez un compte courant professionnel. Pr\u00E9voyez 4 \u00E0 8 semaines pour les banques traditionnelles. Les n\u00E9obanques (Revolut Business, Neon, etc.) sont plus rapides.",
  },
];

const COUTS = [
  { poste: "Honoraires notaire (SA/S\u00E0rl)", montant: "800 \u2013 2\u2009000 CHF" },
  { poste: "Inscription au Registre du commerce", montant: "200 \u2013 800 CHF" },
  { poste: "Honoraires fiduciaire (fondation)", montant: "500 \u2013 3\u2009000 CHF" },
  { poste: "Compte de consignation (frais bancaires)", montant: "0 \u2013 200 CHF" },
  { poste: "Publication dans la FOSC", montant: "Inclus dans les frais RC" },
  { poste: "Capital minimum S\u00E0rl (immobilis\u00E9)", montant: "20\u2009000 CHF" },
  { poste: "Capital minimum SA (immobilis\u00E9 \u00E0 50%)", montant: "50\u2009000 CHF" },
  { poste: "Assurance RC professionnelle (ann\u00E9e)", montant: "300 \u2013 2\u2009000 CHF" },
];

const ERREURS = [
  {
    title: "Choisir la mauvaise forme juridique",
    desc: "D\u00E9marrer en raison individuelle avec un projet \u00E0 fort potentiel ou, inversement, cr\u00E9er une SA pour une activit\u00E9 solo : les implications fiscales et les co\u00FBts de transformation sont lourds.",
  },
  {
    title: "N\u00E9gliger les statuts",
    desc: "Des statuts r\u00E9dig\u00E9s \u00E0 la va-vite cr\u00E9ent des conflits entre associ\u00E9s. Pr\u00E9cisez les r\u00E8gles de cession de parts, de prise de d\u00E9cision et de dissolution d\u00E8s le d\u00E9but.",
  },
  {
    title: "Confondre capital priv\u00E9 et professionnel",
    desc: "M\u00E9langer les comptes personnels et d\u2019entreprise est une faute comptable grave. Un compte s\u00E9par\u00E9 est obligatoire et simplifie \u00E9norm\u00E9ment la comptabilit\u00E9 et la TVA.",
  },
  {
    title: "Oublier les assurances sociales",
    desc: "L\u2019affiliation \u00E0 l\u2019AVS est obligatoire d\u00E8s le d\u00E9but de l\u2019activit\u00E9. Un oubli entra\u00EEne des cotisations r\u00E9troactives avec p\u00E9nalit\u00E9s.",
  },
  {
    title: "Sous-estimer les co\u00FBts de fonctionnement",
    desc: "Comptabilit\u00E9 annuelle obligatoire, audit, charges sociales, loyers\u2026 Pr\u00E9voyez un budget de fonctionnement d\u2019au moins 12 mois avant de devenir rentable.",
  },
  {
    title: "Ne pas prot\u00E9ger son nom ou sa marque",
    desc: "L\u2019inscription au RC ne prot\u00E8ge pas votre marque au niveau national. D\u00E9posez votre marque aupr\u00E8s de l\u2019IPI (Institut f\u00E9d\u00E9ral de la propri\u00E9t\u00E9 intellectuelle) pour une protection compl\u00E8te.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Fiscalit\u00E9 des entreprises en Suisse : le guide 2026", readTime: "11 min", category: "Fiscalit\u00E9" },
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire professionnel en Suisse", readTime: "8 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait du Registre du commerce : comment l\u2019obtenir", author: "Laura B.", date: "10 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B3}", tag: "FINANCES", title: "TVA en Suisse : tout ce que les ind\u00E9pendants doivent savoir", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { icon: "\u{1F3E2}", tag: "ENTREPRENDRE", title: "Domiciliation d\u2019entreprise en Suisse : avantages et limites", author: "Julie M.", date: "18 mars 2026", readTime: "6 min" },
];

const TAGS = ["Cr\u00E9ation d\u2019entreprise", "SA", "S\u00E0rl", "Registre du commerce", "Fiduciaire", "Suisse"];

/* ───────── PAGE ───────── */

export default function CreationEntreprisePage() {
  return (
    <div className="bg-creme">

      {/* BREADCRUMB */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/test" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/test" style={{ color: "#94A3B8" }}>Entreprendre</Link>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>{"Cr\u00E9ation de Soci\u00E9t\u00E9"}</span>
        </nav>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>ENTREPRENDRE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {"Cr\u00E9er une soci\u00E9t\u00E9 en Suisse : guide complet"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"SA, S\u00E0rl, raison individuelle \u2014 tout savoir"}</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 16 min de lecture</p>
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

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              {"La Suisse figure r\u00E9guli\u00E8rement parmi les "}<strong style={{ color: "#111827" }}>{"meilleurs pays au monde pour entreprendre"}</strong>{" : fiscalit\u00E9 comp\u00E9titive, stabilit\u00E9 politique, acc\u00E8s \u00E0 des march\u00E9s europ\u00E9ens et main-d\u2019\u0153uvre hautement qualifi\u00E9e. Mais cr\u00E9er une soci\u00E9t\u00E9 en Suisse suppose de choisir la bonne forme juridique, de respecter les d\u00E9marches l\u00E9gales et d\u2019anticiper les co\u00FBts. Ce guide vous accompagne pas \u00E0 pas."}
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La <strong>S\u00E0rl</strong> est la forme la plus populaire pour les PME et startups (capital\u00A0: 20\u2009000 CHF).",
                  "La <strong>SA</strong> offre l\u2019anonymat des actionnaires et convient aux projets \u00E0 fort capital (100\u2009000 CHF min.).",
                  "La <strong>raison individuelle</strong> ne n\u00E9cessite aucun capital mais expose le propri\u00E9taire personnellement.",
                  "L\u2019inscription au <strong>Registre du commerce</strong> conf\u00E8re la personnalit\u00E9 juridique \u00E0 la soci\u00E9t\u00E9.",
                  "Un <strong>fiduciaire</strong> peut g\u00E9rer l\u2019ensemble des formalit\u00E9s pour 1\u2009500 \u00E0 5\u2009000 CHF tout compris.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="pourquoi-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Pourquoi cr\u00E9er son entreprise en Suisse ?"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La Conf\u00E9d\u00E9ration helv\u00E9tique combine plusieurs atouts rares pour les entrepreneurs\u00A0:"}
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>Fiscalit\u00E9 attractive</strong>\u00A0: taux d\u2019imposition sur le b\u00E9n\u00E9fice parmi les plus bas d\u2019Europe (8 \u00E0 21\u2009% selon le canton).",
                "<strong>Stabilit\u00E9</strong>\u00A0: cadre juridique solide, monnaie forte (CHF) et pr\u00E9visibilit\u00E9 r\u00E9glementaire.",
                "<strong>Acc\u00E8s aux march\u00E9s</strong>\u00A0: position g\u00E9ographique centrale en Europe, accords bilat\u00E9raux avec l\u2019UE.",
                "<strong>Talent pool</strong>\u00A0: main-d\u2019\u0153uvre multilangue et tr\u00E8s qualifi\u00E9e dans tous les secteurs.",
                "<strong>Infrastructure</strong>\u00A0: r\u00E9seaux num\u00E9riques, transport et services de classe mondiale.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"Les cantons de "}<strong style={{ color: "#111827" }}>{"Zoug, Nidwald, Appenzell Rhodes-Int\u00E9rieures et Lucerne"}</strong>{" sont particuli\u00E8rement comp\u00E9titifs fiscalement. Gen\u00E8ve et Zurich, bien que plus tax\u00E9s, offrent un acc\u00E8s inou\u00EF aux r\u00E9seaux financiers internationaux."}
            </p>

            {/* Section 2 — Formes juridiques */}
            <h2 id="formes-juridiques" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Les principales formes juridiques en Suisse"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Le droit suisse des soci\u00E9t\u00E9s (CO \u2013 Code des obligations) pr\u00E9voit plusieurs structures. Voici les plus utilis\u00E9es\u00A0:"}
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {FORMES_JURIDIQUES.map((f) => (
                <div key={f.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>{f.name}</span>
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{"\u2014"}</span>
                    <span className="font-body italic" style={{ fontSize: 14, color: "#64748B" }}>{f.subtitle}</span>
                    <span className="font-body rounded-full" style={{ marginLeft: "auto", fontSize: 12, fontWeight: 600, color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "3px 10px", whiteSpace: "nowrap" }}>Capital&nbsp;: {f.capital}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: f.desc }} />
                </div>
              ))}
            </div>

            {/* Section 3 — Comparatif */}
            <h2 id="comparatif" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Comparatif SA vs S\u00E0rl vs Raison individuelle"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Un tableau synoptique pour choisir la structure adapt\u00E9e \u00E0 votre situation\u00A0:"}
            </p>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#111827" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textAlign: "left", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{"Crit\u00E8re"}</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Raison ind.</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{"S\u00E0rl"}</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>SA</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF.map((row, i) => (
                    <tr key={row.critere} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                      <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "12px 16px" }}>{row.critere}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.ri}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.sarl}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.sa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La <strong>S\u00E0rl</strong> est id\u00E9ale pour 1 \u00E0 3 associ\u00E9s avec un projet s\u00E9rieux et un budget limit\u00E9.",
                  "La <strong>SA</strong> est pr\u00E9f\u00E9rable si vous pr\u00E9voyez de lever des fonds ou d\u2019accueillir de nombreux actionnaires.",
                  "La <strong>raison individuelle</strong> convient aux micro-activit\u00E9s \u2014 attention \u00E0 la responsabilit\u00E9 illimit\u00E9e.",
                  "Changer de forme juridique apr\u00E8s coup est possible mais g\u00E9n\u00E8re des <strong>frais et d\u00E9lais significatifs</strong>.",
                  "Certains cantons proposent des <strong>guichets uniques</strong> (ex. Zurich, Berne) pour acc\u00E9l\u00E9rer la proc\u00E9dure.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Démarches */}
            <h2 id="demarches" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"D\u00E9marches pas \u00E0 pas pour cr\u00E9er votre soci\u00E9t\u00E9"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Voici le processus standard pour une "}<strong style={{ color: "#111827" }}>{"SA ou S\u00E0rl"}</strong>{". La raison individuelle suit des \u00E9tapes similaires mais all\u00E9g\u00E9es (pas de notaire ni de capital \u00E0 bloquer)."}
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
              {DEMARCHES.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
              {"Le portail "}<strong style={{ color: "#111827" }}>Zefix</strong>{" (zefix.ch) permet de v\u00E9rifier la disponibilit\u00E9 du nom et de consulter les inscriptions existantes gratuitement."}
            </p>

            {/* Section 5 — Coûts */}
            <h2 id="couts" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Co\u00FBts et capital minimum"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Voici une estimation des frais de cr\u00E9ation pour une S\u00E0rl ou SA. Ces montants varient selon le canton, le notaire choisi et la complexit\u00E9 des statuts."}
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {COUTS.map((c, i) => (
                <div key={c.poste} className="flex items-center justify-between rounded-lg font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px", backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                  <span style={{ fontSize: 14, color: "#475569" }}>{c.poste}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#D97706", whiteSpace: "nowrap" }}>{c.montant}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
              {"Budget total estim\u00E9 hors capital immobilis\u00E9\u00A0: "}<strong style={{ color: "#111827" }}>{"2\u2009000 \u00E0 6\u2009000 CHF"}</strong>{" pour une S\u00E0rl standard, "}<strong style={{ color: "#111827" }}>{"5\u2009000 \u00E0 12\u2009000 CHF"}</strong>{" pour une SA."}
            </p>

            {/* Section 6 — Fiscalité */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Fiscalit\u00E9 et imposition des soci\u00E9t\u00E9s suisses"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La Suisse applique un syst\u00E8me fiscal \u00E0 "}<strong style={{ color: "#111827" }}>{"trois niveaux"}</strong>{" : f\u00E9d\u00E9ral, cantonal et communal. Le taux effectif d\u2019imposition sur le b\u00E9n\u00E9fice varie de "}<strong style={{ color: "#111827" }}>{"8\u2009% (Zoug) \u00E0 21\u2009% (Gen\u00E8ve)"}</strong>{"."}
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { label: "Imp\u00F4t f\u00E9d\u00E9ral direct (IFD)", val: "8,5\u2009% sur le b\u00E9n\u00E9fice net" },
                { label: "Imp\u00F4t cantonal et communal (ICC)", val: "Variable selon le canton (0 \u00E0 13\u2009%)" },
                { label: "Imp\u00F4t sur le capital", val: "0,001 \u00E0 0,5\u2009% des fonds propres selon canton" },
                { label: "TVA standard", val: "8,1\u2009% (taux r\u00E9duit 2,6\u2009%)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.label}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item.val}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>{"Double imposition \u00E9conomique"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              {"Les actionnaires qui per\u00E7oivent des "}<strong style={{ color: "#111827" }}>dividendes</strong>{" sont imposables \u00E0 titre personnel. Toutefois, la loi pr\u00E9voit une "}<strong style={{ color: "#111827" }}>{"r\u00E9duction partielle"}</strong>{" de l\u2019imposition pour les participations d\u00E9tenant au moins 10\u2009% du capital social."}
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                {"Le canton de "}<strong style={{ color: "#D97706" }}>Zoug</strong>{" est souvent cit\u00E9 comme le plus avantageux avec un taux effectif d\u2019environ "}<strong>{"11,9\u2009%"}</strong>{". Gen\u00E8ve et Vaud ont harmonis\u00E9 leurs taux autour de "}<strong>{"13,99\u2009%"}</strong>{" apr\u00E8s la r\u00E9forme RFFA de 2020."}
              </p>
            </div>

            {/* Section 7 — Fiduciaire */}
            <h2 id="fiduciaire" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Le r\u00F4le du fiduciaire dans la cr\u00E9ation d\u2019entreprise"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"En Suisse, le "}<strong style={{ color: "#111827" }}>fiduciaire</strong>{" joue un r\u00F4le central pour les entrepreneurs. Il cumule les fonctions de comptable, conseiller fiscal et parfois repr\u00E9sentant l\u00E9gal. Il peut notamment\u00A0:"}
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {[
                "R\u00E9diger les statuts et coordonner le notaire",
                "D\u00E9poser le dossier au Registre du commerce",
                "G\u00E9rer la comptabilit\u00E9 et les d\u00E9clarations fiscales",
                "Assurer la paie des employ\u00E9s (salaires, charges sociales)",
                "Domicilier votre soci\u00E9t\u00E9 \u00E0 son adresse (option utile)",
                "Vous repr\u00E9senter aupr\u00E8s des autorit\u00E9s (AVS, TVA, canton)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600, fontSize: 14 }}>{"\u2713"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"Les honoraires annuels d\u2019un fiduciaire pour une petite S\u00E0rl vont de "}<strong style={{ color: "#111827" }}>{"2\u2009000 \u00E0 8\u2009000 CHF"}</strong>{" selon la complexit\u00E9. Certains proposent des forfaits \u00AB\u2009startup\u2009\u00BB tout inclus."}
            </p>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Erreurs \u00E0 \u00E9viter lors de la cr\u00E9ation"}</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\u26A0"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d\u2019aide pour cr\u00E9er votre soci\u00E9t\u00E9 en Suisse ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>{"Nos partenaires fiduciaires vous accompagnent de A \u00E0 Z. Premier entretien gratuit et sans engagement."}</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"Trouver mon fiduciaire \u2192"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"En r\u00E9sum\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                {"Cr\u00E9er une soci\u00E9t\u00E9 en Suisse est un processus structur\u00E9, accessible et rapide pour qui s\u2019y pr\u00E9pare bien. La "}<strong style={{ color: "#111827" }}>{"S\u00E0rl"}</strong>{" reste la valeur s\u00FBre pour la plupart des projets ; la "}<strong style={{ color: "#111827" }}>SA</strong>{" s\u2019impose d\u00E8s que vous envisagez une croissance rapide ou une lev\u00E9e de fonds. Dans tous les cas, "}<strong style={{ color: "#111827" }}>{"entourez-vous d\u2019un bon fiduciaire"}</strong>{" et anticipez les \u00E9tapes\u00A0: c\u2019est ce qui fait la diff\u00E9rence entre un lancement r\u00E9ussi et des mois de corrections administratives."}
              </p>
            </div>

            {/* Tags + Share */}
            <div className="flex items-center justify-between flex-wrap gap-4" style={{ paddingTop: 24, borderTop: "1px solid #E2E8F0" }}>
              <div>
                <p className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#94A3B8", marginBottom: 8 }}>Tags</p>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span key={tag} className="font-body rounded-full" style={{ fontSize: 12, fontWeight: 500, color: "#475569", backgroundColor: "#F1F5F9", padding: "5px 14px", border: "1px solid #E2E8F0" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#94A3B8", marginBottom: 8 }}>Partager</p>
                <div className="flex items-center gap-3">
                  {["Li", "X", "Fb"].map((s) => (
                    <span key={s} className="flex items-center justify-center rounded-full font-body cursor-pointer" style={{ width: 32, height: 32, fontSize: 12, fontWeight: 600, color: "#475569", backgroundColor: "#F1F5F9", border: "1px solid #E2E8F0" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{"Quelle soci\u00E9t\u00E9 pour vous ?"}</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"Diagnostic gratuit en 2 min. Identifiez la forme juridique adapt\u00E9e \u00E0 votre projet."}</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Faire mon diagnostic gratuit \u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
              </div>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>{a.icon}</div>
                      <div>
                        <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</p>
                        <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{a.readTime} {"\u00B7"} {a.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* A LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"\u00B7"} {a.date}</p>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.readTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pi\u00E8ges \u00E0 \u00E9viter, les \u00E9conomies \u00E0 faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\u2019inscrire \u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
