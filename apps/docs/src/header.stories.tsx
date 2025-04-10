import { Header } from "@company/ui/components/header";
import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Suspense>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Company",
  },
};
