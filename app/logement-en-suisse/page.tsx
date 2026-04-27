import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Louer un appartement en Suisse : le guide complet pour r\u00E9ussir votre location",
  description: "Guide complet pour louer en Suisse : loyers, dossier, permis, caution, plateformes, r\u00E9siliation. Tout ce qu'un expatri\u00E9 ou frontalier doit savoir.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "qui-peut-louer", label: "Qui peut louer en Suisse ?" },
  { id: "combien-ca-coute", label: "Combien co\u00FBte une location ?" },
  { id: "loyer-charges-caution", label: "Loyer, charges et caution" },
  { id: "trouver-appartement", label: "Trouver la perle rare" },
  { id: "processus-candidature", label: "Le processus de candidature" },
  { id: "documents", label: "Documents indispensables" },
  { id: "resiliation", label: "R\u00E9siliation et d\u00E9part" },
  { id: "arnaques", label: "\u00C9viter les arnaques" },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Co\u00FBt de la vie en Suisse : budget complet 2026", readTime: "8 min", category: "Finances" },
  { icon: "\u{1F4CB}", title: "Permis B Suisse : d\u00E9marches et d\u00E9lais", readTime: "6 min", category: "Visa & Admin" },
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "Assurance m\u00E9nage en Suisse : obligatoire ou pas ?", author: "Laura B.", date: "18 mars 2026", readTime: "5 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Colocation en Suisse : droits, contrats et bons plans", author: "Karim D.", date: "12 mars 2026", readTime: "7 min" },
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait de poursuites : comment l'obtenir rapidement", author: "Julie M.", date: "5 mars 2026", readTime: "4 min" },
];

const LOYER_TABLE = [
  { type: "1 pi\u00E8ce", national: "872 CHF", cher: "1 054 CHF (Zurich)", moins: "542 CHF (Jura)" },
  { type: "2 pi\u00E8ces", national: "1 182 CHF", cher: "1 465 CHF (Zoug)", moins: "762 CHF (Jura)" },
  { type: "3 pi\u00E8ces", national: "1 410 CHF", cher: "1 813 CHF (Zoug)", moins: "926 CHF (Jura)" },
  { type: "4 pi\u00E8ces", national: "1 670 CHF", cher: "2 183 CHF (Zoug)", moins: "1 108 CHF (Jura)" },
  { type: "5 pi\u00E8ces", national: "2 016 CHF", cher: "2 661 CHF (Zoug)", moins: "1 350 CHF (Jura)" },
];

/* ───────── PAGE ───────── */

