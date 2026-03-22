"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  navItems: NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-400 sm:px-5",
            isScrolled
              ? "border-[rgba(142,157,211,0.24)] bg-white/82 shadow-[0_18px_55px_rgba(116,130,185,0.14)] backdrop-blur-xl"
              : "border-transparent bg-white/42 shadow-none backdrop-blur-md"
          )}
        >
          <a
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            href="#top"
            aria-label="Go to Fluxtent homepage"
          >
            <div className="relative flex h-8 w-[138px] items-center justify-center overflow-hidden sm:h-9 sm:w-[154px]">
              <Image
                alt="Fluxtent"
                className="absolute w-[138px] max-w-none object-contain sm:w-[154px]"
                height={154}
                priority
                src="/fluxtent-logo.png"
                width={154}
              />
            </div>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(112,127,212,0.6)]",
                  activeSection === item.href
                    ? "bg-[rgba(125,136,242,0.08)] text-[color:var(--color-foreground)]"
                    : "text-[rgba(42,49,84,0.68)] hover:text-[rgba(42,49,84,1)] hover:bg-[rgba(125,136,242,0.05)]"
                )}
                href={item.href}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(125,136,242,0.6),rgba(157,189,255,0.6))]" />
                )}
              </a>
            ))}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="flex size-11 items-center justify-center rounded-full border border-[rgba(142,157,211,0.24)] bg-white/70 text-[color:var(--color-foreground)] transition hover:bg-white md:hidden"
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
                  isOpen ? "opacity-0 scale-x-0" : ""
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
            isOpen
              ? "mt-3 max-h-96 opacity-100"
              : "mt-0 max-h-0 opacity-0"
          )}
          id="mobile-navigation"
        >
          <nav
            aria-label="Mobile"
            className="panel-highlight rounded-[1.75rem] border border-[rgba(142,157,211,0.24)] p-3 shadow-[0_18px_55px_rgba(116,130,185,0.14)]"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                className={cn(
                  "block rounded-2xl px-4 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(112,127,212,0.6)]",
                  activeSection === item.href
                    ? "bg-[rgba(125,136,242,0.08)] text-[color:var(--color-foreground)]"
                    : "text-[rgba(42,49,84,0.82)] hover:bg-white/70"
                )}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
