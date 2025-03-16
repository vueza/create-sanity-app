import { defineQuery } from "groq";

export const getPosts = defineQuery(`{
  "posts": *[_type == "post" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) [$from...$to] {
    _id,
    title,
    "href": "/post/" + slug.current,
  },
  "total": count(*[_type == "post" && defined(slug.current)]),
}`);
