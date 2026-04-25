import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimiser son 2\ème pilier en Suisse : guide LPP 2026",
  description: "Fonctionnement, cotisations, rachat LPP, taux de conversion, libre passage, comparaison des caisses de pension et retrait anticip\é. Tout pour optimiser votre 2\ème pilier.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "fonctionnement", label: "Fonctionnement du 2\ème pilier" },
  { id: "cotisations", label: "Cotisations et bonifications" },
  { id: "taux-conversion", label: "Taux de conversion" },
  { id: "rachat-lpp", label: "Rachat LPP" },
  { id: "libre-passage", label: "Libre passage" },
  { id: "comparaison-caisses", label: "Comparer les caisses de pension" },
  { id: "retrait-anticipe", label: "Retrait anticip\é" },
  { id: "erreurs", label: "Erreurs \à \éviter" },
];

const BONIFICATIONS = [
  { tranche: "25\–34 ans", taux: "7%", desc: "Entr\ée dans le syst\ème, cotisations faibles" },
  { tranche: "35\–44 ans", taux: "10%", desc: "Acc\él\ération de l\’\épargne" },
  { tranche: "45\―54 ans", taux: "15%", desc: "Phase de capitalisation intense" },
  { tranche: "55\–64/65 ans", taux: "18%", desc: "Taux maximal avant la retraite" },
];

const COMPARAISON_CAISSES = [
  {
    critere: "Performance de placement",
    desc: "Rendement net annuel sur les avoirs. Comparez les rapports d\’activit\é des 5 derni\ères ann\ées.",
    poids: "Tr\ès \élev\é",
  },
  {
    critere: "Taux d\’int\ér\êt cr\édit\é",
    desc: "Taux appliqu\é sur votre avoir de vieillesse (min. 1,25% en 2026 pour la part LPP obligatoire).",
    poids: "\Élev\é",
  },
  {
    critere: "Degr\é de couverture",
    desc: "Ratio actifs/rentiers. Un taux sup\érieur \à 100% indique une caisse financ\èrement saine.",
    poids: "\Élev\é",
  },
  {
    critere: "Plan de pr\évoyance",
    desc: "Prestations sur\‑obligatoires : rentes d\’invalidit\é, de survivant, garanties de rachat.",
    poids: "Moyen",
  },
  {
    critere: "Frais administratifs",
    desc: "Pr\élev\és sur l\’avoir ou via les cotisations. Peuvent rogner significativement le rendement.",
    poids: "Moyen",
  },
  {
    critere: "Flexibilit\é du retrait",
    desc: "Options de rente, capital ou mixte. Certaines caisses limitent les options au moment de la retraite.",
    poids: "Selon profil",
  },
];

const RETRAIT_ANTICIPE = [
  {
    motif: "Achat immobilier",
    icon: "\u{1F3E0}",
    desc: "Vous pouvez retirer tout ou partie de votre avoir LPP pour financer l\’acquisition de votre r\ésidence principale. Retrait autoris\é tous les <strong>5 ans</strong>, minimum <strong>20 000 CHF</strong>.",
    attention: "Le retrait r\éduit votre future rente. Privil\égiez le <strong>nantissement</strong> (mise en gage) si les taux hypoth\écaires sont favorables.",
  },
  {
    motif: "D\épart d\éfinitif de Suisse",
    icon: "\✈\️",
    desc: "Si vous quittez d\éfinitivement la Suisse, vous pouvez r\écup\érer votre avoir. Les ressortissants <strong>UE/AELE</strong> ne peuvent retirer que la part sur\‑obligatoire si leur pays dispose d\’un syst\ème de pr\évoyance obligatoire.",
    attention: "Le versement est soumis \à un <strong>imp\ôt \à la source</strong> variable selon le canton de r\ésidence.",
  },
  {
    motif: "Activit\é ind\épendante",
    icon: "\u{1F4BC}",
    desc: "Les ind\épendants qui n\’adh\èrent pas \à une institution LPP peuvent retirer leur avoir de libre passage lors du passage \à l\’ind\épendance.",
    attention: "Une fois ind\épendant, cotiser volontairement au <strong>pilier 3a</strong> ou \à une caisse de pension reste fortement conseill\é.",
  },
];

