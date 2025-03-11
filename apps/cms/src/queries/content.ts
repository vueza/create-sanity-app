import { link } from "./link";

export const content = /* groq */ `{
  ...,
  markDefs[] {
    ...,
    _type == "link" => ${link}
  }
},`;
