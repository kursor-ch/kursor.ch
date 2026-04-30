"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MENU = [
  {
    label: "S'installer",
    items: [
      { name: "Logement & Relocation", href: "/logement-en-suisse", cta: "Trouver mon logement" },
      { name: "Assurances & LAMal", href: "/assurance-maladie", cta: "Comparer les offres" },
      { name: "Guide Permis B & G", href: "/permis-suisse", cta: "Diagnostic Statut" },
    ],
  },
  {
    label: "Travailler",
    items: [
      { name: "Trouver un emploi en Suisse", href: "/emploi-suisse", cta: "Déposer mon CV" },
      { name: "Simulateur de Salaire", href: "/salaire-suisse", cta: "Estimer mon net" },
      { name: "Coaching", href: "/coaching-carriere", cta: "Booster mon profil" },
    ],
  },
  {
    label: "Entreprendre",
    items: [
      { name: "Création de Société", href: "/creation-entreprise", cta: "Parler à une fiduciaire" },
      { name: "Optimisation Fiscale", href: "/fiscalite-business", cta: "Demander un audit" },
    ],
  },
  {
    label: "Patrimoine",
    items: [
      { name: "Retraite & 3ème Pilier", href: "/retraite-suisse", cta: "Faire mon bilan" },
      { name: "Analyse du 2ème Pilier (LPP)", href: "/analyse-lpp", cta: "Optimiser mon capital" },
    ],
  },
  {
    label: "Académie",
    items: [
      { name: "La Formation Complète", href: "/formation-suisse", cta: "Accéder à l'App" },
    ],
  },
  {
    label: "Ressources",
    items: [
      { name: "Guide", href: "/guide", cta: "" },
      { name: "Actualités", href: "/actualite", cta: "" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <nav
      className="sticky top-0 z-50 border-b font-body"
      style={{ backgroundColor: "#FDFAF5", borderBottomColor: "#E5E7EB" }}
    >
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: 1120 }}>
        <div className="flex items-center justify-between" style={{ height: 60 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/kursor-logo-amber.png" alt="Kursor" width={36} height={36} style={{ height: 36, width: "auto" }} />
            <span className="hidden sm:inline" style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>Kursor</span>
            <span className="hidden sm:inline" style={{ fontSize: 10, fontWeight: 400, color: "#9CA3AF" }}>CH</span>
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true" style={{ borderRadius: 2, display: "block" }}>
              <rect width="32" height="32" fill="#DA291C" />
              <rect x="13" y="6" width="6" height="20" fill="#FFF" />
              <rect x="6" y="13" width="20" height="6" fill="#FFF" />
            </svg>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {MENU.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(section.label)}
                onMouseLeave={() => setOpenMenu(null)}
                style={{ paddingBottom: openMenu === section.label ? 8 : 0 }}
              >
                <button
                  className="px-3 rounded-md transition-colors"
                  aria-haspopup="true"
                  aria-expanded={openMenu === section.label}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: openMenu === section.label ? "#D97706" : "#6B7280",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {section.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transition: "transform 0.2s", transform: openMenu === section.label ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M2 4 L5 7 L8 4" />
                  </svg>
                </button>

                {openMenu === section.label && (
                  <div
                    className="absolute left-0 bg-white rounded-xl"
                    style={{
                      top: "100%",
                      minWidth: 300,
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 12px 36px rgba(0,0,0,0.08)",
                      padding: "8px 0",
                      zIndex: 100,
                    }}
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 transition-colors"
                        style={{ fontSize: 14, color: "#111827" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFFBF0"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                      >
                        <div>
                          <p style={{ fontWeight: 500, fontSize: 14, color: "#111827" }}>{item.name}</p>
                          {item.cta && (
                            <p style={{ fontSize: 12, color: "#D97706", marginTop: 2 }}>{item.cta}</p>
                          )}
                        </div>
                        <span style={{ fontSize: 12, color: "#D1D5DB" }}>{"→"}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: hamburger (mobile) + CTA (desktop) */}
          <div className="flex items-center gap-3">
            {/* Hamburger button */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ width: 40, height: 40, backgroundColor: "transparent", border: "none", cursor: "pointer" }}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/emploi"
              className="hidden lg:inline-flex rounded-lg text-white no-underline"
              style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "10px 20px" }}
            >
              {`Démarrer mon diagnostic`}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{
            backgroundColor: "#FDFAF5",
            borderTop: "1px solid #E5E7EB",
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
          }}
        >
          <div className="px-4 py-3">
            {MENU.map((section) => (
              <div key={section.label} style={{ borderBottom: "1px solid #F1F5F9" }}>
                <button
                  onClick={() => setMobileSection(mobileSection === section.label ? null : section.label)}
                  aria-expanded={mobileSection === section.label}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    fontSize: 15,
                    fontWeight: 600,
                    color: mobileSection === section.label ? "#D97706" : "#111827",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {section.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{
                      transition: "transform 0.2s",
                      transform: mobileSection === section.label ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <path d="M3 5l3 3 3-3" />
                  </svg>
                </button>

                {mobileSection === section.label && (
                  <div style={{ paddingBottom: 8 }}>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block no-underline"
                        style={{
                          padding: "10px 16px",
                          fontSize: 14,
                          color: "#475569",
                          borderRadius: 8,
                        }}
                      >
                        <p style={{ fontWeight: 500, color: "#111827" }}>{item.name}</p>
                        {item.cta && (
                          <p style={{ fontSize: 12, color: "#D97706", marginTop: 2 }}>{item.cta}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/emploi"
              onClick={() => setMobileOpen(false)}
              className="block text-center no-underline rounded-lg text-white"
              style={{
                backgroundColor: "#D97706",
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 0",
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              {`Démarrer mon diagnostic`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
