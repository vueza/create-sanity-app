import { defineQuery } from "groq";

export const getPagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)] |
  order(date desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
