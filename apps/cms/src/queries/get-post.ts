import { z } from "zod";
import { q } from "../client/client";
import { content } from "../fragments/content";
import { seo } from "../fragments/seo";

export const getPost = q
  .parameters<{ slug: string }>()
  .star.filterByType("post")
  .order("_createdAt desc", "_updatedAt desc")
  .filterBy("slug.current == $slug")
  .slice(0)
  .project((sub) => ({
    title: z.string(),
    seo: sub.field("seo").project(seo),
    ...content,
  }));
