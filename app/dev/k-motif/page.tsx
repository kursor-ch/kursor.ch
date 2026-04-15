import type { Metadata } from "next";
import { KBullet } from "@/components/shared/KBullet";
import { KNegativeSpace } from "@/components/shared/KNegativeSpace";
import { KWatermark } from "@/components/shared/KWatermark";

export const metadata: Metadata = {
  title: "K Motif — dev verification",
  robots: { index: false, follow: false },
};

const HEADING: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  color: "#111827",
  marginBottom: 8,
};

const NOTE: React.CSSProperties = {
  fontSize: 13,
  color: "#6B7280",
  lineHeight: 1.6,
  marginBottom: 20,
};

const SUBHEADING: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "#9CA3AF",
  marginTop: 24,
  marginBottom: 12,
};

const SECTION: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  paddingTop: 48,
  paddingBottom: 48,
  paddingLeft: 24,
  paddingRight: 24,
};

const DIVIDER: React.CSSProperties = {
  height: 1,
  background: "#E5E7EB",
  margin: "0 auto",
  maxWidth: 960,
};

export default function KMotifDevPage() {
  return (
    <div className="bg-creme" style={{ minHeight: "100vh" }}>
      {/* Page header */}
      <header style={{ ...SECTION, paddingTop: 64, paddingBottom: 24 }}>
        <h1
          className="font-heading"
          style={{ fontSize: 32, fontWeight: 600, color: "#111827" }}
        >
          K Motif System — dev verification
        </h1>
        <p style={{ ...NOTE, marginTop: 12, marginBottom: 0 }}>
          This page is a dev-only visual surface for the three shared K motif
          components: KBullet, KWatermark, and KNegativeSpace. It is not linked
          from production navigation and carries{" "}
          <code>robots: noindex</code>. No consumer integrations in this PR.
        </p>
      </header>

      <div style={DIVIDER} />

      {/* ============ KBullet ============ */}
      <section style={SECTION}>
        <h2 style={HEADING} className="font-heading">
          1. KBullet
        </h2>
        <p style={NOTE}>
          Verify the K sits visually centered on the text x-height across sizes
          and inherits <code>currentColor</code> from its parent.
        </p>

        <h3 style={SUBHEADING}>In an amber eyebrow</h3>
        <p
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#D97706",
          }}
        >
          Diagnostic gratuit
          <KBullet />
          Romandie
        </p>

        <h3 style={SUBHEADING}>In a slate metadata line</h3>
        <p
          style={{
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          2 minutes
          <KBullet />
          Estimation
          <KBullet />
          Confidentiel
        </p>

        <h3 style={SUBHEADING}>Size sweep — same context text at 16px</h3>
        <p style={{ fontSize: 16, color: "#111827" }}>
          <span>size=10</span>
          <KBullet size={10} />
          <span>size=13</span>
          <KBullet size={13} />
          <span>size=16</span>
          <KBullet size={16} />
          <span>end</span>
        </p>

        <h3 style={SUBHEADING}>Context-text sweep — default size (12)</h3>
        <p style={{ fontSize: 11, color: "#111827", marginBottom: 8 }}>
          11px body
          <KBullet />
          11px body continues
        </p>
        <p style={{ fontSize: 18, color: "#111827", marginBottom: 8 }}>
          18px body
          <KBullet />
          18px body continues
        </p>
        <p
          className="font-heading"
          style={{ fontSize: 32, fontWeight: 600, color: "#111827" }}
        >
          32px heading
          <KBullet size={18} />
          continues
        </p>

        <h3 style={SUBHEADING}>currentColor check</h3>
        <p style={{ fontSize: 14, color: "#15803D" }}>
          Green text
          <KBullet />
          bullet should be green
        </p>
        <p style={{ fontSize: 14, color: "#DC2626" }}>
          Red text
          <KBullet />
          bullet should be red
        </p>
        <p style={{ fontSize: 14, color: "#111827" }}>
          Black text with explicit amber color prop
          <KBullet color="#D97706" />
          bullet should stay amber
        </p>
      </section>

      <div style={DIVIDER} />

      {/* ============ KWatermark ============ */}
      <section style={SECTION}>
        <h2 style={HEADING} className="font-heading">
          2. KWatermark
        </h2>
        <p style={NOTE}>
          Resize the browser to verify responsive behavior:
          <br />• &lt;768px — watermark is hidden (<code>display: none</code>)
          <br />• 768–1023px — forced to md (200px), offset clamped to ≥40px
          <br />• ≥1024px — respects size + offset props
        </p>

        <h3 style={SUBHEADING}>top-right, size=lg (280px desktop, 80px offset)</h3>
        <div
          style={{
            position: "relative",
            height: 600,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <KWatermark position="top-right" size="lg" offset={80} />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: 32,
              maxWidth: 420,
            }}
          >
            <h4
              className="font-heading"
              style={{ fontSize: 22, fontWeight: 600, color: "#111827" }}
            >
              Section anchor
            </h4>
            <p style={{ ...NOTE, marginBottom: 0, marginTop: 8 }}>
              Content sits above the watermark (z-index 1). The watermark is
              6% amber, decorative, aria-hidden, and never intercepts clicks.
            </p>
          </div>
        </div>

        <h3 style={SUBHEADING}>bottom-right, size=md (200px, 80px offset)</h3>
        <div
          style={{
            position: "relative",
            height: 600,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            overflow: "hidden",
            marginTop: 24,
          }}
        >
          <KWatermark position="bottom-right" size="md" offset={80} />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: 32,
              maxWidth: 420,
            }}
          >
            <h4
              className="font-heading"
              style={{ fontSize: 22, fontWeight: 600, color: "#111827" }}
            >
              Bottom-anchored variant
            </h4>
            <p style={{ ...NOTE, marginBottom: 0, marginTop: 8 }}>
              Same component, anchored to the opposite corner with size=md.
            </p>
          </div>
        </div>
      </section>

      <div style={DIVIDER} />

      {/* ============ KNegativeSpace ============ */}
      <section style={SECTION}>
        <h2 style={HEADING} className="font-heading">
          3. KNegativeSpace
        </h2>
        <p style={NOTE}>
          Open this page in Chrome AND Safari — both should render identically.
          Resize below 768px to verify the cut is hidden and cards revert to
          normal corners. The cream-on-cream example is a stress test: the
          subtraction K sits on a cream card and should still be detectable as
          a corner silhouette (same color contrast logic as production use).
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            marginTop: 12,
          }}
        >
          <div>
            <div style={SUBHEADING}>White card · top-right · 36px</div>
            <KNegativeSpace
              corner="top-right"
              size={36}
              className="font-body"
            >
              <CardShell background="#FFFFFF">
                <CardTitle>White card</CardTitle>
                <CardBody>
                  Cream K silhouette sits in the top-right corner. On a white
                  card over a cream page this is the intended negative-space
                  effect, not an overlay.
                </CardBody>
              </CardShell>
            </KNegativeSpace>
          </div>

          <div>
            <div style={SUBHEADING}>White card · top-right · 48px</div>
            <KNegativeSpace
              corner="top-right"
              size={48}
              className="font-body"
            >
              <CardShell background="#FFFFFF">
                <CardTitle>Larger cut</CardTitle>
                <CardBody>Same corner, 48px instead of 36px.</CardBody>
              </CardShell>
            </KNegativeSpace>
          </div>

          <div>
            <div style={SUBHEADING}>Cream card · top-right · 36px</div>
            <KNegativeSpace
              corner="top-right"
              size={36}
              className="font-body"
            >
              <CardShell background="#FDFAF5">
                <CardTitle>Cream on cream</CardTitle>
                <CardBody>
                  Card background matches the page. The cut should still be
                  visible as a subtle color-of-cut-vs-edge-of-card
                  disambiguation, framed by the card&rsquo;s 1px border.
                </CardBody>
              </CardShell>
            </KNegativeSpace>
          </div>

          <div>
            <div style={SUBHEADING}>White card · bottom-left · 36px</div>
            <KNegativeSpace
              corner="bottom-left"
              size={36}
              className="font-body"
            >
              <CardShell background="#FFFFFF">
                <CardTitle>Alternate corner</CardTitle>
                <CardBody>
                  Same component, different corner prop. Verifies all four
                  corner values position correctly.
                </CardBody>
              </CardShell>
            </KNegativeSpace>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardShell({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: 320,
        height: 200,
        padding: 24,
        background,
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="font-heading"
      style={{
        fontSize: 16,
        fontWeight: 600,
        color: "#111827",
        marginBottom: 8,
      }}
    >
      {children}
    </h4>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 13,
        color: "#6B7280",
        lineHeight: 1.6,
      }}
    >
      {children}
    </p>
  );
}
