import { defineQuery } from "groq";

export const getPostsByCategorySlug = defineQuery(`{
  "posts": *[_type == "post" && defined(slug.current) && category->slug.current == $category] | order(date desc, _updatedAt desc) {
    _id,
    title,
    "href": "/post/" + slug.current,
  },
  "category": *[_type == "category" && slug.current == $category] | order(date desc, _updatedAt desc)[0] {
    title,
  }
}`);
