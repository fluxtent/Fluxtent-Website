"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

export function Button({
  children,
  className,
  href,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";

  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out",
    isPrimary
      ? "btn-primary"
      : "border border-[var(--color-border-strong)] bg-[var(--color-surface)] backdrop-blur-sm text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-dark)] hover:shadow-[0_2px_16px_var(--color-accent-glow)] hover:scale-[1.03]",
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {inner}
    </a>
  );
}
