import type { Metadata } from "next";
import SidebarGuides from "@/components/shared/SidebarGuides";

export const metadata: Metadata = {
  title: "Meilleures entreprises suisses 2026 : liste par secteur",
  description: "Liste des meilleures entreprises suisses 2026 par secteur : horlogerie, banque, pharma, tech, transports, agroalimentaire et plus.",
  alternates: {
    canonical: "https://kursor.ch/meilleures-entreprises-suisses",
  },
  other: {
    "geo.region": "CH",
    "geo.placename": "Suisse",
  },
};

/* ───────── DATA ───────── */

const TOC = [
  { id: "top-10-randstad", label: "Top 10 Randstad 2025" },
  { id: "horlogerie", label: "Horlogerie et joaillerie" },
  { id: "pharma", label: "Pharma, biotech et chimie" },
  { id: "banque", label: "Banque et finance" },
  { id: "agroalimentaire", label: "Agroalimentaire" },
  { id: "tech", label: "Tech, IT et télécoms" },
  { id: "transports", label: "Transports et aviation" },
  { id: "industrie", label: "Industrie et énergie" },
  { id: "retail", label: "Distribution et retail" },
  { id: "assurances", label: "Assurances" },
  { id: "sante-public", label: "Santé et secteur public" },
  { id: "conseil", label: "Conseil et audit" },
  { id: "hotellerie", label: "Hôtellerie et tourisme" },
];

const TOP_10_RANDSTAD = [
  { rang: "1", entreprise: "Google", secteur: "Tech" },
  { rang: "2", entreprise: "Swatch", secteur: "Horlogerie" },
  { rang: "3", entreprise: "SBB CFF FFS", secteur: "Transports" },
  { rang: "4", entreprise: "CKW (Centralschweizerische Kraftwerke)", secteur: "Énergie" },
  { rang: "5", entreprise: "Banque Lombard Odier & Cie", secteur: "Banque privée" },
  { rang: "6", entreprise: "Swiss Paraplegic Group", secteur: "Santé" },
  { rang: "7", entreprise: "Swiss International Air Lines", secteur: "Aviation" },
  { rang: "8", entreprise: "Croix-Rouge suisse", secteur: "ONG / santé" },
  { rang: "9", entreprise: "Rolex", secteur: "Horlogerie" },
  { rang: "10", entreprise: "HFR Hôpital fribourgeois", secteur: "Santé" },
];

const HORLOGERIE = [
  { name: "Rolex", ville: "Genève", desc: "Marque la plus iconique, leader mondial des montres de luxe." },
  { name: "Patek Philippe", ville: "Genève", desc: "Manufacture indépendante, salaires parmi les plus élevés du secteur." },
  { name: "Swatch Group", ville: "Bienne", desc: "Maison-mère de Omega, Longines, Tissot, Breguet, Blancpain, Glashütte Original, Hamilton." },
  { name: "Richemont", ville: "Genève", desc: "Propriétaire de Cartier, Vacheron Constantin, IWC, Jaeger-LeCoultre, Panerai, Piaget, Montblanc." },
  { name: "Audemars Piguet", ville: "Le Brassus", desc: "Manufacture indépendante haut de gamme." },
  { name: "Breitling", ville: "Grenchen", desc: "" },
  { name: "Hublot", ville: "Nyon", desc: "Groupe LVMH." },
  { name: "TAG Heuer", ville: "La Chaux-de-Fonds", desc: "Groupe LVMH." },
  { name: "Tudor", ville: "Genève", desc: "Groupe Rolex." },
  { name: "Chopard", ville: "Genève", desc: "Horlogerie et joaillerie." },
  { name: "Bulgari Suisse", ville: "Neuchâtel", desc: "Manufacture." },
  { name: "H. Moser & Cie", ville: "Schaffhouse", desc: "" },
  { name: "Parmigiani Fleurier", ville: "Fleurier", desc: "" },
  { name: "Frédérique Constant", ville: "Genève", desc: "" },
];

