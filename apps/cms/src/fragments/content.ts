import type { InferFragmentType } from "groqd";
import { q } from "../client/client";
import { block } from "./block";
import { image } from "./image";

export const content = q.fragmentForType<"post">().project((sub) => ({
  content: sub.field("content[]").project((sub) => ({
    "...": true,
    ...sub.conditionalByType({
      image,
      block,
    }),
  })),
}));

export type ContentFragment = InferFragmentType<typeof content>;
