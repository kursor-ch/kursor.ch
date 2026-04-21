import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cr\éer une soci\ét\é en Suisse : guide 2026 des formes juridiques",
  description:
    "Guide complet pour cr\éer une soci\ét\é en Suisse : SA, S\àrl, raison individuelle, capital minimum, d\émarches RC, co\ûts, fiscalit\é et erreurs \à \éviter.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-suisse", label: "Pourquoi cr\éer en Suisse ?" },
  { id: "formes-juridiques", label: "Les formes juridiques" },
  { id: "comparatif", label: "Comparatif SA vs S\àrl vs RI" },
  { id: "demarches", label: "D\émarches pas \à pas" },
  { id: "couts", label: "Co\ûts et capital minimum" },
  { id: "fiscalite", label: "Fiscalit\é et imposition" },
  { id: "fiduciaire", label: "R\ôle du fiduciaire" },
  { id: "erreurs", label: "Erreurs \à \éviter" },
];

const FORMES_JURIDIQUES = [
  {
    name: "Raison individuelle",
    subtitle: "Ind\épendant solo",
    capital: "Aucun",
    desc: "La forme la plus simple et la plus rapide \à constituer. Id\éale pour les <strong>freelances, artisans et professions lib\érales</strong>. L\’inscription au Registre du commerce est obligatoire d\ès que le chiffre d\’affaires annuel d\épasse <strong>100\ 000 CHF</strong>. Attention\ : le propri\étaire est <strong>personnellement et illimit\ément responsable</strong> des dettes de l\’entreprise.",
  },
  {
    name: "S\àrl",
    subtitle: "Soci\ét\é \à responsabilit\é limit\ée",
    capital: "20\ 000 CHF",
    desc: "La structure pr\éf\ér\ée des <strong>PME et startups suisses</strong>. Le capital social minimum est de <strong>20\ 000 CHF</strong>, enti\èrement lib\ér\é \à la fondation. Les associ\és ne r\épondent des dettes qu\’\à hauteur de leur apport. La S\àrl est inscrite au RC et soumise \à l\’<strong>imp\ôt sur le b\én\éfice</strong> en tant que personne morale.",
  },
  {
    name: "SA",
    subtitle: "Soci\ét\é anonyme",
    capital: "100\ 000 CHF",
    desc: "La forme de r\éf\érence pour les <strong>soci\ét\és de taille importante</strong> ou celles cherchant des investisseurs. Capital minimum de <strong>100\ 000 CHF</strong> (50\ 000 CHF lib\ér\és \à la fondation). Les actionnaires sont anonymes et leur responsabilit\é est limit\ée. La SA doit nommer un <strong>conseil d\’administration</strong> et, en g\én\éral, un organe de r\évision.",
  },
  {
    name: "Soci\ét\é en nom collectif",
    subtitle: "Associ\és solidaires",
    capital: "Aucun",
    desc: "Con\çue pour <strong>deux personnes physiques ou plus</strong> exer\çant une activit\é commerciale en commun. Aucun capital minimum requis, mais les associ\és sont <strong>solidairement et illimit\ément responsables</strong>. Adapt\ée aux cabinets d\’avocats, m\édecins ou architectes qui souhaitent s\’associer sans constituer une personne morale.",
  },
  {
    name: "Succursale / filiale",
    subtitle: "Extension d\’une soci\ét\é \étrang\ère",
    capital: "Variable",
    desc: "Une <strong>soci\ét\é \étrang\ère</strong> souhaitant op\érer en Suisse peut y ouvrir une succursale (d\épendante de la maison-m\ère) ou une filiale (entit\é juridique ind\épendante, g\én\éralement sous forme de SA ou S\àrl). Les obligations comptables et fiscales varient selon le choix retenu.",
  },
];

