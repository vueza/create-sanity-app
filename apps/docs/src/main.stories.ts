import { Main } from "@company/ui/components/main";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Main",
  component: Main,
  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Main",
  },
};
