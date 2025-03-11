import type {
  DocumentPluginOptions,
  ResolveProductionUrlContext,
  SanityDocumentLike,
} from "sanity";
import { env } from "./env";

type Context = ResolveProductionUrlContext & {
  document: SanityDocumentLike & {
    slug?: {
      current?: string;
    };
  };
};

export const document: DocumentPluginOptions = {
  // biome-ignore lint/suspicious/useAwait: Sanity types use await
  productionUrl: async (prev, { document }: Context) => {
    if (!document.slug?.current) {
      return prev;
    }

    if (document._type === "page" && document.slug.current === "/") {
      return `${env.SANITY_STUDIO_PREVIEW_URL}`;
    }

    if (document._type === "page") {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/${document.slug.current}`;
    }

    if (document._type === "post") {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/post/${document.slug.current}`;
    }

    if (document._type === "category") {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/category/${document.slug.current}`;
    }

    if (document._type === "author") {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/author/${document.slug.current}`;
    }

    return prev;
  },
};
