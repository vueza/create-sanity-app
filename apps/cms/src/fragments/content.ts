import { image } from "./image";
import { link } from "./link";

export const content = /* groq */ `{
  ...,
  _type == "image" => ${image}
  markDefs[] {
    ...,
    _type == "link" => ${link}
  },
},`;
