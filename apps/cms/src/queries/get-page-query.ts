import { defineQuery } from "groq";
import { pageBuilder } from "./page-builder";

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    _id,
    _type,
    title,
    ${pageBuilder}
  }
`);
