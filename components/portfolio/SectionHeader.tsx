import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="mb-4 flex items-center gap-4">
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>
      )}
    </div>
  );
}
