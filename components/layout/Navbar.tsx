"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Emploi", href: "/emploi" },
  { label: "Logement", href: "/logement" },
  { label: "Assurance", href: "/assurance" },
  { label: "Prévoyance", href: "/prevoyance" },
];

const DIAGNOSTIC_PATHS = ["/emploi", "/logement", "/assurance", "/prevoyance"];

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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b font-outfit transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: "#FDFAF5",
        borderBottomColor: "#E5E7EB",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Desktop / Mobile bar */}
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Left: Logo + brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/kursor-logo-amber.png"
              alt="Kursor CH"
              width={28}
              height={28}
              className="md:w-8 md:h-8"
            />
            <span className="text-lg leading-none">
              <span className="font-semibold text-gray-900">Kursor</span>{" "}
              <span className="font-normal" style={{ color: "#9CA3AF" }}>
                CH
              </span>
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {isDiagnosticPage ? (
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Retour
              </Link>
            ) : (
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-amber"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#services"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#D97706" }}
            >
              Diagnostic gratuit
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 md:hidden"
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
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out md:hidden ${
            menuOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-1">
            {isDiagnosticPage ? (
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                ← Retour
              </Link>
            ) : (
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-amber bg-amber/5"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
