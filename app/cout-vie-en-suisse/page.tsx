import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";
import { GuideHeroImage } from "@/components/articles/GuideHeroImage";
import { getArticleImage } from "@/lib/article-images";

export const metadata: Metadata = {
  title: "Coût de la vie en Suisse 2026 : prix, budget et salaire réel",
  description: "Combien coûte la vie en Suisse en 2026 ? Prix réels, assurance LAMal, impôts par canton et budgets mensuels types pour bien préparer votre installation.",
  alternates: {
    canonical: "https://kursor.ch/cout-vie-en-suisse",
  },
  other: {
    "geo.region": "CH",
    "geo.placename": "Suisse",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "reponse-rapide", label: "Coût de la vie : la réponse rapide" },
  { id: "pourquoi-cher", label: "Pourquoi la vie est-elle si chère" },
  { id: "prix-par-poste", label: "Le détail des prix par poste" },
  { id: "logement", label: "Le logement" },
  { id: "sante-lamal", label: "Santé et assurance maladie LAMal" },
  { id: "fiscalite", label: "La fiscalité" },
  { id: "ville-par-ville", label: "Coût de la vie ville par ville" },
  { id: "budgets-types", label: "Budgets mensuels types" },
  { id: "voyage", label: "Pour un voyage en Suisse" },
  { id: "faq", label: "FAQ" },
];

const ALIMENTATION = [
  { produit: "Pain (500 g)", prix: "3,00 à 3,50 CHF", eur: "~3,5 €" },
  { produit: "Lait (1 L)", prix: "1,60 à 1,80 CHF", eur: "~1,9 €" },
  { produit: "Douzaine d’œufs", prix: "5,50 à 6,50 CHF", eur: "~6,5 €" },
  { produit: "Fromage (1 kg)", prix: "20 à 25 CHF", eur: "~24 €" },
  { produit: "Poulet (1 kg)", prix: "22 à 28 CHF", eur: "~27 €" },
  { produit: "Pommes (1 kg)", prix: "3,00 à 3,80 CHF", eur: "~3,7 €" },
  { produit: "Bouteille de vin (entrée de gamme)", prix: "10 à 14 CHF", eur: "~13 €" },
];

const RESTAURANTS = [
  { produit: "Repas, restaurant économique", prix: "22 à 25 CHF", eur: "~26 €" },
  { produit: "Repas, restaurant milieu de gamme (par pers.)", prix: "50 à 60 CHF", eur: "~60 €" },
  { produit: "Menu fast-food", prix: "14 à 16 CHF", eur: "~16 €" },
  { produit: "Café (cappuccino)", prix: "4,50 à 5,50 CHF", eur: "~5,3 €" },
  { produit: "Bière pression (0,5 L)", prix: "6,50 à 8,00 CHF", eur: "~7,7 €" },
];

const TRANSPORTS = [
  { produit: "Billet de transport en commun (unité)", prix: "3,00 à 3,80 CHF", eur: "~3,8 €" },
  { produit: "Abonnement mensuel urbain", prix: "75 à 90 CHF", eur: "~90 €" },
  { produit: "Essence (1 L)", prix: "1,75 à 1,90 CHF", eur: "~2,0 €" },
  { produit: "Abonnement général train (AG, à l’année)", prix: "~3 900 CHF/an", eur: "~4 175 €/an" },
];

const ENERGIE_TELECOM = [
  { produit: "Charges (eau, électricité, chauffage)", prix: "200 à 250 CHF/mois", eur: "~240 €" },
  { produit: "Forfait mobile", prix: "35 à 45 CHF/mois", eur: "~43 €" },
  { produit: "Internet haut débit", prix: "45 à 55 CHF/mois", eur: "~53 €" },
  { produit: "Abonnement salle de sport", prix: "70 à 90 CHF/mois", eur: "~85 €" },
];

