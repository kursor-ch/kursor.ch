"use client";

import { BriefcaseIcon, HouseKeyIcon, ShieldCheckIcon, PiggyBankIcon } from "@/components/ui/ServiceIcons";
import { K_PATH_D, K_TRANSFORM, K_VIEWBOX } from "@/components/shared/k-path";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import StatsBand from "@/components/StatsBand";
import { RecentDiagnosticTicker } from "@/components/lp/RecentDiagnosticTicker";
import { DataTicker } from "@/components/lp/DataTicker";

function KMark({ position = "top-right" }: { position?: "top-right" | "bottom-right" }) {
  const posStyle: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 0,
    ...(position === "top-right" ? { top: 80, right: 80 } : { bottom: 80, right: 80 }),
  };
  return (
    <div style={posStyle} aria-hidden="true" suppressHydrationWarning>
      <svg viewBox={K_VIEWBOX} style={{ height: 280, width: "auto", display: "block" }} role="presentation" focusable="false" suppressHydrationWarning>
        <g transform={K_TRANSFORM}><path d={K_PATH_D} fill="#D97706" fillOpacity={0.06} /></g>
      </svg>
    </div>
  );
}

/* ───────── DATA ───────── */

const STEPS = [
  { num: "01", title: "Diagnostic gratuit", desc: "Repondez a 10 questions sur votre situation. On identifie vos risques et priorites en 2 minutes." },
  { num: "02", title: "Plan personnalise", desc: "Recevez une roadmap complete avec les demarches dans le bon ordre, selon votre profil." },
  { num: "03", title: "Formation & outils", desc: "Accedez aux modules adaptes a votre situation \u2014 visa, emploi, logement, fiscalite." },
  { num: "04", title: "Suivi conseiller", desc: "Un expert vous accompagne sur les points bloquants et repond a vos questions." },
];

const ARTICLES = [
  { icon: "\u{1F3DB}", tag: "PERMIS", title: "Permis de s\u00E9jour en Suisse : les 7 erreurs qui retardent votre dossier", desc: "Un dossier incomplet peut vous co\u00FBter 3 \u00E0 6 mois. Voici ce que 80% oublient.", author: "Sarah M.", date: "12 mars 2026", readTime: "5 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Trouver un appartement en Suisse : guide 2026", desc: "Attestation de non-poursuite, dossier locatif, r\u00E9gies... toutes les cl\u00E9s pour d\u00E9crocher un logement.", author: "Karim D.", date: "5 mars 2026", readTime: "8 min" },
  { icon: "\u{1F4B0}", tag: "FISCALIT\u00C9", title: "3\u00E8me pilier suisse : ce que la loi 2026 change pour vous", desc: "Rattrapage r\u00E9troactif, plafonds, \u00E9conomie fiscale \u2014 tout comprendre en 6 minutes.", author: "Lucie R.", date: "28 f\u00E9v. 2026", readTime: "6 min" },
];

/* ───────── PAGE ───────── */

