import {
  type PresentationPluginOptions,
  defineDocuments,
  defineLocations,
} from "sanity/presentation";
import { env } from "./env";

export const presentation: PresentationPluginOptions = {
  previewUrl: {
    origin: env.SANITY_STUDIO_PREVIEW_URL,
    previewMode: {
      enable: "/api/draft-mode-enable",
    },
  },
  resolve: {
    mainDocuments: defineDocuments([
      {
        route: "/:slug",
        filter: `_type == "page" && slug.current == $slug || _id == $slug`,
      },
      {
        route: "/posts/:slug",
        filter: `_type == "post" && slug.current == $slug || _id == $slug`,
      },
    ]),
    locations: {
      settings: defineLocations({
        message: "This document is used on all pages",
        tone: "positive",
      }),
      page: defineLocations({
        select: {
          title: "title",
          slug: "slug.current",
        },
        resolve: (document) => {
          if (!(document?.title && document?.slug)) {
            return;
          }

          if (document.slug === "/") {
            return {
              locations: [
                {
                  title: document.title,
                  href: "/",
                },
              ],
            };
          }

          return {
            locations: [
              {
                title: document.title,
                href: `/${document.slug}`,
              },
            ],
          };
        },
      }),
      post: defineLocations({
        select: {
          title: "title",
          slug: "slug.current",
        },
        resolve: (document) => {
          if (!(document?.title && document?.slug)) {
            return;
          }

          return {
            locations: [
              {
                title: document.title,
                href: `/posts/${document.slug}`,
              },
            ],
          };
        },
      }),
    },
  },
};
