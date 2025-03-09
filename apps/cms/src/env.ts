import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    SANITY_STUDIO_PROJECT_ID: z.string().min(1),
    SANITY_STUDIO_DATASET: z.string().min(1),
    SANITY_STUDIO_STUDIO_HOST: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  isServer: true,
});
