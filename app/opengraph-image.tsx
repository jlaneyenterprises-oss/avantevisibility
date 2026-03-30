import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Avante Visibility — AI Visibility & Local SEO Audits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #01696F 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 8,
              display: "flex",
            }}
          >
            Avante{" "}
            <span style={{ color: "#D4A853", marginLeft: 12 }}>
              Visibility
            </span>
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.8)",
              marginTop: 20,
              maxWidth: 800,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            AI Visibility Audits &bull; Review Intelligence &bull; GBP
            Optimization
          </div>
          <div
            style={{
              marginTop: 40,
              padding: "12px 32px",
              background: "#D4A853",
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 600,
              color: "#1A1A2E",
              display: "flex",
            }}
          >
            avantevisibility.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
