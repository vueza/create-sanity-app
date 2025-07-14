import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
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
        route: "/post/:slug",
        filter: `_type == "post" && slug.current == $slug || _id == $slug`,
      },
      {
        route: "/category/:slug",
        filter: `_type == "category" && slug.current == $slug || _id == $slug`,
      },
      {
        route: "/author/:slug",
        filter: `_type == "author" && slug.current == $slug || _id == $slug`,
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
                href: `/post/${document.slug}`,
              },
            ],
          };
        },
      }),
      category: defineLocations({
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
                href: `/category/${document.slug}`,
              },
            ],
          };
        },
      }),
      author: defineLocations({
        select: {
          firstName: "firstName",
          lastName: "lastName",
          slug: "slug.current",
        },
        resolve: (document) => {
          if (!(document?.firstName && document?.lastName && document?.slug)) {
            return;
          }

          return {
            locations: [
              {
                title: `${document.firstName} ${document.lastName}`,
                href: `/author/${document.slug}`,
              },
            ],
          };
        },
      }),
    },
  },
};
