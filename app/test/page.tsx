/* ───────── DATA ───────── */

const PAIN_POINTS = [
  { icon: "\u{1F3E0}", title: "Logement introuvable", desc: "Le marche locatif francais est l'un des plus competitifs d'Europe. Sans garant francais, trouver un appartement peut prendre 6 mois.", stat: "8 mois de recherche en moyenne sans accompagnement" },
  { icon: "\u{1F4CB}", title: "Jungle administrative", desc: "Titre de sejour, numero fiscal, securite sociale, ouverture de compte... La liste est longue et les delais imprevisibles sans methode claire.", stat: "23 demarches administratives en moyenne a l'arrivee" },
  { icon: "\u{1F4C4}", title: "CV inadapte au marche", desc: "Les recruteurs francais ont des attentes tres specifiques. Un CV etranger non adapte est ignore en quelques secondes.", stat: "78% des CV etrangers elimines des la preselection" },
  { icon: "\u{1F4B0}", title: "Erreurs fiscales couteuses", desc: "Double imposition, conventions meconnues, declarations manquees \u2014 les erreurs fiscales des primo-arrivants peuvent couter tres cher.", stat: "4 500\u20AC perdus en moyenne par les expatries non guides" },
];

const STEPS = [
  { num: "01", title: "Diagnostic gratuit", desc: "Repondez a 10 questions sur votre situation. On identifie vos risques et priorites en 2 minutes." },
  { num: "02", title: "Plan personnalise", desc: "Recevez une roadmap complete avec les demarches dans le bon ordre, selon votre profil." },
  { num: "03", title: "Formation & outils", desc: "Accedez aux modules adaptes a votre situation \u2014 visa, emploi, logement, fiscalite." },
  { num: "04", title: "Suivi conseiller", desc: "Un expert vous accompagne sur les points bloquants et repond a vos questions." },
];

const PROGRAMS = [
  { icon: "\u{1F6C2}", tag: null, title: "Visa & Titre de sejour", subtitle: "Maitrisez chaque etape de votre dossier prefecture sans vous perdre.", items: ["Types de visas long sejour", "Constitution du dossier parfait", "Gestion des delais et recours", "Renouvellement & naturalisation"] },
  { icon: "\u{1F3E0}", tag: "Le plus populaire", title: "Logement a Paris & grandes villes", subtitle: "Trouvez votre appartement en moins de 30 jours avec nos strategies.", items: ["Dossier beton sans garant francais", "Plateformes & reseaux efficaces", "Garant en ligne & alternatives", "Negociation et contrat de bail"] },
  { icon: "\u{1F4BC}", tag: null, title: "Emploi & CV a la francaise", subtitle: "Adaptez votre profil au marche francais et decrochez des entretiens.", items: ["CV & lettre de motivation francais", "Reseaux professionnels en France", "Simulation d'entretien culturel", "Negociation salariale"] },
];

const STATS = [
  { figure: "4 200+", label: "Expatries accompagnes" },
  { figure: "92%", label: "Taux de satisfaction client" },
  { figure: "3 sem.", label: "Pour trouver un logement" },
  { figure: "12", label: "Pays accompagnes" },
];

const ARTICLES = [
  { icon: "\u{1F3DB}", tag: "VISA & ADMIN", title: "Titre de sejour : les 7 erreurs qui retardent votre dossier", desc: "Un dossier incomplet peut vous couter 3 a 6 mois. Voici ce que 80% oublient.", author: "Sarah M.", date: "12 mars 2026", readTime: "5 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Trouver un appart a Paris sans garant francais : guide 2026", desc: "Visale, garant en ligne, colocation... toutes les solutions pour securiser un logement.", author: "Karim D.", date: "5 mars 2026", readTime: "8 min" },
  { icon: "\u{1F4B0}", tag: "FISCALITE", title: "Imposition des non-residents : ce qu'il faut savoir avant d'arriver", desc: "Convention fiscale, revenus etrangers, declaration annuelle \u2014 comprendre son statut.", author: "Lucie R.", date: "28 fev. 2026", readTime: "6 min" },
];

/* ───────── PAGE ───────── */

