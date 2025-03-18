import { Image } from "@company/ui/components/image";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      _type: "image",
      asset: {
        _ref: "placeholder-350x350.webp",
        _type: "reference",
      },
      altText: "Alt text",
      lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVR4nO1Sy4qEMBCc//8RNVE8CB704BtFvYnPGEHB7+ilG6LjzmEYmMMwu4dKJelKJZ3um5QS3oV1XeH2bwjfa7gsy2k4zzOM4wh938MwDBeepuk4dK9R6O80hyEKy7KEMAwJQRBAFEXEeZ5D0zSEoihoT+niOCbGs2hKhvg6vAUDnHPQdf2AYRhg2za4rgue5xEzxi5xxhjF2rY9X6gMTdMkUxRqmkZsWRbto7HjOA8azjn4vg9d111TrqqKUkiS5GBMO8syShuBc4ylaUqsUNc1CCEei4KfjIzAP1FzFCPU+jeEENcqv9oeT9tGfmJjy79nuKii4PAObNsG+77DD/0Kf83aKC4vAAAAAElFTkSuQmCC",
      hotspot: null,
      crop: null,
      width: 350,
      height: 350,
    },
    width: 350,
    height: 350,
    priority: true,
  },
};
