import { defineQuery } from "groq";

export const getPostQuery = defineQuery(`
  *[_type == 'post' && slug.current == $slug][0] {
    title,
  }
`);
