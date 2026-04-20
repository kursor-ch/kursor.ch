import Link from "next/link";
import type { Metadata } from "next";
import SalaireCalculator from "./SalaireCalculator";

/* ───────── SEO ───────── */

export const metadata: Metadata = {
  title: "Simulez votre salaire net suisse en 30 secondes",
  description:
    "Calculez votre salaire net en Suisse par canton et statut. Taux AVS, AC, LPP et imp\u00F4t \u00E0 la source 2026. R\u00E9sultat imm\u00E9diat.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "simulateur", label: "Simulateur de salaire" },
  { id: "cotisations", label: "Les cotisations sociales" },
  { id: "impot-source", label: "L\u2019imp\u00F4t \u00E0 la source" },
  { id: "cantons", label: "Diff\u00E9rences entre cantons" },
  { id: "frontalier", label: "Cas du frontalier" },
  { id: "lpp", label: "Le 2e pilier (LPP)" },
  { id: "conseils", label: "Conseils pour optimiser" },
];

const COTISATIONS = [
  {
    code: "AVS / AI / APG",
    taux: "5,3\u00A0%",
    desc: "Assurance-vieillesse et survivants, invalidit\u00E9, allocations perte de gain. Part salariale ; l\u2019employeur verse le m\u00EAme montant.",
  },
  {
    code: "AC",
    taux: "1,1\u00A0%",
    desc: "Assurance ch\u00F4mage sur la tranche annuelle jusqu\u2019\u00E0 148\u00A0200\u00A0CHF, puis 0,5\u00A0% au-del\u00E0 (AC suppl\u00E9mentaire).",
  },
  {
    code: "LPP",
    taux: "~\u00A07\u00A0%",
    desc: "2e pilier. Cotisation variable selon l\u2019\u00E2ge, le salaire coordonn\u00E9 et le r\u00E8glement de caisse. Montant employeur \u00E9gal ou sup\u00E9rieur.",
  },
  {
    code: "LAA",
    taux: "~\u00A01\u00A0%",
    desc: "Assurance-accidents non professionnels (ANP). La prime d\u00E9pend de la caisse choisie par l\u2019employeur.",
  },
  {
    code: "IJM",
    taux: "\u2248\u00A00,5\u00A0%",
    desc: "Indemnit\u00E9 journali\u00E8re maladie. Souvent pay\u00E9e moiti\u00E9-moiti\u00E9 par l\u2019employ\u00E9 et l\u2019employeur ; variable selon la police.",
  },
];

const CANTONS_INFO = [
  {
    canton: "Gen\u00E8ve",
    particularite:
      "Taux d\u2019imposition \u00E9lev\u00E9s mais salaires minimaux parmi les plus hauts. Accord fiscal sp\u00E9cial avec la France : les frontaliers paient 4,5\u00A0% redistribu\u00E9s.",
  },
  {
    canton: "Vaud",
    particularite:
      "Taux moyen-haut. Beaucoup de frontaliers. Commune de r\u00E9sidence influe sur le taux final.",
  },
  {
    canton: "Zurich",
    particularite:
      "Fiscalit\u00E9 plus comp\u00E9titive. March\u00E9 du travail tr\u00E8s dynamique, salaires bruts \u00E9lev\u00E9s dans la finance et la tech.",
  },
  {
    canton: "Valais",
    particularite:
      "Taux d\u2019imposition parmi les plus bas de Suisse romande. Attractif pour les hauts revenus.",
  },
];

