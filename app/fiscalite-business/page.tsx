import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R\éduire ses imp\ôts en Suisse : guide fiscal 2026",
  description: "Optimisation fiscale en Suisse : d\éductions, 3e pilier, rachat LPP, frais professionnels, holding, forfait fiscal. Toutes les strat\égies l\égales pour payer moins.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-optimiser", label: "Pourquoi optimiser sa fiscalit\é ?" },
  { id: "cantons", label: "Diff\érences cantonales" },
  { id: "deductions", label: "D\éductions possibles" },
  { id: "troisieme-pilier", label: "3e pilier et LPP" },
  { id: "independant-salarie", label: "Ind\épendant vs salari\é" },
  { id: "holding-structures", label: "Holding et structures juridiques" },
  { id: "forfait-fiscal", label: "Forfait fiscal" },
  { id: "erreurs", label: "Erreurs fiscales courantes" },
];

const CANTONS = [
  {
    name: "Zoug",
    taux: "~11,9 %",
    desc: "Canton le plus attractif de Suisse pour les entreprises et les hauts revenus. Taux d\’imposition combin\é (ICC + IFD) parmi les plus bas d\’Europe.",
  },
  {
    name: "Nidwald",
    taux: "~12,7 %",
    desc: "Deuxi\ème canton le plus avantageux. Politique fiscale volontariste, tr\ès appr\éci\é des indep\éndants \à hauts revenus.",
  },
  {
    name: "Appenzell Rhodes-Int.",
    taux: "~13,1 %",
    desc: "Canton rural avec une fiscalit\é tr\ès comp\étitive et un co\ût de la vie inf\érieur aux grandes villes.",
  },
  {
    name: "Gen\ève",
    taux: "~39 %",
    desc: "L\’un des cantons les plus lourds fiscalement pour les personnes physiques. Forte progressivit\é au-del\à de 200\ 000 CHF de revenu.",
  },
  {
    name: "Vaud",
    taux: "~36 %",
    desc: "Fiscalit\é \élev\ée pour les hauts revenus, mais avantageuse pour les soci\ét\és holdings. R\égime participations int\éressant.",
  },
  {
    name: "Berne",
    taux: "~35 %",
    desc: "Canton lourd pour les personnes physiques. Les cantons voisins comme Nidwald ou Schwyz sont souvent cit\és comme alternative par les ind\épendants bernois.",
  },
];

const DEDUCTIONS = [
  {
    cat: "Frais professionnels",
    items: [
      { label: "Frais de d\éplacement domicile-travail", detail: "Jusqu\’\à 3\ 000 CHF/an (IFD), sans plafond dans certains cantons pour les voitures de soci\ét\é" },
      { label: "Repas pris \à l\’ext\érieur", detail: "15 CHF/repas avec justificatif, ou forfait annuel de 1\ 600 CHF" },
      { label: "Formation continue", detail: "Jusqu\’\à 12\ 000 CHF/an si li\ée \à l\’activit\é actuelle" },
      { label: "T\él\étravail", detail: "Frais de bureau \à domicile d\éductibles si espace d\édi\é et exclusif" },
    ],
  },
  {
    cat: "Charges familiales",
    items: [
      { label: "Int\ér\êts hypoth\écaires", detail: "D\éductibles int\égralement sur le revenu imposable (ICC et IFD)" },
      { label: "Pension alimentaire vers\ée", detail: "Int\égralement d\éductible pour le d\ébiteur, impos\ée chez le b\én\éficiaire" },
      { label: "Frais de garde d\’enfants", detail: "Jusqu\’\à 25\ 000 CHF/an (IFD) pour les enfants de moins de 14 ans" },
      { label: "Dons \à des ONG reconnues", detail: "De 100 CHF \à 20\ % du revenu net imposable" },
    ],
  },
  {
    cat: "Placements et assurances",
    items: [
      { label: "Primes LAMal et assurances compl\émentaires", detail: "Forfait de 2\ 900 CHF (c\élibataire) ou 5\ 800 CHF (couple) \à l\’IFD" },
      { label: "Int\ér\êts de dettes priv\ées", detail: "D\éductibles \à hauteur du rendement imposable de la fortune + 50\ 000 CHF" },
      { label: "Entretien immobilier", detail: "Forfait de 10\ % ou 20\ % selon l\’\âge du bien, ou frais r\éels si plus \élev\és" },
    ],
  },
];

