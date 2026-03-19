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
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-[15px] font-medium flex items-center gap-3 bg-white shadow-sm ${
        selected
          ? "border-amber bg-[#FEF3C7] text-gray-900 shadow-md"
          : "border-stone-200 text-gray-700 hover:border-amber/40 hover:shadow-md hover:-translate-y-px"
      }`}
    >
      {/* Radio dot */}
      <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
        selected ? "border-amber bg-amber" : "border-gray-300"
      }`}>
        {selected && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
