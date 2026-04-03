import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Self-e-Tape — Your whole self-tape workflow. One app.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "radial-gradient(circle at top, #16213f 0%, #0a0f1e 55%, #070b16 100%)",
          color: "#f6f1e8",
          fontFamily: '"DM Sans", sans-serif',
          padding: "64px 88px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(246, 241, 232, 0.08)",
            borderRadius: 28,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 110,
              lineHeight: 0.95,
              fontWeight: 600,
              letterSpacing: "-0.06em",
              color: "#f6f1e8",
            }}
          >
            <span>Self</span>
            <span
              style={{
                fontFamily: '"Fraunces", serif',
                fontStyle: "italic",
                fontWeight: 500,
                marginLeft: "0.01em",
                marginRight: "0.01em",
              }}
            >
              e
            </span>
            <span>Tape</span>
          </div>

          <div
            style={{
              fontSize: 38,
              lineHeight: 1.25,
              letterSpacing: "-0.03em",
              color: "rgba(246, 241, 232, 0.92)",
              maxWidth: 840,
            }}
          >
            Your whole self-tape workflow. One app.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(246, 241, 232, 0.62)",
          }}
        >
          Built by an actor. For actors.
        </div>
      </div>
    ),
    size,
  );
}
