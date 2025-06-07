import { Archive } from "@company/ui/components/archive";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Archive",
  component: Archive,
  tags: ["autodocs"],
} satisfies Meta<typeof Archive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Posts",
    posts: [
      {
        _id: "57594b18-d14f-4c7c-9490-3e9e6cda95b9",
        title: "Hello World 5",
        href: "/post/hello-world-5",
      },
      {
        _id: "e99c48d6-bc4a-4e61-811e-125f1c3ff8b0",
        title: "Hello World 4",
        href: "/post/hello-world-4",
      },
      {
        _id: "2eda8645-4d4c-42f6-8625-5072b859817f",
        title: "Hello World 3",
        href: "/post/hello-world-3",
      },
      {
        _id: "a64aab41-5b27-49db-b063-1d92b73e5210",
        title: "Hello World 2",
        href: "/post/hello-world-2",
      },
      {
        _id: "40f21040-053a-4d71-b47c-ea03c4f07f14",
        title: "Hello World",
        href: "/post/hello-world",
      },
    ],
    href: "/posts",
    total: 1,
    page: 10,
  },
};
