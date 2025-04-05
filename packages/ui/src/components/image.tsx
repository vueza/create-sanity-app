import { env } from "@company/cms/client/env";
import { imageBuilder } from "@company/cms/client/image-builder";
import type { GetPostResult } from "@company/cms/types";
import { stegaClean } from "next-sanity";
import {
  type ImageProps as BaseImageProps,
  Image as SanityImage,
} from "next-sanity/image";
import NextImage from "next/image";

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
          width: props.width ?? image.width,
          height: props.height ?? image.height,
        }),
  };

  if (env.NEXT_PUBLIC_APP_ENV === "docs") {
    return (
      <NextImage {...props} {...sharedProps} src={`/${image.asset._ref}`} />
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
        .size(
          Number(props.width ?? image.width),
          Number(props.height ?? image.height),
        )
        .fit("max")
        .format("webp")
        .url()}
    />
  );
};
