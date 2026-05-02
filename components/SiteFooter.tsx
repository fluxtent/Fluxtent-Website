"use client";

import Link from "next/link";

import { contactLinks, navItems, projects } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #1e1b4b 0%, #0f0d2e 100%)" }}>
      {/* Gradient divider line */}
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, #CEC9FF, #A4C3FF, #7D88F2)" }} />

      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#A4C3FF" }}>
              Fluxtent
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              A focused portfolio for health-related browser and web products.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6" style={{ color: "rgba(206,201,255,0.6)" }}>
              Built by Arnav Singh and Varun Puttagunta, Fluxtent gives each product a
              clear role, direct positioning, and a professional home for future growth.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">Navigate</p>
              <div className="mt-3 grid gap-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(206,201,255,0.55)" }}
                    href={item.href}
                    onMouseOver={(e) => { e.currentTarget.style.color = "#A4C3FF"; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = "rgba(206,201,255,0.55)"; }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Products</p>
              <div className="mt-3 grid gap-2.5">
                {projects.slice(0, 4).map((project) => (
                  <Link
                    key={project.slug}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(206,201,255,0.55)" }}
                    href={`/ecosystem#${project.slug}`}
                    onMouseOver={(e) => { e.currentTarget.style.color = "#A4C3FF"; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = "rgba(206,201,255,0.55)"; }}
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 border-t pt-5 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(206,201,255,0.12)", color: "rgba(206,201,255,0.4)" }}
        >
          <p>&copy; {new Date().getFullYear()} Fluxtent.</p>
          <a
            className="font-medium transition-colors duration-200"
            href={contactLinks[0].href}
            style={{ color: "rgba(206,201,255,0.5)" }}
            onMouseOver={(e) => { e.currentTarget.style.color = "#A4C3FF"; }}
            onMouseOut={(e) => { e.currentTarget.style.color = "rgba(206,201,255,0.5)"; }}
          >
            {contactLinks[0].helper}
          </a>
        </div>
      </div>
    </footer>
  );
}
