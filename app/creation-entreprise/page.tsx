import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer une société en Suisse : guide complet 2026",
  description: "Guide complet pour créer une société en Suisse : Sàrl, SA, raison individuelle, démarches, coûts, fiscalité, obligations et erreurs à éviter.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "qui-peut-creer", label: "Qui peut créer une société ?" },
  { id: "formes-juridiques", label: "Quelle forme juridique choisir ?" },
  { id: "etapes", label: "Les étapes clés" },
  { id: "couts-delais", label: "Coûts et délais" },
  { id: "obligations", label: "Les obligations après la création" },
];

const COMPARATIF = [
  { critere: "Capital minimum", ri: "Aucun", sarl: "20 000 CHF", sa: "100 000 CHF" },
  { critere: "Responsabilité fondateur", ri: "Illimitée", sarl: "Limitée à l'apport", sa: "Limitée à l'apport" },
  { critere: "Inscription RC", ri: "Dès 100k CHF CA", sarl: "Obligatoire", sa: "Obligatoire" },
  { critere: "Anonymat associés", ri: "Non", sarl: "Non (connu du RC)", sa: "Oui" },
  { critere: "Imposition", ri: "Revenu personnel", sarl: "Bénéfice société", sa: "Bénéfice société" },
  { critere: "Organe de révision", ri: "Non requis", sarl: "Sous conditions", sa: "Généralement requis" },
  { critere: "Crédibilité bancaire", ri: "Faible", sarl: "Bonne", sa: "Très bonne" },
];

const ETAPES = [
  { num: "1", title: "Choisir un nom d'entreprise", desc: "Vérifiez sa disponibilité au Registre du commerce avant toute démarche. Pour une entreprise individuelle, votre nom de famille doit obligatoirement figurer dans la raison sociale. Pour une Sàrl ou une SA, les dénominations fantaisistes sont autorisées, à condition d'ajouter la mention juridique correspondante." },
  { num: "2", title: "Rédiger les documents constitutifs", desc: "Statuts, acte authentique, formulaires Stampa et Lex Friedrich, signatures du conseil d'administration… Ces documents doivent être authentifiés par un notaire. Mieux vaut vous faire accompagner par un professionnel." },
  { num: "3", title: "Ouvrir un compte de consignation", desc: "Il s'agit d'un compte bancaire transitoire sur lequel vous déposez le capital. Une fois l'entreprise immatriculée, les fonds sont transférés sur le compte courant professionnel. Les montants minimums sont de <strong>20 000 CHF pour une Sàrl</strong> et <strong>50 000 CHF pour une SA</strong>." },
  { num: "4", title: "S'inscrire au Registre du commerce", desc: "Cette démarche est constitutive pour les Sàrl et les SA : sans inscription, la société n'existe pas juridiquement. Elle est facultative mais recommandée pour les Raisons Individuelles en dessous du seuil de chiffre d'affaires." },
  { num: "5", title: "Choisir le bon canton", desc: "L'imposition varie fortement d'un canton à l'autre. Certaines régions comme <strong>Zoug, Schwytz ou Lucerne</strong> offrent une fiscalité particulièrement avantageuse." },
];

const ERREURS = [
  { title: "Choisir la mauvaise forme juridique", desc: "Les implications fiscales et les coûts de transformation sont lourds. Faites-vous conseiller avant de vous lancer." },
  { title: "Négliger les statuts", desc: "Des statuts rédigés à la va-vite créent des conflits entre associés. Précisez les règles de cession de parts et de dissolution dès le début." },
  { title: "Confondre capital privé et professionnel", desc: "Mélanger les comptes est une faute comptable grave. Un compte séparé est obligatoire." },
  { title: "Oublier les assurances sociales", desc: "L'affiliation à l'AVS est obligatoire dès le début de l'activité. Un oubli entraîne des cotisations rétroactives avec pénalités." },
  { title: "Sous-estimer les coûts de fonctionnement", desc: "Comptabilité, audit, charges sociales, loyers… Prévoyez un budget de fonctionnement d'au moins 12 mois." },
  { title: "Ne pas protéger son nom ou sa marque", desc: "L'inscription au RC ne protège pas votre marque. Déposez-la auprès de l'IPI pour une protection complète." },
];

const SIMILAR_ARTICLES = [
  { icon: "\u{1F4B0}", title: "Fiscalité des entreprises en Suisse : le guide 2026", readTime: "11 min", category: "Fiscalité" },
  { icon: "\u{1F4BC}", title: "Trouver un emploi en Suisse : guide pratique", readTime: "10 min", category: "Emploi" },
  { icon: "\u{1F3E6}", title: "Ouvrir un compte bancaire professionnel en Suisse", readTime: "8 min", category: "Finances" },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait du Registre du commerce : comment l'obtenir", author: "Laura B.", date: "10 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B3}", tag: "FINANCES", title: "TVA en Suisse : tout ce que les indépendants doivent savoir", author: "Karim D.", date: "2 avril 2026", readTime: "7 min" },
  { icon: "\u{1F3E2}", tag: "ENTREPRENDRE", title: "Domiciliation d'entreprise en Suisse : avantages et limites", author: "Julie M.", date: "18 mars 2026", readTime: "6 min" },
];

