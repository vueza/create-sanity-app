import { defineQuery } from "groq";

export const getPostsSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)] |
  order(date desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
