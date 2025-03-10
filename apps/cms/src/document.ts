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
    if (document._type === "page" && document.slug?.current) {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/${document.slug.current}`;
    }

    if (document._type === "post" && document.slug?.current) {
      return `${env.SANITY_STUDIO_PREVIEW_URL}/posts/${document.slug.current}`;
    }

    return prev;
  },
};
