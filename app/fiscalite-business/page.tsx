import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R\u00E9duire ses imp\u00F4ts en Suisse : guide fiscal 2026",
  description: "Optimisation fiscale en Suisse : d\u00E9ductions, 3e pilier, rachat LPP, frais professionnels, holding, forfait fiscal. Toutes les strat\u00E9gies l\u00E9gales pour payer moins.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-optimiser", label: "Pourquoi optimiser sa fiscalit\u00E9 ?" },
  { id: "cantons", label: "Diff\u00E9rences cantonales" },
  { id: "deductions", label: "D\u00E9ductions possibles" },
  { id: "troisieme-pilier", label: "3e pilier et LPP" },
  { id: "independant-salarie", label: "Ind\u00E9pendant vs salari\u00E9" },
  { id: "holding-structures", label: "Holding et structures juridiques" },
  { id: "forfait-fiscal", label: "Forfait fiscal" },
  { id: "erreurs", label: "Erreurs fiscales courantes" },
];

const CANTONS = [
  {
    name: "Zoug",
    taux: "~11,9 %",
    desc: "Canton le plus attractif de Suisse pour les entreprises et les hauts revenus. Taux d\u2019imposition combin\u00E9 (ICC + IFD) parmi les plus bas d\u2019Europe.",
  },
  {
    name: "Nidwald",
    taux: "~12,7 %",
    desc: "Deuxi\u00E8me canton le plus avantageux. Politique fiscale volontariste, tr\u00E8s appr\u00E9ci\u00E9 des indep\u00E9ndants \u00E0 hauts revenus.",
  },
  {
    name: "Appenzell Rhodes-Int.",
    taux: "~13,1 %",
    desc: "Canton rural avec une fiscalit\u00E9 tr\u00E8s comp\u00E9titive et un co\u00FBt de la vie inf\u00E9rieur aux grandes villes.",
  },
  {
    name: "Gen\u00E8ve",
    taux: "~39 %",
    desc: "L\u2019un des cantons les plus lourds fiscalement pour les personnes physiques. Forte progressivit\u00E9 au-del\u00E0 de 200\u2009000 CHF de revenu.",
  },
  {
    name: "Vaud",
    taux: "~36 %",
    desc: "Fiscalit\u00E9 \u00E9lev\u00E9e pour les hauts revenus, mais avantageuse pour les soci\u00E9t\u00E9s holdings. R\u00E9gime participations int\u00E9ressant.",
  },
  {
    name: "Berne",
    taux: "~35 %",
    desc: "Canton lourd pour les personnes physiques. Les cantons voisins comme Nidwald ou Schwyz sont souvent cit\u00E9s comme alternative par les ind\u00E9pendants bernois.",
  },
];

const DEDUCTIONS = [
  {
    cat: "Frais professionnels",
    items: [
      { label: "Frais de d\u00E9placement domicile-travail", detail: "Jusqu\u2019\u00E0 3\u2009000 CHF/an (IFD), sans plafond dans certains cantons pour les voitures de soci\u00E9t\u00E9" },
      { label: "Repas pris \u00E0 l\u2019ext\u00E9rieur", detail: "15 CHF/repas avec justificatif, ou forfait annuel de 1\u2009600 CHF" },
      { label: "Formation continue", detail: "Jusqu\u2019\u00E0 12\u2009000 CHF/an si li\u00E9e \u00E0 l\u2019activit\u00E9 actuelle" },
      { label: "T\u00E9l\u00E9travail", detail: "Frais de bureau \u00E0 domicile d\u00E9ductibles si espace d\u00E9di\u00E9 et exclusif" },
    ],
  },
  {
    cat: "Charges familiales",
    items: [
      { label: "Int\u00E9r\u00EAts hypoth\u00E9caires", detail: "D\u00E9ductibles int\u00E9gralement sur le revenu imposable (ICC et IFD)" },
      { label: "Pension alimentaire vers\u00E9e", detail: "Int\u00E9gralement d\u00E9ductible pour le d\u00E9biteur, impos\u00E9e chez le b\u00E9n\u00E9ficiaire" },
      { label: "Frais de garde d\u2019enfants", detail: "Jusqu\u2019\u00E0 25\u2009000 CHF/an (IFD) pour les enfants de moins de 14 ans" },
      { label: "Dons \u00E0 des ONG reconnues", detail: "De 100 CHF \u00E0 20\u2009% du revenu net imposable" },
    ],
  },
  {
    cat: "Placements et assurances",
    items: [
      { label: "Primes LAMal et assurances compl\u00E9mentaires", detail: "Forfait de 2\u2009900 CHF (c\u00E9libataire) ou 5\u2009800 CHF (couple) \u00E0 l\u2019IFD" },
      { label: "Int\u00E9r\u00EAts de dettes priv\u00E9es", detail: "D\u00E9ductibles \u00E0 hauteur du rendement imposable de la fortune + 50\u2009000 CHF" },
      { label: "Entretien immobilier", detail: "Forfait de 10\u2009% ou 20\u2009% selon l\u2019\u00E2ge du bien, ou frais r\u00E9els si plus \u00E9lev\u00E9s" },
    ],
  },
];

