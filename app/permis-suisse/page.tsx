import Link from "next/link";
import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";

export const metadata: Metadata = {
  title: "Permis de s\u00E9jour en Suisse : le guide complet pour bien choisir et obtenir le v\u00F4tre",
  description: "Guide complet des permis de s\u00E9jour suisses : permis B, C, L, G, frontalier, \u00C9tats tiers. D\u00E9marches, conditions, renouvellement et naturalisation.",
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "qui-a-besoin", label: "Qui a besoin d\u2019un permis ?" },
  { id: "permis-ue", label: "Permis UE/AELE" },
  { id: "permis-etats-tiers", label: "Permis \u00C9tats tiers" },
  { id: "comment-obtenir", label: "Comment obtenir votre permis" },
  { id: "renouvellement", label: "Renouvellement et cas particuliers" },
  { id: "naturalisation", label: "Vers la naturalisation" },
  { id: "erreurs", label: "Erreurs \u00E0 \u00E9viter" },
];

const PERMIS_UE = [
  { name: "Permis L", subtitle: "Courte dur\u00E9e", desc: "Destin\u00E9 aux s\u00E9jours de <strong>moins de 12 mois</strong>, il concerne les contrats de travail \u00E0 dur\u00E9e d\u00E9termin\u00E9e, missions temporaires ou formations courtes. Il est renouvelable une fois dans certains cas." },
  { name: "Permis B", subtitle: "S\u00E9jour", desc: "C\u2019est le permis \u00ABclassique\u00BB pour une installation durable. <strong>Valable 5 ans</strong>, il est d\u00E9livr\u00E9 aux personnes disposant d\u2019un contrat de travail d\u2019au moins 12 mois, d\u2019une activit\u00E9 ind\u00E9pendante viable, ou de ressources financi\u00E8res suffisantes. Il est <strong>renouvelable automatiquement</strong> tant que les conditions restent remplies." },
  { name: "Permis C", subtitle: "\u00C9tablissement", desc: "Le <strong>graal des permis</strong>. Il offre un droit de s\u00E9jour illimit\u00E9, sans conditions de revenu ni obligation de travailler. Il s\u2019obtient g\u00E9n\u00E9ralement apr\u00E8s <strong>5 ans de r\u00E9sidence continue</strong> pour certains pays (Allemagne, France, Italie, Autriche), ou <strong>10 ans</strong> pour les autres. Il ouvre la voie \u00E0 la <strong>naturalisation facilit\u00E9e</strong>." },
  { name: "Permis Ci", subtitle: "S\u00E9jour avec activit\u00E9 lucrative", desc: "Ce permis sp\u00E9cifique concerne les <strong>conjoints et enfants de membres de repr\u00E9sentations diplomatiques</strong> ou d\u2019organisations internationales (ONU, OMS, etc.) souhaitant exercer une activit\u00E9 professionnelle." },
  { name: "Permis G", subtitle: "Frontalier", desc: "D\u00E9di\u00E9 aux personnes r\u00E9sidant dans un \u00C9tat UE/AELE limitrophe mais <strong>travaillant en Suisse</strong>. Le titulaire doit rentrer \u00E0 son domicile au moins une fois par semaine. Tr\u00E8s utilis\u00E9 par les <strong>frontaliers fran\u00E7ais, allemands, italiens et autrichiens</strong>." },
];

const PERMIS_TIERS = [
  { name: "Permis L", desc: "S\u00E9jour de courte dur\u00E9e (jusqu\u2019\u00E0 12 mois)" },
  { name: "Permis B", desc: "S\u00E9jour durable, souvent li\u00E9 \u00E0 un contrat de travail qualifi\u00E9" },
  { name: "Permis C", desc: "\u00C9tablissement illimit\u00E9, apr\u00E8s 10 ans de r\u00E9sidence continue" },
  { name: "Permis Ci", desc: "Conjoints/enfants du personnel diplomatique" },
  { name: "Permis G", desc: "Frontalier (avec restrictions suppl\u00E9mentaires)" },
  { name: "Permis F", desc: "Admission provisoire (personnes ne pouvant \u00EAtre renvoy\u00E9es)" },
  { name: "Permis N", desc: "Requ\u00E9rants d\u2019asile en proc\u00E9dure" },
  { name: "Permis S", desc: "Protection provisoire (personnes fuyant l\u2019Ukraine)" },
];

