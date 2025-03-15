import type { InferFragmentType } from "groqd";
import { q } from "../client/client";

export const link = q.fragmentForType<"link">().project((sub) => ({
  children: sub.coalesce(sub.field("children"), q.value("")),
  href: sub.coalesce(
    sub.select({
      "type == 'page'": sub.raw<string>('"/" + page->slug.current'),
      "type == 'post'": sub.raw<string>('"/post/" + post->slug.current'),
      "type == 'href'": sub.field("href"),
    }),
    q.value(""),
  ),
}));

export type LinkFragment = InferFragmentType<typeof link>;
