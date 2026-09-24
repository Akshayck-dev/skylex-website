import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-12 w-full border border-charcoal/20 bg-transparent px-4 py-3 text-[15px] text-charcoal placeholder:text-stone/70 transition-colors duration-300 hover:border-charcoal/40 focus:border-bronze focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