const PHARMA = [
  { name: "Roche", ville: "Bâle", desc: "Pharma + diagnostic, l’un des plus gros employeurs du pays." },
  { name: "Novartis", ville: "Bâle", desc: "Concurrent direct de Roche, présent dans le top mondial." },
  { name: "Lonza", ville: "Bâle", desc: "Sous-traitant pharma et biotech." },
  { name: "Sandoz", ville: "Bâle", desc: "Génériques (spin-off Novartis)." },
  { name: "Alcon", ville: "Genève", desc: "Soins oculaires." },
  { name: "Sonova", ville: "Stäfa", desc: "Solutions auditives, leader mondial." },
  { name: "Galderma", ville: "Zoug", desc: "Dermatologie." },
  { name: "CSL Behring", ville: "Berne", desc: "Hémodérivés." },
  { name: "CSL Vifor", ville: "Saint-Gall", desc: "" },
  { name: "Acino", ville: "Zurich", desc: "" },
  { name: "Idorsia", ville: "Allschwil", desc: "" },
  { name: "Tecan", ville: "Männedorf", desc: "Robotique de laboratoire." },
  { name: "Bachem", ville: "Bubendorf", desc: "Peptides." },
  { name: "Syngenta", ville: "Bâle", desc: "Agrochimie." },
  { name: "Givaudan", ville: "Vernier", desc: "Arômes et parfums, leader mondial." },
  { name: "DSM-Firmenich", ville: "Genève", desc: "Arômes et parfums." },
  { name: "Sika", ville: "Baar", desc: "Chimie de la construction." },
  { name: "Clariant", ville: "Muttenz", desc: "Chimie de spécialité." },
  { name: "EMS-Chemie", ville: "Domat/Ems", desc: "Polymères." },
];

const BANQUES_UNIVERSELLES = [
  { name: "UBS", ville: "Zurich", desc: "Première banque suisse depuis l’absorption de Credit Suisse." },
  { name: "Raiffeisen Suisse", ville: "Saint-Gall", desc: "Banque coopérative." },
  { name: "PostFinance", ville: "Berne", desc: "Banque postale." },
  { name: "Banque Cantonale de Zurich (ZKB)", ville: "Zurich", desc: "" },
  { name: "Banque Cantonale Vaudoise (BCV)", ville: "Lausanne", desc: "" },
  { name: "Banque Cantonale de Genève (BCGE)", ville: "Genève", desc: "" },
  { name: "Banque Cantonale de Berne (BEKB)", ville: "Berne", desc: "" },
  { name: "Banque Cantonale de Bâle (BKB)", ville: "Bâle", desc: "" },
];

const BANQUES_PRIVEES = [
  { name: "Banque Pictet & Cie", ville: "Genève", desc: "" },
  { name: "Banque Lombard Odier & Cie", ville: "Genève", desc: "n°5 Randstad 2025." },
  { name: "Mirabaud", ville: "Genève", desc: "" },
  { name: "Bordier & Cie", ville: "Genève", desc: "" },
  { name: "Edmond de Rothschild", ville: "Genève", desc: "" },
  { name: "Union Bancaire Privée (UBP)", ville: "Genève", desc: "" },
  { name: "Julius Bär", ville: "Zurich", desc: "" },
  { name: "Vontobel", ville: "Zurich", desc: "" },
  { name: "EFG International", ville: "Zurich", desc: "" },
  { name: "LGT Bank Suisse", ville: "Bâle", desc: "Famille princière du Liechtenstein." },
  { name: "J. Safra Sarasin", ville: "Bâle", desc: "" },
];

const NEOBANQUES = [
  { name: "Yuh", ville: "Zurich", desc: "PostFinance + Swissquote." },
  { name: "Neon", ville: "Zurich", desc: "" },
  { name: "Zak (Banque Cler)", ville: "Bâle", desc: "" },
  { name: "Swissquote", ville: "Gland", desc: "Banque en ligne et trading." },
  { name: "Selma Finance", ville: "Zurich", desc: "Robo-advisor." },
  { name: "Sygnum Bank", ville: "Zurich", desc: "Banque crypto." },
  { name: "AMINA Bank", ville: "Zoug", desc: "Banque crypto (ex-SEBA)." },
];