const COMPARATIF = [
  { critere: "Capital minimum", ri: "Aucun", sarl: "20\ 000 CHF", sa: "100\ 000 CHF" },
  { critere: "Responsabilit\é fondateur", ri: "Illimit\ée", sarl: "Limit\ée \à l\’apport", sa: "Limit\ée \à l\’apport" },
  { critere: "Inscription RC", ri: "D\ès 100k CHF CA", sarl: "Obligatoire", sa: "Obligatoire" },
  { critere: "Anonymat associ\és", ri: "Non", sarl: "Non (connu du RC)", sa: "Oui" },
  { critere: "Imposition", ri: "Revenu personnel", sarl: "B\én\éfice soci\ét\é", sa: "B\én\éfice soci\ét\é" },
  { critere: "Nombre fondateurs min.", ri: "1", sarl: "1", sa: "1" },
  { critere: "Organe de r\évision", ri: "Non requis", sarl: "Sous conditions", sa: "G\én\éralement requis" },
  { critere: "Cr\édibilit\é bancaire", ri: "Faible", sarl: "Bonne", sa: "Tr\ès bonne" },
  { critere: "Cession des parts", ri: "Non applicable", sarl: "Restreinte", sa: "Libre (actions)" },
  { critere: "D\élai de cr\éation", ri: "1\–3 jours", sarl: "1\–4 semaines", sa: "2\–6 semaines" },
];

const DEMARCHES = [
  {
    num: "1",
    title: "Choisir la forme juridique",
    desc: "D\éfinissez vos besoins\ : capital disponible, nombre d\’associ\és, niveau de responsabilit\é souhait\é et objectifs de croissance. Un fiduciaire peut vous conseiller gratuitement lors d\’un premier entretien.",
  },
  {
    num: "2",
    title: "R\édiger les statuts",
    desc: "Pour une SA ou S\àrl, des statuts sign\és devant <strong>notaire</strong> sont obligatoires. Ils d\éfinissent le nom, si\ège, but social, capital et gouvernance. Le nom doit \être <strong>unique</strong> et v\érifiable sur le portail Zefix.",
  },
  {
    num: "3",
    title: "D\époser le capital sur un compte de consignation",
    desc: "La banque bloque le capital (20\ 000 CHF pour la S\àrl, 50\ 000 CHF minimum pour la SA) jusqu\’\à inscription au RC. Elle \émet une <strong>attestation de d\ép\ôt</strong> remise au notaire.",
  },
  {
    num: "4",
    title: "Inscription au Registre du commerce (RC)",
    desc: "Le notaire ou votre fiduciaire d\épose le dossier aupr\ès du RC cantonal. Une fois inscrite, la soci\ét\é acquiert la <strong>personnalit\é juridique</strong> et le capital est d\ébloqu\é.",
  },
  {
    num: "5",
    title: "S\’affilier aux assurances sociales",
    desc: "AVS/AI/APG, assurance ch\ômage (si salari\és), LPP (caisse de pension) et assurance accidents (LAA). Ces affiliations sont <strong>obligatoires</strong> d\ès le premier employ\é.",
  },
  {
    num: "6",
    title: "S\’enregistrer \à la TVA (si n\écessaire)",
    desc: "Obligatoire d\ès <strong>100\ 000 CHF</strong> de chiffre d\’affaires annuel en Suisse. L\’inscription volontaire est possible d\ès le premier franc et permet la d\éduction de la TVA sur les achats.",
  },
  {
    num: "7",
    title: "Ouvrir un compte bancaire d\’entreprise",
    desc: "Apr\ès inscription au RC, ouvrez un compte courant professionnel. Pr\évoyez 4 \à 8 semaines pour les banques traditionnelles. Les n\éobanques (Revolut Business, Neon, etc.) sont plus rapides.",
  },
];

const COUTS = [
  { poste: "Honoraires notaire (SA/S\àrl)", montant: "800 \– 2\ 000 CHF" },
  { poste: "Inscription au Registre du commerce", montant: "200 \– 800 CHF" },
  { poste: "Honoraires fiduciaire (fondation)", montant: "500 \– 3\ 000 CHF" },
  { poste: "Compte de consignation (frais bancaires)", montant: "0 \– 200 CHF" },
  { poste: "Publication dans la FOSC", montant: "Inclus dans les frais RC" },
  { poste: "Capital minimum S\àrl (immobilis\é)", montant: "20\ 000 CHF" },
  { poste: "Capital minimum SA (immobilis\é \à 50%)", montant: "50\ 000 CHF" },
  { poste: "Assurance RC professionnelle (ann\ée)", montant: "300 \– 2\ 000 CHF" },
];

