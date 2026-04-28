import Link from "next/link";
import type { Metadata } from "next";
import { ArticleHeroImage } from "@/components/articles/ArticleHeroImage";

export const metadata: Metadata = {
  title: "« Pas de Gen Z » : une offre d’emploi en Suisse relance le débat sur les jeunes au travail",
  description:
    "Une entreprise zurichoise exclut la génération Z de ses candidatures. Que révèle cette polémique sur le marché du travail suisse en 2026 ?",
  alternates: { canonical: "/actualite/generation-z-emploi-suisse-2026" },
  openGraph: {
    title: "« Pas de Gen Z » : une offre d’emploi en Suisse relance le débat sur les jeunes au travail",
    description:
      "Une entreprise zurichoise exclut la génération Z de ses candidatures. Que révèle cette polémique sur le marché du travail suisse en 2026 ?",
    type: "article",
    images: [
      {
        url: "/images/articles/gen-z-emploi-2026.jpg",
        width: 1200,
        height: 514,
        alt: "Jeune professionnel dans un bureau moderne — marché de l'emploi suisse 2026",
      },
    ],
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "ce-qui-sest-passe", label: "Ce qui s’est passé" },
  { id: "les-chiffres", label: "Les chiffres derrière le cliché" },
  { id: "candidats-internationaux", label: "Ce que ça signifie pour les candidats internationaux" },
  { id: "vrai-enjeu", label: "Le vrai enjeu : la pénurie persiste" },
];

const VALEURS = [
  { label: "Ponctualité", desc: "Arriver en avance, pas « à l’heure ». Une réunion à 9h00 commence à 8h55. C’est une question de respect, pas de chronométrie." },
  { label: "Fiabilité", desc: "Les arrêts maladie répétés ou non documentés sont mal vus, y compris dans les conventions collectives qui les autorisent. Faible absentéisme = profil sérieux." },
  { label: "Performance", desc: "La Leistungsbereitschaft — disponibilité à performer — est une attente culturelle forte. Faire ce qu’on dit qu’on va faire, sans drame." },
  { label: "Communication", desc: "Directe, factuelle, sans fioritures. Pas de double discours, pas de politesse excessive qui brouille le message. Dire « non » est respecté." },
];

const RELATED_ARTICLES = [
  { icon: "💼", tag: "EMPLOI", title: "Trouver un travail en Suisse : guide 2026 et métiers qui recrutent", author: "Équipe Kursor", date: "Avril 2026", readTime: "15 min", href: "/emploi-suisse" },
  { icon: "🎯", tag: "PRÉVOYANCE", title: "Rachat rétroactif 3a 2026 : rattraper jusqu’à 10 ans de cotisations", author: "Équipe Kursor", date: "25 avril 2026", readTime: "8 min", href: "/actualite/rachat-retroactif-3a-2026-guide" },
  { icon: "🏠", tag: "LOGEMENT", title: "Lex Koller 2026 : ce que le durcissement change pour les résidents", author: "Équipe Kursor", date: "25 avril 2026", readTime: "6 min", href: "/actualite/lex-koller-2026-immobilier-suisse" },
];

const SOURCES = [
  { title: "RTS — « Offre d’emploi discriminatoire en Suisse : la génération Z exclue des candidatures », 19 février 2026", url: "https://www.rts.ch/info/suisse" },
  { title: "24 Heures — « Pas de génération Z ! : une offre d’emploi exclut les jeunes », 9 février 2026", url: "https://www.24heures.ch" },
  { title: "Le Temps — « Les jeunes, tous fainéants ? À Zurich, une offre d’emploi discriminant la génération Z fait polémique », 13 février 2026", url: "https://www.letemps.ch" },
  { title: "Office fédéral de la statistique (OFS) — Statistique des absences au travail 2024", url: "https://www.bfs.admin.ch/bfs/fr/home/statistiques/travail-remuneration.html" },
  { title: "Baromètre du marché du travail Alixio 2026", url: "https://www.alixio.fr" },
];




/* ───────── PAGE ───────── */

