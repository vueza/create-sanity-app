import { PortableText, type PortableTextProps } from "@portabletext/react";
import { Container } from "./container";
import { Image } from "./image";
import { Link } from "./link";

interface ContentProps {
  value: PortableTextProps["value"];
}

export const Content = ({ value }: ContentProps) => (
  <Container className="prose p-4">
    <PortableText
      components={{
        types: {
          image: ({ value }) => (
            <Image
              image={value}
              className="h-auto w-full object-cover"
              width={1280}
              height={720}
            />
          ),
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
