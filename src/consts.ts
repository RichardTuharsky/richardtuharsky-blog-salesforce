/**
 * Site-wide configuration for the HubSpot consulting practice site.
 *
 * All copy that mentions the practitioner's identity, market, or offers lives
 * inside {{PLACEHOLDER}} tokens. Fill them in one pass before shipping, a
 * grep for `{{` will surface every remaining stub.
 */

export const SITE_METADATA = {
  name: "{{NAME}}",
  domain: "{{DOMAIN}}",
  siteUrl: "https://{{DOMAIN}}",
  title: "{{NAME}}, HubSpot for teams that don't need Salesforce",
  headerTitle: "{{NAME}}",
  description:
    "Independent HubSpot practice for {{TARGET_MARKET}}. {{YEARS_SF}} years of hands-on Salesforce work in enterprise environments, now building HubSpot for companies that don't need Salesforce's weight or cost.",
  language: "en-US",
  locale: "en_US",
  robots: "index, follow",
  theme: "light",

  // HubSpot portal, used by tracking snippet, forms, and meetings embeds.
  // The forms embed silently fails on EU portals without the correct region.
  hubspot: {
    portalId: "{{PORTAL_ID}}",
    region: "{{PORTAL_REGION}}", // "na1" | "eu1"
    meetingsEmbedUrl: "{{MEETINGS_EMBED_URL}}",
    forms: {
      audit: "{{FORM_ID_AUDIT}}",
      lowFriction: "{{FORM_ID_LOW_FRICTION}}",
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
  { href: "/#how-i-work", title: "nav.how" },
  { href: "/notes", title: "nav.notes" },
  { href: "/about", title: "nav.about" },
] as const;

/**
 * The three offers. Names, deliverables, durations, and prices are placeholders ,
 * the site reads honestly with them in place ("priced per scope") and reads sharper
 * once real numbers land. Do not invent numbers.
 */
export const OFFERS = [
  {
    slug: "offer-1",
    name: "{{OFFER_1_NAME}}",
    who: "{{OFFER_1_WHO}}",
    delivered: "{{OFFER_1_DELIVERED}}",
    duration: "{{OFFER_1_DURATION}}",
    price: "{{OFFER_1_PRICE}}",
  },
  {
    slug: "offer-2",
    name: "{{OFFER_2_NAME}}",
    who: "{{OFFER_2_WHO}}",
    delivered: "{{OFFER_2_DELIVERED}}",
    duration: "{{OFFER_2_DURATION}}",
    price: "{{OFFER_2_PRICE}}",
  },
  {
    slug: "offer-3",
    name: "{{OFFER_3_NAME}}",
    who: "{{OFFER_3_WHO}}",
    delivered: "{{OFFER_3_DELIVERED}}",
    duration: "{{OFFER_3_DURATION}}",
    price: "{{OFFER_3_PRICE}}",
  },
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
