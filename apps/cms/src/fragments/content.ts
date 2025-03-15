import { block } from "./block";
import { image } from "./image";

export const content = /* groq */ `{
  _type == "block" => ${block}
  _type == "image" => ${image}
},`;
