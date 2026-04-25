import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimisation fiscale Suisse 2026 : 6 leviers pour payer moins",
  description: "Découvrez les 6 leviers d’optimisation fiscale en Suisse 2026 : prévoyance, immobilier, retraite, dividendes. Économisez des milliers de francs légalement.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "systeme-fiscal", label: "Comprendre le système fiscal" },
  { id: "prevoyance", label: "La prévoyance : levier universel" },
  { id: "immobilier", label: "Immobilier : agir avant 2028" },
  { id: "retraite", label: "Préparer la retraite" },
  { id: "entrepreneurs", label: "Entrepreneurs : salaire vs dividende" },
  { id: "frontaliers", label: "Frontaliers et expatriés" },
  { id: "calendrier", label: "Calendrier fiscal" },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Créer sa société en Suisse : SA, Sàrl ou raison individuelle ?", readTime: "14 min", category: "Entreprendre" },
  { icon: "\u{1F4B0}", title: "Salaire en Suisse : grilles, négociation et charges", readTime: "12 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "3ème pilier suisse : le guide complet", readTime: "15 min", category: "Patrimoine" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "PATRIMOINE", title: "Analyse LPP 2026 : ce qui change pour votre retraite", author: "Marc T.", date: "14 avril 2026", readTime: "8 min" },
  { icon: "\u{1F4B8}", tag: "FINANCES", title: "Assurance maladie en Suisse : choisir la bonne caisse", author: "Équipe Kursor", date: "2 avril 2026", readTime: "10 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Achat immobilier en Suisse : règles, coûts et pièges", author: "Sophie R.", date: "18 mars 2026", readTime: "12 min" },
];

const TAGS = ["Optimisation fiscale", "Impôts Suisse", "3e pilier", "LPP", "Frontalier", "Entrepreneur", "Prévoyance"];

/* ───────── PAGE ───────── */

