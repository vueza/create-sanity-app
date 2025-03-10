import { defineQuery } from "groq";
import { content } from "./content";
import { seo } from "./seo";

export const getPost = defineQuery(`
  *[_type == 'post' && slug.current == $slug] |
  order(date desc, _updatedAt desc)[0] {
    title,
    ${content}
    ${seo}
  }
`);
