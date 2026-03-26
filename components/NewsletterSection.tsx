"use client";

import { useState } from "react";

async function submitEmail(email: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  } else {
    console.log("Newsletter signup:", email);
  }
}

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;
    if (!email) return;

    setLoading(true);
    try {
      await submitEmail(email);
    } catch {
      // Show confirmation anyway per spec
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      className="w-full border-t border-b"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E7EB",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 460 }}>
        <h2
          className="font-heading text-center"
          style={{ fontSize: 22, fontWeight: 600, color: "#111827" }}
        >
          Restez informé
        </h2>
        <p
          className="font-outfit text-center"
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: 1.6,
            marginTop: 12,
            marginBottom: 20,
          }}
        >
          Chaque semaine, un conseil actionnable sur l&apos;emploi, la
          fiscalité, les assurances et la prévoyance en Suisse.
        </p>

        {submitted ? (
          <p
            className="font-outfit text-center"
            style={{ fontSize: 14, fontWeight: 500, color: "#15803D" }}
          >
            ✓ Vous êtes inscrit(e). À bientôt dans votre boîte mail.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse email"
                className="font-outfit flex-1 outline-none"
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  padding: "14px 16px",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#111827",
                  backgroundColor: "#FDFAF5",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "#D97706")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#E5E7EB")
                }
              />
              <button
                type="submit"
                disabled={loading}
                className="font-outfit whitespace-nowrap transition-colors"
                style={{
                  backgroundColor: loading ? "#B45309" : "#D97706",
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: 8,
                  border: "none",
                  cursor: loading ? "wait" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = "#B45309";
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = "#D97706";
                }}
              >
                S&apos;inscrire →
              </button>
            </div>
          </form>
        )}

        <p
          className="font-outfit text-center"
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "#9CA3AF",
            marginTop: 12,
          }}
        >
          Pas de spam. Désabonnement en un clic.
        </p>
      </div>
    </section>
  );
}
