"use client";

interface AssuranceOptionPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const ACCENT = "#86A789";
const ACCENT_LIGHT = "#E6EFE6";

export default function AssuranceOptionPill({
  label,
  selected,
  onClick,
  disabled = false,
}: AssuranceOptionPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-disabled={disabled || undefined}
      data-selected={selected ? "true" : undefined}
      className="option-button inline-flex items-center px-4 py-2.5 rounded-full border-2 text-sm font-medium shadow-sm transition-all duration-200 disabled:cursor-not-allowed"
      style={
        disabled
          ? {
              borderColor: "#E5E7EB",
              backgroundColor: "#F9FAFB",
              color: "#9CA3AF",
              opacity: 0.6,
            }
          : selected
          ? {
              borderColor: ACCENT,
              backgroundColor: ACCENT,
              color: "#FFFFFF",
              transform: "scale(1.05)",
            }
          : {
              borderColor: "#E7E5E4",
              backgroundColor: "#FFFFFF",
              color: "#374151",
            }
      }
      onMouseEnter={(e) => {
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = ACCENT_LIGHT;
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = "#FFFFFF";
        e.currentTarget.style.borderColor = "#E7E5E4";
      }}
    >
      {label}
    </button>
  );
}
