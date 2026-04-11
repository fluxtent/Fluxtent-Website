import type { ReactNode } from "react";

import { AnimatedPaths } from "@/components/AnimatedPaths";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { navItems } from "@/lib/data";

interface PageFrameProps {
  children: ReactNode;
}

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <SiteHeader navItems={navItems} />
      <main className="relative isolate" id="main-content">
        <AnimatedPaths />
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
