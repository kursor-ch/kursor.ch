import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Fraunces, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollRevealProvider } from "@/components/shared/ScrollRevealProvider";
import CookieBanner from "@/components/cookies/CookieBanner";
import AttributionCapture from "@/components/shared/AttributionCapture";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "KURSOR CH - Simplifiez votre vie en Suisse. Évaluez votre projet Suisse en 3 minutes grâce à nos outils gratuits.",
  description:
    "Emploi, logement, assurances, prévoyance. Quatre diagnostics gratuits pour identifier, en 5 minutes, les décisions qui vont peser sur votre budget pendant 10 ans.",
  metadataBase: new URL("https://kursor.ch"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="fr-CH" className={`${ibmPlexSans.variable} ${fraunces.variable} ${outfit.variable}`}>
      <head>
        <link rel="alternate" hrefLang="fr-CH" href="https://www.kursor.ch" />
        <link rel="alternate" hrefLang="fr-FR" href="https://www.kursor.ch" />
        <link rel="alternate" hrefLang="fr" href="https://www.kursor.ch" />
        <link rel="alternate" hrefLang="x-default" href="https://www.kursor.ch" />
        <meta name="geo.region" content="CH" />
        <meta name="geo.placename" content="Suisse" />
        <meta name="google-site-verification" content="6hLQbxoNFJS31MuJUJPMV6MvhbGk47qHTVBYCC9i4LE" />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BT6Q484');`}
        </Script>
        {/* End Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DL8PGLDKRF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Consent Mode v2 — refus par défaut tant que l'utilisateur n'a pas choisi
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            // Restaurer le choix utilisateur si déjà donné
            try {
              var saved = localStorage.getItem('kursor-cookie-consent');
              if (saved) {
                var c = JSON.parse(saved);
                gtag('consent', 'update', {
                  ad_storage: c.marketing ? 'granted' : 'denied',
                  ad_user_data: c.marketing ? 'granted' : 'denied',
                  ad_personalization: c.marketing ? 'granted' : 'denied',
                  analytics_storage: c.analytics ? 'granted' : 'denied'
                });
              }
            } catch(e){}
            gtag('config', 'G-DL8PGLDKRF');
          `}
        </Script>
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="min-h-screen font-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BT6Q484"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AttributionCapture />
        <Navbar />
        {children}
        <Footer />
        <ScrollRevealProvider />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