const PILIER_STEPS = [
  {
    num: "1",
    title: "3e pilier A : la d\u00E9duction reine",
    desc: "Versement annuel maximum de <strong>7\u2009258 CHF</strong> (2026) pour les salari\u00E9s affili\u00E9s \u00E0 une caisse de pension. Int\u00E9gralement d\u00E9ductible de votre revenu imposable.",
  },
  {
    num: "2",
    title: "3e pilier A pour ind\u00E9pendants sans LPP",
    desc: "Jusqu\u2019\u00E0 <strong>36\u2009288 CHF</strong> (20\u2009% du revenu net) si vous n\u2019\u00EAtes pas affili\u00E9 \u00E0 une caisse de pension. Un levier fiscal consid\u00E9rable.",
  },
  {
    num: "3",
    title: "Rachat LPP",
    desc: "Si des \u00AB lacunes \u00BB existent dans votre 2e pilier, vous pouvez les racheter volontairement. Ces rachats sont <strong>enti\u00E8rement d\u00E9ductibles</strong> et peuvent repr\u00E9senter plusieurs dizaines de milliers de CHF.",
  },
  {
    num: "4",
    title: "Fractionnement des retraits",
    desc: "Lors du retrait du capital 2e ou 3e pilier, l\u2019imp\u00F4t est calcul\u00E9 <strong>s\u00E9par\u00E9ment</strong> du revenu ordinaire, \u00E0 un taux r\u00E9duit. En \u00E9chelonnant les retraits sur plusieurs ann\u00E9es, on r\u00E9duit la progressivit\u00E9.",
  },
  {
    num: "5",
    title: "Ouvrir plusieurs comptes pilier 3a",
    desc: "Depuis 2025, il est possible de d\u00E9tenir <strong>plusieurs comptes 3a</strong> aupr\u00E8s de diff\u00E9rents \u00E9tablissements et de les liquider \u00E0 des ann\u00E9es diff\u00E9rentes pour lisser l\u2019imposition.",
  },
];

