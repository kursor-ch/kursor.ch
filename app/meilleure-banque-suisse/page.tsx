import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Meilleure banque suisse 2026 : le comparatif complet",
  description: "Quelle banque suisse choisir en 2026 ? Comparatif des banques traditionnelles, cantonales, néobanques (Alpian, Neon, Yuh) et conseils par profil.",
  alternates: {
    canonical: "https://kursor.ch/meilleure-banque-suisse",
  },
  other: {
    "geo.region": "CH",
    "geo.placename": "Suisse",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "systeme-bancaire", label: "Comment fonctionne le système bancaire" },
  { id: "5-types-banques", label: "Les 5 types de banques suisses" },
  { id: "comparatif", label: "Comparatif des meilleures banques 2026" },
  { id: "tableau", label: "Tableau comparatif synthétique" },
  { id: "par-profil", label: "Quelle banque selon votre profil" },
  { id: "ouvrir-compte", label: "Ouvrir un compte : les étapes clés" },
  { id: "specificites", label: "Les spécificités bancaires suisses" },
  { id: "changer-eur-chf", label: "Changer des euros en francs suisses" },
];

const A_RETENIR = [
  "Vous avez besoin d'un <strong>compte en CHF</strong> pour recevoir votre salaire en Suisse : c'est la première démarche à enclencher à votre arrivée.",
  "Toutes les banques disposant d'une <strong>licence FINMA</strong> garantissent vos dépôts jusqu'à 100 000 CHF.",
  "Il existe <strong>5 grandes familles de banques</strong> : traditionnelles, cantonales, coopératives, en ligne et privées.",
  "Les néobanques (Neon, Yuh, Alpian) sont gratuites et suffisantes pour les besoins courants.",
  "<strong>TWINT</strong> est l'application de paiement mobile incontournable en Suisse : vérifiez la compatibilité de votre banque avant d'ouvrir un compte.",
  "Les <strong>chèques n'existent pas</strong> en Suisse : les QR-factures et l'e-banking sont les standards locaux.",
  "Certaines banques permettent d'ouvrir un compte <strong>avant votre arrivée</strong> en Suisse, ce qui facilite les premières démarches.",
];

const FAVICON = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const COMPARATIF_TABLE = [
  { banque: "Alpian", logo: FAVICON("alpian.com"), type: "Néobanque", frais: "Gratuit", chf: "Gratuit", etranger: "~0,20 %", twint: "Non (prépayé)", agence: "Non" },
  { banque: "Migros Bank", logo: FAVICON("migrosbank.ch"), type: "Traditionnelle", frais: "Gratuit", chf: "Gratuit", etranger: "~2,0 %", twint: "Oui", agence: "Oui" },
  { banque: "PostFinance", logo: FAVICON("postfinance.ch"), type: "Traditionnelle", frais: "Gratuit", chf: "Gratuit", etranger: "Variable", twint: "Oui", agence: "Oui (La Poste)" },
  { banque: "Neon", logo: FAVICON("neon.eu"), type: "Néobanque", frais: "Gratuit", chf: "Gratuit", etranger: "~1,5 %", twint: "Oui", agence: "Non" },
  { banque: "Yuh", logo: FAVICON("yuh.com"), type: "Néobanque", frais: "Gratuit", chf: "Gratuit", etranger: "~1,5 %", twint: "Oui", agence: "Non" },
  { banque: "Raiffeisen", logo: FAVICON("raiffeisen.ch"), type: "Coopérative", frais: "Variable", chf: "Gratuit", etranger: "Variable", twint: "Oui", agence: "Oui" },
  { banque: "UBS", logo: FAVICON("ubs.com"), type: "Traditionnelle", frais: "Payant", chf: "Gratuit", etranger: "Variable", twint: "Oui", agence: "Oui" },
  { banque: "BCGE / BCV / BCF", logo: FAVICON("bcv.ch"), type: "Cantonale", frais: "Variable", chf: "Gratuit", etranger: "Variable", twint: "Oui", agence: "Oui" },
];

