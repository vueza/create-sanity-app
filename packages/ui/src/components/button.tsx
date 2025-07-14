import type { ComponentPropsWithoutRef, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-full font-medium active:opacity-80",
  variants: {
    color: {
      primary: "bg-black text-white",
      secondary: "bg-white text-black",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
} & VariantProps<typeof button> &
  Omit<ComponentPropsWithoutRef<C>, "color">;

export const Button = <C extends ElementType = "button">({
  as,
  size,
  color,
  className,
  ...props
}: ButtonProps<C>) => {
  const Component = as ?? "button";

  return (
    <Component className={button({ size, color, className })} {...props} />
  );
};
