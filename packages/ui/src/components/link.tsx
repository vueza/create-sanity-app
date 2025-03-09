import NextLink from "next/link";
import type { ComponentProps } from "react";

interface LinkProps extends ComponentProps<typeof NextLink> {}

export const Link = (props: LinkProps) => <NextLink {...props} />;
