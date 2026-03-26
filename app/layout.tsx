import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Fraunces, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

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
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kursor CH — Diagnostic d'expatriation en Suisse",
  description:
    "Évaluez la viabilité de votre projet d'expatriation professionnelle en Suisse. Diagnostic gratuit en 2 minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="fr" className={`${ibmPlexSans.variable} ${fraunces.variable} ${outfit.variable}`}>
      <head>
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
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
