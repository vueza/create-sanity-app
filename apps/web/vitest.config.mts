import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    passWithNoTests: true,
    watch: false,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
    },
  },
});
