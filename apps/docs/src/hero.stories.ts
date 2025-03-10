import { Hero } from "@company/ui/components/hero";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Hero",
    description: "This is a hero component.",
    link: {
      href: "/",
      children: "Learn more",
    },
  },
};
