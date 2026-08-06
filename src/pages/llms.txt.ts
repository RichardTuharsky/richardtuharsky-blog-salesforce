import type { APIRoute } from "astro";
import { SITE_METADATA, OFFERS } from "@/consts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const body = `# ${SITE_METADATA.name}

> Independent HubSpot consulting practice. Site: ${SITE_METADATA.siteUrl}

## About

${SITE_METADATA.description}

This is a solo practice. First person singular. No agency, no team.

## Positioning

The differentiator is not "HubSpot expert since forever". It is {{YEARS_SF}} years of hands-on Salesforce work in enterprise environments, now deliberately building HubSpot for companies that do not need Salesforce's weight or cost.

## Target client

${"{{TARGET_MARKET}}"}

## Offers

${OFFERS.map((o) => `- **${o.name}** — for ${o.who}. Delivered: ${o.delivered}. Duration: ${o.duration}. Price: ${o.price}.`).join("\n")}

## Not offered

- Content marketing, SEO retainers, paid media management
- Audit-only decks with no build attached
- Retainers without a defined deliverable
- Anything that is not building or fixing the CRM

## Salesforce → HubSpot migration

The one topic where deep authority is genuinely earned. Assessment, guidance on what breaks in a migration, and honest advice on when to stay on Salesforce.

## Contact

- Email: {{EMAIL}}
- LinkedIn: ${SITE_METADATA.socials.linkedin}
- Book a call: ${SITE_METADATA.siteUrl}/#book

## Notes

Working notes on HubSpot, RevOps, and CRM architecture: ${SITE_METADATA.siteUrl}/notes
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
