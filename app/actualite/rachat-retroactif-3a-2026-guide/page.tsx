import Link from "next/link";
import type { Metadata } from "next";
import { ArticleHeroImage } from "@/components/articles/ArticleHeroImage";

export const metadata: Metadata = {
  title: "Rachat rétroactif 3a 2026 : comment rattraper jusqu’à 10 ans de cotisations manquées",
  description:
    "Depuis janvier 2026, vous pouvez combler vos lacunes de 3ème pilier. Conditions, plafonds, exemples chiffrés et stratégie fiscale.",
  alternates: { canonical: "/actualite/rachat-retroactif-3a-2026-guide" },
  openGraph: {
    title: "Rachat rétroactif 3a 2026 : comment rattraper jusqu’à 10 ans de cotisations manquées",
    description:
      "Depuis janvier 2026, vous pouvez combler vos lacunes de 3ème pilier. Conditions, plafonds, exemples chiffrés et stratégie fiscale.",
    type: "article",
    images: [
      {
        url: "/images/articles/rachat-3a-2026.jpg",
        width: 1200,
        height: 514,
        alt: "Prévoyance et épargne retraite en Suisse, rachat rétroactif 3ème pilier 2026",
      },
    ],
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "ce-qui-a-change", label: "Ce qui a changé au 1er janvier 2026" },
  { id: "conditions", label: "Les conditions strictes du rachat" },
  { id: "exemples", label: "Exemples chiffrés" },
  { id: "strategie", label: "Stratégie optimale en Romandie" },
  { id: "treizieme-rente", label: "La 13ème rente AVS : l’autre nouveauté 2026" },
];

const CONDITIONS = [
  { label: "Revenu", desc: "Disposer d’un revenu soumis à l’AVS et avoir moins de 70 ans au moment du rachat." },
  { label: "Année courante", desc: "Avoir déjà versé le maximum autorisé pour l’année en cours avant tout rachat rétroactif d’une lacune passée." },
  { label: "Antériorité", desc: "Les lacunes rachetables doivent dater de 2025 ou après, dans une fenêtre maximale de 10 ans glissants." },
  { label: "Une seule fois", desc: "Chaque lacune annuelle ne peut être comblée qu’en une seule opération. Pas de rachat partiel ultérieur sur une même année." },
  { label: "Plafond annuel", desc: "Le total versé sur une année (cotisation courante + rachat) ne peut pas dépasser le plafond annuel en vigueur." },
];

const EXEMPLES = [
  {
    num: "1",
    name: "Marie, salariée, arrivée en 2022",
    desc: "Marie n’a jamais ouvert de 3a. En 2027, elle décide de régulariser. Elle peut racheter les lacunes 2025 et 2026, soit <strong>2 × 7 258 = 14 516 CHF</strong>. À un taux marginal de 33 % (Genève, revenu de 90 000 CHF), l’économie d’impôt immédiate atteint environ <strong>4 790 CHF</strong>. Sur 30 ans, avec un rendement net moyen de 2 %, ces 14 516 CHF investis pèsent près de 26 000 CHF supplémentaires à la retraite.",
  },
  {
    num: "2",
    name: "Thomas, indépendant, en Suisse depuis 2020",
    desc: "Thomas a ouvert son 3a en 2024 mais n’a versé que 4 000 CHF en 2025, alors que son plafond d’indépendant lui permettait <strong>36 288 CHF</strong>. Sa lacune 2025 vaut donc 32 288 CHF, théoriquement rachetables. <strong>Attention au piège</strong> : s’il ne rachète qu’une partie (par exemple 10 000 CHF) en 2026, le solde de 22 288 CHF est perdu définitivement. Le rachat d’une année doit être total ou rien.",
  },
];

const STRATEGIE = [
  { label: "Étape 1", desc: "Maximiser la cotisation de l’année en cours avant toute autre opération. Sans cela, le rachat rétroactif est juridiquement impossible." },
  { label: "Étape 2", desc: "Racheter en priorité la lacune la plus ancienne dans la fenêtre des 10 ans, puisqu’elle disparaîtra la première du périmètre éligible." },
  { label: "Étape 3", desc: "Pour les hauts revenus, combiner avec un rachat LPP (2ème pilier) la même année permet de cumuler les deux déductions et de viser une économie fiscale à 5 chiffres." },
  { label: "Étape 4", desc: "Pour les expatriés récents : ouvrir le 3a immédiatement, même avec un versement symbolique, pour faire démarrer la période de rachat à la bonne date." },
];

const RELATED_ARTICLES = [
  { icon: "🏥", tag: "ASSURANCES", title: "Chiffres-clés 2026 : tout ce qui change en assurance et prévoyance", author: "Équipe Kursor", date: "25 avril 2026", readTime: "7 min", href: "/actualite/chiffres-cles-assurance-prevoyance-2026" },
  { icon: "🏠", tag: "LOGEMENT", title: "Lex Koller 2026 : ce que le durcissement change pour les résidents", author: "Équipe Kursor", date: "25 avril 2026", readTime: "6 min", href: "/actualite/lex-koller-2026-immobilier-suisse" },
  { icon: "💼", tag: "EMPLOI", title: "Meilleures entreprises suisses 2026 : la liste par secteur", author: "Équipe Kursor", date: "Mai 2026", readTime: "9 min", href: "/meilleures-entreprises-suisses" },
];

