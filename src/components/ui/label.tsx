import * as React from "react";
import { cn } from "../../lib/utils";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "mb-2 block text-[11px] font-medium uppercase tracking-[0.22em] text-stone",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
