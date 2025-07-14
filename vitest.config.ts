import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["apps/*", "packages/*"],
    watch: false,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["apps/**/src/**/*", "packages/**/src/**/*"],
    },
  },
});
