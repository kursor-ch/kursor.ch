import Link from "next/link";
import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";

export const metadata: Metadata = {
  title: "Trouver un travail en Suisse : guide 2026 et m\u00E9tiers",
  description: "Guide complet pour trouver un emploi en Suisse en 2026 : m\u00E9tiers qui recrutent, permis de travail, CV suisse, canaux de recherche, salaires et FAQ.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "marche-emploi", label: "Le march\u00E9 de l\u2019emploi en 2026" },
  { id: "metiers-recrutent", label: "Les m\u00E9tiers qui recrutent" },
  { id: "conditions", label: "Conditions pour travailler" },
  { id: "canaux", label: "Trouver un emploi : les bons canaux" },
  { id: "candidature", label: "Adapter sa candidature" },
  { id: "sans-diplome", label: "Travailler sans dipl\u00F4me" },
  { id: "faq", label: "FAQ" },
];

const SECTEURS = [
  {
    num: "1",
    name: "Sant\u00E9 et soin \u00E0 la personne",
    desc: "C\u2019est le secteur num\u00E9ro un de la p\u00E9nurie. Les <strong>infirmiers et infirmi\u00E8res</strong> arrivent en t\u00EAte des professions les plus recherch\u00E9es, suivis des m\u00E9decins, aides-soignants, physioth\u00E9rapeutes et personnels sp\u00E9cialis\u00E9s des blocs op\u00E9ratoires. Le vieillissement d\u00E9mographique et la saturation des EMS tirent la demande vers le haut dans toute la Conf\u00E9d\u00E9ration. Attention, ces m\u00E9tiers sont r\u00E9glement\u00E9s : une <strong>reconnaissance de dipl\u00F4me via la Croix-Rouge suisse (CRS) ou la MEBEKO</strong> est obligatoire.",
  },
  {
    num: "2",
    name: "Construction, b\u00E2timent et m\u00E9tiers techniques",
    desc: "Juste derri\u00E8re la sant\u00E9, on trouve des profils manuels tr\u00E8s demand\u00E9s : <strong>\u00E9lectriciens et menuisiers</strong> occupent les deuxi\u00E8me et troisi\u00E8me places des m\u00E9tiers les plus recherch\u00E9s. Charpentiers, plombiers, conducteurs de travaux et chefs de chantier compl\u00E8tent le tableau. La r\u00E9novation \u00E9nerg\u00E9tique, port\u00E9e par la Strat\u00E9gie \u00E9nerg\u00E9tique 2050, alimente durablement ces besoins.",
  },
  {
    num: "3",
    name: "Informatique, IA et cybers\u00E9curit\u00E9",
    desc: "La digitalisation acc\u00E9l\u00E9r\u00E9e du tissu bancaire et industriel suisse a transform\u00E9 les profils tech en or. <strong>Ing\u00E9nieurs cloud, data scientists, experts en cybers\u00E9curit\u00E9, d\u00E9veloppeurs full-stack</strong> et sp\u00E9cialistes de l\u2019intelligence artificielle trouvent facilement preneur, notamment dans l\u2019arc l\u00E9manique et dans le grand Zurich.",
  },
  {
    num: "4",
    name: "Ing\u00E9nierie et industrie de pr\u00E9cision",
    desc: "Horlogerie, pharma, biotech, m\u00E9canique de pr\u00E9cision, chimie : la Suisse reste une <strong>puissance industrielle</strong> qui absorbe chaque ann\u00E9e des milliers d\u2019ing\u00E9nieurs, notamment en g\u00E9nie civil, m\u00E9canique, \u00E9lectrique, qualit\u00E9 et proc\u00E9d\u00E9s.",
  },
  {
    num: "5",
    name: "H\u00F4tellerie-restauration et tourisme",
    desc: "Cuisiniers, serveurs, chefs de partie, r\u00E9ceptionnistes, gouvernantes : le secteur souffre d\u2019un turnover \u00E9lev\u00E9 et reste structurellement d\u00E9ficitaire. L\u2019avantage pour les candidats : beaucoup de postes restent <strong>accessibles sans dipl\u00F4me suisse</strong>, avec une r\u00E9mun\u00E9ration souvent meilleure qu\u2019en France.",
  },
  {
    num: "6",
    name: "Finance, compliance et banque priv\u00E9e",
    desc: "Gen\u00E8ve et Zurich concentrent l\u2019essentiel des opportunit\u00E9s. Les profils recherch\u00E9s \u00E9voluent : moins de traders, plus de <strong>sp\u00E9cialistes de la conformit\u00E9 r\u00E9glementaire</strong>, de la gestion des risques et de l\u2019investissement durable (ESG, capital-investissement).",
  },
];

