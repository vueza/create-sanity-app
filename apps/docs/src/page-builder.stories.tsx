import { PageBuilder } from "@company/ui/components/page-builder";
import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";

const meta = {
  title: "PageBuilder",
  component: PageBuilder,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Suspense>
        <Story />
      </Suspense>
    ),
  ],
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
        _type: "seo",
        title: "Title",
        description: "Description",
        image: {
          _type: "image",
          asset: {
            _ref: "image-59d1a5aa6e2756bd2d8a6f79711bd76530a6f2dd-704x704-png",
            _type: "reference",
          },
          hotspot: null,
          crop: null,
          altText: "Alt Text",
          lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nO1Sy4qEMBCc//8RNVE8CB704BtFvYnPGEHB7+ilG6LjzmEYmMMwu4dKJelKJZ3um5QS3oV1XeH2bwjfa7gsy2k4zzOM4wh938MwDBeepuk4dK9R6O80hyEKy7KEMAwJQRBAFEXEeZ5D0zSEoihoT+niOCbGs2hKhvg6vAUDnHPQdf2AYRhg2za4rgue5xEzxi5xxhjF2rY9X6gMTdMkUxRqmkZsWRbto7HjOA8azjn4vg9d111TrqqKUkiS5GBMO8syShuBc4ylaUqsUNc1CCEei4KfjIzAP1FzFCPU+jeEENcqv9oeT9tGfmJjy79nuKii4PAObNsG+77DD/0Kf83aKC4vAAAAAElFTkSuQmCC",
        },
        index: true,
        follow: true,
      },
    },
  },
};
