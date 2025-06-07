import { Link } from "@company/ui/components/link";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "/",
  },
};
