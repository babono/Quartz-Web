# Quartz — Website

Landing page for **Quartz**, a gamified screen-time manager and digital wellness app for iOS.

Live at **https://www.quartz-focus.com**

Built with [Next.js 16](https://nextjs.org) (App Router) in static-export mode, [Tailwind CSS v4](https://tailwindcss.com), and TypeScript. The whole site is prerendered to plain HTML — there is no server at runtime.

Colours, typeface, artwork and motion are taken from the Quartz iOS app so the two read as one product. `CLAUDE.md` has the table mapping each site value back to its Swift source.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:3000**.

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
  app/              Artwork copied from the iOS app
fonts/              Stack Sans (SIL OFL 1.1) + license
public/assets/      Generated, web-ready WebP images
scripts/            Image optimizer + docs/ publish step
docs/               Generated static site — committed, this is what Pages serves
```

## Editing content

- **Landing page copy** lives in the section components under `components/home/`.
- **Privacy Policy / Terms** are Markdown in `content/`. Add a new `content/<name>.md` with a `title:` in the frontmatter and it is published at `/<name>` automatically.
- **Colors, fonts, and component styles** are all in `app/globals.css`.
- **Images**: drop the original into `assets-src/` (or `assets-src/app/` if it came from the iOS app), add an entry to the `images` array in `scripts/optimize-images.mjs` with the width you need, then run `npm run optimize:images`.
- **The shielded-app demo** in section 1 is `components/home/ShieldDemo.tsx`. Its copy is a verbatim copy of the app's depleted-quota shield; if that changes in the app, change it here too.

## Deploying

GitHub Pages is configured to publish from the `main` branch's `/docs` folder, so:

```bash
npm run build
git add docs && git commit -m "Rebuild site"
git push
```

Committing `docs/` is **required**, not optional. `.github/workflows/pages.yml` also builds and uploads the site on every push to `main`, but the repository's Pages source is `build_type: legacy` (branch `main`, folder `/docs`), and `actions/configure-pages` does not change that on an already-enabled repo — the live site is served from the committed `docs/` folder.

`public/CNAME` holds the custom domain and is copied into `docs/` on every build. Do not delete it; without it GitHub Pages drops the custom domain and reverts to the `github.io` URL.

The site is served from the domain root, so `basePath` is empty. If you ever need to build for the old `babono.github.io/Quartz-Web` project-page URL, set `NEXT_PUBLIC_BASE_PATH=/Quartz-Web`.

To drop the committed build output, switch **Settings → Pages → Source** to *GitHub Actions*. The workflow already does everything else; after that you can remove `docs/` from the repo and add it to `.gitignore`.

## Performance notes

- Images are pre-resized and converted to WebP at build time (`static export` has no image optimization server). All artwork on the page totals ~300 KB.
- One self-hosted variable font (52 KB) covers every weight, replacing the 272 KB of Inter + Outfit the site used to pull from Google Fonts. No render-blocking request, no layout shift.
- The FAQ accordion uses native `<details name="faq">`, so the page ships no interaction JavaScript.