export default function LogementSuissePage() {
  return (
    <div className="bg-creme">
      {/* ===== HERO ===== */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>
            {"S'INSTALLER"}
          </span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Louer un appartement en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour r{"\u00E9"}ussir votre location</span>
          </h1>
          <div className="flex items-center gap-6 flex-wrap" style={{ marginTop: 24 }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>
                <span style={{ fontSize: 14 }}>{"\u{1F464}"}</span>
              </div>
              <div>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9quipe Kursor"}</p>
                <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 12 min de lecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT + SIDEBARS ===== */}
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
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Avec <strong style={{ color: "#111827" }}>61 % de locataires</strong> dans la population, la Suisse est le pays europ{"\u00E9"}en o{"\u00F9"} l{"\u2019"}on loue le plus. Pourtant, d{"\u00E9"}nicher un appartement y reste un v{"\u00E9"}ritable <strong style={{ color: "#111827" }}>parcours du combattant</strong> : march{"\u00E9"} sous tension, <strong style={{ color: "#111827" }}>loyers {"\u00E9"}lev{"\u00E9"}s</strong>, dossiers exigeants et codes culturels sp{"\u00E9"}cifiques. Que vous soyez <strong style={{ color: "#111827" }}>expatri{"\u00E9"}</strong>, <strong style={{ color: "#111827" }}>frontalier</strong> ou r{"\u00E9"}sident suisse en qu{"\u00EA"}te d{"\u2019"}un nouveau chez-vous, ce guide vous livre toutes les cl{"\u00E9"}s pour <strong style={{ color: "#111827" }}>louer sereinement</strong>, du premier clic sur une annonce {"\u00E0"} la remise des cl{"\u00E9"}s.
            </p>

            {/* First A retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La Suisse compte 61 % de locataires, et jusqu'\u00E0 80 % dans les cantons urbains comme Gen\u00E8ve ou B\u00E2le.",
                  "Le taux de vacance est inf\u00E9rieur \u00E0 1 % dans les grandes villes : la demande d\u00E9passe largement l'offre.",
                  "Le loyer moyen national s'\u00E9l\u00E8ve \u00E0 1 451 CHF par mois (hors charges) en 2023, selon l'Office f\u00E9d\u00E9ral de la statistique.",
                  "Pr\u00E9parez un dossier complet (permis de s\u00E9jour, extrait de poursuites, preuve de revenus) avant m\u00EAme de visiter.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* === Section 1 === */}
            <h2 id="qui-peut-louer" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qui peut louer un appartement en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Contrairement {"\u00E0"} une id{"\u00E9"}e re{"\u00E7"}ue, <strong style={{ color: "#111827" }}>louer en Suisse est accessible aux {"\u00E9"}trangers</strong>, {"\u00E0"} condition de disposer d{"\u2019"}un <strong style={{ color: "#111827" }}>titre de s{"\u00E9"}jour valide</strong>. Trois permis ouvrent largement les portes du march{"\u00E9"} locatif :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                { bold: "Permis L", text: " : court s\u00E9jour (moins de 12 mois)" },
                { bold: "Permis B", text: " : r\u00E9sidence" },
                { bold: "Permis C", text: " : \u00E9tablissement" },
              ].map((p) => (
                <li key={p.bold} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span><strong style={{ color: "#111827" }}>{p.bold}</strong>{p.text}</span>
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les non-r{"\u00E9"}sidents, eux, se heurtent {"\u00E0"} la <strong style={{ color: "#111827" }}>Lex Koller</strong>, qui restreint fortement l{"\u2019"}acc{"\u00E8"}s au logement longue dur{"\u00E9"}e. Pour une installation rapide, les <strong style={{ color: "#111827" }}>locations meubl{"\u00E9"}es temporaires</strong> ou les plateformes de courte dur{"\u00E9"}e (jusqu{"\u2019"}{"\u00E0"} 90 jours) offrent une solution de repli le temps de finaliser son statut.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              C{"\u00F4"}t{"\u00E9"} langue, les contrats sont r{"\u00E9"}dig{"\u00E9"}s en allemand, fran{"\u00E7"}ais ou italien selon le canton. Si vous ne ma{"\u00EE"}trisez pas la langue locale, <strong style={{ color: "#111827" }}>faites traduire le bail avant signature</strong> : un mot mal interpr{"\u00E9"}t{"\u00E9"} peut co{"\u00FB"}ter cher.
            </p>

            {/* === Section 2 === */}
            <h2 id="combien-ca-coute" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Combien co\u00FBte une location en Suisse ?"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le co{"\u00FB"}t d{"\u2019"}un logement varie consid{"\u00E9"}rablement d{"\u2019"}une r{"\u00E9"}gion {"\u00E0"} l{"\u2019"}autre. Les cantons de <strong style={{ color: "#111827" }}>Zoug et Zurich</strong> tiennent le haut du classement, tandis que le <strong style={{ color: "#111827" }}>Jura et le Tessin</strong> offrent les loyers les plus accessibles.
            </p>

            {/* Table */}
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
              <table className="w-full font-body" style={{ borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: "#111827" }}>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Type</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Loyer moyen</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Canton le + cher</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Canton le - cher</th>
                  </tr>
                </thead>
                <tbody>
                  {LOYER_TABLE.map((row, i) => (
                    <tr key={row.type} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                      <td style={{ padding: "12px 16px", color: "#111827", fontWeight: 600 }}>{row.type}</td>
                      <td style={{ padding: "12px 16px", color: "#D97706", fontWeight: 600 }}>{row.national}</td>
                      <td style={{ padding: "12px 16px", color: "#475569" }}>{row.cher}</td>
                      <td style={{ padding: "12px 16px", color: "#475569" }}>{row.moins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Dans les grandes villes, comptez autour de 2 500 CHF pour un 3,5 pi\u00E8ces \u00E0 Zurich ou Gen\u00E8ve, contre environ 1 830 CHF \u00E0 B\u00E2le."}
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12, marginTop: 24 }}>{" Comprendre les \"pi\u00E8ces\" \u00E0 la suisse"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              {"Sp\u00E9cificit\u00E9 locale : un appartement suisse se compte en demi-pi\u00E8ces. Ainsi, un \"3,5 pi\u00E8ces\" correspond \u00E0 2 chambres + un salon. La demi-pi\u00E8ce d\u00E9signe en g\u00E9n\u00E9ral :"}
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "une cuisine ouverte d\u2019au moins 12 m\u00B2,",
                "un coin repas d\u2019au moins 6 m\u00B2,",
                "ou un vestibule spacieux.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 4 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"Attention, Gen\u00E8ve est l\u2019exception qui confirme la r\u00E8gle : la cuisine y est compt\u00E9e comme une pi\u00E8ce enti\u00E8re."}
            </p>

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Les loyers ont augment\u00E9 d\u2019environ 3 % entre 2023 et 2024 (indice des loyers OFS pass\u00E9 de 104 \u00E0 107,3).",
                  "Le taux de r\u00E9f\u00E9rence hypoth\u00E9caire d\u00E9termine les hausses l\u00E9gales de loyer en Suisse.",
                  "Un \"3,5 pi\u00E8ces\" = 2 chambres + 1 salon, sauf \u00E0 Gen\u00E8ve o\u00F9 la cuisine compte pour une pi\u00E8ce.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* === Section 3 === */}
            <h2 id="loyer-charges-caution" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Loyer net, charges et caution : ce que vous payez vraiment</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, la plupart des annonces affichent un <strong style={{ color: "#111827" }}>loyer net</strong> (Kaltmiete / loyer hors charges). Les frais annexes s{"\u2019"}ajoutent et peuvent alourdir la facture de <strong style={{ color: "#111827" }}>200 {"\u00E0"} 300 CHF par mois</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Les charges locatives autoris\u00E9es couvrent uniquement :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 20 }}>
              {["le chauffage et l\u2019eau chaude,", "l\u2019eau courante et l\u2019assainissement,", "l\u2019\u00E9lectricit\u00E9 des communs,", "les frais de conciergerie et d\u2019ascenseur,", "l\u2019\u00E9vacuation des d\u00E9chets,", "les frais administratifs (plafonn\u00E9s \u00E0 3 %)."].map((c) => (
                <li key={c} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 4 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>{c}
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les <strong style={{ color: "#111827" }}>travaux d{"\u2019"}entretien ou de r{"\u00E9"}paration ne peuvent jamais {"\u00EA"}tre factur{"\u00E9"}s au locataire</strong>. Depuis 1998, les frais de chauffage et d{"\u2019"}eau chaude doivent {"\u00EA"}tre calcul{"\u00E9"}s {"\u00E0"} la consommation dans les constructions neuves.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12, marginTop: 24 }}>{"La caution : un d\u00E9p\u00F4t encadr\u00E9 par la loi"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"\u00C0"} la signature du bail, le propri{"\u00E9"}taire exige une <strong style={{ color: "#111827" }}>garantie de loyer plafonn{"\u00E9"}e {"\u00E0"} trois mois de loyer brut</strong>. Ce montant est bloqu{"\u00E9"} sur un <strong style={{ color: "#111827" }}>compte bancaire {"\u00E0"} votre nom</strong>, jusqu{"\u2019"}{"\u00E0"} restitution en fin de bail. Il prot{"\u00E8"}ge le bailleur contre d{"\u2019"}{"\u00E9"}ventuels impay{"\u00E9"}s ou d{"\u00E9"}gradations, mais il vous appartient : les int{"\u00E9"}r{"\u00EA"}ts vous reviennent.
            </p>

            {/* === Section 4 === */}
            <h2 id="trouver-appartement" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment trouver la perle rare ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le march{"\u00E9"} locatif suisse {"\u00E9"}tant satur{"\u00E9"}, <strong style={{ color: "#111827" }}>multiplier les canaux de recherche</strong> est indispensable.
            </p>
            <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 10 }}>Plateformes incontournables :</h3>
            <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
              {["Homegate", "ImmoScout24", "Comparis", "Flatfox", "Immobilier.ch", "my Homies"].map((p) => (
                <span key={p} className="font-body rounded-full" style={{ fontSize: 13, fontWeight: 500, color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "6px 14px", border: "1px solid rgba(217,119,6,0.2)" }}>{p}</span>
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 10 }}>{"Canaux compl\u00E9mentaires :"}</h3>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "Groupes Facebook locaux (\"Gen\u00E8ve \u00E0 louer\", \"Lausanne bouche \u00E0 oreille\", \"Housing in Zurich\")",
                "Sites de petites annonces (Anibis, PetitesAnnonces.ch)",
                "R\u00E9gies immobili\u00E8res : efficaces mais avec des honoraires parfois \u00E9lev\u00E9s",
                "Soci\u00E9t\u00E9s de relocation : id\u00E9ales pour les expatri\u00E9s",
              ].map((c) => (
                <li key={c} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>{c}
                </li>
              ))}
            </ul>

            {/* === Section 5 === */}
            <h2 id="processus-candidature" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Le processus de candidature, \u00E9tape par \u00E9tape"}</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {[
                { num: "1", title: "Rep\u00E9rage et prise de contact", desc: "Envoyez une demande de visite d\u00E8s parution de l\u2019annonce. Les biens attractifs partent en quelques heures." },
                { num: "2", title: "Visite (souvent group\u00E9e)", desc: "Soyez ponctuel, poli et pr\u00E9parez vos questions. C\u2019est votre premi\u00E8re impression." },
                { num: "3", title: "D\u00E9p\u00F4t du dossier", desc: "Joignez une lettre de motivation br\u00E8ve expliquant votre situation." },
                { num: "4", title: "Acceptation et signature", desc: "Lecture attentive du bail, v\u00E9rification des charges et clauses." },
                { num: "5", title: "\u00C9tat des lieux d\u2019entr\u00E9e", desc: "Document capital, \u00E0 remplir minutieusement. Prenez des photos dat\u00E9es." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* === Section 6 === */}
            <h2 id="documents" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Documents indispensables</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
              {[
                "Copie du passeport et du permis de s\u00E9jour (L, B ou C)",
                "Trois derni\u00E8res fiches de salaire ou contrat de travail",
                "Extrait de poursuites (Betreibungsauszug) de moins de 3 mois",
                "Attestation de l\u2019ancien bailleur (facultatif mais appr\u00E9ci\u00E9)",
                "Pour les nouveaux arrivants : relev\u00E9s bancaires ou rapport de cr\u00E9dit du pays d\u2019origine",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, color: "#111827" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  {item}
                </div>
              ))}
            </div>

            {/* A retenir 3 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32, marginTop: 20 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "L\u2019extrait de poursuites est le document le plus regard\u00E9 par les r\u00E9gies suisses.",
                  "Constituer son dossier avant les visites fait gagner des jours pr\u00E9cieux.",
                  "Une lettre de pr\u00E9sentation personnelle peut faire la diff\u00E9rence dans les march\u00E9s tendus.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* === Section 7 === */}
            <h2 id="resiliation" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"R\u00E9siliation et d\u00E9part : les r\u00E8gles \u00E0 conna\u00EEtre"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>d{"\u00E9"}lai de r{"\u00E9"}siliation l{"\u00E9"}gal est de trois mois</strong>, avec une particularit{"\u00E9"} suisse : les <strong style={{ color: "#111827" }}>dates de r{"\u00E9"}siliation officielles sont fix{"\u00E9"}es par canton</strong> (g{"\u00E9"}n{"\u00E9"}ralement fin mars, fin juin et fin septembre). Hors de ces dates, la r{"\u00E9"}siliation est refus{"\u00E9"}e{"\u2026"} sauf si vous proposez <strong style={{ color: "#111827" }}>trois candidats solvables</strong> pr{"\u00EA"}ts {"\u00E0"} reprendre le bail.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La r\u00E9siliation doit \u00EAtre \u00E9crite et sign\u00E9e par tous les titulaires du bail. Vous disposez ensuite de 30 jours pour contester une r\u00E9siliation \u00E9manant du bailleur."}
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"\u00C0 votre d\u00E9part, l\u2019appartement doit \u00EAtre rendu dans un \u00E9tat impeccable. De nombreux locataires font appel \u00E0 une soci\u00E9t\u00E9 de nettoyage avec garantie de remise : si la r\u00E9gie trouve un d\u00E9faut, l\u2019entreprise revient gratuitement. Un mauvais \u00E9tat des lieux de sortie peut \u00EAtre pr\u00E9lev\u00E9 sur la garantie de loyer, restitu\u00E9e dans un d\u00E9lai maximal de 12 mois apr\u00E8s la fin du bail."}
            </p>

            {/* === Section 8 === */}
            <h2 id="arnaques" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"\u00C9viter les arnaques : signaux \u00E0 surveiller"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              {"Bien que la Suisse soit un pays s\u00FBr, quelques fraudes persistent, surtout en ligne. M\u00E9fiez-vous si :"}
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "le loyer est anormalement bas pour la zone,",
                "le \"propri\u00E9taire\" est \u00E0 l\u2019\u00E9tranger et refuse la visite,",
                "un acompte est demand\u00E9 avant toute signature,",
                "le paiement est exig\u00E9 via un mode non tra\u00E7able.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 4 }}>
                  <span style={{ color: "#DC2626" }}>{"\u26A0"}</span>{item}
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"En cas de doute, les associations ASLOCA (Suisse romande) et Mieterverband (Suisse al\u00E9manique) offrent un conseil juridique gratuit ou \u00E0 tarif r\u00E9duit aux locataires."}
            </p>

            {/* Inline CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginTop: 20, marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d\u2019aide pour trouver votre logement ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>
                {"Nos experts accompagnent les expatri\u00E9s dans leur recherche de logement en Suisse. Diagnostic gratuit en 2 minutes."}
              </p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                {"D\u00E9couvrir nos formations \u2192"}
              </button>
            </div>

            {/* En resume */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                {"Louer un appartement en Suisse demande m\u00E9thode, anticipation et un solide dossier. Entre la raret\u00E9 des biens, les codes locaux (pi\u00E8ces, dates de r\u00E9siliation, extrait de poursuites) et des loyers parmi les plus \u00E9lev\u00E9s d\u2019Europe, mieux vaut arriver pr\u00E9par\u00E9. Avec les bons outils, les bonnes plateformes et un dossier impeccable, votre futur chez-vous suisse est \u00E0 port\u00E9e de clic."}
              </p>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              {/* CTA Diagnostic */}
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Trouvez votre logement en Suisse</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"Faites notre diagnostic gratuit en 2 min et recevez votre plan d\u2019action personnalis\u00E9."}</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  {"Faire mon diagnostic gratuit \u2192"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
              </div>

              {/* Articles similaires */}
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>
                        {a.icon}
                      </div>
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

      {/* ===== A LIRE AUSSI ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>
                  {a.icon}
                </div>
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

      {/* ===== NEWSLETTER ===== */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pi\u00E8ges \u00E0 \u00E9viter, les \u00E9conomies \u00E0 faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>
              {"S\u2019inscrire \u2192"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
