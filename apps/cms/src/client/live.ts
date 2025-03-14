import { defineLive } from "next-sanity";
import { client } from "./client";
import { env } from "./env";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: env.SANITY_API_READ_TOKEN,
  browserToken: env.SANITY_API_READ_TOKEN,
});
