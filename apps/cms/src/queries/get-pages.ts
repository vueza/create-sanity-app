import { defineQuery } from "groq";

export const getPages = defineQuery(`
  *[_type == "page" && defined(slug.current)] |
  order(date desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
