import {
  type SanityImageCrop,
  type SanityImageHotspot,
  internalGroqTypeReferenceTo,
} from "@company/cms/types";
import createImageUrlBuilder from "@sanity/image-url";
import { stegaClean } from "next-sanity";
import {
  type ImageProps as BaseImageProps,
  Image as SanityImage,
} from "next-sanity/image";
import NextImage from "next/image";

interface ImageProps extends Omit<BaseImageProps, "src" | "alt"> {
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    altText: string;
    lqip: string | null;
  };
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

  if (
    !(
      process.env.NEXT_PUBLIC_SANITY_DATASET &&
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    )
  ) {
    return (
      <NextImage {...props} {...sharedProps} src={`/${image.asset._ref}`} />
    );
  }

  const imageBuilder = createImageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  });

  let src = imageBuilder.image(image).auto("format");
  if (props.width && props.height) {
    src = src.width(Number(props.width)).height(Number(props.height));
  }

  return <SanityImage {...props} {...sharedProps} src={src.url()} />;
};
