import { Image } from "@company/ui/components/image";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      asset: {
        _ref: "placeholder-350x350.webp",
        _type: "reference",
      },
      _type: "imageWithAlt",
      alt: "Alt text",
    },
    width: 350,
    height: 350,
  },
};
