import { z } from "zod";
import { q } from "../client/client";
import { pageBuilder } from "../fragments/page-builder";
import { seo } from "../fragments/seo";

export const getPage = q
  .parameters<{ slug: string }>()
  .star.filterByType("page")
  .order("_createdAt desc", "_updatedAt desc")
  .filterBy("slug.current == $slug")
  .slice(0)
  .project((sub) => ({
    title: z.string(),
    seo: sub.field("seo").project(seo),
    ...pageBuilder,
  }));
