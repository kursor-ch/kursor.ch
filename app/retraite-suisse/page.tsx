import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3e pilier suisse 2026 : maximisez vos \économies fiscales",
  description: "Guide complet 3\ème pilier suisse 2026 : plafond 3a (7\ժ258 CHF), rattrapage r\étroactif (36\ժ290 CHF), 3b, banque vs assurance, retraits, avantages fiscaux. Tout ce qu\’il faut savoir.",
};

/* \─\─\─\─\─\─\─\─\─ DATA \─\─\─\─\─\─\─\─\─ */

const TOC = [
  { id: "quest-ce-que", label: "Qu\’est-ce que le 3\ème pilier ?" },
  { id: "3a-vs-3b", label: "3a vs 3b : quelle diff\érence ?" },
  { id: "plafonds-2026", label: "Plafonds et limites 2026" },
  { id: "nouvelle-loi-rattrapage", label: "Nouvelle loi : rattrapage r\étroactif" },
  { id: "avantages-fiscaux", label: "Avantages fiscaux concrets" },
  { id: "banque-vs-assurance", label: "Banque vs assurance : que choisir ?" },
  { id: "retrait-conditions", label: "Retrait : conditions et timing" },
  { id: "comment-ouvrir", label: "Comment ouvrir un 3\ème pilier" },
  { id: "erreurs", label: "Erreurs \à \éviter" },
];

const COMPARAISON_3A_3B = [
  {
    critere: "D\éduction fiscale",
    pilier3a: "Oui \— jusqu\’\à 7\’258 CHF/an",
    pilier3b: "Non (sauf quelques cantons)",
  },
  {
    critere: "Plafond de versement",
    pilier3a: "7\’258 CHF (salari\é) / 36\’288 CHF (ind\ép.)",
    pilier3b: "Aucun plafond l\égal",
  },
  {
    critere: "Flexibilit\é de retrait",
    pilier3a: "Limit\ée (conditions strictes)",
    pilier3b: "Totale (quand vous voulez)",
  },
  {
    critere: "Blocage des fonds",
    pilier3a: "Jusqu\’\à la retraite (sauf exceptions)",
    pilier3b: "Aucun blocage",
  },
  {
    critere: "Id\éal pour",
    pilier3a: "Optimisation fiscale maximale",
    pilier3b: "Compl\ément \épargne libre",
  },
  {
    critere: "Formes possibles",
    pilier3a: "Compte bancaire, assurance-vie, titres",
    pilier3b: "Assurance-vie, \épargne libre",
  },
];

const PLAFONDS_2026 = [
  {
    profil: "Salari\é affili\é \à un 2\ème pilier",
    plafond: "7\’258 CHF / an",
    note: "Plafond standard 2026, revaloris\é chaque ann\ée",
  },
  {
    profil: "Ind\épendant sans 2\ème pilier",
    plafond: "36\’288 CHF / an",
    note: "Soit 20\ % du revenu net, plafonn\é \à 36\’288 CHF",
  },
  {
    profil: "Rattrapage r\étroactif (10 ans)",
    plafond: "36\’290 CHF cumul\é",
    note: "Nouveau depuis janvier 2026 \— ann\ées non utilis\ées depuis 2017",
  },
];

const BANQUE_VS_ASSURANCE = [
  {
    critere: "Frais",
    banque: "Faibles ou nuls",
    assurance: "\Élev\és (primes, commissions)",
    avantage: "banque",
  },
  {
    critere: "Rendement",
    banque: "Variable (taux ou titres)",
    assurance: "Garanti minimum + part.",
    avantage: "neutre",
  },
  {
    critere: "Flexibilit\é",
    banque: "Versements libres",
    assurance: "Primes fixes oblig.",
    avantage: "banque",
  },
  {
    critere: "Protection d\éc\ès / invalidit\é",
    banque: "Non incluse",
    assurance: "Incluse dans le contrat",
    avantage: "assurance",
  },
  {
    critere: "Transfert possible",
    banque: "Oui, vers autre \établissement",
    assurance: "Difficult\é (rachat avec p\énalit\és)",
    avantage: "banque",
  },
  {
    critere: "Id\éal pour",
    banque: "Investisseurs, ind\épendants",
    assurance: "Familles, besoin couverture",
    avantage: "neutre",
  },
];