export default function FiscaliteBusinessPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>ENTREPRENDRE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Optimisation fiscale en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet 2026</span>
          </h1>
          <p className="font-body" style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, marginTop: 16, maxWidth: 640 }}>
            Les leviers concrets pour réduire votre charge fiscale, que vous soyez résident, frontalier ou entrepreneur.
          </p>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 · 16 min de lecture</p>
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
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              La Suisse offre l’un des cadres fiscaux les plus favorables d’Europe, mais ses subtilités cantonales et fédérales rendent l’optimisation difficile sans méthode. Entre prévoyance, immobilier, choix de domicile et statuts spécifiques, les leviers existent, encore faut-il les actionner au bon moment et dans le bon ordre. Ce guide rassemble les stratégies réellement efficaces en 2026, du résident suisse au frontalier genevois en passant par l’expatrié français et le dirigeant de PME.
            </p>

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La prévoyance liée 3a permet de déduire jusqu’à <strong>7 258 CHF/an</strong> (salariés) ou <strong>36 288 CHF</strong> (indépendants sans 2e pilier).",
                  "Depuis 2026, il est possible de <strong>rattraper les versements 3a manqués</strong> des années précédentes.",
                  "Les rachats LPP sont intégralement déductibles, mais <strong>bloquent les capitaux 3 ans</strong> avant tout retrait.",
                  "L’échelonnement des retraits 2e et 3e piliers peut économiser <strong>plusieurs dizaines de milliers de francs</strong>.",
                  "Les frontaliers genevois doivent demander le <strong>statut quasi-résident (TOU)</strong> avant le 31 mars.",
                  "La suppression de la valeur locative, prévue dès <strong>2028</strong>, supprimera la plupart des déductions immobilières au fédéral.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="systeme-fiscal" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comprendre le système fiscal suisse en 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’imposition suisse repose sur <strong style={{ color: "#111827" }}>trois niveaux superposés</strong> : la Confédération, le canton et la commune. L’impôt fédéral direct est uniforme sur tout le territoire, mais les impôts cantonaux et communaux varient massivement. Un même revenu peut être taxé près de deux fois plus à Genève qu’à Zoug.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Cette mosaïque crée à la fois la complexité et l’opportunité : le <strong style={{ color: "#111827" }}>choix du domicile fiscal</strong> est, à lui seul, l’un des leviers les plus puissants pour qui peut le déplacer librement. L’impôt est progressif : plus le revenu cumulé d’une année est élevé, plus le taux marginal grimpe. Cette progressivité explique pourquoi <strong style={{ color: "#111827" }}>lisser les revenus exceptionnels</strong> sur plusieurs années est presque toujours rentable.
            </p>

            {/* Section 2 */}
            <h2 id="prevoyance" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La prévoyance : le levier universel</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>3e pilier A</strong> reste le geste le plus rentable accessible à tous. Chaque franc versé est déduit du revenu imposable au niveau fédéral et cantonal. Pour un contribuable au taux marginal de 35 %, un versement de 7 258 CHF représente une économie immédiate d’environ <strong style={{ color: "#111827" }}>2 540 CHF</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La nouveauté 2026, soit la possibilité de <strong style={{ color: "#111827" }}>rattraper les années où vous n’avez pas versé le maximum</strong>, démultiplie ce levier pour quiconque a sous-utilisé son pilier 3a par le passé.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le <strong style={{ color: "#111827" }}>rachat dans la caisse de pension (LPP)</strong> complète idéalement le dispositif. Particulièrement utile dans les 5 à 10 ans précédant la retraite, il convertit un revenu lourdement taxé en capital de prévoyance qui sera retiré plus tard à un taux réduit. Trois précautions : respecter le <strong style={{ color: "#111827" }}>délai de blocage de 3 ans</strong> avant tout retrait, échelonner les rachats pour maximiser l’effet de progressivité, et vérifier le potentiel de rachat sur le certificat LPP annuel.
            </p>

            {/* Section 3 */}
            <h2 id="immobilier" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Immobilier : agir avant la réforme de 2028</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Tant que la <strong style={{ color: "#111827" }}>valeur locative</strong> existe, les propriétaires conservent un arsenal de déductions. Les frais d’entretien et de rénovation sont déductibles, soit au forfait (10 % de la valeur locative pour un bien détenu moins de 10 ans, 20 % au-delà), soit selon les frais effectifs si ceux-ci dépassent le forfait.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les <strong style={{ color: "#111827" }}>travaux énergétiques</strong> (isolation, pompe à chaleur, fenêtres) ouvrent une déduction supplémentaire au niveau fédéral, et peuvent même être étalés sur trois périodes fiscales depuis 2020.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>Important :</strong> la suppression de la valeur locative, votée en 2025 et applicable au plus tôt en <strong>2028</strong>, fera disparaître la plupart de ces déductions au fédéral. Si vous envisagez une rénovation lourde, réalisez-la avant l’entrée en vigueur. Les frais d’entretien des biens en location resteront déductibles.
              </p>
            </div>

            {/* Section 4 */}
            <h2 id="retraite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Préparer la retraite : capital, rente et échelonnement</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Au moment de toucher la prévoyance, deux décisions changent tout. La première : <strong style={{ color: "#111827" }}>capital ou rente ?</strong> Le capital est imposé une seule fois, à un taux séparé et réduit ; la rente est intégrée chaque année au revenu imposable. Sur 20 ans de retraite, l’écart fiscal cumulé peut dépasser <strong style={{ color: "#111827" }}>100 000 CHF</strong> pour un avoir conséquent.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La seconde : <strong style={{ color: "#111827" }}>échelonner les retraits</strong>. L’administration additionne tous les retraits de capital de prévoyance d’une même année (y compris ceux du conjoint) pour calculer l’impôt. En répartissant les retraits du 3a, du libre passage et de la LPP sur trois à cinq années différentes, et en utilisant la retraite partielle (jusqu’à 3 étapes autorisées par la réforme AVS 2024), un couple peut <strong style={{ color: "#111827" }}>diviser sa facture fiscale de prévoyance par deux</strong>.
            </p>

            {/* Section 5 */}
            <h2 id="entrepreneurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Entrepreneurs : équilibrer salaire et dividende</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les détenteurs d’au moins <strong style={{ color: "#111827" }}>10 % du capital</strong> d’une SA ou Sàrl bénéficient d’une imposition partielle des dividendes : 70 % seulement sont imposés au fédéral, et certains cantons descendent à 50 %. Couplé à l’absence de cotisations sociales sur les dividendes, l’avantage est réel, mais conditionné à un salaire conforme aux usages du marché, faute de quoi l’autorité fiscale requalifie le dividende en revenu salarial.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Avant une cession d’entreprise, deux réflexes : transformer une raison individuelle en société de capitaux <strong style={{ color: "#111827" }}>au moins 5 ans avant la vente</strong> (sinon, les réserves latentes seront imposées rétroactivement), et utiliser le potentiel de rachat LPP pour transférer la fortune non nécessaire à l’exploitation vers la prévoyance privée.
            </p>

            {/* Section 6 */}
            <h2 id="frontaliers" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Profils internationaux : frontaliers et expatriés</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les frontaliers genevois ont une option stratégique : le <strong style={{ color: "#111827" }}>statut de quasi-résident (TOU)</strong>. Si plus de 90 % de vos revenus mondiaux proviennent de Suisse, vous pouvez déduire le 3e pilier A, les frais de transport réels, les frais de garde et les frais médicaux, exactement comme un résident. La demande doit être déposée <strong style={{ color: "#111827" }}>avant le 31 mars</strong> de l’année suivant l’imposition.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les résidents français fortunés peuvent négocier un <strong style={{ color: "#111827" }}>forfait fiscal</strong> dans plusieurs cantons (Vaud, Valais, Genève sous conditions, Tessin) : l’impôt est calculé sur les dépenses de train de vie, pas sur les revenus réels. À l’inverse, lors d’un retrait de capital de prévoyance après un retour en France, l’impôt à la source suisse peut être intégralement récupéré sur preuve de l’imposition française.
            </p>

            {/* Section 7 */}
            <h2 id="calendrier" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Calendrier fiscal : les échéances à ne pas manquer</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>L’optimisation se joue toute l’année :</p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {[
                { date: "31 décembre", desc: "Dernière date pour les versements 3a et rachats LPP de l’année en cours" },
                { date: "31 mars", desc: "Délai impératif pour la rectification de l’impôt à la source ou la demande TOU à Genève" },
                { date: "Mai-juin", desc: "Déclaration française pour les frontaliers" },
                { date: "Septembre", desc: "Bon moment pour planifier les retraits de capital de l’année suivante" },
              ].map((item) => (
                <div key={item.date} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 14, minWidth: 110 }}>{item.date}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item.desc}</span>
                </div>
              ))}
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En résumé</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Optimiser sa fiscalité en Suisse n’est pas une question d’astuce isolée mais d’une <strong style={{ color: "#111827" }}>stratégie cohérente étalée sur l’année et sur la vie</strong>. La prévoyance vieillesse (3a + rachats LPP) reste le levier universel ; l’échelonnement des retraits de capital fait économiser des dizaines de milliers de francs ; le choix du canton et du statut fiscal peut transformer durablement votre charge. Anticipez : la réforme de la valeur locative prévue dès 2028 et les nouveautés 2026 sur le rattrapage du 3a redessinent déjà le paysage. Pour les situations complexes, notamment les entrepreneurs, expatriés et propriétaires multi-cantonaux, un fiduciaire ou conseiller fiscal rentabilise très vite ses honoraires.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Vous voulez optimiser votre situation fiscale ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos experts analysent votre déclaration et identifient les déductions que vous avez manquées. Diagnostic gratuit en 2 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Découvrir nos formations →</button>
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simulez votre économie fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Recevez une estimation gratuite des déductions auxquelles vous avez droit.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Estimer mes économies →</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit · 2 minutes · Résultats immédiats</p>
              </div>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>{a.icon}</div>
                      <div>
                        <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</p>
                        <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{a.readTime} · {a.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* À LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles →</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} · {a.date}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Les pièges à éviter, les économies à faire.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S’inscrire →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
