/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "person";
  };
  seo: Seo;
};

export type Person = {
  _id: string;
  _type: "person";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName: string;
  lastName: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  seo: Seo;
};

export type Seo = {
  _type: "seo";
  title: string;
  description: string;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
};

export type SanityAssistInstructionTask = {
  _type: "sanity.assist.instructionTask";
  path?: string;
  instructionKey?: string;
  started?: string;
  updated?: string;
  info?: string;
};

export type SanityAssistTaskStatus = {
  _type: "sanity.assist.task.status";
  tasks?: Array<{
    _key: string;
  } & SanityAssistInstructionTask>;
};

export type SanityAssistSchemaTypeAnnotations = {
  _type: "sanity.assist.schemaType.annotations";
  title?: string;
  fields?: Array<{
    _key: string;
  } & SanityAssistSchemaTypeField>;
};

export type SanityAssistOutputType = {
  _type: "sanity.assist.output.type";
  type?: string;
};

export type SanityAssistOutputField = {
  _type: "sanity.assist.output.field";
  path?: string;
};

export type SanityAssistInstructionContext = {
  _type: "sanity.assist.instruction.context";
  reference: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "assist.instruction.context";
  };
};

export type AssistInstructionContext = {
  _id: string;
  _type: "assist.instruction.context";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  context?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityAssistInstructionUserInput = {
  _type: "sanity.assist.instruction.userInput";
  message: string;
  description?: string;
};

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  } | {
    _key: string;
  } & SanityAssistInstructionFieldRef | {
    _key: string;
  } & SanityAssistInstructionContext | {
    _key: string;
  } & SanityAssistInstructionUserInput>;
  style?: "normal";
  listItem?: never;
  markDefs?: null;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type SanityAssistInstructionFieldRef = {
  _type: "sanity.assist.instruction.fieldRef";
  path?: string;
};

export type SanityAssistInstruction = {
  _type: "sanity.assist.instruction";
  prompt?: SanityAssistInstructionPrompt;
  icon?: string;
  title?: string;
  userId?: string;
  createdById?: string;
  output?: Array<{
    _key: string;
  } & SanityAssistOutputField | {
    _key: string;
  } & SanityAssistOutputType>;
};

export type SanityAssistSchemaTypeField = {
  _type: "sanity.assist.schemaType.field";
  path?: string;
  instructions?: Array<{
    _key: string;
  } & SanityAssistInstruction>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Post | Person | Page | Seo | Slug | Settings | SanityAssistInstructionTask | SanityAssistTaskStatus | SanityAssistSchemaTypeAnnotations | SanityAssistOutputType | SanityAssistOutputField | SanityAssistInstructionContext | AssistInstructionContext | SanityAssistInstructionUserInput | SanityAssistInstructionPrompt | SanityAssistInstructionFieldRef | SanityAssistInstruction | SanityAssistSchemaTypeField;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/queries/get-page-query.ts
// Variable: getPageQuery
// Query: *[_type == 'page' && slug.current == $slug][0] {    title,  }
export type GetPageQueryResult = {
  title: string;
} | null;

// Source: ./src/queries/get-post-query.ts
// Variable: getPostQuery
// Query: *[_type == 'post' && slug.current == $slug][0] {    title,  }
export type GetPostQueryResult = {
  title: string;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == 'page' && slug.current == $slug][0] {\n    title,\n  }\n": GetPageQueryResult;
    "\n  *[_type == 'post' && slug.current == $slug][0] {\n    title,\n  }\n": GetPostQueryResult;
  }
}
