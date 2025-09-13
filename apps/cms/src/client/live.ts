import { defineLive } from "next-sanity/live";
import { client } from "./client";
import { env } from "./env";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: env.SANITY_API_READ_TOKEN,
  browserToken: env.SANITY_API_READ_TOKEN,
});
