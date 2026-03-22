import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function GlassPanel({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "panel-highlight rounded-[2rem] border border-[color:var(--color-border)] shadow-[var(--shadow-soft)] transition-shadow duration-300",
        className
      )}
      {...props}
    />
  );
}