const STATUTS = [
  {
    statut: "Salari\u00E9",
    avantages: [
      "Cotisations sociales partag\u00E9es 50/50 avec l\u2019employeur",
      "LPP obligatoire et cotis\u00E9e par les deux parties",
      "Frais professionnels forfaitaires simples",
    ],
    inconvenients: [
      "Revenu fix\u00E9, peu de flexibilit\u00E9 sur les d\u00E9ductions",
      "Charge sociale totale \u00E9lev\u00E9e (env. 13 % chaque)",
      "Pas de d\u00E9ductibilit\u00E9 des charges d\u2019exploitation",
    ],
  },
  {
    statut: "Ind\u00E9pendant (raison individuelle)",
    avantages: [
      "D\u00E9duction de toutes les charges li\u00E9es \u00E0 l\u2019activit\u00E9",
      "3e pilier A jusqu\u2019\u00E0 36\u2009288 CHF (sans LPP)",
      "Flexibilit\u00E9 sur le calendrier des revenus",
    ],
    inconvenients: [
      "Cotisations AVS \u00E0 charge enti\u00E8re (~10 %)",
      "Pas de LPP obligatoire (risque retraite)",
      "R\u00E9vision compl\u00E8te des comptes par le fisc",
    ],
  },
  {
    statut: "SA ou S\u00E0rl",
    avantages: [
      "Taux d\u2019imposition entreprise ~12\u201325 % selon canton",
      "D\u00E9duction du salaire de l\u2019actionnaire-g\u00E9rant",
      "Optimisation dividendes vs salaire",
    ],
    inconvenients: [
      "Frais de constitution et de gestion plus \u00E9lev\u00E9s",
      "Double imposition \u00E9conomique dividendes (att\u00E9nu\u00E9e)",
      "Comptabilit\u00E9 obligatoire, audit \u00E9ventuel",
    ],
  },
];

const HOLDING_ITEMS = [
  {
    title: "Principe du r\u00E9gime des participations",
    desc: "En Suisse, une soci\u00E9t\u00E9 qui d\u00E9tient au moins <strong>10 %</strong> du capital d\u2019une filiale b\u00E9n\u00E9ficie d\u2019une <strong>r\u00E9duction de l\u2019imp\u00F4t sur les dividendes re\u00E7us</strong> proportionnelle au rapport entre le rendement net des participations et le b\u00E9n\u00E9fice total.",
  },
  {
    title: "Holding pure",
    desc: "Une soci\u00E9t\u00E9 dont l\u2019activit\u00E9 principale consiste \u00E0 d\u00E9tenir des participations est <strong>exon\u00E9r\u00E9e de l\u2019imp\u00F4t cantonal sur le b\u00E9n\u00E9fice</strong> dans la plupart des cantons. Seul l\u2019IFD s\u2019applique (8,5 %).",
  },
  {
    title: "Planification successorale",
    desc: "La holding facilite le transfert patrimonial entre g\u00E9n\u00E9rations : <strong>donation de parts</strong> plut\u00F4t que de biens immobiliers ou de liquidit\u00E9s, optimisation des droits de succession (inexistants en ligne directe dans la majorit\u00E9 des cantons).",
  },
  {
    title: "Soci\u00E9t\u00E9 immobili\u00E8re",
    desc: "D\u00E9tenir l\u2019immobilier dans une structure juridique distincte permet d\u2019<strong>isoler le risque</strong>, de d\u00E9duire les charges d\u2019entretien, et d\u2019optimiser la transmission. Attention aux droits de mutation selon les cantons.",
  },
];

const FORFAIT_ITEMS = [
  { label: "Qui peut en b\u00E9n\u00E9ficier ?", detail: "Ressortissants \u00E9trangers (hors UE dans certains cantons) r\u00E9sidant en Suisse sans y exercer d\u2019activit\u00E9 lucrative. Typiquement des rentiers, investisseurs ou grands fortunes internationales." },
  { label: "Base de calcul", detail: "L\u2019imp\u00F4t est calcul\u00E9 sur les <strong>d\u00E9penses annuelles</strong> du contribuable (logement, nourriture, voyages, etc.), avec un minimum l\u00E9gal de 7 fois le loyer annuel brut ou 400\u2009000 CHF au niveau f\u00E9d\u00E9ral." },
  { label: "Avantage cl\u00E9", detail: "Les revenus de source \u00E9trang\u00E8re (dividendes, int\u00E9r\u00EAts, loyers) ne sont <strong>pas impos\u00E9s en Suisse</strong>, sauf pour b\u00E9n\u00E9ficier des conventions de double imposition." },
  { label: "Cantons concern\u00E9s", detail: "Valais, Vaud, Gen\u00E8ve, Grisons, Tessin, Berne, Fribourg. Certains cantons comme Zurich ont aboli le r\u00E9gime en 2009." },
];