const ERREURS = [
  {
    title: "Choisir la mauvaise forme juridique",
    desc: "D\émarrer en raison individuelle avec un projet \à fort potentiel ou, inversement, cr\éer une SA pour une activit\é solo : les implications fiscales et les co\ûts de transformation sont lourds.",
  },
  {
    title: "N\égliger les statuts",
    desc: "Des statuts r\édig\és \à la va-vite cr\éent des conflits entre associ\és. Pr\écisez les r\ègles de cession de parts, de prise de d\écision et de dissolution d\ès le d\ébut.",
  },
  {
    title: "Confondre capital priv\é et professionnel",
    desc: "M\élanger les comptes personnels et d\’entreprise est une faute comptable grave. Un compte s\épar\é est obligatoire et simplifie \énorm\ément la comptabilit\é et la TVA.",
  },
  {
    title: "Oublier les assurances sociales",
    desc: "L\’affiliation \à l\’AVS est obligatoire d\ès le d\ébut de l\’activit\é. Un oubli entra\îne des cotisations r\étroactives avec p\énalit\és.",
  },
  {
    title: "Sous-estimer les co\ûts de fonctionnement",
    desc: "Comptabilit\é annuelle obligatoire, audit, charges sociales, loyers\… Pr\évoyez un budget de fonctionnement d\’au moins 12 mois avant de devenir rentable.",
  },
  {
    title: "Ne pas prot\éger son nom ou sa marque",
    desc: "L\’inscription au RC ne prot\ège pas votre marque au niveau national. D\éposez votre marque aupr\ès de l\’IPI (Institut f\éd\éral de la propri\ét\é intellectuelle) pour une protection compl\ète.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Fiscalit\é des entreprises en Suisse : le guide 2026", readTime: "11 min", category: "Fiscalit\é" },
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire professionnel en Suisse", readTime: "8 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait du Registre du commerce : comment l\’obtenir", author: "Laura B.", date: "10 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B3}", tag: "FINANCES", title: "TVA en Suisse : tout ce que les ind\épendants doivent savoir", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { icon: "\u{1F3E2}", tag: "ENTREPRENDRE", title: "Domiciliation d\’entreprise en Suisse : avantages et limites", author: "Julie M.", date: "18 mars 2026", readTime: "6 min" },
];

const TAGS = ["Cr\éation d\’entreprise", "SA", "S\àrl", "Registre du commerce", "Fiduciaire", "Suisse"];

/* ───────── PAGE ───────── */

