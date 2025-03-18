export const link = /* groq */ `{
  children,
  "href": coalesce(
    select(
      type == "page" && page->slug.current == "/" => "/",
      type == "page" => "/" + page->slug.current,
      type == "post" => "/post/" + post->slug.current,
      href
    ),
    ""
  )
},`;