const LOGEMENT = [
  { type: "Studio", centre: "1 400 à 1 800 CHF", peri: "1 200 à 1 450 CHF" },
  { type: "Appartement 3 pièces", centre: "2 200 à 3 200 CHF", peri: "1 900 à 2 600 CHF" },
  { type: "Appartement 4 à 5 pièces", centre: "3 000 à 4 500 CHF", peri: "2 500 à 3 500 CHF" },
];

const LAMAL = [
  { profil: "Adulte", prime: "300 à 450 CHF (≈ 320 à 480 €)" },
  { profil: "Jeune adulte (19 à 25 ans)", prime: "250 à 350 CHF (≈ 270 à 375 €)" },
  { profil: "Enfant", prime: "100 à 150 CHF (≈ 105 à 160 €)" },
];

const VILLES = [
  { ville: "Zurich", suisse: "+8 %", france: "~+95 %" },
  { ville: "Genève", suisse: "≈ moyenne", france: "~+78 %" },
  { ville: "Zoug", suisse: "+12 %", france: "~+93 %" },
  { ville: "Lausanne", suisse: "−2 %", france: "~+75 %" },
  { ville: "Berne", suisse: "−1 %", france: "~+79 %" },
  { ville: "Bâle", suisse: "−1 %", france: "~+78 %" },
  { ville: "Lucerne", suisse: "+5 %", france: "~+90 %" },
  { ville: "Lugano", suisse: "−5 %", france: "~+68 %" },
  { ville: "Fribourg", suisse: "−5 %", france: "~+65 %" },
  { ville: "Neuchâtel", suisse: "−10 %", france: "~+56 %" },
];

const BUDGET_ETUDIANT = [
  { poste: "Logement (chambre / colocation)", budget: "600 à 900 CHF" },
  { poste: "Assurance maladie (tarif jeune)", budget: "250 à 350 CHF" },
  { poste: "Alimentation", budget: "400 à 500 CHF" },
  { poste: "Transport", budget: "50 à 80 CHF" },
  { poste: "Loisirs, divers", budget: "200 à 300 CHF" },
];

const BUDGET_SEUL = [
  { poste: "Loyer (studio / 2 pièces)", budget: "1 300 à 1 800 CHF" },
  { poste: "Assurance maladie", budget: "350 à 450 CHF" },
  { poste: "Alimentation", budget: "500 à 650 CHF" },
  { poste: "Transport", budget: "80 à 100 CHF" },
  { poste: "Télécoms, énergie", budget: "120 à 160 CHF" },
  { poste: "Loisirs, restaurants, divers", budget: "400 à 700 CHF" },
];

const BUDGET_COUPLE = [
  { poste: "Loyer (3 pièces)", budget: "2 000 à 3 000 CHF" },
  { poste: "Assurance maladie (× 2)", budget: "700 à 900 CHF" },
  { poste: "Alimentation", budget: "800 à 1 000 CHF" },
  { poste: "Transport", budget: "150 à 250 CHF" },
  { poste: "Télécoms, énergie", budget: "180 à 250 CHF" },
  { poste: "Loisirs, restaurants, divers", budget: "700 à 1 200 CHF" },
];

const BUDGET_FAMILLE = [
  { poste: "Loyer (4 à 5 pièces)", budget: "2 600 à 4 000 CHF" },
  { poste: "Assurance maladie (2 adultes + 2 enfants)", budget: "900 à 1 300 CHF" },
  { poste: "Alimentation", budget: "1 200 à 1 600 CHF" },
  { poste: "Transport", budget: "200 à 350 CHF" },
  { poste: "Télécoms, énergie", budget: "200 à 280 CHF" },
  { poste: "Garde d’enfants / frais scolaires", budget: "0 à 2 000 CHF (très variable)" },
  { poste: "Loisirs, divers", budget: "800 à 1 400 CHF" },
];

