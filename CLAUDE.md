# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Build then preview production locally
npm run astro     # Astro CLI directly
```

No test runner or linter is configured.

## What this site is

Independent **HubSpot consulting practice** site for a solo consultant repositioning from Salesforce to HubSpot. Content is intentionally minimal: one homepage (10 sections), `/services`, `/about`, `/notes` + `/notes/[slug]`, `/privacy`, `/terms`, `/llms.txt`. No case studies, no tag routes, no comments, no search, no newsletter, no client logos, no testimonials. There are comment-only stubs for a logo strip and testimonial section, ready to switch on when honest content exists.

The **positioning** is the spine: N years of enterprise Salesforce work, now deliberately building HubSpot for companies that don't need Salesforce's weight. All copy is first-person singular ("I", never "we"/"our team"). Never imply a long HubSpot track record.

## Architecture

Astro 5 SSR on Vercel (`@astrojs/vercel`) with MDX content collections, Solid.js islands, and Tailwind CSS v4 via `@tailwindcss/vite`.

### Configuration hub: `src/consts.ts`

Single source of truth. Exports:
- `SITE_METADATA` — brand, domain, SEO copy, HubSpot portal (portalId, region, meetingsEmbedUrl, form IDs), socials
- `NAVIGATION` — Services · How I work · Notes · About (order matters — capability → method → thinking → identity)
- `OFFERS` — the three scoped engagements (name, who, delivered, duration, price)
- `NOTE_METADATA` — per-note display toggles (notes are lean: no TOC sidebar, no share buttons, no comments)
- `ITEMS_PER_PAGE`

**All identity-specific values are `{{PLACEHOLDER}}` tokens.** Grep for `{{` to surface every remaining stub before launch. The site renders honestly with placeholders in place ("priced per scope") and sharper once real values land. Never invent numbers, client counts, results, or years.

### Content collections: `src/content.config.ts`

Three typed collections:
- `notes/` — MDX; frontmatter: `title`, `summary`, `date`, `lastmod`, `draft`, `cover`, `tags`, `authors`, `canonicalUrl`, `related`. Default tag is `sfmc`.
- `authors/` — MDX profiles. **Schema uses `z.string()` (not `.email()`/`.url()`)** so `{{PLACEHOLDER}}` values don't fail the build. Tighten these once real values land.
- `tags/` — MDX definitions. Tag routes were removed; tags now appear only as inline labels on note cards.

Helpers in `src/functions.ts`: `sortNotes()`, `excludeDrafts()` (properly gated on `import.meta.env.PROD`).

### Pages

**Homepage** (`src/pages/index.astro`) — 10 marked sections `§01`–`§09` (plus footer):
1. Hero (position headline, not service description)
2. Credibility strip (honest facts only, no logos)
3. What I do (three offer cards from `OFFERS`)
4. Who I'm not for (qualification, unapologetic)
5. Salesforce → HubSpot (the one topic with earned authority — full section, includes SF-object→HubSpot-object schema morph)
6. How I work (three phase-questions in schema-boxes)
7. Notes (latest three)
8. What happens on the call
9. Book (HubSpot meetings embed)

Every section opens with `<p class="schema-annotation">§ NN — SECTION</p>` — this is the signature aesthetic.

**Standalone pages**: `/services`, `/about`, `/privacy`, `/terms`, `/404`. All use `RootLayout`.

**Notes**: `/notes` (list) + `/notes/[...slug]` (post, prerendered). `[...slug]` resolves `authors`, `tags`, `related` via `getEntries()`.

**Endpoints**: `/rss.xml` (from notes collection), `/llms.txt` (built from `SITE_METADATA` + `OFFERS`).

### Design tokens (`src/styles/global.css`)

Deliberately anti-cliché — the brief bans cream+terracotta+serif, near-black+acid-green, and broadsheet layouts. Palette is six values:

- `--color-background`: `#F7F6F2` light / `#0E1015` dark (warm off-white / cool near-black)
- `--color-foreground`: `#111318` / `#E7E9EE`
- `--color-muted` + `--color-muted-foreground` for cards / secondary text
- `--color-accent`: `#3651E8` (indigo — the one accent)
- `--color-rule`: `#8891A4` (cool gray-blue for schema lines and monospace micro-labels)

**Faces** — all variable, all free, all self-hosted via `@fontsource-variable/*`:
- Display (h1–h4): **Fraunces Variable** — soft-angled serif, weight 500, opsz for scale
- Body: **Manrope Variable** — warm sans, weight 400/500
- Utility/mono: **JetBrains Mono**

Border radius max `2px` (`--radius-sm`). Not iOS-bubbly.

### Signature element: CRM schema annotations

The site's one signature move. `src/components/SchemaObject.astro` renders small monospace-labeled object boxes (e.g., `contact` with `email · lifecycle_stage · owner_id`) connected implicitly by the shared cool-gray rule color. Used sparingly in three places only:
1. Hero backdrop (subtle, decorative)
2. `§05 SF → HubSpot` section (an SF object schema morphs into a HubSpot one)
3. `§06 How I work` (each phase-question sits inside a `.schema-box`)

CSS classes: `.schema-annotation` (monospace section marker), `.schema-box` (bordered object frame with the object name as a labeled tab via `::before`), `.schema-field` (row inside a box).

### HubSpot integration (three isolated components)

- `HubspotTracking.astro` — Loaded from `BaseHead`. Uses HubSpot's own consent module (no third-party CMP; state stays in sync with what HubSpot enforces server-side). Renders nothing if `SITE_METADATA.hubspot.portalId` is still a `{{PLACEHOLDER}}`. Picks `js-eu1.hs-scripts.com` vs `js.hs-scripts.com` based on `region`.
- `HubspotForm.astro` — Two variants: `variant="audit"` (high-intent, used on `/services` and homepage) and `variant="lowFriction"`. **Passes `region` to `hbspt.forms.create` — EU portals silently fail without it.** Renders a visible placeholder stub when portal/form IDs are unfilled.
- `HubspotMeetings.astro` — Meetings embed on `§09 BOOK`. Same placeholder-safe rendering.

**Never add GA4 alongside HubSpot analytics unless there's a stated reason** — the brief prohibits it.

### Interactivity (Solid.js islands)

Only two active islands remain:
- `ThemeSwitcher.tsx` — Reads/writes `localStorage`; toggles `.dark` on `<html>`
- `MobileNav.tsx` — Mobile menu toggle

`Link.tsx` still exists as a helper.

### Path aliases

`@/*` → `src/*` and `@/solid/*` → `src/components/solidjs/*` (in `tsconfig.json`).

### i18n

`src/i18n/ui.ts` is English-only. `useTranslations()` returns a `t()` function; **unmatched keys are returned verbatim** (no error thrown). Multi-language scaffolding is intentionally kept in place (unused) — adding SK later is a smaller change than reintroducing i18n.

## Copy rules (from the brief — non-negotiable)

- First person singular. Never "we"/"our team"/"the agency".
- No invented numbers, client counts, results, years, or certifications. If it's not in a placeholder, don't write it.
- Ban words: *leverage, seamless, robust, unlock, empower, "in today's fast-paced", "we help you"*.
- Buttons say what happens: "Book a call", not "Get started".
- Sentence case. Active voice. One H1 per page.

## Quality floor (unannounced but required)

- Responsive to 360px
- Visible `:focus-visible` outline (indigo, `outline-offset: 2px`, radius 2px)
- `prefers-reduced-motion` respected — CSS disables `[data-animate]` transitions and animation-durations
- WCAG AA contrast on all text
- Sticky header, no mega-menu, no cookie-setting scripts before consent

## Placeholders inventory

Grep `{{` in `src/` and `public/` before launch. Currently used:
`{{NAME}}`, `{{DOMAIN}}`, `{{EMAIL}}`, `{{TARGET_MARKET}}`, `{{YEARS_SF}}`, `{{ENV_DESCRIPTORS}}`, `{{CERTS}}`, `{{PORTAL_ID}}`, `{{PORTAL_REGION}}`, `{{MEETINGS_EMBED_URL}}`, `{{LI_URL}}`, `{{X_URL}}`, `{{FORM_ID_AUDIT}}`, `{{FORM_ID_LOW_FRICTION}}`, `{{GOVERNING_LAW}}`, `{{LAST_UPDATED}}`, and per-offer `{{OFFER_N_NAME|WHO|DELIVERED|DURATION|PRICE}}` × 3.
