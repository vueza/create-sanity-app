import type { SchemaTypeDefinition } from "sanity";
import { page } from "./documents/page";
import { person } from "./documents/person";
import { post } from "./documents/post";
import { content } from "./objects/content";
import { link } from "./objects/link";
import { linkRequired } from "./objects/link-required";
import { seo } from "./objects/seo";
import { settings } from "./singleton/settings";

const singletons: SchemaTypeDefinition[] = [settings];

const documents: SchemaTypeDefinition[] = [page, person, post];

const objects: SchemaTypeDefinition[] = [content, link, linkRequired, seo];

export const types: SchemaTypeDefinition[] = [
  ...singletons,
  ...documents,
  ...objects,
];
