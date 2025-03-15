import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";
import { block } from "./block";
import { image } from "./image";

export const contentObject = q
  .fragmentForType<"contentObject">()
  .project((sub) => ({
    _type: q.value("contentObject"),
    value: sub.field("value[]").project((sub) => ({
      _key: z.string(),
      _type: z.string(),
      ...sub.conditionalByType({
        image,
        block,
      }),
    })),
  }));

export type ContentObjectFragment = InferFragmentType<typeof contentObject>;
