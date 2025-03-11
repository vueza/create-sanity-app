import { defineQuery } from "groq";
import { pageBuilder } from "../fragments/page-builder";
import { seo } from "../fragments/seo";

export const getPage = defineQuery(`
  *[_type == 'page' && slug.current == $slug] |
  order(date desc, _updatedAt desc)[0] {
    _id,
    _type,
    title,
    pageBuilder[] ${pageBuilder}
    ${seo}
  }
`);
