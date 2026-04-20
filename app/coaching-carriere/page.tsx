import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching carri\u00E8re en Suisse : boostez votre parcours",
  description: "Coaching carri\u00E8re en Suisse : optimisez votre CV, pr\u00E9parez vos entretiens, n\u00E9gociez votre salaire et r\u00E9orientez-vous avec un accompagnement personnalis\u00E9.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "pourquoi-coaching", label: "Pourquoi faire appel \u00E0 un coach ?" },
  { id: "benefices", label: "Les b\u00E9n\u00E9fices concrets" },
  { id: "comment-ca-marche", label: "Comment \u00E7a marche ?" },
  { id: "ce-qui-est-inclus", label: "Ce qui est inclus" },
  { id: "tarifs", label: "Tarifs et formules" },
  { id: "faq", label: "Questions fr\u00E9quentes" },
];

const BENEFICES = [
  {
    icon: "\u{1F4C4}",
    title: "CV optimis\u00E9",
    desc: "Un CV adapt\u00E9 au march\u00E9 suisse, mis en valeur pour passer les filtres ATS et convaincre les recruteurs d\u00E8s les premi\u00E8res secondes.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Entretiens r\u00E9ussis",
    desc: "Simulations r\u00E9alistes, retours personnalis\u00E9s et techniques \u00E9prouv\u00E9es pour transformer chaque entretien en opportunit\u00E9.",
  },
  {
    icon: "\u{1F4B0}",
    title: "N\u00E9gociation salariale",
    desc: "Connaissance des grilles de salaires en Suisse, strat\u00E9gies de n\u00E9gociation et formulations qui font la diff\u00E9rence.",
  },
  {
    icon: "\u{1F9ED}",
    title: "R\u00E9orientation professionnelle",
    desc: "Bilan de comp\u00E9tences, identification de vos forces et construction d\u2019un projet de transition coh\u00E9rent avec votre profil.",
  },
];

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Appel de d\u00E9couverte gratuit",
    desc: "Nous \u00E9valuons ensemble votre situation, vos objectifs et vos blocages. Sans engagement, sans pression.",
  },
  {
    num: "2",
    title: "Diagnostic personnalis\u00E9",
    desc: "Analyse de votre CV, de votre profil LinkedIn et de votre positionnement sur le march\u00E9 suisse.",
  },
  {
    num: "3",
    title: "Plan d\u2019action sur-mesure",
    desc: "Construction d\u2019une feuille de route claire : actions prioritaires, ressources, calendrier r\u00E9aliste.",
  },
  {
    num: "4",
    title: "S\u00E9ances de coaching",
    desc: "Sessions individuelles en vis\u00E0oo-vis ou en ligne, centr\u00E9es sur vos avanc\u00E9es et les ajustements n\u00E9cessaires.",
  },
  {
    num: "5",
    title: "Suivi et ajustements",
    desc: "Acc\u00E8s \u00E0 votre coach entre les s\u00E9ances pour r\u00E9pondre \u00E0 vos questions et maintenir votre dynamique.",
  },
];

const INCLUS_ITEMS = [
  "Audit complet de votre CV et profil LinkedIn",
  "R\u00E9\u00E9criture professionnelle de votre CV (format suisse)",
  "Pr\u00E9paration aux entretiens avec simulations enregistr\u00E9es",
  "Fiche de r\u00E9f\u00E9rence sur les salaires par secteur en Suisse",
  "Guide de n\u00E9gociation salariale adapt\u00E9 au march\u00E9 local",
  "Acc\u00E8s \u00E0 notre r\u00E9seau de recruteurs partenaires",
  "Suivi par messagerie entre les s\u00E9ances",
  "Ressources exclusives : templates, scripts d\u2019entretien, check-lists",
];

const TARIFS = [
  {
    name: "Essentiel",
    price: "CHF 290",
    duration: "3 s\u00E9ances",
    desc: "Id\u00E9al pour cibler un objectif pr\u00E9cis : CV, entretien ou n\u00E9gociation.",
    items: [
      "3 sessions de 60 min",
      "Audit CV + retours \u00E9crits",
      "Acc\u00E8s aux ressources de base",
    ],
    highlight: false,
  },
  {
    name: "Transition",
    price: "CHF 590",
    duration: "6 s\u00E9ances",
    desc: "L\u2019offre la plus populaire pour une recherche d\u2019emploi compl\u00E8te ou une r\u00E9orientation.",
    items: [
      "6 sessions de 60 min",
      "CV + LinkedIn optimis\u00E9s",
      "Simulations d\u2019entretiens",
      "Fiche salaires + n\u00E9gociation",
      "Suivi messagerie 3 mois",
    ],
    highlight: true,
  },
  {
    name: "Accél\u00E9ration",
    price: "CHF 990",
    duration: "10 s\u00E9ances",
    desc: "Pour les profils cadres ou les reconversions ambitieuses avec suivi intensif.",
    items: [
      "10 sessions de 60 min",
      "Tout ce qui est inclus dans Transition",
      "Acc\u00E8s r\u00E9seau recruteurs partenaires",
      "Suivi messagerie 6 mois",
    ],
    highlight: false,
  },
];

