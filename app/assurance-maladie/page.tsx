import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 des meilleures caisses maladie en Suisse en 2026",
  description: "Classement des 10 meilleures caisses maladie suisses en 2026 : primes, satisfaction, services digitaux. Comparez Helsana, SWICA, CSS, Assura et trouvez la caisse id\u00E9ale.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "methodologie", label: "Comment avons-nous \u00E9tabli ce classement ?" },
  { id: "helsana", label: "1. Helsana" },
  { id: "swica", label: "2. SWICA" },
  { id: "css", label: "3. CSS" },
  { id: "okk", label: "4. \u00D6KK" },
  { id: "kpt", label: "5. KPT" },
  { id: "sanitas", label: "6. Sanitas" },
  { id: "concordia", label: "7. Concordia" },
  { id: "visana", label: "8. Visana" },
  { id: "sympany", label: "9. Sympany" },
  { id: "assura", label: "10. Assura" },
  { id: "tableau", label: "Tableau comparatif" },
  { id: "choisir", label: "Comment choisir ?" },
  { id: "changer", label: "Changer de caisse" },
];

const CAISSES = [
  { id: "helsana", num: "1", name: "Helsana", subtitle: "La plus grande caisse de Suisse", desc: "Avec pr\u00E8s de <strong>9 milliards de francs de recettes</strong> de primes et plus de <strong>2,2 millions d\u2019assur\u00E9s</strong>, Helsana domine le march\u00E9 suisse. Not\u00E9e <strong>5,1/6</strong> dans l\u2019enqu\u00EAte Comparis, elle s\u00E9duit par un service client solide et une gamme compl\u00E8te d\u2019assurances compl\u00E9mentaires.", forts: "R\u00E9seau dense, app BENECURA avec conseils sant\u00E9, programmes de pr\u00E9vention, rabais famille avantageux.", profil: "Familles, expatri\u00E9s, assur\u00E9s recherchant un acteur stable et premium." },
  { id: "swica", num: "2", name: "SWICA", subtitle: "R\u00E9f\u00E9rence en sant\u00E9 digitale", desc: "SWICA s\u2019est impos\u00E9e comme la caisse maladie la plus innovante, avec <strong>96 % de satisfaction client</strong> et des investissements massifs dans la <strong>t\u00E9l\u00E9m\u00E9decine</strong> et l\u2019intelligence artificielle m\u00E9dicale. Son mod\u00E8le SWICA FAVORITE MEDIA permet d\u2019acc\u00E9der \u00E0 un m\u00E9decin par t\u00E9l\u00E9phone <strong>24h/24</strong>.", forts: "T\u00E9l\u00E9m\u00E9decine de pointe, contributions g\u00E9n\u00E9reuses en pr\u00E9vention (fitness, m\u00E9decine alternative), service client de haut niveau.", profil: "Jeunes actifs, adeptes du digital, assur\u00E9s valorisant la m\u00E9decine compl\u00E9mentaire." },
  { id: "css", num: "3", name: "CSS", subtitle: "L\u2019assureur historique", desc: "Deuxi\u00E8me acteur du march\u00E9 avec <strong>7,8 milliards de francs de recettes</strong> en 2025 et un b\u00E9n\u00E9fice record de <strong>261 millions</strong>, la CSS est un pilier du syst\u00E8me suisse. Elle propose une gamme tr\u00E8s compl\u00E8te et un r\u00E9seau territorial dense.", forts: "Mod\u00E8les myCare alternatifs, app CSS avec scan de factures, programmes de sant\u00E9 active.", profil: "Assur\u00E9s recherchant stabilit\u00E9 et couverture compl\u00E8te, particuli\u00E8rement en Suisse al\u00E9manique." },
  { id: "okk", num: "4", name: "\u00D6KK", subtitle: "Meilleur rapport qualit\u00E9-prix", desc: "\u00D6KK a obtenu la note de <strong>5,1/6</strong> dans l\u2019enqu\u00EAte Comparis 2025 et a remport\u00E9 la cat\u00E9gorie <strong>\u00ABqualit\u00E9-prix\u00BB</strong>. Cette caisse bas\u00E9e aux Grisons se distingue par des primes comp\u00E9titives et un service personnalis\u00E9.", forts: "Primes attractives, proximit\u00E9 client, satisfaction \u00E9lev\u00E9e, ancrage r\u00E9gional.", profil: "Assur\u00E9s des Grisons, de Suisse orientale et centrale, budgets serr\u00E9s exigeants sur le service." },
  { id: "kpt", num: "5", name: "KPT", subtitle: "La pionni\u00E8re du digital", desc: "La KPT obtient r\u00E9guli\u00E8rement les meilleures notes en satisfaction client dans les enqu\u00EAtes pan-suisses. <strong>Pr\u00E9curseure du mod\u00E8le num\u00E9rique</strong> avec sa souscription <strong>100 % en ligne</strong>, elle cible les assur\u00E9s connect\u00E9s.", forts: "Processus digitaux fluides, app performante, tarifs comp\u00E9titifs pour les jeunes adultes.", profil: "Jeunes adultes, \u00E9tudiants, assur\u00E9s autonomes ma\u00EEtrisant les outils num\u00E9riques." },
  { id: "sanitas", num: "6", name: "Sanitas", subtitle: "L\u2019\u00E9quilibre prestations-services", desc: "Avec une note globale de <strong>7,9/10</strong> sur FinanceScout24, Sanitas combine des primes raisonnables \u00E0 des services de qualit\u00E9. Sa filiale Compact propose des <strong>mod\u00E8les alternatifs tr\u00E8s comp\u00E9titifs</strong>.", forts: "App Sanitas Portal, programme Active365, bonne couverture en m\u00E9decine compl\u00E9mentaire.", profil: "Familles, sportifs, assur\u00E9s cherchant un bon \u00E9quilibre entre co\u00FBt et prestations." },
  { id: "concordia", num: "7", name: "Concordia", subtitle: "L\u2019historique solidaire", desc: "Fond\u00E9e en 1913 \u00E0 Zoug sur un principe de solidarit\u00E9, Concordia est une <strong>association \u00E0 but non lucratif</strong> appartenant \u00E0 ses assur\u00E9s. Les exc\u00E9dents leur sont redistribu\u00E9s sous forme de <strong>baisse de primes</strong>. Elle d\u00E9croche <strong>8,0/10</strong> en satisfaction.", forts: "Gestion mutualiste, primes stables, excellent service client, rabais familiaux.", profil: "Familles, assur\u00E9s attach\u00E9s \u00E0 un mod\u00E8le \u00E9thique et transparent." },
  { id: "visana", num: "8", name: "Visana", subtitle: "Sp\u00E9cialiste pr\u00E9vention", desc: "Visana (avec ses filiales Sana24, Galenos, Vivacare) se distingue par ses <strong>programmes de pr\u00E9vention</strong> et de sant\u00E9 au travail. L\u2019assureur bernois cible particuli\u00E8rement les <strong>PME</strong> et leurs collaborateurs.", forts: "Programmes sant\u00E9 entreprise, assurances compl\u00E9mentaires diversifi\u00E9es, pr\u00E9vention active.", profil: "Salari\u00E9s d\u2019entreprises partenaires, assur\u00E9s Suisse al\u00E9manique, seniors actifs." },
  { id: "sympany", num: "9", name: "Sympany", subtitle: "Le choix durable", desc: "Bas\u00E9e \u00E0 B\u00E2le, Sympany se positionne sur la <strong>durabilit\u00E9</strong> et le service client de proximit\u00E9. Elle propose un rabais pouvant aller jusqu\u2019\u00E0 <strong>7 %</strong> pour les personnes travaillant plus de 8h/semaine (exclusion couverture accidents).", forts: "Engagement \u00E9cologique, service r\u00E9gional, mod\u00E8les \u00E9conomiques clairs, application intuitive.", profil: "Assur\u00E9s soucieux d\u2019\u00E9thique, urbains de B\u00E2le et Suisse romande." },
  { id: "assura", num: "10", name: "Assura", subtitle: "Les primes les plus basses", desc: "Troisi\u00E8me groupe d\u2019assurance maladie du pays, Assura est la r\u00E9f\u00E9rence des <strong>primes basses en Suisse romande</strong>. Fond\u00E9e en 1978 \u00E0 Pully, elle mise sur l\u2019efficience administrative (<strong>moins de 4,2 % de frais de gestion</strong>).", forts: "Primes parmi les plus comp\u00E9titives, franchises \u00E0 option, mod\u00E8les alternatifs nombreux.", profil: "Assur\u00E9s en bonne sant\u00E9, consommateurs prudents, budgets prioritaires.", limites: "Satisfaction client plus modeste (7,3/10), remboursements parfois lents." },
];

