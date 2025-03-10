import type { SchemaTypeDefinition } from "sanity";
import { page } from "./documents/page";
import { person } from "./documents/person";
import { post } from "./documents/post";
import { content } from "./objects/content";
import { heading } from "./objects/heading";
import { hero } from "./objects/hero";
import { imageWithAlt } from "./objects/image-with-alt";
import { imageWithAltRequired } from "./objects/image-with-alt-required";
import { link } from "./objects/link";
import { linkRequired } from "./objects/link-required";
import { pageBuilder } from "./objects/page-builder";
import { seo } from "./objects/seo";
import { settings } from "./singleton/settings";

const singletons: SchemaTypeDefinition[] = [settings];

const documents: SchemaTypeDefinition[] = [page, person, post];

const objects: SchemaTypeDefinition[] = [
  content,
  heading,
  hero,
  imageWithAlt,
  imageWithAltRequired,
  link,
  linkRequired,
  pageBuilder,
  seo,
];

export const types: SchemaTypeDefinition[] = [
  ...singletons,
  ...documents,
  ...objects,
];
