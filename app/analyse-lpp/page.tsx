import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimiser son 2\u00E8me pilier en Suisse : guide LPP 2026",
  description: "Fonctionnement, cotisations, rachat LPP, taux de conversion, libre passage, comparaison des caisses de pension et retrait anticip\u00E9. Tout pour optimiser votre 2\u00E8me pilier.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "fonctionnement", label: "Fonctionnement du 2\u00E8me pilier" },
  { id: "cotisations", label: "Cotisations et bonifications" },
  { id: "taux-conversion", label: "Taux de conversion" },
  { id: "rachat-lpp", label: "Rachat LPP" },
  { id: "libre-passage", label: "Libre passage" },
  { id: "comparaison-caisses", label: "Comparer les caisses de pension" },
  { id: "retrait-anticipe", label: "Retrait anticip\u00E9" },
  { id: "erreurs", label: "Erreurs \u00E0 \u00E9viter" },
];

const BONIFICATIONS = [
  { tranche: "25\u201334 ans", taux: "7%", desc: "Entr\u00E9e dans le syst\u00E8me, cotisations faibles" },
  { tranche: "35\u201344 ans", taux: "10%", desc: "Acc\u00E9l\u00E9ration de l\u2019\u00E9pargne" },
  { tranche: "45\u201554 ans", taux: "15%", desc: "Phase de capitalisation intense" },
  { tranche: "55\u201364/65 ans", taux: "18%", desc: "Taux maximal avant la retraite" },
];

const COMPARAISON_CAISSES = [
  {
    critere: "Performance de placement",
    desc: "Rendement net annuel sur les avoirs. Comparez les rapports d\u2019activit\u00E9 des 5 derni\u00E8res ann\u00E9es.",
    poids: "Tr\u00E8s \u00E9lev\u00E9",
  },
  {
    critere: "Taux d\u2019int\u00E9r\u00EAt cr\u00E9dit\u00E9",
    desc: "Taux appliqu\u00E9 sur votre avoir de vieillesse (min. 1,25% en 2026 pour la part LPP obligatoire).",
    poids: "\u00C9lev\u00E9",
  },
  {
    critere: "Degr\u00E9 de couverture",
    desc: "Ratio actifs/rentiers. Un taux sup\u00E9rieur \u00E0 100% indique une caisse financ\u00E8rement saine.",
    poids: "\u00C9lev\u00E9",
  },
  {
    critere: "Plan de pr\u00E9voyance",
    desc: "Prestations sur\u2011obligatoires : rentes d\u2019invalidit\u00E9, de survivant, garanties de rachat.",
    poids: "Moyen",
  },
  {
    critere: "Frais administratifs",
    desc: "Pr\u00E9lev\u00E9s sur l\u2019avoir ou via les cotisations. Peuvent rogner significativement le rendement.",
    poids: "Moyen",
  },
  {
    critere: "Flexibilit\u00E9 du retrait",
    desc: "Options de rente, capital ou mixte. Certaines caisses limitent les options au moment de la retraite.",
    poids: "Selon profil",
  },
];

const RETRAIT_ANTICIPE = [
  {
    motif: "Achat immobilier",
    icon: "\u{1F3E0}",
    desc: "Vous pouvez retirer tout ou partie de votre avoir LPP pour financer l\u2019acquisition de votre r\u00E9sidence principale. Retrait autoris\u00E9 tous les <strong>5 ans</strong>, minimum <strong>20 000 CHF</strong>.",
    attention: "Le retrait r\u00E9duit votre future rente. Privil\u00E9giez le <strong>nantissement</strong> (mise en gage) si les taux hypoth\u00E9caires sont favorables.",
  },
  {
    motif: "D\u00E9part d\u00E9finitif de Suisse",
    icon: "\u2708\uFE0F",
    desc: "Si vous quittez d\u00E9finitivement la Suisse, vous pouvez r\u00E9cup\u00E9rer votre avoir. Les ressortissants <strong>UE/AELE</strong> ne peuvent retirer que la part sur\u2011obligatoire si leur pays dispose d\u2019un syst\u00E8me de pr\u00E9voyance obligatoire.",
    attention: "Le versement est soumis \u00E0 un <strong>imp\u00F4t \u00E0 la source</strong> variable selon le canton de r\u00E9sidence.",
  },
  {
    motif: "Activit\u00E9 ind\u00E9pendante",
    icon: "\u{1F4BC}",
    desc: "Les ind\u00E9pendants qui n\u2019adh\u00E8rent pas \u00E0 une institution LPP peuvent retirer leur avoir de libre passage lors du passage \u00E0 l\u2019ind\u00E9pendance.",
    attention: "Une fois ind\u00E9pendant, cotiser volontairement au <strong>pilier 3a</strong> ou \u00E0 une caisse de pension reste fortement conseill\u00E9.",
  },
];