const TAGS = ["Création d'entreprise", "SA", "Sàrl", "Registre du commerce", "Fiduciaire", "Suisse"];

/* ───────── PAGE ───────── */

export default function CreationEntreprisePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>ENTREPRENDRE</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Créer une société en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour réussir votre implantation</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 · 14 min de lecture</p>
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
            <p className="font-body" style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Avec sa fiscalité attractive, ses démarches administratives simplifiées et un écosystème entrepreneurial dynamique, la Suisse attire chaque année des milliers d'entrepreneurs étrangers. Que vous soyez frontalier français, expatrié ou simplement séduit par le modèle helvétique, créer une société en Suisse représente une opportunité stratégique. Encore faut-il connaître les bonnes démarches, choisir la forme juridique adaptée et anticiper les obligations légales. Ce guide vous livre toutes les clés pour réussir votre projet d'implantation, de la première idée à l'inscription au Registre du commerce.
            </p>

            {/* À retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La Suisse figure parmi les pays les plus compétitifs au monde pour entreprendre.",
                  "Les délais de création sont réduits : <strong>2 à 3 semaines</strong> en moyenne.",
                  "Un <strong>permis B ou G</strong> est indispensable pour les ressortissants de l'UE.",
                  "Le choix du canton impacte directement votre fiscalité.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 — Qui peut créer */}
            <h2 id="qui-peut-creer" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qui peut créer une société en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Bonne nouvelle pour les entrepreneurs français : la Confédération helvétique ouvre grand ses portes aux ressortissants de l'Union européenne. Il suffit de détenir un titre de séjour valide pour lancer votre activité sur le territoire.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Deux permis permettent de concrétiser votre projet :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "Le <strong>permis B</strong>, pour les résidents qui s'installent durablement en Suisse.",
                "Le <strong>permis G</strong>, destiné aux travailleurs frontaliers qui conservent leur domicile dans un pays limitrophe.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>•</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les conditions varient selon la structure choisie. Pour une <strong style={{ color: "#111827" }}>entreprise individuelle</strong>, le seul permis suffit. Pour une <strong style={{ color: "#111827" }}>Sàrl</strong>, au moins un gérant disposant du droit de signature doit être domicilié en territoire helvétique. Pour une <strong style={{ color: "#111827" }}>Société Anonyme</strong>, c'est au minimum un membre du conseil d'administration qui doit résider en Suisse.
            </p>

            {/* Section 2 — Formes juridiques */}
            <h2 id="formes-juridiques" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Quelle forme juridique choisir pour votre société ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Le choix de la structure est une étape décisive. Il dépend de votre budget de départ, de votre exposition au risque et du niveau de confidentialité souhaité pour les associés.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La Sàrl : le choix du plus grand nombre</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Plébiscitée par près de <strong style={{ color: "#111827" }}>44 % des entrepreneurs helvétiques</strong>, la Société à responsabilité limitée séduit par son équilibre entre souplesse et protection patrimoniale. Elle exige un capital social de <strong style={{ color: "#111827" }}>20 000 CHF</strong>, libérable en numéraire ou en nature. Les associés ne répondent jamais des dettes sur leurs biens personnels. Sa constitution passe obligatoirement par un acte notarié et une inscription au Registre du commerce.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La SA : pour les projets d'envergure</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Privilégiée par les moyennes et grandes entreprises, la Société Anonyme demande un capital-actions de <strong style={{ color: "#111827" }}>100 000 CHF</strong>, dont la moitié peut être libérée à la constitution. Elle garantit l'anonymat des actionnaires et facilite la levée de fonds. Comme la Sàrl, elle est imposée sur le bénéfice et le capital, avec une double imposition sur les dividendes versés.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La Raison Individuelle : rapide et économique</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Accessible à tout travailleur indépendant, elle ne nécessite aucun capital initial. Son inscription au Registre du commerce n'est obligatoire qu'au-delà de <strong style={{ color: "#111827" }}>100 000 CHF de chiffre d'affaires annuel</strong>. L'entrepreneur doit cependant obtenir une attestation d'indépendant auprès de la caisse de compensation AVS et justifier d'au moins trois clients distincts.
            </p>

            {/* Comparatif */}
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#111827" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textAlign: "left", padding: "12px 16px", textTransform: "uppercase" }}>Critère</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", textTransform: "uppercase" }}>Raison ind.</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", textTransform: "uppercase" }}>Sàrl</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 600, color: "#D97706", textAlign: "center", padding: "12px 16px", textTransform: "uppercase" }}>SA</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF.map((row, i) => (
                    <tr key={row.critere} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                      <td className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", padding: "12px 16px" }}>{row.critere}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.ri}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.sarl}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", textAlign: "center", padding: "12px 16px" }}>{row.sa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* À retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "La <strong>Sàrl</strong> reste la structure la plus populaire en Suisse (44 % des créations).",
                  "La <strong>SA</strong> est recommandée dès que vous projetez une levée de fonds importante.",
                  "La <strong>Raison Individuelle</strong> engage le patrimoine personnel de l'entrepreneur.",
                  "Aucune structure n'est universellement meilleure : tout dépend de votre projet.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 — Étapes */}
            <h2 id="etapes" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les étapes clés pour créer une entreprise en Suisse</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ETAPES.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4 — Coûts et délais */}
            <h2 id="couts-delais" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Coûts et délais : à quoi s'attendre ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Comparée à la France, la Suisse impressionne par sa rapidité administrative. Les documents constitutifs sont prêts en <strong style={{ color: "#111827" }}>24 à 48 heures</strong> chez les prestataires spécialisés, et le Registre du commerce traite généralement les dossiers en deux à trois semaines.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Côté budget, comptez environ :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "<strong>1 200 à 1 500 CHF</strong> pour créer une Sàrl ou une SA (notaire, Registre du commerce et compte de consignation inclus).",
                "<strong>150 à 350 CHF</strong> pour une Raison Individuelle.",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>•</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Certaines fiduciaires proposent même des services accélérés permettant d'obtenir l'immatriculation en <strong style={{ color: "#111827" }}>moins de 5 jours ouvrés</strong>, moyennant un supplément.
            </p>

            {/* À retenir 3 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le canton d'implantation influence directement votre fiscalité.",
                  "Les frais de création sont faibles par rapport à d'autres pays européens.",
                  "Un notaire est indispensable pour constituer une Sàrl ou une SA.",
                  "L'inscription au Registre peut être accélérée contre un supplément.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 — Obligations */}
            <h2 id="obligations" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les obligations après la création</h2>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Les assurances sociales</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              L'AVS (assurance vieillesse) est obligatoire pour tous les employeurs, avec un taux global de <strong style={{ color: "#111827" }}>10,6 %</strong> partagé entre employeur et salarié. La LPP (prévoyance professionnelle) devient obligatoire dès qu'un salarié gagne plus de 22 050 CHF bruts annuels. Les assurances accidents (AAP et AANP) sont également imposées par la loi.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>L'affiliation à la TVA</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Dès que votre chiffre d'affaires dépasse <strong style={{ color: "#111827" }}>100 000 CHF</strong>, l'inscription à la TVA devient obligatoire. Le taux normal s'élève à 8,1 % en 2026, avec des taux réduits pour l'hôtellerie (3,8 %) et les biens de première nécessité (2,6 %). En dessous du seuil, l'affiliation volontaire peut s'avérer intéressante pour récupérer la TVA sur les achats professionnels.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>La comptabilité et la révision</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Toutes les entreprises doivent tenir une comptabilité à jour et conserver leurs pièces justificatives pendant <strong style={{ color: "#111827" }}>dix ans</strong>. Les Sàrl et SA employant plus de 10 salariés à plein temps doivent également désigner un organe de révision. En dessous de ce seuil, la procédure d'opting-out permet de s'en dispenser.
            </p>

            {/* Erreurs */}
            <h2 className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs à éviter</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>⚠</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Besoin d'aide pour créer votre société en Suisse ?</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos partenaires fiduciaires vous accompagnent de A à Z. Premier entretien gratuit et sans engagement.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Trouver mon fiduciaire →</button>
            </div>

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En résumé</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Créer une société en Suisse est plus simple qu'on ne l'imagine, à condition d'être bien préparé. Le choix de la structure juridique, du canton d'implantation et du partenaire pour vous accompagner conditionnent la réussite de votre projet. Entre des délais courts, une fiscalité modulable et un écosystème économique porteur, la Suisse offre un terrain de jeu idéal pour les entrepreneurs français ambitieux. Avec un dossier solide et les bons conseils, votre société helvétique peut voir le jour en quelques semaines à peine.
              </p>
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
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Quelle société pour vous ?</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Diagnostic gratuit en 2 min. Identifiez la forme juridique adaptée à votre projet.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Faire mon diagnostic gratuit →</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit · 2 minutes · Résultats immédiats</p>
              </div>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Articles similaires</p>
                <div className="flex flex-col gap-3">
                  {SIMILAR_ARTICLES.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 rounded-lg cursor-pointer" style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                      <div className="flex items-center justify-center shrink-0 rounded-lg" style={{ width: 40, height: 40, backgroundColor: "rgba(217,119,6,0.08)", fontSize: 18 }}>{a.icon}</div>
                      <div>
                        <p className="font-body" style={{ fontSize: 13, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</p>
                        <p className="font-body" style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{a.readTime} · {a.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>Tous les articles →</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
                <div style={{ padding: "20px 24px" }}>
                  <span className="inline-block font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#D97706", marginBottom: 8 }}>{a.tag}</span>
                  <h3 className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{a.title}</h3>
                  <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
                    <p className="font-body" style={{ fontSize: 11, color: "#94A3B8" }}>{a.author} · {a.date}</p>
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Les pièges à éviter, les économies à faire.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S'inscrire →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
