import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "flex h-12 w-full appearance-none rounded-xl border border-charcoal/20 bg-transparent px-4 py-3 pr-10 text-[15px] text-charcoal transition-colors duration-300 hover:border-charcoal/40 focus:border-clay focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown
      className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-stone"
      aria-hidden="true"
    />
  </div>
));
Select.displayName = "Select";

export { Select };
