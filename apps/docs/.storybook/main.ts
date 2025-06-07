import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-a11y"),
    // getAbsolutePath("@storybook/addon-queryparams"),
    getAbsolutePath("@chromatic-com/storybook"),
    // getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  },
  staticDirs: ["../public"],
  features: {
    // biome-ignore lint/style/useNamingConvention: key is set by Storybook
    experimentalRSC: true,
  },
};

export default config;