const FAQ = [
  { q: "Quel salaire faut-il pour bien vivre en Suisse en 2026 ?", a: "Pour une personne seule, un salaire net de <strong>4 500 à 5 500 CHF/mois</strong> (≈ 4 815 à 5 885 €) permet de vivre confortablement dans la plupart des cantons. Pour une famille avec deux enfants, il faut viser 9 000 à 12 000 CHF nets de revenus cumulés selon le canton et le mode de garde. Ces seuils montent sensiblement à Genève et Zurich." },
  { q: "Quelle est la ville la moins chère pour s’installer en Suisse ?", a: "Parmi les villes offrant un vrai bassin d’emploi, <strong>Neuchâtel, Fribourg et Lugano</strong> sont les plus abordables. En élargissant aux périphéries et aux cantons de Suisse centrale (hors Zoug), on trouve des arbitrages encore plus favorables, surtout en combinant loyer modéré et fiscalité douce." },
  { q: "L’assurance maladie est-elle vraiment obligatoire ?", a: "Oui. La LAMal est obligatoire pour tout résident, sans exception, à souscrire dans les <strong>trois mois</strong> suivant l’arrivée. Elle est individuelle (un contrat par personne, enfants compris) et payée directement par l’assuré, en plus du salaire." },
  { q: "Le coût de la vie en Suisse annule-t-il l’avantage du salaire ?", a: "Non, pas pour la majorité des profils. Même en intégrant le logement, l’assurance maladie et les impôts, le revenu disponible reste en moyenne supérieur à celui d’un poste équivalent en France. L’avantage se réduit toutefois fortement à Genève et Zurich, et dépend beaucoup du loyer que vous parvenez à négocier." },
  { q: "Vivre en Suisse coûte-t-il plus cher qu’être frontalier ?", a: "Habiter en Suisse, c’est payer le logement suisse (le poste le plus cher) mais bénéficier des transports courts et de la fiscalité locale. Être frontalier, c’est un logement moins cher côté France mais des trajets, et un régime fiscal et d’assurance spécifique. L’arbitrage dépend du canton de travail et de votre situation familiale, à calculer au cas par cas." },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4DD}", tag: "FISCALITÉ", title: "Impôts en Suisse pour les étrangers : guide 2026", author: "Équipe Kursor", date: "Avril 2026", readTime: "18 min" },
  { icon: "\u{1F4B0}", tag: "EMPLOI", title: "Calcul salaire net suisse frontalier", author: "Équipe Kursor", date: "Avril 2026", readTime: "12 min" },
  { icon: "\u{1F3E5}", tag: "ASSURANCES", title: "Assurance maladie en Suisse : bien choisir", author: "Équipe Kursor", date: "Avril 2026", readTime: "15 min" },
];

/* ───────── PRICE TABLE COMPONENT ───────── */

