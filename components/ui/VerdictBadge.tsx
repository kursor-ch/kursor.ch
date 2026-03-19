interface VerdictBadgeProps {
  label: string;
  color: string;
  bgLight: string;
}

export default function VerdictBadge({
  label,
  color,
  bgLight,
}: VerdictBadgeProps) {
  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold"
      style={{ color, backgroundColor: bgLight }}
    >
      {label}
    </span>
  );
}
