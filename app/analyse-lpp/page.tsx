import Link from "next/link";
import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Placement Suisse 2026 : guide complet pour bien investir",
  description: "Placement suisse : fiscalité, 3e pilier, ETF, immobilier et conseils pour résidents et non-résidents. Le guide 2026 pour faire fructifier votre épargne.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-placement-suisse", label: "Pourquoi un placement suisse en 2026" },
  { id: "qui-peut-investir", label: "Qui peut investir en Suisse" },
  { id: "cinq-familles", label: "Les 5 grandes familles de placements" },
  { id: "fiscalite", label: "Fiscalit\é des placements" },
  { id: "strategie-4-etapes", label: "Construire sa strat\égie en 4 \étapes" },
  { id: "erreurs-frequentes", label: "Les erreurs fr\équentes" },
];

const A_RETENIR = [
  "Pourquoi placer en Suisse ? Stabilit\é politique, franc fort, inflation inf\érieure \à 1,5\xa0% sur 20 ans, exon\ération des plus-values mobili\ères pour les particuliers.",
  "R\ésidents : acc\ès complet dont 3e pilier. Non-r\ésidents : acc\ès via courtier, immobilier verrouill\é par la Lex Koller.",
  "V\éhicules privil\égi\és : ETF sur SMI/SPI \à frais r\éduits, 3e pilier 3a pour les r\ésidents.",
  "Rendement : environ 5,8\xa0% par an sur le SMI \à dix ans, 4 \à 5\xa0% pour un portefeuille \équilibr\é.",
  "Fiscalit\é non-r\ésident : retenue \à la source 35\xa0% sur dividendes, dont 20 points r\écup\érables via convention franco-suisse.",
  "Principal pi\ège : le biais domestique et la sous-estimation des frais courants sur le long terme.",
];

const FAMILLES = [
  {
    num: "1",
    title: "Comptes d\'\épargne et obligations f\éd\érales",
    desc: "R\éserve de pr\écaution et capital garanti. Note AAA, aucun risque de cr\édit, rendement limit\é mais en CHF.",
  },
  {
    num: "2",
    title: "Actions et ETF cot\és sur la SIX",
    desc: "Acc\ès au SMI et au SPI. Frais entre 0,15\xa0% et 0,25\xa0% pour les ETF indiciels, diversification imm\édiate.",
  },
  {
    num: "3",
    title: "Fonds de placement SICAV",
    desc: "Gestion active \à 1 \à 1,8\xa0%/an. Comparer rigoureusement avec les alternatives passives low-cost avant de souscrire.",
  },
  {
    num: "4",
    title: "Le 3e pilier",
    desc: "R\éserv\é aux r\ésidents. Le 3a est d\éductible fiscalement (plafonn\é \à 7\xa0258 CHF en 2026). Le 3b est libre, sans d\éduction.",
  },
  {
    num: "5",
    title: "Immobilier suisse",
    desc: "Prix \élev\és, rendements inf\érieurs \à 3\xa0% brut, levier hypoth\écaire attractif mais acc\ès restreint pour les non-r\ésidents.",
  },
];

const FISCALITE_TABLE = [
  {
    profil: "R\ésident suisse",
    plusValues: "Exon\ér\ées",
    dividendes: "Impos\és taux marginal",
    fortune: "Imp\ôt cantonal",
    immobilier: "Acc\ès libre",
  },
  {
    profil: "Non-r\ésident UE",
    plusValues: "Exon\ér\ées en Suisse",
    dividendes: "Retenue 35\xa0% (r\écup\érable)",
    fortune: "Non concern\é",
    immobilier: "Restreint (Lex Koller)",
  },
  {
    profil: "Frontalier",
    plusValues: "R\égime sp\écifique",
    dividendes: "Selon canton",
    fortune: "Selon canton",
    immobilier: "Selon statut",
  },
];

