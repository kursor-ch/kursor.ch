"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="flex items-center gap-3">
      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber rounded-full transition-all duration-500 ease-out shadow-[0_0_6px_rgba(217,119,6,0.4)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-gray-600 tabular-nums whitespace-nowrap">
        {current}/{total}
      </span>
    </div>
  );
}
