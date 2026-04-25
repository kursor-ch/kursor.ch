import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching carri\ère en Suisse : boostez votre parcours",
  description: "Coaching carri\ère en Suisse : optimisez votre CV, pr\éparez vos entretiens, n\égociez votre salaire et r\éorientez-vous avec un accompagnement personnalis\é.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-coaching", label: "Pourquoi faire appel \à un coach ?" },
  { id: "benefices", label: "Les b\én\éfices concrets" },
  { id: "comment-ca-marche", label: "Comment \ça marche ?" },
  { id: "ce-qui-est-inclus", label: "Ce qui est inclus" },
  { id: "tarifs", label: "Tarifs et formules" },
  { id: "faq", label: "Questions fr\équentes" },
];

const BENEFICES = [
  {
    icon: "\u{1F4C4}",
    title: "CV optimis\é",
    desc: "Un CV adapt\é au march\é suisse, mis en valeur pour passer les filtres ATS et convaincre les recruteurs d\ès les premi\ères secondes.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Entretiens r\éussis",
    desc: "Simulations r\éalistes, retours personnalis\és et techniques \éprouv\ées pour transformer chaque entretien en opportunit\é.",
  },
  {
    icon: "\u{1F4B0}",
    title: "N\égociation salariale",
    desc: "Connaissance des grilles de salaires en Suisse, strat\égies de n\égociation et formulations qui font la diff\érence.",
  },
  {
    icon: "\u{1F9ED}",
    title: "R\éorientation professionnelle",
    desc: "Bilan de comp\étences, identification de vos forces et construction d\’un projet de transition coh\érent avec votre profil.",
  },
];

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Appel de d\écouverte gratuit",
    desc: "Nous \évaluons ensemble votre situation, vos objectifs et vos blocages. Sans engagement, sans pression.",
  },
  {
    num: "2",
    title: "Diagnostic personnalis\é",
    desc: "Analyse de votre CV, de votre profil LinkedIn et de votre positionnement sur le march\é suisse.",
  },
  {
    num: "3",
    title: "Plan d\’action sur-mesure",
    desc: "Construction d\’une feuille de route claire : actions prioritaires, ressources, calendrier r\éaliste.",
  },
  {
    num: "4",
    title: "S\éances de coaching",
    desc: "Sessions individuelles en vis\àoo-vis ou en ligne, centr\ées sur vos avanc\ées et les ajustements n\écessaires.",
  },
  {
    num: "5",
    title: "Suivi et ajustements",
    desc: "Acc\ès \à votre coach entre les s\éances pour r\épondre \à vos questions et maintenir votre dynamique.",
  },
];

const INCLUS_ITEMS = [
  "Audit complet de votre CV et profil LinkedIn",
  "R\é\écriture professionnelle de votre CV (format suisse)",
  "Pr\éparation aux entretiens avec simulations enregistr\ées",
  "Fiche de r\éf\érence sur les salaires par secteur en Suisse",
  "Guide de n\égociation salariale adapt\é au march\é local",
  "Acc\ès \à notre r\éseau de recruteurs partenaires",
  "Suivi par messagerie entre les s\éances",
  "Ressources exclusives : templates, scripts d\’entretien, check-lists",
];

const TARIFS = [
  {
    name: "Essentiel",
    price: "CHF 290",
    duration: "3 s\éances",
    desc: "Id\éal pour cibler un objectif pr\écis : CV, entretien ou n\égociation.",
    items: [
      "3 sessions de 60 min",
      "Audit CV + retours \écrits",
      "Acc\ès aux ressources de base",
    ],
    highlight: false,
  },
  {
    name: "Transition",
    price: "CHF 590",
    duration: "6 s\éances",
    desc: "L\’offre la plus populaire pour une recherche d\’emploi compl\ète ou une r\éorientation.",
    items: [
      "6 sessions de 60 min",
      "CV + LinkedIn optimis\és",
      "Simulations d\’entretiens",
      "Fiche salaires + n\égociation",
      "Suivi messagerie 3 mois",
    ],
    highlight: true,
  },
  {
    name: "Accél\ération",
    price: "CHF 990",
    duration: "10 s\éances",
    desc: "Pour les profils cadres ou les reconversions ambitieuses avec suivi intensif.",
    items: [
      "10 sessions de 60 min",
      "Tout ce qui est inclus dans Transition",
      "Acc\ès r\éseau recruteurs partenaires",
      "Suivi messagerie 6 mois",
    ],
    highlight: false,
  },
];

