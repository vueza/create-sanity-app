import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";

export const seo = q.fragmentForType<"seo">().project({
  title: z.string(),
  description: z.string(),
});

export type SeoFragment = InferFragmentType<typeof seo>;
