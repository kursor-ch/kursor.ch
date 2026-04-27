"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Emploi", href: "/emploi" },
  { label: "Logement", href: "/logement" },
  { label: "Assurance", href: "/assurance" },
  { label: "Retraite", href: "/retraite" },
];

const INFO_LINKS = [
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "À propos", href: "/a-propos" },
];

const DIAGNOSTIC_PATHS = ["/emploi", "/logement", "/assurance", "/retraite"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDiagnosticPage = DIAGNOSTIC_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const allMenuLinks = [...NAV_LINKS, ...INFO_LINKS];

  return (
    <nav
      className="sticky top-0 z-50 border-b font-body transition-all duration-200"
      style={{
        backgroundColor: scrolled ? "rgba(253,250,245,0.85)" : "#FDFAF5",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottomColor: "#E5E7EB",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left: Logo + brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/kursor-logo-amber.png"
              alt="Kursor CH"
              width={40}
              height={40}
              style={{ height: 40, width: "auto" }}
            />
            <span style={{ fontSize: 14, lineHeight: 1 }}>
              <span style={{ fontWeight: 600, color: "#111827" }}>
                Kursor
              </span>{" "}
              <span style={{ fontWeight: 400, color: "#9CA3AF" }}>CH</span>
            </span>
            <svg
              viewBox="0 0 32 32"
              width="16"
              height="16"
              aria-hidden="true"
              style={{ borderRadius: 2, display: "block" }}
            >
              <rect width="32" height="32" fill="#DA291C" />
              <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
              <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
            </svg>
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {isDiagnosticPage ? (
              <Link
                href="/"
                className="transition-colors duration-200"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#6B7280",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#111827")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#6B7280")
                }
              >
                &larr; Retour
              </Link>
            ) : (
              NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-active={isActive ? "true" : undefined}
                    className="nav-link-animated transition-colors duration-200 pb-1"
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: isActive ? "#D97706" : "#6B7280",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })
            )}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#outils"
              className="rounded-lg text-white cta-btn"
              style={{
                backgroundColor: "#D97706",
                fontSize: 14,
                fontWeight: 500,
                padding: "10px 20px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B45309";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(217,119,6,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D97706";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Évaluer mon projet
            </Link>

            {/* Hamburger (mobile only) — animated three lines ↔ X */}
            {!isDiagnosticPage && (
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className={`inline-flex items-center justify-center rounded-md p-2 text-gray-600 md:hidden ${
                  menuOpen ? "hamburger-open" : ""
                }`}
                aria-expanded={menuOpen}
                aria-label="Menu de navigation"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <line x1="4" y1="5" x2="20" y2="5" className="hamburger-line hamburger-line-1" />
                  <line x1="4" y1="12" x2="20" y2="12" className="hamburger-line hamburger-line-2" />
                  <line x1="4" y1="19" x2="20" y2="19" className="hamburger-line hamburger-line-3" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {!isDiagnosticPage && (
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out md:hidden ${
              menuOpen ? "max-h-80 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-1 pt-1">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 transition-colors duration-200 mobile-menu-link ${
                    menuOpen ? "menu-item-stagger" : ""
                  }`}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color:
                      pathname === link.href ? "#D97706" : "#6B7280",
                    backgroundColor:
                      pathname === link.href
                        ? "rgba(217,119,6,0.05)"
                        : undefined,
                    animationDelay: menuOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider */}
              <div
                className="mx-3 my-2"
                style={{ height: 1, backgroundColor: "#E5E7EB" }}
              />

              {INFO_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 transition-colors duration-200 mobile-menu-link ${
                    menuOpen ? "menu-item-stagger" : ""
                  }`}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color:
                      pathname === link.href ? "#D97706" : "#6B7280",
                    backgroundColor:
                      pathname === link.href
                        ? "rgba(217,119,6,0.05)"
                        : undefined,
                    animationDelay: menuOpen
                      ? `${(NAV_LINKS.length + i) * 50}ms`
                      : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
