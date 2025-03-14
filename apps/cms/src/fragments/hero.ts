import { image } from "./image";
import { link } from "./link";

export const hero = /* groq */ `{
  title,
  description,
  link ${link}
  image ${image}
},`;
