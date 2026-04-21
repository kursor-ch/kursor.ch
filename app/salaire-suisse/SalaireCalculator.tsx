"use client";

import { useState } from "react";

/* ───────── TAUX ───────── */

const AVS_RATE = 0.053;
const AC_RATE = 0.011;
const LPP_RATES: Record<string, number> = {
  "25-34": 0.07,
  "35-44": 0.10,
  "45-54": 0.15,
  "55-65": 0.18,
};

const CANTONS = [
  "Gen\u00E8ve", "Vaud", "Neuch\u00E2tel", "Fribourg", "Valais", "Jura",
  "Berne", "B\u00E2le-Ville", "B\u00E2le-Campagne", "Zurich", "Soleure", "Argovie",
];

const IMPOT: Record<string, Record<string, number>> = {
  "Gen\u00E8ve":       { celibataire: 0.155, marie: 0.125, marie_enfants: 0.105 },
  "Vaud":            { celibataire: 0.145, marie: 0.115, marie_enfants: 0.095 },
  "Neuch\u00E2tel":     { celibataire: 0.150, marie: 0.120, marie_enfants: 0.100 },
  "Fribourg":        { celibataire: 0.140, marie: 0.112, marie_enfants: 0.092 },
  "Valais":          { celibataire: 0.128, marie: 0.100, marie_enfants: 0.085 },
  "Jura":            { celibataire: 0.155, marie: 0.125, marie_enfants: 0.105 },
  "Berne":           { celibataire: 0.152, marie: 0.122, marie_enfants: 0.102 },
  "B\u00E2le-Ville":    { celibataire: 0.162, marie: 0.130, marie_enfants: 0.110 },
  "B\u00E2le-Campagne": { celibataire: 0.145, marie: 0.115, marie_enfants: 0.095 },
  "Zurich":          { celibataire: 0.135, marie: 0.108, marie_enfants: 0.088 },
  "Soleure":         { celibataire: 0.140, marie: 0.112, marie_enfants: 0.092 },
  "Argovie":         { celibataire: 0.130, marie: 0.105, marie_enfants: 0.085 },
};

// Genève : impôt à la source en Suisse. Autres cantons signataires 1983 : imposition en France
const CANTONS_SOURCE_SUISSE = ["Gen\u00E8ve"];

function getLppRate(age: number) {
  if (age < 25) return 0;
  if (age <= 34) return LPP_RATES["25-34"];
  if (age <= 44) return LPP_RATES["35-44"];
  if (age <= 54) return LPP_RATES["45-54"];
  return LPP_RATES["55-65"];
}