const DEMARCHES = [
  { num: "1", title: "Avant l\u2019arriv\u00E9e", desc: "Pour un \u00C9tat tiers, l\u2019employeur ou l\u2019universit\u00E9 d\u00E9pose souvent la demande aupr\u00E8s du canton. Pour un ressortissant UE/AELE, la d\u00E9marche peut s\u2019effectuer apr\u00E8s l\u2019arriv\u00E9e." },
  { num: "2", title: "Annonce \u00E0 l\u2019arriv\u00E9e", desc: "Annoncez-vous au contr\u00F4le des habitants de votre commune dans un d\u00E9lai de 14 jours, avant toute prise d\u2019emploi." },
  { num: "3", title: "Documents \u00E0 fournir", desc: "Passeport ou carte d\u2019identit\u00E9, contrat de travail (ou preuves de ressources), attestation de domicile, photo format passeport." },
  { num: "4", title: "D\u00E9livrance du titre", desc: "Vous recevez votre carte TS19 au format carte de cr\u00E9dit, g\u00E9n\u00E9ralement dans un d\u00E9lai de 2 \u00E0 8 semaines selon le canton." },
];

const ERREURS = [
  { title: "Attendre pour s\u2019annoncer", desc: "Le d\u00E9lai de 14 jours apr\u00E8s l\u2019arriv\u00E9e est strict. Un retard peut entra\u00EEner une amende." },
  { title: "Changer d\u2019emploi sans v\u00E9rifier", desc: "Certaines conditions de votre permis peuvent \u00EAtre li\u00E9es \u00E0 votre employeur, notamment pour les \u00C9tats tiers." },
  { title: "Quitter la Suisse trop longtemps", desc: "Une absence de plus de 6 mois peut faire perdre un permis B, et plus encore pour le permis C." },
  { title: "N\u00E9gliger l\u2019int\u00E9gration", desc: "Connaissance de la langue locale, respect de l\u2019ordre public et autonomie financi\u00E8re sont scrut\u00E9s lors des renouvellements." },
];


const RELATED_ARTICLES = [
  { icon: "\u{1F4CB}", tag: "ADMINISTRATIF", title: "Extrait de poursuites : comment l\u2019obtenir rapidement", author: "Laura B.", date: "5 avril 2026", readTime: "4 min" },
  { icon: "\u{1F4B0}", tag: "FINANCES", title: "Ouvrir un compte bancaire en Suisse : guide 2026", author: "Karim D.", date: "28 mars 2026", readTime: "6 min" },
  { icon: "\u{1F3E0}", tag: "LOGEMENT", title: "Colocation en Suisse : droits, contrats et bons plans", author: "Julie M.", date: "12 mars 2026", readTime: "7 min" },
];

/* ───────── PAGE ───────── */

