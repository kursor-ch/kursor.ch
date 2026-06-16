import Link from "next/link";

const GUIDES = [
  { title: "Permis de séjour en Suisse : le guide complet", href: "/permis-suisse" },
  { title: "Assurance maladie en Suisse : bien choisir", href: "/assurance-maladie" },
  { title: "Créer une société en Suisse", href: "/creation-entreprise" },
  { title: "Optimisation fiscale en Suisse 2026", href: "/fiscalite-business" },
  { title: "3e pilier suisse : le guide complet", href: "/retraite-suisse" },
  { title: "Placement suisse : guide pour investir", href: "/analyse-lpp" },
  { title: "Impôts en Suisse pour les étrangers", href: "/impots-suisse-etrangers" },
  { title: "Barèmes d’impôt sur le revenu en Suisse", href: "/impot-suisse" },
  { title: "Meilleures entreprises suisses 2026", href: "/meilleures-entreprises-suisses" },
  { title: "Coût de la vie en Suisse en 2026", href: "/cout-vie-en-suisse" },
  { title: "S'installer en Suisse pour un Français", href: "/s-installer-en-suisse-pour-un-francais" },
  { title: "Meilleure banque suisse 2026", href: "/meilleure-banque-suisse" },
];

export default function SidebarGuides({ exclude }: { exclude?: string }) {
  const filtered = GUIDES.filter((g) => g.href !== exclude);

  return (
    <div className="rounded-xl bg-white" style={{ border: "1px solid #E2E8F0", padding: 20 }}>
      <p className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16 }}>
        Nos guides les plus lus
      </p>
      <div className="flex flex-col gap-0">
        {filtered.map((g, i) => (
          <Link
            key={g.href}
            href={g.href}
            className="flex items-start gap-3 font-body no-underline"
            style={{
              padding: "10px 0",
              borderBottom: i < filtered.length - 1 ? "1px solid #F1F5F9" : "none",
            }}
          >
            <span
              className="shrink-0 flex items-center justify-center font-heading"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                backgroundColor: "rgba(217,119,6,0.08)",
                color: "#D97706",
                fontSize: 12,
                fontWeight: 600,
                marginTop: 1,
              }}
            >
              {i + 1}
            </span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#111827", lineHeight: 1.4 }}>
              {g.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
