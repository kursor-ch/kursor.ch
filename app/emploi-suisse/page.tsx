import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trouver un emploi en Suisse en 2026 : conseils et astuces",
  description: "Guide complet pour trouver un travail en Suisse : CV suisse, portails d\u2019emploi, salaires, permis de travail, secteurs qui recrutent et erreurs \u00E0 \u00E9viter.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "marche-travail", label: "Le march\u00E9 du travail suisse" },
  { id: "cv-suisse", label: "R\u00E9diger un CV suisse" },
  { id: "lettre-motivation", label: "La lettre de motivation" },
  { id: "portails-emploi", label: "Portails d\u2019emploi incontournables" },
  { id: "salaires", label: "Salaires et conditions" },
  { id: "permis-travail", label: "Permis de travail n\u00E9cessaires" },
  { id: "secteurs", label: "Secteurs qui recrutent" },
  { id: "erreurs", label: "Erreurs \u00E0 \u00E9viter" },
];

const SECTEURS = [
  {
    name: "Finance & Banque",
    subtitle: "Zurich, Gen\u00E8ve",
    desc: "La Suisse abrite les plus grands groupes bancaires mondiaux : <strong>UBS, Credit Suisse (devenu UBS), Julius B\u00E4r</strong>. Les profils en gestion de patrimoine, compliance, fintech et analyse financi\u00E8re sont tr\u00E8s recherch\u00E9s. Niveau de salaire parmi les plus \u00E9lev\u00E9s du pays.",
  },
  {
    name: "Pharma & Biotech",
    subtitle: "B\u00E2le, Zurich",
    desc: "Avec <strong>Novartis, Roche, Lonza et Ferring</strong>, la r\u00E9gion b\u00E2loise est le centre mondial de l\u2019industrie pharmaceutique. Chimistes, biologistes, ing\u00E9nieurs proc\u00E9d\u00E9s et chefs de projet r\u00E9glementaire sont en forte demande.",
  },
  {
    name: "Technologie & IT",
    subtitle: "Zurich, Lausanne, Zoug",
    desc: "La \u00AB<strong>Silicon Valley suisse</strong>\u00BB attire startups et g\u00E9ants : Google Zurich, IBM, Oracle. Les d\u00E9veloppeurs, ingr\u00E9nieurs data, experts cloud et sp\u00E9cialistes cybos\u00E9curit\u00E9 sont tr\u00E8s demand\u00E9s. L\u2019EPFL et l\u2019EPFZ alimentent un \u00E9cosyst\u00E8me d\u2019innovation dense.",
  },
  {
    name: "Sant\u00E9 & M\u00E9decine",
    subtitle: "Toute la Suisse",
    desc: "M\u00E9decins, infirmiers, pharmaciens et sp\u00E9cialistes en soins sont recherch\u00E9s dans toutes les r\u00E9gions. La reconnaissance des dipl\u00F4mes europ\u00E9ens facilite l\u2019int\u00E9gration des professionnels de sant\u00E9 UE/AELE. Les <strong>h\u00F4pitaux universitaires</strong> de B\u00E2le, Berne, Gen\u00E8ve et Zurich recrutent en continu.",
  },
  {
    name: "H\u00F4tellerie & Tourisme",
    subtitle: "Valais, Grisons, Gen\u00E8ve",
    desc: "Le secteur touristique recrute chefs cuisiniers, directeurs d\u2019h\u00F4tel et professionnels du service. Les \u00E9coles h\u00F4teli\u00E8res de r\u00E9putation mondiale (EHL, Les Roches) forment des talents qui restent souvent en Suisse.",
  },
];

