import { image } from "./image";

export const seo = /* groq */ `"seo": {
  ...seo,
  "title": coalesce(seo.title, title),
  "description": coalesce(seo.description, description),
  "image": seo.image ${image}
  "index": seo.index == true,
  "follow": seo.follow == true
},`;
