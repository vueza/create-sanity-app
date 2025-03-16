import { defineQuery } from "groq";

export const getPostsSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)] |
  order(_createdAt desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
