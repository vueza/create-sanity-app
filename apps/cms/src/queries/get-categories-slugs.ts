import { defineQuery } from "groq";

export const getCategoriesSlugs = defineQuery(`
  *[_type == "category" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