export default function HomePage() {
  const hero = useScrollReveal(0.1);
  const problem = useScrollReveal(0.1);
  const howItWorks = useScrollReveal(0.1);
  const diagnostics = useScrollReveal(0.1);
  const opportunity = useScrollReveal(0.1);
  const blog = useScrollReveal(0.1);
  const finalCta = useScrollReveal(0.1);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative px-6 bg-creme overflow-hidden" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <KMark position="top-right" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(217,119,6,0.06) 0%, transparent 60%)" }} />
        <div ref={hero.ref} className={`relative mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center scroll-reveal ${hero.isVisible ? "visible" : ""}`} style={{ maxWidth: 1120 }}>

          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 font-body uppercase" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#D97706" }}>
              <span className="inline-block rounded-full" style={{ width: 7, height: 7, backgroundColor: "#15803D" }} />
              Specialiste administratif Suisse
            </span>

            <h1 className="font-heading" style={{ fontSize: 52, fontWeight: 600, color: "#111827", lineHeight: 1.08, marginTop: 24 }}>
              La vie en Suisse,<br />
              <span className="font-heading italic" style={{ color: "#D97706", fontWeight: 500 }}>{"enfin simplifi\u00E9e."}</span>
            </h1>

            <p className="font-body mx-auto lg:mx-0" style={{ fontSize: 16, color: "#475569", lineHeight: 1.65, marginTop: 20, maxWidth: 480 }}>
              {"Emploi, logement, assurances, pr\u00E9voyance \u2014 on vous guide pas \u00E0 pas pour \u00E9viter les erreurs qui co\u00FBtent des mois et des milliers de francs."}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4" style={{ marginTop: 32 }}>
              <a href="#outils" className="font-body rounded-xl text-white no-underline inline-flex items-center gap-2" style={{ backgroundColor: "#D97706", fontSize: 15, fontWeight: 500, padding: "14px 28px", boxShadow: "0 4px 16px rgba(217,119,6,0.18)" }}>
                Commencer mon diagnostic <span>{"\u2192"}</span>
              </a>
              <a href="#outils" className="font-body no-underline" style={{ fontSize: 15, fontWeight: 500, color: "#475569", padding: "14px 4px" }}>Voir les 4 outils</a>
            </div>

            {/* Mini stats */}
            <div className="flex items-center justify-center lg:justify-start" style={{ marginTop: 40, gap: 0 }}>
              {[
                { val: "4 200+", label: "r\u00E9sidents accompagn\u00E9s" },
                { val: "92%", label: "taux de satisfaction" },
                { val: "6", label: "cantons couverts" },
              ].map((s, i) => (
                <div key={s.label} className="text-center lg:text-left" style={{ paddingLeft: i > 0 ? 24 : 0, paddingRight: 24, borderLeft: i > 0 ? "1px solid #E2E8F0" : "none" }}>
                  <p className="font-heading" style={{ fontSize: 24, fontWeight: 600, color: "#111827" }}>{s.val}</p>
                  <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right \u2014 dashboard card */}
          <div className="relative mx-auto w-full" style={{ maxWidth: 520 }}>
            <div className="relative bg-white rounded-2xl" style={{ border: "1px solid #E2E8F0", boxShadow: "0 24px 48px -12px rgba(15,23,42,0.08)", padding: "28px 28px 20px" }}>

              {/* Header */}
              <div className="flex items-start justify-between" style={{ marginBottom: 24 }}>
                <div>
                  <p className="font-body uppercase" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706" }}>Tableau de bord</p>
                  <p className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#0F172A", marginTop: 4 }}>Vos 4 diagnostics</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full font-body" style={{ fontSize: 12, fontWeight: 600, color: "#15803D", backgroundColor: "rgba(21,128,61,0.06)", border: "1px solid rgba(21,128,61,0.15)", padding: "5px 14px" }}>
                  <span className="rounded-full" style={{ width: 7, height: 7, backgroundColor: "#15803D" }} />
                  En ligne
                </span>
              </div>

              {/* Diagnostic items */}
              <div className="flex flex-col gap-3">
                {[
                  { Icon: BriefcaseIcon, title: "Diagnostic Emploi", desc: "\u00C9valuez votre potentiel salaire suisse", progress: 85 },
                  { Icon: HouseKeyIcon, title: "Diagnostic Logement", desc: "Estimez votre temps de recherche", progress: 70 },
                  { Icon: ShieldCheckIcon, title: "Audit Assurances", desc: "Identifiez vos surco\u00FBts et trous de couverture", progress: 60 },
                  { Icon: PiggyBankIcon, title: "Audit Retraite", desc: "Calculez votre perte fiscale annuelle", progress: 45 },
                ].map((d) => (
                  <div key={d.title} className="rounded-xl flex items-center gap-3" style={{ border: "1px solid #E2E8F0", padding: "14px 16px" }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", borderRadius: 10 }}>
                      <d.Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{d.title}</p>
                      <p className="font-body italic" style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{d.desc}</p>
                      <div style={{ height: 3, backgroundColor: "#E2E8F0", borderRadius: 3, marginTop: 8 }}>
                        <div style={{ width: `${d.progress}%`, height: "100%", backgroundColor: "#D97706", borderRadius: 3 }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between font-body" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #F1F5F9" }}>
                <p style={{ fontSize: 13, color: "#64748B" }}>5 minutes par diagnostic</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#15803D" }}>100% gratuit</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== PROBLEM ===== */}
      <section className="relative px-6 bg-creme overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <KMark position="bottom-right" />
        <div ref={problem.ref} className={`relative mx-auto scroll-reveal ${problem.isVisible ? "visible" : ""}`} style={{ maxWidth: 1120 }}>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {"L\u2019administratif en Suisse,"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"c\u2019est un parcours de combattant."}</span>
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#475569", marginTop: 16, maxWidth: 560 }}>
            {"Sans les bonnes informations, chaque erreur administrative peut vous co\u00FBter des semaines et des milliers de francs."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 40 }}>
            {[
              { Icon: BriefcaseIcon, title: "Un march\u00E9 qui filtre vite", body: "Les recruteurs suisses lisent un CV en 6 secondes. Sans structure locale, le v\u00F4tre est \u00E9limin\u00E9 avant d\u2019\u00EAtre lu. Ceux qui connaissent les codes d\u00E9crochent en moyenne 40 000 CHF de plus par an.", metric: "\u2191 +40 000 CHF/an de diff\u00E9rence salariale" },
              { Icon: HouseKeyIcon, title: "Un dossier qui doit \u00EAtre irr\u00E9prochable", body: "Taux de vacance \u00E0 Gen\u00E8ve et Lausanne sous 1%. Sans attestation de non-poursuite, 3 mois de caution, et dossier conforme aux exigences des r\u00E9gies, la recherche s\u2019\u00E9tale sur 3 \u00E0 6 mois.", metric: "\u2191 3 \u00E0 6 mois de recherche sans m\u00E9thode" },
              { Icon: ShieldCheckIcon, title: "Un syst\u00E8me qui punit l\u2019inertie", body: "Primes LAMal +184% depuis 1997. Franchise mal calibr\u00E9e, mod\u00E8le inadapt\u00E9, compl\u00E9mentaires inutilis\u00E9es \u2014 la plupart des r\u00E9sidents surpaient 2 000 \u00E0 3 000 CHF par an sans le savoir.", metric: "\u2191 2 400 CHF/an de surco\u00FBt moyen" },
              { Icon: PiggyBankIcon, title: "Un syst\u00E8me \u00E0 trois piliers que 70% ignorent", body: "Chaque ann\u00E9e sans 3\u00E8me pilier, c\u2019est 1 500 \u00E0 3 500 CHF d\u2019imp\u00F4ts perdus. D\u00E9finitivement. En 2026, une nouvelle loi permet de rattraper jusqu\u2019\u00E0 10 ans de versements manqu\u00E9s \u2014 personne n\u2019en parle encore.", metric: "\u2191 36 290 CHF rattrapables en 2026" },
            ].map((p) => (
              <div key={p.title} className="relative flex flex-col bg-white rounded-xl" style={{ border: "1px solid #E2E8F0", padding: "26px 24px 20px", boxShadow: "0 2px 10px rgba(15,23,42,0.04)" }}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center" style={{ width: 48, height: 48, backgroundColor: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.18)", borderRadius: 10 }}>
                    <p.Icon size={24} />
                  </div>
                  <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#0F172A", lineHeight: 1.3 }}>{p.title}</h3>
                </div>
                <p className="font-body" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginTop: 14 }}>{p.body}</p>
                <span className="inline-flex items-center self-start font-body" style={{ marginTop: 18, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.01em", color: "#B45309", backgroundColor: "#FEF3C7", border: "1px solid rgba(217,119,6,0.25)", padding: "6px 12px", borderRadius: 999 }}>
                  {p.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOS DIAGNOSTICS ===== */}
      <section id="outils" className="relative px-6 overflow-hidden scroll-mt-20" style={{ backgroundColor: "#FDFAF5", paddingTop: 88, paddingBottom: 88, borderTop: "1px solid #E2E8F0" }}>
        <KMark position="top-right" />
        <div ref={diagnostics.ref} className={`relative mx-auto scroll-reveal ${diagnostics.isVisible ? "visible" : ""}`} style={{ maxWidth: 1120 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 720 }}>
            <span className="inline-block font-body uppercase" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#D97706" }}>Nos solutions</span>
            <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px]" style={{ fontWeight: 600, color: "#0F172A", lineHeight: 1.15, letterSpacing: "-0.01em", marginTop: 14 }}>
              Quatre outils. Une vie suisse.<br />
              <span className="font-heading italic" style={{ color: "#D97706", fontWeight: 500 }}>Cinq minutes par diagnostic.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto" style={{ marginTop: 56, maxWidth: 960 }}>
            {[
              { Icon: BriefcaseIcon, title: "Diagnostic Emploi", body: "\u00C9valuez la viabilit\u00E9 de votre projet professionnel en Suisse. Potentiel salaire, ad\u00E9quation du CV au march\u00E9 suisse, secteurs en demande.", metric: "+40 000 CHF/an de potentiel moyen", cta: "Faire le diagnostic", href: "/emploi" },
              { Icon: HouseKeyIcon, title: "Diagnostic Logement", body: "Estimez votre temps de recherche selon votre canton, budget, statut et pr\u00E9paration. Identifiez les pi\u00E8ges qui \u00E9liminent 80% des candidatures.", metric: "Recherche optimis\u00E9e \u00E0 3 semaines", cta: "Faire le diagnostic", href: "/logement" },
              { Icon: ShieldCheckIcon, title: "Audit Assurances", body: "Identifiez simultan\u00E9ment combien vous surpayez et o\u00F9 vous n\u2019\u00EAtes pas couvert. LAMal, compl\u00E9mentaires, perte de gain, RC priv\u00E9e.", metric: "2 400 CHF/an d\u2019\u00E9conomie potentielle", cta: "Faire le diagnostic", href: "/assurance" },
              { Icon: PiggyBankIcon, title: "Audit Retraite", body: "Calculez votre perte fiscale annuelle et d\u00E9couvrez combien vous pouvez rattraper avec la nouvelle loi 2026 sur le 3\u00E8me pilier.", metric: "36 290 CHF rattrapables en 2026", cta: "Faire le diagnostic", href: "/retraite" },
            ].map((t) => (
              <a key={t.title} href={t.href} className="card-cta-link block no-underline" style={{ color: "inherit" }}>
                <div className="service-card-live relative h-full flex flex-col bg-white rounded-xl" style={{ border: "1px solid #E2E8F0", borderTop: "2px solid #D97706", padding: "26px 24px 22px" }}>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center" style={{ width: 44, height: 44, backgroundColor: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.18)", borderRadius: 10 }}><t.Icon size={22} /></div>
                    <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#0F172A", lineHeight: 1.3 }}>{t.title}</h3>
                  </div>
                  <p className="font-body flex-1" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.65, marginTop: 14 }}>{t.body}</p>
                  <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#D97706", marginTop: 14 }}>{t.metric}</p>
                  <span className="font-body card-cta-button" aria-hidden="true">
                    <span className="card-cta-text">{t.cta}</span>
                    <span className="card-cta-arrow">{"\u2192"}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#FFFFFF" }}>
        <div ref={howItWorks.ref} className={`mx-auto text-center scroll-reveal ${howItWorks.isVisible ? "visible" : ""}`} style={{ maxWidth: 1120 }}>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {"4 \u00E9tapes pour "}
            <span className="font-heading italic" style={{ color: "#D97706" }}>optimiser votre projet Suisse</span>
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

      {/* ===== OPPORTUNITE FISCALE 2026 ===== */}
      <section className="relative px-6 overflow-hidden" style={{ backgroundColor: "#FFFFFF", paddingTop: 88, paddingBottom: 88 }}>
        <KMark position="top-right" />
        <div ref={opportunity.ref} className={`relative mx-auto scroll-reveal ${opportunity.isVisible ? "visible" : ""}`} style={{ maxWidth: 960 }}>
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center p-7 sm:p-9 lg:p-11" style={{ backgroundColor: "rgba(254,243,199,0.4)", border: "1px solid rgba(217,119,6,0.30)", borderRadius: 20, boxShadow: "0 4px 24px rgba(217,119,6,0.08)" }}>
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 font-body uppercase" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: "#B91C1C", backgroundColor: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)", padding: "5px 12px", borderRadius: 999 }}>
                <span className="inline-block rounded-full" style={{ width: 8, height: 8, backgroundColor: "#DC2626" }} />
                {"Opportunit\u00E9 fiscale 2026"}
              </span>

              <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px]" style={{ fontWeight: 600, color: "#0F172A", lineHeight: 1.15, letterSpacing: "-0.01em", marginTop: 16 }}>
                La loi qui va faire parler<br />
                <span className="font-heading italic" style={{ color: "#D97706", fontWeight: 500 }}>pendant 12 mois.</span>
              </h2>

              <p className="font-body" style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.7, marginTop: 20 }}>
                {"Depuis le 1er janvier 2026, la loi suisse permet aux r\u00E9sidents de rattraper r\u00E9troactivement les versements 3\u00E8me pilier non effectu\u00E9s pendant les 10 derni\u00E8res ann\u00E9es. Un rattrapage qui peut atteindre "}
                <span style={{ fontWeight: 600, color: "#0F172A" }}>36 290 CHF de versements</span>
                {", et g\u00E9n\u00E9rer jusqu\u2019\u00E0 "}
                <span style={{ fontWeight: 600, color: "#0F172A" }}>{"13 000 CHF d\u2019\u00E9conomie fiscale imm\u00E9diate"}</span>.
              </p>

              <p className="font-body" style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.7, marginTop: 14 }}>
                {"La majorit\u00E9 des r\u00E9sidents francophones en Suisse n\u2019ont jamais entendu parler de cette r\u00E9forme. Ceux qui agissent avant 2027 prendront plusieurs longueurs d\u2019avance sur leur patrimoine retraite."}
              </p>

              <a href="/retraite" className="font-body inline-flex items-center gap-2 no-underline" style={{ marginTop: 28, backgroundColor: "#D97706", color: "#FFFFFF", fontSize: 15, fontWeight: 500, padding: "13px 24px", borderRadius: 10, boxShadow: "0 4px 16px rgba(217,119,6,0.22)" }}>
                Calculer mon rattrapage <span>{"\u2192"}</span>
              </a>
            </div>

            {/* Right: numeric visual */}
            <div aria-hidden="true" className="hidden lg:flex flex-col items-center justify-center shrink-0" style={{ width: 220, padding: "24px 20px", backgroundColor: "#FFFFFF", border: "1px solid rgba(217,119,6,0.25)", borderRadius: 16, boxShadow: "0 8px 20px rgba(15,23,42,0.05)" }}>
              <p className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "#94A3B8", marginBottom: 10 }}>Rattrapage max.</p>
              <p className="font-heading italic" style={{ fontSize: 40, fontWeight: 500, color: "#D97706", lineHeight: 1, letterSpacing: "-0.02em" }}>36 290</p>
              <p className="font-body" style={{ fontSize: 12, fontWeight: 500, color: "#475569", marginTop: 4, letterSpacing: "0.02em" }}>CHF sur 10 ans</p>
              <div style={{ width: "100%", height: 1, backgroundColor: "#E2E8F0", margin: "16px 0" }} />
              <p className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "#94A3B8", marginBottom: 6 }}>{"\u00C9conomie fiscale"}</p>
              <p className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#0F172A", lineHeight: 1 }}>{"jusqu\u2019\u00E0 13 000 CHF"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND (live counter via /api/stats) ===== */}
      <StatsBand />

      {/* ===== RECENT DIAGNOSTIC TICKER (live, silent-fail) ===== */}
      <RecentDiagnosticTicker />

      {/* ===== BLOG ===== */}
      <section className="px-6 bg-creme" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div ref={blog.ref} className={`mx-auto scroll-reveal ${blog.isVisible ? "visible" : ""}`} style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.08)", padding: "5px 14px" }}>Blog</span>
              <h2 className="font-heading" style={{ fontSize: 36, fontWeight: 600, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
                Conseils & ressources<br />
                <span className="font-heading italic" style={{ color: "#D97706" }}>pour votre installation</span>
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

      {/* ===== SWISS DATA TICKER (ambient marquee) ===== */}
      <DataTicker />

      {/* ===== FINAL CTA ===== */}
      <section className="px-6" style={{ paddingTop: 80, paddingBottom: 80, backgroundColor: "#F9FAFB" }}>
        <div ref={finalCta.ref} className={`mx-auto text-center scroll-reveal ${finalCta.isVisible ? "visible" : ""}`} style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 40, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            {"Besoin d\u2019un accompagnement ?"}<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>{"Parlez \u00E0 un conseiller Kursor."}</span>
          </h2>
          <p className="font-body" style={{ fontSize: 16, color: "#475569", marginTop: 16 }}>
            {"Un appel de 30 minutes, gratuit et sans engagement, pour faire le point sur votre projet suisse."}
          </p>
          <a
            href="https://calendly.com/sav-gcconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body rounded-xl text-white no-underline inline-flex items-center gap-2"
            style={{ backgroundColor: "#D97706", fontSize: 15, fontWeight: 500, padding: "14px 28px", marginTop: 32, boxShadow: "0 4px 16px rgba(217,119,6,0.18)" }}
          >
            {"R\u00E9server mon appel"} <span>{"\u2192"}</span>
          </a>
          <p className="font-body" style={{ fontSize: 12, color: "#94A3B8", marginTop: 14 }}>
            {"30 minutes \u00B7 100% gratuit \u00B7 sans engagement."}
          </p>
        </div>
      </section>

    </>
  );
}
