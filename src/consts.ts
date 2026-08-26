/**
 * Site-wide configuration for the HubSpot consulting practice site.
 *
 * All copy that mentions the practitioner's identity, market, or offers lives
 * inside {{PLACEHOLDER}} tokens. Fill them in one pass before shipping, a
 * grep for `{{` will surface every remaining stub.
 */

export const SITE_METADATA = {
  name: "Richard Tuharsky",
  motto: "The Portal Mechanic",
  domain: "richardtuharsky.com",
  siteUrl: "https://richardtuharsky.com",
  title: "Richard Tuharsky | The Portal Mechanic",
  headerTitle: "Richard Tuharsky",
  description:
    "You don't need a new HubSpot. You need the one you have to work. I find what's actually broken in your portal and fix it.",
  language: "en-US",
  locale: "en_US",
  robots: "index, follow",
  theme: "light",

  // HubSpot portal, used by tracking snippet, forms, and meetings embeds.
  // The forms embed silently fails on EU portals without the correct region.
  hubspot: {
    portalId: "149016748",
    region: "eu1", // "na1" | "eu1"
    meetingsEmbedUrl: "https://meetings-eu1.hubspot.com/rtuharsky",
    forms: {
      audit: "{{FORM_ID_AUDIT}}",
      lowFriction: "{{FORM_ID_LOW_FRICTION}}",
      contact: "acc7eaba-b5ce-4f3f-a5f1-4839665ebc97",
    },
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/richard-tuharsky/",
    twitter: "https://x.com/ricarioth",
    youtube: "https://www.youtube.com/channel/UCWpxPW-2BjNWAkxBkOIn0Ww",
  },
} as const;

/**
 * Notes pagination, kept small so the index page reads as considered, not endless.
 */
export const ITEMS_PER_PAGE = 8;

/**
 * Primary navigation. Order matches the brief: capability → method → thinking → identity.
 */
export const NAVIGATION = [
  { href: "/services", title: "nav.services" },
  { href: "/plans", title: "nav.plans" },
  { href: "/#how-i-work", title: "nav.how" },
  { href: "/notes", title: "nav.notes" },
  { href: "/about", title: "nav.about" },
] as const;

/**
 * Per-note display toggles. Notes are lean by design, no TOC sidebar, no
 * share buttons, no comments. Reading is the offer.
 */
export const NOTE_METADATA = {
  showCover: false,
  showTags: true,
  showDate: true,
  showAuthors: false,
  showRelatedNotes: true,
};
