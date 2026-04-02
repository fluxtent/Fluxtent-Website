import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#e8e1ff_0%,#d1e7ff_52%,#ffffff_100%)] text-slate-900 shadow-[0_16px_45px_rgba(123,136,206,0.26)] hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(123,136,206,0.34)] active:translate-y-0 active:shadow-[0_12px_35px_rgba(123,136,206,0.2)]",
  secondary:
    "border border-[rgba(142,157,211,0.28)] bg-white/62 text-[color:var(--color-foreground)] shadow-[0_14px_40px_rgba(133,149,203,0.16)] hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_18px_50px_rgba(133,149,203,0.22)] active:translate-y-0",
};

export function Button({
  children,
  className,
  href,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(112,127,212,0.6)]",
    variantClasses[variant],
    className
  );

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href} {...props}>
        <span>{children}</span>
        {icon ? <span aria-hidden="true">{icon}</span> : null}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      <span>{children}</span>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </a>
  );
}
