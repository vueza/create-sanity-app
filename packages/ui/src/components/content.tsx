import { PortableText, type PortableTextProps } from "@portabletext/react";
import { Link } from "./link";

interface ContentProps {
  value: PortableTextProps["value"];
}

export const Content = ({ value }: ContentProps) => (
  <PortableText
    components={{
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
);
