import { defineQuery } from "groq";
import { content } from "./content";

export const getPostQuery = defineQuery(`
  *[_type == 'post' && slug.current == $slug][0] {
    title,
    ${content}
  }
`);