export default function GenZEmploi2026Page() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>💼 EMPLOI</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            « Pas de Gen Z » :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>une offre d’emploi suisse relance le débat</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>👤</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>25 avril 2026 · 5 min de lecture</p>
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
              src="/images/articles/gen-z-emploi-2026.jpg"
              alt="Jeune professionnel dans un bureau moderne — marché de l'emploi suisse 2026"
              category="EMPLOI"
              categoryColor="#D97706"
            />

            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En janvier 2026, une entreprise de soins à domicile de la région zurichoise a publié sur Jobs.ch une annonce excluant explicitement les candidats nés après 1997 — la génération Z. Le texte évoquait une « culture du certificat médical du lundi et du vendredi » et précisait que la société ne souhaitait recevoir aucune candidature de cette tranche d’âge. Largement reprise par les médias romands, l’annonce a été modifiée après une vague de critiques.
            </p>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Pourquoi en parler ici ? Parce que cet incident, derrière son aspect anecdotique, met à nu une série de tensions du marché du travail suisse en 2026 — tensions qui concernent directement les candidats internationaux qui s’apprêtent à postuler.
            </p>

            {/* Section 1 — Ce qui s’est passé */}
            <h2 id="ce-qui-sest-passe" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce qui s’est passé</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L’entreprise concernée, <strong style={{ color: "#111827" }}>Fit for Care</strong>, opère dans les cantons de Zurich, d’Argovie et de Bâle-Campagne. Elle propose des services de soins à domicile, un secteur structurellement en pénurie de main-d’œuvre. La direction a refusé de commenter publiquement la polémique. La mention « pas de génération Z » a fini par disparaître de l’annonce, mais l’offre originale est restée visible plusieurs jours sur Jobs.ch avant la modification.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Un détail juridique mérite d’être souligné : ce type d’exclusion <strong style={{ color: "#111827" }}>par tranche d’âge ou génération est légal en Suisse</strong>. Le droit du travail helvétique ne prohibe pas formellement la discrimination générationnelle dans les annonces, contrairement à ce qui prévaut en France ou dans l’Union européenne. Une clause d’âge serait illégale dans un contrat ; dans une offre, elle relève du registre symbolique et politique, pas du contentieux.
            </p>

            {/* À retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                La Suisse n’a <strong style={{ color: "#111827" }}>pas de loi générale anti-discrimination dans les annonces d’emploi</strong> comparable au cadre français. Cela ne légitime pas la pratique, mais explique qu’elle n’expose pas l’entreprise à un risque juridique direct.
              </p>
            </div>

            {/* Section 2 — Chiffres */}
            <h2 id="les-chiffres" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les chiffres derrière le cliché</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les données de l’Office fédéral de la statistique pulvérisent le préjugé. En 2024, les <strong style={{ color: "#111827" }}>15-24 ans</strong> ont enregistré une moyenne de <strong style={{ color: "#111827" }}>9,5 jours d’absence par an</strong>. Ce chiffre est inférieur à celui des 55-64 ans, la tranche la plus âgée du marché actif, et seulement légèrement supérieur à celui des 25-54 ans. Difficile d’en tirer une accusation propre à une génération.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Plus instructif encore : l’absentéisme a <strong style={{ color: "#111827" }}>augmenté dans toutes les tranches d’âge</strong> au cours de la dernière décennie. Ce n’est pas un phénomène « Gen Z », c’est une tendance de fond du monde du travail post-pandémie, qui touche toutes les classes d’âge à des degrés comparables.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le sociologue <strong style={{ color: "#111827" }}>François Höpflinger</strong>, longtemps rattaché à l’Université de Zurich, le rappelle régulièrement dans ses analyses : les écarts <strong style={{ color: "#111827" }}>au sein</strong> d’une génération (formation, milieu familial, secteur d’activité) sont nettement supérieurs aux écarts <strong style={{ color: "#111827" }}>entre</strong> générations. La grille de lecture générationnelle relève davantage du marketing que de la donnée.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le contexte conjoncturel suisse complète le tableau : le chômage est remonté à <strong style={{ color: "#111827" }}>3,1 %</strong> (environ 152 000 inscrits), les postes ouverts sont passés d’environ <strong style={{ color: "#111827" }}>65 000 à 50 000</strong> en un an. Le rapport de force se déplace vers les employeurs — d’où, sans doute, certains débordements dans la rédaction des annonces.
            </p>

            {/* Section 3 — Candidats internationaux */}
            <h2 id="candidats-internationaux" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Ce que ça signifie pour les candidats internationaux</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour un candidat francophone qui envisage la Suisse, le bon enseignement n’est pas « les employeurs suisses détestent les jeunes ». C’est plus précis : le marché suisse a des <strong style={{ color: "#111827" }}>attentes culturelles spécifiques</strong> autour de l’éthique de travail, de la fiabilité et de la posture professionnelle, qui diffèrent sensiblement des codes français. Et ces attentes ne dépendent pas de l’âge.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Quatre valeurs reviennent dans la quasi-totalité des entretiens conduits avec les recruteurs alémaniques et romands :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {VALEURS.map((v) => (
                <div key={v.label} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 130 }}>{v.label}</span>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{v.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les candidats internationaux qui comprennent et incarnent ces codes — <strong style={{ color: "#111827" }}>quel que soit leur âge</strong> — partent avec un avantage net sur des candidats locaux qui prennent leur marché pour acquis. Notre <Link href="/emploi-suisse" style={{ color: "#D97706", textDecoration: "underline", textUnderlineOffset: 3 }}>guide complet sur le marché de l’emploi suisse</Link> détaille les autres paramètres : permis, plateformes, CV au format helvétique.
            </p>

            {/* Section 4 — Vrai enjeu */}
            <h2 id="vrai-enjeu" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le vrai enjeu : la pénurie persiste</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Malgré le repositionnement du rapport de force, les <strong style={{ color: "#111827" }}>pénuries structurelles</strong> ne disparaissent pas. Santé, construction, IT, ingénierie : ces quatre secteurs continuent d’afficher un déficit de candidats qualifiés que le marché peine à combler. Le baromètre Alixio 2026 ajoute un point contre-intuitif : les jeunes actifs retrouvent en moyenne un nouveau poste <strong style={{ color: "#111827" }}>plus rapidement</strong> que les actifs seniors.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le secteur où l’annonce de Fit for Care a été postée — les soins à domicile — est précisément celui où la pénurie est la plus aiguë de toute la Confédération. Plusieurs experts du domaine ont qualifié l’exclusion d’une génération entière de candidatures, dans ce contexte, de <strong style={{ color: "#111827" }}>« politique de recrutement à courte vue, voire irresponsable »</strong>. La polémique en dit autant sur la stratégie de l’employeur que sur la fragilité du secteur lui-même.
            </p>

            {/* CTA finale */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "28px 28px", marginBottom: 32 }}>
              <p className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>Quel est votre potentiel salarial en Suisse ?</p>
              <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginBottom: 18 }}>
                Notre Diagnostic Emploi évalue votre profil et estime votre fourchette de salaire — en 2 minutes, gratuitement.
              </p>
              <Link href="/emploi" className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>Évaluer mon profil →</Link>
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
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Évaluer mon profil</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Découvrez en 2 min votre fourchette de salaire et les secteurs qui recrutent pour votre profil.</p>
                <Link href="/emploi" className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, textDecoration: "none" }}>Lancer le diagnostic →</Link>
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
