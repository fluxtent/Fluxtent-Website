import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { navItems } from "@/lib/data";

interface PageFrameProps {
  children: ReactNode;
}

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader navItems={navItems} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
