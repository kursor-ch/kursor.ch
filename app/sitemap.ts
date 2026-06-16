import type { MetadataRoute } from "next";

const BASE = "https://www.kursor.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages = [
    // Homepage
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },

    // Diagnostics / outils
    { url: "/assurance", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/retraite", priority: 0.9, changeFrequency: "weekly" as const },

    // Guides SEO — S'installer
    { url: "/permis-suisse", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/assurance-maladie", priority: 0.8, changeFrequency: "monthly" as const },

    // Guides SEO — Entreprendre
    { url: "/creation-entreprise", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/fiscalite-business", priority: 0.8, changeFrequency: "monthly" as const },

    // Guides SEO — Patrimoine
    { url: "/retraite-suisse", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/analyse-lpp", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/impots-suisse-etrangers", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/impot-suisse", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/meilleures-entreprises-suisses", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/cout-vie-en-suisse", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/s-installer-en-suisse-pour-un-francais", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/meilleure-banque-suisse", priority: 0.8, changeFrequency: "monthly" as const },

    // Actualités (articles individuels)
    { url: "/actualite/rachat-retroactif-3a-2026-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/actualite/lex-koller-2026-immobilier-suisse", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/actualite/generation-z-emploi-suisse-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/actualite/chiffres-cles-assurance-prevoyance-2026", priority: 0.7, changeFrequency: "monthly" as const },

    // Autres
    { url: "/formation-suisse", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/guide", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/actualite", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/a-propos", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/comment-ca-marche", priority: 0.6, changeFrequency: "monthly" as const },

    // Pages légales
    { url: "/politique-de-confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
