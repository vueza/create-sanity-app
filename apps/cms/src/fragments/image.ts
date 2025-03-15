import type { InferFragmentType } from "groqd";
import { q } from "../client/client";

export const image = q.fragmentForType<"image">().project((sub) => ({
  _type: q.value("image"),
  asset: sub.field("asset"),
  hotspot: sub.field("hotspot"),
  crop: sub.field("crop"),
  altText: sub.coalesce(
    sub.field("asset").deref().field("altText"),
    sub.field("asset").deref().field("originalFilename"),
    q.value(""),
  ),
  lqip: sub.field("asset").deref().field("metadata.lqip"),
}));

export type ImageFragment = InferFragmentType<typeof image>;
