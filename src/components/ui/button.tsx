import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-cream hover:bg-clay hover:text-cream",
        outline:
          "border border-charcoal/25 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream",
        outlineLight:
          "border border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-charcoal",
        ghost: "text-charcoal hover:text-clay",
        clay: "bg-clay text-cream hover:bg-charcoal",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
