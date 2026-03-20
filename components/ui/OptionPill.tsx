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
      className={`inline-flex items-center px-4 py-2.5 rounded-full border-2 transition-all duration-200 text-sm font-medium shadow-sm ${
        selected
          ? "border-amber bg-amber text-white scale-105"
          : "border-stone-200 bg-white text-gray-700 hover:border-amber"
      }`}
    >
      {label}
    </button>
  );
}
