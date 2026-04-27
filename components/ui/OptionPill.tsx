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
      data-selected={selected ? "true" : undefined}
      className={`option-button inline-flex items-center px-4 py-2.5 rounded-full border-2 text-sm font-medium shadow-sm ${
        selected
          ? "border-amber bg-amber text-white scale-105"
          : "border-stone-200 bg-white text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}
