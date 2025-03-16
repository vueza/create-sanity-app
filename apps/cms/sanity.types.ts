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

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type PageBuilder = Array<{
  _key: string;
} & ContentObject | {
  _key: string;
} & Hero | {
  _key: string;
} & Heading>;

export type Hero = {
  _type: "hero";
  title: string;
  description: string;
  link: Link;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Link = {
  _type: "link";
  children?: string;
  type?: "href" | "page" | "post";
  href?: string;
  page?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
};

export type Heading = {
  _type: "heading";
  heading: string;
};

export type ContentObject = {
  _type: "contentObject";
  value: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      type: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
};

export type Content = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    type: "href" | "page" | "post";
    href?: string;
    page?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    };
    post?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "post";
    };
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  pageBuilder: PageBuilder;
  seo: Seo;
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
    [internalGroqTypeReferenceTo]?: "author";
  };
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  content: Content;
  seo: Seo;
};

export type Seo = {
  _type: "seo";
  title: string;
  description: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
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

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
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

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName: string;
  lastName: string;
  slug: Slug;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
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

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | PageBuilder | Hero | Link | Heading | ContentObject | Content | Page | Post | Seo | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Category | Author | Settings | MediaTag | Slug | SanityAssistInstructionTask | SanityAssistTaskStatus | SanityAssistSchemaTypeAnnotations | SanityAssistOutputType | SanityAssistOutputField | SanityAssistInstructionContext | AssistInstructionContext | SanityAssistInstructionUserInput | SanityAssistInstructionPrompt | SanityAssistInstructionFieldRef | SanityAssistInstruction | SanityAssistSchemaTypeField;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/queries/get-authors-slugs.ts
// Variable: getAuthorsSlugs
// Query: *[_type == "author" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {    "slug": slug.current  }
export type GetAuthorsSlugsResult = Array<{
  slug: string;
}>;

// Source: ./src/queries/get-categories-slugs.ts
// Variable: getCategoriesSlugs
// Query: *[_type == "category" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {    "slug": slug.current  }
export type GetCategoriesSlugsResult = Array<{
  slug: string;
}>;

// Source: ./src/queries/get-page.ts
// Variable: getPage
// Query: *[_type == 'page' && slug.current == $slug] |  order(_createdAt desc, _updatedAt desc)[0] {    _id,    _type,    title,    pageBuilder[] {  _type,  _key,  _type == "contentObject" => {  value[] {  _type == "block" => {  _type,  _key,  children,  style,  listItem,  level,  markDefs[] {    _type == "link" => {  children,  "href": coalesce(    select(      type == "page" => "/" + page->slug.current,      type == "post" => "/post/" + post->slug.current,      href    ),    ""  )},  },},  _type == "image" => {  _type,  asset,  hotspot,  crop,  "altText": coalesce(asset->altText, ""),  "lqip": asset->metadata.lqip,},},},  _type == "hero" => {  title,  description,  link {  children,  "href": coalesce(    select(      type == "page" => "/" + page->slug.current,      type == "post" => "/post/" + post->slug.current,      href    ),    ""  )},  image {  _type,  asset,  hotspot,  crop,  "altText": coalesce(asset->altText, ""),  "lqip": asset->metadata.lqip,},},  _type == "heading" => {  heading,},},    seo {  title,  description,},  }
export type GetPageResult = {
  _id: string;
  _type: "page";
  title: string;
  pageBuilder: Array<{
    _type: "contentObject";
    _key: string;
    value: Array<{
      _type: "block";
      _key: string;
      children: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }> | null;
      style: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal" | null;
      listItem: "bullet" | "number" | null;
      level: number | null;
      markDefs: Array<{
        children: null;
        href: string | "";
      }> | null;
    } | {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      } | null;
      hotspot: SanityImageHotspot | null;
      crop: SanityImageCrop | null;
      altText: string | "";
      lqip: string | null;
    }>;
  } | {
    _type: "heading";
    _key: string;
    heading: string;
  } | {
    _type: "hero";
    _key: string;
    title: string;
    description: string;
    link: {
      children: string | null;
      href: string | "";
    };
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot: SanityImageHotspot | null;
      crop: SanityImageCrop | null;
      altText: string | "";
      lqip: string | null;
    };
  }>;
  seo: {
    title: string;
    description: string;
  };
} | null;

// Source: ./src/queries/get-pages-slugs.ts
// Variable: getPagesSlugs
// Query: *[_type == "page" && defined(slug.current)] |  order(_createdAt desc, _updatedAt desc) {    "slug": slug.current  }
export type GetPagesSlugsResult = Array<{
  slug: string;
}>;

