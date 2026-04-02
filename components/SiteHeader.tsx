"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const headerLogoImageWidth = 164;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActiveLink = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-3">
        <div
          className={cn(
            "flex items-center justify-between rounded-[2.2rem] border px-6 py-[0.75rem] transition-all duration-500 sm:px-7",
            isScrolled
              ? "border-[rgba(142,157,211,0.18)] bg-white/92 shadow-[0_12px_36px_rgba(116,130,185,0.1)] backdrop-blur-2xl"
              : "border-[rgba(142,157,211,0.14)] bg-white/84 shadow-[0_10px_30px_rgba(116,130,185,0.08)] backdrop-blur-xl"
          )}
        >
          <Link
            aria-label="Go to Fluxtent homepage"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            href="/"
          >
            <div className="relative flex h-[2.08rem] w-[8.35rem] items-center justify-center overflow-hidden sm:w-[8.45rem]">
              <Image
                alt="Fluxtent"
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                height={506}
                priority
                src="/fluxtent-logo.png"
                sizes={`${headerLogoImageWidth}px`}
                width={494}
                style={{ width: headerLogoImageWidth, height: "auto" }}
              />
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center md:flex">
            <div className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-3.75 py-2.5 text-[13.5px] font-semibold transition-all duration-300",
                    isActiveLink(item.href)
                      ? "bg-[rgba(244,246,255,0.98)] text-[#44507c] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] after:absolute after:bottom-[0.45rem] after:left-1/2 after:h-[2px] after:w-[66%] after:-translate-x-1/2 after:rounded-full after:bg-[#a8b6ff]"
                      : "text-[rgba(42,49,84,0.72)] hover:bg-white/62 hover:text-[rgba(42,49,84,0.92)]"
                  )}
                  href={item.href}
                  title={item.description}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="flex size-10 items-center justify-center rounded-xl border border-[rgba(142,157,211,0.2)] bg-white/70 text-[color:var(--color-foreground)] transition hover:bg-white md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <span className="relative h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[0.42rem] h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  isOpen ? "scale-x-0 opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                )}
              />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-400 md:hidden",
            isOpen ? "mt-2 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
          )}
          id="mobile-navigation"
        >
          <nav
            aria-label="Mobile"
            className="rounded-2xl border border-[rgba(142,157,211,0.2)] bg-white/90 p-2 shadow-[0_12px_40px_rgba(116,130,185,0.12)] backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                  isActiveLink(item.href)
                    ? "bg-[rgba(125,136,242,0.06)] text-[color:var(--color-foreground)]"
                    : "text-[rgba(42,49,84,0.7)] hover:bg-white"
                )}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