const TIPS = [
  {
    title: "Rachat LPP",
    desc: "Combler les lacunes de votre 2e pilier est d\u00E9ductible du revenu imposable. Un rachat peut r\u00E9duire significativement votre imp\u00F4t.",
  },
  {
    title: "Pilier 3a",
    desc: "D\u00E9duisez jusqu\u2019\u00E0 7\u2019258\u00A0CHF (2026) pour les salari\u00E9s affili\u00E9s au LPP. La d\u00E9duction s\u2019applique sur l\u2019imp\u00F4t ordinaire (pas \u00E0 la source).",
  },
  {
    title: "Frais professionnels",
    desc: "Transport, repas, frais de formation : d\u00E9ductibles dans votre d\u00E9claration fiscale selon les cantons.",
  },
  {
    title: "Taxation ordinaire",
    desc: "Si vous \u00EAtes frontalier et souhaitez d\u00E9duire des charges r\u00E9elles, renseignez-vous sur la proc\u00E9dure de rectification aupr\u00E8s du canton.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F4C4}", title: "Permis de s\u00E9jour en Suisse : guide complet", readTime: "14 min", category: "Administratif" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire en Suisse : guide 2026", readTime: "6 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "Le 2e pilier LPP : comment fonctionne votre retraite suisse", author: "Marc D.", date: "10 avril 2026", readTime: "8 min" },
  { icon: "\u{1F3E5}", tag: "ASSURANCE", title: "Top 10 des meilleures caisses maladie en Suisse 2026", author: "\u00C9quipe Kursor", date: "2 avril 2026", readTime: "15 min" },
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait de poursuites : comment l\u2019obtenir rapidement", author: "Laura B.", date: "5 avril 2026", readTime: "4 min" },
];

const TAGS = ["Salaire net", "Frontalier", "Imp\u00F4t \u00E0 la source", "LPP", "AVS", "Suisse"];

/* ───────── PAGE ───────── */

