import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { ARTICLE_IMAGES, getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "3e pilier suisse 2026 : guide complet pour bien le choisir",
  description: "Pilier 3a ou 3b, banque ou assurance, multi-comptes, rattrapage 2026 : le guide complet pour optimiser votre 3e pilier suisse et économiser des milliers.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "indispensable", label: "Pourquoi le 3e pilier est devenu indispensable" },
  { id: "3a-ou-3b", label: "3a ou 3b : ne pas confondre" },
  { id: "banque-ou-assurance", label: "Banque ou assurance" },
  { id: "multi-comptes", label: "La stratégie des multi-comptes" },
  { id: "rattrapage-2026", label: "Nouveauté 2026 : le rattrapage" },
  { id: "frontaliers-tou", label: "Frontaliers : le statut TOU" },
  { id: "erreurs", label: "Les erreurs à éviter" },
];

const A_RETENIR = [
  "Le plafond 2025-2026 est de <strong>7 258 CHF/an</strong> pour les salariés affiliés à une caisse de pension, et 20 % du revenu (max. 36 288 CHF) pour les indépendants sans 2e pilier.",
  "<strong>Nouveauté 2026 :</strong> il est désormais possible de rattraper les versements 3a manqués des années précédentes, sous conditions.",
  "Le <strong>3a (lié)</strong> offre une déduction fiscale immédiate ; le <strong>3b (libre)</strong> n'est déductible qu'à Genève et Fribourg sous conditions.",
  "Les frontaliers ne bénéficient de la déduction qu'avec le <strong>statut de quasi-résident (TOU)</strong>, soit 90 % des revenus du foyer imposés en Suisse.",
  "Ouvrir <strong>plusieurs comptes 3a</strong> permet d'échelonner les retraits à la retraite et d'économiser des milliers de francs d'impôts.",
  "<strong>Banque vs assurance :</strong> la banque pour la flexibilité et le rendement, l'assurance pour la couverture décès/invalidité.",
];

const ERREURS = [
  {
    title: "Verser à la dernière minute",
    desc: "Un versement effectué le 28 décembre rapporte autant fiscalement qu'un versement étalé sur l'année, mais perd 12 mois d'intérêts composés. Mensualisez par ordre permanent.",
  },
  {
    title: "Garder un seul compte 3a",
    desc: "L'erreur la plus coûteuse sur le long terme, car il est impossible d'échelonner les retraits avec un compte unique.",
  },
  {
    title: "Choisir l'assurance par réflexe",
    desc: "Beaucoup de souscripteurs signent un 3a assurance par habitude alors que leurs besoins relèvent du bancaire. Comparez systématiquement les TER.",
  },
  {
    title: "Oublier la clause bénéficiaire",
    desc: "L'ordre légal de succession peut être modifié pour le 3a, notamment pour protéger un concubin ou rééquilibrer entre enfants. À formaliser par écrit.",
  },
];


