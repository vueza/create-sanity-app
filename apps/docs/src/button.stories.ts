import { Button } from "@company/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};
