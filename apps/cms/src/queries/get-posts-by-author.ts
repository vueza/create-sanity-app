import { defineQuery } from "groq";

const query =
  '*[_type == "post" && defined(slug.current) && author->slug.current == $author]';

export const getPostsByAuthorSlug = defineQuery(`{
  "posts": ${query} | order(_createdAt desc, _updatedAt desc) [$from...$to] {
    _id,
    title,
    "href": "/post/" + slug.current,
  },
  "total": count(${query}),
  "author": *[_type == "author" && slug.current == $author] | order(_createdAt desc, _updatedAt desc)[0] {
    firstName,
    lastName,
    "href": "/author/" + slug.current,
  }
}`);
