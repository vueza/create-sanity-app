import type { ButtonHTMLAttributes } from "react";
import { type VariantProps, tv } from "tailwind-variants";

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

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {}

export const Button = ({ size, color, className, ...props }: ButtonProps) => (
  <button {...props} className={button({ size, color, className })} />
);
