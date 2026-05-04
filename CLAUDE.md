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

This is an **Astro 5 blog** using MDX content collections, Solid.js for interactive islands, and Tailwind CSS v4.

### Configuration hub: `src/consts.ts`

All site-wide behavior is controlled from a single file. This includes the site URL, analytics provider (Fathom, GA, Plausible, Umami, etc.), Giscus comments config, navigation links, pagination (default: 5 posts per page), and the `POST_METADATA` object that toggles per-post features (cover images, tags, authors, related posts, table of contents, share buttons, comments).

### Content collections: `src/content.config.ts`

Three typed collections drive all content:
- `blog/` — MDX posts with frontmatter for title, date, tags, authors, draft, summary, layout, and related posts
- `authors/` — MDX author profiles referenced by blog posts
- `tags/` — MDX tag definitions; a `default` tag is applied when none is set

Content is queried via Astro's `getCollection()` API. `src/functions.ts` provides `sortBlogPosts()` and `excludeDrafts()` helpers used across listing pages.

### Layouts

- `PostLayout.astro` — Full post view: cover, author, TOC from headings, share buttons, related posts, comments
- `SimplePostLayout.astro` — Stripped-down post view (no sidebar features)
- `ListWithTagsLayout.astro` — Paginated listing with tag sidebar
- `RootLayout.astro` — Root shell wrapping all pages (BaseHead + Header + Footer)

Individual posts select their layout via the `layout` frontmatter field; `src/pages/blog/[...slug].astro` delegates rendering to the appropriate layout.

### Interactivity (Solid.js islands)

Components in `src/components/solidjs/` are Solid.js and run on the client. Key ones:
- `ThemeSwitcher.tsx` — Reads/writes `localStorage` for dark/light/system preference
- `MobileNav.tsx` — Mobile menu toggle
- `SearchButton.tsx` / search JSON served from `src/pages/search.json.ts`
- `Giscus.tsx` — Comments embed, synced to the current theme

### Styling

Tailwind v4 is loaded via the `@tailwindcss/vite` plugin (not PostCSS). Theme customization lives in `src/styles/global.css` using `@theme` — the primary color scale maps to pink. The Onest font is loaded via `@fontsource/onest`.

### i18n

Translations are in `src/i18n/ui.ts` (English only by default). `getLangFromUrl()` and `useTranslations()` from `src/i18n/utils.ts` are used in layouts and components. Adding a new language means adding an entry to the `ui` map and updating the `languages` object.

### Path aliases

`@/*` maps to `src/*` and `@/solid/*` maps to `src/components/solidjs/*` (configured in `tsconfig.json`).
