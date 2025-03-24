import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    workspace: ["apps/*", "packages/*"],
    watch: false,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["apps/**/src/**/*", "packages/**/src/**/*"],
    },
  },
});