const AGROALIMENTAIRE = [
  { name: "Nestlé", ville: "Vevey", desc: "Plus grande entreprise alimentaire au monde." },
  { name: "Lindt & Sprüngli", ville: "Kilchberg", desc: "Chocolat." },
  { name: "Barry Callebaut", ville: "Zurich", desc: "Premier transformateur mondial de cacao." },
  { name: "Emmi", ville: "Lucerne", desc: "Lait et fromages." },
  { name: "Cremo", ville: "Fribourg", desc: "Produits laitiers." },
  { name: "Ricola", ville: "Laufen", desc: "Bonbons aux herbes." },
  { name: "Bell Food Group", ville: "Bâle", desc: "Viandes et charcuteries." },
  { name: "Hero", ville: "Lenzbourg", desc: "Confitures, baby food." },
  { name: "Hochdorf", ville: "Lucerne", desc: "Lait infantile." },
  { name: "Wander (Ovaltine)", ville: "Neuenegg", desc: "" },
  { name: "Frey", ville: "Buchs", desc: "Chocolat (Migros)." },
  { name: "Camille Bloch", ville: "Courtelary", desc: "Chocolat (Ragusa, Torino)." },
  { name: "Maestrani", ville: "Flawil", desc: "Chocolat (Munz)." },
  { name: "Läderach", ville: "Bilten", desc: "Chocolat." },
  { name: "Villars", ville: "Fribourg", desc: "Chocolat." },
  { name: "Henniez", ville: "Henniez", desc: "Nestlé Waters." },
  { name: "Rivella", ville: "Rothrist", desc: "Boissons." },
  { name: "Feldschlösschen", ville: "Rheinfelden", desc: "Brasserie (Carlsberg)." },
];

const TECH_SUISSE = [
  { name: "Swisscom", ville: "Berne", desc: "Premier opérateur télécom du pays." },
  { name: "Sunrise", ville: "Zurich", desc: "Deuxième opérateur." },
  { name: "Salt", ville: "Renens", desc: "Troisième opérateur." },
  { name: "Logitech", ville: "Lausanne", desc: "Périphériques informatiques, fierté lémanique." },
  { name: "u-blox", ville: "Thalwil", desc: "Modules GNSS et sans-fil." },
  { name: "Temenos", ville: "Genève", desc: "Logiciels bancaires." },
  { name: "Avaloq", ville: "Zurich", desc: "Logiciels bancaires." },
  { name: "Crealogix", ville: "Zurich", desc: "Fintech B2B." },
  { name: "ELCA Informatique", ville: "Lausanne", desc: "" },
  { name: "ti&m", ville: "Zurich", desc: "Conseil tech." },
  { name: "Netcetera", ville: "Zurich", desc: "Software." },
  { name: "SoftwareOne", ville: "Stans", desc: "Distribution licences." },
  { name: "Proton AG", ville: "Genève", desc: "ProtonMail, Proton VPN." },
  { name: "Threema", ville: "Pfäffikon", desc: "Messagerie chiffrée." },
];

const TECH_FILIALES = [
  { name: "Google Switzerland", ville: "Zurich", desc: "n°1 Randstad 2025. Plus gros centre R&D Google hors États-Unis." },
  { name: "Microsoft Suisse", ville: "Wallisellen", desc: "" },
  { name: "Apple Suisse", ville: "Zurich", desc: "" },
  { name: "IBM Suisse", ville: "Zurich", desc: "" },
  { name: "Meta", ville: "Zurich", desc: "" },
  { name: "Amazon Web Services", ville: "Zurich", desc: "" },
];

