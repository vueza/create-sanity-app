import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin"; /* editorconfig-checker-disable-line */
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    workspace: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: "chromium" }],
            provider: "playwright",
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
    watch: false,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
    },
  },
});