// Source: ./src/queries/get-post.ts
// Variable: getPost
// Query: *[_type == 'post' && slug.current == $slug] |  order(_createdAt desc, _updatedAt desc)[0] {    title,    content[] {  _type == "block" => {  _type,  _key,  children,  style,  listItem,  level,  markDefs[] {    _type == "link" => {  children,  "href": coalesce(    select(      type == "page" => "/" + page->slug.current,      type == "post" => "/post/" + post->slug.current,      href    ),    ""  )},  },},  _type == "image" => {  _type,  asset,  hotspot,  crop,  "altText": coalesce(asset->altText, ""),  "lqip": asset->metadata.lqip,},},    seo {  title,  description,},  }
export type GetPostResult = {
  title: string;
  content: Array<{
    _type: "block";
    _key: string;
    children: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }> | null;
    style: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal" | null;
    listItem: "bullet" | "number" | null;
    level: number | null;
    markDefs: Array<{
      children: null;
      href: string | "";
    }> | null;
  } | {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    altText: string | "";
    lqip: string | null;
  }>;
  seo: {
    title: string;
    description: string;
  };
} | null;

// Source: ./src/queries/get-posts-by-author.ts
// Variable: getPostsByAuthorSlug
// Query: {  "posts": *[_type == "post" && defined(slug.current) && author->slug.current == $author] | order(_createdAt desc, _updatedAt desc) [$from...$to] {    _id,    title,    "href": "/post/" + slug.current,  },  "total": count(*[_type == "post" && defined(slug.current) && author->slug.current == $author]),  "author": *[_type == "author" && slug.current == $author] | order(_createdAt desc, _updatedAt desc)[0] {    firstName,    lastName,    "href": "/author/" + slug.current,  }}
export type GetPostsByAuthorSlugResult = {
  posts: Array<{
    _id: string;
    title: string;
    href: string;
  }>;
  total: number;
  author: {
    firstName: string;
    lastName: string;
    href: string;
  } | null;
};

// Source: ./src/queries/get-posts-by-category.ts
// Variable: getPostsByCategorySlug
// Query: {  "posts": *[_type == "post" && defined(slug.current) && category->slug.current == $category] | order(_createdAt desc, _updatedAt desc) [$from...$to] {    _id,    title,    "href": "/post/" + slug.current,  },  "total": count(*[_type == "post" && defined(slug.current) && category->slug.current == $category]),  "category": *[_type == "category" && slug.current == $category] | order(_createdAt desc, _updatedAt desc)[0] {    title,    "href": "/category/" + slug.current,  }}
export type GetPostsByCategorySlugResult = {
  posts: Array<{
    _id: string;
    title: string;
    href: string;
  }>;
  total: number;
  category: {
    title: string;
    href: string;
  } | null;
};

// Source: ./src/queries/get-posts-slugs.ts
// Variable: getPostsSlugs
// Query: *[_type == "post" && defined(slug.current)] |  order(_createdAt desc, _updatedAt desc) {    "slug": slug.current  }
export type GetPostsSlugsResult = Array<{
  slug: string;
}>;

// Source: ./src/queries/get-posts.ts
// Variable: getPosts
// Query: {  "posts": *[_type == "post" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) [$from...$to] {    _id,    title,    "href": "/post/" + slug.current,  },  "total": count(*[_type == "post" && defined(slug.current)]),}
export type GetPostsResult = {
  posts: Array<{
    _id: string;
    title: string;
    href: string;
  }>;
  total: number;
};

// Source: ./src/queries/get-settings.ts
// Variable: getSettings
// Query: *[_type == "settings"][0] {    title,  }
export type GetSettingsResult = {
  title: string;
} | null;