function PriceTable({ rows, headers }: { rows: { produit?: string; prix?: string; eur?: string; type?: string; centre?: string; peri?: string; profil?: string; prime?: string; ville?: string; suisse?: string; france?: string; poste?: string; budget?: string }[]; headers: string[] }) {
  const keys = Object.keys(rows[0]);
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
            {headers.map((h) => (
              <th key={h} className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
              {keys.map((k, idx) => (
                <td key={k} className="font-body" style={{ fontSize: 13, color: idx === 0 ? "#111827" : "#475569", fontWeight: idx === 0 ? 600 : 400, padding: "10px 14px" }}>
                  {(row as Record<string, string>)[k]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ───────── BUDGET TABLE WITH TOTAL ───────── */

function BudgetTable({ rows, total }: { rows: { poste: string; budget: string }[]; total: string }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
            <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Poste</th>
            <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Budget mensuel</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.poste} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
              <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "10px 14px" }}>{row.poste}</td>
              <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.budget}</td>
            </tr>
          ))}
          <tr style={{ backgroundColor: "rgba(217,119,6,0.08)", borderTop: "2px solid rgba(217,119,6,0.25)" }}>
            <td className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#111827", padding: "12px 14px" }}>Total</td>
            <td className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#D97706", padding: "12px 14px" }}>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ───────── PAGE ───────── */

export default function CoutVieEnSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>S{"’"}INSTALLER</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Coût de la vie en Suisse en 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour s{"’"}installer</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Mai 2026 {"·"} 15 min de lecture</p>
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
              const img = getArticleImage("/cout-vie-en-suisse");
              return img ? <GuideHeroImage src={img.src} alt={img.alt} /> : null;
            })()}
            {/* Intro */}
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              S{"’"}installer en Suisse fait rêver beaucoup d{"’"}expatriés : salaires élevés, qualité de vie, stabilité. Mais une question revient toujours en premier : est-ce que le coût de la vie va absorber le gain de salaire ? La réponse honnête : la Suisse est chère, nettement plus que la France, mais le pouvoir d{"’"}achat y reste supérieur une fois l{"’"}équation complète posée. Encore faut-il intégrer les bons postes, notamment ceux qu{"’"}on oublie : l{"’"}assurance maladie obligatoire et la fiscalité cantonale.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
              Ce guide détaille les prix réels en 2026, poste par poste, en francs suisses, puis reconstruit des budgets mensuels concrets selon votre profil, à compléter par notre <a href="/s-installer-en-suisse-pour-un-francais" style={{ color: "#D97706", textDecoration: "underline" }}>guide complet pour s{"’"}installer en Suisse</a>. Données 2026, taux de change indicatif retenu : 1 CHF ≈ 1,07 €.
            </p>

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir : l{"’"}essentiel en un coup d{"’"}œil</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le coût de la vie en Suisse est en moyenne <strong>70 à 80 % plus élevé qu’en France</strong> en 2026, mais le pouvoir d’achat local reste supérieur d’environ <strong>45 %</strong> grâce aux salaires.",
                  "Le salaire brut médian tourne autour de <strong>6 500 CHF/mois</strong> (≈ 6 950 €) en 2026.",
                  "Le logement est le poste le plus lourd : <strong>1 400 à 1 700 CHF</strong> pour un studio, <strong>2 500 à 3 200 CHF</strong> pour un 3-4 pièces en ville.",
                  "L’assurance maladie (LAMal) est obligatoire et individuelle : <strong>300 à 450 CHF/mois</strong> par adulte en 2026, à budgéter dès le premier jour. Ce n’est pas prélevé sur le salaire.",
                  "Les écarts entre cantons sont énormes : vivre à Fribourg, en Valais ou en Suisse centrale coûte bien moins cher qu’à Genève ou Zurich.",
                  "Budgets mensuels : célibataire <strong>3 500 à 4 500 CHF</strong>, couple <strong>5 500 à 7 000 CHF</strong>, famille deux enfants <strong>8 000 à 10 000 CHF</strong>.",
                  "Les prix alimentaires sont <strong>50 à 90 % plus chers qu’en France</strong>, mais le différentiel s’atténue chez Aldi, Lidl, Denner.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"•"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="reponse-rapide" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le coût de la vie en Suisse en 2026 : la réponse rapide</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              En 2026, vivre en Suisse coûte environ <strong style={{ color: "#111827" }}>70 à 80 % de plus qu{"’"}en France</strong> pour un panier de biens et services équivalent. Mais cette comparaison brute est trompeuse si on s{"’"}arrête là.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le bon indicateur, c{"’"}est le <strong style={{ color: "#111827" }}>pouvoir d{"’"}achat</strong> : ce qu{"’"}il reste réellement une fois les dépenses payées. Avec un salaire médian autour de <strong style={{ color: "#111827" }}>6 500 CHF brut par mois</strong> en 2026, soit près de trois fois le salaire médian français en valeur faciale, le résident suisse conserve, en moyenne, un pouvoir d{"’"}achat supérieur de 45 % environ, en particulier dans <a href="/meilleures-entreprises-suisses" style={{ color: "#D97706", textDecoration: "underline" }}>les meilleures entreprises en Suisse</a>. Autrement dit : oui, tout est plus cher, mais on gagne suffisamment plus pour que l{"’"}arbitrage reste favorable, à condition de ne pas négliger deux postes spécifiques que les comparateurs ignorent : l{"’"}assurance maladie et les impôts, tous deux à votre charge directe et très variables selon le canton.
            </p>

            {/* Section 2 */}
            <h2 id="pourquoi-cher" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Pourquoi la vie est-elle si chère en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Avant les chiffres, le {"«"} pourquoi {"»"}, parce qu{"’"}il explique pourquoi certains postes flambent et d{"’"}autres non.
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {[
                { title: "Le niveau des salaires", desc: "C’est la cause première. Des salaires élevés tirent vers le haut le prix de tout ce qui repose sur de la main-d’œuvre locale : restauration, services, artisanat, santé. Un repas ou une coupe de cheveux coûtent cher parce que celui qui les rend est bien payé." },
                { title: "Le franc suisse fort", desc: "Une monnaie solide renchérit mécaniquement le pays pour quiconque raisonne en euros, et protège le pouvoir d’achat des résidents sur les produits importés." },
                { title: "Un marché intérieur protégé", desc: "L’agriculture suisse est soutenue et protégée, ce qui explique des prix alimentaires élevés, en particulier sur la viande et les produits laitiers locaux." },
                { title: "Un haut niveau d’exigence sur les infrastructures et les services", desc: "Transports publics ponctuels, propreté, qualité du système de santé : ce niveau de service a un coût, répercuté dans les prix et les primes." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              À l{"’"}inverse, certains postes restent proches des prix français, voire en dessous : l{"’"}essence, l{"’"}électronique, certains vêtements de marque et même les cigarettes. La Suisse n{"’"}est pas {"«"} chère partout {"»"} uniformément ; elle est chère surtout sur le logement, la santé, la restauration et l{"’"}alimentation locale.
            </p>

            {/* Section 3 */}
            <h2 id="prix-par-poste" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le détail des prix par poste en 2026</h2>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 24, fontStyle: "italic" }}>
              Tous les prix ci-dessous sont des moyennes nationales 2026, en CHF avec équivalent en euros (taux indicatif : 1 CHF ≈ 1,07 €). Un même produit coûte plus cher à Genève ou Zurich qu{"’"}à Fribourg ou en Valais.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Alimentation et épicerie</h3>
            <PriceTable rows={ALIMENTATION} headers={["Produit", "Prix moyen Suisse", "Équiv. €"]} />
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 32 }}>
              <strong style={{ color: "#D97706" }}>Conseil budget :</strong> l{"’"}écart avec la France se creuse surtout chez Migros et Coop. Chez Aldi, Lidl ou Denner, on réduit la facture alimentaire de 20 à 30 %. Beaucoup de frontaliers et de résidents proches de la frontière complètent aussi par des courses en France.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Restaurants et sorties</h3>
            <PriceTable rows={RESTAURANTS} headers={["Poste", "Prix moyen Suisse", "Équiv. €"]} />
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              La restauration est l{"’"}un des postes où le différentiel avec la France est le plus marqué (environ +75 %). C{"’"}est aussi le levier d{"’"}économie le plus simple : cuisiner chez soi change radicalement le budget mensuel.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Transports</h3>
            <PriceTable rows={TRANSPORTS} headers={["Poste", "Prix moyen Suisse", "Équiv. €"]} />
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Le réseau de transports publics suisse est dense, ponctuel et largement utilisé. Beaucoup de résidents se passent de voiture en ville, ce qui compense en partie le coût des abonnements. L{"’"}essence, elle, reste proche des prix français.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Logement, énergie, télécoms</h3>
            <PriceTable rows={ENERGIE_TELECOM} headers={["Poste", "Prix moyen Suisse", "Équiv. €"]} />
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 32, fontStyle: "italic" }}>
              Le logement lui-même mérite sa propre section, ci-dessous : c{"’"}est de loin le poste le plus structurant de votre budget.
            </p>

            {/* Section 4 — Logement */}
            <h2 id="logement" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le logement : le poste qui décide de tout</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le loyer est, et de loin, la première dépense d{"’"}un résident en Suisse. C{"’"}est aussi le poste où les écarts géographiques sont les plus violents. Fourchettes 2026 :
            </p>
            <PriceTable rows={LOGEMENT} headers={["Type de logement", "Centre-ville", "Périphérie"]} />
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Ces fourchettes recouvrent des réalités très différentes : un 3 pièces à Genève ou Zurich se situe en haut de fourchette (voire au-delà), alors que le même logement à Fribourg, Neuchâtel, en Valais ou dans le Jura se trouve en bas de fourchette, parfois 30 à 40 % moins cher.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Points de vigilance pour un nouvel arrivant :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "Le marché locatif est tendu dans les grandes villes (Zurich, Genève, Lausanne, Zoug). Trouver un logement peut prendre du temps et demande un dossier solide.",
                "Une <strong>caution de 1 à 3 mois</strong> de loyer est généralement exigée, déposée sur un compte bloqué.",
                "Beaucoup de loyers sont annoncés <strong>hors charges</strong> : à vérifier systématiquement.",
                "<strong>Acheter est très coûteux</strong> : le prix au m² en ville dépasse fréquemment 15 000 CHF. La location est la norme, y compris pour les hauts revenus.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"•"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Section 5 — LAMal */}
            <h2 id="sante-lamal" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La santé et l{"’"}assurance maladie LAMal : le poste que personne ne budgète</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              C{"’"}est l{"’"}angle mort numéro un quand on prépare son installation, et la mauvaise surprise classique du premier mois.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              En Suisse, l{"’"}assurance maladie de base (LAMal) est <strong style={{ color: "#111827" }}>obligatoire, individuelle, et n{"’"}est PAS prélevée sur le salaire</strong>. Chaque résident, y compris chaque enfant, doit souscrire son propre contrat auprès d{"’"}une caisse privée, dans les trois mois suivant son arrivée. La prime est payée directement par l{"’"}assuré, en plus de toutes ses autres dépenses. Pour bien choisir <a href="/assurance-maladie" style={{ color: "#D97706", textDecoration: "underline" }}>la caisse maladie en Suisse</a>, mieux vaut comparer chaque automne.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Combien ça coûte en 2026</h3>
            <PriceTable rows={LAMAL} headers={["Profil", "Prime mensuelle indicative (2026)"]} />
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La prime varie selon trois facteurs : le <strong style={{ color: "#111827" }}>canton</strong> (les primes genevoises et bâloises sont parmi les plus élevées, les primes de Suisse centrale parmi les plus basses), la <strong style={{ color: "#111827" }}>caisse choisie</strong> (la concurrence joue, il faut comparer chaque année), et la <strong style={{ color: "#111827" }}>franchise</strong> que vous sélectionnez.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              <strong style={{ color: "#111827" }}>Le mécanisme de la franchise.</strong> Vous choisissez une franchise annuelle entre 300 et 2 500 CHF. Plus la franchise est haute, plus la prime mensuelle baisse, mais plus vous payez de votre poche avant que l{"’"}assurance n{"’"}intervienne. À cela s{"’"}ajoute une quote-part de 10 % sur les frais dépassant la franchise (plafonnée à 700 CHF/an pour un adulte). En clair : une franchise élevée est un pari rentable si vous êtes en bonne santé et consultez peu. Pensez aussi à domicilier votre salaire sur <a href="/meilleure-banque-suisse" style={{ color: "#D97706", textDecoration: "underline" }}>un compte bancaire en Suisse</a> adapté pour éviter les frais de change inutiles.
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir pour le budget</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Pour une famille de quatre personnes, l{"’"}assurance maladie représente facilement <strong style={{ color: "#111827" }}>900 à 1 300 CHF par mois</strong> (≈ 965 à 1 390 €) en 2026. C{"’"}est un poste aussi lourd qu{"’"}un demi-loyer, et il doit figurer dans vos calculs dès le départ. Des subsides cantonaux existent pour les revenus modestes, mais ils ne concernent pas la majorité des expatriés salariés.
              </p>
            </div>

            {/* Section 6 — Fiscalité */}
            <h2 id="fiscalite" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>La fiscalité : pourquoi le canton change tout</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les impôts sont l{"’"}autre poste {"«"} invisible {"»"} qui pèse lourd, et qui dépend massivement de votre lieu de résidence.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La Suisse a un système fiscal à trois niveaux : Confédération, canton, commune. L{"’"}impôt fédéral est modeste et identique partout, mais les cantons et communes fixent librement <a href="/impot-suisse" style={{ color: "#D97706", textDecoration: "underline" }}>les taux d{"’"}imposition en Suisse</a>. Conséquence : pour un même salaire, la charge fiscale totale peut varier du simple à presque le double selon que vous habitez <strong style={{ color: "#111827" }}>Zoug, Schwytz ou Nidwald</strong> (faible fiscalité) ou <strong style={{ color: "#111827" }}>Genève, Vaud ou Neuchâtel</strong> (fiscalité plus lourde).
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pour les expatriés titulaires d{"’"}un permis B ou L, l{"’"}impôt est en général prélevé à la source directement sur le salaire par l{"’"}employeur, ce qui le rend moins {"«"} visible {"»"} mais bien réel. Les titulaires d{"’"}un permis C déclarent leurs revenus comme les citoyens suisses.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Ce guide se concentre sur le coût de la vie ; la fiscalité mérite à elle seule un traitement détaillé. Consultez notre guide <a href="/impots-suisse-etrangers" style={{ color: "#D97706", textDecoration: "underline" }}>Impôts en Suisse pour les étrangers</a>. Le point à retenir pour votre budget : le choix du canton, et même de la commune, est une décision financière, pas seulement géographique. Sur une carrière, l{"’"}écart se chiffre en dizaines de milliers de francs.
            </p>

            {/* Section 7 — Ville par ville */}
            <h2 id="ville-par-ville" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Le coût de la vie ville par ville (2026)</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              L{"’"}indice ci-dessous compare le coût de la vie global de chaque ville à la moyenne suisse (et l{"’"}écart approximatif avec la France), sur la base des données 2026.
            </p>
            <PriceTable rows={VILLES} headers={["Ville", "Vs moyenne suisse", "Vs France"]} />
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              <strong style={{ color: "#111827" }}>Lecture rapide :</strong> Zurich, Zoug et Lucerne sont les villes les plus chères. Genève est chère sur le logement et les primes maladie mais proche de la moyenne sur le reste. Les villes romandes hors Genève (Fribourg, Neuchâtel) et le Tessin (Lugano) offrent le meilleur rapport coût de la vie / proximité des bassins d{"’"}emploi. Pour un expatrié, viser la périphérie d{"’"}un canton fiscalement avantageux est souvent l{"’"}arbitrage le plus rentable.
            </p>

            {/* Section 8 — Budgets */}
            <h2 id="budgets-types" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Budgets mensuels types : combien prévoir selon votre profil</h2>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, marginBottom: 24, fontStyle: "italic" }}>
              Budgets reconstitués pour 2026, en CHF, pour un niveau de vie correct sans excès. Ils intègrent tous les postes, y compris l{"’"}assurance maladie, trop souvent oubliée. Fourchette basse = canton/ville abordable ; fourchette haute = Genève/Zurich.
            </p>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Étudiant</h3>
            <BudgetTable rows={BUDGET_ETUDIANT} total="1 500 à 2 100 CHF (≈ 1 605 à 2 250 €)" />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Personne seule active</h3>
            <BudgetTable rows={BUDGET_SEUL} total="2 750 à 3 850 CHF (≈ 2 945 à 4 120 €), hors impôts" />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Couple, deux actifs</h3>
            <BudgetTable rows={BUDGET_COUPLE} total="4 530 à 6 600 CHF (≈ 4 850 à 7 060 €), hors impôts" />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Famille avec deux enfants</h3>
            <BudgetTable rows={BUDGET_FAMILLE} total="5 900 à 10 900 CHF (≈ 6 315 à 11 665 €), hors impôts" />

            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                <strong style={{ color: "#D97706" }}>À noter :</strong> ces totaux sont hors impôts, puisque la charge fiscale dépend du canton, de la commune et du revenu exact. Comptez, selon les cas, 8 à 20 % du revenu brut en plus. La garde d{"’"}enfants est le poste le plus volatil : une crèche privée peut dépasser 2 000 CHF/mois par enfant, mais les places subventionnées et le mode de garde changent tout.
              </p>
            </div>

            {/* Section 9 — Voyage */}
            <h2 id="voyage" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Et pour un simple voyage en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Si votre question porte sur un séjour touristique et non une installation, le raisonnement est différent. Comptez en 2026 un budget sur place d{"’"}environ <strong style={{ color: "#111827" }}>180 à 220 CHF par jour et par personne</strong> (≈ 195 à 235 €), sur la base d{"’"}un hôtel milieu de gamme partagé à deux, deux repas et les transports. Un voyage plus économique (auberge, repas préparés, marche et transports publics) descend autour de 90 à 120 CHF/jour ; un séjour confortable dépasse facilement 300 CHF/jour.
            </p>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>Pour résumer</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                La Suisse est un pays cher : le logement, la restauration, l{"’"}alimentation locale et surtout l{"’"}assurance maladie pèsent lourd, et la fiscalité cantonale peut faire varier le budget de façon significative. Mais le niveau des salaires fait plus que compenser ces coûts pour la plupart des profils qualifiés : le pouvoir d{"’"}achat réel y reste supérieur à celui de la France. La clé d{"’"}une installation réussie tient en trois décisions : <strong style={{ color: "#111827" }}>choisir son canton</strong> (logement + impôts + primes maladie), <strong style={{ color: "#111827" }}>budgéter l{"’"}assurance maladie</strong> dès le premier jour comme un poste fixe incompressible, et <strong style={{ color: "#111827" }}>raisonner en revenu disponible</strong> plutôt qu{"’"}en salaire brut.
              </p>
            </div>

            {/* Section 10 — FAQ */}
            <h2 id="faq" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Questions fréquentes</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {FAQ.map((item) => (
                <details key={item.q} className="rounded-xl bg-white group" style={{ border: "1px solid #E2E8F0" }}>
                  <summary className="font-heading cursor-pointer list-none flex items-center justify-between" style={{ fontSize: 16, fontWeight: 600, color: "#111827", padding: "16px 20px" }}>
                    {item.q}
                    <span className="font-body shrink-0 transition-transform duration-200 group-open:rotate-45" style={{ fontSize: 22, color: "#D97706", marginLeft: 12 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 20px 18px" }}>
                    <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Évaluez votre projet d{"’"}installation en Suisse</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Diagnostic gratuit en 2 minutes pour estimer votre revenu disponible et choisir le bon canton.</p>
              <a href="/" className="font-body rounded-lg text-white no-underline" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Lancer mon diagnostic {"→"}</a>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Simulez votre budget</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Évaluez votre revenu disponible selon votre canton, situation familiale et salaire.</p>
                <a href="/" className="font-body rounded-lg text-white no-underline w-full" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Faire mon diagnostic {"→"}</a>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"·"} 2 minutes {"·"} Résultats immédiats</p>
              </div>
              <SidebarGuides exclude="/cout-vie-en-suisse" />
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Budgets, fiscalité, bons plans. Zéro superflu.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"’"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
