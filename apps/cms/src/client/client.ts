import { createGroqBuilder, makeSafeQueryRunner } from "groqd";
import { createClient } from "next-sanity";
import type * as SanityTypes from "../../sanity.types.ts";
import { env } from "./env";

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

export const runQuery = makeSafeQueryRunner((query) => client.fetch(query));

type SchemaConfig = {
  schemaTypes:
    | SanityTypes.AllSanitySchemaTypes
    | Extract<SanityTypes.Content[number], { _type: "block" }>
    | Extract<SanityTypes.Content[number], { _type: "image" }>;
  referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo;
};

export const q = createGroqBuilder<SchemaConfig>({});