const BANQUES_CANTONALES = [
  { name: "BCGE", canton: "Genève", desc: "Expertise en marchés financiers, gestion d'actifs et conseil aux entreprises." },
  { name: "BCV", canton: "Lausanne (Vaud)", desc: "L'une des plus grandes banques vaudoises, solide sur les marchés financiers et la gestion de trésorerie." },
  { name: "BCF", canton: "Fribourg", desc: "Offre complète incluant e-banking, hypothèques, gestion de patrimoine et conseil en retraite." },
  { name: "BCJ", canton: "Jura", desc: "Banque de proximité avec un service client réactif." },
  { name: "BCVS", canton: "Valais", desc: "Présente en Suisse romande, idéale pour les résidents valaisans." },
];

const PROFILS = [
  { profil: "Vous arrivez en Suisse (frontalier ou expatrié)", reco: "PostFinance ou Crédit Agricole next bank", desc: "Permettent d'ouvrir un compte avant votre premier jour de travail, précieux pour anticiper la garantie de loyer et l'IBAN employeur." },
  { profil: "Vous avez un budget serré", reco: "Neon ou Yuh", desc: "100 % gratuit, sans condition de solde minimum, ouverture en quelques minutes depuis votre smartphone." },
  { profil: "Vous voyagez fréquemment ou achetez en euros", reco: "Alpian", desc: "Avec des frais de conversion à environ 0,20 %, c'est la solution la plus économique pour les transactions en devises étrangères." },
  { profil: "Vous préférez une banque avec agence et conseiller", reco: "Migros Bank ou Raiffeisen", desc: "Bon rapport qualité-prix, réseau étendu et accompagnement humain disponible sur place." },
  { profil: "Vous cherchez un ancrage local fort dans votre canton", reco: "Votre banque cantonale", desc: "BCGE à Genève, BCV à Lausanne, BCF à Fribourg, BCVS en Valais. Proximité, fiabilité et conditions compétitives." },
  { profil: "Vous souhaitez combiner banque et investissement", reco: "Yuh ou UBS", desc: "Yuh (adossé à Swissquote) pour une approche digitale, UBS pour un suivi patrimonial complet avec conseiller dédié." },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F1EB}\u{1F1F7}", tag: "S'INSTALLER", title: "S'installer en Suisse pour un Français", author: "Équipe Kursor", date: "Juin 2026", readTime: "14 min" },
  { icon: "\u{1F4B6}", tag: "PRATIQUE", title: "Coût de la vie en Suisse en 2026", author: "Équipe Kursor", date: "Mai 2026", readTime: "15 min" },
  { icon: "\u{1F4DD}", tag: "FISCALITÉ", title: "Impôts en Suisse pour les étrangers", author: "Équipe Kursor", date: "Avril 2026", readTime: "18 min" },
];

/* ───────── PAGE ───────── */

