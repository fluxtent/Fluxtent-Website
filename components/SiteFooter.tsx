import Link from "next/link";

import { contactLinks, navItems } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 pb-10 pt-2">
      <div className="section-shell">
        <div className="rounded-3xl border border-[rgba(142,157,211,0.1)] bg-white/55 px-6 py-6 backdrop-blur-sm sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
                Fluxtent
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-[2.6rem]">
                Thoughtful health technology, presented with clarity.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
                Fluxtent is the portfolio foundation created by Arnav Singh and Varun Puttagunta to
                showcase health-focused products, experiments, and digital systems with intention.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(82,96,154,0.58)]">
                  Explore
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-foreground)]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(82,96,154,0.58)]">
                  Connect
                </p>
                <a
                  className="mt-3 inline-flex text-sm font-medium text-[color:var(--color-foreground)] transition hover:text-[#5E6AD2]"
                  href={contactLinks[0].href}
                >
                  {contactLinks[0].helper}
                </a>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                  Additional socials can layer in later without changing the structure of the site.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(142,157,211,0.1)] pt-5 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Fluxtent.</p>
            <p>Built with intention by Arnav Singh and Varun Puttagunta.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