export default function PermisSuissePage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>{"S'INSTALLER"}</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Permis de s{"\u00E9"}jour en Suisse :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>le guide complet pour bien choisir et obtenir le v{"\u00F4"}tre</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{"\u00C9quipe Kursor"}</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Avril 2026 {"\u00B7"} 14 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBARS */}
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
              Vous projetez de vivre, travailler ou {"\u00E9"}tudier en Suisse ? Avant m{"\u00EA"}me de chercher un logement, une {"\u00E9"}tape est incontournable : obtenir le bon <strong style={{ color: "#111827" }}>permis de s{"\u00E9"}jour</strong>. Entre les cat{"\u00E9"}gories <strong style={{ color: "#111827" }}>UE/AELE</strong> et <strong style={{ color: "#111827" }}>{"\u00C9"}tats tiers</strong>, les permis B, C, L, G ou encore Ci, le syst{"\u00E8"}me peut sembler complexe. Ce guide vous aide {"\u00E0"} identifier le titre qui correspond {"\u00E0"} votre situation.
            </p>

            {/* A retenir 1 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Tout s\u00E9jour de <strong>plus de 3 mois</strong> en Suisse n\u00E9cessite un permis.",
                  "Les ressortissants <strong>UE/AELE</strong> b\u00E9n\u00E9ficient de la libre circulation, avec des d\u00E9marches simplifi\u00E9es.",
                  "Les ressortissants d\u2019<strong>\u00C9tats tiers</strong> sont soumis \u00E0 des contingents annuels et \u00E0 des conditions plus strictes.",
                  "Le permis doit \u00EAtre demand\u00E9 aupr\u00E8s de l\u2019<strong>autorit\u00E9 cantonale des migrations</strong> ou de la commune de r\u00E9sidence.",
                  "Le titre actuel se pr\u00E9sente sous forme d\u2019une <strong>carte plastique TS19</strong> au format carte de cr\u00E9dit.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 1 */}
            <h2 id="qui-a-besoin" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Qui a besoin d{"\u2019"}un permis de s{"\u00E9"}jour en Suisse ?</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              La r{"\u00E8"}gle est claire : toute personne {"\u00E9"}trang{"\u00E8"}re qui souhaite rester <strong style={{ color: "#111827" }}>plus de 90 jours</strong> sur le territoire helv{"\u00E9"}tique doit disposer d{"\u2019"}un titre de s{"\u00E9"}jour. En de{"\u00E7"}{"\u00E0"}, un simple visa touristique suffit.
            </p>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>Le type de permis d{"\u00E9"}pend de trois crit{"\u00E8"}res :</p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 16 }}>
              {[
                "Votre <strong>nationalit\u00E9</strong> (UE/AELE ou \u00C9tat tiers)",
                "La <strong>dur\u00E9e pr\u00E9vue</strong> de votre s\u00E9jour",
                "Le <strong>motif</strong> : travail, \u00E9tudes, regroupement familial, retraite, asile",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 6 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Les <strong style={{ color: "#111827" }}>27 pays de l{"\u2019"}UE</strong> et les <strong style={{ color: "#111827" }}>4 pays de l{"\u2019"}AELE</strong> (Islande, Norv{"\u00E8"}ge, Liechtenstein, Suisse) b{"\u00E9"}n{"\u00E9"}ficient d{"\u2019"}un accord privil{"\u00E9"}gi{"\u00E9"}. Les ressortissants d{"\u2019"}autres pays sont class{"\u00E9"}s {"\u00AB"}{"\u00C9"}tats tiers{"\u00BB"} et font l{"\u2019"}objet de r{"\u00E8"}gles plus restrictives.
            </p>

            {/* Section 2 — Permis UE */}
            <h2 id="permis-ue" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les permis pour ressortissants UE/AELE</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>Cinq types de permis sont pr{"\u00E9"}vus pour les citoyens europ{"\u00E9"}ens et AELE :</p>
            <div className="flex flex-col gap-4" style={{ marginBottom: 32 }}>
              {PERMIS_UE.map((p) => (
                <div key={p.name} className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: "24px" }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#D97706" }}>{p.name}</span>
                    <span style={{ fontSize: 13, color: "#94A3B8" }}>{"\u2014"}</span>
                    <span className="font-body italic" style={{ fontSize: 14, color: "#64748B" }}>{p.subtitle}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              ))}
            </div>

            {/* Section 3 — Permis Etats tiers */}
            <h2 id="permis-etats-tiers" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Les permis pour ressortissants d{"\u2019"}{"\u00C9"}tats tiers</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Les citoyens hors UE/AELE disposent d{"\u2019"}une palette plus large, mais avec des <strong style={{ color: "#111827" }}>conditions d{"\u2019"}obtention nettement plus exigeantes</strong> :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: 16 }}>
              {PERMIS_TIERS.map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 18px" }}>
                  <span style={{ fontWeight: 700, color: "#D97706", fontSize: 13, minWidth: 80 }}>{p.name}</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              L{"\u2019"}obtention d{"\u2019"}un permis B pour un ressortissant d{"\u2019"}{"\u00C9"}tat tiers suppose une <strong style={{ color: "#111827" }}>qualification professionnelle {"\u00E9"}lev{"\u00E9"}e</strong>, un employeur pr{"\u00EA"}t {"\u00E0"} justifier son recrutement et le respect des <strong style={{ color: "#111827" }}>contingents cantonaux</strong> fix{"\u00E9"}s annuellement par le Conseil f{"\u00E9"}d{"\u00E9"}ral.
            </p>

            {/* Section 4 — Comment obtenir */}
            <h2 id="comment-obtenir" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Comment obtenir votre permis de s{"\u00E9"}jour ?</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
              {DEMARCHES.map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span className="flex items-center justify-center shrink-0 font-heading" style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "rgba(217,119,6,0.1)", color: "#D97706", fontWeight: 600, fontSize: 15 }}>{step.num}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{step.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", marginBottom: 16 }}>Les frais varient de <strong style={{ color: "#111827" }}>60 {"\u00E0"} 160 CHF</strong> selon les cantons et le type de permis.</p>

            {/* A retenir 2 */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>{"\u00C0 retenir"}</p>
              <ul className="list-none p-0 m-0">
                {[
                  "Le permis L est <strong>temporaire</strong> (max 12 mois), le permis B est <strong>renouvelable</strong>, le permis C est <strong>d\u00E9finitif</strong>.",
                  "Le passage du permis B au permis C intervient apr\u00E8s <strong>5 ou 10 ans</strong> selon votre nationalit\u00E9.",
                  "<strong>Gen\u00E8ve</strong> applique parfois des proc\u00E9dures sp\u00E9cifiques : les demandes passent directement par le canton.",
                  "Les frontaliers (permis G) doivent rentrer \u00E0 leur domicile <strong>au moins une fois par semaine</strong>.",
                  "Un permis peut \u00EAtre retir\u00E9 en cas de d\u00E9pendance durable \u00E0 l\u2019aide sociale ou de condamnations p\u00E9nales graves.",
                ].map((item) => (
                  <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 6 }}>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2022"}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 — Renouvellement */}
            <h2 id="renouvellement" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Renouvellement et cas particuliers</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le renouvellement se demande entre <strong style={{ color: "#111827" }}>3 mois et 2 semaines avant expiration</strong>, aupr{"\u00E8"}s de la commune ou du canton. Documents requis :
            </p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
              {["Le permis en cours de validit\u00E9", "Le passeport ou carte d\u2019identit\u00E9 (valide au moins 3 mois au-del\u00E0 de la nouvelle \u00E9ch\u00E9ance)", "L\u2019\u00E9ventuel avis de fin de validit\u00E9 envoy\u00E9 par le canton"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "14px 18px", fontSize: 14, color: "#111827" }}>
                  <span style={{ color: "#D97706", fontWeight: 600 }}>{"\u2713"}</span>
                  {item}
                </div>
              ))}
            </div>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>En cas de perte ou de vol</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>
              Rendez-vous au <strong style={{ color: "#111827" }}>poste de police</strong> pour obtenir un avis de perte, puis au contr{"\u00F4"}le des habitants avec votre passeport et une photo. Un duplicata est {"\u00E9"}mis moyennant des frais.
            </p>

            <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 12 }}>S{"\u00E9"}paration, divorce ou d{"\u00E9"}c{"\u00E8"}s du conjoint</h3>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>
              Si vous r{"\u00E9"}sidez en Suisse gr{"\u00E2"}ce au regroupement familial, ces {"\u00E9"}v{"\u00E9"}nements peuvent affecter votre droit de s{"\u00E9"}jour. Il existe des protections :
            </p>
            <ul className="list-none p-0 m-0" style={{ marginBottom: 32 }}>
              {[
                "<strong>Ressortissants UE/AELE</strong> : vous conservez votre droit de s\u00E9jour si vous travaillez ou disposez de ressources suffisantes.",
                "<strong>Ressortissants d\u2019\u00C9tats tiers</strong> : vous pouvez prolonger votre titre si vous avez v\u00E9cu en couple au moins 3 ans, \u00EAtes bien int\u00E9gr\u00E9, ou si des raisons personnelles majeures l\u2019exigent (violence conjugale, r\u00E9int\u00E9gration impossible).",
              ].map((item) => (
                <li key={item} className="font-body flex items-start gap-2" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ color: "#D97706" }}>{"\u2022"}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Section 6 — Naturalisation */}
            <h2 id="naturalisation" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Vers la naturalisation</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Le <strong style={{ color: "#111827" }}>permis C</strong> est souvent per{"\u00E7"}u comme l{"\u2019"}antichambre de la <strong style={{ color: "#111827" }}>naturalisation suisse</strong>. Les titulaires peuvent demander la naturalisation ordinaire apr{"\u00E8"}s <strong style={{ color: "#111827" }}>10 ans de r{"\u00E9"}sidence</strong> (les ann{"\u00E9"}es pass{"\u00E9"}es entre 8 et 18 ans comptent double).
            </p>
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Une <strong style={{ color: "#D97706" }}>naturalisation facilit{"\u00E9"}e</strong> existe pour les conjoints de Suisses, apr{"\u00E8"}s <strong>5 ans de r{"\u00E9"}sidence</strong> et <strong>3 ans de mariage</strong>.
              </p>
            </div>

            {/* Section 7 — Erreurs */}
            <h2 id="erreurs" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>Erreurs {"\u00E0"} {"\u00E9"}viter</h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: 32 }}>
              {ERREURS.map((err) => (
                <div key={err.title} className="flex items-start gap-3 rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "16px 20px" }}>
                  <span style={{ color: "#DC2626", fontSize: 16, flexShrink: 0 }}>{"\u26A0"}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{err.title}</p>
                    <p style={{ fontSize: 14, color: "#64748B", marginTop: 2 }}>{err.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>{"Besoin d\u2019aide avec votre permis de s\u00E9jour ?"}</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Nos experts vous accompagnent dans vos d{"\u00E9"}marches. Diagnostic gratuit en 2 minutes.</p>
              <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>{"D\u00E9couvrir nos formations \u2192"}</button>
            </div>

            {/* En resume */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En r{"\u00E9"}sum{"\u00E9"}</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Choisir le bon permis de s{"\u00E9"}jour, c{"\u2019"}est bien comprendre sa situation personnelle et les r{"\u00E8"}gles qui s{"\u2019"}y appliquent. Ressortissant <strong style={{ color: "#111827" }}>UE/AELE</strong>, vous b{"\u00E9"}n{"\u00E9"}ficiez d{"\u2019"}un cadre souple. Ressortissant d{"\u2019"}un <strong style={{ color: "#111827" }}>{"\u00C9"}tat tiers</strong>, vous devrez passer par un processus plus encadr{"\u00E9"}. Dans tous les cas, <strong style={{ color: "#111827" }}>anticipez les d{"\u00E9"}marches</strong> et respectez les d{"\u00E9"}lais : c{"\u2019"}est la cl{"\u00E9"} d{"\u2019"}une installation sereine.
              </p>
            </div>

            {/* Tags + Share */}
            
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Quel permis pour vous ?</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Diagnostic gratuit en 2 min. Identifiez le permis adapt{"\u00E9"} {"\u00E0"} votre situation.</p>
                <input type="email" placeholder="Votre adresse email" className="font-body rounded-lg w-full bg-white" style={{ border: "1px solid #E2E8F0", padding: "10px 14px", fontSize: 13, marginBottom: 10, outline: "none" }} />
                <button className="font-body rounded-lg text-white w-full border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>{"Faire mon diagnostic gratuit \u2192"}</button>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>{"Gratuit \u00B7 2 minutes \u00B7 R\u00E9sultats imm\u00E9diats"}</p>
              </div>
              <SidebarGuides exclude="/permis-suisse" />
            </div>
          </aside>
        </div>
      </section>

      {/* A LIRE AUSSI */}
      <section className="px-6 bg-creme" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid #E2E8F0" }}>
        <div className="mx-auto" style={{ maxWidth: 1120 }}>
          <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
            <h2 className="font-heading" style={{ fontSize: 28, fontWeight: 600, color: "#111827" }}>A lire aussi</h2>
            <span className="font-body cursor-pointer" style={{ fontSize: 14, fontWeight: 500, color: "#D97706" }}>{"Tous les articles \u2192"}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((a) => (
              <div key={a.title} className="rounded-xl bg-white overflow-hidden cursor-pointer" style={{ border: "1px solid #E2E8F0" }}>
                <div className="flex items-center justify-center" style={{ height: 120, backgroundColor: "#FFFBF0", fontSize: 40 }}>{a.icon}</div>
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
