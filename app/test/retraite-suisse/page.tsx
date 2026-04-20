import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3e pilier suisse 2026 : maximisez vos \u00E9conomies fiscales",
  description: "Guide complet 3\u00E8me pilier suisse 2026 : plafond 3a (7\u056A258 CHF), rattrapage r\u00E9troactif (36\u056A290 CHF), 3b, banque vs assurance, retraits, avantages fiscaux. Tout ce qu\u2019il faut savoir.",
};

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

const TOC = [
  { id: "quest-ce-que", label: "Qu\u2019est-ce que le 3\u00E8me pilier ?" },
  { id: "3a-vs-3b", label: "3a vs 3b : quelle diff\u00E9rence ?" },
  { id: "plafonds-2026", label: "Plafonds et limites 2026" },
  { id: "nouvelle-loi-rattrapage", label: "Nouvelle loi : rattrapage r\u00E9troactif" },
  { id: "avantages-fiscaux", label: "Avantages fiscaux concrets" },
  { id: "banque-vs-assurance", label: "Banque vs assurance : que choisir ?" },
  { id: "retrait-conditions", label: "Retrait : conditions et timing" },
  { id: "comment-ouvrir", label: "Comment ouvrir un 3\u00E8me pilier" },
  { id: "erreurs", label: "Erreurs \u00E0 \u00E9viter" },
];

const COMPARAISON_3A_3B = [
  {
    critere: "D\u00E9duction fiscale",
    pilier3a: "Oui \u2014 jusqu\u2019\u00E0 7\u2019258 CHF/an",
    pilier3b: "Non (sauf quelques cantons)",
  },
  {
    critere: "Plafond de versement",
    pilier3a: "7\u2019258 CHF (salari\u00E9) / 36\u2019288 CHF (ind\u00E9p.)",
    pilier3b: "Aucun plafond l\u00E9gal",
  },
  {
    critere: "Flexibilit\u00E9 de retrait",
    pilier3a: "Limit\u00E9e (conditions strictes)",
    pilier3b: "Totale (quand vous voulez)",
  },
  {
    critere: "Blocage des fonds",
    pilier3a: "Jusqu\u2019\u00E0 la retraite (sauf exceptions)",
    pilier3b: "Aucun blocage",
  },
  {
    critere: "Id\u00E9al pour",
    pilier3a: "Optimisation fiscale maximale",
    pilier3b: "Compl\u00E9ment \u00E9pargne libre",
  },
  {
    critere: "Formes possibles",
    pilier3a: "Compte bancaire, assurance-vie, titres",
    pilier3b: "Assurance-vie, \u00E9pargne libre",
  },
];

const PLAFONDS_2026 = [
  {
    profil: "Salari\u00E9 affili\u00E9 \u00E0 un 2\u00E8me pilier",
    plafond: "7\u2019258 CHF / an",
    note: "Plafond standard 2026, revaloris\u00E9 chaque ann\u00E9e",
  },
  {
    profil: "Ind\u00E9pendant sans 2\u00E8me pilier",
    plafond: "36\u2019288 CHF / an",
    note: "Soit 20\u00A0% du revenu net, plafonn\u00E9 \u00E0 36\u2019288 CHF",
  },
  {
    profil: "Rattrapage r\u00E9troactif (10 ans)",
    plafond: "36\u2019290 CHF cumul\u00E9",
    note: "Nouveau depuis janvier 2026 \u2014 ann\u00E9es non utilis\u00E9es depuis 2017",
  },
];

const BANQUE_VS_ASSURANCE = [
  {
    critere: "Frais",
    banque: "Faibles ou nuls",
    assurance: "\u00C9lev\u00E9s (primes, commissions)",
    avantage: "banque",
  },
  {
    critere: "Rendement",
    banque: "Variable (taux ou titres)",
    assurance: "Garanti minimum + part.",
    avantage: "neutre",
  },
  {
    critere: "Flexibilit\u00E9",
    banque: "Versements libres",
    assurance: "Primes fixes oblig.",
    avantage: "banque",
  },
  {
    critere: "Protection d\u00E9c\u00E8s / invalidit\u00E9",
    banque: "Non incluse",
    assurance: "Incluse dans le contrat",
    avantage: "assurance",
  },
  {
    critere: "Transfert possible",
    banque: "Oui, vers autre \u00E9tablissement",
    assurance: "Difficult\u00E9 (rachat avec p\u00E9nalit\u00E9s)",
    avantage: "banque",
  },
  {
    critere: "Id\u00E9al pour",
    banque: "Investisseurs, ind\u00E9pendants",
    assurance: "Familles, besoin couverture",
    avantage: "neutre",
  },
];

