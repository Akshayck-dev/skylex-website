import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[140px] w-full rounded-xl border border-charcoal/20 bg-transparent px-4 py-3 text-[15px] text-charcoal placeholder:text-stone/70 transition-colors duration-300 hover:border-charcoal/40 focus:border-clay focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
