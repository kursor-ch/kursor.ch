import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation complète pour s'installer en Suisse | Kursor",
  description:
    "La formation Kursor pour bien s'installer en Suisse arrive bientôt : permis, logement, assurance maladie, emploi et finances. Inscrivez-vous pour être prévenu du lancement.",
};

export default function FormationSuissePage() {
  return (
    <div className="bg-creme" style={{ minHeight: "100vh" }}>
      {/* MAIN */}
      <section style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 600 }}>

          {/* Badge */}
          <span
            className="inline-block font-body uppercase rounded-full"
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#D97706",
              backgroundColor: "rgba(217,119,6,0.1)",
              padding: "4px 12px",
              marginBottom: 32,
            }}
          >
            {"ACADÉMIE KURSOR"}
          </span>

          {/* Construction icon */}
          <div
            className="flex items-center justify-center mx-auto rounded-full"
            style={{
              width: 96,
              height: 96,
              backgroundColor: "rgba(217,119,6,0.08)",
              border: "2px solid rgba(217,119,6,0.2)",
              fontSize: 44,
              marginBottom: 32,
            }}
          >
            {"🏗️"}
          </div>

          {/* Heading */}
          <h1
            className="font-heading"
            style={{ fontSize: 36, fontWeight: 600, color: "#111827", lineHeight: 1.2, marginBottom: 20 }}
          >
            Cette page est en cours de{" "}
            <span className="font-heading italic" style={{ color: "#D97706" }}>
              construction
            </span>
          </h1>

          {/* Description */}
          <p
            className="font-body"
            style={{ fontSize: 16, color: "#475569", lineHeight: 1.75, marginBottom: 40 }}
          >
            Notre formation complète pour bien{" "}
            <strong style={{ color: "#111827" }}>{"s'installer en Suisse"}</strong> sera disponible
            très prochainement. Permis de séjour, logement, assurance maladie, emploi, finances —
            tout ce qu&apos;il faut savoir, étape par étape, au même endroit.
          </p>

          {/* Email CTA */}
          <div
            className="rounded-2xl bg-white"
            style={{
              border: "1px solid #E2E8F0",
              padding: "32px 28px",
              marginBottom: 40,
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
          >
            <p
              className="font-body"
              style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 6 }}
            >
              Soyez parmi les premiers informés
            </p>
            <p
              className="font-body"
              style={{ fontSize: 13, color: "#64748B", marginBottom: 20 }}
            >
              {"Laissez-nous votre email et nous vous préviendrons dès le lancement."}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="font-body rounded-lg w-full bg-white"
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "12px 16px",
                  fontSize: 14,
                  outline: "none",
                  flex: 1,
                }}
              />
              <button
                className="font-body rounded-lg text-white border-0 cursor-pointer shrink-0"
                style={{
                  backgroundColor: "#D97706",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "12px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                }}
              >
                {"Me prévenir du lancement →"}
              </button>
            </div>
            <p className="font-body text-center" style={{ fontSize: 11, color: "#94A3B8", marginTop: 12 }}>
              {"Gratuit · Aucun spam · Désabonnement en un clic"}
            </p>
          </div>

          {/* Back link */}
          <Link
            href="/"
            className="font-body"
            style={{ fontSize: 14, color: "#D97706", fontWeight: 500, textDecoration: "none" }}
          >
            {"← Retour à l'accueil"}
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: "#111827", paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 560 }}>
          <h2
            className="font-heading"
            style={{ fontSize: 28, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}
          >
            Recevez nos conseils chaque semaine
          </h2>
          <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>
            {"Un email par semaine. Les pièges à éviter, les économies à faire."}
          </p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: 24 }}>
            <input
              type="email"
              placeholder="Votre email"
              className="font-body rounded-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "12px 18px",
                fontSize: 14,
                color: "#FFFFFF",
                width: 240,
                outline: "none",
              }}
            />
            <button
              className="font-body rounded-lg text-white border-0 cursor-pointer"
              style={{
                backgroundColor: "#D97706",
                fontSize: 14,
                fontWeight: 500,
                padding: "12px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {"S'inscrire →"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
