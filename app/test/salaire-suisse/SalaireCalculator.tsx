"use client";

import { useState } from "react";

/* ───────── TYPES ───────── */

type Canton = keyof typeof IMPOT_RATES;
type Statut = "resident" | "frontalier";
type SituationFamiliale = "celibataire" | "marie" | "marie_enfants";

/* ───────── TAUX APPROXIMATIFS ───────── */

// AVS/AI/APG: 5.3%, AC: 1.1%, AC suppl. si > 148 200: 0.5%
const AVS_RATE = 0.053;
const AC_RATE = 0.011;
const AC_SUPPL_RATE = 0.005;
const AC_SUPPL_THRESHOLD = 148200;

// LPP (estimation employé) : palier simplifié par tranche d'âge — on utilise 7% par défaut
const LPP_RATE = 0.07;

// Taux d'imposition à la source estimés par canton et situation (salaire annuel moyen ~80 kCHF)
// Ces taux sont indicatifs et couvrent l'impôt fédéral + cantonal + communal
const IMPOT_RATES: Record<
  string,
  Record<SituationFamiliale, number>
> = {
  Genève:          { celibataire: 0.195, marie: 0.155, marie_enfants: 0.130 },
  Vaud:            { celibataire: 0.180, marie: 0.145, marie_enfants: 0.120 },
  Zurich:          { celibataire: 0.165, marie: 0.135, marie_enfants: 0.110 },
  Berne:           { celibataire: 0.190, marie: 0.150, marie_enfants: 0.125 },
  Fribourg:        { celibataire: 0.175, marie: 0.140, marie_enfants: 0.115 },
  Valais:          { celibataire: 0.158, marie: 0.128, marie_enfants: 0.105 },
  Neuchâtel:       { celibataire: 0.185, marie: 0.148, marie_enfants: 0.122 },
  Jura:            { celibataire: 0.192, marie: 0.152, marie_enfants: 0.128 },
  "Bâle-Ville":    { celibataire: 0.200, marie: 0.160, marie_enfants: 0.135 },
  "Bâle-Campagne": { celibataire: 0.178, marie: 0.143, marie_enfants: 0.118 },
  Soleure:         { celibataire: 0.172, marie: 0.138, marie_enfants: 0.113 },
  Argovie:         { celibataire: 0.162, marie: 0.132, marie_enfants: 0.108 },
};

// Bonus frontalier : pas d'impôt cantonal/communal dans certains cantons (accord fiscal FR/CH)
// Simplifié : les frontaliers paient un impôt à la source réduit (~4.5% pour GE, tarif spécifique)
// On applique un coefficient de réduction selon le canton
const FRONTALIER_COEFF: Record<string, number> = {
  Genève: 0.25,       // Accord spécial : 4.5% redistribué à la France
  Vaud: 0.65,
  Zurich: 0.80,
  Berne: 0.80,
  Fribourg: 0.70,
  Valais: 0.60,
  "Neuchâtel": 0.65,
  Jura: 0.65,
  "Bâle-Ville": 0.75,
  "Bâle-Campagne": 0.70,
  Soleure: 0.75,
  Argovie: 0.78,
};

/* ───────── CALCUL ───────── */

function calculer(
  brut: number,
  canton: Canton,
  statut: Statut,
  situation: SituationFamiliale
) {
  // Cotisations sociales
  const avs = Math.round(brut * AVS_RATE);
  const ac = Math.round(brut * AC_RATE);
  const acSuppl =
    brut > AC_SUPPL_THRESHOLD
      ? Math.round((brut - AC_SUPPL_THRESHOLD) * AC_SUPPL_RATE)
      : 0;
  const lpp = Math.round(brut * LPP_RATE);

  // Impôt à la source
  const tauxBase = IMPOT_RATES[canton][situation];
  const coeff = statut === "frontalier" ? FRONTALIER_COEFF[canton] ?? 0.75 : 1;
  const tauxImpot = tauxBase * coeff;
  const impot = Math.round(brut * tauxImpot);

  const totalDeductions = avs + ac + acSuppl + lpp + impot;
  const net = brut - totalDeductions;

  return {
    avs,
    ac,
    acSuppl,
    lpp,
    impot,
    tauxImpot,
    totalDeductions,
    net,
    netMensuel: Math.round(net / 12),
  };
}