// Source: ./src/queries/get-sitemap.ts
// Variable: getSitemap
// Query: {  "pages": *[_type == "page" && defined(slug.current) && slug.current != "/"] | order(_createdAt desc, _updatedAt desc) {    "href": "/" + slug.current,    _updatedAt,  },  "posts": *[_type == "post" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {    "href": "/post/" + slug.current,    _updatedAt,  },  "authors": *[_type == "author" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {    "href": "/author/" + slug.current,    _updatedAt,  },  "categories": *[_type == "category" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {    "href": "/category/" + slug.current,    _updatedAt,  },}
export type GetSitemapResult = {
  pages: Array<{
    href: string;
    _updatedAt: string;
  }>;
  posts: Array<{
    href: string;
    _updatedAt: string;
  }>;
  authors: Array<{
    href: string;
    _updatedAt: string;
  }>;
  categories: Array<{
    href: string;
    _updatedAt: string;
  }>;
};

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"author\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {\n    \"slug\": slug.current\n  }\n": GetAuthorsSlugsResult;
    "\n  *[_type == \"category\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {\n    \"slug\": slug.current\n  }\n": GetCategoriesSlugsResult;
    "\n  *[_type == 'page' && slug.current == $slug] |\n  order(_createdAt desc, _updatedAt desc)[0] {\n    _id,\n    _type,\n    title,\n    pageBuilder[] {\n  _type,\n  _key,\n  _type == \"contentObject\" => {\n  value[] {\n  _type == \"block\" => {\n  _type,\n  _key,\n  children,\n  style,\n  listItem,\n  level,\n  markDefs[] {\n    _type == \"link\" => {\n  children,\n  \"href\": coalesce(\n    select(\n      type == \"page\" => \"/\" + page->slug.current,\n      type == \"post\" => \"/post/\" + post->slug.current,\n      href\n    ),\n    \"\"\n  )\n},\n  },\n},\n  _type == \"image\" => {\n  _type,\n  asset,\n  hotspot,\n  crop,\n  \"altText\": coalesce(asset->altText, \"\"),\n  \"lqip\": asset->metadata.lqip,\n},\n},\n},\n  _type == \"hero\" => {\n  title,\n  description,\n  link {\n  children,\n  \"href\": coalesce(\n    select(\n      type == \"page\" => \"/\" + page->slug.current,\n      type == \"post\" => \"/post/\" + post->slug.current,\n      href\n    ),\n    \"\"\n  )\n},\n  image {\n  _type,\n  asset,\n  hotspot,\n  crop,\n  \"altText\": coalesce(asset->altText, \"\"),\n  \"lqip\": asset->metadata.lqip,\n},\n},\n  _type == \"heading\" => {\n  heading,\n},\n},\n    seo {\n  title,\n  description,\n},\n  }\n": GetPageResult;
    "\n  *[_type == \"page\" && defined(slug.current)] |\n  order(_createdAt desc, _updatedAt desc) {\n    \"slug\": slug.current\n  }\n": GetPagesSlugsResult;
    "\n  *[_type == 'post' && slug.current == $slug] |\n  order(_createdAt desc, _updatedAt desc)[0] {\n    title,\n    content[] {\n  _type == \"block\" => {\n  _type,\n  _key,\n  children,\n  style,\n  listItem,\n  level,\n  markDefs[] {\n    _type == \"link\" => {\n  children,\n  \"href\": coalesce(\n    select(\n      type == \"page\" => \"/\" + page->slug.current,\n      type == \"post\" => \"/post/\" + post->slug.current,\n      href\n    ),\n    \"\"\n  )\n},\n  },\n},\n  _type == \"image\" => {\n  _type,\n  asset,\n  hotspot,\n  crop,\n  \"altText\": coalesce(asset->altText, \"\"),\n  \"lqip\": asset->metadata.lqip,\n},\n},\n    seo {\n  title,\n  description,\n},\n  }\n": GetPostResult;
    "{\n  \"posts\": *[_type == \"post\" && defined(slug.current) && author->slug.current == $author] | order(_createdAt desc, _updatedAt desc) [$from...$to] {\n    _id,\n    title,\n    \"href\": \"/post/\" + slug.current,\n  },\n  \"total\": count(*[_type == \"post\" && defined(slug.current) && author->slug.current == $author]),\n  \"author\": *[_type == \"author\" && slug.current == $author] | order(_createdAt desc, _updatedAt desc)[0] {\n    firstName,\n    lastName,\n    \"href\": \"/author/\" + slug.current,\n  }\n}": GetPostsByAuthorSlugResult;
    "{\n  \"posts\": *[_type == \"post\" && defined(slug.current) && category->slug.current == $category] | order(_createdAt desc, _updatedAt desc) [$from...$to] {\n    _id,\n    title,\n    \"href\": \"/post/\" + slug.current,\n  },\n  \"total\": count(*[_type == \"post\" && defined(slug.current) && category->slug.current == $category]),\n  \"category\": *[_type == \"category\" && slug.current == $category] | order(_createdAt desc, _updatedAt desc)[0] {\n    title,\n    \"href\": \"/category/\" + slug.current,\n  }\n}": GetPostsByCategorySlugResult;
    "\n  *[_type == \"post\" && defined(slug.current)] |\n  order(_createdAt desc, _updatedAt desc) {\n    \"slug\": slug.current\n  }\n": GetPostsSlugsResult;
    "{\n  \"posts\": *[_type == \"post\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) [$from...$to] {\n    _id,\n    title,\n    \"href\": \"/post/\" + slug.current,\n  },\n  \"total\": count(*[_type == \"post\" && defined(slug.current)]),\n}": GetPostsResult;
    "\n  *[_type == \"settings\"][0] {\n    title,\n  }\n": GetSettingsResult;
    "{\n  \"pages\": *[_type == \"page\" && defined(slug.current) && slug.current != \"/\"] | order(_createdAt desc, _updatedAt desc) {\n    \"href\": \"/\" + slug.current,\n    _updatedAt,\n  },\n  \"posts\": *[_type == \"post\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {\n    \"href\": \"/post/\" + slug.current,\n    _updatedAt,\n  },\n  \"authors\": *[_type == \"author\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {\n    \"href\": \"/author/\" + slug.current,\n    _updatedAt,\n  },\n  \"categories\": *[_type == \"category\" && defined(slug.current)] | order(_createdAt desc, _updatedAt desc) {\n    \"href\": \"/category/\" + slug.current,\n    _updatedAt,\n  },\n}": GetSitemapResult;
  }
}
