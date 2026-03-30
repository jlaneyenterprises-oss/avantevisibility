import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avante Visibility",
    short_name: "Avante",
    description:
      "AI visibility audits, review intelligence, and GBP optimization for local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#01696F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