const CONDITIONS_RETRAIT = [
  {
    num: "1",
    title: "Retraite ordinaire (64/65 ans)",
    desc: "Le cas standard. Vous pouvez retirer vos fonds d\ès 5 ans avant l\’\âge AVS (soit \à 59 ans pour les femmes, 60 ans pour les hommes) et jusqu\’\à 5 ans apr\ès.",
  },
  {
    num: "2",
    title: "Achat immobilier en Suisse",
    desc: "Retrait anticip\é possible pour financer l\’acquisition ou l\’amortissement d\’un logement principal en Suisse. Minimum 25\’000 CHF, tous les 5 ans.",
  },
  {
    num: "3",
    title: "D\ébut d\’une activit\é ind\épendante",
    desc: "Vous pouvez retirer vos fonds si vous devenez ind\épendant et cessez d\’\être affili\é \à une caisse de pension LPP.",
  },
  {
    num: "4",
    title: "Quitter la Suisse d\éfinitivement",
    desc: "D\épart hors UE/AELE : retrait int\égral autoris\é. D\épart vers un pays UE/AELE : seule la part obligatoire reste bloqu\ée.",
  },
  {
    num: "5",
    title: "Invalidit\é totale (AI)",
    desc: "En cas d\’invalidit\é totale reconnue par l\’assurance-invalidit\é f\éd\érale, le capital peut \être lib\ér\é par anticipation.",
  },
];

const ERREURS = [
  {
    title: "Ne verser qu\’en fin d\’ann\ée",
    desc: "Verser en janvier plut\ôt qu\’en d\écembre vous offre 11 mois de rendement suppl\émentaire. Sur 20 ans, l\’impact est significatif.",
  },
  {
    title: "Choisir une assurance sans comparer",
    desc: "Les produits bancaires (compte ou titres 3a) affichent souvent de meilleurs rendements nets que les assurances-vie, avec moins de contraintes.",
  },
  {
    title: "Tout retirer en une fois",
    desc: "Retirer sur plusieurs ann\ées (ou depuis plusieurs comptes) r\éduit consid\érablement l\’imp\ôt sur le capital. Planifiez 5 ans avant la retraite.",
  },
  {
    title: "Oublier les ann\ées de rattrapage",
    desc: "Depuis 2026, vous pouvez rattraper jusqu\’\à 10 ann\ées non cotis\ées pour un total de 36\’290 CHF. C\’est une opportunit\é fiscale exceptionnelle \à ne pas manquer.",
  },
  {
    title: "Ne pas ouvrir plusieurs comptes 3a",
    desc: "La loi autorise plusieurs comptes 3a dans diff\érents \établissements. Cela permet un retrait \échelonn\é et optimis\é fiscalement \à la retraite.",
  },
];

const STEPS = [
  { num: "1", title: "Choisir le bon prestataire", desc: "Comparez les banques (VIAC, Frankly, finpension, PostFinance) et les assurances sur la base des frais, du rendement historique et de la flexibilit\é." },
  { num: "2", title: "Rassembler les documents", desc: "Carte d\’identit\é ou passeport, num\éro AVS, coordonn\ées bancaires et justificatif de revenu (fiche de salaire ou bilan pour ind\épendants)." },
  { num: "3", title: "Choisir la strat\égie de placement", desc: "Compte \épargne classique (rendement limit\é), fonds \équilibr\és (40\–60\ % actions) ou portefeuille 100\ % actions pour un horizon long terme." },
  { num: "4", title: "Effectuer le premier versement", desc: "D\éfinissez un ordre permanent mensuel ou versez un montant annuel. Le plafond 2026 est de 7\’258 CHF pour les salari\és." },
  { num: "5", title: "D\éduire sur votre d\éclaration", desc: "Chaque ann\ée, indiquez le montant vers\é dans la rubrique \« pilier 3a \» de votre d\éclaration fiscale cantonale. L\’\établissement vous envoie automatiquement l\’attestation." },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F3E6}", title: "Caisse de pension LPP : comment optimiser votre 2\ème pilier", readTime: "11 min", category: "Patrimoine" },
  { icon: "\u{1F4B3}", title: "Ouvrir un compte bancaire en Suisse : guide 2026", readTime: "6 min", category: "Finances" },
  { icon: "\u{1F3E0}", title: "Acheter un appartement en Suisse : \étapes et financement", readTime: "13 min", category: "Logement" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "PATRIMOINE", title: "Imp\ôts en Suisse : comment r\éduire sa facture fiscale l\également", author: "Marc L.", date: "14 avril 2026", readTime: "8 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "LPP 2025 : ce qui change pour votre 2\ème pilier", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { icon: "\u{1F3E5}", tag: "ASSURANCE", title: "Assurance-vie en Suisse : avantages, types et fiscalit\é", author: "Julie M.", date: "20 mars 2026", readTime: "9 min" },
];

