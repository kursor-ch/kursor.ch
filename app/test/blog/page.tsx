import Link from "next/link";

/* ───────── ARTICLE DATA ───────── */

const ARTICLE = {
  category: "VISA & ADMIN",
  title: "Titre de sejour : les 7 erreurs",
  titleHighlight: "qui retardent votre dossier",
  author: "Sarah Martin",
  date: "12 mars 2026",
  readTime: "5 min de lecture",
  audioDuration: "5:42",
};

const TOC = [
  "Comprendre le titre de sejour",
  "Les 7 erreurs les plus courantes",
  "Comment constituer un dossier parfait",
  "Delais et recours en cas de refus",
  "Checklist finale avant depot",
];

const ERRORS = [
  { title: "Documents non traduits par un traducteur assermente", desc: "Les traductions libres ne sont pas acceptees par la prefecture." },
  { title: "Photos d'identite non conformes aux normes ANTS", desc: "Le format, le fond et le cadrage doivent respecter des criteres precis." },
  { title: "Justificatif de domicile de plus de 3 mois", desc: "La prefecture exige un justificatif date de moins de 3 mois." },
  { title: "Rendez-vous pris trop tard \u2014 delais de 2 a 4 mois", desc: "Les creneaux de prefecture se remplissent tres vite dans les grandes villes." },
  { title: "Absence de timbre fiscal au bon montant", desc: "Le montant varie selon le type de titre demande (225\u20AC, 75\u20AC, etc.)." },
];

const CHECKLIST = [
  "Rassembler tous les originaux + copies certifiees conformes",
  "Faire traduire par un traducteur assermente (liste sur annuaire-traducteur.fr)",
  "Prendre rendez-vous prefecture des l'obtention du visa",
  "Acheter le timbre fiscal en ligne sur timbres.impots.gouv.fr",
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F3E0}", title: "Trouver un appart a Paris sans garant francais : guide 2026", readTime: "8 min", category: "Logement" },
  { icon: "\u{1F4B0}", title: "Imposition des non-residents : ce qu'il faut savoir avant d'arriver", readTime: "6 min", category: "Fiscalite" },
  { icon: "\u{1F4BC}", title: "CV a la francaise : les 5 regles pour ne pas finir a la poubelle", readTime: "7 min", category: "Emploi" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F3DB}", tag: "VISA & ADMIN", title: "Renouvellement de titre : quand et comment s'y prendre", author: "Laura B.", date: "20 mars 2026", readTime: "4 min" },
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Numero fiscal en France : comment l'obtenir quand on est expatrie", author: "Karim D.", date: "16 mars 2026", readTime: "6 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Les 10 questions a poser avant de signer un bail en France", author: "Julie M.", date: "8 mars 2026", readTime: "7 min" },
];

const TAGS = ["Titre de sejour", "Prefecture", "Visa", "Administration"];

/* ───────── PAGE ───────── */