const RELATED_ARTICLES = [
  { href: "/impot-suisse", icon: "\u{1F4CB}", tag: "PATRIMOINE", title: "Impôts en Suisse : comment réduire sa facture fiscale légalement", author: "Marc L.", date: "14 avril 2026", readTime: "8 min" },
  { href: "/analyse-lpp", icon: "\u{1F4B0}", tag: "FINANCES", title: "LPP 2025 : ce qui change pour votre 2e pilier", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { href: "/assurance-maladie", icon: "\u{1F3E5}", tag: "ASSURANCE", title: "Assurance-vie en Suisse : avantages, types et fiscalité", author: "Julie M.", date: "20 mars 2026", readTime: "9 min" },
];

/* ───────── PAGE ───────── */

export default function RetraiteSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>PATRIMOINE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            3e pilier suisse : le guide 2026<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>pour bien choisir et maximiser ses avantages</span>
          </h1>
          <p className="font-body italic" style={{ fontSize: 16, color: "#64748B", marginTop: 16, lineHeight: 1.6 }}>
            Pilier 3a, pilier 3b, banque ou assurance, stratégie multi-comptes, rattrapage des cotisations manquées : tout ce qui change en 2026.
          </p>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 12 min de lecture</p>
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
              const img = getArticleImage("/retraite-suisse");
              return img ? <GuideHeroImage src={img.src} alt={img.alt} /> : null;
            })()}

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {A_RETENIR.map((item, idx) => (
                  <li key={idx} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="indispensable" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Pourquoi le 3e pilier est devenu indispensable
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les 1er et 2e piliers ne couvrent en moyenne que <strong style={{ color: "#111827" }}>55 % à 60 % du dernier salaire</strong> une fois à la retraite. Pour les revenus supérieurs à 90 000 CHF annuels et pour les profils ayant connu des interruptions de carrière (études, expatriation, maternité, chômage), le ratio descend souvent sous 50 %. Le 3e pilier comble cet écart tout en offrant des avantages fiscaux que peu de pays accordent à leurs épargnants.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour un salarié au taux marginal d{"'"}imposition de 35 %, chaque versement de 7 258 CHF dans le 3a génère environ <strong style={{ color: "#111827" }}>2 540 CHF d{"'"}économie d{"'"}impôt immédiate</strong>. Sur 30 ans de carrière, c{"'"}est plus de 75 000 CHF d{"'"}impôts économisés, sans compter les intérêts capitalisés et la croissance des fonds de prévoyance, ce qui en fait l{"'"}un des leviers les plus efficaces pour <Link href="/analyse-lpp" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le placement suisse</Link> à long terme.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Si vous envisagez de vous expatrier à l{"'"}heure de la retraite, voyez aussi notre guide pour <Link href="/prendre-sa-retraite-en-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>prendre sa retraite en Suisse</Link> : permis B retraité, AVS, fiscalité et budget mensuel y sont détaillés étape par étape.
            </p>

            {/* Section 2 */}
            <h2 id="3a-ou-3b" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              3a ou 3b : ne pas confondre les deux logiques
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>pilier 3a (lié)</strong> est avant tout un produit fiscal. Les versements sont plafonnés, déductibles du revenu imposable, et le capital est bloqué jusqu{"'"}à 5 ans avant l{"'"}âge légal de la retraite, sauf cas exceptionnels (achat de résidence principale, départ définitif de Suisse, passage à l{"'"}indépendance, rachat LPP). Au retrait, vous payez un impôt unique à taux réduit, séparé du reste de vos revenus.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>pilier 3b (libre)</strong> est une enveloppe d{"'"}épargne classique : compte, assurance-vie ou placement. Aucun plafond, aucune contrainte de retrait, mais aucune déduction fiscale dans la majorité des cantons (sauf Genève et Fribourg, sous conditions). Le 3b prend tout son sens pour les épargnants ayant déjà saturé leur 3a ou souhaitant conserver une liquidité totale.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>La règle de bon sens :</strong> on remplit le 3a en priorité, et on ouvre un 3b en complément.
              </p>
            </div>

            {/* Section 3 */}
            <h2 id="banque-ou-assurance" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Banque ou assurance : deux philosophies opposées
            </h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 20 }}>
              {[
                {
                  label: "Le 3a bancaire",
                  desc: "Fonctionne comme un compte d'épargne ou de placement. Vous versez ce que vous voulez, quand vous voulez, jusqu'au plafond annuel. Vous pouvez investir en fonds de prévoyance (jusqu'à 99 % en actions sur certaines solutions), ce qui booste considérablement le rendement long terme. Frais annuels : généralement 0,3 à 1 % selon la stratégie de placement.",
                },
                {
                  label: "Le 3a assurance",
                  desc: "Un contrat à prime fixe sur durée déterminée, qui combine épargne et couverture risque (décès, invalidité). L'avantage : vos proches sont protégés financièrement même si vous décédez tôt. Les inconvénients : flexibilité réduite, frais d'acquisition élevés les premières années, et valeur de rachat faible en cas de résiliation anticipée.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "18px 22px" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour la majorité des contribuables, un <strong style={{ color: "#111827" }}>3a bancaire en fonds de prévoyance</strong> offre le meilleur rapport rendement/coût. Le 3a assurance se justifie surtout pour les familles avec enfants à charge cherchant à sécuriser un capital décès.
            </p>

            {/* Section 4 */}
            <h2 id="multi-comptes" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              La stratégie des multi-comptes : le levier sous-exploité
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Au moment de la retraite, l{"'"}administration additionne tous les retraits de capital de prévoyance d{"'"}une même année pour calculer l{"'"}impôt, qui est progressif. Plus le retrait est important, plus le taux marginal grimpe.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La parade : ouvrir <strong style={{ color: "#111827" }}>3 à 5 comptes 3a différents</strong> pendant la vie active, puis les retirer sur des années fiscales distinctes entre 60 et 70 ans. Sur un capital total de 300 000 CHF, échelonner les retraits sur 5 ans plutôt qu{"'"}en une fois peut faire économiser <strong style={{ color: "#111827" }}>15 000 à 25 000 CHF d{"'"}impôts</strong> selon le canton et selon <Link href="/impot-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>les taux d{"'"}imposition en Suisse</Link> applicables à votre commune.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>À noter :</strong> on ne peut pas scinder un compte unique au moment du retrait. La planification doit se faire pendant la phase d{"'"}épargne.
              </p>
            </div>

            {/* Section 5 */}
            <h2 id="rattrapage-2026" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Nouveauté 2026 : le rattrapage des cotisations manquées
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Jusqu{"'"}en 2025, une année de cotisation 3a non utilisée était définitivement perdue. Depuis le <strong style={{ color: "#111827" }}>1er janvier 2026</strong>, la loi autorise enfin le rattrapage rétroactif des versements manqués sur les années précédentes, dans la limite du plafond annuel de chaque exercice concerné.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Un cadre qui n{"'"}a pas versé sur son 3a depuis quelques années peut, dès 2026, effectuer un versement de rattrapage cumulant plusieurs années, <strong style={{ color: "#111827" }}>entièrement déductible du revenu de l{"'"}année en cours</strong>. Pour les hauts revenus, <Link href="/actualite/rachat-retroactif-3a-2026-guide" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le rachat rétroactif du 3a</Link> est l{"'"}équivalent d{"'"}un rachat LPP plus souple, sans délai de blocage de trois ans avant retrait en capital.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir : rattrapage rétroactif 2026</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Rattrapage autorisé sur les années précédentes, dans la limite du plafond annuel de chaque exercice.",
                  "La déduction s'impute sur le revenu de <strong>l'année du versement de rattrapage</strong>.",
                  "Condition : être affilié à une institution de prévoyance professionnelle au moment du versement.",
                  "Cumulable avec le versement ordinaire de l'année en cours (7 258 CHF + rattrapage).",
                ].map((item, idx) => (
                  <li key={idx} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <h2 id="frontaliers-tou" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Frontaliers : le statut TOU change tout
            </h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Tous les frontaliers travaillant en Suisse peuvent souscrire un 3a. Mais depuis la réforme de janvier 2021, <strong style={{ color: "#111827" }}>l{"'"}avantage fiscal n{"'"}existe que pour ceux qui obtiennent le statut de quasi-résident</strong> via la Taxation Ordinaire Ultérieure (TOU).
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 16 }}>
              {[
                {
                  label: "Condition principale",
                  desc: "90 % des revenus mondiaux du foyer fiscal doivent être imposés en Suisse. Si le conjoint travaille en France ou si vous percevez des revenus locatifs significatifs côté français, le seuil tombe et le statut TOU devient inaccessible.",
                },
                {
                  label: "Démarche et délai",
                  desc: "La demande doit être déposée avant le 31 mars de l'année suivant l'imposition.",
                },
                {
                  label: "Obligation déclarative côté français",
                  desc: "Le 3e pilier suisse n'est pas imposé en France, mais doit être déclaré chaque année dans la rubrique \"comptes détenus à l'étranger\" (formulaire 3916).",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "18px 22px" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Sans le statut TOU, ouvrir un 3a reste possible mais l{"'"}avantage fiscal disparaît : le versement ne sera pas déductible du revenu imposable suisse.
            </p>

            {/* Section 7 */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>
              Les erreurs à éviter
            </h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>⚠</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Optimisez votre prévoyance avec un expert</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Pilier 3a, rattrapage rétroactif, stratégie multi-comptes : nos guides décryptent chaque situation.</p>
              <Link href="/prevoyance" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
                Consulter nos guides prévoyance {"\u2192"}
              </Link>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En résumé</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le 3e pilier reste en 2026 le levier d{"'"}épargne fiscalement le plus puissant accessible aux contribuables suisses et aux frontaliers ayant le statut TOU. La règle d{"'"}or : maximiser le 3a chaque année, ouvrir plusieurs comptes pour préparer l{"'"}échelonnement des retraits, et exploiter dès maintenant la nouveauté du <strong style={{ color: "#111827" }}>rattrapage rétroactif</strong> introduite en 2026. Privilégiez le 3a bancaire en fonds de prévoyance sauf besoin spécifique de couverture risque, et faites valider votre stratégie par un conseiller en prévoyance dès que votre situation se complexifie (frontalier, indépendant, propriétaire). Plus vous commencez tôt, plus l{"'"}effet capitalisation et déduction fiscale transforme votre 3e pilier en véritable patrimoine.
              </p>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Calculez votre économie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Entrez votre email et recevez notre calculateur 3a gratuit avec les plafonds 2026.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  Recevoir le calculateur {"\u2192"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>
                  Gratuit {"\u00B7"} Mis à jour 2026 {"\u00B7"} Immédiat
                </p>
              </div>
              <SidebarGuides exclude="/retraite-suisse" />
            </div>
          </aside>
        </div>
      </section>

      {/* À LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>À lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles {"\u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <Link key={a.title} href={a.href} className="rounded-xl bg-white overflow-hidden block no-underline" style={{ border: "1px solid #E2E8F0", color: "inherit" }}>
                {ARTICLE_IMAGES[a.href] ? (
                  <div className="relative w-full" style={{ height: 160, backgroundColor: "#FFFBF0" }}>
                    <Image
                      src={ARTICLE_IMAGES[a.href].src}
                      alt={ARTICLE_IMAGES[a.href].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                )}
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"\u00B7"} {a.date}</p>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
            Prévoyance, fiscalité, investissement. Un email par semaine, zéro superflu.
          </p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>
              S{"'"}inscrire {"\u2192"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
