import type { NextConfig } from "next";

// GitHub Pages serves this repo from https://babono.github.io/Quartz-Web/,
// so every link and asset needs the /Quartz-Web prefix. If the site ever moves
// to a custom apex domain, set NEXT_PUBLIC_BASE_PATH="" in the environment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Quartz-Web";

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
