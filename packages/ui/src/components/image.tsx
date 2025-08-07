import { env } from "@company/cms/client/env";
import { imageBuilder } from "@company/cms/client/image-builder";
import type { GetPostResult } from "@company/cms/types";
import { getImageDimensions } from "@sanity/asset-utils";
import NextImage from "next/image";
import { stegaClean } from "next-sanity";
import {
  type ImageProps as BaseImageProps,
  Image as SanityImage,
} from "next-sanity/image";

interface ImageProps extends Omit<BaseImageProps, "src" | "alt"> {
  image: Extract<
    NonNullable<GetPostResult>["content"][number],
    { _type: "image" }
  >;
  alt?: string;
}

export const Image = ({ image, ...props }: ImageProps) => {
  if (!image?.asset?._ref) {
    return null;
  }

  const { width, height } = getImageDimensions(image.asset);

  const sharedProps: Partial<
    Pick<
      BaseImageProps,
      "alt" | "placeholder" | "blurDataURL" | "fill" | "width" | "height"
    >
  > &
    Pick<BaseImageProps, "alt"> = {
    alt: props.alt ?? stegaClean(image.altText),
    ...(image.lqip ? { placeholder: "blur", blurDataURL: image.lqip } : {}),
    ...(props.fill
      ? { fill: true }
      : {
          width: props.width ?? width,
          height: props.height ?? height,
        }),
  };

  if (env.NEXT_PUBLIC_APP_ENV === "docs") {
    return (
      <NextImage
        {...props}
        {...sharedProps}
        src={`/${image.asset._ref}.webp`}
      />
    );
  }

  return (
    <SanityImage
      {...props}
      {...sharedProps}
      src={imageBuilder
        .image(image)
        .dpr(2)
        .auto("format")
        .quality(Number(props.quality ?? 80))
        .size(Number(props.width ?? width), Number(props.height ?? height))
        // biome-ignore lint/suspicious/noFocusedTests: this is not a test.
        .fit("max")
        .format("webp")
        .url()}
    />
  );
};
