import { Footer } from "@company/ui/components/footer";
import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

const meta = {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Suspense>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
