import { heading } from "./heading";
import { hero } from "./hero";

export const pageBuilder = /* groq */ `pageBuilder[] {
  _type,
  _key,
  _type == "hero" => ${hero}
  _type == "heading" => ${heading}
},`;
