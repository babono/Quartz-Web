# Quartz — Website

Landing page for **Quartz**, a gamified screen-time manager and digital wellness app for iOS.

Live at **https://babono.github.io/Quartz-Web/**

Built with [Next.js 16](https://nextjs.org) (App Router) in static-export mode, [Tailwind CSS v4](https://tailwindcss.com), and TypeScript. The whole site is prerendered to plain HTML — there is no server at runtime.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:3000/Quartz-Web** — the `/Quartz-Web` prefix is the `basePath`, which matches how GitHub Pages serves this repo.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Optimizes images, exports the static site to `out/`, then copies it to `docs/` |
| `npm run typecheck` | Type-checks without emitting |
| `npm run optimize:images` | Regenerates `public/assets/*.webp` from `assets-src/` |
| `npm start` | Serves the built `docs/` folder locally |

## Project layout

```
app/
  layout.tsx        Root layout — fonts, metadata, header, footer
  page.tsx          Landing page
  [slug]/page.tsx   One page per Markdown file in content/
  not-found.tsx     404 page
  globals.css       Design tokens + all component styles (Tailwind v4)
components/
  SiteHeader.tsx, SiteFooter.tsx
  home/             Landing page sections
content/
  privacy-policy.md, terms-of-service.md
lib/
  site.ts           Site constants, nav, assetPath()
  markdown.ts       Frontmatter + Markdown -> HTML
assets-src/         Full-resolution image originals (not published)
public/assets/      Generated, web-ready WebP images
scripts/            Image optimizer + docs/ publish step
docs/               Generated static site — committed, this is what Pages serves
```

## Editing content

- **Landing page copy** lives in the section components under `components/home/`.
- **Privacy Policy / Terms** are Markdown in `content/`. Add a new `content/<name>.md` with a `title:` in the frontmatter and it is published at `/<name>` automatically.
- **Colors, fonts, and component styles** are all in `app/globals.css`.
- **Images**: drop the original into `assets-src/`, add an entry to the `images` array in `scripts/optimize-images.mjs` with the width you need, then run `npm run optimize:images`.

## Deploying

GitHub Pages is configured to publish from the `main` branch's `/docs` folder, so:

```bash
npm run build
git add docs && git commit -m "Rebuild site"
git push
```

`.github/workflows/pages.yml` also builds and deploys on every push to `main`. It calls `actions/configure-pages` with `enablement: true`, which switches the Pages source over to GitHub Actions on its first successful run — after that, committing `docs/` is belt-and-braces rather than required.

## Performance notes

- Images are pre-resized and converted to WebP at build time (`static export` has no image optimization server). This took the hero image from 17 MB to 179 KB.
- Fonts are self-hosted by `next/font`, so there is no render-blocking request to Google Fonts and no layout shift.
- The FAQ accordion uses native `<details name="faq">`, so the page ships no interaction JavaScript.
