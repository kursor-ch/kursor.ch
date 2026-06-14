import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Barème impôt revenu Suisse 2026 : IFD, tranches et calcul ICC",
  description: "Barèmes d’impôt en Suisse 2026 : tranches IFD officielles, barèmes cantonaux et méthode de calcul. Écart Zoug-Genève : plus de 30 000 CHF par an.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "trois-etages", label: "Les trois étages des barèmes" },
  { id: "ifd-2026", label: "Le barème IFD 2026 (officiel)" },
  { id: "baremes-cantonaux", label: "Les barèmes cantonaux" },
  { id: "coefficient-communal", label: "Le coefficient communal" },
  { id: "methode-calcul", label: "Méthode de calcul pas-à-pas" },
  { id: "splitting", label: "Splitting et couples mariés" },
];

const IFD_SEUL = [
  { revenu: "Jusqu’à 15 200 CHF", impot: "0 CHF", marginal: "0,77 %" },
  { revenu: "33 200 CHF", impot: "138,60 CHF", marginal: "+ 0,88 %" },
  { revenu: "43 500 CHF", impot: "229,20 CHF", marginal: "+ 2,64 %" },
  { revenu: "58 000 CHF", impot: "612 CHF", marginal: "+ 2,97 %" },
  { revenu: "76 200 CHF", impot: "1 152,50 CHF", marginal: "+ 5,94 %" },
  { revenu: "82 100 CHF", impot: "1 502,95 CHF", marginal: "+ 6,60 %" },
  { revenu: "108 900 CHF", impot: "3 271,75 CHF", marginal: "+ 8,80 %" },
  { revenu: "141 500 CHF", impot: "6 140,55 CHF", marginal: "+ 11,00 %" },
  { revenu: "185 100 CHF", impot: "10 936,55 CHF", marginal: "+ 13,20 %" },
  { revenu: "Au-delà de 794 000 CHF", impot: "91 310 CHF", marginal: "11,50 % (plafond)" },
];

const IFD_MARIE = [
  { revenu: "Jusqu’à 29 700 CHF", impot: "0 CHF", marginal: "1,00 %" },
  { revenu: "53 400 CHF", impot: "237 CHF", marginal: "+ 2,00 %" },
  { revenu: "79 100 CHF", impot: "929 CHF", marginal: "+ 4,00 %" },
  { revenu: "108 700 CHF", impot: "2 251 CHF", marginal: "+ 6,00 %" },
  { revenu: "138 400 CHF", impot: "4 290 CHF", marginal: "+ 9,00 %" },
  { revenu: "152 400 CHF", impot: "5 692 CHF", marginal: "+ 13,00 %" },
  { revenu: "Au-delà de 941 400 CHF", impot: "108 261 CHF", marginal: "11,50 % (plafond)" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4DD}", tag: "FISCALITÉ", title: "Impôts en Suisse pour les étrangers : guide 2026", author: "Équipe Kursor", date: "Avril 2026", readTime: "18 min" },
  { icon: "\u{1F4C8}", tag: "FISCALITÉ", title: "Optimisation fiscale en Suisse : 6 leviers pour 2026", author: "Équipe Kursor", date: "25 avril 2026", readTime: "16 min" },
  { icon: "\u{1F3AF}", tag: "PATRIMOINE", title: "3e pilier suisse : le guide complet 2026", author: "Équipe Kursor", date: "25 avril 2026", readTime: "12 min" },
];

/* ───────── TABLE COMPONENT ───────── */

function IfdTable({ rows }: { rows: { revenu: string; impot: string; marginal: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
            <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Revenu imposable</th>
            <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Impôt</th>
            <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>Taux marginal au-delà</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.revenu} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
              <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.revenu}</td>
              <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "10px 14px" }}>{row.impot}</td>
              <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.marginal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ───────── PAGE ───────── */