const TRANSPORTS = [
  { name: "CFF (SBB)", ville: "Berne", desc: "n°3 Randstad 2025. Plus gros employeur public du pays." },
  { name: "Aéroport de Zurich", ville: "Kloten", desc: "Régulièrement n°1 Randstad par le passé." },
  { name: "Aéroport de Genève", ville: "Genève", desc: "" },
  { name: "Swiss International Air Lines", ville: "Bâle/Kloten", desc: "Groupe Lufthansa." },
  { name: "Edelweiss Air", ville: "Kloten", desc: "" },
  { name: "Helvetic Airways", ville: "Kloten", desc: "" },
  { name: "Swissport International", ville: "Opfikon", desc: "Services aéroportuaires, leader mondial." },
  { name: "Jet Aviation", ville: "Bâle", desc: "Aviation d’affaires." },
  { name: "Pilatus Aircraft", ville: "Stans", desc: "Avions civils et militaires." },
  { name: "RUAG", ville: "Berne", desc: "Industrie de défense fédérale." },
  { name: "La Poste suisse", ville: "Berne", desc: "" },
  { name: "Planzer Transport", ville: "Dietikon", desc: "Logistique." },
  { name: "Galliker Transport", ville: "Altishofen", desc: "" },
  { name: "Kühne + Nagel", ville: "Schindellegi", desc: "Transport et logistique mondial." },
  { name: "Bobst Group", ville: "Lausanne", desc: "Machines pour l’emballage." },
];

const INDUSTRIE = [
  { name: "ABB", ville: "Zurich", desc: "Robotique et automatisation industrielle." },
  { name: "Holcim", ville: "Zoug", desc: "Cimentier mondial." },
  { name: "Schindler", ville: "Ebikon", desc: "Ascenseurs, n°2 mondial." },
  { name: "Liebherr Suisse", ville: "Bulle", desc: "Machines de chantier." },
  { name: "Stadler Rail", ville: "Bussnang", desc: "Trains." },
  { name: "Bühler Group", ville: "Uzwil", desc: "Procédés industriels." },
  { name: "Sulzer", ville: "Winterthour", desc: "Pompes industrielles." },
  { name: "Georg Fischer (GF)", ville: "Schaffhouse", desc: "Tuyauterie et fonderie." },
  { name: "Hilti", ville: "Schaan", desc: "Outillage professionnel." },
  { name: "Victorinox", ville: "Ibach-Schwyz", desc: "Couteaux suisses." },
  { name: "Sensirion", ville: "Stäfa", desc: "Capteurs (n°1 Great Place to Work catégorie sienne)." },
  { name: "Belimo", ville: "Hinwil", desc: "CVC." },
  { name: "Axpo", ville: "Baden", desc: "Plus gros producteur d’électricité suisse." },
  { name: "Alpiq", ville: "Lausanne", desc: "" },
  { name: "BKW", ville: "Berne", desc: "" },
  { name: "CKW", ville: "Lucerne", desc: "n°4 Randstad 2025." },
  { name: "Romande Energie", ville: "Morges", desc: "" },
  { name: "EWZ", ville: "Zurich", desc: "" },
  { name: "Services Industriels de Genève (SIG)", ville: "Genève", desc: "" },
];

const RETAIL = [
  { name: "Migros", ville: "Zurich", desc: "Premier employeur privé du pays, fortes notes en ambiance et responsabilité sociale." },
  { name: "Coop", ville: "Bâle", desc: "Deuxième distributeur." },
  { name: "Manor", ville: "Bâle", desc: "Grands magasins." },
  { name: "Globus", ville: "Zurich", desc: "Grand magasin haut de gamme." },
  { name: "Denner", ville: "Zurich", desc: "Discount." },
  { name: "Lidl Suisse", ville: "Weinfelden", desc: "" },
  { name: "Aldi Suisse", ville: "Schwarzenbach", desc: "" },
  { name: "Volg", ville: "Winterthour", desc: "Petite distribution rurale." },
  { name: "Landi Schweiz", ville: "Dotzigen", desc: "Bricolage et agro." },
  { name: "Jumbo", ville: "Dietlikon", desc: "Bricolage." },
  { name: "Digitec Galaxus", ville: "Zurich", desc: "E-commerce (groupe Migros), nouveau dans le top 20 Randstad 2025." },
  { name: "Brack.ch", ville: "Mägenwil", desc: "E-commerce." },
];

