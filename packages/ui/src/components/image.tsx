import { env } from "@company/cms/client/env";
import { imageBuilder } from "@company/cms/client/image-builder";
import type { ImageFragment } from "@company/cms/fragments/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { stegaClean } from "next-sanity";
import {
  type ImageProps as BaseImageProps,
  Image as SanityImage,
} from "next-sanity/image";
import NextImage from "next/image";

interface ImageProps extends Omit<BaseImageProps, "src" | "alt"> {
  image: ImageFragment;
  alt?: string;
}

export const Image = ({ image, ...props }: ImageProps) => {
  if (!image?.asset?._ref) {
    return null;
  }

  const { width, height } = getImageDimensions(image.asset);

  const sharedProps: Pick<
    BaseImageProps,
    "alt" | "placeholder" | "blurDataURL"
  > = {
    alt: props.alt ?? stegaClean(image.altText),
    // biome-ignore lint/style/useNamingConvention: next/image uses this name.
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
        .fit("max")
        .format("webp")
        .url()}
    />
  );
};
