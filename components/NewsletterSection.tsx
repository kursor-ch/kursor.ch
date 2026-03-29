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
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E7EB",
      }}
    >
      <div
        ref={ref}
        className={`mx-auto px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 460, paddingTop: 48, paddingBottom: 48 }}
      >
        <h2
          className="font-heading text-center"
          style={{ fontSize: 22, fontWeight: 600, color: "#111827" }}
        >
          Un conseil par semaine. Pas plus.
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
          Chaque vendredi, un email avec un conseil actionnable — emploi,
          fiscalité, assurances ou prévoyance. Zéro spam.
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
    </section>
  );
}
