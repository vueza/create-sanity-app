import { Container } from "@company/ui/components/container";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Container",
  },
};
