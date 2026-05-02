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
      <div className="flex items-center gap-3">
        <div
          className="h-[2px] w-6 rounded-full"
          style={{ background: "linear-gradient(90deg, #7D88F2, #A4C3FF)" }}
        />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="balance mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="pretty mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </header>
  );
}
