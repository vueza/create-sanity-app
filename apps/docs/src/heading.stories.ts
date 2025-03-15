import { Heading } from "@company/ui/components/heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    _type: "heading",
    heading: "Heading",
  },
};