const ERREURS = [
  {
    title: "Ne pas planifier les rachats LPP \u00E0 temps",
    desc: "Les rachats LPP doivent \u00EAtre effectu\u00E9s au moins 3 ans avant un retrait en capital pour \u00EAtre fiscalement valables. Une erreur de timing co\u00FBte cher.",
  },
  {
    title: "Oublier de d\u00E9duire les frais r\u00E9els",
    desc: "Beaucoup de contribuables acceptent le forfait sans v\u00E9rifier si leurs frais r\u00E9els (kilom\u00E9trage, formation, mat\u00E9riel professionnel) ne seraient pas plus avantageux.",
  },
  {
    title: "Mal doser salaire et dividendes en SA",
    desc: "Un salaire trop bas attire l\u2019attention du fisc (AVS minimum requis). Un dividende trop haut peut \u00EAtre requalifi\u00E9 en prestation appauvrissante si les fonds propres sont insuffisants.",
  },
  {
    title: "Changer de canton sans anticiper",
    desc: "Un d\u00E9m\u00E9nagement fiscal doit se planifier sur 2 \u00E0 3 ans. Les plus-values immobili\u00E8res ou la fortune peuvent \u00EAtre impos\u00E9es diff\u00E9remment selon le canton de r\u00E9sidence au moment de la r\u00E9alisation.",
  },
  {
    title: "N\u00E9gliger la fortune dans le calcul global",
    desc: "L\u2019imp\u00F4t sur la fortune peut d\u00E9passer l\u2019imp\u00F4t sur le revenu pour les patrimoines importants. Des strat\u00E9gies sp\u00E9cifiques existent (dette hypoth\u00E9caire, assurance-vie 3b, etc.).",
  },
  {
    title: "Ignorer les d\u00E9lais de d\u00E9claration",
    desc: "Une demande de prorogation doit \u00EAtre faite avant l\u2019\u00E9ch\u00E9ance, pas apr\u00E8s. Un retard peut entra\u00EEner une taxation d\u2019office souvent d\u00E9favorable.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Cr\u00E9er sa soci\u00E9t\u00E9 en Suisse : SA, S\u00E0rl ou raison individuelle ?", readTime: "11 min", category: "Entreprendre" },
  { icon: "\u{1F4B0}", title: "Salaire en Suisse : grilles, n\u00E9gociation et charges", readTime: "9 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire professionnel en Suisse", readTime: "7 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ENTREPRENDRE", title: "Analyse LPP 2026 : ce qui change pour votre retraite", author: "Marc T.", date: "14 avril 2026", readTime: "8 min" },
  { icon: "\u{1F4B8}", tag: "FINANCES", title: "Assurance maladie en Suisse : choisir la bonne caisse", author: "\u00C9quipe Kursor", date: "2 avril 2026", readTime: "10 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Achat immobilier en Suisse : r\u00E8gles, co\u00FBts et pi\u00E8ges", author: "Sophie R.", date: "18 mars 2026", readTime: "12 min" },
];

const TAGS = ["Optimisation fiscale", "Imp\u00F4ts Suisse", "3e pilier", "LPP", "Holding", "Ind\u00E9pendant", "Forfait fiscal"];

/* ───────── PAGE ───────── */

