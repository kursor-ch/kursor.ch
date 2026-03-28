"use client";

import Image from "next/image";
import Link from "next/link";

const diagnosticLinks = [
  { label: "Emploi", href: "/emploi" },
  { label: "Logement", href: "/logement" },
  { label: "Assurance", href: "/assurance" },
  { label: "Prévoyance", href: "/prevoyance" },
];

const ressourceLinks = [
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "À propos", href: "/a-propos" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Contact", href: "mailto:equipe@kursor.ch" },
];

export default function Footer() {
  return (
    <footer className="relative topo-pattern" style={{ backgroundColor: "#111827" }}>
      <div
        className="relative mx-auto w-full px-6"
        style={{ maxWidth: "1200px" }}
      >
        {/* Main footer */}
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          style={{ paddingTop: "56px", paddingBottom: "40px" }}
        >
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/kursor-logo-amber.png"
                alt="Kursor logo"
                width={32}
                height={32}
                style={{
                  height: "32px",
                  width: "auto",
                  filter: "drop-shadow(0 0 8px rgba(217,119,6,0.3))",
                }}
              />
              <span
                className="font-body"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Kursor CH
              </span>
            </div>
            <p
              className="font-body"
              style={{
                fontWeight: 400,
                fontSize: "13px",
                color: "#9CA3AF",
                maxWidth: "240px",
                lineHeight: 1.5,
                marginTop: "12px",
              }}
            >
              Chaque étape de votre vie en Suisse, simplifiée.
            </p>
          </div>

          {/* Column 2 — Diagnostics */}
          <div>
            <h3
              className="font-body"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px",
              }}
            >
              Diagnostics
            </h3>
            <ul className="space-y-0">
              {diagnosticLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body footer-link"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#D1D5DB",
                      lineHeight: 2.0,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Ressources */}
          <div>
            <h3
              className="font-body"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px",
              }}
            >
              Ressources
            </h3>
            <ul className="space-y-0">
              {ressourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body footer-link"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#D1D5DB",
                      lineHeight: 2.0,
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              className="font-body"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px",
              }}
            >
              Contact
            </h3>
            <a
              href="mailto:equipe@kursor.ch"
              className="font-body footer-link"
              style={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#D1D5DB",
                textDecoration: "none",
              }}
            >
              equipe@kursor.ch
            </a>
            <div className="flex items-center gap-4" style={{ marginTop: "12px" }}>
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="footer-icon"
                style={{ color: "#9CA3AF" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="footer-icon"
                style={{ color: "#9CA3AF" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #374151",
            padding: "20px 0",
          }}
          className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between"
        >
          <span
            className="font-body"
            style={{ fontWeight: 400, fontSize: "12px", color: "#6B7280" }}
          >
            &copy; 2026 Kursor CH. Tous droits réservés.
          </span>
          <span
            className="font-body"
            style={{ fontWeight: 400, fontSize: "12px", color: "#6B7280" }}
          >
            Fait en Suisse{" "}
            <span className="animate-flag-bounce">&#127464;&#127469;</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
