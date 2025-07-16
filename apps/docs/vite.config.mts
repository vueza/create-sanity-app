import { storybookNextJsPlugin } from "@storybook/nextjs-vite/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [storybookNextJsPlugin(), tailwindcss()],
});