const NON_RESIDENTS_LIST = [
  "Acc\ès direct via banque suisse (contraignant, ticket souvent 250\xa0000 CHF en banque priv\ée).",
  "Acc\ès indirect via courtier europ\éen : acheter Nestl\é, Roche, Novartis ou un ETF SMI depuis son compte titres habituel.",
  "Immobilier : la Lex Koller verrouille le r\ésidentiel. Le commercial est plus ouvert mais exige une analyse sp\écifique.",
];

const ETAPES = [
  {
    num: "1",
    title: "Cartographier sa situation",
    desc: "Recenser revenus, charges, taux d\'\épargne et horizon de placement. Sans ce bilan, aucune strat\égie ne tient.",
  },
  {
    num: "2",
    title: "Constituer une r\éserve de pr\écaution",
    desc: "3 \à 6 mois de d\épenses courantes sur un compte liquide avant tout investissement. Cette \étape est non n\égociable.",
  },
  {
    num: "3",
    title: "D\éfinir son profil de risque honn\êtement",
    desc: "Distinguer capacit\é financi\ère (r\éelle) et tol\érance \émotionnelle (ce qu\' on supporte vraiment lors d\' une baisse de 30\xa0%).",
  },
  {
    num: "4",
    title: "Choisir le v\éhicule adapt\é",
    desc: "Court terme : livret. Moyen terme : portefeuille ETF diversifi\é. Long terme : 3e pilier + actions. Chaque horizon a son instrument.",
  },
];

const ERREURS = [
  {
    title: "Biais domestique excessif",
    desc: "La Suisse repr\ésente moins de 3\xa0% de la capitalisation boursi\ère mondiale. Se limiter aux actions suisses revient \à ignorer 97\xa0% des opportunit\és.",
  },
  {
    title: "Sous-estimer les frais",
    desc: "Un \écart de 1,6\xa0% de frais annuels (1,8\xa0% vs 0,2\xa0%) sur 20 ans se traduit par 25 \à 30\xa0% de patrimoine en moins. Les frais composent autant que le rendement.",
  },
  {
    title: "R\éagir \à chaud aux fluctuations",
    desc: "Les ventes paniqu\ées en bas de march\é co\ûtent historiquement plus que les crises elles-m\êmes. La discipline prime sur le timing.",
  },
];


const RELATED_ARTICLES = [
  { icon: "\u{1F4C8}", tag: "BOURSE", title: "Investir en ETF depuis la Suisse : le guide complet", author: "\Équipe Kursor", date: "14 avril 2026", readTime: "12 min" },
  { icon: "\u{1F3E0}", tag: "IMMOBILIER", title: "Acheter un bien en Suisse : le guide complet 2026", author: "Laura B.", date: "2 avril 2026", readTime: "11 min" },
  { icon: "\u{1F4B8}", tag: "FISCALIT\É", title: "Optimiser ses imp\ôts en Suisse : 10 leviers efficaces", author: "Karim D.", date: "18 mars 2026", readTime: "9 min" },
];



/* ───────── PAGE ───────── */

