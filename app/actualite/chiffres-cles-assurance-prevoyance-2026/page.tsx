import Link from "next/link";
import type { Metadata } from "next";
import { ArticleHeroImage } from "@/components/articles/ArticleHeroImage";

export const metadata: Metadata = {
  title: "Chiffres-clés 2026 : assurance, prévoyance et salaire en Suisse, tout ce qui change",
  description:
    "Plafonds 3a, franchise LAMal, LAA, LPP, Échelle de Berne : les chiffres actualisés pour 2026 et ce qu’ils signifient pour votre budget.",
  alternates: { canonical: "/actualite/chiffres-cles-assurance-prevoyance-2026" },
  openGraph: {
    title: "Chiffres-clés 2026 : assurance, prévoyance et salaire en Suisse, tout ce qui change",
    description:
      "Plafonds 3a, franchise LAMal, LAA, LPP, Échelle de Berne : les chiffres actualisés pour 2026 et ce qu’ils signifient pour votre budget.",
    type: "article",
    images: [
      {
        url: "/images/articles/chiffres-cles-2026.jpg",
        width: 1200,
        height: 514,
        alt: "Documents d'assurance et de prévoyance, chiffres-clés 2026 Suisse",
      },
    ],
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "avs", label: "AVS / 1er pilier : la 13ème rente arrive" },
  { id: "laa", label: "LAA : seuils d’assurance-accidents" },
  { id: "lpp", label: "LPP / 2ème pilier : les chiffres qui comptent" },
  { id: "3a", label: "3ème pilier : les plafonds 2026" },
  { id: "berne", label: "Échelle de Berne : la maladie en cas d’arrêt" },
];

const AVS_CHIFFRES = [
  { label: "Rente min.", desc: "1 260 CHF / mois pour une carrière complète au plafond inférieur." },
  { label: "Rente max.", desc: "2 520 CHF / mois pour une rente individuelle complète." },
  { label: "Couple", desc: "Plafonné à 150 % de la rente individuelle maximale (règle du splitting)." },
  { label: "Veuf / veuve", desc: "Pension de 80 % de la rente du défunt." },
  { label: "Orphelins", desc: "40 % pour 1 enfant, 60 % pour 2 enfants ou plus (plafond cumulé)." },
];

const LAA_CHIFFRES = [
  { label: "Salaire assuré max.", desc: "148 200 CHF / an. Au-delà, la couverture LAA est plafonnée et nécessite une assurance complémentaire." },
  { label: "Rente d’invalidité", desc: "80 % du salaire assuré en cas d’invalidité totale liée à un accident." },
  { label: "Accidents non-pro.", desc: "Couverts uniquement si le contrat de travail prévoit au moins 8 heures hebdomadaires chez le même employeur." },
  { label: "Plafond combiné", desc: "Cumul AVS/AI + LAA limité à 90 % du salaire assuré." },
];

const LPP_CHIFFRES = [
  { label: "Salaire annuel max. pris en compte", desc: "90 720 CHF" },
  { label: "Déduction de coordination", desc: "26 460 CHF" },
  { label: "Salaire coordonné min.", desc: "3 780 CHF" },
  { label: "Salaire coordonné max.", desc: "64 260 CHF" },
  { label: "Taux d’intérêt minimum LPP", desc: "1,25 %" },
  { label: "Taux de conversion", desc: "6,8 % (à 65 ans hommes, 64 ans femmes)" },
  { label: "Salaire min. pour affiliation obligatoire", desc: "22 680 CHF" },
  { label: "Salaire assurable maximum", desc: "907 200 CHF (cadres supérieurs)" },
];

const ECHELLE_BERNE = [
  { label: "1ère année", desc: "3 semaines de salaire couvertes par l’employeur." },
  { label: "2ème année", desc: "1 mois." },
  { label: "3ème – 4ème année", desc: "2 mois." },
  { label: "5ème – 9ème année", desc: "3 mois." },
  { label: "10ème – 14ème année", desc: "4 mois." },
  { label: "15ème – 19ème année", desc: "5 mois." },
  { label: "20ème – 25ème année", desc: "6 mois." },
];

