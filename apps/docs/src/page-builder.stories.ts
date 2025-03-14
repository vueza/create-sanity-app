import { PageBuilder } from "@company/ui/components/page-builder";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "PageBuilder",
  component: PageBuilder,
  tags: ["autodocs"],
} satisfies Meta<typeof PageBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: {
      _id: "adbeb876-7a15-42e7-b474-4d8d2e7d41a0",
      _type: "page",
      title: "Title",
      pageBuilder: [
        {
          _type: "heading",
          _key: "84f59b4da2fe",
          heading: "Heading",
        },
      ],
      seo: {
        title: "Title",
        description: "Description",
      },
    },
  },
};
