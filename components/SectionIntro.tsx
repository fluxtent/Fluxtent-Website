import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionIntroProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.7)]">
        {eyebrow}
      </p>
      <h2 className="font-display balance mt-4 text-4xl leading-none font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>
      <p className="pretty mt-5 max-w-2xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </header>
  );
}
