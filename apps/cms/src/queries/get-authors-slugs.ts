import { defineQuery } from "groq";

export const getAuthorsSlugs = defineQuery(`
  *[_type == "author" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