export default function BlogArticlePage() {
  return (
    <div className="bg-creme">

      {/* ===== BREADCRUMB ===== */}
      <div className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 20, paddingBottom: 20 }}>
        <nav className="font-body flex items-center gap-2" style={{ fontSize: 13, color: "#94A3B8" }}>
          <Link href="/test" style={{ color: "#94A3B8" }}>Accueil</Link>
          <span>/</span>
          <Link href="/test" style={{ color: "#94A3B8" }}>Blog</Link>
          <span>/</span>
          <span style={{ color: "#94A3B8" }}>Visa & Admin</span>
          <span>/</span>
          <span style={{ color: "#6B7280" }}>Titre de sejour : les 7 erreurs qui retardent votre dossier</span>
        </nav>
      </div>

      {/* ===== HERO ===== */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>
            {ARTICLE.category}
          </span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {ARTICLE.title}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{ARTICLE.titleHighlight}</span>
          </h1>
          <div className="flex items-center gap-6 flex-wrap" style={{ marginTop: 24 }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>
                <span style={{ fontSize: 14 }}>{"\u{1F464}"}</span>
              </div>
              <div>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{ARTICLE.author}</p>
                <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>{ARTICLE.date} {"\u00B7"} {ARTICLE.readTime}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 font-body rounded-full" style={{ fontSize: 13, fontWeight: 500, color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)", padding: "8px 16px", cursor: "pointer" }}>
              <span style={{ fontSize: 16 }}>{"\u25B6"}</span>
              {"Ecouter l'article \u00B7 " + ARTICLE.audioDuration}
            </button>
          </div>
        </div>
      </section>

      {/* ===== CONTENT + SIDEBARS ===== */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 48, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR — Sommaire */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Sommaire</p>
                <ul className="list-none p-0 m-0">
                  {TOC.map((item, i) => (
                    <li key={item} className="font-body" style={{ fontSize: 13, color: "#475569", lineHeight: 1.5, marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#D97706", fontWeight: 600 }}>{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article>
            {/* Section 1 */}
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>1. Comprendre le titre de sejour</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le titre de sejour est le document officiel qui autorise un ressortissant etranger a resider en France pour une duree determinee. Il existe plusieurs types de titres, chacun avec ses propres conditions et procedures. Comprendre ces differences est essentiel pour eviter des erreurs qui peuvent retarder votre dossier de plusieurs mois.
            </p>

            {/* A retenir callout */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32, marginTop: 24 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>A retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Un dossier incomplet est la premiere cause de refus. En moyenne, 80% des dossiers rejetes le sont pour des pieces manquantes.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, marginTop: 40 }}>2. Les 7 erreurs les plus courantes</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"Apres avoir accompagne plus de 4 000 expatries, nous avons identifie les 7 erreurs qui reviennent systematiquement :"}
            </p>

            <ul className="list-none p-0 m-0">
              {ERRORS.map((err) => (
                <li key={err.title} style={{ marginBottom: 16 }}>
                  <p className="font-body" style={{ fontSize: 15, color: "#111827", lineHeight: 1.5 }}>
                    <span style={{ color: "#D97706", marginRight: 8 }}>{"\u2022"}</span>
                    <strong>{err.title}</strong>
                  </p>
                  <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, paddingLeft: 18 }}>{err.desc}</p>
                </li>
              ))}
            </ul>

            {/* Stat highlight */}
            <div className="flex items-center gap-6 rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.2)", padding: "24px 28px", marginTop: 32, marginBottom: 32 }}>
              <p className="font-heading italic" style={{ fontSize: 36, fontWeight: 500, color: "#D97706", lineHeight: 1, whiteSpace: "nowrap" }}>3 a 6 mois</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>
                {"— c'est le temps perdu en moyenne a cause d'un dossier mal prepare. Source : Prefecture de Paris."}
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, marginTop: 40 }}>3. Comment constituer un dossier parfait</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>
              {"La cle d'un dossier accepte du premier coup, c'est l'anticipation. Voici notre methode en 4 etapes, testee avec plus de 4 000 expatries :"}
            </p>

            <div className="flex flex-col gap-3">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, color: "#111827" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginTop: 40, marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d'aide pour votre dossier ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>
                Nos experts ont accompagne plus de 4 000 expatries. On vous aide a eviter les erreurs les plus couteuses.
              </p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                {"Decouvrir nos formations \u2192"}
              </button>
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
              {/* CTA Diagnostic */}
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Votre dossier est-il complet ?</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Faites notre diagnostic gratuit en 2 min et recevez votre checklist personnalisee.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  {"Faire mon diagnostic gratuit \u2192"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 Resultats immediats"}</p>
              </div>

              {/* Articles similaires */}
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>
                        {a.icon}
                      </div>
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

      {/* ===== A LIRE AUSSI ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>
                  {a.icon}
                </div>
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

      {/* ===== NEWSLETTER CTA ===== */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pieges a eviter, les economies a faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>
              {"S'inscrire \u2192"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