export default function SalaireSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Calcul salaire net suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>frontalier ou r{"\u00E9"}sident</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 10 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBARS */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR — SOMMAIRE */}
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
              En Suisse, l{"\u2019"}cart entre salaire brut et salaire net peut surprendre les nouveaux arriv{"\u00E9"}s et les frontaliers. Entre cotisations sociales, LPP et imp{"\u00F4"}t {"\u00E0"} la source, <strong style={{ color: "#111827" }}>les retenues repr{"\u00E9"}sentent typiquement 20 {"\u00E0"} 35&nbsp;% du brut</strong> selon le canton et la situation. Utilisez notre simulateur, puis lisez le d{"\u00E9"}tail des d{"\u00E9"}ductions pour tout comprendre.
            </p>

            {/* A retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Les cotisations <strong>AVS/AI/APG (5,3\u00A0%)</strong> et <strong>AC (1,1\u00A0%)</strong> sont obligatoires pour tout salari\u00E9.",
                  "Le <strong>LPP (2e pilier)</strong> varie selon l\u2019\u00E2ge et le salaire ; l\u2019employeur verse au moins autant que vous.",
                  "L\u2019<strong>imp\u00F4t \u00E0 la source</strong> diff\u00E8re fortement selon le canton : de ~15\u00A0% (Valais) \u00E0 ~20\u00A0% (Gen\u00E8ve, B\u00E2le) pour un c\u00E9libataire.",
                  "Les <strong>frontaliers</strong> b\u00E9n\u00E9ficient souvent d\u2019un taux r\u00E9duit gr\u00E2ce aux accords fiscaux bilataux.",
                  "Le salaire <strong>m\u00E9dian suisse</strong> est d\u2019environ 6\u00A0788\u00A0CHF brut mensuel (source\u00A0: OFS\u00A02024).",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* SIMULATEUR */}
            <h2 id="simulateur" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 20, scrollMarginTop: 80 }}>
              Simulateur de salaire net suisse 2026
            </h2>
            <SalaireCalculator />

            {/* Section — Cotisations */}
            <h2 id="cotisations" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les cotisations sociales en Suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le syst{"\u00E8"}me social suisse repose sur trois piliers. Sur votre fiche de salaire, vous trouverez plusieurs lignes de d{"\u00E9"}ductions obligatoires :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {COTISATIONS.map((c) => (
                <div key={c.code} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "18px 22px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 8 }}>
                    <span className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: "#D97706" }}>{c.code}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#111827", backgroundColor: "#F1F5F9", borderRadius: 6, padding: "2px 10px" }}>{c.taux}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Section — Impôt source */}
            <h2 id="impot-source" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              L{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source : comment {"\u00E7"}a fonctionne ?
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, les employ{"\u00E9"}s {"\u00E9"}trangers (et les frontaliers) sont soumis {"\u00E0"} l{"\u2019"}<strong style={{ color: "#111827" }}>imp{"\u00F4"}t {"\u00E0"} la source (IS)</strong>, pr{"\u00E9"}lev{"\u00E9"} directement sur le salaire par l{"\u2019"}employeur. L{"\u2019"}IS remplace l{"\u2019"}imp{"\u00F4"}t sur le revenu ordinaire tant que vous n{"\u2019"}{"\u00EA"}tes pas domicili{"\u00E9"} en Suisse ou si votre revenu reste inf{"\u00E9"}rieur {"\u00E0"} 120{"\u00A0"}000{"\u00A0"}CHF annuel.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le taux est calcul{"\u00E9"} selon un <strong style={{ color: "#111827" }}>bar{"\u00E8"}me cantonal</strong> qui int{"\u00E8"}gre : le montant du salaire, la situation familiale (tarif A pour c{"\u00E9"}libataire, B pour mari{"\u00E9"}(e) avec double revenu, C pour mari{"\u00E9"}(e) revenu unique, H pour parent seul) et la commune de travail.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Depuis 2021, une <strong style={{ color: "#D97706" }}>rectification de l{"\u2019"}IS</strong> est possible dans tous les cantons. Si vous avez des charges d{"\u00E9"}ductibles (frais de garde, int{"\u00E9"}r{"\u00EA"}ts hypothécaires, cotisations 3a), vous pouvez demander un remboursement partiel de l{"\u2019"}IS pay{"\u00E9"}.
              </p>
            </div>

            {/* Section — Cantons */}
            <h2 id="cantons" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Diff{"\u00E9"}rences entre les cantons
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La Suisse compte 26 cantons, chacun avec sa propre l{"\u00E9"}gislation fiscale. Les {"\u00E9"}carts sont substantiels : pour un m{"\u00EA"}me salaire brut de 100{"\u00A0"}000{"\u00A0"}CHF, le net peut varier de <strong style={{ color: "#111827" }}>plus de 10{"\u00A0"}000{"\u00A0"}CHF</strong> entre un canton fiscalement cl{"\u00E9"}ment et un canton plus lourd.
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {CANTONS_INFO.map((c) => (
                <div key={c.canton} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="font-heading shrink-0" style={{ fontSize: 15, fontWeight: 700, color: "#D97706", minWidth: 80 }}>{c.canton}</span>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{c.particularite}</p>
                </div>
              ))}
            </div>

            {/* Section — Frontalier */}
            <h2 id="frontalier" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Salaire net suisse pour les frontaliers
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les frontaliers &mdash; personnes r{"\u00E9"}sidant dans un pays limitrophe (France, Italie, Allemagne, Autriche) et travaillant en Suisse &mdash; ont un r{"\u00E9"}gime fiscal sp{"\u00E9"}cifique :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>Gen\u00E8ve :</strong> accord franco-suisse unique. L\u2019imp\u00F4t \u00E0 la source est fix\u00E9 \u00E0 4,5\u00A0% du brut, redistribu\u00E9 aux communes fran\u00E7aises frontal\u00E8res. Le frontalier reste imposable en France pour le surplus.",
                "<strong>Autres cantons romands (Vaud, Valais, Neuch\u00E2tel, Jura) :</strong> depuis 2023 (nouvel accord fiscal), l\u2019imp\u00F4t est pr\u00E9lev\u00E9 \u00E0 la source en Suisse avec un cr\u00E9dit d\u2019imp\u00F4t en France.",
                "<strong>Cotisations sociales :</strong> les frontaliers cotisent au syst\u00E8me suisse (AVS, AC, LPP). Ils ne cotisent pas \u00E0 la S\u00E9curit\u00E9 sociale fran\u00E7aise pendant leur activit\u00E9 en Suisse.",
                "<strong>Assurance maladie :</strong> au choix entre le syst\u00E8me suisse (LAMal) ou fran\u00E7ais, selon le canton et la situation. Ce choix impacte le reste \u00E0 charge mensuel.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 10 }}>
                  <span style={{ color: "#D97706", flexShrink: 0 }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Bon {"\u00E0"} savoir :</strong> les frontaliers ne b{"\u00E9"}n{"\u00E9"}ficient pas des allocations ch{"\u00F4"}mage suisses ; en cas de perte d{"\u2019"}emploi, c{"\u2019"}est le p{"\u00F4"}le emploi du pays de r{"\u00E9"}sidence qui prend en charge.
              </p>
            </div>

            {/* Section — LPP */}
            <h2 id="lpp" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Le 2e pilier (LPP) : comprendre votre retraite
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La LPP (Loi sur la pr{"\u00E9"}voyance professionnelle) est le 2e pilier du syst{"\u00E8"}me suisse de retraite. Obligatoire d{"\u00E8"}s lors que le <strong style={{ color: "#111827" }}>salaire annuel d{"\u00E9"}passe 22{"\u00A0"}680{"\u00A0"}CHF</strong>, la cotisation est partag{"\u00E9"}e entre l{"\u2019"}employ{"\u00E9"} et l{"\u2019"}employeur.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les taux de cotisation augmentent avec l{"\u2019"}{"\u00E2"}ge :{" "}
              <strong style={{ color: "#111827" }}>7&nbsp;% de 25 {"\u00E0"} 34 ans</strong>,{" "}
              <strong style={{ color: "#111827" }}>10&nbsp;% de 35 {"\u00E0"} 44 ans</strong>,{" "}
              <strong style={{ color: "#111827" }}>15&nbsp;% de 45 {"\u00E0"} 54 ans</strong>,{" "}
              <strong style={{ color: "#111827" }}>18&nbsp;% de 55 ans {"\u00E0"} la retraite</strong> (taux minimaux LPP, part employ{"\u00E9"} + employeur).
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les frontaliers, le capital LPP accumul{"\u00E9"} peut {"\u00EA"}tre retir{"\u00E9"} en esp{"\u00E8"}ces lors du d{"\u00E9"}part d{"\u00E9"}finitif de Suisse, ou transf{"\u00E9"}r{"\u00E9"} vers un compte de libre passage.
            </p>

            {/* Section — Conseils */}
            <h2 id="conseils" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Conseils pour optimiser votre salaire net
            </h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {TIPS.map((tip) => (
                <div key={tip.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#D97706", fontSize: 18, flexShrink: 0 }}>{"\u2713"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{tip.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4, lineHeight: 1.65 }}>{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>
                Besoin d{"\u2019"}un bilan salarial personnalis{"\u00E9"} ?
              </h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>
                Nos experts analysent votre fiche de salaire et vous conseillent sur les d{"\u00E9"}ductions possibles.
              </p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Demander un conseil gratuit &rarr;
              </button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Calculer son salaire net en Suisse n{"\u00E9"}cessite de cumuler AVS (5,3&nbsp;%), ch{"\u00F4"}mage (1,1&nbsp;%), LPP et imp{"\u00F4"}t {"\u00E0"} la source. Ce dernier varie fortement selon le <strong style={{ color: "#111827" }}>canton</strong>, votre <strong style={{ color: "#111827" }}>situation familiale</strong> et votre <strong style={{ color: "#111827" }}>statut</strong> (r{"\u00E9"}sident ou frontalier). Notre simulateur vous donne une estimation fiable en 30 secondes &mdash; et les sections ci-dessus vous donnent toutes les cl{"\u00E9"}s pour comprendre et anticiper vos revenus nets.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simulez votre net</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre brut annuel et obtenez une estimation d{"\u00E9"}taill{"\u00E9"}e en quelques clics.</p>
                <a href="#simulateur" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>
                  Acc{"\u00E9"}der au simulateur &rarr;
                </a>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit &middot; Sans inscription &middot; R{"\u00E9"}sultats imm{"\u00E9"}diats</p>
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
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles &rarr;</span>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Les pi{"\u00E8"}ges {"\u00E0"} {"\u00E9"}viter, les {"\u00E9"}conomies {"\u00E0"} faire.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>
              S{"\u2019"}inscrire &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