const RELATED_ARTICLES = [
  { icon: "🎯", tag: "PRÉVOYANCE", title: "Rachat rétroactif 3a 2026 : rattraper jusqu’à 10 ans de cotisations", author: "Équipe Kursor", date: "25 avril 2026", readTime: "8 min", href: "/actualite/rachat-retroactif-3a-2026-guide" },
  { icon: "🏠", tag: "LOGEMENT", title: "Lex Koller 2026 : ce que le durcissement change pour les résidents", author: "Équipe Kursor", date: "25 avril 2026", readTime: "6 min", href: "/actualite/lex-koller-2026-immobilier-suisse" },
  { icon: "💼", tag: "EMPLOI", title: "« Pas de Gen Z » : une offre d’emploi en Suisse relance le débat", author: "Équipe Kursor", date: "25 avril 2026", readTime: "5 min", href: "/actualite/generation-z-emploi-suisse-2026" },
];

const SOURCES = [
  { title: "Qualibroker Swiss Risk & Care : Chiffres-clés 2026 (Prévoyance professionnelle, AVS/AI, LAA, 3ème pilier, Échelle de Berne)", url: "https://www.swissriskcare.ch" },
];




/* ───────── PAGE ───────── */

export default function ChiffresCles2026Page() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>🏥 ASSURANCES</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Chiffres-clés 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>assurance, prévoyance, salaire : tout ce qui change</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>👤</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>25 avril 2026 · 7 min de lecture</p>
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
              src="/images/articles/chiffres-cles-2026.jpg"
              alt="Documents d'assurance et de prévoyance, chiffres-clés 2026 Suisse"
              category="ASSURANCES"
              categoryColor="#86A789"
            />

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Chaque année, les seuils qui régissent vos assurances, votre prévoyance et votre protection salariale en Suisse sont mis à jour. Pour <strong style={{ color: "#111827" }}>2026</strong>, plusieurs plafonds ont changé : certains à votre avantage, d’autres beaucoup moins. Voici les chiffres à connaître pour ne pas surpayer ni vous retrouver sous-couvert.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des résidents ne tiennent pas le compte de ces ajustements. Leur courtier le fait peut-être à leur place, mais le mal est souvent déjà fait : couverture inadaptée, cotisations trop hautes, déductions oubliées. Connaître les seuils 2026 vous permet de décider en connaissance de cause, dès aujourd’hui.
            </p>

            {/* Section 1 — AVS */}
            <h2 id="avs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>AVS / 1er pilier : la 13ème rente arrive</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’AVS reste le socle de la prévoyance suisse. Sa rente individuelle s’échelonne entre <strong style={{ color: "#111827" }}>1 260 CHF</strong> et <strong style={{ color: "#111827" }}>2 520 CHF</strong> par mois selon la carrière contributive. La nouveauté majeure de 2026 : le versement, en décembre, d’une <strong style={{ color: "#111827" }}>13ème rente</strong> mensuelle, équivalente à environ un douzième supplémentaire de la rente annuelle. C’est une première depuis la création du système.
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {AVS_CHIFFRES.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 140 }}>{c.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{c.desc}</span>
                </div>
              ))}
            </div>

            {/* Section 2 — LAA */}
            <h2 id="laa" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>LAA : les seuils d’assurance-accidents</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’assurance-accidents obligatoire couvre les accidents professionnels et, sous condition, non professionnels. Le plafond du salaire assuré reste fixé à <strong style={{ color: "#111827" }}>148 200 CHF par an</strong>. Au-delà, la couverture s’arrête : c’est précisément là que de nombreux cadres romands se retrouvent exposés sans le savoir.
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {LAA_CHIFFRES.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 200 }}>{c.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{c.desc}</span>
                </div>
              ))}
            </div>

            {/* Section 3 — LPP */}
            <h2 id="lpp" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>LPP / 2ème pilier : les chiffres qui comptent</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le 2ème pilier est l’instrument de prévoyance le plus puissant pour la majorité des salariés suisses. Connaître les huit chiffres-clés de la LPP permet de comprendre exactement combien vous cotisez, sur quelle base, et ce que cela produira au moment de la retraite.
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
              {LPP_CHIFFRES.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 270 }}>{c.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{c.desc}</span>
                </div>
              ))}
            </div>

            {/* À retenir LPP */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Le taux de conversion de <strong style={{ color: "#111827" }}>6,8 %</strong> signifie qu’un capital LPP de 500 000 CHF générera environ 34 000 CHF de rente annuelle à la retraite. C’est ce taux, jugé trop élevé par rapport à l’espérance de vie actuelle, qui est au cœur des débats récurrents sur la réforme du 2ème pilier.
              </p>
            </div>

            {/* Section 4 — 3a */}
            <h2 id="3a" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3ème pilier : les plafonds 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les deux plafonds 3a sont stables et confirmés pour 2026 :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              <li className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>• <strong style={{ color: "#111827" }}>Salariés</strong> affiliés à un 2ème pilier : <strong style={{ color: "#111827" }}>7 258 CHF</strong> par an, intégralement déductibles du revenu imposable.</li>
              <li className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>• <strong style={{ color: "#111827" }}>Indépendants</strong> sans 2ème pilier : jusqu’à <strong style={{ color: "#111827" }}>36 288 CHF</strong> par an, dans la limite de 20 % du revenu net.</li>
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Nouveauté structurante depuis le 1er janvier 2026 : les lacunes 3a peuvent désormais être <strong style={{ color: "#111827" }}>rachetées rétroactivement</strong> dans une fenêtre de 10 ans glissants. C’est l’un des leviers fiscaux les plus puissants ouverts cette année. Notre <Link href="/actualite/rachat-retroactif-3a-2026-guide" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>guide complet sur le rachat rétroactif 3a</Link> détaille les conditions, plafonds et stratégies de séquencement.
            </p>

            {/* Section 5 — Échelle de Berne */}
            <h2 id="berne" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Échelle de Berne : combien de temps votre employeur paie en cas de maladie ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              C’est la section que la plupart des résidents ignorent, et celle qui crée le plus gros trou de couverture dans les budgets familiaux. En l’absence d’assurance perte de gain collective, l’obligation de l’employeur de continuer à verser le salaire en cas de maladie est régie par le Code des obligations et calibrée par l’<strong style={{ color: "#111827" }}>échelle de Berne</strong> (ou de Bâle / Zurich, selon la juridiction du contrat ; les seuils sont proches).
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {ECHELLE_BERNE.map((e) => (
                <div key={e.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 170 }}>{e.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{e.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’alternative est l’<strong style={{ color: "#111827" }}>indemnité journalière maladie collective (IJM)</strong> : couverture de 80 % du salaire pendant 730 jours, financée à au moins 50 % par l’employeur. Présente dans la majorité des contrats cadres romands, mais loin d’être systématique.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>Si vous êtes en poste depuis moins de 2 ans, sans IJM, votre employeur ne vous doit que 3 semaines à 1 mois de salaire en cas d’arrêt prolongé.</strong> Au-delà, vous tombez à zéro. C’est, de loin, le trou de couverture numéro un que nous identifions dans nos audits Assurances.
            </p>

            {/* À retenir Berne */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Si votre contrat ne mentionne pas d’<strong style={{ color: "#111827" }}>assurance perte de gain maladie collective</strong>, vérifiez votre ancienneté et chiffrez l’exposition. Le coût d’une couverture individuelle complémentaire est largement inférieur à l’impact d’un arrêt longue durée sans filet.
              </p>
            </div>

            {/* CTA finale */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "28px 28px", marginBottom: 32 }}>
              <p className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Payez-vous trop cher pour vos assurances ?</p>
              <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginBottom: 18 }}>
                Notre Audit Assurances identifie votre surcoût annuel et vos trous de couverture, en 2 minutes, gratuitement.
              </p>
              <Link href="/assurance" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>Vérifier ma couverture →</Link>
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Vérifier ma couverture</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Découvrez en 2 min votre surcoût annuel et vos trous de couverture en assurance.</p>
                <Link href="/assurance" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>Lancer l’audit →</Link>
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
            {RELATED_ARTICLES.map((a) => (
              <Link key={a.title} href={a.href} className="rounded-xl bg-white overflow-hidden" style={{ border: "1px solid #E2E8F0", textDecoration: "none" }}>
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