export default function CreationEntreprisePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>ENTREPRENDRE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {"Cr\éer une soci\ét\é en Suisse : guide complet"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"SA, S\àrl, raison individuelle \— tout savoir"}</span>
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
              {"La Suisse figure r\éguli\èrement parmi les "}<strong style={{ color: "#111827" }}>{"meilleurs pays au monde pour entreprendre"}</strong>{" : fiscalit\é comp\étitive, stabilit\é politique, acc\ès \à des march\és europ\éens et main-d\’\œuvre hautement qualifi\ée. Mais cr\éer une soci\ét\é en Suisse suppose de choisir la bonne forme juridique, de respecter les d\émarches l\égales et d\’anticiper les co\ûts. Ce guide vous accompagne pas \à pas."}
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La <strong>S\àrl</strong> est la forme la plus populaire pour les PME et startups (capital\ : 20\ 000 CHF).",
                  "La <strong>SA</strong> offre l\’anonymat des actionnaires et convient aux projets \à fort capital (100\ 000 CHF min.).",
                  "La <strong>raison individuelle</strong> ne n\écessite aucun capital mais expose le propri\étaire personnellement.",
                  "L\’inscription au <strong>Registre du commerce</strong> conf\ère la personnalit\é juridique \à la soci\ét\é.",
                  "Un <strong>fiduciaire</strong> peut g\érer l\’ensemble des formalit\és pour 1\ 500 \à 5\ 000 CHF tout compris.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="pourquoi-suisse" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Pourquoi cr\éer son entreprise en Suisse ?"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La Conf\éd\ération helv\étique combine plusieurs atouts rares pour les entrepreneurs\ :"}
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>Fiscalit\é attractive</strong>\ : taux d\’imposition sur le b\én\éfice parmi les plus bas d\’Europe (8 \à 21\ % selon le canton).",
                "<strong>Stabilit\é</strong>\ : cadre juridique solide, monnaie forte (CHF) et pr\évisibilit\é r\églementaire.",
                "<strong>Acc\ès aux march\és</strong>\ : position g\éographique centrale en Europe, accords bilat\éraux avec l\’UE.",
                "<strong>Talent pool</strong>\ : main-d\’\œuvre multilangue et tr\ès qualifi\ée dans tous les secteurs.",
                "<strong>Infrastructure</strong>\ : r\éseaux num\ériques, transport et services de classe mondiale.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"Les cantons de "}<strong style={{ color: "#111827" }}>{"Zoug, Nidwald, Appenzell Rhodes-Int\érieures et Lucerne"}</strong>{" sont particuli\èrement comp\étitifs fiscalement. Gen\ève et Zurich, bien que plus tax\és, offrent un acc\ès inou\ï aux r\éseaux financiers internationaux."}
            </p>

            {/* Section 2 — Formes juridiques */}
            <h2 id="formes-juridiques" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Les principales formes juridiques en Suisse"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Le droit suisse des soci\ét\és (CO \– Code des obligations) pr\évoit plusieurs structures. Voici les plus utilis\ées\ :"}
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {FORMES_JURIDIQUES.map((f) => (
                <div key={f.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>{f.name}</span>
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{"\—"}</span>
                    <span className="font-body italic" style={{ fontSize: 14, color: "#64748B" }}>{f.subtitle}</span>
                    <span className="font-body rounded-full" style={{ marginLeft: "auto", fontSize: 12, fontWeight: 600, color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "3px 10px", whiteSpace: "nowrap" }}>Capital&nbsp;: {f.capital}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: f.desc }} />
                </div>
              ))}
            </div>

            {/* Section 3 — Comparatif */}
            <h2 id="comparatif" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Comparatif SA vs S\àrl vs Raison individuelle"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Un tableau synoptique pour choisir la structure adapt\ée \à votre situation\ :"}
            </p>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#111827" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textAlign: "left", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{"Crit\ère"}</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Raison ind.</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{"S\àrl"}</th>
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La <strong>S\àrl</strong> est id\éale pour 1 \à 3 associ\és avec un projet s\érieux et un budget limit\é.",
                  "La <strong>SA</strong> est pr\éf\érable si vous pr\évoyez de lever des fonds ou d\’accueillir de nombreux actionnaires.",
                  "La <strong>raison individuelle</strong> convient aux micro-activit\és \— attention \à la responsabilit\é illimit\ée.",
                  "Changer de forme juridique apr\ès coup est possible mais g\én\ère des <strong>frais et d\élais significatifs</strong>.",
                  "Certains cantons proposent des <strong>guichets uniques</strong> (ex. Zurich, Berne) pour acc\él\érer la proc\édure.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Démarches */}
            <h2 id="demarches" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"D\émarches pas \à pas pour cr\éer votre soci\ét\é"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Voici le processus standard pour une "}<strong style={{ color: "#111827" }}>{"SA ou S\àrl"}</strong>{". La raison individuelle suit des \étapes similaires mais all\ég\ées (pas de notaire ni de capital \à bloquer)."}
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
              {"Le portail "}<strong style={{ color: "#111827" }}>Zefix</strong>{" (zefix.ch) permet de v\érifier la disponibilit\é du nom et de consulter les inscriptions existantes gratuitement."}
            </p>

            {/* Section 5 — Coûts */}
            <h2 id="couts" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Co\ûts et capital minimum"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Voici une estimation des frais de cr\éation pour une S\àrl ou SA. Ces montants varient selon le canton, le notaire choisi et la complexit\é des statuts."}
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
              {"Budget total estim\é hors capital immobilis\é\ : "}<strong style={{ color: "#111827" }}>{"2\ 000 \à 6\ 000 CHF"}</strong>{" pour une S\àrl standard, "}<strong style={{ color: "#111827" }}>{"5\ 000 \à 12\ 000 CHF"}</strong>{" pour une SA."}
            </p>

            {/* Section 6 — Fiscalité */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Fiscalit\é et imposition des soci\ét\és suisses"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La Suisse applique un syst\ème fiscal \à "}<strong style={{ color: "#111827" }}>{"trois niveaux"}</strong>{" : f\éd\éral, cantonal et communal. Le taux effectif d\’imposition sur le b\én\éfice varie de "}<strong style={{ color: "#111827" }}>{"8\ % (Zoug) \à 21\ % (Gen\ève)"}</strong>{"."}
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { label: "Imp\ôt f\éd\éral direct (IFD)", val: "8,5\ % sur le b\én\éfice net" },
                { label: "Imp\ôt cantonal et communal (ICC)", val: "Variable selon le canton (0 \à 13\ %)" },
                { label: "Imp\ôt sur le capital", val: "0,001 \à 0,5\ % des fonds propres selon canton" },
                { label: "TVA standard", val: "8,1\ % (taux r\éduit 2,6\ %)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.label}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item.val}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>{"Double imposition \économique"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              {"Les actionnaires qui per\çoivent des "}<strong style={{ color: "#111827" }}>dividendes</strong>{" sont imposables \à titre personnel. Toutefois, la loi pr\évoit une "}<strong style={{ color: "#111827" }}>{"r\éduction partielle"}</strong>{" de l\’imposition pour les participations d\étenant au moins 10\ % du capital social."}
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                {"Le canton de "}<strong style={{ color: "#D97706" }}>Zoug</strong>{" est souvent cit\é comme le plus avantageux avec un taux effectif d\’environ "}<strong>{"11,9\ %"}</strong>{". Gen\ève et Vaud ont harmonis\é leurs taux autour de "}<strong>{"13,99\ %"}</strong>{" apr\ès la r\éforme RFFA de 2020."}
              </p>
            </div>

            {/* Section 7 — Fiduciaire */}
            <h2 id="fiduciaire" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Le r\ôle du fiduciaire dans la cr\éation d\’entreprise"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"En Suisse, le "}<strong style={{ color: "#111827" }}>fiduciaire</strong>{" joue un r\ôle central pour les entrepreneurs. Il cumule les fonctions de comptable, conseiller fiscal et parfois repr\ésentant l\égal. Il peut notamment\ :"}
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {[
                "R\édiger les statuts et coordonner le notaire",
                "D\époser le dossier au Registre du commerce",
                "G\érer la comptabilit\é et les d\éclarations fiscales",
                "Assurer la paie des employ\és (salaires, charges sociales)",
                "Domicilier votre soci\ét\é \à son adresse (option utile)",
                "Vous repr\ésenter aupr\ès des autorit\és (AVS, TVA, canton)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600, fontSize: 14 }}>{"\✓"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              {"Les honoraires annuels d\’un fiduciaire pour une petite S\àrl vont de "}<strong style={{ color: "#111827" }}>{"2\ 000 \à 8\ 000 CHF"}</strong>{" selon la complexit\é. Certains proposent des forfaits \«\ startup\ \» tout inclus."}
            </p>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Erreurs \à \éviter lors de la cr\éation"}</h2>
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
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d\’aide pour cr\éer votre soci\ét\é en Suisse ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>{"Nos partenaires fiduciaires vous accompagnent de A \à Z. Premier entretien gratuit et sans engagement."}</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"Trouver mon fiduciaire \→"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"En r\ésum\é"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                {"Cr\éer une soci\ét\é en Suisse est un processus structur\é, accessible et rapide pour qui s\’y pr\épare bien. La "}<strong style={{ color: "#111827" }}>{"S\àrl"}</strong>{" reste la valeur s\ûre pour la plupart des projets ; la "}<strong style={{ color: "#111827" }}>SA</strong>{" s\’impose d\ès que vous envisagez une croissance rapide ou une lev\ée de fonds. Dans tous les cas, "}<strong style={{ color: "#111827" }}>{"entourez-vous d\’un bon fiduciaire"}</strong>{" et anticipez les \étapes\ : c\’est ce qui fait la diff\érence entre un lancement r\éussi et des mois de corrections administratives."}
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{"Quelle soci\ét\é pour vous ?"}</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"Diagnostic gratuit en 2 min. Identifiez la forme juridique adapt\ée \à votre projet."}</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Faire mon diagnostic gratuit \→"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \· 2 minutes \· R\ésultats imm\édiats"}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pi\èges \à \éviter, les \économies \à faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\’inscrire \→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