const TAGS = ["3\ème pilier", "Pilier 3a", "Pilier 3b", "Pr\évoyance", "Retraite", "Fiscalit\é", "Suisse"];

/* \─\─\─\─\─\─\─\─\─ PAGE \─\─\─\─\─\─\─\─\─ */

export default function RetraiteSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            3{"\è"}me pilier suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour \épargner et d\éfiscaliser</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\É"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\·"} 15 min de lecture</p>
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
              En Suisse, la retraite repose sur trois piliers. Le premier (AVS) et le deuxi{"\è"}me (LPP) couvrent environ <strong style={{ color: "#111827" }}>60{"\ "}% du dernier salaire</strong>. Le <strong style={{ color: "#111827" }}>3{"\è"}me pilier</strong> est l{"\’"}outil privil{"\é"}gi{"\é"} pour combler l{"\’"}{"\é"}cart, tout en b{"\é"}n{"\é"}ficiant d{"\’"}une d{"\é"}duction fiscale imm{"\é"}diate. En 2026, une nouvelle loi sur le <strong style={{ color: "#111827" }}>rattrapage r{"\é"}troactif</strong> ouvre des opportunit{"\é"}s in{"\é"}dites. Ce guide vous explique tout.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le <strong>pilier 3a</strong> offre une d\éduction fiscale imm\édiate mais bloque les fonds jusqu\’\à la retraite (sauf cas exceptionnels).",
                  "Le <strong>plafond 2026</strong> est de 7\’258 CHF pour les salari\és affili\és au 2\ème pilier.",
                  "Depuis <strong>janvier 2026</strong>, il est possible de rattraper les ann\ées non cotis\ées depuis 2017, jusqu\’\à 36\’290 CHF.",
                  "Une strat\égie multi-comptes permet d\’\étaler les retraits et de <strong>r\éduire l\’imp\ôt</strong> sur le capital.",
                  "Les produits <strong>bancaires</strong> (VIAC, finpension) affichent souvent de meilleurs rendements nets que les assurances-vie.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Qu'est-ce que */}
            <h2 id="quest-ce-que" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qu{"\’"}est-ce que le 3{"\è"}me pilier suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le syst{"\è"}me de retraite suisse est structur{"\é"} en trois piliers compl{"\é"}mentaires :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
              {[
                { num: "1er pilier", label: "AVS (Assurance-vieillesse et survivants)", desc: "Obligatoire, finance la retraite de base de toute la population. Taux de remplacement\ : environ 40\ % du salaire." },
                { num: "2\ème pilier", label: "LPP (Caisse de pension professionnelle)", desc: "Obligatoire d\ès 21\’510 CHF de salaire annuel. Compl\ète l\’AVS pour atteindre environ 60\ % du dernier salaire." },
                { num: "3\ème pilier", label: "Pr\évoyance priv\ée individuelle", desc: "Facultatif mais fortement incit\é fiscalement. Permet de combler l\’\écart entre le niveau de vie actif et la rente." },
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
              Le 3{"\è"}me pilier se subdivise en deux formes : le <strong style={{ color: "#111827" }}>pilier 3a</strong> (pr{"\é"}voyance li{"\é"}e, avec avantage fiscal) et le <strong style={{ color: "#111827" }}>pilier 3b</strong> (pr{"\é"}voyance libre, sans contrainte).
            </p>

            {/* Section 2 — 3a vs 3b */}
            <h2 id="3a-vs-3b" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3a vs 3b : quelle diff{"\é"}rence ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les deux formes sont compl{"\é"}mentaires mais r{"\é"}pondent {"\à"} des logiques diff{"\é"}rentes :
            </p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Crit{"\è"}re</th>
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
              Le plafond de d{"\é"}duction du pilier 3a est revalorис{"\é"} r{"\é"}guli{"\è"}rement en fonction de l{"\’"}{"\é"}volution de l{"\’"}AVS :
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
            <h2 id="nouvelle-loi-rattrapage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Nouvelle loi : le rattrapage r{"\é"}troactif 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Entr{"\é"}e en vigueur le <strong style={{ color: "#111827" }}>1er janvier 2026</strong>, la modification de l{"\’"}Ordonnance OPP3 permet d{"\é"}sormais de <strong style={{ color: "#111827" }}>combler les ann{"\é"}es de pilier 3a non utilis{"\é"}es</strong> depuis 2017. C{"\’"}est une r{"\é"}volution pour tous ceux qui n{"\’"}ont pas cotis{"\é"} ou cotis{"\é"} partiellement.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 20 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir — Rattrapage r{"\é"}troactif</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Rattrapage possible sur les <strong>10 derni\ères ann\ées</strong> (ann\ées 2017\–2025).",
                  "Montant maximum rattrapable\ : <strong>36\’290 CHF</strong> au total.",
                  "La d\éduction est limit\ée au <strong>plafond annuel</strong> par ann\ée de rattrapage.",
                  "Le rattrapage n\’est autoris\é que si vous \êtes <strong>actuellement affili\é</strong> \à un 2\ème pilier.",
                  "Chaque versement de rattrapage est int\égralement d\éductible du revenu imposable.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Exemple concret : si vous n{"\’"}avez pas cotis{"\é"} au pilier 3a de 2017 {"\à"} 2021 (5 ans), vous pouvez verser jusqu{"\’"}{"\à"} <strong style={{ color: "#111827" }}>36{"\’"}290 CHF en une seule fois</strong> en 2026, en plus du plafond annuel ordinaire de 7{"\’"}258 CHF. L{"\’"}impact fiscal peut atteindre plusieurs milliers de francs selon votre canton et votre taux marginal d{"\’"}imposition.
            </p>

            {/* Section 5 — Avantages fiscaux */}
            <h2 id="avantages-fiscaux" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Avantages fiscaux concrets</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le pilier 3a offre trois niveaux d{"\’"}avantage fiscal, souvent sous-estim{"\é"}s :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
              {[
                { icon: "1", label: "D\éduction sur le revenu imposable", desc: "Chaque franc vers\é en 3a est d\éduit de votre revenu imposable. Selon votre canton et votre taux marginal (15\–40\ %), une cotisation de 7\’258 CHF peut g\én\érer une \économie fiscale de 1\’100 \à 2\’900 CHF." },
                { icon: "2", label: "Exon\ération de l\’imp\ôt sur la fortune", desc: "Les fonds bloqu\és en 3a ne sont pas soumis \à l\’imp\ôt cantonal sur la fortune pendant la dur\ée de placement." },
                { icon: "3", label: "Imp\ôt r\éduit au retrait", desc: "Le capital retrait\é est impos\é s\épar\ément du revenu ordinaire, \à un taux pr\éf\érentiel (souvent 1\–8\ % selon le canton et le montant). L\’imp\ôt sur le capital est ainsi bien inf\érieur \à l\’\économie r\éalis\ée chaque ann\ée." },
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
                <strong style={{ color: "#D97706" }}>R{"\è"}gle d{"\’"}or :</strong> cotiser au pilier 3a pendant 30 ans peut {"\é"}conomiser entre <strong>30{"\’"}000 et 80{"\’"}000 CHF d{"\’"}imp{"\ô"}ts</strong> sur l{"\’"}ensemble de la p{"\é"}riode, selon votre canton et votre revenu.
              </p>
            </div>

            {/* Section 6 — Banque vs Assurance */}
            <h2 id="banque-vs-assurance" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Banque vs assurance : que choisir ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le pilier 3a peut {"\ê"}tre ouvert aupr{"\è"}s d{"\’"}une banque ou d{"\’"}une compagnie d{"\’"}assurance. Les diff{"\é"}rences sont importantes :
            </p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #E2E8F0" }}>Crit{"\è"}re</th>
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Les plateformes digitales comme <strong>VIAC, finpension ou Frankly</strong> proposent des fonds 3a \à faibles frais (0.3\–0.5\ %) avec une strat\égie actions.",
                  "Une <strong>assurance-vie 3a</strong> est pertinente si vous avez des proches \à prot\éger en cas de d\éc\ès ou d\’invalidit\é.",
                  "Ne jamais signer un contrat d\’assurance-vie 3a sans en comprendre les frais et les p\énalit\és de rachat.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 — Retrait */}
            <h2 id="retrait-conditions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Retrait : conditions et timing optimal</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Les fonds du pilier 3a sont bloqu{"\é"}s par d{"\é"}faut jusqu{"\’"}{"\à"} la retraite. Cinq exceptions permettent un retrait anticip{"\é"} :
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
            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Strat{"\é"}gie de retrait {"\é"}chelonn{"\é"}</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              L{"\’"}imp{"\ô"}t sur le capital 3a est progressif mais s{"\é"}par{"\é"} du revenu ordinaire. En d{"\é"}tenant <strong style={{ color: "#111827" }}>plusieurs comptes 3a</strong> (ouverts dans diff{"\é"}rents {"\é"}tablissements), vous pouvez les retirer l{"\’"}un apr{"\è"}s l{"\’"}autre sur plusieurs ann{"\é"}es {"\—"} r{"\é"}duisant ainsi consid{"\é"}rablement la charge fiscale globale. Exemple : retirer 50{"\’"}000 CHF deux fois de suite co{"\û"}te fiscalement moins que retirer 100{"\’"}000 CHF d{"\’"}un coup.
            </p>

            {/* Section 8 — Comment ouvrir */}
            <h2 id="comment-ouvrir" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment ouvrir un 3{"\è"}me pilier en 5 {"\é"}tapes</h2>
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
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\à"} {"\é"}viter absolument</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\⚠"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Optimisez votre pr{"\é"}voyance avec un expert</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Pilier 3a, rattrapage r{"\é"}troactif, strat{"\é"}gie de retrait : nos experts d{"\é"}cryptent votre situation en 15 minutes.</p>
              <Link href="/prevoyance" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>{"Consulter nos guides pr\évoyance \→"}</Link>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\é"}sum{"\é"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le 3{"\è"}me pilier est l{"\’"}outil de pr{"\é"}voyance le plus accessible et le plus avantageux fiscalement pour les r{"\é"}sidents suisses. En 2026, la nouvelle loi sur le <strong style={{ color: "#111827" }}>rattrapage r{"\é"}troactif</strong> offre une opportunit{"\é"} exceptionnelle de r{"\é"}cup{"\é"}rer des ann{"\é"}es non cotis{"\é"}es. Combinez <strong style={{ color: "#111827" }}>plusieurs comptes 3a</strong>, privil{"\é"}giez les <strong style={{ color: "#111827" }}>solutions bancaires {"\à"} faibles frais</strong> et planifiez vos retraits pour maximiser l{"\’"}avantage fiscal {"\à"} la retraite.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Calculez votre {"\é"}conomie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre email et recevez notre calculateur 3a gratuit avec les plafonds 2026.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Recevoir le calculateur \→"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \· Mis \à jour 2026 \· Imm\édiat"}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Pr\évoyance, fiscalit\é, investissement. Un email par semaine, z\éro superflu."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\’inscrire \→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
