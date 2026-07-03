# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Build then preview production site locally
npm run astro     # Run Astro CLI commands directly
```

There is no test runner or linter configured in this project.

## Architecture

This is an **Astro 5 blog** using MDX content collections, Solid.js for interactive islands, and Tailwind CSS v4. The site runs in **SSR mode** (`output: 'server'`) deployed on Vercel via `@astrojs/vercel`.

### Configuration hub: `src/consts.ts`

All site-wide behavior is controlled from a single file. This includes the site URL, analytics provider (Fathom, GA, Plausible, Umami, etc.), Giscus comments config, navigation links, pagination (default: 5 posts per page), and the `POST_METADATA` object that toggles per-post features (cover images, tags, authors, related posts, table of contents, share buttons, comments).

### Content collections: `src/content.config.ts`

Three typed collections drive all content:
- `blog/` — MDX posts with frontmatter: `title`, `date`, `tags`, `authors`, `draft`, `summary`, `postLayout` (`"simple"` | `"column"`), `cover`, `related`, `canonicalUrl`
- `authors/` — MDX author profiles referenced by blog posts
- `tags/` — MDX tag definitions; a `salesforce-core` tag is applied as default when none is set

Content is queried via Astro's `getCollection()` API. `src/functions.ts` provides `sortBlogPosts()` and `excludeDrafts()` helpers. Note: `excludeDrafts` is currently hardcoded to return `true` in both dev and prod, so `draft: true` posts will always render.

### Page types

There are two distinct types of pages:

**Content-collection pages** — blog posts in `src/content/blog/` rendered via `src/pages/blog/[...slug].astro`, which delegates to either `PostLayout.astro` or `SimplePostLayout.astro` based on the post's `postLayout` frontmatter.

**Standalone Astro pages** — hand-authored `.astro` files for everything else. `src/pages/case-studies/` is the key example: each case study is a self-contained `.astro` page (not a content collection entry). To add a new case study, create a new file in that directory and link it from `src/pages/case-studies/index.astro`. Case study pages use `shiki` directly at request time to syntax-highlight embedded code samples.

### Layouts

- `PostLayout.astro` — Full post view: cover, author, TOC from headings, share buttons, related posts, comments
- `SimplePostLayout.astro` — Stripped-down post view (no sidebar features)
- `ListWithTagsLayout.astro` — Paginated listing with tag sidebar
- `RootLayout.astro` — Root shell wrapping all pages (BaseHead + Header + Footer)

### Interactivity (Solid.js islands)

Components in `src/components/solidjs/` are Solid.js and run on the client. Key ones:
- `ThemeSwitcher.tsx` — Reads/writes `localStorage` for dark/light/system preference; toggles `.dark` class on `<html>`
- `MobileNav.tsx` — Mobile menu toggle
- `SearchButton.tsx` / search JSON served from `src/pages/search.json.ts`
- `Giscus.tsx` — Comments embed, synced to the current theme

### Styling

Tailwind v4 is loaded via the `@tailwindcss/vite` plugin (not PostCSS). Theme customization lives in `src/styles/global.css` using `@theme`. The accent color is **blue** (`#0052ff`). Fonts used: Inter (sans), Calistoga (display/headings), JetBrains Mono (code), Caveat (handwritten). Dark mode is class-based: `@custom-variant dark (&:where(.dark, .dark *))`.

### i18n

Translations are in `src/i18n/ui.ts` (English only by default). `getLangFromUrl()` and `useTranslations()` from `src/i18n/utils.ts` are used in layouts and components. Navigation titles like `"nav.home"` are looked up there; unmatched keys render as-is.

### Path aliases

`@/*` maps to `src/*` and `@/solid/*` maps to `src/components/solidjs/*` (configured in `tsconfig.json`).

### Newsletter API

`src/pages/api/subscribe.ts` handles newsletter signups via EmailOctopus. Requires two environment variables:
- `EMAILOCTOPUS_API_KEY`
- `EMAILOCTOPUS_LIST_ID`
