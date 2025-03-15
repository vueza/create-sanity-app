import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";
import { link } from "./link";

export const block = q.fragmentForType<"block">().project((sub) => ({
  "...": true,
  // @ts-expect-error -- TODO: create issue to fix this in groqd
  markDefs: sub.field("markDefs[]").project((sub) => ({
    _key: z.string(),
    _type: z.string(),
    ...sub.conditionalByType({
      link: {
        _key: z.string(),
        ...link,
      },
    }),
  })),
}));

export type BlockFragment = InferFragmentType<typeof block>;
