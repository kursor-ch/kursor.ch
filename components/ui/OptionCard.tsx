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
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-[15px] font-medium flex items-center gap-3 ${
        selected
          ? "border-amber bg-[#FEF3C7] text-gray-900 shadow-sm"
          : "border-stone-200 bg-white text-gray-700 shadow-sm hover:border-amber/40 hover:shadow-md hover:-translate-y-px"
      }`}
    >
      {/* Radio dot */}
      <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
        selected ? "border-amber" : "border-gray-300"
      }`}>
        {selected && (
          <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        )}
      </span>
      {label}
    </button>
  );
}
