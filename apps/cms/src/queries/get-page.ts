import { defineQuery } from "groq";
import { z } from "zod";
import { q } from "../client/client";
import { pageBuilder, pageBuilderTyped } from "../fragments/page-builder";
import { seo } from "../fragments/seo";

export const getPage = defineQuery(`
  *[_type == 'page' && slug.current == $slug] |
  order(date desc, _updatedAt desc)[0] {
    _id,
    _type,
    title,
    pageBuilder[] ${pageBuilder}
    ${seo}
  }
`);

export const getPageTyped = q
  .parameters<{ slug: string }>()
  .star.filterByType("page")
  .order("_updatedAt desc")
  .filterBy("slug.current == $slug")
  .slice(0)
  .project(() => ({
    title: z.string(),
    ...pageBuilderTyped,
  }));
