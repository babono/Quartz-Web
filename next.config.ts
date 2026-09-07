import type { NextConfig } from "next";

// The site is served from the root of https://www.quartz-focus.com, so no path
// prefix. Set NEXT_PUBLIC_BASE_PATH="/Quartz-Web" to build for the old
// babono.github.io/Quartz-Web project-page URL instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into out/
  output: "export",
  basePath,
  // Emit /privacy-policy/index.html rather than /privacy-policy.html,
  // preserving the URLs the Saga build produced.
  trailingSlash: true,
  // The export target has no image optimization server; images are
  // pre-optimized by scripts/optimize-images.mjs instead.
  images: { unoptimized: true },
  // next/image does not apply basePath to unoptimized sources, so expose it
  // for the assetPath() helper in lib/site.ts.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
