import { defineCliConfig } from "sanity/cli";
import { env } from "./src/env";

if (!env) {
  throw new Error("Invalid environment variables");
}

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_PROJECT_ID,
    dataset: env.SANITY_STUDIO_DATASET,
  },
  studioHost: env.SANITY_STUDIO_STUDIO_HOST,
  deployment: { autoUpdates: false },
});
