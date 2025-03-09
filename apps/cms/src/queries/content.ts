import { link } from "./link";

export const content = /* groq */ `content[] {
  ...,
  markDefs[] {
    ...,
    _type == "link" => ${link}
  }
},`;
