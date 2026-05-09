"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kursor-cookie-consent";

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

function applyConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
      analytics_storage: consent.analytics ? "granted" : "denied",
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
        return;
      }
      const parsed: Consent = JSON.parse(saved);
      applyConsent(parsed);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(consent: Omit<Consent, "timestamp">) {
    const full: Consent = { ...consent, timestamp: Date.now() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    } catch {
      /* ignore */
    }
    applyConsent(full);
    setVisible(false);
    setShowSettings(false);
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, marketing: true });
  }

  function rejectAll() {
    save({ necessary: true, analytics: false, marketing: false });
  }

  function saveCustom() {
    save({ necessary: true, analytics, marketing });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau de gestion des cookies"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 9999,
        maxWidth: 720,
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 16,
        boxShadow: "0 20px 50px -12px rgba(15,23,42,0.18)",
        padding: 24,
        fontFamily: "inherit",
      }}
    >
      {!showSettings ? (
        <>
          <p
            className="font-heading"
            style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 8 }}
          >
            Cookies & confidentialité
          </p>
          <p
            className="font-body"
            style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, marginBottom: 16 }}
          >
            Nous utilisons des cookies pour mesurer l’audience du site et améliorer votre expérience. Vous pouvez accepter, refuser ou personnaliser vos préférences à tout moment. En savoir plus dans notre{" "}
            <a href="/politique-de-confidentialite" style={{ color: "#D97706", textDecoration: "underline" }}>
              politique de confidentialité
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptAll}
              className="font-body rounded-lg text-white"
              style={{
                backgroundColor: "#D97706",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 20px",
                border: "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              Tout accepter
            </button>
            <button
              onClick={rejectAll}
              className="font-body rounded-lg"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#111827",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 20px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
                flex: 1,
              }}
            >
              Tout refuser
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="font-body rounded-lg"
              style={{
                backgroundColor: "transparent",
                color: "#475569",
                fontSize: 14,
                fontWeight: 500,
                padding: "11px 20px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
              }}
            >
              Personnaliser
            </button>
          </div>
        </>
      ) : (
        <>
          <p
            className="font-heading"
            style={{ fontSize: 18, fontWeight: 600, color: "#111827", marginBottom: 8 }}
          >
            Préférences de cookies
          </p>
          <p
            className="font-body"
            style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}
          >
            Choisissez les catégories de cookies que vous souhaitez activer.
          </p>

          <div className="flex flex-col gap-3" style={{ marginBottom: 16 }}>
            {/* Nécessaires */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: 14,
                border: "1px solid #E2E8F0",
                borderRadius: 10,
              }}
            >
              <div style={{ flex: 1, paddingRight: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Nécessaires</p>
                <p style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  Indispensables au fonctionnement du site (préférences, sécurité). Toujours actifs.
                </p>
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#15803D",
                  backgroundColor: "rgba(21,128,61,0.08)",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                Activé
              </span>
            </div>

            {/* Analytics */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: 14,
                border: "1px solid #E2E8F0",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div style={{ flex: 1, paddingRight: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Mesure d’audience</p>
                <p style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  Google Analytics, Vercel Analytics. Nous aide à comprendre comment vous utilisez le site.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                style={{ width: 18, height: 18, accentColor: "#D97706", marginTop: 2 }}
              />
            </label>

            {/* Marketing */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: 14,
                border: "1px solid #E2E8F0",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div style={{ flex: 1, paddingRight: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Marketing</p>
                <p style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  Personnalisation des contenus et publicités. Aucun cookie tiers actif sans votre accord.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                style={{ width: 18, height: 18, accentColor: "#D97706", marginTop: 2 }}
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={saveCustom}
              className="font-body rounded-lg text-white"
              style={{
                backgroundColor: "#D97706",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 20px",
                border: "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              Enregistrer mes choix
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="font-body rounded-lg"
              style={{
                backgroundColor: "transparent",
                color: "#475569",
                fontSize: 14,
                fontWeight: 500,
                padding: "11px 20px",
                border: "1px solid #E2E8F0",
                cursor: "pointer",
              }}
            >
              Retour
            </button>
          </div>
        </>
      )}
    </div>
  );
}