const CONDITIONS_RETRAIT = [
  {
    num: "1",
    title: "Retraite ordinaire (64/65 ans)",
    desc: "Le cas standard. Vous pouvez retirer vos fonds d\u00E8s 5 ans avant l\u2019\u00E2ge AVS (soit \u00E0 59 ans pour les femmes, 60 ans pour les hommes) et jusqu\u2019\u00E0 5 ans apr\u00E8s.",
  },
  {
    num: "2",
    title: "Achat immobilier en Suisse",
    desc: "Retrait anticip\u00E9 possible pour financer l\u2019acquisition ou l\u2019amortissement d\u2019un logement principal en Suisse. Minimum 25\u2019000 CHF, tous les 5 ans.",
  },
  {
    num: "3",
    title: "D\u00E9but d\u2019une activit\u00E9 ind\u00E9pendante",
    desc: "Vous pouvez retirer vos fonds si vous devenez ind\u00E9pendant et cessez d\u2019\u00EAtre affili\u00E9 \u00E0 une caisse de pension LPP.",
  },
  {
    num: "4",
    title: "Quitter la Suisse d\u00E9finitivement",
    desc: "D\u00E9part hors UE/AELE : retrait int\u00E9gral autoris\u00E9. D\u00E9part vers un pays UE/AELE : seule la part obligatoire reste bloqu\u00E9e.",
  },
  {
    num: "5",
    title: "Invalidit\u00E9 totale (AI)",
    desc: "En cas d\u2019invalidit\u00E9 totale reconnue par l\u2019assurance-invalidit\u00E9 f\u00E9d\u00E9rale, le capital peut \u00EAtre lib\u00E9r\u00E9 par anticipation.",
  },
];

const ERREURS = [
  {
    title: "Ne verser qu\u2019en fin d\u2019ann\u00E9e",
    desc: "Verser en janvier plut\u00F4t qu\u2019en d\u00E9cembre vous offre 11 mois de rendement suppl\u00E9mentaire. Sur 20 ans, l\u2019impact est significatif.",
  },
  {
    title: "Choisir une assurance sans comparer",
    desc: "Les produits bancaires (compte ou titres 3a) affichent souvent de meilleurs rendements nets que les assurances-vie, avec moins de contraintes.",
  },
  {
    title: "Tout retirer en une fois",
    desc: "Retirer sur plusieurs ann\u00E9es (ou depuis plusieurs comptes) r\u00E9duit consid\u00E9rablement l\u2019imp\u00F4t sur le capital. Planifiez 5 ans avant la retraite.",
  },
  {
    title: "Oublier les ann\u00E9es de rattrapage",
    desc: "Depuis 2026, vous pouvez rattraper jusqu\u2019\u00E0 10 ann\u00E9es non cotis\u00E9es pour un total de 36\u2019290 CHF. C\u2019est une opportunit\u00E9 fiscale exceptionnelle \u00E0 ne pas manquer.",
  },
  {
    title: "Ne pas ouvrir plusieurs comptes 3a",
    desc: "La loi autorise plusieurs comptes 3a dans diff\u00E9rents \u00E9tablissements. Cela permet un retrait \u00E9chelonn\u00E9 et optimis\u00E9 fiscalement \u00E0 la retraite.",
  },
];