export default function FiscaliteBusinessPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>ENTREPRENDRE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Guide complet d{"'"}optimisation fiscale<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>en Suisse : toutes les strat{"\u00E9"}gies l{"\u00E9"}gales</span>
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
              La Suisse est souvent cit{"\u00E9"}e comme un paradis fiscal — et pour cause : ses taux d{"'"}imposition varient du simple au triple selon les cantons, et ses dispositifs l{"\u00E9"}gaux d{"'"}optimisation sont nombreux. Pourtant, la plupart des contribuables suisses laissent chaque ann{"\u00E9"}e plusieurs milliers de francs sur la table, faute de conna{"\u00EE"}tre les bons leviers. Ce guide vous pr{"\u00E9"}sente, sans jargon, toutes les strat{"\u00E9"}gies d{"'"}<strong style={{ color: "#111827" }}>optimisation fiscale</strong> accessibles en Suisse, que vous soyez salari{"\u00E9"}, ind{"\u00E9"}pendant ou chef d{"'"}entreprise.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La fiscalit\u00E9 suisse est <strong>cantonale</strong> : choisir le bon canton de r\u00E9sidence est la premi\u00E8re optimisation.",
                  "Le <strong>3e pilier A</strong> est la d\u00E9duction la plus accessible pour tout contribuable suisse.",
                  "Les <strong>rachats LPP</strong> peuvent repr\u00E9senter des dizaines de milliers de CHF de d\u00E9duction d\u2019une seule traite.",
                  "Le statut <strong>SA ou S\u00E0rl</strong> permet une optimisation salaire-dividendes impossible en raison individuelle.",
                  "Toute strat\u00E9gie doit \u00EAtre <strong>document\u00E9e et justifiable</strong> : l\u2019\u00E9vasion fiscale est ill\u00E9gale, l\u2019optimisation ne l\u2019est pas.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Pourquoi optimiser */}
            <h2 id="pourquoi-optimiser" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi optimiser sa fiscalit{"\u00E9"} en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Contrairement {"\u00E0"} une id{"\u00E9"}e re{"\u00E7"}ue, l{"'"}optimisation fiscale ne concerne pas uniquement les multi-millionnaires. Un salari{"\u00E9"} gagnant <strong style={{ color: "#111827" }}>120{"\u2009"}000 CHF</strong> par an {"\u00E0"} Gen{"\u00E8"}ve peut l{"\u00E9"}galement r{"\u00E9"}duire sa facture d{"'"}imp{"\u00F4"}ts de <strong style={{ color: "#111827" }}>8{"\u2009"}000 {"\u00E0"} 15{"\u2009"}000 CHF</strong> par an en appliquant simplement les d{"\u00E9"}ductions auxquelles il a droit.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, l{"'"}imp{"\u00F4"}t est d{"\u00E9"}clar{"\u00E9"} soi-m{"\u00EA"}me : l{"'"}administration ne calcule pas {"\u00E0"} votre place. <strong style={{ color: "#111827" }}>Chaque d{"\u00E9"}duction non revendiqu{"\u00E9"}e est perdue.</strong> La loi LIFD (Loi sur l{"'"}imp{"\u00F4"}t f{"\u00E9"}d{"\u00E9"}ral direct) et les lois cantonales offrent des dizaines de postes d{"\u00E9"}ductibles, souvent ignor{"\u00E9"}s.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: 32 }}>
              {[
                { chiffre: "26", label: "cantons, 26 fiscalit\u00E9s diff\u00E9rentes" },
                { chiffre: "3\u00D7", label: "l\u2019\u00E9cart de taux entre Zoug et Gen\u00E8ve" },
                { chiffre: "7\u2009258", label: "CHF de d\u00E9duction 3e pilier A (2026)" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white text-center" style={{ border: "1px solid #E2E8F0", padding: "20px 16px" }}>
                  <p className="font-heading" style={{ fontSize: 32, fontWeight: 700, color: "#D97706" }}>{s.chiffre}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Section 2 — Cantons */}
            <h2 id="cantons" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Diff{"\u00E9"}rences cantonales : choisir le bon canton</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              L{"'"}imp{"\u00F4"}t se compose de trois strates : l{"'"}<strong style={{ color: "#111827" }}>imp{"\u00F4"}t f{"\u00E9"}d{"\u00E9"}ral direct</strong> (identique partout), l{"'"}<strong style={{ color: "#111827" }}>imp{"\u00F4"}t cantonal</strong> et l{"'"}<strong style={{ color: "#111827" }}>imp{"\u00F4"}t communal</strong>. Ces deux derniers varient consid{"\u00E9"}rablement. Voici un comparatif des taux marginaux effectifs (revenu 200{"\u2009"}000 CHF, c{"\u00E9"}libataire) :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {CANTONS.map((c) => (
                <div key={c.name} className="flex items-start gap-4 rounded-xl bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <div className="shrink-0 rounded-lg flex items-center justify-center" style={{ minWidth: 80, backgroundColor: "rgba(217,119,6,0.08)", padding: "8px 12px" }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#D97706" }}>{c.taux}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 2 }}>{c.name}</p>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Attention :</strong> un d{"\u00E9"}m{"\u00E9"}nagement intercantonal entra{"\u00EE"}ne une <strong>imposition pro rata temporis</strong>. La date du changement de domicile fiscal d{"\u00E9"}clenche les imp{"\u00F4"}ts dans chaque canton concern{"\u00E9"}. Planifiez avec un fiduciaire.
              </p>
            </div>

            {/* Section 3 — Déductions */}
            <h2 id="deductions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>D{"\u00E9"}ductions possibles : le tour complet</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La d{"\u00E9"}claration d{"'"}imp{"\u00F4"}ts suisse admet une liste {"\u00E9"}tendue de d{"\u00E9"}ductions. Voici les principales, class{"\u00E9"}es par cat{"\u00E9"}gorie :
            </p>
            <div className="flex flex-col gap-6" style={{ marginBottom: 32 }}>
              {DEDUCTIONS.map((cat) => (
                <div key={cat.cat}>
                  <p className="font-heading" style={{ fontSize: 17, fontWeight: 600, color: "#111827", marginBottom: 10 }}>{cat.cat}</p>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <div key={item.label} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{item.label}</p>
                        <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Conservez <strong>tous vos justificatifs</strong> pendant 10 ans : le fisc peut les r\u00E9clamer.",
                  "Les frais r\u00E9els ne sont int\u00E9ressants que s\u2019ils d\u00E9passent le <strong>forfait cantonal</strong>.",
                  "Les d\u00E9ductions pour <strong>formation continue</strong> sont plafond\u00E9es si elles ne sont pas li\u00E9es \u00E0 votre emploi actuel.",
                  "Les cantons appliquent souvent des <strong>plafonds diff\u00E9rents</strong> de ceux de l\u2019IFD : v\u00E9rifiez les deux.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — 3e pilier + LPP */}
            <h2 id="troisieme-pilier" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3e pilier et rachat LPP : les leviers les plus puissants</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La pr{"\u00E9"}voyance vieillesse est le meilleur outil d{"'"}optimisation fiscale l{"\u00E9"}gale en Suisse. Chaque franc vers{"\u00E9"} est d{"\u00E9"}duit du revenu imposable <strong style={{ color: "#111827" }}>aujourd{"'"}hui</strong>, et ne sera impos{"\u00E9"} qu{"'"}au retrait — g{"\u00E9"}n{"\u00E9"}ralement {"\u00E0"} un taux bien inf{"\u00E9"}rieur.
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {PILIER_STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5 — Indépendant vs salarié */}
            <h2 id="independant-salarie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Statut ind{"\u00E9"}pendant vs salari{"\u00E9"} vs SA : quel impact fiscal ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le choix du statut juridique est l{"'"}une des d{"\u00E9"}cisions fiscales les plus importantes. Voici une comparaison honnête des trois grandes options :
            </p>
            <div className="flex flex-col gap-5" style={{ marginBottom: 32 }}>
              {STATUTS.map((s) => (
                <div key={s.statut} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <p className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: "#D97706", marginBottom: 14 }}>{s.statut}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#16A34A", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>Avantages</p>
                      <ul className="list-none p-0 m-0">
                        {s.avantages.map((a) => (
                          <li key={a} className="font-body flex items-start gap-2" style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 5 }}>
                            <span style={{ color: "#16A34A", fontWeight: 600, flexShrink: 0 }}>{"\u2713"}</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#DC2626", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>Inconv{"\u00E9"}nients</p>
                      <ul className="list-none p-0 m-0">
                        {s.inconvenients.map((inc) => (
                          <li key={inc} className="font-body flex items-start gap-2" style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 5 }}>
                            <span style={{ color: "#DC2626", fontWeight: 600, flexShrink: 0 }}>{"\u2715"}</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
              R{"\u00E8"}gle g{"\u00E9"}n{"\u00E9"}rale : en dessous de <strong style={{ color: "#111827" }}>100{"\u2009"}000 CHF</strong> de b{"\u00E9"}n{"\u00E9"}fice annuel, la raison individuelle est souvent suffisante. Au-del{"\u00E0"}, la SA ou la S{"\u00E0"}rl offre des possibilit{"\u00E9"}s d{"'"}optimisation plus importantes gr{"\u00E2"}ce {"\u00E0"} la distinction entre salaire et dividendes.
            </p>

            {/* Section 6 — Holding */}
            <h2 id="holding-structures" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Holding et structures juridiques avanc{"\u00E9"}es</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Pour les entrepreneurs avec plusieurs activit{"\u00E9"}s ou un patrimoine cons{"\u00E9"}quent, la <strong style={{ color: "#111827" }}>structure holding</strong> est souvent la cl{"\u00E9"} d{"'"}une optimisation fiscale durable. Voici comment elle fonctionne :
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {HOLDING_ITEMS.map((h) => (
                <div key={h.title} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <p className="font-heading" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{h.title}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: h.desc }} />
                </div>
              ))}
            </div>

            {/* Section 7 — Forfait fiscal */}
            <h2 id="forfait-fiscal" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le forfait fiscal : pour qui et comment ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le <strong style={{ color: "#111827" }}>forfait fiscal</strong> (imposition d{"'"}apr{"\u00E8"}s la d{"\u00E9"}pense) est un r{"\u00E9"}gime d{"'"}exception suisse qui attire chaque ann{"\u00E9"}e plusieurs centaines de ressortissants {"\u00E9"}trangers ais{"\u00E9"}s. Il ne s{"'"}applique pas aux contribuables suisses.
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {FORFAIT_ITEMS.map((f) => (
                <div key={f.label} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{f.label}</p>
                  <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: f.detail }} />
                </div>
              ))}
            </div>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Chiffre cl{"\u00E9"} :</strong> selon l{"'"}AFC, environ <strong>5{"\u2009"}200 contribuables</strong> b{"\u00E9"}n{"\u00E9"}ficiaient du forfait fiscal en Suisse en 2024, g{"\u00E9"}n{"\u00E9"}rant pr{"\u00E8"}s de <strong>800 millions CHF</strong> de recettes fiscales directes et indirectes pour les collectivit{"\u00E9"}s.
              </p>
            </div>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs fiscales courantes {"\u00E0"} {"\u00E9"}viter absolument</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\u26A0"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2, lineHeight: 1.6 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Vous voulez optimiser votre situation fiscale ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos experts analysent votre d{"\u00E9"}claration et identifient les d{"\u00E9"}ductions que vous avez manqu{"\u00E9"}es. Diagnostic gratuit en 2 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"D\u00E9couvrir nos formations \u2192"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                L{"'"}optimisation fiscale en Suisse est {"\u00E0"} la port{"\u00E9"}e de tout contribuable inform{"\u00E9"}. Les leviers les plus puissants restent le <strong style={{ color: "#111827" }}>3e pilier A</strong>, les <strong style={{ color: "#111827" }}>rachats LPP</strong> et le <strong style={{ color: "#111827" }}>choix du statut juridique</strong>. Pour les fortunes plus importantes, le canton de r{"\u00E9"}sidence et la structure holding d{"\u00E9"}terminent l{"'"}essentiel de la charge fiscale. Dans tous les cas, anticipez, documentez, et faites-vous accompagner par un fiduciaire comp{"\u00E9"}tent.
              </p>
            </div>

            {/* Tags + Partager */}
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simulez votre {"\u00E9"}conomie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre email et recevez une estimation gratuite des d{"\u00E9"}ductions auxquelles vous avez droit.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Estimer mes \u00E9conomies \u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
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
