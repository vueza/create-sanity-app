import { defineQuery } from "groq";

const query =
  '*[_type == "post" && defined(slug.current) && category->slug.current == $category]';

export const getPostsByCategorySlug = defineQuery(`{
  "posts": ${query} | order(_createdAt desc, _updatedAt desc) [$from...$to] {
    _id,
    title,
    "href": "/post/" + slug.current,
  },
  "total": count(${query}),
  "category": *[_type == "category" && slug.current == $category] | order(_createdAt desc, _updatedAt desc)[0] {
    title,
    "href": "/category/" + slug.current,
  }
}`);
