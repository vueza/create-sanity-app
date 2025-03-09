import { createClient } from "next-sanity";
import { env } from "../env";

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  perspective: "published",
  token: env.SANITY_API_READ_TOKEN,
  stega: {
    studioUrl: env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});
