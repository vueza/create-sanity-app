import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";

export const heading = q.fragmentForType<"heading">().project({
  _type: q.value("heading"),
  heading: z.string(),
});

export type HeadingFragment = InferFragmentType<typeof heading>;
