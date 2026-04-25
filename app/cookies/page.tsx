import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kursor CH — Politique cookies",
  description: "Utilisation des cookies sur kursor.ch.",
};

export default function PolitiqueCookiesPage() {
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
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          Politique cookies
        </h1>
        <p
          className="font-body"
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#9CA3AF",
            marginBottom: 40,
          }}
        >
          Dernière mise à jour : avril 2026
        </p>

        {/* Qu'est-ce qu'un cookie ? */}
        <h2 className="font-heading" style={firstH2Style}>
          Qu&apos;est-ce qu&apos;un cookie ?
        </h2>
        <p className="font-body" style={bodyStyle}>
          Un cookie est un petit fichier texte stocké sur votre appareil
          lorsque vous visitez un site web. Les cookies permettent au site de
          fonctionner correctement, de mémoriser vos préférences et de mesurer
          sa fréquentation.
        </p>

        {/* Cookies utilisés */}
        <h2 className="font-heading" style={h2Style}>
          Cookies utilisés sur kursor.ch
        </h2>

        <h3 className="font-heading" style={h3Style}>
          Cookies strictement nécessaires
        </h3>
        <p className="font-body" style={bodyStyle}>
          Ces cookies sont indispensables au fonctionnement du site. Ils
          permettent notamment de sauvegarder l&apos;état de votre diagnostic
          en cours (localStorage) afin de reprendre là où vous vous étiez
          arrêté. Ils ne collectent aucune donnée personnelle identifiante et
          ne nécessitent pas votre consentement.
        </p>

        <h3 className="font-heading" style={h3Style}>
          Mesure d&apos;audience (Plausible / Vercel Analytics)
        </h3>
        <p className="font-body" style={bodyStyle}>
          Nous utilisons Plausible et Vercel Analytics pour comprendre comment
          le site est utilisé (pages visitées, temps passé, taux de rebond).
          Ces outils fonctionnent sans déposer de cookies de suivi et sans
          collecter de données personnelles identifiantes. Les données sont
          agrégées et anonymes, conformément aux lignes directrices du PFPDT
          et de la CNIL relatives aux outils de mesure d&apos;audience exemptés
          de consentement.
        </p>

        <h3 className="font-heading" style={h3Style}>
          Cookies publicitaires et de suivi
        </h3>
        <p className="font-body" style={bodyStyle}>
          Aucun. Le site kursor.ch n&apos;utilise aucun cookie publicitaire,
          aucun pixel de suivi (Meta Pixel, Google Ads, etc.) et aucune
          technologie de retargeting. Votre navigation n&apos;est ni suivie ni
          profilée à des fins publicitaires.
        </p>

        {/* Gestion */}
        <h2 className="font-heading" style={h2Style}>
          Gestion de vos cookies
        </h2>
        <p className="font-body" style={bodyStyle}>
          Vous pouvez à tout moment configurer votre navigateur pour refuser
          les cookies ou supprimer ceux déjà enregistrés. Veuillez noter que la
          désactivation des cookies strictement nécessaires peut affecter le
          fonctionnement du site (notamment la reprise d&apos;un diagnostic en
          cours).
        </p>

        {/* Contact */}
        <h2 className="font-heading" style={h2Style}>
          Contact
        </h2>
        <p className="font-body" style={bodyStyle}>
          Pour toute question relative aux cookies :
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

const h3Style: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: "#111827",
  marginTop: 24,
  marginBottom: 8,
};
