# Repository Guidelines

## Project Structure & Module Organization

A Next.js 16 (App Router) site built in static-export mode and served by GitHub Pages from `main`'s `/docs` folder.

- `next.config.ts` sets `output: "export"` and `trailingSlash: true`. `basePath` is empty — the site is served from the root of its custom domain, which `public/CNAME` pins.
- `app/` holds the routes: `page.tsx` (landing page), `[slug]/page.tsx` (one route per Markdown file in `content/`), `not-found.tsx`, `layout.tsx`, and `globals.css`.
- `components/home/` holds the landing page sections; `components/SiteHeader.tsx` and `SiteFooter.tsx` are the shared chrome.
- `lib/site.ts` holds site constants, nav links, and `assetPath()`; `lib/markdown.ts` turns `content/*.md` into HTML.
- `content/*.md` are source content files with `title:` frontmatter.
- `assets-src/` holds full-resolution image originals; `public/assets/` holds the generated WebP files that the site actually references.
- `docs/` is generated production output and **is committed** — regenerate it with `npm run build` after any change that affects the rendered site.

## Build, Test, and Development Commands

- `npm install`: installs dependencies.
- `npm run dev`: starts the dev server at `http://localhost:3000`.
- `npm run dev -- -p 8080`: same, on a different port.
- `npm run build`: optimizes images, exports the static site to `out/`, and copies it into `docs/`.
- `npm run typecheck`: runs `tsc --noEmit` to catch type errors.
- `npm run optimize:images`: regenerates `public/assets/*.webp` from `assets-src/`.

## Coding Style & Naming Conventions

Two-space indentation, `PascalCase` for components and types, `camelCase` for functions and variables. Components are named exports in `PascalCase.tsx` files; content files use kebab-case, for example `privacy-policy.md`.

Keep sections as server components — no `"use client"` unless a feature genuinely needs browser state. Prefer native HTML behaviour over JavaScript (the FAQ is a `<details name="faq">` accordion). Drive repeated markup from a local `const` array rather than copy-pasting blocks.

Tailwind v4 scans source files for literal class strings, so write conditional class names out in full instead of assembling them from fragments at runtime. Design tokens and shared component classes belong in `app/globals.css`, not in ad-hoc utility soup.

Reference `public/` assets through `assetPath()` — `next/image` does not apply `basePath` to `unoptimized` sources. `basePath` is empty today, but keeping the helper means a future move back to a subpath is a one-line change.

## Testing Guidelines

There is no test suite. Verify changes with `npm run typecheck` and `npm run build`, and check the result in the browser with `npm run dev`. Confirm both Markdown pages (`/privacy-policy`, `/terms-of-service`) and the 404 page still render after routing or content changes.

## Commit & Pull Request Guidelines

Commits use short, sentence-style messages such as `Adjust needed packages, and build out home page and privacy page.` Keep commits focused and mention the user-visible area changed.

Pull requests should include a concise summary, the commands run to verify, and screenshots for visual changes. Note whether `docs/` was regenerated — it should be, in the same commit as the source change.