const ASSURANCES = [
  { name: "Zurich Insurance Group", ville: "Zurich", desc: "" },
  { name: "Swiss Re", ville: "Zurich", desc: "Réassurance, n°2 mondial." },
  { name: "Swiss Life", ville: "Zurich", desc: "Assurance-vie leader." },
  { name: "Helvetia", ville: "Saint-Gall", desc: "" },
  { name: "Bâloise (Baloise)", ville: "Bâle", desc: "" },
  { name: "La Mobilière", ville: "Berne", desc: "" },
  { name: "Vaudoise Assurances", ville: "Lausanne", desc: "" },
  { name: "AXA Suisse", ville: "Winterthour", desc: "" },
  { name: "Allianz Suisse", ville: "Wallisellen", desc: "" },
  { name: "Generali Suisse", ville: "Adliswil", desc: "" },
  { name: "CSS Assurance", ville: "Lucerne", desc: "Maladie." },
  { name: "Helsana", ville: "Dübendorf", desc: "Maladie." },
  { name: "Groupe Mutuel", ville: "Martigny", desc: "Maladie." },
  { name: "Sanitas", ville: "Zurich", desc: "Maladie." },
  { name: "Concordia", ville: "Lucerne", desc: "Maladie." },
  { name: "Visana", ville: "Berne", desc: "Maladie." },
  { name: "SUVA", ville: "Lucerne", desc: "Assurance accidents (semi-public)." },
];

const SANTE_PUBLIC = [
  { name: "CHUV", ville: "Lausanne", desc: "" },
  { name: "HUG", ville: "Genève", desc: "Hôpitaux Universitaires de Genève." },
  { name: "Inselspital", ville: "Berne", desc: "" },
  { name: "USZ", ville: "Zurich", desc: "Hôpital universitaire de Zurich." },
  { name: "Universitätsspital Basel", ville: "Bâle", desc: "" },
  { name: "Hôpital fribourgeois (HFR)", ville: "Fribourg", desc: "n°10 Randstad 2025." },
  { name: "Hôpital pour enfants de Zurich", ville: "Zurich", desc: "Nouvel entrant top 20 Randstad 2025." },
  { name: "Swiss Paraplegic Group", ville: "Nottwil", desc: "n°6 Randstad 2025." },
  { name: "Klinik Hirslanden", ville: "Zurich", desc: "Premier groupe de cliniques privées." },
  { name: "Genolier (Swiss Medical Network)", ville: "Genolier", desc: "" },
  { name: "EPFL", ville: "Lausanne", desc: "" },
  { name: "EPFZ (ETH Zurich)", ville: "Zurich", desc: "" },
  { name: "CERN", ville: "Meyrin", desc: "" },
  { name: "Croix-Rouge suisse", ville: "Berne", desc: "n°8 Randstad 2025." },
  { name: "CICR", ville: "Genève", desc: "Comité international de la Croix-Rouge." },
  { name: "OMS", ville: "Genève", desc: "" },
  { name: "MSF Suisse", ville: "Genève", desc: "" },
];

const CONSEIL = [
  { name: "PwC Suisse", ville: "Zurich", desc: "" },
  { name: "EY Suisse", ville: "Zurich", desc: "" },
  { name: "KPMG Suisse", ville: "Zurich", desc: "Nouvel entrant top 20 Randstad 2025." },
  { name: "Deloitte Suisse", ville: "Zurich", desc: "" },
  { name: "BDO Suisse", ville: "Zurich", desc: "" },
  { name: "McKinsey & Company", ville: "Zurich/Genève", desc: "" },
  { name: "Boston Consulting Group (BCG)", ville: "Zurich/Genève", desc: "" },
  { name: "Bain & Company", ville: "Zurich/Genève", desc: "" },
  { name: "Roland Berger", ville: "Zurich", desc: "" },
  { name: "Oliver Wyman", ville: "Zurich", desc: "" },
  { name: "Accenture Suisse", ville: "Zurich", desc: "" },
  { name: "Adecco Group", ville: "Glattbrugg", desc: "Maison-mère du leader mondial du recrutement." },
];

