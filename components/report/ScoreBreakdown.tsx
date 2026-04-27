import CategoryBar from "@/components/ui/CategoryBar";

interface ScoreBreakdownProps {
  profil: number;
  projet: number;
  financier: number;
  preparation: number;
  verdictColor: string;
  summary: string;
}

export default function ScoreBreakdown({
  profil,
  projet,
  financier,
  preparation,
  verdictColor,
  summary,
}: ScoreBreakdownProps) {
  const categories = [
    { label: "Profil professionnel", score: profil, max: 30 },
    { label: "Maturité projet", score: projet, max: 30 },
    { label: "Ancrage financier", score: financier, max: 20 },
    { label: "Préparation administrative", score: preparation, max: 20 },
  ];

  return (
    <section className="scroll-reveal space-y-6 py-8 border-b border-gray-100">
      <h2 className="text-xl font-heading font-semibold text-gray-900">
        Votre score
      </h2>
      <div className="space-y-4">
        {categories.map((cat) => (
          <CategoryBar
            key={cat.label}
            label={cat.label}
            score={cat.score}
            max={cat.max}
            color={verdictColor}
          />
        ))}
      </div>
      <p className="text-base text-gray-600 leading-relaxed">{summary}</p>
    </section>
  );
}
