"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-white/70 backdrop-blur-2xl shadow-[var(--shadow-header)]"
          : "border-b border-transparent bg-white/50 backdrop-blur-xl",
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-6">
        <Link
          aria-label="Go to Fluxtent homepage"
          className="flex items-center transition-opacity hover:opacity-80"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Fluxtent"
            height={506}
            priority
            src="/fluxtent-logo.png"
            width={494}
            className="h-auto w-36"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200",
                isActiveLink(item.href)
                  ? "text-[var(--color-accent-dark)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
              )}
              href={item.href}
              title={item.description}
            >
              {item.label}
              {isActiveLink(item.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--color-accent)]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button className="min-h-10 px-4 py-2" href="/ecosystem" variant="secondary">
            Products
          </Button>
          <Button className="min-h-10 px-4 py-2" href="/contact">
            Contact
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/60 backdrop-blur-sm text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="relative h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                isOpen ? "translate-y-1.5 rotate-45" : "",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-300",
                isOpen ? "opacity-0" : "",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                isOpen ? "-translate-y-1.5 -rotate-45" : "",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-[var(--color-border)] bg-white/80 backdrop-blur-2xl transition-[max-height,opacity] duration-300 md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile" className="section-shell py-3">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-sm font-semibold transition-colors duration-200",
                  isActiveLink(item.href)
                    ? "bg-[rgba(125,136,242,0.08)] text-[var(--color-accent-dark)]"
                    : "text-[var(--color-muted)] hover:bg-[rgba(125,136,242,0.05)] hover:text-[var(--color-foreground)]",
                )}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
