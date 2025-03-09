export const link = /* groq */ `{
  children,
  "href": coalesce(
    select(
      type == "page" => "/" + page->slug.current,
      type == "post" => "/posts/" + post->slug.current,
      href
    ),
    ""
  )
},`;
