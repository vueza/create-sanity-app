import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";
import { contentObject } from "./content-object";
import { heading } from "./heading";
import { hero } from "./hero";

export const pageBuilder = q.fragmentForType<"page">().project((sub) => ({
  _id: z.string(),
  _type: z.string(),
  pageBuilder: sub.field("pageBuilder[]").project((sub) => ({
    _key: z.string(),
    _type: z.string(),
    ...sub.conditionalByType({
      contentObject,
      heading,
      hero,
    }),
  })),
}));

export type PageBuilderFragment = InferFragmentType<typeof pageBuilder>;
