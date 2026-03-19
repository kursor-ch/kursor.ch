import VerdictBadge from "@/components/ui/VerdictBadge";

interface ReportHeaderProps {
  prenom: string;
  score: number;
  verdictLabel: string;
  verdictColor: string;
  verdictBgLight: string;
}

export default function ReportHeader({
  prenom,
  score,
  verdictLabel,
  verdictColor,
  verdictBgLight,
}: ReportHeaderProps) {
  return (
    <section className="text-center space-y-6 pb-8 border-b border-gray-100">
      <div>
        <span className="font-heading font-semibold text-2xl text-gray-900">
          Kursor <span className="text-amber">CH</span>
        </span>
      </div>
      <h1 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900">
        {prenom}, votre diagnostic Kursor CH
      </h1>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-baseline gap-1">
          <span
            className="text-5xl md:text-6xl font-heading font-bold"
            style={{ color: verdictColor }}
          >
            {score}
          </span>
          <span className="text-xl text-gray-400 font-heading">/100</span>
        </div>
        <VerdictBadge
          label={verdictLabel}
          color={verdictColor}
          bgLight={verdictBgLight}
        />
      </div>
    </section>
  );
}
