/**
 * Mapping centralisé des images de hero pour chaque page guide.
 *
 * Images servies via le CDN Unsplash (libres de droit, optimisées par next/image).
 * Pour changer une image, modifier l'URL ici et le hero de la page concernée se met à jour.
 *
 * Format des URLs Unsplash :
 * https://images.unsplash.com/photo-{ID}?w=1600&q=80&auto=format&fit=crop
 */

export type ArticleImage = {
  src: string;
  alt: string;
  credit?: string;
};

const PARAMS = "?w=1600&q=80&auto=format&fit=crop";

export const ARTICLE_IMAGES: Record<string, ArticleImage> = {
  "/impot-suisse": {
    src: `https://images.unsplash.com/photo-1554224155-6726b3ff858f${PARAMS}`,
    alt: "Calculatrice et documents fiscaux pour calculer les impôts en Suisse",
  },
  "/impots-suisse-etrangers": {
    src: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85${PARAMS}`,
    alt: "Bureau avec documents administratifs et formulaires fiscaux",
  },
  "/fiscalite-business": {
    src: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7${PARAMS}`,
    alt: "Réunion d'équipe en entreprise pour l'optimisation fiscale",
  },
  "/cout-vie-en-suisse": {
    src: `https://images.unsplash.com/photo-1530841377377-3ff06c0ca713${PARAMS}`,
    alt: "Vue urbaine d'une ville suisse représentant le coût de la vie",
  },
  "/assurance-maladie": {
    src: `https://images.unsplash.com/photo-1505751172876-fa1923c5c528${PARAMS}`,
    alt: "Professionnel de santé symbolisant l'assurance maladie en Suisse",
  },
  "/permis-suisse": {
    src: `https://images.unsplash.com/photo-1488646953014-85cb44e25828${PARAMS}`,
    alt: "Passeport et documents de voyage pour le permis de séjour suisse",
  },
  "/creation-entreprise": {
    src: `https://images.unsplash.com/photo-1521737711867-e3b97375f902${PARAMS}`,
    alt: "Équipe collaborant sur la création d'une entreprise",
  },
  "/retraite-suisse": {
    src: `https://images.unsplash.com/photo-1559526324-c1f275fbfa32${PARAMS}`,
    alt: "Tirelire cochon symbolisant l'épargne retraite en Suisse",
  },
  "/analyse-lpp": {
    src: `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3${PARAMS}`,
    alt: "Graphiques financiers pour l'analyse de placement et LPP",
  },
  "/meilleures-entreprises-suisses": {
    src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab${PARAMS}`,
    alt: "Vue de Zurich représentant les meilleures entreprises suisses",
  },
};

export function getArticleImage(path: string): ArticleImage | null {
  return ARTICLE_IMAGES[path] ?? null;
}
