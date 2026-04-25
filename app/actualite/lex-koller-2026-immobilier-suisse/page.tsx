import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lex Koller 2026 : ce que le durcissement change pour les résidents en Suisse",
  description:
    "Le Conseil fédéral veut restreindre l’acquisition d’immeubles par les étrangers. Décryptage de l’avant-projet et impact concret pour les résidents et frontaliers.",
  alternates: { canonical: "/actualite/lex-koller-2026-immobilier-suisse" },
  openGraph: {
    title: "Lex Koller 2026 : ce que le durcissement change pour les résidents en Suisse",
    description:
      "Le Conseil fédéral veut restreindre l’acquisition d’immeubles par les étrangers. Décryptage de l’avant-projet et impact concret pour les résidents et frontaliers.",
    type: "article",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "ce-qui-change", label: "Ce qui change concrètement" },
  { id: "qui-est-concerne", label: "Qui est concerné ?" },
  { id: "marche-locatif", label: "Impact sur le marché locatif romand" },
];

const CHANGEMENTS = [
  {
    num: "1",
    name: "Résidence principale soumise à autorisation",
    desc: "Les ressortissants <strong>hors UE/AELE</strong> qui souhaitent acquérir leur résidence principale en Suisse devront désormais obtenir une autorisation cantonale formelle. Aujourd’hui, l’achat d’un logement habité par l’acquéreur n’était soumis à aucune procédure. L’avant-projet réintroduit un filtre administratif systématique.",
  },
  {
    num: "2",
    name: "Obligation de revente sous deux ans",
    desc: "Si le propriétaire quitte définitivement la Suisse ou cesse d’occuper son logement à titre principal, il devra <strong>revendre dans un délai de deux ans</strong>. Cette règle vise à éviter qu’un bien acquis en tant que résidence principale ne devienne, par défaut, une résidence secondaire ou un investissement locatif détenu depuis l’étranger.",
  },
  {
    num: "3",
    name: "Immobilier commercial restreint à l’usage propre",
    desc: "L’acquisition d’immeubles commerciaux par des personnes à l’étranger ne sera autorisée que pour un usage <strong>propre et opérationnel</strong> (locaux d’exploitation). Les achats à but purement spéculatif, longtemps tolérés, sortent du champ de la légalité.",
  },
  {
    num: "4",
    name: "Quotas de résidences secondaires resserrés",
    desc: "Le contingent annuel de logements de vacances pouvant être vendus à des étrangers est revu à la baisse. Nouveauté : la <strong>revente d’une résidence secondaire entre deux étrangers</strong> sera désormais imputée sur le quota cantonal, ce qui réduit mécaniquement l’offre disponible pour de nouveaux acquéreurs.",
  },
  {
    num: "5",
    name: "Fonds immobiliers cotés sous surveillance",
    desc: "Les parts de fonds de placement immobilier suisses cotés en bourse, jusque-là librement accessibles, deviennent partiellement restreintes pour les investisseurs étrangers non-résidents. L’objectif : limiter l’exposition indirecte du parc immobilier suisse à des capitaux étrangers spéculatifs.",
  },
];

const PROFILS = [
  { name: "UE / AELE", desc: "Français, Allemands, Italiens, Belges : les résidents UE/AELE conservent l’accès au logement en résidence principale dans les mêmes conditions qu’aujourd’hui, grâce aux accords bilatéraux." },
  { name: "Hors UE / AELE", desc: "Permis B ou C non européens : autorisation cantonale obligatoire pour acheter une résidence principale, et obligation de revente sous deux ans en cas de départ." },
  { name: "Frontaliers", desc: "Permis G : pas d’impact direct sur la résidence principale (qui se trouve hors de Suisse), mais accès aux logements de vacances et fonds immobiliers fortement réduit." },
  { name: "Locataires", desc: "Aucun changement. La réforme ne porte que sur l’acquisition de biens. Le marché locatif, lui, reste régi par les mêmes règles cantonales et fédérales qu’auparavant." },
];

const RELATED_ARTICLES = [
  { icon: "🎯", tag: "PRÉVOYANCE", title: "Rachat rétroactif 3a 2026 : rattraper jusqu’à 10 ans de cotisations", author: "Équipe Kursor", date: "25 avril 2026", readTime: "8 min", href: "/actualite/rachat-retroactif-3a-2026-guide" },
  { icon: "💼", tag: "EMPLOI", title: "Trouver un travail en Suisse : guide 2026 et métiers qui recrutent", author: "Équipe Kursor", date: "Avril 2026", readTime: "15 min", href: "/emploi-suisse" },
  { icon: "🏥", tag: "ASSURANCES", title: "Chiffres-clés 2026 : tout ce qui change en assurance et prévoyance", author: "Équipe Kursor", date: "25 avril 2026", readTime: "7 min", href: "/actualite/chiffres-cles-assurance-prevoyance-2026" },
];

const SOURCES = [
  { title: "Communiqué du Conseil fédéral du 15 avril 2026 — Restrictions accrues sur l’acquisition d’immeubles par des personnes à l’étranger", url: "https://www.admin.ch/gov/fr/accueil/documentation/communiques.html" },
  { title: "Avant-projet de révision de la LFAIE (Loi fédérale sur l’acquisition d’immeubles par des personnes à l’étranger)", url: "https://www.admin.ch/gov/fr/accueil/documentation/communiques.html" },
];

