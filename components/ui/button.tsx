import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center tracking-tighter gap-2 font-inter font-medium rounded-full transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#285ff5] text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(40,95,245,0.3)] hover:bg-[#1e4fea] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_6px_16px_rgba(40,95,245,0.4)] active:bg-[#1a3dd7]",
        primary:
          "bg-gradient-to-b from-[#5990ff] via-[#285ff5] to-[#1e4fea] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(40,95,245,0.3)] border border-[#285ff5]/50 hover:from-[#6a9dff] hover:via-[#3a6df7] hover:to-[#285ff5]",
        secondary:
          "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200",
        outline:
          "border-2 border-[#285ff5] bg-transparent text-[#285ff5] hover:bg-[#285ff5]/10",
        ghost: "text-gray-700 hover:bg-gray-100",
        dark:
          "bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3)] border border-gray-600/50 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
