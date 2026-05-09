"use client";

interface AssuranceOptionMultiPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const ACCENT = "#86A789";
const ACCENT_LIGHT = "#E6EFE6";

// Multi-select chip variant for Q8 complémentaires. Identical visual language
// to AssuranceOptionPill but with a small checkmark indicator when selected,
// to distinguish multi-select toggle behavior from single-select radio
// behavior. aria-pressed reflects the selection state.
export default function AssuranceOptionMultiPill({
  label,
  selected,
  onClick,
}: AssuranceOptionMultiPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-selected={selected ? "true" : undefined}
      className="option-button inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-medium shadow-sm transition-all duration-200"
      style={
        selected
          ? {
              borderColor: ACCENT,
              backgroundColor: ACCENT,
              color: "#FFFFFF",
            }
          : {
              borderColor: "#E7E5E4",
              backgroundColor: "#FFFFFF",
              color: "#374151",
            }
      }
      onMouseEnter={(e) => {
        if (selected) return;
        e.currentTarget.style.backgroundColor = ACCENT_LIGHT;
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        if (selected) return;
        e.currentTarget.style.backgroundColor = "#FFFFFF";
        e.currentTarget.style.borderColor = "#E7E5E4";
      }}
    >
      <span
        className="flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center"
        style={{
          borderColor: selected ? "#FFFFFF" : "#D1D5DB",
          backgroundColor: selected ? "#FFFFFF" : "transparent",
        }}
        aria-hidden="true"
      >
        {selected && (
          <svg
            className="w-2.5 h-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={ACCENT}
            strokeWidth={4}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