const FAQ = [
  {
    q: "Le coaching en ligne est-il aussi efficace qu\u2019en pr\u00E9sentiel ?",
    a: "Oui. Nos coachs ma\u00EEtrisent le format distanciel et nos clients obtiennent des r\u00E9sultats comparables, quelle que soit leur localisation en Suisse ou \u00E0 l\u2019\u00E9tranger.",
  },
  {
    q: "En combien de temps puis-je trouver un emploi apr\u00E8s le coaching ?",
    a: "Cela d\u00E9pend de votre secteur, de votre profil et de votre investissement personnel. En moyenne, nos clients d\u00E9crochen un entretien en moins de 6 semaines apr\u00E8s la mise \u00E0 jour de leur CV.",
  },
  {
    q: "Le coaching est-il adapt\u00E9 si je veux me r\u00E9orienter compl\u00E8tement ?",
    a: "Absolument. Le bilan de comp\u00E9tences fait partie int\u00E9grante de nos formules Transition et Acc\u00E9l\u00E9ration. Nous vous aidons \u00E0 identifier des secteurs viables et \u00E0 valoriser vos comp\u00E9tences transf\u00E9rables.",
  },
  {
    q: "Vos coachs connaissent-ils les sp\u00E9cificit\u00E9s du march\u00E9 suisse ?",
    a: "C\u2019est notre coeur de m\u00E9tier. Tous nos coachs ont une exp\u00E9rience directe du march\u00E9 du travail en Suisse (romande, al\u00E9manique, Tessin) et connaissent les attentes des employeurs locaux.",
  },
  {
    q: "Puis-je changer de formule en cours de coaching ?",
    a: "Oui, vous pouvez \u00E9voluer vers une formule sup\u00E9rieure \u00E0 tout moment, avec d\u00E9duction de ce que vous avez d\u00E9j\u00E0 pay\u00E9.",
  },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F4B8}", title: "Salaires en Suisse : les chiffres par secteur 2026", readTime: "8 min", category: "Salaire" },
  { icon: "\u{1F393}", title: "Formation professionnelle en Suisse : le guide", readTime: "11 min", category: "Formation" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "EMPLOI", title: "R\u00E9diger un dossier de candidature en Suisse", author: "Laura B.", date: "10 avril 2026", readTime: "6 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "N\u00E9gocier son salaire en Suisse : les bons arguments", author: "Karim D.", date: "3 avril 2026", readTime: "5 min" },
  { icon: "\u{1F9ED}", tag: "CARRI\u00C8RE", title: "R\u00E9orientation professionnelle : par o\u00F9 commencer ?", author: "Julie M.", date: "22 mars 2026", readTime: "7 min" },
];

const TAGS = ["Coaching carri\u00E8re", "Emploi Suisse", "CV", "Entretien", "N\u00E9gociation salariale", "R\u00E9orientation"];

/* ───────── PAGE ───────── */

