import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursor CH — Comment ça marche",
  description:
    "De votre première question à la mise en relation avec un expert. Gratuit, confidentiel, sans engagement.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