const PORTAILS = [
  { name: "jobs.ch", desc: "Le leader du march\u00E9 suisse avec plus de <strong>100\u2019000 offres</strong> actives. Interface en fran\u00E7ais, allemand et anglais. Cr\u00E9ez une alerte email pour \u00EAtre notifi\u00E9 en temps r\u00E9el." },
  { name: "jobup.ch", desc: "Sp\u00E9cialis\u00E9 sur la <strong>Romandie</strong> (Suisse francophone). Id\u00E9al pour Genf-ve, Vaud, Valais et Fribourg. Bonne couverture des postes PME et grands comptes." },
  { name: "LinkedIn", desc: "Indispensable pour le <strong>networking et les candidatures spontan\u00E9es</strong>. Beaucoup de recruteurs suisses utilisent LinkedIn pour sourcer des profils. Assurez-vous que votre profil est complet et en anglais." },
  { name: "Indeed.ch", desc: "Agr\u00E9gateur d\u2019offres couvrant <strong>toutes les r\u00E9gions linguistiques</strong>. Pratique pour une recherche exhaustive, notamment pour les postes moins visibles sur les portails nationaux." },
  { name: "Seco / ch.ch", desc: "Le <strong>service public de l\u2019emploi</strong>. Les ORP (offices r\u00E9gionaux de placement) proposent des offres non publi\u00E9es ailleurs et un accompagnement personnalis\u00E9, notamment pour les demandeurs d\u2019emploi." },
  { name: "Glassdoor.ch", desc: "Utile pour consulter les <strong>avis d\u2019employ\u00E9s et les fourchettes de salaires</strong> avant un entretien. Compl\u00E9mentaire des portails d\u2019offres classiques." },
];

const CV_ETAPES = [
  { num: "1", title: "Format et longueur", desc: "1 page pour moins de 10 ans d\u2019exp\u00E9rience, 2 pages maximum au-del\u00E0. La Suisse appr\u00E9cie les CV concis, structur\u00E9s et visuellement soign\u00E9s. \u00C9vitez les fonds color\u00E9s trop agressifs." },
  { num: "2", title: "Photo obligatoire", desc: "Contrairement \u00E0 la France ou au Canada, la <strong>photo est attendue</strong> sur un CV suisse. Elle doit \u00EAtre professionnelle, sourire naturel, fond neutre ou blanc." },
  { num: "3", title: "Langues avec niveaux CECR", desc: "Indiquez vos langues avec les niveaux officiels (A1 \u00E0 C2). Le multilinguisme est un atout majeur en Suisse. Fran\u00E7ais + allemand + anglais = profil tr\u00E8s recherch\u00E9." },
  { num: "4", title: "Chronologie invers\u00E9e", desc: "Les exp\u00E9riences les plus r\u00E9centes en premier. Incluez : nom de l\u2019employeur, canton/ville, dates, intitul\u00E9 de poste et 3\u20135 r\u00E9alisations chiffr\u00E9es." },
  { num: "5", title: "R\u00E9f\u00E9rences disponibles", desc: "Mentionnez \u00AB R\u00E9f\u00E9rences disponibles sur demande \u00BB. Les recruteurs suisses en demandent syst\u00E9matiquement. Pr\u00E9venez vos anciens employeurs." },
];

const SALAIRES = [
  { poste: "D\u00E9veloppeur logiciel", salaire: "95\u2013130\u2019000 CHF/an", region: "Zurich, Zoug" },
  { poste: "Ing\u00E9nieur pharma", salaire: "90\u2013120\u2019000 CHF/an", region: "B\u00E2le" },
  { poste: "Analyste financier", salaire: "100\u2013145\u2019000 CHF/an", region: "Gen\u00E8ve, Zurich" },
  { poste: "Infirmier(e)", salaire: "70\u201390\u2019000 CHF/an", region: "Toute la Suisse" },
  { poste: "Chef de projet IT", salaire: "110\u2013140\u2019000 CHF/an", region: "Zurich, Berne" },
  { poste: "Comptable", salaire: "75\u2013100\u2019000 CHF/an", region: "Toute la Suisse" },
  { poste: "H\u00F4tellerie (manager)", salaire: "65\u201390\u2019000 CHF/an", region: "Valais, Gen\u00E8ve" },
];

