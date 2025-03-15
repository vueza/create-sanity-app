import { link } from "./link";

export const block = /* groq */ `{
  _type,
  _key,
  children,
  style,
  listItem,
  level,
  markDefs[] {
    _type == "link" => ${link}
  },
},`;