const PILIER_STEPS = [
  {
    num: "1",
    title: "3e pilier A : la d\éduction reine",
    desc: "Versement annuel maximum de <strong>7\ 258 CHF</strong> (2026) pour les salari\és affili\és \à une caisse de pension. Int\égralement d\éductible de votre revenu imposable.",
  },
  {
    num: "2",
    title: "3e pilier A pour ind\épendants sans LPP",
    desc: "Jusqu\’\à <strong>36\ 288 CHF</strong> (20\ % du revenu net) si vous n\’\êtes pas affili\é \à une caisse de pension. Un levier fiscal consid\érable.",
  },
  {
    num: "3",
    title: "Rachat LPP",
    desc: "Si des \« lacunes \» existent dans votre 2e pilier, vous pouvez les racheter volontairement. Ces rachats sont <strong>enti\èrement d\éductibles</strong> et peuvent repr\ésenter plusieurs dizaines de milliers de CHF.",
  },
  {
    num: "4",
    title: "Fractionnement des retraits",
    desc: "Lors du retrait du capital 2e ou 3e pilier, l\’imp\ôt est calcul\é <strong>s\épar\ément</strong> du revenu ordinaire, \à un taux r\éduit. En \échelonnant les retraits sur plusieurs ann\ées, on r\éduit la progressivit\é.",
  },
  {
    num: "5",
    title: "Ouvrir plusieurs comptes pilier 3a",
    desc: "Depuis 2025, il est possible de d\étenir <strong>plusieurs comptes 3a</strong> aupr\ès de diff\érents \établissements et de les liquider \à des ann\ées diff\érentes pour lisser l\’imposition.",
  },
];

const STATUTS = [
  {
    statut: "Salari\é",
    avantages: [
      "Cotisations sociales partag\ées 50/50 avec l\’employeur",
      "LPP obligatoire et cotis\ée par les deux parties",
      "Frais professionnels forfaitaires simples",
    ],
    inconvenients: [
      "Revenu fix\é, peu de flexibilit\é sur les d\éductions",
      "Charge sociale totale \élev\ée (env. 13 % chaque)",
      "Pas de d\éductibilit\é des charges d\’exploitation",
    ],
  },
  {
    statut: "Ind\épendant (raison individuelle)",
    avantages: [
      "D\éduction de toutes les charges li\ées \à l\’activit\é",
      "3e pilier A jusqu\’\à 36\ 288 CHF (sans LPP)",
      "Flexibilit\é sur le calendrier des revenus",
    ],
    inconvenients: [
      "Cotisations AVS \à charge enti\ère (~10 %)",
      "Pas de LPP obligatoire (risque retraite)",
      "R\évision compl\ète des comptes par le fisc",
    ],
  },
  {
    statut: "SA ou S\àrl",
    avantages: [
      "Taux d\’imposition entreprise ~12\–25 % selon canton",
      "D\éduction du salaire de l\’actionnaire-g\érant",
      "Optimisation dividendes vs salaire",
    ],
    inconvenients: [
      "Frais de constitution et de gestion plus \élev\és",
      "Double imposition \économique dividendes (att\énu\ée)",
      "Comptabilit\é obligatoire, audit \éventuel",
    ],
  },
];

const HOLDING_ITEMS = [
  {
    title: "Principe du r\égime des participations",
    desc: "En Suisse, une soci\ét\é qui d\étient au moins <strong>10 %</strong> du capital d\’une filiale b\én\éficie d\’une <strong>r\éduction de l\’imp\ôt sur les dividendes re\çus</strong> proportionnelle au rapport entre le rendement net des participations et le b\én\éfice total.",
  },
  {
    title: "Holding pure",
    desc: "Une soci\ét\é dont l\’activit\é principale consiste \à d\étenir des participations est <strong>exon\ér\ée de l\’imp\ôt cantonal sur le b\én\éfice</strong> dans la plupart des cantons. Seul l\’IFD s\’applique (8,5 %).",
  },
  {
    title: "Planification successorale",
    desc: "La holding facilite le transfert patrimonial entre g\én\érations : <strong>donation de parts</strong> plut\ôt que de biens immobiliers ou de liquidit\és, optimisation des droits de succession (inexistants en ligne directe dans la majorit\é des cantons).",
  },
  {
    title: "Soci\ét\é immobili\ère",
    desc: "D\étenir l\’immobilier dans une structure juridique distincte permet d\’<strong>isoler le risque</strong>, de d\éduire les charges d\’entretien, et d\’optimiser la transmission. Attention aux droits de mutation selon les cantons.",
  },
];

