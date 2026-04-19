"use client";

interface AssuranceProgressBarProps {
  current: number;
  total: number;
}

export default function AssuranceProgressBar({
  current,
  total,
}: AssuranceProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full h-[3px] bg-gray-200 overflow-hidden">
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%`, backgroundColor: "#86A789" }}
      />
    </div>
  );
}
