import { defineQuery } from "groq";

export const getPostsByAuthorSlug = defineQuery(`{
  "posts": *[_type == "post" && defined(slug.current) && author->slug.current == $author] | order(date desc, _updatedAt desc) {
    _id,
    title,
    "href": "/post/" + slug.current,
  },
  "author": *[_type == "author" && slug.current == $author] | order(date desc, _updatedAt desc)[0] {
    firstName,
    lastName,
  }
}`);