const SOURCES = [
  { title: "Ordonnance sur la prévoyance professionnelle vieillesse, survivants et invalidité (OPP3) : modification du 1er janvier 2026", url: "https://www.fedlex.admin.ch/eli/cc/1985/1898_1898_1898/fr" },
  { title: "CA Nextbank : « Dès 2026, rachat rétroactif de vos lacunes de pilier 3A »", url: "https://www.ca-nextbank.ch" },
  { title: "Qualibroker Swiss Risk & Care : Chiffres-clés 2026 (Prévoyance professionnelle et privée)", url: "https://www.swissriskcare.ch" },
];




/* ───────── PAGE ───────── */

export default function RachatRetroactif3aPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section className="scroll-reveal visible" style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>🎯 PRÉVOYANCE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Rachat rétroactif 3a 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>rattraper jusqu’à 10 ans de cotisations manquées</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>👤</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>25 avril 2026 · 8 min de lecture</p>
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

            <ArticleHeroImage
              src="/images/articles/rachat-3a-2026.jpg"
              alt="Prévoyance et épargne retraite en Suisse, rachat rétroactif 3ème pilier 2026"
              category="PRÉVOYANCE"
              categoryColor="#7C3AED"
            />

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Depuis le <strong style={{ color: "#111827" }}>1er janvier 2026</strong>, la modification de l’OPP3 ouvre une porte que beaucoup d’expatriés croyaient fermée à jamais : il est désormais possible de <strong style={{ color: "#111827" }}>racheter rétroactivement</strong> jusqu’à dix ans de cotisations manquées au pilier 3a, qui forme avec le 3b <Link href="/retraite-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le 3e pilier suisse</Link>. Pour un résident arrivé en Suisse il y a cinq ans sans avoir ouvert de 3a, cela peut représenter à terme <strong style={{ color: "#111827" }}>plus de 36 000 CHF</strong> de versements rattrapables et entre 9 000 et 14 000 CHF d’économies d’impôts immédiates.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              C’est, sans concurrence, l’évolution fiscale la plus importante de 2026 pour les résidents francophones de Suisse. L’opportunité est massive, mais les règles sont strictes : la moindre erreur de séquencement peut faire perdre le bénéfice de plusieurs milliers de francs.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Cet article décortique le mécanisme, donne deux exemples chiffrés concrets, et expose la stratégie de séquencement à respecter pour ne rien laisser sur la table.
            </p>

            {/* Section 1 — Ce qui a changé */}
            <h2 id="ce-qui-a-change" className="scroll-reveal font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce qui a changé au 1er janvier 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Avant 2026, la règle était brutale. Toute cotisation 3a non versée au 31 décembre était définitivement perdue : pas de rattrapage l’année suivante, pas de mécanisme de récupération. Pour un expatrié arrivé en Suisse en 2020 et ayant attendu 2024 pour ouvrir un 3a, ces quatre années sans versement étaient juridiquement irrécupérables.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La modification de l’OPP3 entrée en vigueur au <strong style={{ color: "#111827" }}>1er janvier 2026</strong> change la donne en permettant le rachat des lacunes des dix dernières années. Mais avec une subtilité capitale : le compteur ne démarre que sur les lacunes <strong style={{ color: "#111827" }}>postérieures à 2025</strong>. Concrètement : on ne peut pas remonter dans le passé pour racheter 2019, 2020, 2021, 2022, 2023 ou 2024.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              En pratique, en 2026, vous pouvez seulement racheter votre lacune 2025. En 2027, les lacunes 2025 et 2026. En 2028, les lacunes 2025, 2026 et 2027. Et ainsi de suite, jusqu’à constituer progressivement une fenêtre glissante de dix ans à partir de 2034. Pour une vue complète des plafonds applicables, consultez notre article <Link href="/actualite/chiffres-cles-assurance-prevoyance-2026" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>Chiffres-clés 2026</Link>.
            </p>

            {/* À retenir 1 */}
            <div className="scroll-reveal rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le rachat rétroactif s’applique uniquement aux lacunes <strong style={{ color: "#111827" }}>à partir de l’année 2025</strong>. Plafonds 2026 : <strong style={{ color: "#111827" }}>7 258 CHF</strong> pour les salariés affiliés à un 2ème pilier, <strong style={{ color: "#111827" }}>36 288 CHF</strong> (20 % du revenu net) pour les indépendants sans 2ème pilier.
              </p>
            </div>

            {/* Section 2 — Conditions */}
            <h2 id="conditions" className="scroll-reveal font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les conditions strictes du rachat</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’OPP3 modifiée encadre le rachat avec une rigueur qui peut surprendre. Cinq conditions cumulatives doivent être remplies :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {CONDITIONS.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 110 }}>{c.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{c.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La condition la plus piégeuse est la quatrième : impossible de fractionner un rachat. Si vous comblez une lacune partiellement, le solde non racheté est <strong style={{ color: "#111827" }}>perdu définitivement</strong>. C’est la principale erreur que nous voyons dans les dossiers que nous auditons.
            </p>

            {/* Section 3 — Exemples chiffrés */}
            <h2 id="exemples" className="scroll-reveal font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Exemples chiffrés</h2>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {EXEMPLES.map((e, i) => (
                <div key={e.name} className={`scroll-reveal scroll-stagger-${i + 1} rounded-xl bg-white`} style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{e.num}</span>
                    <span className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>{e.name}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: e.desc }} />
                </div>
              ))}
            </div>

            {/* Section 4 — Stratégie */}
            <h2 id="strategie" className="scroll-reveal font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Stratégie optimale pour les résidents de Suisse romande</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’ordre des opérations détermine le bénéfice final. Une mauvaise séquence peut annuler purement et simplement la déductibilité fiscale. Voici la marche à suivre :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {STRATEGIE.map((s) => (
                <div key={s.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 80 }}>{s.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{s.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Quelques chiffres-clés à garder en tête pour calibrer votre stratégie LPP en parallèle : déduction de coordination <strong style={{ color: "#111827" }}>26 460 CHF</strong>, salaire coordonné minimum <strong style={{ color: "#111827" }}>3 780 CHF</strong>, taux d’intérêt minimum LPP <strong style={{ color: "#111827" }}>1,25 %</strong>, taux de conversion <strong style={{ color: "#111827" }}>6,8 %</strong>.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour les expatriés français récemment arrivés, le réflexe gagnant est simple : <strong style={{ color: "#111827" }}>ouvrir un 3a dès la première année fiscale en Suisse</strong>, même avec un versement modeste. Cela permet de démarrer le compteur dans des conditions optimales et de maximiser la fenêtre de rachat à venir.
            </p>

            {/* À retenir 2 */}
            <div className="scroll-reveal rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Pour un cadre romand au taux marginal de 35 % qui combine cotisation 3a courante (7 258 CHF) et rachat LPP (10 000 CHF) la même année, l’économie fiscale immédiate dépasse <strong style={{ color: "#111827" }}>6 000 CHF</strong>, un gain qui varie selon <Link href="/impot-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>les taux d’imposition en Suisse</Link> applicables à votre canton. Le rachat rétroactif vient s’ajouter à ce socle.
              </p>
            </div>

            {/* Section 5 — 13ème rente AVS */}
            <h2 id="treizieme-rente" className="scroll-reveal font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La 13ème rente AVS : l’autre nouveauté 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              À partir de <strong style={{ color: "#111827" }}>décembre 2026</strong>, l’AVS versera pour la première fois de son histoire une 13ème rente mensuelle, équivalente environ à un douzième supplémentaire de la rente annuelle. Pour un retraité touchant la rente maximale individuelle (2 520 CHF/mois), cela représente un complément annuel d’environ 2 520 CHF.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Cette nouveauté ne modifie pas la stratégie de rachat 3a : les deux mesures sont indépendantes. Mais elle s’inscrit dans le contexte plus large d’une recomposition de la prévoyance suisse, où le 1er pilier se renforce légèrement, pendant que le 3ème pilier devient le levier d’optimisation le plus puissant à la disposition des résidents pour <Link href="/analyse-lpp" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>le placement suisse</Link> de long terme.
            </p>

            {/* CTA finale */}
            <div className="scroll-reveal hover-lift rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "28px 28px", marginBottom: 32 }}>
              <p className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Combien perdez-vous chaque année sans 3ème pilier optimisé ?</p>
              <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginBottom: 18 }}>
                Notre Audit Retraite calcule votre perte fiscale cumulée et votre éligibilité au rachat rétroactif, en 2 minutes.
              </p>
              <Link href="/prevoyance" className="hover-cta font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>Calculer ma perte fiscale →</Link>
            </div>

            {/* Sources */}
            <section style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #E2E8F0" }}>
              <h2 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Sources</h2>
              <ul className="list-none p-0 m-0">
                {SOURCES.map((s) => (
                  <li key={s.url} style={{ marginBottom: 10 }}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-body" style={{ fontSize: 14, color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Calculer ma perte fiscale</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Découvrez en 2 min combien vous perdez chaque année sans 3ème pilier optimisé.</p>
                <Link href="/prevoyance" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>Lancer l’audit →</Link>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit · 2 minutes · Résultats immédiats</p>
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
            <Link href="/actualite" className="font-body" style={{ fontSize: 14, fontWeight: 500, color: "#D97706", textDecoration: "none" }}>Tous les articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a, i) => (
              <Link key={a.title} href={a.href} className={`scroll-reveal scroll-stagger-${i + 1} hover-lift rounded-xl bg-white overflow-hidden`} style={{ border: "1px solid #E2E8F0", textDecoration: "none" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} · {a.date}</p>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="scroll-reveal" style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Les pièges à éviter, les économies à faire.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="hover-cta font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S’inscrire →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