const FAQ = [
  {
    q: "Le coaching en ligne est-il aussi efficace qu\’en pr\ésentiel ?",
    a: "Oui. Nos coachs ma\îtrisent le format distanciel et nos clients obtiennent des r\ésultats comparables, quelle que soit leur localisation en Suisse ou \à l\’\étranger.",
  },
  {
    q: "En combien de temps puis-je trouver un emploi apr\ès le coaching ?",
    a: "Cela d\épend de votre secteur, de votre profil et de votre investissement personnel. En moyenne, nos clients d\écrochen un entretien en moins de 6 semaines apr\ès la mise \à jour de leur CV.",
  },
  {
    q: "Le coaching est-il adapt\é si je veux me r\éorienter compl\ètement ?",
    a: "Absolument. Le bilan de comp\étences fait partie int\égrante de nos formules Transition et Acc\él\ération. Nous vous aidons \à identifier des secteurs viables et \à valoriser vos comp\étences transf\érables.",
  },
  {
    q: "Vos coachs connaissent-ils les sp\écificit\és du march\é suisse ?",
    a: "C\’est notre coeur de m\étier. Tous nos coachs ont une exp\érience directe du march\é du travail en Suisse (romande, al\émanique, Tessin) et connaissent les attentes des employeurs locaux.",
  },
  {
    q: "Puis-je changer de formule en cours de coaching ?",
    a: "Oui, vous pouvez \évoluer vers une formule sup\érieure \à tout moment, avec d\éduction de ce que vous avez d\éj\à pay\é.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F4B8}", title: "Salaires en Suisse : les chiffres par secteur 2026", readTime: "8 min", category: "Salaire" },
  { icon: "\u{1F393}", title: "Formation professionnelle en Suisse : le guide", readTime: "11 min", category: "Formation" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "EMPLOI", title: "R\édiger un dossier de candidature en Suisse", author: "Laura B.", date: "10 avril 2026", readTime: "6 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "N\égocier son salaire en Suisse : les bons arguments", author: "Karim D.", date: "3 avril 2026", readTime: "5 min" },
  { icon: "\u{1F9ED}", tag: "CARRI\ÈRE", title: "R\éorientation professionnelle : par o\ù commencer ?", author: "Julie M.", date: "22 mars 2026", readTime: "7 min" },
];

const TAGS = ["Coaching carri\ère", "Emploi Suisse", "CV", "Entretien", "N\égociation salariale", "R\éorientation"];

/* ───────── PAGE ───────── */

export default function CoachingCarrierePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Coaching carri{"\è"}re en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>un accompagnement personnalis{"\é"} pour votre succ{"\è"}s</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\É"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\·"} 11 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBARS */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR — SOMMAIRE */}
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
              Le march{"\é"} du travail suisse est exigeant, comp{"\é"}titif et tr{"\è"}s codifi{"\é"}. Un CV mal adapt{"\é"}, un entretien rat{"\é"} ou une n{"\é"}gociation salariale b{"\â"}cl{"\é"}e peuvent vous co{"\û"}ter plusieurs mois de recherche et des milliers de francs de salaire. Le <strong style={{ color: "#111827" }}>coaching carri{"\è"}re</strong> est l{"\’"}outil le plus efficace pour reprendre le contr{"\ô"}le de votre trajectoire professionnelle, que vous cherchiez un nouvel emploi, une promotion ou une r{"\é"}orientation compl{"\è"}te.
            </p>

            {/* A retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le coaching carri\ère acc\él\ère significativement le temps de recherche d\’emploi.",
                  "Un CV optimis\é pour le march\é suisse multiplie les rappels de recruteurs.",
                  "La n\égociation salariale peut repr\ésenter <strong>plusieurs milliers de CHF</strong> par ann\ée.",
                  "Nos coachs sont sp\écialistes du march\é suisse : romand, al\émanique et tessinois.",
                  "Premi\ère consultation <strong>gratuite et sans engagement</strong>.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Pourquoi */}
            <h2 id="pourquoi-coaching" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi faire appel {"\à"} un coach carri{"\è"}re en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse est l{"\’"}un des march{"\é"}s du travail les plus attract ifs au monde, mais aussi l{"\’"}un des plus s{"\é"}lectifs. Les codes culturels varient selon les r{"\é"}gions linguistiques, les entreprises attendent des candidats structur{"\é"}s et pr{"\é"}cis, et les salaires peuvent {"\ê"}tre jusqu{"\’"}\à deux fois sup{"\é"}rieurs \à ceux des pays voisins, \à condition de savoir les n\égocier.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Vous avez besoin d{"\’"}un coach si vous :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "Envoyez des candidatures sans obtenir de r\éponses",
                "\Êtes bloqu\é(e) en entretien face aux questions difficiles",
                "Ne savez pas comment valoriser votre profil \étranger en Suisse",
                "Souhaitez changer de secteur sans savoir par o\ù commencer",
                "Sentez que vous m\éritez mieux mais ne savez pas comment le d\émontrer",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Section 2 — Bénéfices */}
            <h2 id="benefices" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les b{"\é"}n{"\é"}fices concrets du coaching carri{"\è"}re</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>Notre approche couvre les quatre leviers cl{"\é"}s de votre succ{"\è"}s professionnel :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: 32 }}>
              {BENEFICES.map((b) => (
                <div key={b.title} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span style={{ fontSize: 24 }}>{b.icon}</span>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>{b.title}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 3 — Comment ça marche */}
            <h2 id="comment-ca-marche" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment {"\ç"}a marche ? Notre processus en 5 {"\é"}tapes</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Chaque parcours est unique, mais notre m{"\é"}thode suit une progression {"\é"}prouv{"\é"}e :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\À"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Toutes nos sessions sont disponibles <strong>en ligne ou en pr\ésentiel</strong> (\à Gen\ève, Lausanne, Zurich, Berne).",
                  "Chaque coach parle <strong>au moins deux langues nationales</strong> suisses.",
                  "Nous adaptons le rythme \à vos contraintes : emploi du temps charg\é, garde d\’enfants, missions \à l\’\étranger.",
                  "Un <strong>compte rendu \écrit</strong> est fourni apr\ès chaque session.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Ce qui est inclus */}
            <h2 id="ce-qui-est-inclus" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce qui est inclus dans votre coaching</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Au-del\à des sessions individuelles, vous b\én\éficiez d\’un ensemble de ressources et d\’outils con\çus sp\écifiquement pour le march\é suisse :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {INCLUS_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, color: "#111827" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\✓"}</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Section 5 — Tarifs */}
            <h2 id="tarifs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 8, scrollMarginTop: 80 }}>Tarifs et formules de coaching</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Trois formules adapt\ées \à vos besoins et \à votre budget. Toutes incluent l\’appel de d\écouverte gratuit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: 12 }}>
              {TARIFS.map((t) => (
                <div key={t.name} className="rounded-xl flex flex-col" style={{ border: t.highlight ? "2px solid #D97706" : "1px solid #E2E8F0", backgroundColor: t.highlight ? "#FFFBF0" : "#FFFFFF", padding: "24px" }}>
                  {t.highlight && (
                    <span className="inline-block font-body uppercase rounded-full self-start" style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.15)", padding: "3px 10px", marginBottom: 10 }}>Plus populaire</span>
                  )}
                  <p className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>{t.name}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B", marginTop: 4, marginBottom: 12 }}>{t.duration}</p>
                  <p className="font-heading" style={{ fontSize: 28, fontWeight: 700, color: "#D97706", marginBottom: 4 }}>{t.price}</p>
                  <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5, marginBottom: 16 }}>{t.desc}</p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2" style={{ flexGrow: 1 }}>
                    {t.items.map((item) => (
                      <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 13, color: "#475569" }}>
                        <span style={{ color: "#D97706", fontWeight: 600, flexShrink: 0 }}>{"\✓"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="font-body rounded-lg border-0 cursor-pointer w-full" style={{ backgroundColor: t.highlight ? "#D97706" : "#111827", color: "#FFFFFF", fontSize: 13, fontWeight: 500, padding: "11px 16px", marginTop: 20 }}>
                    Choisir cette formule
                  </button>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 13, color: "#94A3B8", marginBottom: 32 }}>
              Prix en CHF TTC. Paiement en plusieurs fois possible. Facture fournie pour remboursement employeur ou ch\ômage (selon conditions).
            </p>

            {/* Section 6 — FAQ */}
            <h2 id="faq" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Questions fr\équentes</h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {FAQ.map((item) => (
                <div key={item.q} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <p className="font-body" style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{item.q}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Pr\êt(e) \à acc\él\érer votre carri\ère en Suisse ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Consultation de d\écouverte gratuite. Sans engagement. En fran\çais, allemand ou anglais.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                R\éserver mon appel gratuit {"\→"}
              </button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r\ésum\é</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le coaching carri\ère n\’est pas un luxe : c\’est un investissement rentable, surtout en Suisse o\ù les salaires \élev\és rendent chaque n\égociation d\écisive. Que vous souhaitiez <strong style={{ color: "#111827" }}>optimiser votre CV</strong>, <strong style={{ color: "#111827" }}>r\éussir vos entretiens</strong>, <strong style={{ color: "#111827" }}>n\égocier un meilleur salaire</strong> ou <strong style={{ color: "#111827" }}>amorcer une r\éorientation</strong>, nos coachs sp\écialistes du march\é suisse sont l\à pour vous accompagner \à chaque \étape.
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Appel gratuit</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>30 minutes avec un coach sp\écialiste du march\é suisse. Sans engagement.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  R\éserver mon appel {"\→"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"\·"} 30 min {"\·"} Sans engagement</p>
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
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles {"\→"}</span>
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
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Conseils carri\ère chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Offres d\’emploi, astuces CV, tendances salariales. Un email, une fois par semaine.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"\’"}inscrire {"\→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
