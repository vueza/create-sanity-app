import { defineQuery } from "groq";

export const getPosts = defineQuery(`
  *[_type == "post" && defined(slug.current)] |
  order(date desc, _updatedAt desc) {
    _id,
    title,
    "href": "/post/" + slug.current,
  }
`);
