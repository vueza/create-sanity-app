import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    env: {
      NEXT_PUBLIC_APP_ENV: "docs",
      NEXT_PUBLIC_SANITY_DATASET: "dataset",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "projectId",
      NEXT_PUBLIC_SANITY_STUDIO_URL: "studioUrl",
      NEXT_PUBLIC_SANITY_API_VERSION: "apiVersion",
    },
    passWithNoTests: true,
  },
});