const ERREURS = [
  {
    title: "Ignorer les lacunes de cotisation",
    desc: "Chaque ann\ée sans emploi (ch\ômage, cong\é parental, ind\épendance) cr\ée une lacune. Un rachat cibl\é les comble efficacement.",
  },
  {
    title: "Retirer le capital sans planification fiscale",
    desc: "Le retrait en capital est impos\é s\épar\ément du revenu, mais \à un taux progressif. \Étaler les retraits sur plusieurs ann\ées (conjoint, pilier 3a) r\éduit la facture.",
  },
  {
    title: "N\égliger la comparaison des caisses",
    desc: "Un \écart de rendement de 1% sur 20 ans repr\ésente des dizaines de milliers de francs. Comparez avant de choisir votre employeur ou votre caisse collective.",
  },
  {
    title: "Retirer pour l\’immobilier sans calculer l\’impact rente",
    desc: "Un retrait anticip\é de 100 000 CHF peut r\éduire votre rente LPP de plusieurs centaines de francs par mois. Faites le calcul avant de d\écider.",
  },
  {
    title: "Oublier le compte de libre passage",
    desc: "Entre deux emplois, l\’avoir doit \être transf\ér\é sur un compte de libre passage. Des millions de francs dorment sur des comptes oubli\és en Suisse (centrale du 2e pilier).",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Pilier 3a : comment maximiser vos d\éductions fiscales", readTime: "10 min", category: "Retraite" },
  { icon: "\u{1F3E6}", title: "Meilleurs comptes \épargne en Suisse 2026", readTime: "8 min", category: "Placement" },
  { icon: "\u{1F4C8}", title: "Investir en bourse depuis la Suisse : le guide", readTime: "12 min", category: "Patrimoine" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "RETRAITE", title: "AVS 2026 : rentes, cotisations et r\éforme", author: "\Équipe Kursor", date: "10 avril 2026", readTime: "8 min" },
  { icon: "\u{1F3E0}", tag: "IMMOBILIER", title: "Acheter un bien en Suisse : le guide complet 2026", author: "Laura B.", date: "2 avril 2026", readTime: "11 min" },
  { icon: "\u{1F4B8}", tag: "FISCALIT\É", title: "Optimiser ses imp\ôts en Suisse : 10 leviers efficaces", author: "Karim D.", date: "18 mars 2026", readTime: "9 min" },
];

const TAGS = ["2\ème pilier", "LPP", "Caisse de pension", "Rachat LPP", "Libre passage", "Retraite Suisse", "Placement"];

/* ───────── PAGE ───────── */

export default function AnalyseLppPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Placement 2{"\è"}me pilier :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>analyser et optimiser son LPP en Suisse</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\É"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\·"} 16 min de lecture</p>
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
              Le <strong style={{ color: "#111827" }}>2{"\è"}me pilier</strong>, ou <strong style={{ color: "#111827" }}>LPP</strong> (Loi sur la pr{"\é"}voyance professionnelle), constitue le c{"\œ"}ur de la retraite suisse pour les salari{"\é"}s. Pourtant, la grande majorit{"\é"} des assur{"\é"}s ignore ce que leur caisse de pension fait r{"\é"}ellement de leur argent, et combien ils laissent sur la table faute d{"\’"}optimisation. Rachat LPP, choix de la caisse, retrait anticip{"\é"}, taux de conversion : ce guide d{"\é"}crypte tout.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le 2\ème pilier repr\ésente en moyenne <strong>30 \à 40% du revenu de retraite</strong> d\’un salari\é suisse.",
                  "L\’affiliation est <strong>obligatoire d\ès 17 500 CHF de salaire annuel</strong> (seuil d\’entr\ée 2026).",
                  "Le <strong>rachat LPP</strong> est l\’un des rares leviers l\égaux permettant de r\éduire significativement ses imp\ôts.",
                  "Vous pouvez choisir entre <strong>rente, capital ou une combinaison</strong> des deux au moment de la retraite.",
                  "Les performances varient fortement d\’une caisse \à l\’autre : l\’\écart peut atteindre <strong>2% par an</strong>.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Fonctionnement */}
            <h2 id="fonctionnement" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Fonctionnement du 2{"\è"}me pilier (LPP)</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La LPP repose sur un principe simple : chaque mois, employeur et employ{"\é"} versent des cotisations dans une caisse de pension. Ces avoirs sont investis, g{"\é"}n{"\è"}rent un rendement, et financent une <strong style={{ color: "#111827" }}>rente de vieillesse</strong> ou un capital au moment de la retraite.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le syst{"\è"}me comprend deux couches :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>Part obligatoire LPP</strong> : encadr\ée par la loi, elle couvre le salaire coordonn\é (entre 22 050 CHF et 88 200 CHF en 2026). L\’int\ér\êt minimal est fix\é par le Conseil f\éd\éral (1,25% en 2026).",
                "<strong>Part sur-obligatoire (enveloppe)</strong> : librement d\éfinie par la caisse, elle permet des prestations plus \élev\ées mais avec moins de garanties l\égales.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ color: "#D97706" }}>{"\•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"\À"} l{"\’"}approche de la retraite (64 ans pour les femmes, 65 ans pour les hommes), l{"\’"}avoir accumul{"\é"} est converti en rente via le <strong style={{ color: "#111827" }}>taux de conversion</strong>.
            </p>

            {/* Section 2 — Cotisations */}
            <h2 id="cotisations" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Cotisations et bonifications de vieillesse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les cotisations LPP augmentent avec l{"\’"}{"\â"}ge. Plus vous approchez de la retraite, plus votre taux de bonification est {"\é"}lev{"\é"}, et plus chaque ann{"\é"}e de cotisation compte :
            </p>

            {/* Table bonifications */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
              <div className="grid" style={{ gridTemplateColumns: "1fr 100px 1fr", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "12px 20px" }}>
                <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tranche d{"'\â"}ge</p>
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
              Ces taux s{"\’"}appliquent au <strong style={{ color: "#111827" }}>salaire coordonn{"\é"}</strong>. L{"\’"}employeur prend en charge au moins la moiti{"\é"} des cotisations totales, souvent davantage selon les plans de pr{"\é"}voyance.
            </p>

            {/* Section 3 — Taux de conversion */}
            <h2 id="taux-conversion" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le taux de conversion : un enjeu central</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>taux de conversion</strong> d{"\é"}termine quelle fraction de votre avoir LPP vous recevrez chaque ann{"\é"}e sous forme de rente. Exemple : avec un avoir de <strong style={{ color: "#111827" }}>500 000 CHF</strong> et un taux de <strong style={{ color: "#111827" }}>6,8%</strong>, vous percevez <strong style={{ color: "#111827" }}>34 000 CHF/an</strong>.
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { label: "Taux LPP obligatoire (2026)", value: "6,8%", note: "Fix\é par la loi f\éd\érale pour la part obligatoire" },
                { label: "Taux sur-obligatoire (caisses)", value: "4,5\–5,5%", note: "D\éfini librement par les caisses, souvent inf\érieur" },
                { label: "Tendance long terme", value: "En baisse", note: "L\’esp\érance de vie augmente, les taux sont sous pression" },
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{"\À"} retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le taux de conversion <strong style={{ color: "#111827" }}>ne s{"\’"}applique qu{"\’"}{"\à"} la part obligatoire</strong> de l{"\’"}avoir. Pour la part sur-obligatoire, qui repr{"\é"}sente souvent la moiti{"\é"} ou plus de l{"\’"}avoir total, la caisse fixe librement son taux. Lisez attentivement le r{"\è"}glement de votre caisse.
              </p>
            </div>

            {/* Section 4 — Rachat LPP */}
            <h2 id="rachat-lpp" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le rachat LPP : un levier fiscal puissant</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>rachat LPP</strong> consiste {"\à"} verser volontairement des fonds suppl{"\é"}mentaires dans votre caisse de pension pour combler des {"\«"}lacunes de cotisation{"\»"}. Ces versements sont <strong style={{ color: "#111827" }}>int{"\é"}gralement d{"\é"}ductibles du revenu imposable</strong>.
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { num: "1", title: "V\érifiez votre lacune de rachat", desc: "Votre certificat de pr\évoyance annuel (remis par la caisse) indique le montant maximal rachetable." },
                { num: "2", title: "\Évaluez l\’avantage fiscal", desc: "En tranche marginale \à 40%, racheter 10 000 CHF \économise environ 4 000 CHF d\’imp\ôts l\’ann\ée du versement." },
                { num: "3", title: "Planifiez sur plusieurs ann\ées", desc: "\Étaler les rachats sur 3\–5 ans maximise l\’effet fiscal et lisse l\’impact sur votre tr\ésorerie." },
                { num: "4", title: "Respectez le d\élai de blocage", desc: "Toute somme rachet\ée ne peut \être retir\ée (ex. pour l\’immobilier) pendant <strong>3 ans</strong>." },
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
              Le rachat est particuli{"\è"}rement int{"\é"}ressant pour les <strong style={{ color: "#111827" }}>hauts revenus</strong>, les personnes ayant eu des ann{"\é"}es d{"\’"}activit{"\é"} {"\à"} l{"\’"}{"\é"}tranger, et celles approchant la retraite qui souhaitent renforcer leur capital.
            </p>

            {/* Section 5 — Libre passage */}
            <h2 id="libre-passage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le libre passage : ne perdez pas votre avoir</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Lorsque vous changez d{"\’"}employeur, votre avoir LPP doit {"\ê"}tre <strong style={{ color: "#111827" }}>transf{"\é"}r{"\é"} vers la nouvelle caisse</strong> dans les 30 jours. En l{"\’"}absence d{"\’"}nouvel employeur, l{"\’"}avoir est plac{"\é"} sur un <strong style={{ color: "#111827" }}>compte ou police de libre passage</strong>.
            </p>

            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {[
                { label: "Compte de libre passage bancaire", desc: "Taux d\’int\ér\êt variable, faible rendement, mais capital garanti et disponible" },
                { label: "Police de libre passage (assurance)", desc: "Couverture d\’invalidit\é et de d\éc\ès int\égr\ée, rendement d\épendant des b\én\éfices" },
                { label: "Compte de libre passage avec placement", desc: "Certaines institutions proposent des fonds de placement, avec un rendement potentiellement plus \élev\é" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{"\•"}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{"\À"} retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Des <strong style={{ color: "#111827" }}>milliards de francs</strong> dorment sur des comptes de libre passage oubli{"\é"}s. Si vous avez chang{"\é"} d{"\’"}emploi ou v{"\é"}cu {"\à"} l{"\’"}{"\é"}tranger, consultez la <strong style={{ color: "#111827" }}>Centrale du 2{"\è"}me pilier</strong> (centrale2epilier.ch) pour retrouver d{"\’"}{"\é"}ventuels avoirs perdus.
              </p>
            </div>

            {/* Section 6 — Comparaison caisses */}
            <h2 id="comparaison-caisses" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comparer les caisses de pension</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Toutes les caisses ne se valent pas. Si votre employeur vous laisse le choix de la caisse collective, ce qui est fr{"\é"}quent chez les ind{"\é"}pendants, les associations ou les PME, voici les crit{"\è"}res d{"\é"}terminants :
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
            <h2 id="retrait-anticipe" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Retrait anticip{"\é"} du 2{"\è"}me pilier</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Dans trois situations pr{"\é"}cises, vous pouvez retirer tout ou partie de votre avoir LPP avant la retraite. Chaque cas ob{"\é"}it {"\à"} des r{"\è"}gles strictes :
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir : Rente ou capital ?</p>
              <ul className="list-none p-0 m-0">
                {[
                  "<strong>Rente</strong> : revenu garanti \à vie, couverture du risque de long\évit\é, mais irr\éversible. Favoris\é si vous \êtes en bonne sant\é et n\’avez pas d\’autres actifs.",
                  "<strong>Capital</strong> : flexibilit\é totale, optimisation fiscale possible, mais risque de g\érer soi-m\ême le patrimoine sur 20\–30 ans.",
                  "<strong>Mixte (ex. 50/50)</strong> : solution \équilibr\ée, de plus en plus fr\équente. \À planifier au moins 3 ans avant la retraite.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\à"} {"\é"}viter</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\⚠"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Votre 2\ème pilier est-il optimis\é ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Simulation gratuite : rachat LPP, taux de conversion, comparaison de caisses. R{"\é"}sultats en 3 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"Analyser mon 2\ème pilier \→"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\é"}sum{"\é"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le 2{"\è"}me pilier est votre principal levier de <strong style={{ color: "#111827" }}>placement {"\à"} long terme</strong> en Suisse. Choisir la bonne caisse, effectuer des rachats cibl{"\é"}s, g{"\é"}rer intelligemment son libre passage et anticiper le mode de retrait (rente, capital ou mixte) peut faire une diff{"\é"}rence de <strong style={{ color: "#111827" }}>plusieurs centaines de milliers de francs</strong> sur l{"\’"}ensemble de votre carri{"\è"}re. Ne laissez pas ce patrimoine en pilote automatique.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simuler mon 2{"\è"}me pilier</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Rachat LPP, projection de rente, optimisation fiscale. R{"\é"}sultats en 3 minutes.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Lancer ma simulation \→"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \· 3 minutes \· Sans engagement"}</p>
              </div>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>{a.icon}</div>
                      <div>
                        <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</p>
                        <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{a.readTime} {"\·"} {a.category}</p>
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
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \→"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"\·"} {a.date}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Retraite, fiscalit\é, patrimoine \— un email par semaine, sans superflu."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\’inscrire \→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
