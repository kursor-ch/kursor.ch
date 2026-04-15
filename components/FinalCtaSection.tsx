"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

async function submitEmail(email: string, newsletterOptIn: boolean) {
  const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: "lp_final_cta",
        newsletter_optin: newsletterOptIn,
      }),
    });
  } else {
    console.log("Final CTA email:", email, "newsletter_optin:", newsletterOptIn);
  }
}

export default function FinalCtaSection() {
  const router = useRouter();
  const { ref, isVisible } = useScrollReveal(0.12);
  const [loading, setLoading] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;
    if (!email) return;

    setLoading(true);
    try {
      await submitEmail(email, newsletterOptIn);
    } catch {
      // Proceed to the diagnostic anyway — email capture is best-effort
    }
    router.push("/emploi");
  }

  return (
    <section
      className="relative px-6"
      style={{
        backgroundColor: "#FDFAF5",
        paddingTop: 96,
        paddingBottom: 96,
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto text-center scroll-reveal ${isVisible ? "visible" : ""}`}
        style={{ maxWidth: 720 }}
      >
        <h2
          className="font-heading text-[28px] sm:text-[36px] lg:text-[44px]"
          style={{
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Votre vie suisse mérite mieux
          <br />
          <span
            className="font-heading italic"
            style={{ color: "#D97706", fontWeight: 500 }}
          >
            qu&rsquo;une série d&rsquo;arbitrages au hasard.
          </span>
        </h2>

        <p
          className="font-body"
          style={{
            fontWeight: 400,
            fontSize: 16,
            color: "#475569",
            lineHeight: 1.65,
            marginTop: 20,
          }}
        >
          5 minutes de diagnostic. Un bilan chiffré. Aucun engagement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch mx-auto gap-2"
          style={{ marginTop: 36, maxWidth: 520 }}
        >
          <label className="sr-only" htmlFor="final-cta-email">
            Votre adresse email
          </label>
          <input
            id="final-cta-email"
            type="email"
            name="email"
            required
            placeholder="Votre adresse email"
            className="font-body flex-1 newsletter-input"
            style={{
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              padding: "14px 16px",
              fontSize: 15,
              fontWeight: 400,
              color: "#0F172A",
              backgroundColor: "#FFFFFF",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="font-body whitespace-nowrap group cta-btn"
            style={{
              backgroundColor: loading ? "#B45309" : "#D97706",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 500,
              padding: "14px 24px",
              borderRadius: 10,
              border: "none",
              cursor: loading ? "wait" : "pointer",
              boxShadow: "0 4px 16px rgba(217,119,6,0.18)",
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
            Commencer mon diagnostic{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </button>
        </form>

        <label
          htmlFor="final-cta-newsletter"
          className="font-body inline-flex items-center gap-2 cursor-pointer mx-auto"
          style={{
            marginTop: 14,
            fontSize: 13,
            fontWeight: 400,
            color: "#64748B",
            letterSpacing: "0.01em",
          }}
        >
          <input
            id="final-cta-newsletter"
            type="checkbox"
            checked={newsletterOptIn}
            onChange={(e) => setNewsletterOptIn(e.target.checked)}
            style={{
              width: 16,
              height: 16,
              border: "1px solid #E5E7EB",
              borderRadius: 4,
              accentColor: "#D97706",
              cursor: "pointer",
              flexShrink: 0,
            }}
          />
          <span>Recevoir aussi nos conseils hebdomadaires sur la vie en Suisse.</span>
        </label>

        <p
          className="font-body"
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#94A3B8",
            marginTop: 14,
            letterSpacing: "0.01em",
          }}
        >
          Pas de carte bancaire · Diagnostic gratuit · Résultats immédiats
        </p>
      </div>
    </section>
  );
}