const PERMIS = [
  { name: "Permis L", desc: "Autorisation de courte dur\u00E9e, jusqu\u2019\u00E0 12 mois" },
  { name: "Permis B", desc: "Autorisation de s\u00E9jour pour un contrat de plus d\u2019un an" },
  { name: "Permis G", desc: "Statut de frontalier, pour ceux qui r\u00E9sident en France et travaillent en Suisse" },
  { name: "Permis C", desc: "Autorisation d\u2019\u00E9tablissement, apr\u00E8s 5 ou 10 ans selon la nationalit\u00E9" },
];

const PLATEFORMES = [
  { name: "Jobup.ch", desc: "Leader en Suisse romande" },
  { name: "Jobs.ch", desc: "R\u00E9f\u00E9rence en Suisse al\u00E9manique" },
  { name: "Indeed.ch et Monster.ch", desc: "G\u00E9n\u00E9ralistes" },
  { name: "Jobscout24", desc: "Surtout en Suisse allemande" },
];

const CV_POINTS = [
  { label: "Longueur", desc: "2 \u00E0 3 pages sont accept\u00E9es, voire attendues" },
  { label: "Photo", desc: "Quasi syst\u00E9matique et professionnelle" },
  { label: "D\u00E9tail", desc: "Dates pr\u00E9cises (jour/mois/ann\u00E9e), r\u00E9f\u00E9rences nomm\u00E9es, certificats de travail joints" },
  { label: "Ton", desc: "Factuel, sans fioritures, orient\u00E9 r\u00E9sultats concrets" },
];

const FAQ = [
  { q: "Quel salaire esp\u00E9rer pour un travail en Suisse ?", a: "Le salaire m\u00E9dian brut en Suisse se situe autour de <strong>6 800 CHF par mois</strong> (environ 7 200 \u20AC). Les fourchettes varient fortement selon le canton, le secteur et l\u2019exp\u00E9rience." },
  { q: "Combien de temps pour trouver un emploi en Suisse depuis la France ?", a: "Comptez en moyenne <strong>3 \u00E0 6 mois</strong> pour un poste qualifi\u00E9. Les m\u00E9tiers en p\u00E9nurie (sant\u00E9, \u00E9lectricit\u00E9, IT) peuvent se conclure en quelques semaines." },
  { q: "Faut-il vivre en Suisse pour postuler ?", a: "Non. De nombreux employeurs recrutent des candidats r\u00E9sidant en France, notamment les frontaliers. Les entretiens se font souvent en visio dans un premier temps." },
  { q: "Les dipl\u00F4mes fran\u00E7ais sont-ils reconnus en Suisse ?", a: "Pour les m\u00E9tiers non r\u00E9glement\u00E9s, oui. Pour les professions r\u00E9glement\u00E9es (sant\u00E9, enseignement, droit), une <strong>reconnaissance formelle</strong> est obligatoire via les autorit\u00E9s comp\u00E9tentes (CRS, MEBEKO, SEFRI)." },
];


const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait de poursuites : comment l\u2019obtenir rapidement", author: "Laura B.", date: "5 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "Ouvrir un compte bancaire en Suisse : guide 2026", author: "Karim D.", date: "28 mars 2026", readTime: "6 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Colocation en Suisse : droits, contrats et bons plans", author: "Julie M.", date: "12 mars 2026", readTime: "7 min" },
];

