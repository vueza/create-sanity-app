import { getSitemap } from "@company/cms/queries/get-sitemap";
import type { MetadataRoute } from "next";
import { sanityFetch } from "../sanity/live";

const baseUrl = "https://example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await sanityFetch({
    query: getSitemap,
    stega: false,
  });

  if (!data) {
    return [];
  }

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },

    ...(data.pages.map(({ href, _updatedAt }) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(_updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })) as MetadataRoute.Sitemap),

    ...(data.posts.map(({ href, _updatedAt }) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(_updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })) as MetadataRoute.Sitemap),

    ...(data.authors.map(({ href, _updatedAt }) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(_updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })) as MetadataRoute.Sitemap),

    ...(data.categories.map(({ href, _updatedAt }) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(_updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })) as MetadataRoute.Sitemap),
  ];
}