const STEPS = [
  { num: "1", title: "Choisir le bon prestataire", desc: "Comparez les banques (VIAC, Frankly, finpension, PostFinance) et les assurances sur la base des frais, du rendement historique et de la flexibilit\u00E9." },
  { num: "2", title: "Rassembler les documents", desc: "Carte d\u2019identit\u00E9 ou passeport, num\u00E9ro AVS, coordonn\u00E9es bancaires et justificatif de revenu (fiche de salaire ou bilan pour ind\u00E9pendants)." },
  { num: "3", title: "Choisir la strat\u00E9gie de placement", desc: "Compte \u00E9pargne classique (rendement limit\u00E9), fonds \u00E9quilibr\u00E9s (40\u201360\u00A0% actions) ou portefeuille 100\u00A0% actions pour un horizon long terme." },
  { num: "4", title: "Effectuer le premier versement", desc: "D\u00E9finissez un ordre permanent mensuel ou versez un montant annuel. Le plafond 2026 est de 7\u2019258 CHF pour les salari\u00E9s." },
  { num: "5", title: "D\u00E9duire sur votre d\u00E9claration", desc: "Chaque ann\u00E9e, indiquez le montant vers\u00E9 dans la rubrique \u00AB pilier 3a \u00BB de votre d\u00E9claration fiscale cantonale. L\u2019\u00E9tablissement vous envoie automatiquement l\u2019attestation." },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F3E6}", title: "Caisse de pension LPP : comment optimiser votre 2\u00E8me pilier", readTime: "11 min", category: "Patrimoine" },
  { icon: "\u{1F4B3}", title: "Ouvrir un compte bancaire en Suisse : guide 2026", readTime: "6 min", category: "Finances" },
  { icon: "\u{1F3E0}", title: "Acheter un appartement en Suisse : \u00E9tapes et financement", readTime: "13 min", category: "Logement" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "PATRIMOINE", title: "Imp\u00F4ts en Suisse : comment r\u00E9duire sa facture fiscale l\u00E9galement", author: "Marc L.", date: "14 avril 2026", readTime: "8 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "LPP 2025 : ce qui change pour votre 2\u00E8me pilier", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { icon: "\u{1F3E5}", tag: "ASSURANCE", title: "Assurance-vie en Suisse : avantages, types et fiscalit\u00E9", author: "Julie M.", date: "20 mars 2026", readTime: "9 min" },
];

