import { K_PATH_D, K_TRANSFORM, K_VIEWBOX } from "./k-path";

export type KWatermarkPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type KWatermarkSize = "sm" | "md" | "lg";

export interface KWatermarkProps {
  /** Corner to anchor to. Defaults to `top-right`. */
  position?: KWatermarkPosition;
  /** Desktop height: sm=160, md=200, lg=280 (px). Defaults to `lg`. Tablet forces `md`. */
  size?: KWatermarkSize;
  /** Desktop offset from the chosen corner (px). Defaults to 80. Tablet clamps to max(40, offset). */
  offset?: number;
  /** Optional additional classes applied to the wrapper. */
  className?: string;
}

const SIZE_PX: Record<KWatermarkSize, number> = {
  sm: 160,
  md: 200,
  lg: 280,
};

/**
 * KWatermark — oversized low-opacity amber K used as a section anchor.
 *
 * Responsive behavior (CSS-only, SSR-safe):
 *   - <768px  : display: none (hidden via Tailwind `hidden md:block`)
 *   - 768–1023: size forced to md (200px), offset clamped to max(40, offset)
 *   - ≥1024px : respects size + offset props
 *
 * Fill `#D97706` and opacity `0.06` are hardcoded per spec and cannot be
 * overridden by consumers. Decorative only (aria-hidden, pointer-events:none).
 */
export function KWatermark({
  position = "top-right",
  size = "lg",
  offset = 80,
  className,
}: KWatermarkProps) {
  const desktopPx = SIZE_PX[size];
  const tabletOffset = Math.max(40, offset);

  return (
    <div
      className={`hidden md:block absolute pointer-events-none z-0 k-watermark k-watermark--${position}${
        className ? ` ${className}` : ""
      }`}
      style={{
        // Consumed by the responsive rules in globals.css. Cast to `any` via
        // `as unknown as React.CSSProperties` not needed here because we
        // spread into a plain style object indexed by string keys.
        ["--k-watermark-size-desktop" as string]: `${desktopPx}px`,
        ["--k-watermark-offset-desktop" as string]: `${offset}px`,
        ["--k-watermark-offset-tablet" as string]: `${tabletOffset}px`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={K_VIEWBOX}
        style={{
          height: "var(--k-watermark-h)",
          width: "auto",
          display: "block",
        }}
        role="presentation"
        focusable="false"
      >
        <g transform={K_TRANSFORM}>
          <path d={K_PATH_D} fill="#D97706" fillOpacity={0.06} />
        </g>
      </svg>
    </div>
  );
}