export default function MeilleureBanqueSuissePage() {
  const heroImg = getArticleImage("/meilleure-banque-suisse");

  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>S{"'"}INSTALLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Meilleure banque suisse 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le comparatif complet</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Juin 2026 {"·"} 13 min de lecture</p>
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
            {heroImg && <GuideHeroImage src={heroImg.src} alt={heroImg.alt} />}

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {A_RETENIR.map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Choisir la meilleure banque suisse est l{"'"}une des premières décisions concrètes à prendre lorsqu{"'"}on s{"'"}installe en Suisse. Avec plus de <strong style={{ color: "#111827" }}>130 établissements bancaires</strong> actifs sur le territoire helvétique, l{"'"}offre peut sembler intimidante, d{"'"}autant que le fonctionnement du système bancaire suisse diffère sensiblement de ce que les Français connaissent. Banque traditionnelle ou néobanque ? Banque cantonale ou établissement national ? Compte gratuit ou offre premium ? Ce comparatif des banques suisses vous donne toutes les clés pour choisir selon votre profil et vos usages. Pour aller plus loin sur la démarche pour <a href="/s-installer-en-suisse-pour-un-francais" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>s{"'"}installer en Suisse</a>, consultez aussi notre guide dédié.
            </p>

            {/* Section 1 */}
            <h2 id="systeme-bancaire" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment fonctionne le système bancaire suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La place bancaire suisse jouit d{"'"}une réputation mondiale fondée sur trois piliers : <strong style={{ color: "#111827" }}>stabilité, confidentialité et expertise en gestion de patrimoine</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Deux institutions structurent l{"'"}ensemble du système. La <strong style={{ color: "#111827" }}>Banque Nationale Suisse (BNS)</strong> est l{"'"}organe central : elle définit la politique monétaire, émet le franc suisse (CHF) et veille à la stabilité financière globale. La <strong style={{ color: "#111827" }}>FINMA</strong> (Swiss Financial Market Supervisory Authority) est l{"'"}autorité de surveillance indépendante qui contrôle que chaque établissement respecte les normes légales en vigueur.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Concrètement, toute banque agréée par la FINMA vous garantit une protection de vos dépôts jusqu{"'"}à <strong style={{ color: "#111827" }}>100 000 CHF</strong> en cas de faillite. C{"'"}est un filet de sécurité solide, mais vérifiez systématiquement que l{"'"}établissement choisi dispose bien de cette licence, car certaines fintech opèrent encore sans agrément bancaire complet.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les banques suisses proposent une gamme de services étendue : comptes courants et d{"'"}épargne, cartes de débit et de crédit, crédits immobiliers, placements financiers, assurances prévoyance et planification patrimoniale.
            </p>

            {/* Section 2 */}
            <h2 id="5-types-banques" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les 5 types de banques suisses</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les banques traditionnelles</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Elles disposent d{"'"}agences physiques réparties sur l{"'"}ensemble du territoire, de conseillers dédiés et d{"'"}une offre de services complète couvrant aussi bien les opérations du quotidien que les placements ou les financements immobiliers. Elles sont la référence pour les profils qui souhaitent un accompagnement humain et un interlocuteur identifié.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Parmi les plus connues : <strong style={{ color: "#111827" }}>UBS, PostFinance, Migros Bank, Banque Cler et Crédit Agricole next bank</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>UBS</strong> est la plus grande banque suisse, présente dans plus de 50 pays. Elle excelle en gestion de patrimoine, banque d{"'"}investissement et services institutionnels. Elle s{"'"}adresse davantage aux profils premium ou aux clients souhaitant regrouper banque, investissements et conseil patrimonial sous un même toit.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Migros Bank</strong>, fondée en 1958, propose des comptes courants et d{"'"}épargne gratuits, une carte de débit Visa incluse sans frais annuels et un réseau de retraits étendu dans les supermarchés Migros, Migrolino et Denner. C{"'"}est l{"'"}une des banques traditionnelles offrant le meilleur rapport qualité-prix en Suisse.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>PostFinance</strong> est la banque postale suisse. Son réseau de points de service, constitué de tous les offices postaux du pays, est le plus dense de Suisse, ce qui en fait une option particulièrement adaptée aux frontaliers et aux primo-arrivants souhaitant un premier compte rapidement opérationnel.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les banques cantonales</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse compte <strong style={{ color: "#111827" }}>24 banques cantonales</strong>, une par canton ou presque. Ce sont des institutions régionales jouant un rôle clé dans le financement des initiatives et entreprises locales. Elles proposent une gamme complète de services et sont particulièrement appréciées pour leur ancrage territorial et leur fiabilité.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>Parmi les plus reconnues :</p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {BANQUES_CANTONALES.map((b) => (
                <div key={b.name} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <p style={{ fontSize: 14, color: "#111827" }}>
                    <strong style={{ color: "#D97706" }}>{b.name}</strong>
                    <span style={{ color: "#94A3B8" }}> ({b.canton})</span>
                    <span style={{ color: "#475569" }}> {"·"} {b.desc}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Si vous vous installez dans un canton spécifique, la banque cantonale locale mérite toujours d{"'"}être comparée : ses conditions sont souvent compétitives et son ancrage régional facilite certaines démarches (prêts immobiliers, garanties de loyer).
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les banques coopératives</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>Raiffeisen</strong> est l{"'"}emblème de cette catégorie. Fondée en 1899, c{"'"}est le troisième groupe bancaire suisse, avec un réseau dense de succursales locales et un ratio de fonds propres parmi les plus solides du secteur. Ses produits d{"'"}épargne sont réputés attractifs et elle convient particulièrement aux profils souhaitant combiner gestion courante, épargne structurée et financement immobilier dans une logique de proximité.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les néobanques</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Sans agence physique, elles fonctionnent exclusivement via application mobile. Leurs atouts majeurs : <strong style={{ color: "#111827" }}>absence totale de frais de gestion, ouverture de compte quasi instantanée et interfaces modernes</strong>. Les principales néobanques actives en Suisse sont Alpian, Neon, Yuh, N26 et Revolut.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              À noter : toutes ne disposent pas d{"'"}une licence bancaire suisse complète. Vérifiez systématiquement la couverture FINMA avant d{"'"}y domicilier votre salaire ou des sommes importantes.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les banques privées</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Spécialisées dans la gestion de fortune et de patrimoine, elles imposent un seuil minimum d{"'"}avoirs et s{"'"}adressent à une clientèle fortunée. On y retrouve des noms mondialement reconnus comme <strong style={{ color: "#111827" }}>Julius Baer, Pictet, Lombard Odier, Edmond de Rothschild</strong> ou Indosuez Wealth Management. Leurs enseignes ornent les bords du lac Léman à Genève et les artères financières de Zurich.
            </p>

            {/* Section 3 */}
            <h2 id="comparatif" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comparatif des meilleures banques suisses en 2026</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Alpian : la meilleure néobanque suisse</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Alpian</strong> est aujourd{"'"}hui la néobanque suisse la plus aboutie pour les expatriés et les profils souhaitant une banque digitale premium. Fondée en 2022, elle dispose d{"'"}une licence FINMA complète et se positionne à mi-chemin entre la néobanque grand public et la banque privée traditionnelle.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Son compte courant est entièrement gratuit, sans condition de solde minimum. Les paiements en CHF sont gratuits et les achats à l{"'"}étranger ou en devises étrangères ne coûtent qu{"'"}environ <strong style={{ color: "#111827" }}>0,20 % par transaction</strong>, un avantage considérable pour les voyageurs fréquents ou les frontaliers jonglant entre euros et francs suisses. L{"'"}application est disponible en français, allemand, italien et anglais.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Ses limites à connaître : les retraits en espèces sont facturés 2 CHF par opération et l{"'"}intégration TWINT n{"'"}est pas native (version prépayée uniquement).
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Migros Bank : la meilleure banque traditionnelle</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Migros Bank</strong> est la référence des banques traditionnelles suisses en termes de rapport qualité-prix. Compte courant et compte épargne gratuits, carte de débit Visa incluse sans frais annuels, retraits d{"'"}espèces gratuits dans un réseau étendu couvrant toutes les enseignes du groupe Migros.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Son principal point faible reste le coût des opérations en devises étrangères (environ 2 %) et des paiements SEPA vers l{"'"}étranger (0,30 CHF par opération). À éviter pour les achats à l{"'"}étranger : Alpian est bien plus compétitive sur ce point.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>PostFinance : le choix des primo-arrivants</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>PostFinance</strong> est la banque postale suisse. Elle est souvent citée comme le meilleur point d{"'"}entrée pour un Français qui s{"'"}installe en Suisse : accessible, réactive et compatible avec toutes les démarches administratives classiques, notamment la fourniture d{"'"}un IBAN à l{"'"}employeur et l{"'"}ouverture d{"'"}une garantie de loyer.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Neon et Yuh : les néobanques gratuites</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les profils avec un budget serré ou souhaitant tester le système bancaire suisse sans engagement, <strong style={{ color: "#111827" }}>Neon et Yuh</strong> proposent des comptes 100 % gratuits avec ouverture en quelques minutes. Yuh, adossé à Swissquote (première banque en ligne suisse avec licence FINMA), intègre en complément des fonctionnalités d{"'"}investissement basiques (actions, ETF, crypto) et offre un compte multidevises. Ces deux options sont idéales pour débuter avant d{"'"}évoluer vers une banque plus complète.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Raiffeisen : la banque coopérative de référence</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>Raiffeisen</strong> est particulièrement adaptée aux profils recherchant un établissement solide avec un ancrage local fort, des produits d{"'"}épargne attractifs et un accompagnement sur le financement immobilier. Son réseau de succursales couvre l{"'"}ensemble du territoire suisse, y compris les zones rurales où les grandes banques nationales sont peu représentées.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>UBS : l{"'"}option premium</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>UBS</strong> est la première banque de Suisse et l{"'"}une des institutions financières les plus reconnues au monde. Elle offre un conseiller dédié, un réseau d{"'"}agences dense, des services de gestion de patrimoine complets et une présence internationale dans plus de 50 pays. En contrepartie, ses frais sont plus élevés que la moyenne. Elle se justifie pour les profils premium, les dirigeants d{"'"}entreprise ou les clients souhaitant une relation bancaire globale et intégrée. Voir aussi notre liste des <a href="/meilleures-entreprises-suisses" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>meilleures entreprises en Suisse</a> par secteur bancaire.
            </p>

            {/* Section 4 — Tableau */}
            <h2 id="tableau" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Tableau comparatif synthétique</h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
                <thead>
                  <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Banque</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Type</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Frais</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>CHF</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Étranger</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>TWINT</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Agence</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF_TABLE.map((row, i) => (
                    <tr key={row.banque} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
                      <td className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#111827", padding: "10px 14px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={row.logo} alt="" width={20} height={20} style={{ borderRadius: 4, flexShrink: 0 }} />
                          {row.banque}
                        </span>
                      </td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.type}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.frais}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.chf}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.etranger}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.twint}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.agence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5 — Par profil */}
            <h2 id="par-profil" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Quelle banque suisse selon votre profil ?</h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {PROFILS.map((p) => (
                <div key={p.profil} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{p.profil}</p>
                  <p className="font-body" style={{ fontSize: 15, fontWeight: 600, color: "#D97706", marginBottom: 8 }}>{p.reco}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 6 — Ouvrir compte */}
            <h2 id="ouvrir-compte" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ouvrir un compte bancaire en Suisse : les étapes clés</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les documents nécessaires</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Si vous êtes déjà installé en Suisse, l{"'"}ouverture d{"'"}un compte nécessite un document d{"'"}identité (carte nationale d{"'"}identité ou passeport) et votre <a href="/permis-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>permis de séjour en Suisse</a> ou de travail. Si vous êtes encore en France mais avez signé votre contrat de travail, certaines banques comme Crédit Agricole next bank permettent une ouverture anticipée, un avantage logistique réel pour avoir sa carte et son IBAN dès l{"'"}arrivée.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>L{"'"}IBAN suisse</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              L{"'"}IBAN suisse commence par les lettres <strong style={{ color: "#111827" }}>CH</strong> suivies de 21 caractères. C{"'"}est le premier document à transmettre à votre employeur pour percevoir votre salaire. Si vous avez trouvé un logement à louer, ouvrez également un compte garantie de loyer (équivalent du dépôt de garantie en France) : certaines banques le proposent avant même votre arrivée sur le territoire.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>L{"'"}e-banking et la double authentification</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              En Suisse, la connexion à l{"'"}e-banking requiert un identifiant et une double authentification, contrairement à la France où un simple mot de passe suffit. Ce niveau de sécurité supplémentaire est la norme dans tous les établissements, traditionnels comme digitaux.
            </p>

            {/* Section 7 — Spécificités */}
            <h2 id="specificites" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les spécificités bancaires suisses à connaître</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>TWINT</strong> est l{"'"}application de paiement mobile incontournable en Suisse. Elle permet de payer en caisse, en ligne, entre amis, de retirer des espèces et même de regrouper ses cartes de fidélité, le tout avec un simple numéro de téléphone. Vérifiez que votre banque propose une version TWINT native et non prépayée : la différence d{"'"}expérience est significative.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les <strong style={{ color: "#111827" }}>QR-factures</strong> ont remplacé les anciens bulletins de versement depuis octobre 2022. Votre médecin, votre assurance, votre opérateur téléphonique vous enverront systématiquement ce format. Il suffit de scanner le QR code depuis votre e-banking pour préremplir automatiquement toutes les informations de paiement, un gain de temps considérable au quotidien.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Les chèques n{"'"}existent pas en Suisse.</strong> C{"'"}est probablement la plus grande différence avec les usages bancaires français. Aucune banque ne les propose et aucun commerçant ne les accepte. La QR-facture est l{"'"}équivalent local.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le paiement <strong style={{ color: "#111827" }}>sans contact</strong> est autorisé jusqu{"'"}à 80 CHF en Suisse, contre 50 € en France. Au-delà de ce montant, votre code PIN est requis.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les retraits d{"'"}espèces s{"'"}effectuent dans des <strong style={{ color: "#111827" }}>Bancomats</strong>, l{"'"}équivalent suisse des distributeurs automatiques de billets. Selon votre banque, les retraits peuvent être gratuits dans un réseau spécifique (supermarchés Migros pour Migros Bank, offices postaux pour PostFinance) et facturés en dehors.
            </p>

            {/* Section 8 — Changer EUR/CHF */}
            <h2 id="changer-eur-chf" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Changer des euros en francs suisses</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour transférer de l{"'"}argent depuis la France vers votre compte suisse, deux options principales existent.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>virement SEPA</strong> permet d{"'"}envoyer des euros depuis un compte français vers un compte suisse, de manière simple et peu coûteuse. C{"'"}est la solution idéale pour les premières semaines, avant de percevoir votre premier salaire en CHF.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>virement SWIFT</strong> est utilisé pour les transactions internationales hors zone euro. Il est plus lent et peut engendrer des frais selon les établissements.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les échanges EUR/CHF réguliers, les néobanques comme Alpian offrent des taux de conversion nettement plus avantageux que les banques traditionnelles, un point à ne pas négliger si vous faites régulièrement des allers-retours entre les deux devises. Pour évaluer votre budget global, consultez aussi <a href="/cout-vie-en-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le coût de la vie en Suisse</a>.
            </p>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>Pour résumer</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                La meilleure banque suisse en 2026 dépend avant tout de votre situation et de vos usages. Pour un Français qui s{"'"}installe, <strong style={{ color: "#111827" }}>PostFinance ou Crédit Agricole next bank</strong> facilitent les premières démarches administratives. Pour un usage quotidien sans frais, <strong style={{ color: "#111827" }}>Neon ou Yuh</strong> sont imbattables. Pour les frontaliers et les voyageurs jonglant entre euros et francs suisses, <strong style={{ color: "#111827" }}>Alpian</strong> s{"'"}impose comme la référence digitale. Pour un ancrage physique et un conseiller dédié, <strong style={{ color: "#111827" }}>Migros Bank ou Raiffeisen</strong> offrent le meilleur rapport qualité-prix parmi les établissements traditionnels. Et si vous vous installez dans un canton précis, explorez toujours l{"'"}offre de la banque cantonale locale.
              </p>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <SidebarGuides exclude="/meilleure-banque-suisse" />
            </div>
          </aside>
        </div>
      </section>

      {/* À LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827", marginBottom: 32 }}>À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"·"} {a.date}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Banques, fiscalité, bons plans pour bien gérer votre vie en Suisse.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"'"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
