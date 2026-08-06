export const prerender = true;

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_METADATA } from "@/consts";
import { excludeDrafts, sortNotes } from "@/functions";

export async function GET(context) {
  const notes = sortNotes(await getCollection("notes", excludeDrafts));
  return rss({
    title: `${SITE_METADATA.name} — Notes`,
    description: SITE_METADATA.description,
    site: context.site ?? SITE_METADATA.siteUrl,
    items: notes.map(({ id, data: { title, summary, tags, date } }) => ({
      title,
      categories: tags.map((ref) => ref.id),
      pubDate: date,
      description: summary,
      link: `/notes/${id}/`,
    })),
  });
}
