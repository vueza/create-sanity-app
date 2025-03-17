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
}

export const Image = ({ image, ...props }: ImageProps) => {
  if (!image?.asset?._ref) {
    return null;
  }

  const sharedProps: Pick<
    BaseImageProps,
    "alt" | "placeholder" | "blurDataURL"
  > = {
    alt: stegaClean(image.altText),
    placeholder: image.lqip ? "blur" : undefined,
    // biome-ignore lint/style/useNamingConvention: next/image uses this name.
    blurDataURL: image.lqip ?? undefined,
  };

  if (env.NEXT_PUBLIC_APP_ENV === "docs") {
    return (
      <NextImage {...props} {...sharedProps} src={`/${image.asset._ref}`} />
    );
  }

  let src = imageBuilder.image(image).auto("format");
  if (props.width && props.height) {
    src = src.width(Number(props.width)).height(Number(props.height));
  }

  return <SanityImage {...props} {...sharedProps} src={src.url()} />;
};
