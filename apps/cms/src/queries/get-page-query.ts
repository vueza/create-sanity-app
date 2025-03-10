import { defineQuery } from "groq";
import { pageBuilder } from "./page-builder";
import { seo } from "./seo";

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    _id,
    _type,
    title,
    ${pageBuilder}
    ${seo}
  }
`);
