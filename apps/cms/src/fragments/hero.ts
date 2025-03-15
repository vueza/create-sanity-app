import type { InferFragmentType } from "groqd";
import { z } from "zod";
import { q } from "../client/client";
import { image } from "./image";
import { link } from "./link";

export const hero = q.fragmentForType<"hero">().project((sub) => ({
  _type: q.value("hero"),
  title: z.string(),
  description: z.string(),
  link: sub.field("link").project(link),
  image: sub.field("image").project(image),
}));

export type HeroFragment = InferFragmentType<typeof hero>;
