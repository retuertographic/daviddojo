import type { NextConfig } from "next";

// GITHUB_PAGES=true genera un export estático para GitHub Pages;
// si no, se mantiene el build standalone (Docker / Vercel).
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: process.env.PAGES_BASE_PATH || undefined,
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {
      output: "standalone",
    };

export default nextConfig;
