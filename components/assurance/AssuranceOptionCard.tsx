"use client";

interface AssuranceOptionCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const ACCENT = "#86A789";
const ACCENT_LIGHT = "#E6EFE6";

export default function AssuranceOptionCard({
  label,
  selected,
  onClick,
}: AssuranceOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-[15px] font-medium flex items-center gap-3 bg-white shadow-sm"
      style={{
        borderColor: selected ? ACCENT : "#E7E5E4",
        backgroundColor: selected ? ACCENT_LIGHT : "#FFFFFF",
        color: selected ? "#111827" : "#374151",
      }}
    >
      <span
        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
        style={{
          borderColor: selected ? ACCENT : "#D1D5DB",
          backgroundColor: selected ? ACCENT : "transparent",
        }}
      >
        {selected && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
