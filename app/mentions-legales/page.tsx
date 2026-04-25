import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kursor CH — Mentions légales",
  description: "Informations légales relatives au site kursor.ch.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-creme" style={{ minHeight: "100vh" }}>
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 640, paddingTop: 48, paddingBottom: 80 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#111827",
            marginBottom: 40,
            lineHeight: 1.2,
          }}
        >
          Mentions légales
        </h1>

        {/* Éditeur du site */}
        <h2 className="font-heading" style={firstH2Style}>
          Éditeur du site
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le site kursor.ch est édité par{" "}
          <strong style={{ color: "#111827" }}>GC Consulting</strong>.
        </p>
        <p className="font-body" style={bodyStyle}>
          Forme juridique : entreprise individuelle (SARL en cours de
          constitution).
          <br />
          Siège : 90 rue de Verdun, Carcassonne, France.
          <br />
          Email : equipe@kursor.ch
          <br />
          Responsable de la publication : Harry Cooke.
        </p>

        {/* Activité */}
        <h2 className="font-heading" style={h2Style}>
          Activité
        </h2>
        <p className="font-body" style={bodyStyle}>
          Kursor CH est un service de mise en relation entre des particuliers
          résidant ou s&apos;installant en Suisse et des spécialistes agréés
          dans les domaines de l&apos;emploi, du logement, de l&apos;assurance
          et de la prévoyance. Kursor CH n&apos;est pas un intermédiaire
          financier au sens de la FINMA et ne fournit aucun conseil financier,
          juridique ou fiscal. Les diagnostics proposés sont des outils
          d&apos;orientation gratuits à visée informative.
        </p>

        {/* Hébergement */}
        <h2 className="font-heading" style={h2Style}>
          Hébergement
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
          91789, États-Unis. Les données sont traitées sur des serveurs situés
          dans l&apos;Union européenne (région AWS eu-west). Vercel est conforme
          au RGPD et au Swiss-U.S. Data Privacy Framework.
        </p>

        {/* Propriété intellectuelle */}
        <h2 className="font-heading" style={h2Style}>
          Propriété intellectuelle
        </h2>
        <p className="font-body" style={bodyStyle}>
          L&apos;ensemble du contenu du site kursor.ch (textes, graphismes,
          logo, icônes, images, structure) est la propriété exclusive de GC
          Consulting, sauf mention contraire. Toute reproduction, distribution
          ou utilisation sans autorisation préalable écrite est interdite.
        </p>

        {/* Limitation de responsabilité */}
        <h2 className="font-heading" style={h2Style}>
          Limitation de responsabilité
        </h2>
        <p className="font-body" style={bodyStyle}>
          Les informations fournies par les diagnostics Kursor CH sont des
          estimations à visée informative. Elles ne constituent en aucun cas un
          conseil financier, fiscal, juridique ou médical. Les résultats sont
          calculés à partir des réponses fournies par l&apos;utilisateur et de
          données publiques agrégées. Kursor CH décline toute responsabilité
          quant aux décisions prises sur la base de ces estimations. Pour toute
          décision engageante, nous recommandons de consulter un professionnel
          qualifié.
        </p>

        {/* Droit applicable */}
        <h2 className="font-heading" style={h2Style}>
          Droit applicable et juridiction
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le présent site et ses conditions d&apos;utilisation sont régis par
          le droit français. Tout litige sera soumis à la compétence exclusive
          du Tribunal judiciaire de Carcassonne, France.
        </p>

        {/* Contact */}
        <h2 className="font-heading" style={h2Style}>
          Contact
        </h2>
        <p className="font-body" style={bodyStyle}>
          Pour toute question relative au site ou à son contenu :
          <br />
          Email : <strong style={{ color: "#111827" }}>equipe@kursor.ch</strong>
        </p>

        <Link
          href="/"
          className="inline-block font-body transition-all duration-200 hover:border-amber-600 hover:text-gray-900"
          style={{
            marginTop: 40,
            padding: "12px 24px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 10,
            color: "#6B7280",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          &larr; Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

/* Shared styles — mirror app/politique-de-confidentialite/page.tsx */
const bodyStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 400,
  color: "#4B5563",
  lineHeight: 1.8,
  marginBottom: 14,
};

const h2Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: "#111827",
  marginTop: 40,
  marginBottom: 16,
  paddingTop: 24,
  borderTop: "1px solid #E5E7EB",
};

const firstH2Style: React.CSSProperties = {
  ...h2Style,
  marginTop: 0,
  paddingTop: 0,
  borderTop: "none",
};
