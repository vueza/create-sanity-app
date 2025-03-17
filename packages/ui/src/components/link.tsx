import NextLink from "next/link";
import type { ComponentProps } from "react";

interface LinkProps extends ComponentProps<typeof NextLink> {
  href: string;
}

export const Link = (props: LinkProps) => (
  <NextLink
    {...props}
    rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
  />
);
