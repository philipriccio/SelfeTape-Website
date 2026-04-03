import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Self-e-Tape blog post preview image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title ?? "Self-e-Tape Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #121a31 0%, #0a0f1e 58%, #070b16 100%)",
          color: "#f6f1e8",
          padding: "56px 64px",
          fontFamily: '"DM Sans", sans-serif',
          position: "relative",
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
            alignItems: "baseline",
            fontSize: 42,
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.05em",
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
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(246, 241, 232, 0.62)",
            }}
          >
            Self-e-Tape Blog
          </div>

          <div
            style={{
              display: "flex",
              fontSize: title.length > 72 ? 58 : 68,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              fontWeight: 600,
              textWrap: "balance",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(246, 241, 232, 0.72)",
          }}
        >
          <div style={{ display: "flex" }}>Your whole self-tape workflow. One app.</div>
          <div style={{ display: "flex" }}>Built by an actor. For actors.</div>
        </div>
      </div>
    ),
    size,
  );
}