/* ───────── FORMATAGE ───────── */

function fmt(n: number) {
  return n.toLocaleString("fr-CH", { minimumFractionDigits: 0 });
}

/* ───────── COMPOSANT ───────── */

const CANTONS = Object.keys(IMPOT_RATES) as Canton[];

export default function SalaireCalculator() {
  const [brut, setBrut] = useState(80000);
  const [canton, setCanton] = useState<Canton>("Genève");
  const [statut, setStatut] = useState<Statut>("frontalier");
  const [situation, setSituation] = useState<SituationFamiliale>("celibataire");

  const result = calculer(brut, canton, statut, situation);

  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit",
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: 10,
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 600,
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: 6,
    display: "block",
  };

  const lineStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #F1F5F9",
    fontSize: 14,
    color: "#475569",
  };

  return (
    <div
      className="rounded-2xl"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        marginBottom: 40,
      }}
    >
      {/* En-tête calculateur */}
      <div
        style={{
          backgroundColor: "#FFFBF0",
          borderBottom: "1px solid rgba(217,119,6,0.2)",
          padding: "20px 28px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#D97706",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 4,
          }}
        >
          Simulateur
        </p>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: "#111827", margin: 0 }}>
          Calculez votre salaire net en Suisse
        </h2>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>
          Estimation basée sur les taux 2026 &mdash; r&eacute;sultat indicatif
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
        }}
        className="flex-col md:grid"
      >
        {/* Colonne INPUTS */}
        <div style={{ padding: "28px", borderRight: "1px solid #F1F5F9" }}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Salaire brut annuel (CHF)</label>
            <input
              type="number"
              min={10000}
              max={500000}
              step={1000}
              value={brut}
              onChange={(e) => setBrut(Number(e.target.value))}
              style={inputStyle}
            />
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 8,
                flexWrap: "wrap",
              }}
            >
              {[60000, 80000, 100000, 120000, 150000].map((v) => (
                <button
                  key={v}
                  onClick={() => setBrut(v)}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: brut === v ? "#FFFFFF" : "#64748B",
                    backgroundColor: brut === v ? "#D97706" : "#F1F5F9",
                    border: "none",
                    borderRadius: 6,
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  {(v / 1000).toFixed(0)}k
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Canton de travail</label>
            <select
              value={canton}
              onChange={(e) => setCanton(e.target.value as Canton)}
              style={inputStyle}
            >
              {CANTONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Statut</label>
            <div style={{ display: "flex", gap: 10 }}>
              {(
                [
                  { value: "frontalier", label: "Frontalier" },
                  { value: "resident", label: "R\u00E9sident" },
                ] as { value: Statut; label: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setStatut(opt.value)}
                  style={{
                    flex: 1,
                    fontSize: 13,
                    fontWeight: 600,
                    color: statut === opt.value ? "#FFFFFF" : "#475569",
                    backgroundColor:
                      statut === opt.value ? "#D97706" : "#F8FAFC",
                    border: `1px solid ${statut === opt.value ? "#D97706" : "#E2E8F0"}`,
                    borderRadius: 8,
                    padding: "10px 0",
                    cursor: "pointer",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Situation familiale</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(
                [
                  { value: "celibataire", label: "C\u00E9libataire" },
                  { value: "marie", label: "Mari\u00E9(e) sans enfant" },
                  {
                    value: "marie_enfants",
                    label: "Mari\u00E9(e) avec enfant(s)",
                  },
                ] as { value: SituationFamiliale; label: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSituation(opt.value)}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: situation === opt.value ? "#D97706" : "#475569",
                    backgroundColor:
                      situation === opt.value
                        ? "rgba(217,119,6,0.07)"
                        : "#F8FAFC",
                    border: `1px solid ${situation === opt.value ? "rgba(217,119,6,0.4)" : "#E2E8F0"}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne RÉSULTATS */}
        <div style={{ padding: "28px", backgroundColor: "#FAFAFA" }}>
          {/* Net annuel */}
          <div
            style={{
              backgroundColor: "#111827",
              borderRadius: 12,
              padding: "20px 22px",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 6,
              }}
            >
              Salaire net annuel estim&eacute;
            </p>
            <p
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.5px",
              }}
            >
              {fmt(result.net)}&nbsp;
              <span style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>
                CHF
              </span>
            </p>
            <p style={{ fontSize: 13, color: "#D97706", marginTop: 4, fontWeight: 600 }}>
              soit {fmt(result.netMensuel)} CHF / mois
            </p>
          </div>

          {/* D&eacute;tail d&eacute;ductions */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            D&eacute;tail des retenues
          </p>

          <div style={lineStyle}>
            <span>Salaire brut</span>
            <span style={{ fontWeight: 600, color: "#111827" }}>
              {fmt(brut)} CHF
            </span>
          </div>
          <div style={lineStyle}>
            <span>AVS / AI / APG (5,3&nbsp;%)</span>
            <span style={{ color: "#DC2626" }}>&minus;&nbsp;{fmt(result.avs)} CHF</span>
          </div>
          <div style={lineStyle}>
            <span>Assurance ch&ocirc;mage (1,1&nbsp;%)</span>
            <span style={{ color: "#DC2626" }}>&minus;&nbsp;{fmt(result.ac)} CHF</span>
          </div>
          {result.acSuppl > 0 && (
            <div style={lineStyle}>
              <span>AC suppl. tranche haute (0,5&nbsp;%)</span>
              <span style={{ color: "#DC2626" }}>
                &minus;&nbsp;{fmt(result.acSuppl)} CHF
              </span>
            </div>
          )}
          <div style={lineStyle}>
            <span>LPP &mdash; 2e pilier (&asymp;&nbsp;7&nbsp;%)</span>
            <span style={{ color: "#DC2626" }}>&minus;&nbsp;{fmt(result.lpp)} CHF</span>
          </div>
          <div style={{ ...lineStyle, borderBottom: "2px solid #E2E8F0" }}>
            <span>
              Imp&ocirc;t &agrave; la source
              <span
                style={{
                  fontSize: 11,
                  color: "#94A3B8",
                  marginLeft: 6,
                }}
              >
                ({canton} &middot;{" "}
                {(result.tauxImpot * 100).toFixed(1)}&nbsp;%)
              </span>
            </span>
            <span style={{ color: "#DC2626" }}>
              &minus;&nbsp;{fmt(result.impot)} CHF
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0 4px",
              fontSize: 15,
              fontWeight: 700,
              color: "#111827",
            }}
          >
            <span>Total retenues</span>
            <span style={{ color: "#DC2626" }}>
              &minus;&nbsp;{fmt(result.totalDeductions)} CHF
            </span>
          </div>

          {statut === "frontalier" && (
            <div
              style={{
                backgroundColor: "rgba(217,119,6,0.07)",
                border: "1px solid rgba(217,119,6,0.25)",
                borderRadius: 8,
                padding: "10px 14px",
                marginTop: 16,
                fontSize: 12,
                color: "#92400E",
                lineHeight: 1.55,
              }}
            >
              <strong>Frontalier :</strong> l&rsquo;imp&ocirc;t &agrave; la
              source est pr&eacute;lev&eacute; en Suisse. Selon votre canton,
              une partie peut &ecirc;tre redistribute &agrave; votre pays de
              r&eacute;sidence (accord fiscal franco-suisse pour Gen&egrave;ve).
            </div>
          )}
        </div>
      </div>

      {/* Note bas calculateur */}
      <div
        style={{
          padding: "14px 28px",
          borderTop: "1px solid #F1F5F9",
          fontSize: 12,
          color: "#94A3B8",
          backgroundColor: "#FAFAFA",
        }}
      >
        Estimation indicative &mdash; taux 2026. LPP bas&eacute; sur un taux
        moyen ; votre caisse de pension peut varier. Consultez un conseiller
        fiscal pour un calcul pr&eacute;cis.
      </div>
    </div>
  );
}
