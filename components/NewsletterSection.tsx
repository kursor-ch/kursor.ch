"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

function DiamondDivider() {
  return (
    <div className="relative w-full" style={{ height: 1 }}>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#D97706", opacity: 0.2 }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          top: "50%",
          color: "#D97706",
          fontSize: 10,
          lineHeight: 1,
          backgroundColor: "#FFFFFF",
          padding: "0 8px",
        }}
      >
        &#9670;
      </div>
    </div>
  );
}

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.15);

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
        background: "linear-gradient(180deg, #FFFFFF 0%, #FEF9F0 100%)",
        borderColor: "#E5E7EB",
      }}
    >
      <DiamondDivider />

      <div
        ref={ref}
        className={`mx-auto px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 460, paddingTop: 48, paddingBottom: 48 }}
      >
        <h2
          className="font-heading text-center"
          style={{ fontSize: 22, fontWeight: 600, color: "#111827" }}
        >
          Restez informé
        </h2>
        <p
          className="font-body text-center"
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
            className="font-body text-center"
            style={{ fontSize: 14, fontWeight: 500, color: "#15803D" }}
          >
            &#10003; Vous êtes inscrit(e). À bientôt dans votre boîte mail.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse email"
                className="font-body flex-1 newsletter-input"
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  padding: "14px 16px",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#111827",
                  backgroundColor: "#FDFAF5",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="font-body whitespace-nowrap group cta-btn"
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
                  if (!loading)
                    e.currentTarget.style.backgroundColor = "#B45309";
                }}
                onMouseLeave={(e) => {
                  if (!loading)
                    e.currentTarget.style.backgroundColor = "#D97706";
                }}
              >
                S&apos;inscrire{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  &rarr;
                </span>
              </button>
            </div>
          </form>
        )}

        <p
          className="font-body text-center"
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

      <DiamondDivider />
    </section>
  );
}
