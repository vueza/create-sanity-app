import { contentObject } from "./content-object";
import { heading } from "./heading";
import { hero } from "./hero";

export const pageBuilder = /* groq */ `{
  _type,
  _key,
  _type == "contentObject" => ${contentObject}
  _type == "hero" => ${hero}
  _type == "heading" => ${heading}
},`;
