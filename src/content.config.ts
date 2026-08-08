import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
      occupation: z.string().optional(),
      shortBio: z.string(),
      company: z.string().optional(),
      // Loosened to plain strings so {{PLACEHOLDER}} values don't fail the
      // build. Tighten (z.string().email() / z.string().url()) once real
      // values replace the placeholders.
      email: z.string(),
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      lastmod: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      cover: image().optional(),
      tags: z.array(reference("tags")).default(["hubspot"]),
      authors: z.array(reference("authors")).default(["default"]),
      canonicalUrl: z.string().optional(),
      related: z.array(reference("notes")).default([]),
    }),
});

const tags = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tags" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = { notes, authors, tags };
