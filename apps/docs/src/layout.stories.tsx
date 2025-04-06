import { Layout } from "@company/ui/components/layout";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout",
  component: Layout,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex min-h-screen flex-col">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Layout",
    title: "Company",
  },
};
