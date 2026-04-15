import type { ReactNode } from "react";
import { K_PATH_D, K_TRANSFORM, K_VIEWBOX } from "./k-path";

export type KNegativeSpaceCorner =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface KNegativeSpaceProps {
  /** Which corner to carve. Defaults to `top-right`. */
  corner?: KNegativeSpaceCorner;
  /** K size in px. Defaults to 36. */
  size?: number;
  /** Card contents. */
  children: ReactNode;
  /** Applied to the wrapper so consumers can set background / border / radius / padding. */
  className?: string;
}

/**
 * KNegativeSpace carves a K-shaped corner via the subtraction technique:
 * an absolutely-positioned K filled with the page background color (#FDFAF5)
 * sits in the chosen corner of the wrapper. On a white card over a cream page,
 * the visible result is a cream-colored K silhouette in the card's corner —
 * this IS the intended negative-space effect, not a bug. Do not "fix" by
 * switching to mask-image without first verifying Safari behavior.
 *
 * Why subtraction instead of mask-image / clip-path:
 *   - Zero cross-browser quirks (Chrome + Safari render identically)
 *   - Preserves consumer's background / border / border-radius on the wrapper
 *   - No SVG data-URI escaping pain, no path-length measurement gotchas
 *
 * Responsive behavior (CSS-only):
 *   - <768px : the cut is hidden (display: none), card renders with normal corners
 *   - ≥768px : the cut renders
 *
 * Constraints from the K motif system spec: one cut per card maximum; only
 * rectangular card-shaped wrappers; no animation on the cut.
 */
export function KNegativeSpace({
  corner = "top-right",
  size = 36,
  children,
  className,
}: KNegativeSpaceProps): JSX.Element {
  return (
    <div
      className={`relative k-negspace k-negspace--${corner}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
      <span className="k-negspace__cut" aria-hidden="true">
        <svg
          viewBox={K_VIEWBOX}
          style={{ height: size, width: "auto", display: "block" }}
          role="presentation"
          focusable="false"
        >
          <g transform={K_TRANSFORM}>
            <path d={K_PATH_D} fill="#FDFAF5" />
          </g>
        </svg>
      </span>
    </div>
  );
}
