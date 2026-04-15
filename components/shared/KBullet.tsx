import { K_PATH_D, K_TRANSFORM, K_VIEWBOX } from "./k-path";

export interface KBulletProps {
  /** Fill color for the K. Defaults to `currentColor` so the bullet tracks surrounding text. */
  color?: string;
  /** Height in pixels. Width auto-scales. Defaults to 12. */
  size?: number;
  /** Optional additional classes applied to the span wrapper. */
  className?: string;
}

/**
 * KBullet — an inline Kursor K used as a separator in eyebrows and metadata
 * strings (e.g. "DIAGNOSTIC GRATUIT · ROMANDIE" where · is a K).
 *
 * Fixed 8px horizontal margin per the K motif system spec. Decorative only,
 * so it is marked aria-hidden. No animation.
 */
export function KBullet({
  color = "currentColor",
  size = 12,
  className,
}: KBulletProps): JSX.Element {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "-0.1em",
        margin: "0 8px",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={K_VIEWBOX}
        height={size}
        width="auto"
        role="presentation"
        focusable="false"
      >
        <g transform={K_TRANSFORM}>
          <path d={K_PATH_D} fill={color} />
        </g>
      </svg>
    </span>
  );
}
