import "@company/config-tailwind/app.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error",
    },
  },
};

export default preview;
