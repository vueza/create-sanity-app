import { Content } from "@company/ui/components/content";
import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

const meta = {
  title: "Content",
  component: Content,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Suspense>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: [
      {
        style: "normal",
        _key: "41cbc4562df4",
        markDefs: [
          {
            page: {
              _ref: "adbeb876-7a15-42e7-b474-4d8d2e7d41a0",
              _type: "reference",
            },
            _key: "285d6d509dea",
            type: "href",
            _type: "link",
            href: "http://google.co.uk",
            children: null,
          },
        ],
        children: [
          {
            _type: "span",
            marks: ["285d6d509dea"],
            text: "Link",
            _key: "b1538a116028",
          },
        ],
        _type: "block",
      },
    ],
  },
};
