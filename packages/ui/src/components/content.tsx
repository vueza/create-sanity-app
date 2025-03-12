import type { GetPostResult } from "@company/cms/types";
import {
  PortableText,
  type PortableTextProps,
  type PortableTextTypeComponentProps,
} from "@portabletext/react";
import { Container } from "./container";
import { Image } from "./image";
import { Link } from "./link";

interface ContentProps {
  value: PortableTextProps["value"];
}

type ImageWithAltBlock = Extract<
  NonNullable<GetPostResult>["content"][number],
  { _type: "imageWithAltRequired" }
>;

export const Content = ({ value }: ContentProps) => (
  <Container className="p-4">
    <PortableText
      components={{
        types: {
          imageWithAltRequired: ({
            value,
          }: PortableTextTypeComponentProps<ImageWithAltBlock>) => {
            return (
              <Image
                image={value}
                className="h-auto w-full object-cover"
                width={1280}
                height={720}
              />
            );
          },
        },
        marks: {
          link: ({ children, value: { href } }) => (
            <Link href={href} className="text-blue-500 hover:text-blue-700">
              {children}
            </Link>
          ),
        },
      }}
      value={value}
    />
  </Container>
);
