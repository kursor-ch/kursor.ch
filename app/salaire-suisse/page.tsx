import type { Metadata } from "next";
import SalaireCalculator from "./SalaireCalculator";

export const metadata: Metadata = {
  title: "Calcul salaire net Suisse frontalier : simulateur 2026",
  description: "Simulateur salaire brut-net Suisse 2026 pour frontaliers et r\u00E9sidents. Cotisations, imp\u00F4t \u00E0 la source, LPP, taux par canton. Calcul instantan\u00E9.",
};

/* ───────── PAGE ───────── */

export default function SalaireSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO — H1 gauche + Simulateur droite */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 items-start" style={{ maxWidth: 1120 }}>
          {/* Left — H1 */}
          <div>
            <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>TRAVAILLER</span>
            <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
              Calcul salaire net Suisse frontalier :<br />
              <span className="font-heading italic" style={{ color: "#D97706" }}>comprendre votre fiche de paie en 2026</span>
            </h1>
            <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
              <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
              <div>
                <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9"}quipe Kursor</p>
                <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 12 min de lecture</p>
              </div>
            </div>
          </div>
          {/* Right — Simulateur (desktop) */}
          <div className="hidden lg:block">
            <SalaireCalculator />
          </div>
        </div>
      </section>

      {/* MOBILE — Simulateur */}
      <div className="block lg:hidden px-6 mx-auto" style={{ maxWidth: 1120, paddingTop: 32 }}>
        <SalaireCalculator />
      </div>

      {/* CONTENU SEO */}
      <section className="mx-auto px-6" style={{ maxWidth: 1120, paddingTop: 40, paddingBottom: 48 }}>
        <div style={{ maxWidth: 700 }}>

          {/* CONTENU */}
          <article>
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Convertir un salaire brut suisse en salaire net puis en euros ne se r{"\u00E9"}sume pas {"\u00E0"} une simple soustraction. Entre les cotisations sociales, l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source, le 2e pilier et le taux de change CHF/EUR, le calcul du salaire net d{"\u2019"}un frontalier suisse r{"\u00E9"}unit plusieurs param{"\u00E8"}tres qui m{"\u00E9"}ritent d{"\u2019"}{"\u00EA"}tre compris un par un. Ce guide complet vous explique comment passer du brut au net en Suisse, quels pr{"\u00E9"}l{"\u00E8"}vements s{"\u2019"}appliquent selon votre canton de travail et comment utiliser efficacement notre simulateur ci-contre.
            </p>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                En Suisse, les charges sociales pr{"\u00E9"}lev{"\u00E9"}es sur le salaire brut repr{"\u00E9"}sentent environ <strong style={{ color: "#111827" }}>13 {"\u00E0"} 17 %</strong>, contre pr{"\u00E8"}s de 23 % en France. {"\u00C0"} cela s{"\u2019"}ajoute l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source pour les travailleurs frontaliers, dont le taux varie selon le canton et la situation familiale.
              </p>
            </div>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>De quoi se compose un salaire brut en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Le salaire brut correspond {"\u00E0"} la r{"\u00E9"}mun{"\u00E9"}ration totale inscrite dans votre contrat avant toute d{"\u00E9"}duction. Il regroupe :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {["Le <strong>salaire fixe mensuel</strong>, parfois vers\u00E9 en 12 ou 13 mensualit\u00E9s", "La <strong>part variable</strong> : bonus, commissions, primes de performance", "Les <strong>indemnit\u00E9s</strong> : frais de repas, allocations de d\u00E9placement, allocations familiales, treizi\u00E8me salaire"].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12, marginTop: 24 }}>Le salaire est-il vers{"\u00E9"} en 12 ou 13 mois en Suisse ?</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les deux options existent. Le <strong style={{ color: "#111827" }}>13e salaire</strong> est tr{"\u00E8"}s r{"\u00E9"}pandu mais pas obligatoire : tout d{"\u00E9"}pend de la convention collective de travail (CCT) applicable ou du contrat individuel. Quand il est pr{"\u00E9"}vu, il est g{"\u00E9"}n{"\u00E9"}ralement vers{"\u00E9"} en fin d{"\u2019"}ann{"\u00E9"}e ou r{"\u00E9"}parti sur deux mois (juin et d{"\u00E9"}cembre).
            </p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>Les cotisations sociales obligatoires en 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>Tout salari{"\u00E9"} en Suisse voit son bulletin amput{"\u00E9"} de plusieurs cotisations. Voici le d{"\u00E9"}tail des taux en vigueur pour la part salariale :</p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 16 }}>
              <div className="flex font-body" style={{ backgroundColor: "rgba(217,119,6,0.08)", padding: "10px 18px", borderBottom: "1px solid rgba(217,119,6,0.2)" }}>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, flex: 1 }}>Cotisation</span>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, width: 120, textAlign: "right" }}>Taux 2026</span>
              </div>
              {[
                { name: "AVS / AI / APG (1er pilier)", taux: "5,30 %" },
                { name: "Assurance ch\u00F4mage (AC)", taux: "1,10 %" },
                { name: "LPP (2e pilier)", taux: "7 \u00E0 18 %" },
                { name: "AANP (accidents non pro.)", taux: "1 \u00E0 3 %" },
                { name: "Assurance maternit\u00E9 (GE)", taux: "0,038 %" },
              ].map((c) => (
                <div key={c.name} className="flex font-body" style={{ padding: "10px 18px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 14, color: "#475569", flex: 1 }}>{c.name}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827", width: 120, textAlign: "right" }}>{c.taux}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12, marginTop: 24 }}>Quel est le pourcentage de charges sur un salaire suisse ?</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les charges sociales {"\u00E0"} la charge du salari{"\u00E9"} repr{"\u00E9"}sentent environ <strong style={{ color: "#111827" }}>13 {"\u00E0"} 17 % du brut</strong>, selon l{"\u2019"}{"\u00E2"}ge (impact de la LPP, qui augmente avec les ann{"\u00E9"}es) et le canton.
            </p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>{"L\u2019imp\u00F4t \u00E0 la source : la sp\u00E9cificit\u00E9 des frontaliers"}</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              Contrairement aux r{"\u00E9"}sidents suisses qui remplissent une d{"\u00E9"}claration annuelle, les frontaliers voient leur imp{"\u00F4"}t directement pr{"\u00E9"}lev{"\u00E9"} sur leur fiche de paie. Ce syst{"\u00E8"}me repose sur un bar{"\u00E8"}me qui tient compte :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 24 }}>
              {["Du <strong>canton de travail</strong> (chaque canton applique son propre bar\u00E8me)", "De votre <strong>situation familiale</strong> (c\u00E9libataire, mari\u00E9, avec ou sans enfants)", "Du <strong>revenu du conjoint</strong> le cas \u00E9ch\u00E9ant", "De votre <strong>confession religieuse</strong> dans certains cantons"].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Un frontalier paie-t-il ses imp{"\u00F4"}ts en France ou en Suisse ?</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Cela d{"\u00E9"}pend exclusivement du canton de travail. <strong style={{ color: "#111827" }}>Gen{"\u00E8"}ve</strong> applique l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source directement en Suisse. Les huit cantons signataires de l{"\u2019"}accord fiscal de 1983 (<strong style={{ color: "#111827" }}>Vaud, Neuch{"\u00E2"}tel, Jura, Berne, B{"\u00E2"}le-Ville, B{"\u00E2"}le-Campagne, Valais, Soleure</strong>) redirigent l{"\u2019"}imposition vers la France.
            </p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>{"M\u00E9thode de calcul : du brut au net en pratique"}</h2>
            <div className="rounded-xl font-body" style={{ backgroundColor: "#111827", padding: "18px 24px", marginBottom: 24, fontSize: 15, color: "#FFFFFF", textAlign: "center", fontWeight: 600 }}>
              Salaire brut {"\u2013"} Cotisations sociales {"\u2013"} Imp{"\u00F4"}t {"\u00E0"} la source = Salaire net vers{"\u00E9"}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Exemple : 5 500 CHF brut {"\u00E0"} Gen{"\u00E8"}ve (c{"\u00E9"}libataire)</h3>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 16 }}>
              {[
                { label: "Salaire brut", val: "5 500,00 CHF", color: "#111827", bg: "rgba(217,119,6,0.05)" },
                { label: "AVS/AI/APG (5,3 %)", val: "\u2212 291,50 CHF", color: "#DC2626", bg: "#FFF" },
                { label: "AC (1,1 %)", val: "\u2212 60,50 CHF", color: "#DC2626", bg: "#FFF" },
                { label: "LPP (estimation 7 %)", val: "\u2212 385,00 CHF", color: "#DC2626", bg: "#FFF" },
                { label: "AANP (\u2248 1 %)", val: "\u2212 55,00 CHF", color: "#DC2626", bg: "#FFF" },
                { label: "Imp\u00F4t \u00E0 la source (GE)", val: "\u2212 350,00 CHF", color: "#DC2626", bg: "#FFF" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between font-body" style={{ padding: "10px 18px", borderBottom: "1px solid #F1F5F9", backgroundColor: row.bg }}>
                  <span style={{ fontSize: 14, color: "#475569" }}>{row.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: row.color }}>{row.val}</span>
                </div>
              ))}
              <div className="flex justify-between font-body" style={{ padding: "12px 18px", backgroundColor: "rgba(217,119,6,0.08)" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>Salaire net vers{"\u00E9"}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#D97706" }}>{"\u2248"} 4 358 CHF</span>
              </div>
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>Le ratio net/brut se situe en g{"\u00E9"}n{"\u00E9"}ral autour de <strong style={{ color: "#111827" }}>78 {"\u00E0"} 82 %</strong>.</p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>Le salaire minimum cantonal en 2026</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>La Suisse n{"\u2019"}a pas de SMIC national. Cinq cantons ont adopt{"\u00E9"} un salaire horaire minimum :</p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 16 }}>
              <div className="flex font-body" style={{ backgroundColor: "rgba(217,119,6,0.08)", padding: "10px 18px" }}>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, flex: 1 }}>Canton</span>
                <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, width: 180, textAlign: "right" }}>Minimum brut 2026</span>
              </div>
              {[
                { canton: "Gen\u00E8ve", min: "24,59 CHF/h" },
                { canton: "B\u00E2le-Ville", min: "22,20 CHF/h" },
                { canton: "Jura", min: "21,40 CHF/h" },
                { canton: "Neuch\u00E2tel", min: "21,35 CHF/h" },
                { canton: "Tessin", min: "20,25 \u00E0 20,50 CHF/h" },
              ].map((c) => (
                <div key={c.canton} className="flex font-body" style={{ padding: "10px 18px", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 14, color: "#475569", flex: 1 }}>{c.canton}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827", width: 180, textAlign: "right" }}>{c.min}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>{"\u00C0"} Gen{"\u00E8"}ve, pour 42h/semaine, le minimum repr{"\u00E9"}sente <strong style={{ color: "#111827" }}>4 463 CHF brut/mois</strong>.</p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>Le temps de travail : un param{"\u00E8"}tre qui change tout</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La semaine de travail standard en Suisse est de <strong style={{ color: "#111827" }}>42 heures</strong> (parfois 40-41), contre 35 heures en France. Le plafond l{"\u00E9"}gal monte jusqu{"\u2019"}{"\u00E0"} 45h dans les bureaux et 50h dans l{"\u2019"}h{"\u00F4"}tellerie.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Un salaire suisse apparemment sup{"\u00E9"}rieur de 40 % {"\u00E0"} son {"\u00E9"}quivalent fran{"\u00E7"}ais l{"\u2019"}est m{"\u00E9"}caniquement en partie {"\u00E0"} cause du <strong style={{ color: "#111827" }}>volume d{"\u2019"}heures travaill{"\u00E9"}es</strong>. Sans compter les temps de trajet, souvent longs et co{"\u00FB"}teux pour un frontalier.
            </p>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>Les charges invisibles qui r{"\u00E9"}duisent le net r{"\u00E9"}el</h2>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 24 }}>
              {["<strong>L\u2019assurance maladie</strong> : LAMal suisse ou CMU fran\u00E7aise sur d\u00E9rogation", "<strong>Les frais de transport</strong> : vignette, carburant, p\u00E9ages, abonnements TPG/CFF", "<strong>Le logement</strong> en zone frontali\u00E8re, dont les prix ont fortement augment\u00E9", "<strong>Le taux de change CHF/EUR</strong>, qui influe directement sur le montant en euros"].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Le salaire brut suisse inclut-il les allocations familiales ?</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Oui, elles figurent sur la fiche de paie mais ne sont pas soumises aux cotisations AVS/AI/APG. En 2026 : <strong style={{ color: "#111827" }}>200 {"\u00E0"} 300 CHF/mois par enfant</strong> selon le canton.
            </p>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Pour estimer correctement votre salaire net de frontalier, trois param{"\u00E8"}tres dominent : le <strong style={{ color: "#111827" }}>canton de travail</strong> (bar{"\u00E8"}me fiscal), la <strong style={{ color: "#111827" }}>situation familiale</strong> (taux d{"\u2019"}imp{"\u00F4"}t) et l{"\u2019"}<strong style={{ color: "#111827" }}>{"\u00E2"}ge</strong> (cotisation LPP). Le simulateur ci-contre int{"\u00E8"}gre ces trois variables.
              </p>
            </div>

            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16 }}>Comment utiliser notre simulateur</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Il suffit de renseigner :</p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {["Votre salaire brut annuel en CHF", "Le canton dans lequel vous travaillez", "Votre situation familiale", "Votre statut : frontalier ou r\u00E9sident"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le simulateur applique les taux officiels 2026 et restitue le d{"\u00E9"}tail ligne par ligne. Id{"\u00E9"}al pour anticiper une n{"\u00E9"}gociation salariale ou comparer deux offres entre cantons.
            </p>

            <div style={{ paddingTop: 24, borderTop: "1px solid #E2E8F0" }}>
              <p className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#94A3B8", marginBottom: 8 }}>Tags</p>
              <div className="flex flex-wrap gap-2">
                {["Salaire Suisse", "Frontalier", "Brut net", "Imp\u00F4t \u00E0 la source", "Cotisations", "LPP", "Gen\u00E8ve"].map((tag) => (
                  <span key={tag} className="font-body rounded-full" style={{ fontSize: 12, fontWeight: 500, color: "#475569", backgroundColor: "#F1F5F9", padding: "5px 14px", border: "1px solid #E2E8F0" }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{"Un email par semaine. Les pi\u00E8ges \u00E0 \u00E9viter, les \u00E9conomies \u00E0 faire."}</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>{"S\u2019inscrire \u2192"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