const TAGS = ["3\u00E8me pilier", "Pilier 3a", "Pilier 3b", "Pr\u00E9voyance", "Retraite", "Fiscalit\u00E9", "Suisse"];

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 PAGE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export default function RetraiteSuissePage() {
  return (
    <div className="bg-creme">

      {/* BREADCRUMB */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/test" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/test" style={{ color: "#94A3B8" }}>Patrimoine</Link>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>Retraite &amp; 3{"\u00E8"}me Pilier</span>
        </nav>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            3{"\u00E8"}me pilier suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour \u00E9pargner et d\u00E9fiscaliser</span>
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
              En Suisse, la retraite repose sur trois piliers. Le premier (AVS) et le deuxi{"\u00E8"}me (LPP) couvrent environ <strong style={{ color: "#111827" }}>60{"\u00A0"}% du dernier salaire</strong>. Le <strong style={{ color: "#111827" }}>3{"\u00E8"}me pilier</strong> est l{"\u2019"}outil privil{"\u00E9"}gi{"\u00E9"} pour combler l{"\u2019"}{"\u00E9"}cart, tout en b{"\u00E9"}n{"\u00E9"}ficiant d{"\u2019"}une d{"\u00E9"}duction fiscale imm{"\u00E9"}diate. En 2026, une nouvelle loi sur le <strong style={{ color: "#111827" }}>rattrapage r{"\u00E9"}troactif</strong> ouvre des opportunit{"\u00E9"}s in{"\u00E9"}dites. Ce guide vous explique tout.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le <strong>pilier 3a</strong> offre une d\u00E9duction fiscale imm\u00E9diate mais bloque les fonds jusqu\u2019\u00E0 la retraite (sauf cas exceptionnels).",
                  "Le <strong>plafond 2026</strong> est de 7\u2019258 CHF pour les salari\u00E9s affili\u00E9s au 2\u00E8me pilier.",
                  "Depuis <strong>janvier 2026</strong>, il est possible de rattraper les ann\u00E9es non cotis\u00E9es depuis 2017, jusqu\u2019\u00E0 36\u2019290 CHF.",
                  "Une strat\u00E9gie multi-comptes permet d\u2019\u00E9taler les retraits et de <strong>r\u00E9duire l\u2019imp\u00F4t</strong> sur le capital.",
                  "Les produits <strong>bancaires</strong> (VIAC, finpension) affichent souvent de meilleurs rendements nets que les assurances-vie.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Qu'est-ce que */}
            <h2 id="quest-ce-que" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qu{"\u2019"}est-ce que le 3{"\u00E8"}me pilier suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le syst{"\u00E8"}me de retraite suisse est structur{"\u00E9"} en trois piliers compl{"\u00E9"}mentaires :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
              {[
                { num: "1er pilier", label: "AVS (Assurance-vieillesse et survivants)", desc: "Obligatoire, finance la retraite de base de toute la population. Taux de remplacement\u00A0: environ 40\u00A0% du salaire." },
                { num: "2\u00E8me pilier", label: "LPP (Caisse de pension professionnelle)", desc: "Obligatoire d\u00E8s 21\u2019510 CHF de salaire annuel. Compl\u00E8te l\u2019AVS pour atteindre environ 60\u00A0% du dernier salaire." },
                { num: "3\u00E8me pilier", label: "Pr\u00E9voyance priv\u00E9e individuelle", desc: "Facultatif mais fortement incit\u00E9 fiscalement. Permet de combler l\u2019\u00E9cart entre le niveau de vie actif et la rente." },
              ].map((p) => (
                <div key={p.num} className="flex items-start gap-4 rounded-xl bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "18px 22px" }}>
                  <div className="flex items-center justify-center shrink-0 font-heading" style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: "rgba(217,119,6,0.08)", color: "#D97706", fontWeight: 700, fontSize: 13, textAlign: "center", lineHeight: 1.2, padding: "6px 4px" }}>{p.num}</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{p.label}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le 3{"\u00E8"}me pilier se subdivise en deux formes : le <strong style={{ color: "#111827" }}>pilier 3a</strong> (pr{"\u00E9"}voyance li{"\u00E9"}e, avec avantage fiscal) et le <strong style={{ color: "#111827" }}>pilier 3b</strong> (pr{"\u00E9"}voyance libre, sans contrainte).
            </p>

            {/* Section 2 — 3a vs 3b */}
            <h2 id="3a-vs-3b" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3a vs 3b : quelle diff{"\u00E9"}rence ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les deux formes sont compl{"\u00E9"}mentaires mais r{"\u00E9"}pondent {"\u00E0"} des logiques diff{"\u00E9"}rentes :
            </p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Crit{"\u00E8"}re</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Pilier 3a</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Pilier 3b</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARAISON_3A_3B.map((row, i) => (
                    <tr key={row.critere} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                      <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "13px 16px", borderBottom: "1px solid #F1F5F9" }}>{row.critere}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "13px 16px", borderBottom: "1px solid #F1F5F9" }}>{row.pilier3a}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "13px 16px", borderBottom: "1px solid #F1F5F9" }}>{row.pilier3b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3 — Plafonds 2026 */}
            <h2 id="plafonds-2026" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Plafonds et limites 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le plafond de d{"\u00E9"}duction du pilier 3a est revalorис{"\u00E9"} r{"\u00E9"}guli{"\u00E8"}rement en fonction de l{"\u2019"}{"\u00E9"}volution de l{"\u2019"}AVS :
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {PLAFONDS_2026.map((item) => (
                <div key={item.profil} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <div className="flex items-center justify-between flex-wrap gap-3" style={{ marginBottom: 8 }}>
                    <span className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{item.profil}</span>
                    <span className="font-heading rounded-full" style={{ fontSize: 15, fontWeight: 700, color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 14px" }}>{item.plafond}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B" }}>{item.note}</p>
                </div>
              ))}
            </div>

            {/* Section 4 — Nouvelle loi rattrapage */}
            <h2 id="nouvelle-loi-rattrapage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Nouvelle loi : le rattrapage r{"\u00E9"}troactif 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Entr{"\u00E9"}e en vigueur le <strong style={{ color: "#111827" }}>1er janvier 2026</strong>, la modification de l{"\u2019"}Ordonnance OPP3 permet d{"\u00E9"}sormais de <strong style={{ color: "#111827" }}>combler les ann{"\u00E9"}es de pilier 3a non utilis{"\u00E9"}es</strong> depuis 2017. C{"\u2019"}est une r{"\u00E9"}volution pour tous ceux qui n{"\u2019"}ont pas cotis{"\u00E9"} ou cotis{"\u00E9"} partiellement.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 20 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir — Rattrapage r{"\u00E9"}troactif</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Rattrapage possible sur les <strong>10 derni\u00E8res ann\u00E9es</strong> (ann\u00E9es 2017\u20132025).",
                  "Montant maximum rattrapable\u00A0: <strong>36\u2019290 CHF</strong> au total.",
                  "La d\u00E9duction est limit\u00E9e au <strong>plafond annuel</strong> par ann\u00E9e de rattrapage.",
                  "Le rattrapage n\u2019est autoris\u00E9 que si vous \u00EAtes <strong>actuellement affili\u00E9</strong> \u00E0 un 2\u00E8me pilier.",
                  "Chaque versement de rattrapage est int\u00E9gralement d\u00E9ductible du revenu imposable.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Exemple concret : si vous n{"\u2019"}avez pas cotis{"\u00E9"} au pilier 3a de 2017 {"\u00E0"} 2021 (5 ans), vous pouvez verser jusqu{"\u2019"}{"\u00E0"} <strong style={{ color: "#111827" }}>36{"\u2019"}290 CHF en une seule fois</strong> en 2026, en plus du plafond annuel ordinaire de 7{"\u2019"}258 CHF. L{"\u2019"}impact fiscal peut atteindre plusieurs milliers de francs selon votre canton et votre taux marginal d{"\u2019"}imposition.
            </p>

            {/* Section 5 — Avantages fiscaux */}
            <h2 id="avantages-fiscaux" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Avantages fiscaux concrets</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le pilier 3a offre trois niveaux d{"\u2019"}avantage fiscal, souvent sous-estim{"\u00E9"}s :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
              {[
                { icon: "1", label: "D\u00E9duction sur le revenu imposable", desc: "Chaque franc vers\u00E9 en 3a est d\u00E9duit de votre revenu imposable. Selon votre canton et votre taux marginal (15\u201340\u00A0%), une cotisation de 7\u2019258 CHF peut g\u00E9n\u00E9rer une \u00E9conomie fiscale de 1\u2019100 \u00E0 2\u2019900 CHF." },
                { icon: "2", label: "Exon\u00E9ration de l\u2019imp\u00F4t sur la fortune", desc: "Les fonds bloqu\u00E9s en 3a ne sont pas soumis \u00E0 l\u2019imp\u00F4t cantonal sur la fortune pendant la dur\u00E9e de placement." },
                { icon: "3", label: "Imp\u00F4t r\u00E9duit au retrait", desc: "Le capital retrait\u00E9 est impos\u00E9 s\u00E9par\u00E9ment du revenu ordinaire, \u00E0 un taux pr\u00E9f\u00E9rentiel (souvent 1\u20138\u00A0% selon le canton et le montant). L\u2019imp\u00F4t sur le capital est ainsi bien inf\u00E9rieur \u00E0 l\u2019\u00E9conomie r\u00E9alis\u00E9e chaque ann\u00E9e." },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{item.label}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>R{"\u00E8"}gle d{"\u2019"}or :</strong> cotiser au pilier 3a pendant 30 ans peut {"\u00E9"}conomiser entre <strong>30{"\u2019"}000 et 80{"\u2019"}000 CHF d{"\u2019"}imp{"\u00F4"}ts</strong> sur l{"\u2019"}ensemble de la p{"\u00E9"}riode, selon votre canton et votre revenu.
              </p>
            </div>

            {/* Section 6 — Banque vs Assurance */}
            <h2 id="banque-vs-assurance" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Banque vs assurance : que choisir ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le pilier 3a peut {"\u00EA"}tre ouvert aupr{"\u00E8"}s d{"\u2019"}une banque ou d{"\u2019"}une compagnie d{"\u2019"}assurance. Les diff{"\u00E9"}rences sont importantes :
            </p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Crit{"\u00E8"}re</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Banque</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Assurance</th>
                  </tr>
                </thead>
                <tbody>
                  {BANQUE_VS_ASSURANCE.map((row, i) => (
                    <tr key={row.critere} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                      <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "13px 16px", borderBottom: "1px solid #F1F5F9" }}>{row.critere}</td>
                      <td className="font-body" style={{ fontSize: 13, color: row.avantage === "banque" ? "#059669" : "#475569", padding: "13px 16px", borderBottom: "1px solid #F1F5F9", fontWeight: row.avantage === "banque" ? 600 : 400 }}>{row.banque}</td>
                      <td className="font-body" style={{ fontSize: 13, color: row.avantage === "assurance" ? "#059669" : "#475569", padding: "13px 16px", borderBottom: "1px solid #F1F5F9", fontWeight: row.avantage === "assurance" ? 600 : 400 }}>{row.assurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* A retenir — banque */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Les plateformes digitales comme <strong>VIAC, finpension ou Frankly</strong> proposent des fonds 3a \u00E0 faibles frais (0.3\u20130.5\u00A0%) avec une strat\u00E9gie actions.",
                  "Une <strong>assurance-vie 3a</strong> est pertinente si vous avez des proches \u00E0 prot\u00E9ger en cas de d\u00E9c\u00E8s ou d\u2019invalidit\u00E9.",
                  "Ne jamais signer un contrat d\u2019assurance-vie 3a sans en comprendre les frais et les p\u00E9nalit\u00E9s de rachat.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 — Retrait */}
            <h2 id="retrait-conditions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Retrait : conditions et timing optimal</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les fonds du pilier 3a sont bloqu{"\u00E9"}s par d{"\u00E9"}faut jusqu{"\u2019"}{"\u00E0"} la retraite. Cinq exceptions permettent un retrait anticip{"\u00E9"} :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {CONDITIONS_RETRAIT.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Strat{"\u00E9"}gie de retrait {"\u00E9"}chelonn{"\u00E9"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              L{"\u2019"}imp{"\u00F4"}t sur le capital 3a est progressif mais s{"\u00E9"}par{"\u00E9"} du revenu ordinaire. En d{"\u00E9"}tenant <strong style={{ color: "#111827" }}>plusieurs comptes 3a</strong> (ouverts dans diff{"\u00E9"}rents {"\u00E9"}tablissements), vous pouvez les retirer l{"\u2019"}un apr{"\u00E8"}s l{"\u2019"}autre sur plusieurs ann{"\u00E9"}es {"\u2014"} r{"\u00E9"}duisant ainsi consid{"\u00E9"}rablement la charge fiscale globale. Exemple : retirer 50{"\u2019"}000 CHF deux fois de suite co{"\u00FB"}te fiscalement moins que retirer 100{"\u2019"}000 CHF d{"\u2019"}un coup.
            </p>

            {/* Section 8 — Comment ouvrir */}
            <h2 id="comment-ouvrir" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment ouvrir un 3{"\u00E8"}me pilier en 5 {"\u00E9"}tapes</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 9 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\u00E0"} {"\u00E9"}viter absolument</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\u26A0"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Optimisez votre pr{"\u00E9"}voyance avec un expert</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Pilier 3a, rattrapage r{"\u00E9"}troactif, strat{"\u00E9"}gie de retrait : nos experts d{"\u00E9"}cryptent votre situation en 15 minutes.</p>
              <Link href="/prevoyance" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>{"Consulter nos guides pr\u00E9voyance \u2192"}</Link>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le 3{"\u00E8"}me pilier est l{"\u2019"}outil de pr{"\u00E9"}voyance le plus accessible et le plus avantageux fiscalement pour les r{"\u00E9"}sidents suisses. En 2026, la nouvelle loi sur le <strong style={{ color: "#111827" }}>rattrapage r{"\u00E9"}troactif</strong> offre une opportunit{"\u00E9"} exceptionnelle de r{"\u00E9"}cup{"\u00E9"}rer des ann{"\u00E9"}es non cotis{"\u00E9"}es. Combinez <strong style={{ color: "#111827" }}>plusieurs comptes 3a</strong>, privil{"\u00E9"}giez les <strong style={{ color: "#111827" }}>solutions bancaires {"\u00E0"} faibles frais</strong> et planifiez vos retraits pour maximiser l{"\u2019"}avantage fiscal {"\u00E0"} la retraite.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Calculez votre {"\u00E9"}conomie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre email et recevez notre calculateur 3a gratuit avec les plafonds 2026.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Recevoir le calculateur \u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 Mis \u00E0 jour 2026 \u00B7 Imm\u00E9diat"}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Pr\u00E9voyance, fiscalit\u00E9, investissement. Un email par semaine, z\u00E9ro superflu."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\u2019inscrire \u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
