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

## Staying in sync with the iOS app

The site deliberately mirrors the Quartz iOS app at `/Users/babono/Dev/boahlil`. When the app's design changes, these are the things to re-check:

| Site | App source of truth |
|---|---|
| `--color-neon-*` in `app/globals.css` | `Views/AttentionGymView.swift` (per-game accents), `Components/FigmaNeonBox.swift` (glows) |
| Motion durations in `app/globals.css` | `Views/OnboardingView.swift` — 3.5s hero breathe, 5.5s/4.2s ornament drift, opacity 0.60→0.80 |
| `components/home/ShieldDemo.tsx` copy | `BoahlilShieldConfiguration/ShieldConfigurationExtension.swift` — the demo uses the `hasQuota == false` branch verbatim |
| `assets-src/app/*` | `boahlil/Assets.xcassets/*` — game art, quota ring, leaderboard podium, crystal, icons |
| `app/icon.png`, `apple-icon.png`, `favicon.ico` | `Assets.xcassets/AppIcon.appiconset` |
| `fonts/` | `boahlil/Fonts/StackSans-VariableFont_wght.ttf` |

Each colour token carries a comment naming its Swift origin — keep those accurate.

## Images

`assets-src/` holds the full-resolution originals (some are 17–21 MB); `assets-src/app/` holds art copied from the iOS app. `scripts/optimize-images.mjs` (run automatically by `prebuild`) resizes them with sharp to roughly 2× their largest CSS size and writes WebP into `public/assets/`. Reference the `.webp` files, never `assets-src/`. Add new images to the `images` array in that script with the right target width, and remove entries when nothing references them any more.

## Fonts

Stack Sans, the app's typeface, self-hosted from `fonts/StackSansText-Variable.woff2` via `next/font/local`. It is a variable font whose **default instance is ExtraLight (200)**, so `app/layout.tsx` must declare `weight: "200 700"` — without the range every weight collapses to ExtraLight. The axis stops at 700, so `font-extrabold` (800) would be synthesised; use `font-bold`. See `fonts/README.md` for regeneration, and keep `fonts/OFL.txt` alongside the font as the license requires.

## Conventions

- Everything is a server component except `components/NavLinks.tsx`, which needs scroll position. Keep that boundary as small as it is: the FAQ accordion is a native `<details name="faq">`, not a click handler.
- `components/QuartzLogo.tsx` is the brand mark as an inline SVG path, traced from the sheet in `assets-src/`. It inherits color via `currentColor`. `app/icon.svg` is the same mark on the brand gradient and generates the favicon and apple-touch-icon.
- The nav scroll-spy marks the current link with `aria-current="true"`, styled in `globals.css`. It treats "current" as *the last section whose top has passed the header* — not "which section is visible" — so the stretches belonging to no nav item (hero, CTA banner) don't blank the nav out. `HEADER_OFFSET` in `NavLinks.tsx` and `section[id]`'s `scroll-margin-top` in `globals.css` describe the same header height; change them together.
- Tailwind scans source files for literal class strings, so write conditional classes out in full rather than building them from template pieces.
- **Tailwind v4 emits `-translate-x-*` as the standalone `translate` property, not as `transform`.** The two compose rather than overriding, so a keyframe that also sets `translateX(-50%)` doubles the shift. Animate `transform` only, and leave centring to the utility — this already bit the `.ornament` glows once.
- The animated pieces (`.ornament`, `.float-card`, `ShieldDemo`) are pure CSS. Anything that conveys meaning must stay legible under `prefers-reduced-motion`, where animations do not run — see the reduced-motion block that pins the shield open.