const FORFAIT_ITEMS = [
  { label: "Qui peut en b\én\éficier ?", detail: "Ressortissants \étrangers (hors UE dans certains cantons) r\ésidant en Suisse sans y exercer d\’activit\é lucrative. Typiquement des rentiers, investisseurs ou grands fortunes internationales." },
  { label: "Base de calcul", detail: "L\’imp\ôt est calcul\é sur les <strong>d\épenses annuelles</strong> du contribuable (logement, nourriture, voyages, etc.), avec un minimum l\égal de 7 fois le loyer annuel brut ou 400\ 000 CHF au niveau f\éd\éral." },
  { label: "Avantage cl\é", detail: "Les revenus de source \étrang\ère (dividendes, int\ér\êts, loyers) ne sont <strong>pas impos\és en Suisse</strong>, sauf pour b\én\éficier des conventions de double imposition." },
  { label: "Cantons concern\és", detail: "Valais, Vaud, Gen\ève, Grisons, Tessin, Berne, Fribourg. Certains cantons comme Zurich ont aboli le r\égime en 2009." },
];

const ERREURS = [
  {
    title: "Ne pas planifier les rachats LPP \à temps",
    desc: "Les rachats LPP doivent \être effectu\és au moins 3 ans avant un retrait en capital pour \être fiscalement valables. Une erreur de timing co\ûte cher.",
  },
  {
    title: "Oublier de d\éduire les frais r\éels",
    desc: "Beaucoup de contribuables acceptent le forfait sans v\érifier si leurs frais r\éels (kilom\étrage, formation, mat\ériel professionnel) ne seraient pas plus avantageux.",
  },
  {
    title: "Mal doser salaire et dividendes en SA",
    desc: "Un salaire trop bas attire l\’attention du fisc (AVS minimum requis). Un dividende trop haut peut \être requalifi\é en prestation appauvrissante si les fonds propres sont insuffisants.",
  },
  {
    title: "Changer de canton sans anticiper",
    desc: "Un d\ém\énagement fiscal doit se planifier sur 2 \à 3 ans. Les plus-values immobili\ères ou la fortune peuvent \être impos\ées diff\éremment selon le canton de r\ésidence au moment de la r\éalisation.",
  },
  {
    title: "N\égliger la fortune dans le calcul global",
    desc: "L\’imp\ôt sur la fortune peut d\épasser l\’imp\ôt sur le revenu pour les patrimoines importants. Des strat\égies sp\écifiques existent (dette hypoth\écaire, assurance-vie 3b, etc.).",
  },
  {
    title: "Ignorer les d\élais de d\éclaration",
    desc: "Une demande de prorogation doit \être faite avant l\’\éch\éance, pas apr\ès. Un retard peut entra\îner une taxation d\’office souvent d\éfavorable.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Cr\éer sa soci\ét\é en Suisse : SA, S\àrl ou raison individuelle ?", readTime: "11 min", category: "Entreprendre" },
  { icon: "\u{1F4B0}", title: "Salaire en Suisse : grilles, n\égociation et charges", readTime: "9 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire professionnel en Suisse", readTime: "7 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ENTREPRENDRE", title: "Analyse LPP 2026 : ce qui change pour votre retraite", author: "Marc T.", date: "14 avril 2026", readTime: "8 min" },
  { icon: "\u{1F4B8}", tag: "FINANCES", title: "Assurance maladie en Suisse : choisir la bonne caisse", author: "\Équipe Kursor", date: "2 avril 2026", readTime: "10 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Achat immobilier en Suisse : r\ègles, co\ûts et pi\èges", author: "Sophie R.", date: "18 mars 2026", readTime: "12 min" },
];

