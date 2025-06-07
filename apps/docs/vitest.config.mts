import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(dirname, ".storybook"),
    }),
  ],
  test: {
    env: {
      NEXT_PUBLIC_APP_ENV: "docs",
      NEXT_PUBLIC_SANITY_DATASET: "dataset",
      NEXT_PUBLIC_SANITY_PROJECT_ID: "projectId",
      NEXT_PUBLIC_SANITY_STUDIO_URL: "studioUrl",
      NEXT_PUBLIC_SANITY_API_VERSION: "apiVersion",
    },
    name: "@company/docs",
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
      provider: "playwright",
    },
    setupFiles: [".storybook/vitest.setup.ts"],
  },
  optimizeDeps: {
    // NOTE: https://github.com/storybookjs/storybook/issues/31085
    include: ["sb-original/default-loader", "sb-original/image-context"],
  },
});