export default function TestPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(217,119,6,0.06) 0%, transparent 60%)" }} />
        <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center" style={{ maxWidth: 1120 }}>

          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 font-body uppercase" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#D97706" }}>
              <span className="inline-block rounded-full" style={{ width: 7, height: 7, backgroundColor: "#15803D" }} />
              Specialiste expatriation en France
            </span>

            <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 600, color: "#111827", lineHeight: 1.08, marginTop: 24 }}>
              La vie en Suisse,<br />
              <span className="font-heading italic" style={{ color: "#D97706", fontWeight: 500 }}>{"enfin simplifi\u00E9e."}</span>
            </h1>

            <p className="font-body mx-auto lg:mx-0" style={{ fontSize: 16, color: "#475569", lineHeight: 1.65, marginTop: 20, maxWidth: 480 }}>
              {"Visa, logement, emploi, fiscalite \u2014 on vous guide pas a pas pour eviter les erreurs qui coutent des mois et des milliers d\u2019euros."}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4" style={{ marginTop: 32 }}>
              <button className="font-body rounded-xl text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 15, fontWeight: 500, padding: "14px 28px", boxShadow: "0 4px 16px rgba(217,119,6,0.18)" }}>
                Faire mon diagnostic gratuit
              </button>
              <span className="font-body cursor-pointer" style={{ fontSize: 15, fontWeight: 500, color: "#475569", padding: "14px 4px" }}>Voir les formations</span>
            </div>

            {/* Mini stats */}
            <div className="flex items-center justify-center lg:justify-start" style={{ marginTop: 40, gap: 0 }}>
              {[
                { val: "4 200+", label: "expatries accompagnes" },
                { val: "92%", label: "taux de satisfaction" },
                { val: "12", label: "pays accompagnes" },
              ].map((s, i) => (
                <div key={s.label} className="text-center lg:text-left" style={{ paddingLeft: i > 0 ? 24 : 0, paddingRight: 24, borderLeft: i > 0 ? "1px solid #E2E8F0" : "none" }}>
                  <p className="font-heading" style={{ fontSize: 24, fontWeight: 600, color: "#111827" }}>{s.val}</p>
                  <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right \u2014 dashboard card */}
          <div className="relative mx-auto w-full" style={{ maxWidth: 480 }}>
            <div className="absolute inset-0 -z-10 blur-3xl" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(217,119,6,0.12) 0%, transparent 60%)" }} />
            <div className="bg-white rounded-2xl" style={{ border: "1px solid #E2E8F0", boxShadow: "0 24px 48px -12px rgba(15,23,42,0.08)", padding: 24 }}>

              {/* Dossier */}
              <div style={{ marginBottom: 16 }}>
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  <div className="flex items-center justify-center" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.10)", borderRadius: 8 }}>
                    {"\u{1F4CB}"}
                  </div>
                  <div>
                    <p className="font-body uppercase" style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706" }}>Visa long sejour</p>
                    <p className="font-heading" style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>Dossier de demande</p>
                  </div>
                </div>
                <p className="font-body" style={{ fontSize: 12, color: "#64748B", marginBottom: 6 }}>Progression de votre dossier prefecture.</p>
                <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                  <p className="font-body" style={{ fontSize: 12, color: "#475569" }}>Documents soumis</p>
                  <p className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706" }}>70%</p>
                </div>
                <div style={{ height: 4, backgroundColor: "#E2E8F0", borderRadius: 4 }}>
                  <div style={{ width: "70%", height: "100%", backgroundColor: "#D97706", borderRadius: 4 }} />
                </div>
              </div>

              {/* Checklist */}
              <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.2)", padding: 16, marginBottom: 12 }}>
                <p className="font-body uppercase" style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", color: "#15803D" }}>Checklist integration</p>
                <p className="font-heading" style={{ fontSize: 15, fontWeight: 600, color: "#0F172A", marginTop: 4 }}>Vos prochaines etapes</p>
                <div className="flex flex-wrap gap-2" style={{ marginTop: 12 }}>
                  {["Compte bancaire \u2713", "Secu sociale \u2713", "Recherche logement"].map((item, i) => (
                    <span key={item} className="font-body rounded-full" style={{ fontSize: 11, fontWeight: 500, padding: "5px 12px", backgroundColor: i < 2 ? "rgba(21,128,61,0.08)" : "rgba(217,119,6,0.08)", color: i < 2 ? "#15803D" : "#D97706", border: `1px solid ${i < 2 ? "rgba(21,128,61,0.2)" : "rgba(217,119,6,0.2)"}` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conseiller */}
              <div className="rounded-xl flex items-center gap-3" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", padding: "14px 16px" }}>
                <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, backgroundColor: "#FFF", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                  {"\u{1F464}"}
                </div>
                <div>
                  <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Conseiller dedie</p>
                  <p className="font-body" style={{ fontSize: 12, color: "#64748B" }}>Sarah repond sous 2h en moyenne</p>
                  <span className="inline-flex items-center gap-1.5" style={{ marginTop: 4 }}>
                    <span className="rounded-full" style={{ width: 6, height: 6, backgroundColor: "#15803D" }} />
                    <span className="font-body" style={{ fontSize: 11, fontWeight: 500, color: "#15803D" }}>En ligne</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== PROBLEM ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "5px 14px" }}>Le probleme</span>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
            {"S\u2019expatrier en France,"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"c\u2019est un parcours du combattant."}</span>
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#475569", marginTop: 16, maxWidth: 560 }}>
            {"Sans les bonnes informations, chaque erreur administrative peut vous couter des semaines et des milliers d\u2019euros."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 40 }}>
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 28 }}>
                <div className="flex items-center justify-center" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", borderRadius: 10, marginBottom: 16, fontSize: 20 }}>
                  {p.icon}
                </div>
                <h3 className="font-body" style={{ fontSize: 17, fontWeight: 600, color: "#111827" }}>{p.title}</h3>
                <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginTop: 8 }}>{p.desc}</p>
                <p className="font-body" style={{ fontSize: 13, fontWeight: 500, color: "#D97706", marginTop: 14 }}>{"\u2192 " + p.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "5px 14px" }}>Comment ca marche</span>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
            4 etapes pour une<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>expatriation reussie</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left" style={{ marginTop: 48 }}>
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", backgroundColor: "#FFFDF8" }}>
                <div style={{ height: 4, backgroundColor: "#D97706" }} />
                <div style={{ padding: "24px 24px 28px" }}>
                  <p className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#D97706", lineHeight: 1 }}>{s.num}</p>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", marginTop: 16 }}>{s.title}</h3>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginTop: 8 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "5px 14px" }}>Nos formations</span>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
            {"Tout ce qu\u2019il faut pour"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"s\u2019installer en France"}</span>
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#475569", marginTop: 12 }}>Des programmes concus par des experts qui ont accompagne plus de 4 000 expatries.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: 40 }}>
            {PROGRAMS.map((p) => (
              <div key={p.title} className="rounded-xl bg-white flex flex-col relative" style={{ border: p.tag ? "2px solid #D97706" : "1px solid #E2E8F0", padding: 28, boxShadow: p.tag ? "0 8px 32px rgba(217,119,6,0.10)" : "none" }}>
                {p.tag && (
                  <span className="absolute font-body uppercase" style={{ top: -12, left: "50%", transform: "translateX(-50%)", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: "#FFFFFF", backgroundColor: "#D97706", padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap" }}>{p.tag}</span>
                )}
                <div className="flex items-center justify-center" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", borderRadius: 10, marginBottom: 16, fontSize: 20 }}>
                  {p.icon}
                </div>
                <h3 className="font-body" style={{ fontSize: 18, fontWeight: 600, color: "#111827" }}>{p.title}</h3>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginTop: 6 }}>{p.subtitle}</p>
                <ul className="mt-5 list-none p-0">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body mb-2.5">
                      <span style={{ color: "#D97706", fontWeight: 600, fontSize: 13 }}>{"\u2713"}</span>
                      <span style={{ fontSize: 13, color: "#475569" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706", marginTop: 20 }}>{"Decouvrir la formation \u2192"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section style={{ backgroundColor: "#D97706", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 grid grid-cols-2 lg:grid-cols-4" style={{ maxWidth: 900, gap: 24 }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {i > 0 && (
                <div className="hidden lg:block absolute top-2 bottom-2" style={{ left: -12, width: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
              )}
              <p className="font-heading italic" style={{ fontSize: 44, fontWeight: 500, color: "#FFFFFF", lineHeight: 1 }}>{stat.figure}</p>
              <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 10 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "5px 14px" }}>Blog</span>
              <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
                Conseils & ressources<br />
                <span className="font-heading italic" style={{ color: "#D97706" }}>pour votre expatriation</span>
              </h2>
            </div>
            <span className="font-body hidden md:inline cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: 40 }}>
            {ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#F8FAFC", fontSize: 40 }}>
                  {a.icon}
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <p className="font-body" style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginTop: 8 }}>{a.desc}</p>
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

      {/* ===== FINAL CTA ===== */}
      <section className="px-6" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#F9FAFB" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Commencez votre projet en France<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"aujourd\u2019hui"}</span>
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#475569", marginTop: 16 }}>2 minutes de diagnostic. Un plan clair. Des experts disponibles.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 32 }}>
            <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg bg-white" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, width: 280, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "14px 24px" }}>Demarrer gratuitement</button>
          </div>
          <p className="font-body" style={{ fontSize: 12, color: "#94A3B8", marginTop: 14 }}>{"Pas de carte bancaire \u00B7 Diagnostic gratuit \u00B7 Resultats immediats"}</p>
        </div>
      </section>

    </>
  );
}
