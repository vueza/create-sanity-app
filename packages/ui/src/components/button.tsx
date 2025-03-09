import type { ButtonHTMLAttributes } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "font-medium rounded-full active:opacity-80",
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

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariants {}

export const Button = ({ size, color, ...props }: ButtonProps) => {
  return <button {...props} className={button({ size, color })} />;
};