const TABLE_DATA = [
  { caisse: "Helsana", satisfaction: "8,0", prime: "Moyenne-haute", atout: "Leader du march\u00E9" },
  { caisse: "SWICA", satisfaction: "8,0", prime: "Moyenne", atout: "Innovation digitale" },
  { caisse: "CSS", satisfaction: "7,7", prime: "Moyenne-haute", atout: "R\u00E9seau national" },
  { caisse: "\u00D6KK", satisfaction: "8,5", prime: "Basse-moyenne", atout: "Qualit\u00E9-prix" },
  { caisse: "KPT", satisfaction: "7,9", prime: "Basse", atout: "100 % digital" },
  { caisse: "Sanitas", satisfaction: "7,9", prime: "Moyenne", atout: "\u00C9quilibre global" },
  { caisse: "Concordia", satisfaction: "8,0", prime: "Moyenne", atout: "Mod\u00E8le mutualiste" },
  { caisse: "Visana", satisfaction: "7,8", prime: "Moyenne", atout: "Pr\u00E9vention" },
  { caisse: "Sympany", satisfaction: "7,6", prime: "Moyenne", atout: "Durabilit\u00E9" },
  { caisse: "Assura", satisfaction: "7,3", prime: "Basse", atout: "Prix imbattable" },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F3E0}", title: "Louer un appartement en Suisse : le guide complet", readTime: "12 min", category: "Logement" },
  { icon: "\u{1F4B0}", title: "Co\u00FBt de la vie en Suisse : budget complet 2026", readTime: "8 min", category: "Finances" },
  { icon: "\u{1F4CB}", title: "Permis B Suisse : d\u00E9marches et d\u00E9lais", readTime: "6 min", category: "Visa & Admin" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F3E5}", tag: "SANT\u00C9", title: "M\u00E9decin en Suisse : comment trouver et s\u2019inscrire", author: "Laura B.", date: "15 avril 2026", readTime: "5 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "3\u00E8me pilier : pourquoi commencer d\u00E8s votre arriv\u00E9e", author: "Karim D.", date: "10 avril 2026", readTime: "7 min" },
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "D\u00E9claration d\u2019imp\u00F4ts pour expatri\u00E9s : guide 2026", author: "Julie M.", date: "2 avril 2026", readTime: "9 min" },
];