function fmt(n: number) {
  return n.toLocaleString("fr-CH", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ───────── COMPOSANT ───────── */

type Resultat = {
  brutAnnuel: number;
  brutMensuel: number;
  avs: number;
  ac: number;
  lpp: number;
  impot: number;
  tauxImpot: number;
  totalRetenues: number;
  netAnnuel: number;
  netMensuel: number;
  impositionSuisse: boolean;
};

export default function SalaireCalculator() {
  const [brutMensuel, setBrutMensuel] = useState("");
  const [age, setAge] = useState("");
  const [canton, setCanton] = useState("Gen\u00E8ve");
  const [situation, setSituation] = useState("celibataire");
  const [statut, setStatut] = useState("frontalier");
  const [resultat, setResultat] = useState<Resultat | null>(null);
  const [showResult, setShowResult] = useState(false);

  function calculer() {
    const brut = parseFloat(brutMensuel) || 0;
    const ageNum = parseInt(age) || 30;
    const brutAn = brut * 12;

    const avs = Math.round(brutAn * AVS_RATE);
    const ac = Math.round(brutAn * AC_RATE);
    const lppRate = getLppRate(ageNum);
    const lpp = Math.round(brutAn * lppRate);

    const tauxImpot = IMPOT[canton]?.[situation] ?? 0.14;
    const impositionSuisse = statut === "resident" || CANTONS_SOURCE_SUISSE.includes(canton);
    const impot = impositionSuisse ? Math.round(brutAn * tauxImpot) : 0;

    const totalRetenues = avs + ac + lpp + impot;
    const netAnnuel = brutAn - totalRetenues;

    setResultat({
      brutAnnuel: brutAn,
      brutMensuel: brut,
      avs, ac, lpp, impot, tauxImpot,
      totalRetenues,
      netAnnuel,
      netMensuel: Math.round(netAnnuel / 12),
      impositionSuisse,
    });
    setShowResult(true);
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit",
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: 8,
    padding: "12px 14px",
    width: "100%",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: "#475569",
    marginBottom: 6,
    display: "block",
  };

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#D97706", padding: "22px 28px" }}>
        <p className="font-heading" style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", margin: 0 }}>
          Calculateur Brut Net Suisse
        </p>
        <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
          Estimez votre salaire net en quelques clics
        </p>
      </div>

      {/* Formulaire */}
      <div style={{ padding: "24px 28px" }}>
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Salaire brut mensuel en CHF</label>
          <input
            type="number"
            placeholder="Ex: 6000"
            value={brutMensuel}
            onChange={(e) => { setBrutMensuel(e.target.value); setShowResult(false); }}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>{"\u00C2"}ge en ann{"\u00E9"}es</label>
          <input
            type="number"
            placeholder="Ex: 35"
            value={age}
            onChange={(e) => { setAge(e.target.value); setShowResult(false); }}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Statut</label>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { value: "frontalier", label: "Frontalier" },
              { value: "resident", label: "R\u00E9sident" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setStatut(opt.value); setShowResult(false); }}
                style={{
                  flex: 1, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  color: statut === opt.value ? "#FFFFFF" : "#475569",
                  backgroundColor: statut === opt.value ? "#D97706" : "#F8FAFC",
                  border: `1px solid ${statut === opt.value ? "#D97706" : "#E2E8F0"}`,
                  borderRadius: 8, padding: "10px 0",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Situation familiale</label>
          <select
            value={situation}
            onChange={(e) => { setSituation(e.target.value); setShowResult(false); }}
            style={inputStyle}
          >
            <option value="celibataire">C{"\u00E9"}libataire</option>
            <option value="marie">Mari{"\u00E9"}(e) sans enfant</option>
            <option value="marie_enfants">Mari{"\u00E9"}(e) avec enfant(s)</option>
          </select>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Canton de travail</label>
          <select
            value={canton}
            onChange={(e) => { setCanton(e.target.value); setShowResult(false); }}
            style={inputStyle}
          >
            {CANTONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <button
          onClick={calculer}
          style={{
            width: "100%",
            fontSize: 16,
            fontWeight: 600,
            color: "#FFFFFF",
            backgroundColor: "#D97706",
            border: "none",
            borderRadius: 10,
            padding: "14px 0",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(217,119,6,0.25)",
          }}
        >
          Calculer le salaire
        </button>
      </div>

      {/* Résultats */}
      {showResult && resultat && (
        <div style={{ borderTop: "2px solid #D97706" }}>
          {/* Net */}
          <div style={{ backgroundColor: "#111827", padding: "22px 28px", textAlign: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
              Salaire net estim{"\u00E9"}
            </p>
            <p style={{ fontSize: 36, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.5px" }}>
              {fmt(resultat.netMensuel)}{" "}
              <span style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>CHF/mois</span>
            </p>
            <p style={{ fontSize: 14, color: "#D97706", marginTop: 4, fontWeight: 600 }}>
              soit {fmt(resultat.netAnnuel)} CHF/an
            </p>
          </div>

          {/* Détail */}
          <div style={{ padding: "20px 28px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              D{"\u00E9"}tail des retenues annuelles
            </p>

            {[
              { label: "Salaire brut annuel", val: `${fmt(resultat.brutAnnuel)} CHF`, color: "#111827", bold: true },
              { label: "AVS / AI / APG (5,3 %)", val: `\u2212 ${fmt(resultat.avs)} CHF`, color: "#DC2626", bold: false },
              { label: "Assurance ch\u00F4mage (1,1 %)", val: `\u2212 ${fmt(resultat.ac)} CHF`, color: "#DC2626", bold: false },
              { label: `LPP \u2014 2e pilier`, val: `\u2212 ${fmt(resultat.lpp)} CHF`, color: "#DC2626", bold: false },
              ...(resultat.impositionSuisse ? [{
                label: `Imp\u00F4t \u00E0 la source (${(resultat.tauxImpot * 100).toFixed(1)} %)`,
                val: `\u2212 ${fmt(resultat.impot)} CHF`,
                color: "#DC2626",
                bold: false,
              }] : []),
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #F1F5F9", fontSize: 14 }}>
                <span style={{ color: "#475569" }}>{row.label}</span>
                <span style={{ fontWeight: row.bold ? 700 : 600, color: row.color }}>{row.val}</span>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0 4px", fontSize: 15, fontWeight: 700 }}>
              <span style={{ color: "#111827" }}>Salaire net annuel</span>
              <span style={{ color: "#D97706" }}>{fmt(resultat.netAnnuel)} CHF</span>
            </div>

            {!resultat.impositionSuisse && (
              <div style={{ backgroundColor: "rgba(217,119,6,0.07)", border: "1px solid rgba(217,119,6,0.25)", borderRadius: 8, padding: "10px 14px", marginTop: 14, fontSize: 12, color: "#92400E", lineHeight: 1.55 }}>
                <strong>Frontalier ({canton}) :</strong> l{"\u2019"}imp{"\u00F4"}t est d{"\u00FB"} en France (accord fiscal 1983). Le net affich{"\u00E9"} est avant imp{"\u00F4"}t fran{"\u00E7"}ais.
              </div>
            )}

            {resultat.impositionSuisse && statut === "frontalier" && (
              <div style={{ backgroundColor: "rgba(217,119,6,0.07)", border: "1px solid rgba(217,119,6,0.25)", borderRadius: 8, padding: "10px 14px", marginTop: 14, fontSize: 12, color: "#92400E", lineHeight: 1.55 }}>
                <strong>Frontalier Gen{"\u00E8"}ve :</strong> l{"\u2019"}imp{"\u00F4"}t {"\u00E0"} la source est pr{"\u00E9"}lev{"\u00E9"} directement en Suisse.
              </div>
            )}
          </div>

          <div style={{ padding: "10px 28px 16px", fontSize: 11, color: "#94A3B8" }}>
            Estimation indicative {"\u2014"} taux 2026. Consultez un conseiller fiscal pour un calcul pr{"\u00E9"}cis.
          </div>
        </div>
      )}
    </div>
  );
}
