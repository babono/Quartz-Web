# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

The Quartz app landing page: a **Next.js 16 (App Router) site with `output: "export"`**, so `next build` emits a fully static HTML/CSS/JS bundle with no server. GitHub Pages serves it from `main`'s `/docs` folder at https://www.quartz-focus.com, on a custom domain held by `public/CNAME`.

The site is served from the domain root, so `basePath` is empty. It is still wired up throughout: `next/link` and `next/image` apply it automatically, and anything referencing `public/` by hand goes through `assetPath()` in `lib/site.ts`, because `next/image` does **not** apply `basePath` to `unoptimized` sources. Setting `NEXT_PUBLIC_BASE_PATH=/Quartz-Web` builds for the old `github.io` project-page URL.

`public/CNAME` pins the custom domain and is copied into `docs/` by every build. Deleting it makes Pages fall back to `babono.github.io/Quartz-Web`, which then breaks because every asset URL is root-relative.

## Commands

```bash
npm install          # one-time
npm run dev          # dev server at http://localhost:3000
npm run build        # optimize images, export to out/, then copy to docs/
npm run typecheck    # tsc --noEmit
npm run optimize:images   # regenerate public/assets/*.webp from assets-src/
```

`docs/` is generated output but is **committed** — Pages is set to `build_type: legacy` (branch `main`, folder `/docs`), and that is what actually serves the live site. The Actions workflow builds and uploads too, but does not override the branch source. Run `npm run build` and commit `docs/` alongside any source change that affects the rendered site, or the deploy will ship stale HTML.

## Architecture

- `app/layout.tsx` — root layout: `next/font` (self-hosted Inter + Outfit, exposed as `--font-inter` / `--font-outfit`), site metadata, header, footer.
- `app/page.tsx` — landing page; composes the section components in `components/home/`.
- `app/[slug]/page.tsx` — one static route per Markdown file in `content/` (via `generateStaticParams`). Adding `content/foo.md` publishes `/foo`.
- `app/not-found.tsx` — exported as `404.html`.
- `app/globals.css` — the whole stylesheet: Tailwind v4 `@theme` tokens, base layer, and the `.glass-card` / `.glow-*` / `.faq-*` / `.prose-content` component classes.
- `lib/markdown.ts` — gray-matter frontmatter + `marked` (gfm, hard breaks), matching the old Parsley options.
- `lib/site.ts` — site constants, nav links, `assetPath()`.

## Images

`assets-src/` holds the full-resolution originals (some are 17–21 MB). `scripts/optimize-images.mjs` (run automatically by `prebuild`) resizes them with sharp to 2× their largest CSS size and writes WebP into `public/assets/`. Reference the `.webp` files, never `assets-src/`. Add new images to the `images` array in that script with the right target width.

## Conventions

- Everything is a server component except `components/NavLinks.tsx`, which needs scroll position. Keep that boundary as small as it is: the FAQ accordion is a native `<details name="faq">`, not a click handler.
- `components/QuartzLogo.tsx` is the brand mark as an inline SVG path, traced from the sheet in `assets-src/`. It inherits color via `currentColor`. `app/icon.svg` is the same mark on the brand gradient and generates the favicon and apple-touch-icon.
- The nav scroll-spy marks the current link with `aria-current="true"`, styled in `globals.css`. It treats "current" as *the last section whose top has passed the header* — not "which section is visible" — so the stretches belonging to no nav item (hero, CTA banner) don't blank the nav out. `HEADER_OFFSET` in `NavLinks.tsx` and `section[id]`'s `scroll-margin-top` in `globals.css` describe the same header height; change them together.
- Tailwind scans source files for literal class strings, so write conditional classes out in full rather than building them from template pieces.
