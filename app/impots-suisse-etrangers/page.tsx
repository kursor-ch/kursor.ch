import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";

export const metadata: Metadata = {
  title: "Imp\u00F4ts en Suisse pour les \u00E9trangers : guide complet 2026",
  description: "Guide complet sur les imp\u00F4ts en Suisse pour les \u00E9trangers : imp\u00F4t \u00E0 la source, TOU, permis B/C/L, d\u00E9ductions fiscales, double imposition et d\u00E9claration.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "architecture-fiscale", label: "L\u2019architecture fiscale suisse" },
  { id: "resident-fiscal", label: "Qui est r\u00E9sident fiscal ?" },
  { id: "permis-sejour", label: "Impact du permis de s\u00E9jour" },
  { id: "impot-source", label: "L\u2019imp\u00F4t \u00E0 la source" },
  { id: "tou", label: "La taxation ordinaire ult\u00E9rieure" },
  { id: "autres-impots", label: "Les autres imp\u00F4ts" },
  { id: "double-imposition", label: "\u00C9viter la double imposition" },
  { id: "declaration", label: "La d\u00E9claration fiscale" },
];

const A_RETENIR = [
  "La Suisse applique un syst\u00E8me fiscal \u00E0 trois niveaux : Conf\u00E9d\u00E9ration, 26 cantons et environ 2 120 communes, ce qui cr\u00E9e d\u2019importantes disparit\u00E9s selon votre lieu de r\u00E9sidence.",
  "Vous \u00EAtes consid\u00E9r\u00E9 comme r\u00E9sident fiscal suisse apr\u00E8s <strong>30 jours</strong> de pr\u00E9sence avec activit\u00E9 professionnelle ou <strong>90 jours</strong> sans activit\u00E9.",
  "Les titulaires d\u2019un <strong>permis B ou L</strong> sont soumis \u00E0 l\u2019imp\u00F4t \u00E0 la source, pr\u00E9lev\u00E9 directement sur le salaire par l\u2019employeur.",
  "Les titulaires d\u2019un <strong>permis C</strong> ou les conjoints de Suisses sont tax\u00E9s selon la proc\u00E9dure ordinaire via une d\u00E9claration annuelle.",
  "Le seuil de <strong>CHF 120 000</strong> de revenu brut annuel d\u00E9clenche automatiquement une taxation ordinaire ult\u00E9rieure (TOU).",
  "L\u2019imp\u00F4t f\u00E9d\u00E9ral direct est plafonn\u00E9 \u00E0 11,5 %, mais la charge fiscale totale varie de <strong>21 % \u00E0 45 %</strong> selon le canton et la commune.",
  "Les <strong>conventions de double imposition</strong> (CDI) prot\u00E8gent les expatri\u00E9s ayant des revenus ou des biens \u00E0 l\u2019\u00E9tranger.",
];

const DEDUCTIONS_TOU = [
  "Cotisations au 3e pilier A (jusqu\u2019\u00E0 CHF 7 258 pour les salari\u00E9s en 2026)",
  "Rachats du 2e pilier (LPP)",
  "Primes d\u2019assurance maladie",
  "Frais de transport domicile-travail",
  "Frais de repas",
  "Frais de garde d\u2019enfants",
  "Int\u00E9r\u00EAts hypoth\u00E9caires et frais d\u2019entretien immobilier",
  "Pensions alimentaires vers\u00E9es",
  "Dons \u00E0 des organisations reconnues d\u2019utilit\u00E9 publique",
];

const DOCUMENTS_DECLARATION = [
  "Les certificats de salaire et attestations de rente",
  "Les relev\u00E9s bancaires et de titres",
  "Les justificatifs de cotisations 3e pilier",
  "Les factures m\u00E9dicales non rembours\u00E9es",
  "Les attestations de dons",
  "Les documents li\u00E9s \u00E0 votre patrimoine immobilier",
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "FISCALIT\u00C9", title: "Optimisation fiscale en Suisse : 6 leviers pour 2026", author: "\u00C9quipe Kursor", date: "25 avril 2026", readTime: "16 min" },
  { icon: "\u{1F4B0}", tag: "PATRIMOINE", title: "3e pilier suisse : le guide complet 2026", author: "\u00C9quipe Kursor", date: "25 avril 2026", readTime: "12 min" },
  { icon: "\u{1F4BC}", tag: "EMPLOI", title: "Calcul salaire net suisse frontalier", author: "\u00C9quipe Kursor", date: "22 avril 2026", readTime: "12 min" },
];

