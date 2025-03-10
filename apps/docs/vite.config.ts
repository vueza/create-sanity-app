import { storybookNextJsPlugin } from "@storybook/experimental-nextjs-vite/vite-plugin"; /* editorconfig-checker-disable-line */
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [storybookNextJsPlugin(), tailwindcss()],
  optimizeDeps: {
    include: ["sb-original/default-loader", "sb-original/image-context"],
  },
});
