"use client";

interface OptionPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionPill({
  label,
  selected,
  onClick,
}: OptionPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2.5 rounded-full border-2 transition-all duration-200 text-sm font-medium whitespace-nowrap ${
        selected
          ? "border-amber bg-amber/10 text-amber"
          : "border-gray-200 bg-white text-gray-600 hover:border-amber/40"
      }`}
    >
      {label}
    </button>
  );
}
