import { About } from "@/components/About";
import { AnimatedPaths } from "@/components/AnimatedPaths";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Contact } from "@/components/Contact";
import { Founders } from "@/components/Founders";
import { Hero } from "@/components/Hero";
import { ScrollIntro } from "@/components/ScrollIntro";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { Vision } from "@/components/Vision";
import {
  contactLinks,
  founders,
  foundationPillars,
  heroHighlights,
  navItems,
  principles,
  projects,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <SiteHeader navItems={navItems} />
      <main id="main-content" className="relative isolate">
        <ScrollIntro />
        <AnimatedPaths />
        <Hero heroHighlights={heroHighlights} />
        <About pillars={foundationPillars} />
        <Founders founders={founders} />
        <AppsShowcase projects={projects} />
        <Vision principles={principles} />
        <Contact contactLinks={contactLinks} />
      </main>
    </div>
  );
}
