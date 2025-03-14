import { BlockRenderer } from "@company/ui/components/block-renderer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "BlockRenderer",
  component: BlockRenderer,
  tags: ["autodocs"],
} satisfies Meta<typeof BlockRenderer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    block: {
      _type: "heading",
      _key: "84f59b4da2fe",
      heading: "Heading",
    },
    id: "adbeb876-7a15-42e7-b474-4d8d2e7d41a0",
    type: "page",
  },
};
