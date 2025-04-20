import NextLink from "next/link";
import type { ComponentProps } from "react";

interface LinkProps extends ComponentProps<typeof NextLink> {
  href: string;
}

const isExternalLinkRegex = /^(https?:)?\/\//;

export const Link = (props: LinkProps) => {
  const isExternalLink = isExternalLinkRegex.test(props.href);

  return (
    <NextLink
      {...props}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
    />
  );
};
