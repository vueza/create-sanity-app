import { defineQuery } from "groq";

export const getPagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)] |
  order(_createdAt desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