export default function AnalyseLppPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Placement suisse : le guide 2026<br />
            <span className="font-heading italic" style={{ color: "#D97706", fontSize: 32 }}>pour faire fructifier votre argent intelligemment</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\É"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\·"} 14 min de lecture</p>
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
            {(() => {
              const img = getArticleImage("/analyse-lpp");
              return img ? <GuideHeroImage src={img.src} alt={img.alt} /> : null;
            })()}

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Le <strong style={{ color: "#111827" }}>placement suisse</strong> s{"\u2019"}appuie sur trois atouts durables : stabilit{"\é"} politique, franc fort et cadre juridique lisible. Mais investir intelligemment en Suisse ne se r{"\é"}sume pas {"\à"} ouvrir un compte {"\é"}pargne. ETF, actions, 3e pilier, immobilier, fiscalit{"\é"} des non-r{"\é"}sidents : ce guide fait le point sur tout ce qu{"\u2019"}il faut savoir en 2026.
            </p>

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {A_RETENIR.map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="pourquoi-placement-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Pourquoi un placement suisse reste pertinent en 2026
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Trois piliers expliquent l{"\u2019"}attrait durable : stabilit{"\é"} politique sans {"\é"}quivalent en Europe, franc qui s{"\u2019"}appr{"\é"}cie tendanciellement face {"\à"} l{"\u2019"}euro, cadre juridique d{"\u2019"}une lisibilit{"\é"} remarquable. L{"\u2019"}inflation moyenne y est rest{"\é"}e sous 1,5 % sur vingt ans, l{"\à"} o{"\ù"} la zone euro a oscill{"\é"} autour de 2,3 %.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L{"\u2019"}indice SMI affiche un rendement annualis{"\é"} d{"\u2019"}environ <strong style={{ color: "#111827" }}>5,8 % sur dix ans</strong>, moins flamboyant que le S&amp;P 500, mais beaucoup plus r{"\é"}gulier. L{"\u2019"}absence d{"\u2019"}imp{"\ô"}t sur les plus-values mobili{"\è"}res pour les particuliers (tant qu{"\u2019"}on n{"\u2019"}est pas qualifi{"\é"} de {"\u00AB"} n{"\é"}gociant en titres {"\u00BB"}) est une singularit{"\é"} fiscale majeure.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La BNS maintient une politique mon{"\é"}taire prudente en 2026. L{"\u2019"}{"\é"}cart de taux avec la zone euro a soutenu les actifs r{"\é"}els et les actions. Conserver de la liquidit{"\é"} non plac{"\é"}e en CHF rapporte peu, mais s{"\u2019"}exposer aux march{"\é"}s financiers helv{"\é"}tiques via ETF ou mandat de gestion permet de capter la stabilit{"\é"} mon{"\é"}taire et le rendement r{"\é"}el.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour un portefeuille {"\é"}quilibr{"\é"} (actions 60 %, obligations 40 %), l{"\u2019"}esp{"\é"}rance de rendement historique en CHF tourne autour de <strong style={{ color: "#111827" }}>4 {"\à"} 5 % par an</strong> sur le long terme.
            </p>

            {/* Section 2 */}
            <h2 id="qui-peut-investir" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Qui peut investir en Suisse, et comment ?
            </h2>

            <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px", marginBottom: 16 }}>
              <p className="font-body" style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 8 }}>R{"\é"}sidents suisses</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>
                Acc{"\è"}s complet : compte titres, mandat de gestion, 3e pilier, actions SIX. Parmi ces v{"\é"}hicules, <Link href="/retraite-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le 3e pilier suisse</Link> est l{"\u2019"}instrument fiscal le plus puissant, avec une d{"\é"}duction jusqu{"\u2019"}{"\à"} <strong style={{ color: "#111827" }}>7{"\u202f"}258 CHF en 2026</strong>. {"\À"} privil{"\é"}gier avant tout autre placement.
              </p>
            </div>

            <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Non-r{"\é"}sidents</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 10 }}>
                Deux voies s{"\u2019"}offrent :
              </p>
              <ul className="list-none p-0 m-0">
                {NON_RESIDENTS_LIST.map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <h2 id="cinq-familles" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Les 5 grandes familles de placements
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Chaque v{"\é"}hicule r{"\é"}pond {"\à"} un horizon et un profil de risque diff{"\é"}rent. Un portefeuille bien construit en combine g{"\é"}n{"\é"}ralement plusieurs :
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {FAMILLES.map((fam) => (
                <div key={fam.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{fam.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{fam.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{fam.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4 */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Fiscalit{"\é"} des placements : le tableau qu{"\u2019"}il faut comprendre
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La fiscalit{"\é"} suisse est favorable aux particuliers sur les plus-values, mais attentive aux dividendes, avec <Link href="/impot-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>les taux d{"’"}imposition en Suisse</Link> qui varient fortement d{"’"}un canton {"\à"} l{"’"}autre. Le tableau ci-dessous synth{"\é"}tise les principaux cas :
            </p>

            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 20 }}>
              <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr 1.2fr 1fr 1.2fr", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0", padding: "12px 16px" }}>
                {["Profil", "Plus-values", "Dividendes", "Fortune", "Immobilier"].map((h) => (
                  <p key={h} className="font-body" style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</p>
                ))}
              </div>
              {FISCALITE_TABLE.map((row, i) => (
                <div key={row.profil} className="grid" style={{ gridTemplateColumns: "1.2fr 1fr 1.2fr 1fr 1.2fr", padding: "14px 16px", borderBottom: i < FISCALITE_TABLE.length - 1 ? "1px solid #F1F5F9" : "none", backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                  <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{row.profil}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#16A34A" }}>{row.plusValues}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B" }}>{row.dividendes}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B" }}>{row.fortune}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B" }}>{row.immobilier}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>Retenue {"\à"} la source et convention franco-suisse</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                La Suisse pr{"\é"}l{"\è"}ve <strong style={{ color: "#111827" }}>35 % de retenue {"\à"} la source</strong> sur les dividendes vers{"\é"}s {"\à"} des non-r{"\é"}sidents. La convention franco-suisse permet de r{"\é"}cup{"\é"}rer 20 points sur ces 35 % via les formulaires 85 et 86 d{"\é"}pos{"\é"}s aupr{"\è"}s de l{"\u2019"}AFC. D{"\é"}lai de remboursement : g{"\é"}n{"\é"}ralement 6 {"\à"} 18 mois. Les 15 % restants sont imput{"\é"}s sur l{"\u2019"}imp{"\ô"}t fran{"\ç"}ais selon les r{"\è"}gles en vigueur.
              </p>
            </div>

            {/* Section 5 */}
            <h2 id="strategie-4-etapes" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Construire sa strat{"\é"}gie en 4 {"\é"}tapes
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Une bonne strat{"\é"}gie de placement n{"\u2019"}est pas n{"\é"}cessairement complexe. Elle repose avant tout sur la rigueur de la d{"\é"}marche :
            </p>

            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ETAPES.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 6 */}
            <h2 id="erreurs-frequentes" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Les erreurs fr{"\é"}quentes
            </h2>
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
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Votre capital travaille-t-il {"\à"} son plein potentiel ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Simulation gratuite : allocation, fiscalit{"\é"}, projection patrimoniale. R{"\é"}sultats en 3 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Analyser ma strat{"\é"}gie {"\→"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\é"}sum{"\é"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le placement suisse offre stabilit{"\é"} mon{"\é"}taire et juridique, fiscalit{"\é"} avantageuse pour les particuliers, et un {"\é"}ventail d{"\u2019"}instruments du compte {"\é"}pargne au mandat sophistiqu{"\é"}. Pour un r{"\é"}sident, le 3e pilier est l{"\u2019"}arme fiscale la plus efficace, d{"\u2019"}autant plus depuis l{"\u2019"}ouverture en 2026 de <Link href="/actualite/rachat-retroactif-3a-2026-guide" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le rachat r{"\\u00e9"}troactif du 3a</Link>. Pour un non-r{"\é"}sident, les ETF cot{"\é"}s et la convention fiscale bilat{"\é"}rale permettent un acc{"\è"}s simple. La r{"\é"}ussite tient {"\à"} la discipline : objectifs clairs, horizon long, frais ma{"\î"}tris{"\é"}s, sang-froid en p{"\é"}riode de turbulences.
              </p>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simuler mon placement</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Allocation, fiscalit{"\é"}, projection patrimoniale. R{"\é"}sultats en 3 minutes, sans engagement.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Lancer ma simulation {"\→"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"\·"} 3 minutes {"\·"} Sans engagement</p>
              </div>
              <SidebarGuides exclude="/analyse-lpp" />
            </div>
          </aside>
        </div>
      </section>

      {/* A LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles {"\→"}</span>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Placement, fiscalit{"\é"}, patrimoine : un email par semaine, sans superflu.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"\u2019"}inscrire {"\→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