const HOTELLERIE = [
  { name: "Bürgenstock Hotels", ville: "Obbürgen", desc: "" },
  { name: "Badrutt’s Palace", ville: "Saint-Moritz", desc: "" },
  { name: "Suvretta House", ville: "Saint-Moritz", desc: "" },
  { name: "The Dolder Grand", ville: "Zurich", desc: "" },
  { name: "Beau-Rivage Palace", ville: "Lausanne", desc: "" },
  { name: "Lausanne Palace", ville: "Lausanne", desc: "" },
  { name: "Hôtel des Trois Couronnes", ville: "Vevey", desc: "" },
  { name: "Mandarin Oriental Genève", ville: "Genève", desc: "" },
  { name: "Four Seasons Hôtel des Bergues", ville: "Genève", desc: "" },
  { name: "Grand Hotel Park", ville: "Gstaad", desc: "" },
  { name: "The Alpina Gstaad", ville: "Gstaad", desc: "" },
  { name: "Mövenpick", ville: "Baar", desc: "Groupe Accor." },
  { name: "SV Group", ville: "Dübendorf", desc: "Restauration collective." },
];

const RELATED_ARTICLES = [
  { icon: "\u{1F4BC}", tag: "EMPLOI", title: "Trouver un travail en Suisse : guide 2026", author: "Équipe Kursor", date: "Avril 2026", readTime: "15 min" },
  { icon: "\u{1F4B0}", tag: "EMPLOI", title: "Calcul salaire net suisse frontalier", author: "Équipe Kursor", date: "Avril 2026", readTime: "12 min" },
  { icon: "\u{1F465}", tag: "EMPLOI", title: "Coaching carrière en Suisse", author: "Équipe Kursor", date: "Avril 2026", readTime: "11 min" },
];

/* ───────── COMPANY LIST COMPONENT ───────── */

