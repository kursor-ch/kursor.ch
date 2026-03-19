"use client";

interface OptionCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({
  label,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-[15px] font-medium ${
        selected
          ? "border-amber bg-amber/5 text-gray-900 shadow-sm"
          : "border-gray-200 bg-white text-gray-700 hover:border-amber/40 hover:bg-amber/[0.02]"
      }`}
    >
      {label}
    </button>
  );
}
