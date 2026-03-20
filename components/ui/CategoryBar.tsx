"use client";

interface CategoryBarProps {
  label: string;
  score: number;
  max: number;
  color: string;
  barDelayClass?: string;
}

export default function CategoryBar({
  label,
  score,
  max,
  color,
  barDelayClass,
}: CategoryBarProps) {
  const pct = Math.round((score / max) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-semibold" style={{ color }}>
          {score}/{max}
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barDelayClass || "animate-bar-fill"}`}
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