export default function CoachingCarrierePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Coaching carri{"\u00E8"}re en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>un accompagnement personnalis{"\u00E9"} pour votre succ{"\u00E8"}s</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 11 min de lecture</p>
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
              Le march{"\u00E9"} du travail suisse est exigeant, comp{"\u00E9"}titif et tr{"\u00E8"}s codifi{"\u00E9"}. Un CV mal adapt{"\u00E9"}, un entretien rat{"\u00E9"} ou une n{"\u00E9"}gociation salariale b{"\u00E2"}cl{"\u00E9"}e peuvent vous co{"\u00FB"}ter plusieurs mois de recherche — et des milliers de francs de salaire. Le <strong style={{ color: "#111827" }}>coaching carri{"\u00E8"}re</strong> est l{"\u2019"}outil le plus efficace pour reprendre le contr{"\u00F4"}le de votre trajectoire professionnelle, que vous cherchiez un nouvel emploi, une promotion ou une r{"\u00E9"}orientation compl{"\u00E8"}te.
            </p>

            {/* A retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le coaching carri\u00E8re acc\u00E9l\u00E8re significativement le temps de recherche d\u2019emploi.",
                  "Un CV optimis\u00E9 pour le march\u00E9 suisse multiplie les rappels de recruteurs.",
                  "La n\u00E9gociation salariale peut repr\u00E9senter <strong>plusieurs milliers de CHF</strong> par ann\u00E9e.",
                  "Nos coachs sont sp\u00E9cialistes du march\u00E9 suisse : romand, al\u00E9manique et tessinois.",
                  "Premi\u00E8re consultation <strong>gratuite et sans engagement</strong>.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Pourquoi */}
            <h2 id="pourquoi-coaching" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi faire appel {"\u00E0"} un coach carri{"\u00E8"}re en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse est l{"\u2019"}un des march{"\u00E9"}s du travail les plus attract ifs au monde — mais aussi l{"\u2019"}un des plus s{"\u00E9"}lectifs. Les codes culturels varient selon les r{"\u00E9"}gions linguistiques, les entreprises attendent des candidats structur{"\u00E9"}s et pr{"\u00E9"}cis, et les salaires peuvent {"\u00EA"}tre jusqu{"\u2019"}\u00E0 deux fois sup{"\u00E9"}rieurs \u00E0 ceux des pays voisins — \u00E0 condition de savoir les n\u00E9gocier.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Vous avez besoin d{"\u2019"}un coach si vous :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "Envoyez des candidatures sans obtenir de r\u00E9ponses",
                "\u00CAtes bloqu\u00E9(e) en entretien face aux questions difficiles",
                "Ne savez pas comment valoriser votre profil \u00E9tranger en Suisse",
                "Souhaitez changer de secteur sans savoir par o\u00F9 commencer",
                "Sentez que vous m\u00E9ritez mieux mais ne savez pas comment le d\u00E9montrer",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Section 2 — Bénéfices */}
            <h2 id="benefices" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les b{"\u00E9"}n{"\u00E9"}fices concrets du coaching carri{"\u00E8"}re</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>Notre approche couvre les quatre leviers cl{"\u00E9"}s de votre succ{"\u00E8"}s professionnel :</p>
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
            <h2 id="comment-ca-marche" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment {"\u00E7"}a marche ? Notre processus en 5 {"\u00E9"}tapes</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Chaque parcours est unique, mais notre m{"\u00E9"}thode suit une progression {"\u00E9"}prouv{"\u00E9"}e :
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
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0"} retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Toutes nos sessions sont disponibles <strong>en ligne ou en pr\u00E9sentiel</strong> (\u00E0 Gen\u00E8ve, Lausanne, Zurich, Berne).",
                  "Chaque coach parle <strong>au moins deux langues nationales</strong> suisses.",
                  "Nous adaptons le rythme \u00E0 vos contraintes : emploi du temps charg\u00E9, garde d\u2019enfants, missions \u00E0 l\u2019\u00E9tranger.",
                  "Un <strong>compte rendu \u00E9crit</strong> est fourni apr\u00E8s chaque session.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Ce qui est inclus */}
            <h2 id="ce-qui-est-inclus" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce qui est inclus dans votre coaching</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Au-del\u00E0 des sessions individuelles, vous b\u00E9n\u00E9ficiez d\u2019un ensemble de ressources et d\u2019outils con\u00E7us sp\u00E9cifiquement pour le march\u00E9 suisse :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {INCLUS_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, color: "#111827" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Section 5 — Tarifs */}
            <h2 id="tarifs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 8, scrollMarginTop: 80 }}>Tarifs et formules de coaching</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              Trois formules adapt\u00E9es \u00E0 vos besoins et \u00E0 votre budget. Toutes incluent l\u2019appel de d\u00E9couverte gratuit.
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
                        <span style={{ color: "#D97706", fontWeight: 600, flexShrink: 0 }}>{"\u2713"}</span>
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
              Prix en CHF TTC. Paiement en plusieurs fois possible. Facture fournie pour remboursement employeur ou ch\u00F4mage (selon conditions).
            </p>

            {/* Section 6 — FAQ */}
            <h2 id="faq" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Questions fr\u00E9quentes</h2>
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
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Pr\u00EAt(e) \u00E0 acc\u00E9l\u00E9rer votre carri\u00E8re en Suisse ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Consultation de d\u00E9couverte gratuite. Sans engagement. En fran\u00E7ais, allemand ou anglais.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                R\u00E9server mon appel gratuit {"\u2192"}
              </button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r\u00E9sum\u00E9</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le coaching carri\u00E8re n\u2019est pas un luxe : c\u2019est un investissement rentable, surtout en Suisse o\u00F9 les salaires \u00E9lev\u00E9s rendent chaque n\u00E9gociation d\u00E9cisive. Que vous souhaitiez <strong style={{ color: "#111827" }}>optimiser votre CV</strong>, <strong style={{ color: "#111827" }}>r\u00E9ussir vos entretiens</strong>, <strong style={{ color: "#111827" }}>n\u00E9gocier un meilleur salaire</strong> ou <strong style={{ color: "#111827" }}>amorcer une r\u00E9orientation</strong>, nos coachs sp\u00E9cialistes du march\u00E9 suisse sont l\u00E0 pour vous accompagner \u00E0 chaque \u00E9tape.
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
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>30 minutes avec un coach sp\u00E9cialiste du march\u00E9 suisse. Sans engagement.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  R\u00E9server mon appel {"\u2192"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"\u00B7"} 30 min {"\u00B7"} Sans engagement</p>
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
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles {"\u2192"}</span>
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
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Conseils carri\u00E8re chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Offres d\u2019emploi, astuces CV, tendances salariales. Un email, une fois par semaine.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"\u2019"}inscrire {"\u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