export default function ImpotSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>FISCALITÉ</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Barèmes d{"’"}impôt sur le revenu en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>guide complet 2026</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Mai 2026 {"·"} 12 min de lecture</p>
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
            {(() => {
              const img = getArticleImage("/impot-suisse");
              return img ? <GuideHeroImage src={img.src} alt={img.alt} /> : null;
            })()}
            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              En Suisse, il n{"’"}existe pas un barème d{"’"}impôt sur le revenu, mais <strong style={{ color: "#111827" }}>trois barèmes superposés</strong> : fédéral, cantonal et communal. Pour un même salaire, l{"’"}écart entre Zoug et Genève peut dépasser <strong style={{ color: "#111827" }}>30 000 CHF par an</strong>. Ce guide présente les barèmes officiels 2026 et la méthode de calcul, et complète notre dossier sur <a href="/impots-suisse-etrangers" style={{ color: "#D97706", textDecoration: "underline" }}>les impôts en Suisse pour les étrangers</a>.
            </p>

            {/* À retenir intro */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                L{"’"}IFD est plafonné constitutionnellement à <strong style={{ color: "#111827" }}>11,5 %</strong> et représente seulement 15 à 25 % de la facture. La majorité de l{"’"}impôt vient du barème cantonal, multiplié par le coefficient communal. Trois notions à distinguer : <strong style={{ color: "#111827" }}>taux marginal</strong> (de la tranche), <strong style={{ color: "#111827" }}>taux moyen</strong> (effectif réel) et <strong style={{ color: "#111827" }}>coefficient</strong> (multiplicateur communal).
              </p>
            </div>

            {/* Section 1 */}
            <h2 id="trois-etages" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>1. Les trois étages des barèmes suisses</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Tous les barèmes sur le revenu (sauf Uri) reposent sur la <strong style={{ color: "#111827" }}>progressivité par tranches</strong> : le revenu est découpé en paliers, chacun frappé d{"’"}un taux différent.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Conséquence directe : le <strong style={{ color: "#111827" }}>taux moyen est toujours inférieur au taux marginal</strong>. Une personne dans la {"«"} tranche à 13 % {"»"} ne paie jamais 13 % de la totalité de son revenu.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Chaque canton vote son propre barème, et chaque commune ajuste sa majoration via un coefficient. La Suisse compte environ <strong style={{ color: "#111827" }}>2 100 communes</strong> : il y a donc plus de 2 000 combinaisons cantonales et communales possibles, ce qui influence directement <a href="/cout-vie-en-suisse" style={{ color: "#D97706", textDecoration: "underline" }}>le coût de la vie en Suisse</a>.
            </p>

            {/* Section 2 */}
            <h2 id="ifd-2026" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>2. Le barème IFD 2026 (officiel)</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Le barème ci-dessous, défini par l{"’"}<strong style={{ color: "#111827" }}>article 36 LIFD</strong>, est entré en vigueur le 1er janvier 2026 par ordonnance du 10 septembre 2025.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Personnes seules</h3>
            <IfdTable rows={IFD_SEUL} />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Couples mariés et personnes seules avec enfants</h3>
            <IfdTable rows={IFD_MARIE} />

            <p className="font-body" style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.65, marginBottom: 16, fontStyle: "italic" }}>
              Source : Ordonnance fédérale sur la progression à froid, 10 septembre 2025.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              À cela s{"’"}ajoute une <strong style={{ color: "#111827" }}>déduction de 263 CHF par enfant</strong> directement sur l{"’"}impôt.
            </p>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                L{"’"}IFD 2026 démarre à <strong style={{ color: "#111827" }}>0 % jusqu{"’"}à 15 200 CHF</strong> (célibataire) ou <strong style={{ color: "#111827" }}>29 700 CHF</strong> (couple), et plafonne à 11,5 %. Le barème couples est nettement plus doux : un couple paie environ moitié moins d{"’"}IFD qu{"’"}un célibataire à revenu équivalent.
              </p>
            </div>

            {/* Section 3 */}
            <h2 id="baremes-cantonaux" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3. Les barèmes cantonaux</h2>

            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {[
                { canton: "Neuchâtel", desc: "Barème en <strong>24 tranches</strong>, taux marginal maximum de 13,86 % au-delà de 412 000 CHF. Splitting à 52 % pour couples mariés." },
                { canton: "Vaud", desc: "Barème détaillé avec impôt de base, puis + 47,5 % de centimes additionnels cantonaux, – 12 % de diminution d{’}impôt, + 1 % d{’}aide à domicile, et enfin centimes communaux. Splitting intégral à 50 %, splitting partiel à 55,56 % dans certains cas." },
                { canton: "Genève", desc: "Barème en <strong>17 tranches</strong>, le plus chargé de Suisse : taux marginal cumulé pouvant dépasser <strong>43 %</strong> sur les hauts revenus. S{’}ajoutent une taxe personnelle et un impôt sur la fortune élevés." },
                { canton: "Uri (l{’}exception)", desc: "Seul canton à appliquer une <strong>flat tax</strong> : taux unique d{’}environ <strong>25,61 %</strong>, quel que soit le revenu." },
                { canton: "Zoug", desc: "Barème cantonal très doux (taux maximum autour de 8 %), coefficients communaux faibles. Pour 150 000 CHF de revenu imposable, un célibataire paie environ <strong>18 600 CHF à Zoug</strong> contre plus de <strong>50 000 CHF à Genève</strong>." },
              ].map((c) => (
                <div key={c.canton} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "20px 24px" }}>
                  <p className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: "#D97706", marginBottom: 8 }}>{c.canton}</p>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: c.desc }} />
                </div>
              ))}
            </div>

            {/* Section 4 */}
            <h2 id="coefficient-communal" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>4. Le coefficient communal</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Multiplicateur appliqué à l{"’"}impôt cantonal de base. Si l{"’"}impôt cantonal est de <strong style={{ color: "#111827" }}>5 000 CHF</strong> :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "coefficient à <strong>60 %</strong> {→} impôt communal = 3 000 CHF",
                "coefficient à <strong>100 %</strong> {→} impôt communal = 5 000 CHF",
                "coefficient à <strong>120 %</strong> {→} impôt communal = 6 000 CHF",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\{\\u2192\}/g, "→") }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              À l{"’"}intérieur d{"’"}un même canton, l{"’"}écart peut atteindre <strong style={{ color: "#111827" }}>40 %</strong> sur l{"’"}impôt total simplement en changeant de commune. À Zurich, <strong style={{ color: "#111827" }}>Kilchberg (72 %)</strong> est environ 40 % moins chargée que <strong style={{ color: "#111827" }}>Birmensdorf (119 %)</strong>.
            </p>

            {/* Section 5 */}
            <h2 id="methode-calcul" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>5. Méthode de calcul pas-à-pas</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { num: "1", title: "Revenu imposable", desc: "Du brut, on déduit cotisations sociales, frais professionnels, primes assurance maladie, 3e pilier (jusqu{’}à 7 258 CHF en 2026), rachats LPP, intérêts hypothécaires." },
                { num: "2", title: "IFD", desc: "On applique le barème IFD au revenu imposable selon la situation (seul ou marié)." },
                { num: "3", title: "Impôt cantonal de base", desc: "On applique le barème cantonal, avec splitting si applicable." },
                { num: "4", title: "Centimes additionnels et coefficient communal", desc: "On ajoute les centimes cantonaux, on retire les diminutions éventuelles, puis on applique le coefficient communal." },
                { num: "5", title: "Total", desc: "IFD + impôt cantonal + impôt communal + taxes spécifiques." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }} dangerouslySetInnerHTML={{ __html: step.desc.replace(/\{\\u2019\}/g, "’") }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Exemple : célibataire à Lausanne, 80 000 CHF imposable</h3>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", marginBottom: 32 }}>
              {[
                { label: "IFD", val: "≈ 1 378 CHF", note: "(1 152,50 + 5,94 % × 3 800)" },
                { label: "Impôt cantonal de base", val: "≈ 8 800 CHF", note: "" },
                { label: "Centimes additionnels cantonaux (+ 47,5 %)", val: "+ 4 180 CHF", note: "" },
                { label: "Diminution d{’}impôt (– 12 %)", val: "– 1 560 CHF", note: "" },
                { label: "Aide à domicile (+ 1 %)", val: "+ 88 CHF", note: "" },
                { label: "Centimes communaux Lausanne (≈ 79 %)", val: "+ 6 950 CHF", note: "" },
              ].map((row, i) => (
                <div key={row.label} className="flex justify-between items-center font-body" style={{ padding: "12px 18px", borderBottom: "1px solid #F1F5F9", backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}>
                  <span style={{ fontSize: 14, color: "#475569" }} dangerouslySetInnerHTML={{ __html: row.label.replace(/\{\\u2019\}/g, "’") + (row.note ? ` <span style="color:#94A3B8;font-size:12px">${row.note}</span>` : "") }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{row.val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center font-body" style={{ padding: "14px 18px", backgroundColor: "rgba(217,119,6,0.08)" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>Total</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#D97706" }}>≈ 19 836 CHF (taux moyen 24,8 %)</span>
              </div>
            </div>

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Pour calculer entre deux tranches : on prend l{"’"}impôt dû au seuil inférieur, puis on ajoute le taux marginal × montant dépassant ce seuil. Le simulateur de l{"’"}<strong style={{ color: "#111827" }}>Administration fédérale des contributions</strong> (estv.admin.ch) reste l{"’"}outil de référence pour comparer canton et commune.
              </p>
            </div>

            {/* Section 6 */}
            <h2 id="splitting" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>6. Splitting et couples mariés</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>splitting</strong> applique au revenu commun le taux d{"’"}imposition correspondant à une fraction de ce revenu. Trois modèles coexistent :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 24 }}>
              {[
                "<strong>Splitting intégral à 50 %</strong> : Vaud, Fribourg, Bâle-Campagne. Le taux est calculé sur la moitié du revenu.",
                "<strong>Splitting à 52 %</strong> : Neuchâtel.",
                "<strong>Barème distinct couples mariés</strong> : IFD au niveau fédéral, mais aussi Genève, Berne, Zurich.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: "#111827" }}>Exemple Vaud</strong> : couple à 95 736 CHF : taux calculé sur 47 868 CHF (50 %), impôt de base à ce niveau = 3 486,60 CHF, multiplié par 2 = <strong style={{ color: "#111827" }}>6 973 CHF</strong> d{"’"}impôt cantonal de base. L{"’"}économie vs un célibataire au même revenu : plusieurs milliers de CHF.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              À noter : pour les couples avec revenus très élevés et similaires, l{"’"}IFD peut générer une {"«"} pénalité de mariage {"»"}. Une réforme vers l{"’"}imposition individuelle est en discussion au Parlement fédéral.
            </p>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En résumé</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Les barèmes d{"’"}impôt en Suisse forment un système à trois étages : <strong style={{ color: "#111827" }}>IFD fédéral progressif</strong> (0 % à 11,5 %), <strong style={{ color: "#111827" }}>barème cantonal</strong> (26 systèmes différents, du flat tax uranais aux 17 tranches genevoises), et <strong style={{ color: "#111827" }}>coefficient communal</strong> (multiplicateur de 50 % à 120 %+). Pour calculer son impôt : revenu imposable après déductions, IFD, barème cantonal avec splitting éventuel, centimes additionnels, coefficient communal. Trois leviers d{"’"}optimisation : choix de la commune, déductions (3e pilier, rachats LPP), splitting automatique pour les couples mariés. Pour aller plus loin, consultez notre guide complet sur <a href="/fiscalite-business" style={{ color: "#D97706", textDecoration: "underline" }}>l{"’"}optimisation fiscale en Suisse</a>.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Optimisez votre situation fiscale</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Diagnostic gratuit en 2 minutes pour identifier les déductions auxquelles vous avez droit selon votre canton.</p>
              <a href="/" className="font-body rounded-lg text-white no-underline" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Lancer mon diagnostic {"→"}</a>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Estimez votre impôt</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Simulez votre charge fiscale selon votre canton, situation familiale et revenus.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Estimer mes impôts {"→"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"·"} 2 minutes {"·"} Résultats immédiats</p>
              </div>
              <SidebarGuides exclude="/impot-suisse" />
            </div>
          </aside>
        </div>
      </section>

      {/* À LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827", marginBottom: 32 }}>À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} {"·"} {a.date}</p>
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
          <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Recevez nos conseils chaque semaine</h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Fiscalité, prévoyance, bons plans. Zéro superflu.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"’"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