/* ───────── PAGE ───────── */

export default function ImpotsEtrangersPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>GUIDE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Imp{"\u00F4"}ts en Suisse pour les {"\u00E9"}trangers :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet 2026</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 18 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBARS */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR */}
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
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              S{"\u2019"}installer en Suisse s{"\u00E9"}duit chaque ann{"\u00E9"}e des milliers d{"\u2019"}expatri{"\u00E9"}s attir{"\u00E9"}s par la qualit{"\u00E9"} de vie, la stabilit{"\u00E9"} {"\u00E9"}conomique et un environnement fiscal r{"\u00E9"}put{"\u00E9"} attractif. Pourtant, comprendre les imp{"\u00F4"}ts en Suisse pour les {"\u00E9"}trangers demande un v{"\u00E9"}ritable effort d{"\u2019"}adaptation, surtout lorsqu{"\u2019"}on vient d{"\u2019"}un pays au syst{"\u00E8"}me centralis{"\u00E9"} comme la France ou la Belgique.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Ce guide vous explique en d{"\u00E9"}tail comment fonctionne la fiscalit{"\u00E9"} suisse appliqu{"\u00E9"}e aux r{"\u00E9"}sidents {"\u00E9"}trangers, quels sont vos droits et obligations selon votre permis de s{"\u00E9"}jour, et comment tirer parti des dispositifs existants pour all{"\u00E9"}ger l{"\u00E9"}galement votre charge fiscale.
            </p>

            {/* A retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir : l{"\u2019"}essentiel en un coup d{"\u2019"}{"\u0153"}il</p>
              <ul className="list-none p-0 m-0">
                {A_RETENIR.map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="architecture-fiscale" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comprendre l{"\u2019"}architecture fiscale suisse</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Contrairement aux syst{"\u00E8"}mes centralis{"\u00E9"}s, la Suisse repose sur un f{"\u00E9"}d{"\u00E9"}ralisme fiscal pouss{"\u00E9"}. Les imp{"\u00F4"}ts y sont collect{"\u00E9"}s {"\u00E0"} trois {"\u00E9"}chelons distincts, chacun disposant d{"\u2019"}une autonomie r{"\u00E9"}elle dans la fixation des taux et des bar{"\u00E8"}mes.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La <strong style={{ color: "#111827" }}>Conf{"\u00E9"}d{"\u00E9"}ration</strong> pr{"\u00E9"}l{"\u00E8"}ve uniquement les imp{"\u00F4"}ts autoris{"\u00E9"}s par la Constitution, parmi lesquels l{"\u2019"}imp{"\u00F4"}t f{"\u00E9"}d{"\u00E9"}ral direct (IFD), la TVA et l{"\u2019"}imp{"\u00F4"}t anticip{"\u00E9"}. Les <strong style={{ color: "#111827" }}>cantons</strong>, en tant qu{"\u2019"}{"\u00C9"}tats souverains, d{"\u00E9"}finissent librement leur propre fiscalit{"\u00E9"}. Les <strong style={{ color: "#111827" }}>communes</strong> per{"\u00E7"}oivent leurs imp{"\u00F4"}ts dans le cadre fix{"\u00E9"} par leur canton de rattachement.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Globalement, environ <strong style={{ color: "#111827" }}>30 % des recettes fiscales</strong> reviennent {"\u00E0"} la Conf{"\u00E9"}d{"\u00E9"}ration, 40 % aux cantons et 30 % aux communes.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Cette structure explique pourquoi vivre {"\u00E0"} <strong style={{ color: "#111827" }}>Zoug, Schwyz ou Nidwald</strong> peut entra{"\u00EE"}ner une charge fiscale bien plus l{"\u00E9"}g{"\u00E8"}re qu{"\u2019"}{"\u00E0"} Gen{"\u00E8"}ve, Neuch{"\u00E2"}tel ou B{"\u00E2"}le-Ville. Pour un m{"\u00EA"}me salaire, la diff{"\u00E9"}rence d{"\u2019"}imposition entre deux cantons peut atteindre plusieurs dizaines de milliers de francs par an.
            </p>

            {/* Section 2 */}
            <h2 id="resident-fiscal" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qui est consid{"\u00E9"}r{"\u00E9"} comme r{"\u00E9"}sident fiscal suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L{"\u2019"}assujettissement fiscal en Suisse ne d{"\u00E9"}pend pas de votre nationalit{"\u00E9"} mais de votre r{"\u00E9"}sidence. Deux crit{"\u00E8"}res principaux d{"\u00E9"}terminent votre statut :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "Vous s\u00E9journez en Suisse pendant au moins <strong>30 jours cons\u00E9cutifs</strong> en exer\u00E7ant une activit\u00E9 lucrative",
                "Ou vous y s\u00E9journez au moins <strong>90 jours cons\u00E9cutifs</strong> sans activit\u00E9 professionnelle",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              D{"\u00E8"}s que l{"\u2019"}un de ces seuils est atteint, vous devenez r{"\u00E9"}sident fiscal suisse et {"\u00EA"}tes soumis {"\u00E0"} une <strong style={{ color: "#111827" }}>imposition illimit{"\u00E9"}e sur l{"\u2019"}ensemble de vos revenus et de votre fortune mondiale</strong>. Les non-r{"\u00E9"}sidents qui per{"\u00E7"}oivent des revenus de source suisse (frontaliers, conf{"\u00E9"}renciers, sportifs, artistes) sont uniquement impos{"\u00E9"}s sur ces revenus sp{"\u00E9"}cifiques.
            </p>

            {/* Section 3 */}
            <h2 id="permis-sejour" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>L{"\u2019"}impact du permis de s{"\u00E9"}jour sur votre fiscalit{"\u00E9"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Votre type d{"\u2019"}autorisation de s{"\u00E9"}jour conditionne directement la mani{"\u00E8"}re dont vous serez impos{"\u00E9"}.
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
              {[
                { permis: "Permis B (s\u00E9jour) et Permis L (courte dur\u00E9e)", desc: "Vous \u00EAtes soumis \u00E0 l\u2019imp\u00F4t \u00E0 la source. Votre employeur pr\u00E9l\u00E8ve chaque mois l\u2019imp\u00F4t sur votre salaire brut et le reverse \u00E0 l\u2019administration fiscale cantonale. Aucune d\u00E9claration n\u2019est n\u00E9cessaire dans la majorit\u00E9 des cas." },
                { permis: "Permis C (\u00E9tablissement)", desc: "Apr\u00E8s cinq ou dix ans de r\u00E9sidence selon votre nationalit\u00E9, vous b\u00E9n\u00E9ficiez du m\u00EAme r\u00E9gime que les citoyens suisses. Vous devez alors remplir chaque ann\u00E9e une d\u00E9claration fiscale ordinaire portant sur l\u2019ensemble de vos revenus et de votre fortune mondiale." },
                { permis: "Permis G (frontalier)", desc: "Votre fiscalit\u00E9 d\u00E9pend des accords bilat\u00E9raux entre la Suisse et votre pays de r\u00E9sidence. L\u2019accord franco-suisse mis \u00E0 jour en 2025, qui encadre notamment le t\u00E9l\u00E9travail transfrontalier, illustre la complexit\u00E9 de ce statut hybride." },
              ].map((item) => (
                <div key={item.permis} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#D97706", marginBottom: 4 }}>{item.permis}</p>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 32 }}>
              Un d{"\u00E9"}tenteur de permis B ou L mari{"\u00E9"} {"\u00E0"} un citoyen suisse ou {"\u00E0"} un titulaire de permis C {"\u00E9"}chappe {"\u00E9"}galement {"\u00E0"} l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source et passe automatiquement {"\u00E0"} la taxation ordinaire.
            </p>

            {/* Section 4 */}
            <h2 id="impot-source" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>L{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source : fonctionnement et particularit{"\u00E9"}s</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source (Quellensteuer en allemand) constitue le mode d{"\u2019"}imposition par d{"\u00E9"}faut pour la plupart des travailleurs {"\u00E9"}trangers en Suisse. L{"\u2019"}employeur retient mensuellement l{"\u2019"}imp{"\u00F4"}t sur le salaire brut et le reverse {"\u00E0"} l{"\u2019"}administration fiscale, ce qui couvre simultan{"\u00E9"}ment les obligations f{"\u00E9"}d{"\u00E9"}rales, cantonales et communales.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Le bar{"\u00E8"}me applicable d{"\u00E9"}pend de plusieurs facteurs :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "Votre situation matrimoniale (c\u00E9libataire, mari\u00E9, divorc\u00E9)",
                "Le nombre d\u2019enfants \u00E0 charge",
                "Le montant du salaire brut mensuel",
                "Le canton de domicile ou de travail",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Section 5 */}
            <h2 id="tou" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La taxation ordinaire ult{"\u00E9"}rieure (TOU) : un levier d{"\u2019"}optimisation</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Depuis la r{"\u00E9"}forme entr{"\u00E9"}e en vigueur en 2021, les d{"\u00E9"}ductions fiscales li{"\u00E9"}es {"\u00E0"} l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source ne peuvent plus {"\u00EA"}tre obtenues par simple rectification. Le seul moyen de faire valoir vos d{"\u00E9"}ductions est d{"\u00E9"}sormais de demander une <strong style={{ color: "#111827" }}>taxation ordinaire ult{"\u00E9"}rieure (TOU)</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Elle s{"\u2019"}impose automatiquement dans les cas suivants :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "Votre revenu brut annuel d\u00E9passe <strong>CHF 120 000</strong> (\u00E0 Gen\u00E8ve notamment)",
                "Vous poss\u00E9dez des biens immobiliers ou des avoirs financiers \u00E0 l\u2019\u00E9tranger",
                "Vous percevez des revenus compl\u00E9mentaires non soumis \u00E0 l\u2019imp\u00F4t \u00E0 la source",
                "Vous \u00EAtes propri\u00E9taire d\u2019un bien immobilier en Suisse",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              Dans les autres cas, vous pouvez demander volontairement la TOU <strong style={{ color: "#111827" }}>avant le 31 mars</strong> de l{"\u2019"}ann{"\u00E9"}e suivante. Cette d{"\u00E9"}marche permet de d{"\u00E9"}duire un large {"\u00E9"}ventail de frais r{"\u00E9"}els :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {DEDUCTIONS_TOU.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Attention :</strong> une fois engag{"\u00E9"}e, la TOU s{"\u2019"}applique de mani{"\u00E8"}re irr{"\u00E9"}vocable pour toutes les ann{"\u00E9"}es suivantes jusqu{"\u2019"}{"\u00E0"} la fin de l{"\u2019"}assujettissement {"\u00E0"} l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source.
              </p>
            </div>

            {/* Section 6 */}
            <h2 id="autres-impots" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les autres imp{"\u00F4"}ts {"\u00E0"} conna{"\u00EE"}tre en tant qu{"\u2019"}{"\u00E9"}tranger</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {[
                { label: "Imp\u00F4t sur la fortune", desc: "Exclusivement cantonal et communal. Il s\u2019applique \u00E0 votre patrimoine net mondial (actifs moins dettes) avec des taux compris entre 0,02 % et environ 1 % selon les cantons." },
                { label: "TVA suisse", desc: "Fix\u00E9e \u00E0 8,1 % depuis le 1er janvier 2025, elle reste l\u2019une des plus basses d\u2019Europe. Taux r\u00E9duit de 2,6 % pour les biens essentiels, 3,8 % pour l\u2019h\u00F4tellerie." },
                { label: "Gains en capital priv\u00E9s", desc: "Les gains issus de la vente d\u2019actions ou d\u2019obligations sont exon\u00E9r\u00E9s d\u2019imp\u00F4t. Un avantage majeur pour les investisseurs." },
                { label: "Droits de succession et donation", desc: "Fix\u00E9s au niveau cantonal. La plupart des cantons exon\u00E8rent totalement les transmissions entre \u00E9poux et descendants directs." },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 7 */}
            <h2 id="double-imposition" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"\u00C9"}viter la double imposition gr{"\u00E2"}ce aux conventions internationales</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse a sign{"\u00E9"} plus de <strong style={{ color: "#111827" }}>100 conventions de double imposition</strong> (CDI) avec ses partenaires {"\u00E9"}conomiques. Ces accords d{"\u00E9"}finissent quel pays d{"\u00E9"}tient le droit primaire d{"\u2019"}imposer chaque type de revenu et emp{"\u00EA"}chent qu{"\u2019"}une m{"\u00EA"}me somme soit tax{"\u00E9"}e deux fois.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour les revenus immobiliers {"\u00E9"}trangers ou les revenus d{"\u2019"}{"\u00E9"}tablissements stables {"\u00E0"} l{"\u2019"}{"\u00E9"}tranger, la Suisse applique g{"\u00E9"}n{"\u00E9"}ralement la m{"\u00E9"}thode dite de l{"\u2019"}<strong style={{ color: "#111827" }}>exon{"\u00E9"}ration avec progression</strong> : ces revenus ne sont pas impos{"\u00E9"}s en Suisse mais sont pris en compte pour d{"\u00E9"}terminer le taux d{"\u2019"}imposition global appliqu{"\u00E9"} {"\u00E0"} vos revenus suisses.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Depuis le 1er janvier 2017, la Suisse participe {"\u00E9"}galement {"\u00E0"} l{"\u2019"}<strong style={{ color: "#111827" }}>{"\u00E9"}change automatique de renseignements</strong> (EAR) avec ses partenaires. Les banques {"\u00E9"}trang{"\u00E8"}res transmettent automatiquement les donn{"\u00E9"}es financi{"\u00E8"}res des r{"\u00E9"}sidents suisses {"\u00E0"} l{"\u2019"}administration fiscale helv{"\u00E9"}tique.
            </p>

            {/* Section 8 */}
            <h2 id="declaration" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La d{"\u00E9"}claration fiscale : d{"\u00E9"}marches et d{"\u00E9"}lais</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Si vous {"\u00EA"}tes soumis {"\u00E0"} la proc{"\u00E9"}dure ordinaire (permis C, conjoint de Suisse, ou TOU), vous recevrez chaque ann{"\u00E9"}e un courrier de l{"\u2019"}administration fiscale vous invitant {"\u00E0"} remplir votre d{"\u00E9"}claration. Le d{"\u00E9"}lai standard est g{"\u00E9"}n{"\u00E9"}ralement fix{"\u00E9"} au <strong style={{ color: "#111827" }}>31 mars</strong> dans la plupart des cantons, avec possibilit{"\u00E9"} de demander une prolongation.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Pour pr{"\u00E9"}parer sereinement vos d{"\u00E9"}marches, conservez tout au long de l{"\u2019"}ann{"\u00E9"}e :</p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {DOCUMENTS_DECLARATION.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Naviguer dans la fiscalit{"\u00E9"} suisse en tant qu{"\u2019"}{"\u00E9"}tranger exige de comprendre plusieurs m{"\u00E9"}canismes interd{"\u00E9"}pendants : la r{"\u00E9"}sidence fiscale, le type de permis, l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source, la taxation ordinaire ult{"\u00E9"}rieure et les conventions de double imposition. Si la complexit{"\u00E9"} du syst{"\u00E8"}me peut sembler intimidante au premier abord, elle ouvre aussi des possibilit{"\u00E9"}s d{"\u2019"}optimisation r{"\u00E9"}elles, notamment via le choix du canton de r{"\u00E9"}sidence, la pr{"\u00E9"}voyance priv{"\u00E9"}e (3e pilier) ou les rachats LPP. Pour les expatri{"\u00E9"}s disposant de revenus d{"\u00E9"}passant CHF 120 000 ou de biens {"\u00E0"} l{"\u2019"}{"\u00E9"}tranger, la taxation ordinaire ult{"\u00E9"}rieure devient incontournable et constitue souvent un levier puissant pour r{"\u00E9"}duire la charge fiscale.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Besoin d{"\u2019"}un conseil fiscal personnalis{"\u00E9"} ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos experts analysent votre situation et identifient les d{"\u00E9"}ductions auxquelles vous avez droit. Diagnostic gratuit en 2 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>D{"\u00E9"}couvrir nos outils {"\u2192"}</button>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Estimez votre imp{"\u00F4"}t</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Simulez votre charge fiscale en Suisse selon votre canton, permis et situation familiale.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Estimer mes imp{"\u00F4"}ts {"\u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"\u00B7"} 2 minutes {"\u00B7"} R{"\u00E9"}sultats imm{"\u00E9"}diats</p>
              </div>
              <SidebarGuides exclude="/impots-suisse-etrangers" />
            </div>
          </aside>
        </div>
      </section>

      {/* A LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Fiscalit{"\u00E9"}, pr{"\u00E9"}voyance, bons plans. Z{"\u00E9"}ro superflu.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"\u2019"}inscrire {"\u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