function CompanyList({ items }: { items: { name: string; ville: string; desc: string }[] }) {
  return (
    <div className="flex flex-col gap-2" style={{ marginBottom: 32 }}>
      {items.map((c) => (
        <div key={c.name + c.ville} className="rounded-lg bg-white font-body" style={{ border: "1px solid #E2E8F0", padding: "12px 16px" }}>
          <p style={{ fontSize: 14, color: "#111827" }}>
            <strong style={{ color: "#D97706" }}>{c.name}</strong>
            <span style={{ color: "#94A3B8" }}> ({c.ville})</span>
            {c.desc && <span style={{ color: "#475569" }}> {"·"} {c.desc}</span>}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ───────── PAGE ───────── */

export default function MeilleuresEntreprisesPage() {
  return (
    <div className="bg-creme">
      {/* HERO */}
      <section style={{ backgroundColor: "#FFFBF0", borderTop: "1px solid rgba(217,119,6,0.15)", borderBottom: "1px solid rgba(217,119,6,0.15)", paddingTop: 48, paddingBottom: 48 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1120 }}>
          <span className="inline-block font-body uppercase rounded-full" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#D97706", backgroundColor: "rgba(217,119,6,0.1)", padding: "4px 12px", marginBottom: 16 }}>EMPLOI</span>
          <h1 className="font-heading" style={{ fontSize: 42, fontWeight: 600, color: "#111827", lineHeight: 1.15 }}>
            Meilleures entreprises suisses 2026 :<br />
            <span className="font-heading italic" style={{ color: "#D97706" }}>la liste par secteur</span>
          </h1>
          <div className="flex items-center gap-3" style={{ marginTop: 24 }}>
            <div className="flex items-center justify-center rounded-full" style={{ width: 36, height: 36, backgroundColor: "rgba(217,119,6,0.1)" }}>{"\u{1F464}"}</div>
            <div>
              <p className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Équipe Kursor</p>
              <p className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>Mai 2026 {"·"} 9 min de lecture</p>
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
              La Suisse abrite certaines des entreprises les plus reconnues au monde, dans des secteurs aussi variés que l{"’"}horlogerie, la pharma, la finance privée ou l{"’"}agroalimentaire — un écosystème porté aussi bien par les grands groupes que par <a href="/creation-entreprise" style={{ color: "#D97706", textDecoration: "underline" }}>la création d{"’"}entreprise en Suisse</a>. Voici la liste de référence des meilleures entreprises suisses en 2025-2026, classées par secteur, croisée avec le <strong style={{ color: "#111827" }}>Top 10 Randstad 2025</strong> et les classements Statista et Universum.
            </p>

            {/* À retenir */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>À retenir</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Top 3 Randstad 2025 : <strong style={{ color: "#111827" }}>Google, Swatch, CFF</strong>. Top 10 complet : Google, Swatch, CFF, CKW, Lombard Odier, Swiss Paraplegic Group, Swiss, Croix-Rouge suisse, Rolex, HFR. <strong style={{ color: "#111827" }}>9 nouveaux entrants</strong> dans le top 20 cette année (CKW, Digitec Galaxus, KPMG, Hôpital pour enfants Zurich, etc.).
              </p>
            </div>

            {/* Section 1 — Top 10 */}
            <h2 id="top-10-randstad" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>1. Top 10 Randstad 2025</h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid #E2E8F0", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "rgba(217,119,6,0.08)" }}>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", width: 60, textTransform: "uppercase" }}>Rang</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase" }}>Entreprise</th>
                    <th className="font-body" style={{ fontSize: 12, fontWeight: 700, color: "#D97706", textAlign: "left", padding: "10px 14px", textTransform: "uppercase" }}>Secteur</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_10_RANDSTAD.map((row, i) => (
                    <tr key={row.entreprise} style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC", borderTop: "1px solid #F1F5F9" }}>
                      <td className="font-body" style={{ fontSize: 14, fontWeight: 700, color: "#D97706", padding: "10px 14px" }}>{row.rang}</td>
                      <td className="font-body" style={{ fontSize: 14, fontWeight: 600, color: "#111827", padding: "10px 14px" }}>{row.entreprise}</td>
                      <td className="font-body" style={{ fontSize: 13, color: "#475569", padding: "10px 14px" }}>{row.secteur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body" style={{ fontSize: 12, color: "#94A3B8", fontStyle: "italic", marginBottom: 32 }}>
              Source : Randstad Employer Brand Research 2025.
            </p>

            {/* Section 2 — Horlogerie */}
            <h2 id="horlogerie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>2. Horlogerie et joaillerie</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Cœur historique de l{"’"}industrie suisse, secteur très bien noté sur réputation et prestige.
            </p>
            <CompanyList items={HORLOGERIE} />

            {/* Section 3 — Pharma */}
            <h2 id="pharma" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>3. Pharma, biotech et chimie</h2>
            <p className="font-body" style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>
              Pôle bâlois en tête, mais Genève et Zurich pèsent aussi.
            </p>
            <CompanyList items={PHARMA} />
            <p className="font-body" style={{ fontSize: 14, color: "#64748B", fontStyle: "italic", marginBottom: 32 }}>
              Filiales suisses des groupes internationaux : AbbVie, Amgen, AstraZeneca, Bristol-Myers Squibb, Merck, MSD, Pfizer, Eli Lilly, Bayer, Boehringer Ingelheim, Janssen (J&J), GlaxoSmithKline, Takeda, Biogen, Gilead Sciences.
            </p>

            {/* Section 4 — Banque */}
            <h2 id="banque" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>4. Banque et finance</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Grandes banques universelles et cantonales</h3>
            <CompanyList items={BANQUES_UNIVERSELLES} />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Banques privées</h3>
            <CompanyList items={BANQUES_PRIVEES} />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Néobanques et fintech</h3>
            <CompanyList items={NEOBANQUES} />

            {/* Section 5 — Agroalimentaire */}
            <h2 id="agroalimentaire" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>5. Agroalimentaire et grande consommation</h2>
            <CompanyList items={AGROALIMENTAIRE} />

            {/* Section 6 — Tech */}
            <h2 id="tech" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>6. Tech, IT et télécoms</h2>

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Acteurs suisses</h3>
            <CompanyList items={TECH_SUISSE} />

            <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 600, color: "#111827", marginBottom: 12 }}>Filiales suisses des géants</h3>
            <CompanyList items={TECH_FILIALES} />

            {/* Section 7 — Transports */}
            <h2 id="transports" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>7. Transports, logistique et aviation</h2>
            <CompanyList items={TRANSPORTS} />

            {/* Section 8 — Industrie */}
            <h2 id="industrie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>8. Industrie, machines et énergie</h2>
            <CompanyList items={INDUSTRIE} />

            {/* Section 9 — Retail */}
            <h2 id="retail" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>9. Distribution et retail</h2>
            <CompanyList items={RETAIL} />

            {/* Section 10 — Assurances */}
            <h2 id="assurances" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>10. Assurances</h2>
            <CompanyList items={ASSURANCES} />

            {/* Section 11 — Santé public */}
            <h2 id="sante-public" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>11. Santé et secteur public</h2>
            <CompanyList items={SANTE_PUBLIC} />

            {/* Section 12 — Conseil */}
            <h2 id="conseil" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>12. Conseil, audit et services pro</h2>
            <CompanyList items={CONSEIL} />

            {/* Section 13 — Hôtellerie */}
            <h2 id="hotellerie" className="font-heading" style={{ fontSize: 26, fontWeight: 600, color: "#111827", marginBottom: 16, scrollMarginTop: 80 }}>13. Hôtellerie et tourisme</h2>
            <CompanyList items={HOTELLERIE} />

            {/* En résumé */}
            <div className="rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "1px solid rgba(217,119,6,0.25)", padding: "20px 24px", marginBottom: 32 }}>
              <p className="font-body" style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 10 }}>En résumé</p>
              <p className="font-body" style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                Les meilleures entreprises suisses 2026 se concentrent sur 6 grands secteurs : <strong style={{ color: "#111827" }}>horlogerie, pharma, banque, agroalimentaire, tech et transports</strong>. Le top 3 Randstad 2025 (Google, Swatch, CFF) reflète une demande croissante pour la stabilité, le sens et la rémunération — un critère d{"’"}autant plus scruté que <a href="/cout-vie-en-suisse" style={{ color: "#D97706", textDecoration: "underline" }}>le coût de la vie en Suisse</a> reste l{"’"}un des plus élevés au monde. Les nouveaux entrants 2025 (CKW, Digitec Galaxus, KPMG, Hôpital pour enfants de Zurich) montrent que secteur public, énergie, e-commerce et conseil gagnent du terrain, portés notamment par <a href="/actualite/generation-z-emploi-suisse-2026" style={{ color: "#D97706", textDecoration: "underline" }}>la génération Z et l{"’"}emploi en Suisse</a>. Au-delà des classements, croiser <strong style={{ color: "#111827" }}>Randstad</strong> (perception extérieure), <strong style={{ color: "#111827" }}>Great Place to Work</strong> (perception interne), <strong style={{ color: "#111827" }}>Statista Best Employers</strong> et <strong style={{ color: "#111827" }}>Universum</strong> reste la meilleure méthode pour identifier l{"’"}employeur qui correspond à ses critères.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-xl" style={{ backgroundColor: "#111827", padding: "32px 28px", marginBottom: 40 }}>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Trouvez votre prochain employeur en Suisse</h3>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 8 }}>Diagnostic gratuit en 2 minutes pour évaluer votre potentiel salarial et identifier les secteurs qui recrutent.</p>
              <a href="/" className="font-body rounded-lg text-white no-underline" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 24px", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6 }}>Lancer mon diagnostic {"→"}</a>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky" style={{ top: 80 }}>
              <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20, marginBottom: 20 }}>
                <p className="font-body" style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Évaluez votre potentiel</p>
                <p className="font-body" style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Découvrez quelles entreprises et secteurs correspondent à votre profil en Suisse.</p>
                <a href="/" className="font-body rounded-lg text-white no-underline w-full" style={{ backgroundColor: "#D97706", fontSize: 13, fontWeight: 500, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>Faire mon diagnostic {"→"}</a>
                <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 8 }}>Gratuit {"·"} 2 minutes {"·"} Résultats immédiats</p>
              </div>
              <SidebarGuides exclude="/meilleures-entreprises-suisses" />
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
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Un email par semaine. Emploi, salaires, employeurs en Suisse. Zéro superflu.</p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input type="email" placeholder="Votre email" className="font-body rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 18px", fontSize: 14, color: "#FFFFFF", width: 240, outline: "none" }} />
            <button className="font-body rounded-lg text-white border-0 cursor-pointer" style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 6 }}>S{"’"}inscrire {"→"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
