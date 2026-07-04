import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luck & Leverage — Most firms want to hire great recruiters. Few are obsessive enough to win them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#caf53c",
          }}
        >
          Luck &amp; Leverage
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          <span>Most firms want to hire</span>
          <span style={{ color: "#caf53c" }}>great recruiters.</span>
          <span>Few are obsessive</span>
          <span>enough to <span style={{ color: "#caf53c" }}>win them.</span></span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8a8a8a",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Advisory · Search</span>
          <span style={{ color: "#caf53c" }}>luckandleverage.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
