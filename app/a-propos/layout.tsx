import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursor CH — À propos",
  description:
    "Un interlocuteur unique pour chaque étape de votre vie en Suisse.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
