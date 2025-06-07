import "@company/config-tailwind/app.css";
import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error",
    },
    docs: {
      codePanel: true,
    },
  },
};

export default preview;
