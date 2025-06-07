import { Pagination } from "@company/ui/components/pagination";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    href: "/posts",
    page: 1,
    total: 10,
  },
};

export const Middle: Story = {
  args: {
    href: "/posts",
    page: 5,
    total: 10,
  },
};

export const Last: Story = {
  args: {
    href: "/posts",
    page: 10,
    total: 10,
  },
};
