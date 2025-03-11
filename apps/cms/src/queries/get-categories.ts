import { defineQuery } from "groq";

export const getCategories = defineQuery(`
  *[_type == "category" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    "slug": slug.current
  }
`);
