import type { CollectionEntry } from "astro:content";

export const sortNotes = (
  notes: CollectionEntry<"notes">[] | null,
): CollectionEntry<"notes">[] => {
  if (!notes) return [];
  return notes.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
};

export const excludeDrafts = ({ data }: CollectionEntry<"notes">): boolean =>
  import.meta.env.PROD ? !data.draft : true;