const PERMIS_TRAVAIL = [
  { name: "Ressortissant UE/AELE", desc: "Libre circulation des personnes. Un simple <strong>contrat de travail suffit</strong> pour obtenir un permis B ou L. Annonce \u00E0 la commune dans les 14 jours." },
  { name: "Ressortissant hors UE/AELE", desc: "Soumis aux <strong>contingents f\u00E9d\u00E9raux</strong>. L\u2019employeur doit prouver qu\u2019aucun candidat suisse ou europ\u00E9en n\u2019est disponible (priorit\u00E9 nationale)." },
  { name: "Frontalier (permis G)", desc: "Pour les personnes r\u00E9sidant dans un pays limitrophe (France, Allemagne, Italie, Autriche) et travaillant en Suisse. Retour au domicile au moins <strong>une fois par semaine</strong>." },
  { name: "Travailleur ind\u00E9pendant", desc: "Activit\u00E9 en nom propre ou raison individuelle possible avec un permis B ou C. Pour les ressortissants tiers : <strong>business plan solide</strong> et preuves de viabilit\u00E9 financi\u00E8re requis." },
];

const ERREURS = [
  { title: "Envoyer un CV fran\u00E7ais non adapt\u00E9", desc: "Un CV fran\u00E7ais classique (sans photo, trop long, sans niveau de langue CECR) sera souvent \u00E9limin\u00E9 en pr\u00E9-s\u00E9lection. Adaptez-le aux codes suisses." },
  { title: "N\u00E9gliger le r\u00E9seau", desc: "En Suisse, une grande partie des postes se pourvoit de mani\u00E8re informelle. LinkedIn, \u00E9v\u00E9nements sectoriels et recommandations sont essentiels." },
  { title: "Ignorer les diff\u00E9rences r\u00E9gionales", desc: "La Suisse a quatre r\u00E9gions linguistiques. Un poste \u00E0 Zurich peut exiger l\u2019allemand ; Gen\u00E8ve le fran\u00E7ais. Cibler sa r\u00E9gion \u00E9vite des d\u00E9ceptions." },
  { title: "Sous-estimer le co\u00FBt de la vie", desc: "Les salaires suisses sont \u00E9lev\u00E9s, mais les loyers, assurance maladie et imp\u00F4ts aussi. Calculez votre pouvoir d\u2019achat r\u00E9el avant d\u2019accepter une offre." },
  { title: "Oublier la lettre de motivation", desc: "En Suisse, une lettre de motivation personnalis\u00E9e est quasi-obligatoire. Une lettre g\u00E9n\u00E9rique est per\u00E7ue comme un manque d\u2019int\u00E9r\u00EAt pour le poste." },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F3E0}", title: "Louer un appartement en Suisse : le guide complet", readTime: "12 min", category: "Logement" },
  { icon: "\u{1F4C4}", title: "Permis de s\u00E9jour en Suisse : bien choisir le v\u00F4tre", readTime: "14 min", category: "S\u2019installer" },
  { icon: "\u{1F3E5}", title: "Top 10 des meilleures caisses maladie en Suisse", readTime: "15 min", category: "Assurance" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait de poursuites : comment l\u2019obtenir rapidement", author: "Laura B.", date: "5 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "Ouvrir un compte bancaire en Suisse : guide 2026", author: "Karim D.", date: "28 mars 2026", readTime: "6 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Colocation en Suisse : droits, contrats et bons plans", author: "Julie M.", date: "12 mars 2026", readTime: "7 min" },
];

const TAGS = ["Emploi Suisse", "CV suisse", "Salaires", "Permis de travail", "March\u00E9 du travail", "Expatri\u00E9"];

/* ───────── PAGE ───────── */