/* ───────── PAGE ───────── */

export default function EmploiSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Trouver un travail en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>guide 2026 et m{"\u00E9"}tiers qui recrutent</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 15 min de lecture</p>
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
              Avec un taux de ch{"\u00F4"}mage national de <strong style={{ color: "#111827" }}>3,1 % en mars 2026</strong> et plus de 225 000 offres d{"\u2019"}emploi recens{"\u00E9"}es {"\u00E0"} travers la Conf{"\u00E9"}d{"\u00E9"}ration, la Suisse reste l{"\u2019"}une des destinations professionnelles les plus attractives d{"\u2019"}Europe. Salaires {"\u00E9"}lev{"\u00E9"}s, qualit{"\u00E9"} de vie, stabilit{"\u00E9"} {"\u00E9"}conomique : les raisons de tenter l{"\u2019"}exp{"\u00E9"}rience ne manquent pas. Mais trouver un travail en Suisse demande m{"\u00E9"}thode et pr{"\u00E9"}paration, surtout dans un march{"\u00E9"} o{"\u00F9"} les r{"\u00E8"}gles diff{"\u00E8"}rent sensiblement de celles de la France. Ce guide vous donne les cl{"\u00E9"}s pour identifier les m{"\u00E9"}tiers qui recrutent en Suisse, cibler les bons canaux et construire une candidature efficace.
            </p>

            {/* Section 1 — Marché de l'emploi */}
            <h2 id="marche-emploi" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"L\u2019\u00E9tat du march\u00E9 de l\u2019emploi suisse en 2026"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le march{"\u00E9"} du travail helv{"\u00E9"}tique traverse une phase de r{"\u00E9"}{"\u00E9"}quilibrage. Apr{"\u00E8"}s des ann{"\u00E9"}es de plein emploi, le ch{"\u00F4"}mage est remont{"\u00E9"} {"\u00E0"} <strong style={{ color: "#111827" }}>3,1 % en mars 2026</strong>, soit 146 255 personnes inscrites aux offices r{"\u00E9"}gionaux de placement. Une hausse mod{"\u00E9"}r{"\u00E9"}e qui refl{"\u00E8"}te un ralentissement {"\u00E9"}conomique, mais qui reste parmi les taux les plus bas d{"\u2019"}Europe.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les {"\u00E9"}carts entre cantons sont importants : <strong style={{ color: "#111827" }}>Appenzell Rhodes-Int{"\u00E9"}rieures</strong> affiche le taux le plus bas avec 0,9 %, tandis que le <strong style={{ color: "#111827" }}>Jura</strong> atteint 5,5 %. La Suisse romande reste plus touch{"\u00E9"}e que la Suisse al{"\u00E9"}manique, avec Vaud {"\u00E0"} 4,9 % et Gen{"\u00E8"}ve traditionnellement au-dessus de 4 %.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Point important pour les candidats {"\u00E9"}trangers : la <strong style={{ color: "#111827" }}>p{"\u00E9"}nurie de main-d{"\u2019"}{"\u0153"}uvre qualifi{"\u00E9"}e</strong> persiste dans quatre grandes cat{"\u00E9"}gories {"\u2014"} professions de sant{"\u00E9"}, encadrement dans la construction, techniciens sp{"\u00E9"}cialis{"\u00E9"}s et m{"\u00E9"}tiers de l{"\u2019"}{"\u00E9"}lectronique. Dans ces secteurs, les employeurs peinent {"\u00E0"} recruter et ouvrent grand leurs portes aux profils internationaux.
            </p>

            {/* À retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                En 2026, la Suisse compte environ <strong style={{ color: "#111827" }}>146 000 ch{"\u00F4"}meurs mais plus de 225 000 postes {"\u00E0"} pourvoir</strong>. Cette asym{"\u00E9"}trie profite directement aux candidats qualifi{"\u00E9"}s dans les secteurs en tension : sant{"\u00E9"}, construction, ing{"\u00E9"}nierie et {"\u00E9"}lectronique.
              </p>
            </div>

            {/* Section 2 — Métiers qui recrutent */}
            <h2 id="metiers-recrutent" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les m{"\u00E9"}tiers qui recrutent en Suisse : le top des secteurs porteurs</h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {SECTEURS.map((s) => (
                <div key={s.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{s.num}</span>
                    <span className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>{s.name}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>

            {/* À retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Les quatre secteurs o{"\u00F9"} la p{"\u00E9"}nurie est structurelle en Suisse en 2026 : <strong style={{ color: "#111827" }}>sant{"\u00E9"}, construction, m{"\u00E9"}tiers techniques/{"\u00E9"}lectronique et ing{"\u00E9"}nierie</strong>. C{"\u2019"}est dans ces domaines que les candidats {"\u00E9"}trangers ont le plus de chances d{"\u2019"}obtenir rapidement un contrat et un permis de travail.
              </p>
            </div>

            {/* Section 3 — Conditions */}
            <h2 id="conditions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les conditions pour travailler en Suisse</h2>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le permis de travail selon votre profil</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour les ressortissants de l{"\u2019"}UE/AELE, l{"\u2019"}acc{"\u00E8"}s au march{"\u00E9"} suisse est relativement fluide gr{"\u00E2"}ce aux accords bilat{"\u00E9"}raux. Les permis les plus courants sont :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {PERMIS.map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 90 }}>{p.name}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Pour les <strong style={{ color: "#111827" }}>ressortissants hors UE</strong>, la proc{"\u00E9"}dure est plus stricte et soumise {"\u00E0"} des quotas annuels : l{"\u2019"}employeur doit d{"\u00E9"}montrer qu{"\u2019"}aucun candidat suisse ou europ{"\u00E9"}en ne correspond au profil.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La langue, une condition souvent d{"\u00E9"}terminante</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La Suisse compte quatre langues officielles, mais trois concernent le march{"\u00E9"} de l{"\u2019"}emploi : le <strong style={{ color: "#111827" }}>fran{"\u00E7"}ais</strong> (Romandie), l{"\u2019"}<strong style={{ color: "#111827" }}>allemand et le suisse-allemand</strong> (Suisse al{"\u00E9"}manique) et l{"\u2019"}<strong style={{ color: "#111827" }}>italien</strong> (Tessin). Ma{"\u00EE"}triser la langue de la r{"\u00E9"}gion vis{"\u00E9"}e est g{"\u00E9"}n{"\u00E9"}ralement indispensable, sauf dans certains environnements internationaux (finance, pharma, ONG genevoises) o{"\u00F9"} l{"\u2019"}anglais suffit.
            </p>

            {/* Section 4 — Canaux */}
            <h2 id="canaux" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment trouver un emploi en Suisse : les bons canaux</h2>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les plateformes d{"\u2019"}offres d{"\u2019"}emploi</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Quatre sites concentrent l{"\u2019"}essentiel du march{"\u00E9"} :</p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {PLATEFORMES.map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 14 }}>{p.name}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{p.desc}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les r{"\u00E9"}seaux sociaux professionnels</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              <strong style={{ color: "#111827" }}>LinkedIn</strong> domine largement en Romandie et dans les milieux internationaux. En Suisse al{"\u00E9"}manique, <strong style={{ color: "#111827" }}>Xing</strong> garde une place solide pour les recrutements locaux. Un profil soign{"\u00E9"} et r{"\u00E9"}guli{"\u00E8"}rement mis {"\u00E0"} jour est aujourd{"\u2019"}hui incontournable.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les agences de placement et cabinets de recrutement</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Adecco, Manpower, Michael Page, Hays, Robert Walters, Interiman{"\u2026"} Les agences jouent un r{"\u00F4"}le <strong style={{ color: "#111827" }}>beaucoup plus central qu{"\u2019"}en France</strong>. Elles g{"\u00E8"}rent une part importante des recrutements, y compris pour des CDI, et constituent un canal privil{"\u00E9"}gi{"\u00E9"} pour les candidats {"\u00E9"}trangers.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les candidatures spontan{"\u00E9"}es</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les grands employeurs (<strong style={{ color: "#111827" }}>Migros, Coop, Nestl{"\u00E9"}, Novartis, Roche, La Poste, CFF</strong>, les h{"\u00F4"}pitaux cantonaux) acceptent volontiers les candidatures spontan{"\u00E9"}es via leurs portails carri{"\u00E8"}re. C{"\u2019"}est souvent plus efficace que de passer par une annonce.
            </p>

            {/* Section 5 — Candidature */}
            <h2 id="candidature" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Adapter sa candidature aux standards suisses</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Un CV suisse ne ressemble pas {"\u00E0"} un CV fran{"\u00E7"}ais. Les diff{"\u00E9"}rences essentielles :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {CV_POINTS.map((p) => (
                <div key={p.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 14, minWidth: 90 }}>{p.label}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La <strong style={{ color: "#111827" }}>lettre de motivation</strong> reste importante, surtout en Romandie, mais doit {"\u00EA"}tre courte (une page) et cibl{"\u00E9"}e. En Suisse al{"\u00E9"}manique, elle est parfois remplac{"\u00E9"}e par un formulaire en ligne.
            </p>

            {/* Section 6 — Sans diplôme */}
            <h2 id="sans-diplome" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Travailler en Suisse sans dipl{"\u00F4"}me : est-ce possible ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Oui, et c{"\u2019"}est m{"\u00EA"}me fr{"\u00E9"}quent dans plusieurs secteurs. L{"\u2019"}<strong style={{ color: "#111827" }}>h{"\u00F4"}tellerie-restauration</strong>, la grande distribution (Migros, Coop, Manor, Lidl), la logistique, le nettoyage industriel, certaines fonctions dans la construction ou le recyclage accueillent r{"\u00E9"}guli{"\u00E8"}rement des profils sans qualification formelle.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              L{"\u2019"}exp{"\u00E9"}rience, la motivation et la disponibilit{"\u00E9"} comptent souvent davantage que le titre acad{"\u00E9"}mique. L{"\u2019"}<strong style={{ color: "#111827" }}>int{"\u00E9"}rim</strong> constitue une excellente porte d{"\u2019"}entr{"\u00E9"}e : les recruteurs suisses valorisent l{"\u2019"}exp{"\u00E9"}rience de terrain et un premier contrat temporaire d{"\u00E9"}bouche souvent sur une embauche stable.
            </p>

            {/* Section 7 — FAQ */}
            <h2 id="faq" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>FAQ</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {FAQ.map((item) => (
                <details key={item.q} className="rounded-xl bg-white group" style={{ border: "1px solid #E2E8F0" }}>
                  <summary className="font-heading cursor-pointer list-none flex items-center justify-between" style={{ fontSize: 17, fontWeight: 600, color: "#111827", padding: "18px 24px" }}>
                    {item.q}
                    <span className="font-body shrink-0 transition-transform duration-200 group-open:rotate-45" style={{ fontSize: 22, color: "#D97706", marginLeft: 12 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 24px 20px" }}>
                    <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Pr\u00EAt \u00E0 d\u00E9crocher votre emploi en Suisse ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>{"Nos experts \u00E9valuent votre profil et vous orientent vers les meilleures opportunit\u00E9s. Diagnostic gratuit."}</p>
              <Link href="/" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>{"\u00C9valuer mon potentiel \u2192"}</Link>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{"\u00C9valuer mon potentiel"}</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"D\u00E9couvrez en 2 min quelles opportunit\u00E9s d\u2019emploi correspondent \u00E0 votre profil en Suisse."}</p>
                <Link href="/" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>{"\u00C9valuer mon potentiel \u2192"}</Link>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
              </div>
              <SidebarGuides exclude="/emploi-suisse" />
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
