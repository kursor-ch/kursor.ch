"use client";

interface RetraiteOptionCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const ACCENT = "#7C3AED";
const ACCENT_LIGHT = "#EDE9FE";

export default function RetraiteOptionCard({
  label,
  selected,
  onClick,
}: RetraiteOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-selected={selected ? "true" : undefined}
      className={`option-button w-full text-left px-5 py-4 rounded-xl border-2 text-[15px] font-medium flex items-center gap-3 shadow-sm ${
        selected ? "" : "bg-white text-gray-700 border-stone-200"
      }`}
      style={
        selected
          ? {
              borderColor: ACCENT,
              backgroundColor: ACCENT_LIGHT,
              color: "#111827",
            }
          : undefined
      }
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
