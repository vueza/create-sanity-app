import { defineQuery } from "groq";

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    _id,
    _type,
    title,
  }
`);