export default function EmploiSuissePage() {
  return (
    <div className="bg-creme">

      {/* BREADCRUMB */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/" style={{ color: "#94A3B8" }}>Travailler</Link>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>Emploi Suisse</span>
        </nav>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Trouver un travail en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour d{"\u00E9"}crocher votre poste</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 13 min de lecture</p>
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
              Trouver un travail en Suisse est l{"\u2019"}objectif de milliers d{"\u2019"}expatri{"\u00E9"}s chaque ann{"\u00E9"}e. Salaires parmi les plus {"\u00E9"}lev{"\u00E9"}s d{"\u2019"}Europe, march{"\u00E9"} du travail dynamique, cadre de vie exceptionnel : les raisons ne manquent pas. Mais le march{"\u00E9"} de l{"\u2019"}emploi suisse a ses propres codes &mdash; <strong style={{ color: "#111827" }}>CV diff{"\u00E9"}rent</strong>, importance du r{"\u00E9"}seau, ma{"\u00EE"}trise des langues, permis de travail &mdash; que ce guide vous aide {"\u00E0"} ma{"\u00EE"}triser.
            </p>

            {/* À retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La Suisse affiche un taux de ch\u00F4mage inf\u00E9rieur \u00E0 <strong>3 %</strong>, l\u2019un des plus bas au monde.",
                  "Le salaire m\u00E9dian suisse est d\u2019environ <strong>6\u2019500 CHF brut par mois</strong> (salaire annuel ~78\u2019000 CHF).",
                  "Le multilinguisme est un avantage concurrentiel majeur : fran\u00E7ais, allemand et anglais ouvrent le plus de portes.",
                  "Les ressortissants <strong>UE/AELE</strong> b\u00E9n\u00E9ficient de la libre circulation et peuvent travailler librement.",
                  "Le march\u00E9 de l\u2019emploi suisse valorise les profils <strong>qualifi\u00E9s, stables et bien int\u00E9gr\u00E9s</strong> culturellement.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Marché du travail */}
            <h2 id="marche-travail" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le march{"\u00E9"} du travail suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse est une {"\u00E9"}conomie de plein emploi. Avec un taux de ch{"\u00F4"}mage structurellement bas, les entreprises peinent souvent {"\u00E0"} trouver les comp{"\u00E9"}tences dont elles ont besoin &mdash; ce qui joue en votre faveur en tant que candidat qualifi{"\u00E9"}.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Trois {"\u00E9"}l{"\u00E9"}ments structurent le march{"\u00E9"} suisse :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>La d\u00E9centralisation cantonale</strong> : chaque canton a ses propres dynamiques \u00E9conomiques. Zurich domine la finance et l\u2019IT, B\u00E2le la pharma, Gen\u00E8ve les organisations internationales.",
                "<strong>Le plurilinguisme</strong> : la Suisse compte quatre langues nationales (allemand 63 %, fran\u00E7ais 23 %, italien 8 %, romanche). L\u2019anglais s\u2019impose dans les multinationales.",
                "<strong>Le mod\u00E8le de formation duale</strong> : l\u2019apprentissage est valoris\u00E9 autant que l\u2019universit\u00E9. Les dipl\u00F4mes professionnels suisses (CFC, brevet f\u00E9d\u00E9ral) ouvrent des portes.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La <strong style={{ color: "#111827" }}>culture d{"\u2019"}entreprise suisse</strong> valorise la ponctualit{"\u00E9"}, la pr{"\u00E9"}cision, la discr{"\u00E9"}tion et l{"\u2019"}autonomie. Lors des entretiens, mettez en avant votre capacit{"\u00E9"} {"\u00E0"} travailler de fa{"\u00E7"}on ind{"\u00E9"}pendante et vos r{"\u00E9"}alisations mesurables.
            </p>

            {/* Section 2 — CV suisse */}
            <h2 id="cv-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>R{"\u00E9"}diger un CV suisse qui convainc</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>Le CV suisse ob{"\u00E9"}it {"\u00E0"} des conventions pr{"\u00E9"}cises, diff{"\u00E9"}rentes du CV fran{"\u00E7"}ais ou belge. Voici les cinq points essentiels :</p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
              {CV_ETAPES.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>Conseil pratique : utilisez un mod{"\u00E8"}le <strong style={{ color: "#111827" }}>Europass adapt{"\u00E9"}</strong> ou les mod{"\u00E8"}les propos{"\u00E9"}s par jobs.ch pour vous aligner sur les attentes locales.</p>

            {/* Section 3 — Lettre de motivation */}
            <h2 id="lettre-motivation" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La lettre de motivation : un exercice incontournable</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, la lettre de motivation n{"\u2019"}est pas une formalit{"\u00E9"} : elle est lue attentivement et d{"\u00E9"}partage souvent des candidats de niveau {"\u00E9"}gal. Elle doit {"\u00EA"}tre <strong style={{ color: "#111827" }}>courte (une page max)</strong>, personnalis{"\u00E9"}e pour chaque offre et r{"\u00E9"}dig{"\u00E9"}e dans la langue de l{"\u2019"}annonce.
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {[
                "<strong>En-t\u00EAte</strong> : vos coordonn\u00E9es, date, nom et adresse compl\u00E8te du recruteur.",
                "<strong>Introduction</strong> : r\u00E9f\u00E9rence au poste, source de l\u2019annonce et phrase d\u2019accroche qui donne envie de lire la suite.",
                "<strong>Corps</strong> : pourquoi vous, pourquoi cette entreprise, quelle valeur vous apportez. Utilisez des exemples concrets et des chiffres.",
                "<strong>Conclusion</strong> : manifestez votre envie d\u2019un entretien, remerciez et signez de votre main (si envoi postal).",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600, flexShrink: 0 }}>{"\u2713"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>

            {/* À retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "En Suisse all\u00E9manique, les lettres de motivation peuvent \u00EAtre <strong>\u00E9crites \u00E0 la main</strong> pour certains postes traditionnels.",
                  "Mentionnez toujours le <strong>num\u00E9ro de r\u00E9f\u00E9rence de l\u2019offre</strong> : les grandes entreprises traitent des centaines de candidatures.",
                  "Le ton doit \u00EAtre <strong>professionnel mais pas froid</strong> : les Suisses appr\u00E9cient la sinc\u00E9rit\u00E9 et l\u2019authenticit\u00E9.",
                  "R\u00E9digez dans la <strong>langue officielle du canton</strong> du si\u00E8ge social, sauf indication contraire dans l\u2019annonce.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Portails d'emploi */}
            <h2 id="portails-emploi" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les portails d{"\u2019"}emploi incontournables</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>La Suisse dispose d{"\u2019"}un {"\u00E9"}cosyst{"\u00E8"}me de plateformes d{"\u2019"}offres d{"\u2019"}emploi solide. Voici les six sites {"\u00E0"} conna{"\u00EE"}tre absolument :</p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {PORTAILS.map((p) => (
                <div key={p.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 8 }}>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>{p.name}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              ))}
            </div>

            {/* Section 5 — Salaires */}
            <h2 id="salaires" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Salaires et conditions de travail</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les salaires suisses sont parmi les plus {"\u00E9"}lev{"\u00E9"}s du monde, mais le co{"\u00FB"}t de la vie l{"\u2019"}est aussi. Il n{"\u2019"}y a pas de <strong style={{ color: "#111827" }}>salaire minimum f{"\u00E9"}d{"\u00E9"}ral national</strong> &mdash; certains cantons ont le leur (Gen{"\u00E8"}ve : 24 CHF/h, Berne : 21 CHF/h) &mdash; mais les salaires sont g{"\u00E9"}n{"\u00E9"}ralement encadr{"\u00E9"}s par des conventions collectives sectorielles.
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              <div className="flex items-center gap-3 rounded-lg font-body" style={{ backgroundColor: "rgba(217,119,6,0.08)", padding: "10px 18px", border: "1px solid rgba(217,119,6,0.2)" }}>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 200 }}>Poste</span>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 180 }}>Fourchette annuelle</span>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13 }}>R{"\u00E9"}gion</span>
              </div>
              {SALAIRES.map((s) => (
                <div key={s.poste} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontSize: 14, color: "#111827", fontWeight: 600, minWidth: 200 }}>{s.poste}</span>
                  <span style={{ fontSize: 14, color: "#D97706", fontWeight: 700, minWidth: 180 }}>{s.salaire}</span>
                  <span style={{ fontSize: 13, color: "#64748B" }}>{s.region}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
              Note : ces fourchettes sont indicatives et varient selon l{"\u2019"}exp{"\u00E9"}rience, le canton, la taille de l{"\u2019"}entreprise et les comp{"\u00E9"}tences linguistiques. Consultez <strong style={{ color: "#111827" }}>salarium.ch</strong>, l{"\u2019"}outil officiel de l{"\u2019"}Office f{"\u00E9"}d{"\u00E9"}ral de la statistique, pour des donn{"\u00E9"}es personnalis{"\u00E9"}es.
            </p>

            {/* Section 6 — Permis de travail */}
            <h2 id="permis-travail" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Permis de travail : ce qu{"\u2019"}il faut savoir</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Votre <strong style={{ color: "#111827" }}>nationalit{"\u00E9"}</strong> d{"\u00E9"}termine directement votre acc{"\u00E8"}s au march{"\u00E9"} du travail suisse. Voici les quatre situations principales :
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 16 }}>
              {PERMIS_TRAVAIL.map((p) => (
                <div key={p.name} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#D97706", fontSize: 18, flexShrink: 0 }}>{"🪪"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{p.name}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Pour en savoir plus sur les types de permis (B, C, L, G), consultez notre <strong style={{ color: "#D97706" }}>guide complet des permis de s{"\u00E9"}jour suisses</strong>.
              </p>
            </div>

            {/* Section 7 — Secteurs qui recrutent */}
            <h2 id="secteurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les secteurs qui recrutent en 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>Cinq secteurs concentrent la majorit{"\u00E9"} des opportunit{"\u00E9"}s pour les profils {"\u00E9"}trangers qualifi{"\u00E9"}s :</p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {SECTEURS.map((s) => (
                <div key={s.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>{s.name}</span>
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{"\u2014"}</span>
                    <span className="font-body italic" style={{ fontSize: 14, color: "#64748B" }}>{s.subtitle}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>

            {/* À retenir 3 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La Suisse manque de <strong>m\u00E9decins, infirmiers et sp\u00E9cialistes de sant\u00E9</strong> : le secteur recrute massivement \u00E0 l\u2019\u00E9tranger.",
                  "Le secteur IT cherche des <strong>d\u00E9veloppeurs, data scientists et experts cloud</strong> dans toutes les r\u00E9gions.",
                  "Les <strong>organisations internationales</strong> (ONU, OMS, CICR \u00E0 Gen\u00E8ve) publient leurs postes sur impunity-watch.org et careers.un.org.",
                  "La construction, l\u2019artisanat et l\u2019agriculture offrent des opportunit\u00E9s saisonni\u00E8res ou \u00E0 l\u2019ann\u00E9e dans les r\u00E9gions rurales.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\u00E0"} {"\u00E9"}viter absolument</h2>
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
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Pr\u00EAt \u00E0 d\u00E9crocher votre emploi en Suisse ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>{"Nos experts \u00E9valuent votre profil et vous orientent vers les meilleures opportunit\u00E9s. Diagnostic gratuit."}</p>
              <Link href="/emploi" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>{"Évaluer mon potentiel \u2192"}</Link>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Trouver un travail en Suisse demande une pr{"\u00E9"}paration rigoureuse : <strong style={{ color: "#111827" }}>CV adapt{"\u00E9"}</strong>, lettre de motivation personnalis{"\u00E9"}e, ma{"\u00EE"}trise des portails locaux et compr{"\u00E9"}hension des r{"\u00E8"}gles sur les permis. Le march{"\u00E9"} est porteur pour les profils qualifi{"\u00E9"}s, multilingues et mobiles. Avec la bonne strat{"\u00E9"}gie, votre recherche d{"\u2019"}emploi peut aboutir bien plus vite que vous ne le pensez.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{"Évaluer mon potentiel"}</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"Découvrez en 2 min quelles opportunités d\u2019emploi correspondent \u00E0 votre profil en Suisse."}</p>
                <Link href="/emploi" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>{"Évaluer mon potentiel \u2192"}</Link>
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

      {/* À LIRE AUSSI */}
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
