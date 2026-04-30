import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Fraunces, Outfit } from "next/font/google";
import TestNavbar from "@/components/test/TestNavbar";
import Footer from "@/components/layout/Footer";
import { ScrollRevealProvider } from "@/components/shared/ScrollRevealProvider";

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
  title: "KURSOR CH - Simplifiez votre vie en Suisse.",
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
        <TestNavbar />
        {children}
        <Footer />
        <ScrollRevealProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
