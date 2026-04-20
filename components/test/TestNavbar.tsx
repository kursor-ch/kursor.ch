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
      { name: "Trouver un emploi en Suisse", href: "/emploi-suisse", cta: "D\u00E9poser mon CV" },
      { name: "Simulateur de Salaire", href: "/salaire-suisse", cta: "Estimer mon net" },
      { name: "Coaching", href: "/coaching-carriere", cta: "Booster mon profil" },
    ],
  },
  {
    label: "Entreprendre",
    items: [
      { name: "Cr\u00E9ation de Soci\u00E9t\u00E9", href: "/creation-entreprise", cta: "Parler \u00E0 une fiduciaire" },
      { name: "Optimisation Fiscale", href: "/fiscalite-business", cta: "Demander un audit" },
    ],
  },
  {
    label: "Patrimoine",
    items: [
      { name: "Retraite & 3\u00E8me Pilier", href: "/retraite-suisse", cta: "Faire mon bilan" },
      { name: "Analyse du 2\u00E8me Pilier (LPP)", href: "/analyse-lpp", cta: "Optimiser mon capital" },
    ],
  },
  {
    label: "Acad\u00E9mie",
    items: [
      { name: "La Formation Compl\u00E8te", href: "/formation-suisse", cta: "Acc\u00E9der \u00E0 l'App" },
    ],
  },
  {
    label: "Ressources",
    items: [
      { name: "Guide", href: "/guide", cta: "" },
      { name: "Actualit\u00E9s", href: "/actualite", cta: "" },
    ],
  },
];

export default function TestNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav
      data-test-nav
      className="sticky top-0 z-50 border-b font-body"
      style={{ backgroundColor: "#FDFAF5", borderBottomColor: "#E5E7EB" }}
    >
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: 1120 }}>
        <div className="flex items-center justify-between" style={{ height: 60 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/kursor-logo-amber.png" alt="Kursor" width={36} height={36} style={{ height: 36, width: "auto" }} />
            <span style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>Kursor</span>
            <span style={{ fontSize: 10, fontWeight: 400, color: "#9CA3AF" }}>CH</span>
            <svg viewBox="0 0 32 32" width="16" height="16" style={{ borderRadius: 2, display: "block" }}>
              <rect width="32" height="32" fill="#DA291C" />
              <rect x="13" y="6" width="6" height="20" fill="#FFF" />
              <rect x="6" y="13" width="20" height="6" fill="#FFF" />
            </svg>
          </Link>

          {/* Menu items */}
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

                {/* Dropdown */}
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
                        <span style={{ fontSize: 12, color: "#D1D5DB" }}>{"\u2192"}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/emploi"
            className="rounded-lg text-white"
            style={{ backgroundColor: "#D97706", fontSize: 14, fontWeight: 500, padding: "10px 20px" }}
          >
            Commencer mon diagnostic
          </Link>
        </div>
      </div>
    </nav>
  );
}