/* ───────── PAGE ───────── */

export default function AssuranceMaladiePage() {
  return (
    <div className="bg-creme">
      {/* ===== HERO ===== */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>
            {"S'INSTALLER"}
          </span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Top 10 des meilleures caisses maladie<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>en Suisse en 2026</span>
          </h1>
          <div className="flex items-center gap-6 flex-wrap" style={{ marginTop: 24 }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>
                <span style={{ fontSize: 14 }}>{"\u{1F464}"}</span>
              </div>
              <div>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9quipe Kursor"}</p>
                <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 15 min de lecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT + SIDEBARS ===== */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10">

          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Sommaire</p>
                <ul className="list-none p-0 m-0">
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="font-body block" style={{ fontSize: 12, color: "#475569", lineHeight: 1.5, marginBottom: 6, paddingLeft: 0, textDecoration: "none" }}>
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
              Choisir sa <strong style={{ color: "#111827" }}>caisse maladie en Suisse</strong> n{"\u2019"}a jamais {"\u00E9"}t{"\u00E9"} aussi strat{"\u00E9"}gique. Avec une hausse moyenne des primes de <strong style={{ color: "#111827" }}>4,4 % en 2026</strong> et une prime adulte atteignant <strong style={{ color: "#111827" }}>393,30 CHF/mois</strong> en moyenne nationale, l{"\u2019"}{"\u00E9"}cart entre les assureurs peut repr{"\u00E9"}senter <strong style={{ color: "#111827" }}>plusieurs milliers de francs d{"\u2019"}{"\u00E9"}conomies par an</strong>. Mais les primes ne font pas tout : satisfaction client, qualit{"\u00E9"} du service, mod{"\u00E8"}les alternatifs et digitalisation p{"\u00E8"}sent lourd dans la balance.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Les prestations de l\u2019assurance de base (LAMal) sont <strong>identiques chez toutes les caisses</strong>, seules les primes et les services diff\u00E8rent.",
                  "Les meilleures caisses en satisfaction client 2025/2026 obtiennent <strong>5,1/6</strong> dans l\u2019enqu\u00EAte Comparis : Aquilana, Helsana, SWICA et \u00D6KK.",
                  "Changer de caisse permet d\u2019\u00E9conomiser jusqu\u2019\u00E0 <strong>3 800 CHF par an</strong>.",
                  "La r\u00E9siliation de l\u2019assurance de base est possible chaque ann\u00E9e jusqu\u2019au <strong>30 novembre</strong>.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodologie */}
            <h2 id="methodologie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Comment avons-nous \u00E9tabli ce classement ?"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"Nous avons crois\u00E9 plusieurs crit\u00E8res objectifs pour identifier les meilleures caisses maladie de 2026 :"}
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "<strong>Satisfaction client</strong> (enqu\u00EAtes Comparis et FinanceScout24 portant sur 4 500 assur\u00E9s)",
                "<strong>Comp\u00E9titivit\u00E9 des primes</strong> dans les principaux cantons",
                "<strong>Qualit\u00E9 du service</strong> et des remboursements",
                "<strong>Diversit\u00E9 des mod\u00E8les alternatifs</strong> (m\u00E9decin de famille, HMO, t\u00E9l\u00E9m\u00E9decine)",
                "<strong>Solidit\u00E9 financi\u00E8re</strong> et nombre d\u2019assur\u00E9s",
                "<strong>Services digitaux</strong> et applications mobiles",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* === 10 CAISSES === */}
            {CAISSES.map((c) => (
              <div key={c.id}>
                <h2 id={c.id} className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 8, scrollMarginTop: 80 }}>
                  {c.num}. {c.name} : <span className="italic" style={{ color: "#D97706" }}>{c.subtitle}</span>
                </h2>
                <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: c.desc }} />
                <div className="rounded-lg" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", padding: "16px 20px", marginBottom: 8 }}>
                  <p className="font-body" style={{ fontSize: 14, color: "#111827" }}><strong>Points forts :</strong> {c.forts}</p>
                </div>
                <div className="rounded-lg" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.2)", padding: "16px 20px", marginBottom: c.limites ? 8 : 32 }}>
                  <p className="font-body" style={{ fontSize: 14, color: "#111827" }}><strong style={{ color: "#D97706" }}>Profil recommand{"\u00E9"} :</strong> {c.profil}</p>
                </div>
                {c.limites && (
                  <div className="rounded-lg" style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", padding: "16px 20px", marginBottom: 32 }}>
                    <p className="font-body" style={{ fontSize: 14, color: "#111827" }}><strong style={{ color: "#DC2626" }}>Limites :</strong> {c.limites}</p>
                  </div>
                )}
              </div>
            ))}

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "<strong>Helsana et CSS</strong> dominent par leur taille et leur stabilit\u00E9.",
                  "<strong>SWICA, KPT et \u00D6KK</strong> excellent en satisfaction client.",
                  "<strong>Assura</strong> reste imbattable sur les primes, au prix d\u2019un service plus basique.",
                  "<strong>Concordia et Sympany</strong> se d\u00E9marquent par leur \u00E9thique et leur gestion durable.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tableau comparatif */}
            <h2 id="tableau" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>{"Tableau comparatif synth\u00E9tique"}</h2>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              <table className="w-full font-body" style={{ borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: "#111827" }}>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Caisse</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Satisfaction</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Prime 2026</th>
                    <th className="text-left" style={{ padding: "12px 16px", color: "#FFFFFF", fontWeight: 600 }}>Atout principal</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <tr key={row.caisse} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                      <td style={{ padding: "12px 16px", color: "#111827", fontWeight: 600 }}>{row.caisse}</td>
                      <td style={{ padding: "12px 16px", color: "#D97706", fontWeight: 600 }}>{row.satisfaction}</td>
                      <td style={{ padding: "12px 16px", color: "#475569" }}>{row.prime}</td>
                      <td style={{ padding: "12px 16px", color: "#475569" }}>{row.atout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comment choisir */}
            <h2 id="choisir" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment choisir la caisse qui vous correspond ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              {"La meilleure caisse maladie n\u2019existe pas dans l\u2019absolu : elle d\u00E9pend de votre profil, de votre canton de r\u00E9sidence et de vos habitudes de sant\u00E9. Posez-vous ces questions :"}
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { q: "Quelle est votre franchise id\u00E9ale ?", a: "De 300 CHF (couverture maximale) \u00E0 2 500 CHF (primes minimales)." },
                { q: "Privil\u00E9giez-vous le libre choix du m\u00E9decin ?", a: "Optez pour le mod\u00E8le standard, sinon choisissez m\u00E9decin de famille, HMO ou t\u00E9l\u00E9m\u00E9decine (jusqu\u2019\u00E0 25 % de r\u00E9duction)." },
                { q: "\u00CAtes-vous en bonne sant\u00E9 ?", a: "Une franchise \u00E9lev\u00E9e et un mod\u00E8le alternatif conviennent aux assur\u00E9s qui consultent peu." },
                { q: "Avez-vous besoin d\u2019assurances compl\u00E9mentaires ?", a: "Certaines caisses (Helsana, SWICA, Sanitas) excellent dans ce domaine." },
              ].map((item) => (
                <div key={item.q} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#D97706", fontWeight: 700, fontSize: 16 }}>?</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{item.q}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* A retenir 3 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Comparez chaque ann\u00E9e : les \u00E9carts de primes entre caisses peuvent d\u00E9passer <strong>1 500 CHF/an</strong> pour un m\u00EAme profil.",
                  "Le <strong>paiement annuel</strong> offre jusqu\u2019\u00E0 2 % de rabais chez plusieurs caisses.",
                  "<strong>Priminfo.ch</strong> (OFSP) propose un calculateur officiel et neutre des primes.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Changer de caisse */}
            <h2 id="changer" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment changer de caisse maladie en 2026 ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le changement suit un <strong style={{ color: "#111827" }}>calendrier strict</strong> :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {[
                { num: "1", title: "Comparez les offres", desc: "D\u00E8s la publication des primes 2026 (fin septembre 2025)." },
                { num: "2", title: "Envoyez la r\u00E9siliation", desc: "Par courrier recommand\u00E9 avant le 30 novembre." },
                { num: "3", title: "Souscrivez la nouvelle assurance", desc: "Toute caisse doit vous accepter sans condition pour la LAMal." },
                { num: "4", title: "Conservez votre compl\u00E9mentaire", desc: "Jusqu\u2019\u00E0 confirmation \u00E9crite de la nouvelle, car elle peut exiger un questionnaire de sant\u00E9." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginTop: 20, marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d\u2019aide pour choisir votre caisse maladie ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>
                {"Nos experts comparent les offres adapt\u00E9es \u00E0 votre profil. Diagnostic gratuit en 2 minutes."}
              </p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>
                {"Comparer les caisses \u2192"}
              </button>
            </div>

            {/* En resume */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                En 2026, choisir sa caisse maladie devient un v{"\u00E9"}ritable <strong style={{ color: "#111827" }}>levier d{"\u2019"}optimisation budg{"\u00E9"}taire</strong>. Entre la stabilit{"\u00E9"} rassurante des leaders (Helsana, CSS), l{"\u2019"}innovation de SWICA ou KPT, le rapport qualit{"\u00E9"}-prix d{"\u2019"}{"\u00D6"}KK, et la comp{"\u00E9"}titivit{"\u00E9"} d{"\u2019"}Assura, chaque profil trouve chaussure {"\u00E0"} son pied. La r{"\u00E8"}gle d{"\u2019"}or : <strong style={{ color: "#111827" }}>comparer chaque automne</strong>, ajuster franchise et mod{"\u00E8"}le selon vos besoins r{"\u00E9"}els, et ne pas h{"\u00E9"}siter {"\u00E0"} changer d{"\u00E8"}s que l{"\u2019"}{"\u00E9"}cart d{"\u00E9"}passe <strong style={{ color: "#111827" }}>500 CHF annuels</strong>.
              </p>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Comparez votre assurance</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>{"Diagnostic gratuit en 2 min. Trouvez la caisse id\u00E9ale pour votre profil."}</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  {"Faire mon diagnostic gratuit \u2192"}
                </button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
              </div>

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

      {/* ===== NEWSLETTER ===== */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pi\u00E8ges \u00E0 \u00E9viter, les \u00E9conomies \u00E0 faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>
              {"S\u2019inscrire \u2192"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
