import type { SchemaTypeDefinition } from "sanity";
import { page } from "./documents/page";
import { person } from "./documents/person";
import { post } from "./documents/post";
import { seo } from "./objects/seo";
import { settings } from "./singleton/settings";

const singletons: SchemaTypeDefinition[] = [settings];

const documents: SchemaTypeDefinition[] = [page, person, post];

const objects: SchemaTypeDefinition[] = [seo];

export const types: SchemaTypeDefinition[] = [
  ...singletons,
  ...documents,
  ...objects,
];