const TAGS = ["Lex Koller", "Immobilier Suisse", "Permis B", "Frontaliers", "Marché locatif", "Réforme 2026"];

/* ───────── PAGE ───────── */

export default function LexKoller2026Page() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>🏠 LOGEMENT</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Lex Koller 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>ce que le durcissement change pour les résidents</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>👤</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>25 avril 2026 · 6 min de lecture</p>
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
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le Conseil fédéral a annoncé le <strong style={{ color: "#111827" }}>15 avril 2026</strong> un durcissement de la loi fédérale sur l’acquisition d’immeubles par des personnes à l’étranger, mieux connue sous le nom de <strong style={{ color: "#111827" }}>Lex Koller</strong>. La consultation publique sur l’avant-projet court jusqu’au 15 juillet 2026, avec une entrée en vigueur visée pour 2027.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le contexte est connu : la Suisse fait face à une pénurie de logements aiguë, particulièrement dans les centres urbains romands. Cette réforme s’inscrit dans le paquet de mesures d’accompagnement liées à l’initiative populaire « Pas de Suisse à 10 millions », adoptée par le Parlement comme priorité politique en 2025.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour notre audience — résidents francophones titulaires d’un permis B ou C, frontaliers, expatriés en réflexion sur leur projet d’achat — l’enjeu est de comprendre ce qui se joue concrètement et ce qui change ou non pour leur situation.
            </p>

            {/* Section 1 — Ce qui change */}
            <h2 id="ce-qui-change" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce qui change concrètement</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Cinq blocs de mesures structurent l’avant-projet. Chacun s’applique à un type d’acquisition différent et durcit, à des degrés divers, l’accès au foncier suisse pour les non-résidents.
            </p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {CHANGEMENTS.map((c) => (
                <div key={c.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{c.num}</span>
                    <span className="font-heading" style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>{c.name}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: c.desc }} />
                </div>
              ))}
            </div>

            {/* À retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                L’avant-projet ne supprime pas l’accès des étrangers à la propriété, mais il <strong style={{ color: "#111827" }}>réintroduit un contrôle administratif</strong> là où il avait été allégé, et impose une logique d’occupation effective. Pour la majorité des résidents UE/AELE, l’impact direct reste limité ; pour les autres profils, il peut être significatif.
              </p>
            </div>

            {/* Section 2 — Qui est concerné */}
            <h2 id="qui-est-concerne" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qui est concerné ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La portée de la réforme dépend entièrement de votre statut migratoire. Voici comment chaque profil se positionne face à l’avant-projet :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {PROFILS.map((p) => (
                <div key={p.name} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 130 }}>{p.name}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Une nuance essentielle, souvent occultée dans les commentaires médiatiques : la Lex Koller régit <strong style={{ color: "#111827" }}>l’achat</strong>, pas la <strong style={{ color: "#111827" }}>location</strong>. La quasi-totalité de notre audience accède au logement par le marché locatif — un terrain qui reste totalement à l’écart de la réforme.
            </p>

            {/* Section 3 — Impact marché locatif */}
            <h2 id="marche-locatif" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Impact sur le marché locatif romand</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              C’est ici que l’analyse mérite d’être prudente. Restreindre les acquéreurs étrangers ne résoudra pas la crise locative qui touche la Suisse romande. Les données récentes le rappellent crûment : taux de vacance inférieur à <strong style={{ color: "#111827" }}>0,5 % à Genève</strong>, autour de <strong style={{ color: "#111827" }}>0,8 % dans le canton de Vaud</strong>, des niveaux historiquement bas que partagent Zurich et Bâle-Ville.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La pénurie suisse est avant tout un problème d’offre. Délais d’autorisation de construire, recours systématiques, cherté du foncier, frilosité des investisseurs institutionnels face à la régulation des loyers : ce sont ces freins structurels qui pèsent sur la disponibilité, bien davantage que la demande des acquéreurs étrangers, statistiquement marginale dans le total des transactions.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pour un résident en recherche de logement, la réalité ne change pas : le marché locatif romand reste extrêmement tendu, les délais de recherche s’étirent, et les meilleures candidatures sont celles qui combinent dossier solide, réactivité et bonne connaissance des codes locaux.
            </p>

            {/* À retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                La Lex Koller agit sur <strong style={{ color: "#111827" }}>la propriété, pas sur la location</strong>. Si vous cherchez à louer en Suisse romande, la réforme ne change rien à votre situation : le marché restera tendu, et la vraie compétence reste de savoir comment monter un dossier qui passe.
              </p>
            </div>

            {/* CTA finale */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "28px 28px", marginBottom: 32 }}>
              <p className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Vous cherchez un logement en Suisse romande ?</p>
              <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginBottom: 18 }}>
                Notre Diagnostic Logement estime votre temps de recherche et identifie les pièges à éviter — en 2 minutes, gratuitement.
              </p>
              <Link href="/logement" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>Estimer mon temps de recherche →</Link>
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

            {/* Tags + Share */}
            <div className="flex items-center justify-between flex-wrap gap-4" style={{ paddingTop: 24, marginTop: 32, borderTop: "1px solid #E2E8F0" }}>
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Estimer mon temps de recherche</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Découvrez en 2 min combien de temps vous passerez à chercher un logement et quels pièges éviter.</p>
                <Link href="/logement" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>Lancer le diagnostic →</Link>
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