const TAGS = ["Optimisation fiscale", "Imp\ôts Suisse", "3e pilier", "LPP", "Holding", "Ind\épendant", "Forfait fiscal"];

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
            <span className="font-heading italic" style={{ color: "#D97706" }}>en Suisse : toutes les strat{"\é"}gies l{"\é"}gales</span>
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
              La Suisse est souvent cit{"\é"}e comme un paradis fiscal — et pour cause : ses taux d{"'"}imposition varient du simple au triple selon les cantons, et ses dispositifs l{"\é"}gaux d{"'"}optimisation sont nombreux. Pourtant, la plupart des contribuables suisses laissent chaque ann{"\é"}e plusieurs milliers de francs sur la table, faute de conna{"\î"}tre les bons leviers. Ce guide vous pr{"\é"}sente, sans jargon, toutes les strat{"\é"}gies d{"'"}<strong style={{ color: "#111827" }}>optimisation fiscale</strong> accessibles en Suisse, que vous soyez salari{"\é"}, ind{"\é"}pendant ou chef d{"'"}entreprise.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La fiscalit\é suisse est <strong>cantonale</strong> : choisir le bon canton de r\ésidence est la premi\ère optimisation.",
                  "Le <strong>3e pilier A</strong> est la d\éduction la plus accessible pour tout contribuable suisse.",
                  "Les <strong>rachats LPP</strong> peuvent repr\ésenter des dizaines de milliers de CHF de d\éduction d\’une seule traite.",
                  "Le statut <strong>SA ou S\àrl</strong> permet une optimisation salaire-dividendes impossible en raison individuelle.",
                  "Toute strat\égie doit \être <strong>document\ée et justifiable</strong> : l\’\évasion fiscale est ill\égale, l\’optimisation ne l\’est pas.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Pourquoi optimiser */}
            <h2 id="pourquoi-optimiser" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi optimiser sa fiscalit{"\é"} en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Contrairement {"\à"} une id{"\é"}e re{"\ç"}ue, l{"'"}optimisation fiscale ne concerne pas uniquement les multi-millionnaires. Un salari{"\é"} gagnant <strong style={{ color: "#111827" }}>120{"\ "}000 CHF</strong> par an {"\à"} Gen{"\è"}ve peut l{"\é"}galement r{"\é"}duire sa facture d{"'"}imp{"\ô"}ts de <strong style={{ color: "#111827" }}>8{"\ "}000 {"\à"} 15{"\ "}000 CHF</strong> par an en appliquant simplement les d{"\é"}ductions auxquelles il a droit.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En Suisse, l{"'"}imp{"\ô"}t est d{"\é"}clar{"\é"} soi-m{"\ê"}me : l{"'"}administration ne calcule pas {"\à"} votre place. <strong style={{ color: "#111827" }}>Chaque d{"\é"}duction non revendiqu{"\é"}e est perdue.</strong> La loi LIFD (Loi sur l{"'"}imp{"\ô"}t f{"\é"}d{"\é"}ral direct) et les lois cantonales offrent des dizaines de postes d{"\é"}ductibles, souvent ignor{"\é"}s.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: 32 }}>
              {[
                { chiffre: "26", label: "cantons, 26 fiscalit\és diff\érentes" },
                { chiffre: "3\×", label: "l\’\écart de taux entre Zoug et Gen\ève" },
                { chiffre: "7\ 258", label: "CHF de d\éduction 3e pilier A (2026)" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white text-center" style={{ border: "1px solid #E2E8F0", padding: "20px 16px" }}>
                  <p className="font-heading" style={{ fontSize: 32, fontWeight: 700, color: "#D97706" }}>{s.chiffre}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Section 2 — Cantons */}
            <h2 id="cantons" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Diff{"\é"}rences cantonales : choisir le bon canton</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              L{"'"}imp{"\ô"}t se compose de trois strates : l{"'"}<strong style={{ color: "#111827" }}>imp{"\ô"}t f{"\é"}d{"\é"}ral direct</strong> (identique partout), l{"'"}<strong style={{ color: "#111827" }}>imp{"\ô"}t cantonal</strong> et l{"'"}<strong style={{ color: "#111827" }}>imp{"\ô"}t communal</strong>. Ces deux derniers varient consid{"\é"}rablement. Voici un comparatif des taux marginaux effectifs (revenu 200{"\ "}000 CHF, c{"\é"}libataire) :
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
                <strong style={{ color: "#D97706" }}>Attention :</strong> un d{"\é"}m{"\é"}nagement intercantonal entra{"\î"}ne une <strong>imposition pro rata temporis</strong>. La date du changement de domicile fiscal d{"\é"}clenche les imp{"\ô"}ts dans chaque canton concern{"\é"}. Planifiez avec un fiduciaire.
              </p>
            </div>

            {/* Section 3 — Déductions */}
            <h2 id="deductions" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>D{"\é"}ductions possibles : le tour complet</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La d{"\é"}claration d{"'"}imp{"\ô"}ts suisse admet une liste {"\é"}tendue de d{"\é"}ductions. Voici les principales, class{"\é"}es par cat{"\é"}gorie :
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Conservez <strong>tous vos justificatifs</strong> pendant 10 ans : le fisc peut les r\éclamer.",
                  "Les frais r\éels ne sont int\éressants que s\’ils d\épassent le <strong>forfait cantonal</strong>.",
                  "Les d\éductions pour <strong>formation continue</strong> sont plafond\ées si elles ne sont pas li\ées \à votre emploi actuel.",
                  "Les cantons appliquent souvent des <strong>plafonds diff\érents</strong> de ceux de l\’IFD : v\érifiez les deux.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — 3e pilier + LPP */}
            <h2 id="troisieme-pilier" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3e pilier et rachat LPP : les leviers les plus puissants</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              La pr{"\é"}voyance vieillesse est le meilleur outil d{"'"}optimisation fiscale l{"\é"}gale en Suisse. Chaque franc vers{"\é"} est d{"\é"}duit du revenu imposable <strong style={{ color: "#111827" }}>aujourd{"'"}hui</strong>, et ne sera impos{"\é"} qu{"'"}au retrait — g{"\é"}n{"\é"}ralement {"\à"} un taux bien inf{"\é"}rieur.
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
            <h2 id="independant-salarie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Statut ind{"\é"}pendant vs salari{"\é"} vs SA : quel impact fiscal ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Le choix du statut juridique est l{"'"}une des d{"\é"}cisions fiscales les plus importantes. Voici une comparaison honnête des trois grandes options :
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
                            <span style={{ color: "#16A34A", fontWeight: 600, flexShrink: 0 }}>{"\✓"}</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#DC2626", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>Inconv{"\é"}nients</p>
                      <ul className="list-none p-0 m-0">
                        {s.inconvenients.map((inc) => (
                          <li key={inc} className="font-body flex items-start gap-2" style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 5 }}>
                            <span style={{ color: "#DC2626", fontWeight: 600, flexShrink: 0 }}>{"\✕"}</span>
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
              R{"\è"}gle g{"\é"}n{"\é"}rale : en dessous de <strong style={{ color: "#111827" }}>100{"\ "}000 CHF</strong> de b{"\é"}n{"\é"}fice annuel, la raison individuelle est souvent suffisante. Au-del{"\à"}, la SA ou la S{"\à"}rl offre des possibilit{"\é"}s d{"'"}optimisation plus importantes gr{"\â"}ce {"\à"} la distinction entre salaire et dividendes.
            </p>

            {/* Section 6 — Holding */}
            <h2 id="holding-structures" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Holding et structures juridiques avanc{"\é"}es</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Pour les entrepreneurs avec plusieurs activit{"\é"}s ou un patrimoine cons{"\é"}quent, la <strong style={{ color: "#111827" }}>structure holding</strong> est souvent la cl{"\é"} d{"'"}une optimisation fiscale durable. Voici comment elle fonctionne :
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
              Le <strong style={{ color: "#111827" }}>forfait fiscal</strong> (imposition d{"'"}apr{"\è"}s la d{"\é"}pense) est un r{"\é"}gime d{"'"}exception suisse qui attire chaque ann{"\é"}e plusieurs centaines de ressortissants {"\é"}trangers ais{"\é"}s. Il ne s{"'"}applique pas aux contribuables suisses.
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
                <strong style={{ color: "#D97706" }}>Chiffre cl{"\é"} :</strong> selon l{"'"}AFC, environ <strong>5{"\ "}200 contribuables</strong> b{"\é"}n{"\é"}ficiaient du forfait fiscal en Suisse en 2024, g{"\é"}n{"\é"}rant pr{"\è"}s de <strong>800 millions CHF</strong> de recettes fiscales directes et indirectes pour les collectivit{"\é"}s.
              </p>
            </div>

            {/* Section 8 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs fiscales courantes {"\à"} {"\é"}viter absolument</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\⚠"}</span>
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
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos experts analysent votre d{"\é"}claration et identifient les d{"\é"}ductions que vous avez manqu{"\é"}es. Diagnostic gratuit en 2 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"D\écouvrir nos formations \→"}</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\é"}sum{"\é"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                L{"'"}optimisation fiscale en Suisse est {"\à"} la port{"\é"}e de tout contribuable inform{"\é"}. Les leviers les plus puissants restent le <strong style={{ color: "#111827" }}>3e pilier A</strong>, les <strong style={{ color: "#111827" }}>rachats LPP</strong> et le <strong style={{ color: "#111827" }}>choix du statut juridique</strong>. Pour les fortunes plus importantes, le canton de r{"\é"}sidence et la structure holding d{"\é"}terminent l{"'"}essentiel de la charge fiscale. Dans tous les cas, anticipez, documentez, et faites-vous accompagner par un fiduciaire comp{"\é"}tent.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simulez votre {"\é"}conomie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre email et recevez une estimation gratuite des d{"\é"}ductions auxquelles vous avez droit.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Estimer mes \économies \→"}</button>
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
