import type { InferFragmentType } from "groqd";
import { q } from "../client/client";
import { image } from "./image";

export const seo = q.fragmentForType<"seo">().project((sub) => ({
  title: q
    // @ts-expect-error --
    .coalesce(sub.field("title"), sub.field("^.title"), q.value(""))
    .as<string>(),
  description: q
    // @ts-expect-error --
    .coalesce(sub.field("description"), sub.field("^.description"), q.value(""))
    .as<string>(),
  image: sub.field("image").project(image),
  index: q.coalesce(sub.field("index"), q.value(true)),
  follow: q.coalesce(sub.field("follow"), q.value(true)),
}));

export type SeoFragment = InferFragmentType<typeof seo>;
