import type { SchemaTypeDefinition } from "sanity";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { page } from "./documents/page";
import { post } from "./documents/post";
import { redirect } from "./documents/redirect";
import { content } from "./objects/content";
import { contentObject } from "./objects/content-object";
import { heading } from "./objects/heading";
import { hero } from "./objects/hero";
import { link } from "./objects/link";
import { pageBuilder } from "./objects/page-builder";
import { seo } from "./objects/seo";
import { settings } from "./singleton/settings";

const singletons: SchemaTypeDefinition[] = [settings];

const documents: SchemaTypeDefinition[] = [author, category, page, post];

const objects: SchemaTypeDefinition[] = [
  content,
  contentObject,
  heading,
  hero,
  link,
  pageBuilder,
  redirect,
  seo,
];

export const types: SchemaTypeDefinition[] = [
  ...singletons,
  ...documents,
  ...objects,
];
