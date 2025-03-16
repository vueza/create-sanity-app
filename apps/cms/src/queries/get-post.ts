import { defineQuery } from "groq";
import { content } from "../fragments/content";
import { seo } from "../fragments/seo";

export const getPost = defineQuery(`
  *[_type == 'post' && slug.current == $slug] |
  order(_createdAt desc, _updatedAt desc)[0] {
    title,
    content[] ${content}
    ${seo}
  }
`);
