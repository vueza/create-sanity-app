import { link } from "./link";

export const block = /* groq */ `{
  _type,
  _key,
  children,
  style,
  listItem,
  level,
  markDefs[] {
    _key,
    _type,
    _type == "link" => ${link}
  },
},`;
