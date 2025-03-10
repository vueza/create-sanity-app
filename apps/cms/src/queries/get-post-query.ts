import { defineQuery } from "groq";
import { content } from "./content";
import { seo } from "./seo";

export const getPostQuery = defineQuery(`
  *[_type == 'post' && slug.current == $slug][0] {
    title,
    ${content}
    ${seo}
  }
`);
