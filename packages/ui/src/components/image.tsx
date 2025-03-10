import type { ImageWithAlt, ImageWithAltRequired } from "@company/cms/types";
import createImageUrlBuilder from "@sanity/image-url";
import {
  type ImageProps as BaseImageProps,
  Image as SanityImage,
} from "next-sanity/image";
import NextImage from "next/image";

interface ImageProps extends Omit<BaseImageProps, "src" | "alt"> {
  image?: ImageWithAlt | ImageWithAltRequired | null;
}

export const Image = ({ image, ...props }: ImageProps) => {
  if (!(image?.asset?._ref && image.alt)) {
    return null;
  }

  if (
    !(
      process.env.NEXT_PUBLIC_SANITY_DATASET &&
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    )
  ) {
    return (
      <NextImage {...props} src={`/${image.asset._ref}`} alt={image.alt} />
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

  return <SanityImage {...props} alt={image.alt} src={src.url()} />;
};