const ERREURS = [
  {
    title: "Ignorer les lacunes de cotisation",
    desc: "Chaque ann\u00E9e sans emploi (ch\u00F4mage, cong\u00E9 parental, ind\u00E9pendance) cr\u00E9e une lacune. Un rachat cibl\u00E9 les comble efficacement.",
  },
  {
    title: "Retirer le capital sans planification fiscale",
    desc: "Le retrait en capital est impos\u00E9 s\u00E9par\u00E9ment du revenu, mais \u00E0 un taux progressif. \u00C9taler les retraits sur plusieurs ann\u00E9es (conjoint, pilier 3a) r\u00E9duit la facture.",
  },
  {
    title: "N\u00E9gliger la comparaison des caisses",
    desc: "Un \u00E9cart de rendement de 1% sur 20 ans repr\u00E9sente des dizaines de milliers de francs. Comparez avant de choisir votre employeur ou votre caisse collective.",
  },
  {
    title: "Retirer pour l\u2019immobilier sans calculer l\u2019impact rente",
    desc: "Un retrait anticip\u00E9 de 100 000 CHF peut r\u00E9duire votre rente LPP de plusieurs centaines de francs par mois. Faites le calcul avant de d\u00E9cider.",
  },
  {
    title: "Oublier le compte de libre passage",
    desc: "Entre deux emplois, l\u2019avoir doit \u00EAtre transf\u00E9r\u00E9 sur un compte de libre passage. Des millions de francs dorment sur des comptes oubli\u00E9s en Suisse (centrale du 2e pilier).",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Pilier 3a : comment maximiser vos d\u00E9ductions fiscales", readTime: "10 min", category: "Retraite" },
  { icon: "\u{1F3E6}", title: "Meilleurs comptes \u00E9pargne en Suisse 2026", readTime: "8 min", category: "Placement" },
  { icon: "\u{1F4C8}", title: "Investir en bourse depuis la Suisse : le guide", readTime: "12 min", category: "Patrimoine" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "RETRAITE", title: "AVS 2026 : rentes, cotisations et r\u00E9forme", author: "\u00C9quipe Kursor", date: "10 avril 2026", readTime: "8 min" },
  { icon: "\u{1F3E0}", tag: "IMMOBILIER", title: "Acheter un bien en Suisse : le guide complet 2026", author: "Laura B.", date: "2 avril 2026", readTime: "11 min" },
  { icon: "\u{1F4B8}", tag: "FISCALIT\u00C9", title: "Optimiser ses imp\u00F4ts en Suisse : 10 leviers efficaces", author: "Karim D.", date: "18 mars 2026", readTime: "9 min" },
];

const TAGS = ["2\u00E8me pilier", "LPP", "Caisse de pension", "Rachat LPP", "Libre passage", "Retraite Suisse", "Placement"];

/* ───────── PAGE ───────── */

export default function AnalyseLppPage() {
  return (
    <div className="bg-creme">

      {/* BREADCRUMB */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/" style={{ color: "#94A3B8" }}>Patrimoine</Link>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>Analyse LPP</span>
        </nav>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Placement 2{"\u00E8"}me pilier :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>analyser et optimiser son LPP en Suisse</span>
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
              Le <strong style={{ color: "#111827" }}>2{"\u00E8"}me pilier</strong>, ou <strong style={{ color: "#111827" }}>LPP</strong> (Loi sur la pr{"\u00E9"}voyance professionnelle), constitue le c{"\u0153"}ur de la retraite suisse pour les salari{"\u00E9"}s. Pourtant, la grande majorit{"\u00E9"} des assur{"\u00E9"}s ignore ce que leur caisse de pension fait r{"\u00E9"}ellement de leur argent — et combien ils laissent sur la table faute d{"\u2019"}optimisation. Rachat LPP, choix de la caisse, retrait anticip{"\u00E9"}, taux de conversion : ce guide d{"\u00E9"}crypte tout.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le 2\u00E8me pilier repr\u00E9sente en moyenne <strong>30 \u00E0 40% du revenu de retraite</strong> d\u2019un salari\u00E9 suisse.",
                  "L\u2019affiliation est <strong>obligatoire d\u00E8s 17 500 CHF de salaire annuel</strong> (seuil d\u2019entr\u00E9e 2026).",
                  "Le <strong>rachat LPP</strong> est l\u2019un des rares leviers l\u00E9gaux permettant de r\u00E9duire significativement ses imp\u00F4ts.",
                  "Vous pouvez choisir entre <strong>rente, capital ou une combinaison</strong> des deux au moment de la retraite.",
                  "Les performances varient fortement d\u2019une caisse \u00E0 l\u2019autre : l\u2019\u00E9cart peut atteindre <strong>2% par an</strong>.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Fonctionnement */}
            <h2 id="fonctionnement" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Fonctionnement du 2{"\u00E8"}me pilier (LPP)</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La LPP repose sur un principe simple : chaque mois, employeur et employ{"\u00E9"} versent des cotisations dans une caisse de pension. Ces avoirs sont investis, g{"\u00E9"}n{"\u00E8"}rent un rendement, et financent une <strong style={{ color: "#111827" }}>rente de vieillesse</strong> — ou un capital — au moment de la retraite.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le syst{"\u00E8"}me comprend deux couches :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>Part obligatoire LPP</strong> : encadr\u00E9e par la loi, elle couvre le salaire coordonn\u00E9 (entre 22 050 CHF et 88 200 CHF en 2026). L\u2019int\u00E9r\u00EAt minimal est fix\u00E9 par le Conseil f\u00E9d\u00E9ral (1,25% en 2026).",
                "<strong>Part sur-obligatoire (enveloppe)</strong> : librement d\u00E9finie par la caisse, elle permet des prestations plus \u00E9lev\u00E9es mais avec moins de garanties l\u00E9gales.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"\u00C0"} l{"\u2019"}approche de la retraite (64 ans pour les femmes, 65 ans pour les hommes), l{"\u2019"}avoir accumul{"\u00E9"} est converti en rente via le <strong style={{ color: "#111827" }}>taux de conversion</strong>.
            </p>

            {/* Section 2 — Cotisations */}
            <h2 id="cotisations" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Cotisations et bonifications de vieillesse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les cotisations LPP augmentent avec l{"\u2019"}{"\u00E2"}ge. Plus vous approchez de la retraite, plus votre taux de bonification est {"\u00E9"}lev{"\u00E9"} — et plus chaque ann{"\u00E9"}e de cotisation compte :
            </p>

            {/* Table bonifications */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
              <div className="grid" style={{ gridTemplateColumns: "1fr 100px 1fr", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "12px 20px" }}>
                <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tranche d{"'\u00E2"}ge</p>
                <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Taux</p>
                <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Signification</p>
              </div>
              {BONIFICATIONS.map((row, i) => (
                <div key={row.tranche} className="grid" style={{ gridTemplateColumns: "1fr 100px 1fr", padding: "14px 20px", borderBottom: i < BONIFICATIONS.length - 1 ? "1px solid #F1F5F9" : "none", backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                  <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{row.tranche}</p>
                  <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#D97706" }}>{row.taux}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#64748B" }}>{row.desc}</p>
                </div>
              ))}
            </div>

            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 32 }}>
              Ces taux s{"\u2019"}appliquent au <strong style={{ color: "#111827" }}>salaire coordonn{"\u00E9"}</strong>. L{"\u2019"}employeur prend en charge au moins la moiti{"\u00E9"} des cotisations totales — souvent plus selon les plans de pr{"\u00E9"}voyance.
            </p>

            {/* Section 3 — Taux de conversion */}
            <h2 id="taux-conversion" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le taux de conversion : un enjeu central</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>taux de conversion</strong> d{"\u00E9"}termine quelle fraction de votre avoir LPP vous recevrez chaque ann{"\u00E9"}e sous forme de rente. Exemple : avec un avoir de <strong style={{ color: "#111827" }}>500 000 CHF</strong> et un taux de <strong style={{ color: "#111827" }}>6,8%</strong>, vous percevez <strong style={{ color: "#111827" }}>34 000 CHF/an</strong>.
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { label: "Taux LPP obligatoire (2026)", value: "6,8%", note: "Fix\u00E9 par la loi f\u00E9d\u00E9rale pour la part obligatoire" },
                { label: "Taux sur-obligatoire (caisses)", value: "4,5\u20135,5%", note: "D\u00E9fini librement par les caisses, souvent inf\u00E9rieur" },
                { label: "Tendance long terme", value: "En baisse", note: "L\u2019esp\u00E9rance de vie augmente, les taux sont sous pression" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{row.label}</p>
                    <p style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{row.note}</p>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#D97706", whiteSpace: "nowrap" }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{"\u00C0"} retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le taux de conversion <strong style={{ color: "#111827" }}>ne s{"\u2019"}applique qu{"\u2019"}{"\u00E0"} la part obligatoire</strong> de l{"\u2019"}avoir. Pour la part sur-obligatoire — qui repr{"\u00E9"}sente souvent la moiti{"\u00E9"} ou plus de l{"\u2019"}avoir total — la caisse fixe librement son taux. Lisez attentivement le r{"\u00E8"}glement de votre caisse.
              </p>
            </div>

            {/* Section 4 — Rachat LPP */}
            <h2 id="rachat-lpp" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le rachat LPP : un levier fiscal puissant</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>rachat LPP</strong> consiste {"\u00E0"} verser volontairement des fonds suppl{"\u00E9"}mentaires dans votre caisse de pension pour combler des {"\u00AB"}lacunes de cotisation{"\u00BB"}. Ces versements sont <strong style={{ color: "#111827" }}>int{"\u00E9"}gralement d{"\u00E9"}ductibles du revenu imposable</strong>.
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { num: "1", title: "V\u00E9rifiez votre lacune de rachat", desc: "Votre certificat de pr\u00E9voyance annuel (remis par la caisse) indique le montant maximal rachetable." },
                { num: "2", title: "\u00C9valuez l\u2019avantage fiscal", desc: "En tranche marginale \u00E0 40%, racheter 10 000 CHF \u00E9conomise environ 4 000 CHF d\u2019imp\u00F4ts l\u2019ann\u00E9e du versement." },
                { num: "3", title: "Planifiez sur plusieurs ann\u00E9es", desc: "\u00C9taler les rachats sur 3\u20135 ans maximise l\u2019effet fiscal et lisse l\u2019impact sur votre tr\u00E9sorerie." },
                { num: "4", title: "Respectez le d\u00E9lai de blocage", desc: "Toute somme rachet\u00E9e ne peut \u00EAtre retir\u00E9e (ex. pour l\u2019immobilier) pendant <strong>3 ans</strong>." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le rachat est particuli{"\u00E8"}rement int{"\u00E9"}ressant pour les <strong style={{ color: "#111827" }}>hauts revenus</strong>, les personnes ayant eu des ann{"\u00E9"}es d{"\u2019"}activit{"\u00E9"} {"\u00E0"} l{"\u2019"}{"\u00E9"}tranger, et celles approchant la retraite qui souhaitent renforcer leur capital.
            </p>

            {/* Section 5 — Libre passage */}
            <h2 id="libre-passage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le libre passage : ne perdez pas votre avoir</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Lorsque vous changez d{"\u2019"}employeur, votre avoir LPP doit {"\u00EA"}tre <strong style={{ color: "#111827" }}>transf{"\u00E9"}r{"\u00E9"} vers la nouvelle caisse</strong> dans les 30 jours. En l{"\u2019"}absence d{"\u2019"}nouvel employeur, l{"\u2019"}avoir est plac{"\u00E9"} sur un <strong style={{ color: "#111827" }}>compte ou police de libre passage</strong>.
            </p>

            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {[
                { label: "Compte de libre passage bancaire", desc: "Taux d\u2019int\u00E9r\u00EAt variable, faible rendement, mais capital garanti et disponible" },
                { label: "Police de libre passage (assurance)", desc: "Couverture d\u2019invalidit\u00E9 et de d\u00E9c\u00E8s int\u00E9gr\u00E9e, rendement d\u00E9pendant des b\u00E9n\u00E9fices" },
                { label: "Compte de libre passage avec placement", desc: "Certaines institutions proposent des fonds de placement — rendement potentiellement plus \u00E9lev\u00E9" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{"\u2022"}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{"\u00C0"} retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Des <strong style={{ color: "#111827" }}>milliards de francs</strong> dorment sur des comptes de libre passage oubli{"\u00E9"}s. Si vous avez chang{"\u00E9"} d{"\u2019"}emploi ou v{"\u00E9"}cu {"\u00E0"} l{"\u2019"}{"\u00E9"}tranger, consultez la <strong style={{ color: "#111827" }}>Centrale du 2{"\u00E8"}me pilier</strong> (centrale2epilier.ch) pour retrouver d{"\u2019"}{"\u00E9"}ventuels avoirs perdus.
              </p>
            </div>

            {/* Section 6 — Comparaison caisses */}
            <h2 id="comparaison-caisses" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comparer les caisses de pension</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Toutes les caisses ne se valent pas. Si votre employeur vous laisse le choix de la caisse collective — fr{"\u00E9"}quent chez les ind{"\u00E9"}pendants, les associations ou les PME — voici les crit{"\u00E8"}res d{"\u00E9"}terminants :
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {COMPARAISON_CAISSES.map((item) => (
                <div key={item.critere} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <div className="flex items-start justify-between gap-4" style={{ marginBottom: 8 }}>
                    <p className="font-body" style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{item.critere}</p>
                    <span className="font-body rounded-full shrink-0" style={{ fontSize: 11, fontWeight: 600, color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "3px 10px", whiteSpace: "nowrap" }}>{item.poids}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 7 — Retrait anticipé */}
            <h2 id="retrait-anticipe" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Retrait anticip{"\u00E9"} du 2{"\u00E8"}me pilier</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Dans trois situations pr{"\u00E9"}cises, vous pouvez retirer tout ou partie de votre avoir LPP avant la retraite. Chaque cas ob{"\u00E9"}it {"\u00E0"} des r{"\u00E8"}gles strictes :
            </p>

            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {RETRAIT_ANTICIPE.map((item) => (
                <div key={item.motif} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 600, color: "#111827" }}>{item.motif}</h3>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <div className="rounded-lg" style={{ backgroundColor: "rgba(217,119,6,0.06)", border: "1px solid rgba(217,119,6,0.2)", padding: "10px 14px" }}>
                    <p className="font-body" style={{ fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
                      <strong>Attention : </strong>
                      <span dangerouslySetInnerHTML={{ __html: item.attention }} />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* A retenir 3 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir — Rente ou capital ?</p>
              <ul className="list-none p-0 m-0">
                {[
                  "<strong>Rente</strong> : revenu garanti \u00E0 vie, couverture du risque de long\u00E9vit\u00E9, mais irr\u00E9versible. Favoris\u00E9 si vous \u00EAtes en bonne sant\u00E9 et n\u2019avez pas d\u2019autres actifs.",
                  "<strong>Capital</strong> : flexibilit\u00E9 totale, optimisation fiscale possible, mais risque de g\u00E9rer soi-m\u00EAme le patrimoine sur 20\u201330 ans.",
                  "<strong>Mixte (ex. 50/50)</strong> : solution \u00E9quilibr\u00E9e, de plus en plus fr\u00E9quente. \u00C0 planifier au moins 3 ans avant la retraite.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\u00E0"} {"\u00E9"}viter</h2>
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
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Votre 2\u00E8me pilier est-il optimis\u00E9 ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Simulation gratuite : rachat LPP, taux de conversion, comparaison de caisses. R{"\u00E9"}sultats en 3 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"Analyser mon 2\u00E8me pilier \u2192"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le 2{"\u00E8"}me pilier est votre principal levier de <strong style={{ color: "#111827" }}>placement {"\u00E0"} long terme</strong> en Suisse. Choisir la bonne caisse, effectuer des rachats cibl{"\u00E9"}s, g{"\u00E9"}rer intelligemment son libre passage et anticiper le mode de retrait (rente, capital ou mixte) peut faire une diff{"\u00E9"}rence de <strong style={{ color: "#111827" }}>plusieurs centaines de milliers de francs</strong> sur l{"\u2019"}ensemble de votre carri{"\u00E8"}re. Ne laissez pas ce patrimoine en pilote automatique.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simuler mon 2{"\u00E8"}me pilier</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Rachat LPP, projection de rente, optimisation fiscale — en 3 minutes.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Lancer ma simulation \u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 3 minutes \u00B7 Sans engagement"}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Retraite, fiscalit\u00E9, patrimoine \u2014 un email par semaine, sans superflu."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\u2019inscrire \u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
