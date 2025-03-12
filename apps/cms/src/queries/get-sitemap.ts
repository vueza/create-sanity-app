import { defineQuery } from "groq";

export const getSitemap = defineQuery(`{
  "pages": *[_type == "page" && defined(slug.current) && slug.current != "/"] | order(date desc, _updatedAt desc) {
    "href": "/" + slug.current,
    _updatedAt,
  },
  "posts": *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    "href": "/post/" + slug.current,
    _updatedAt,
  },
  "authors": *[_type == "author" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    "href": "/author/" + slug.current,
    _updatedAt,
  },
  "categories": *[_type == "category" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    "href": "/category/" + slug.current,
    _updatedAt,
  },
}`);
