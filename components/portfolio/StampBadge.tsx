import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function StampBadge({
  children,
  tone = "primary",
  rotate = -6,
}: {
  children: ReactNode;
  tone?: "primary" | "secondary";
  rotate?: number;
}) {
  const color =
    tone === "primary"
      ? "border-primary text-primary"
      : "border-secondary text-secondary";
  return (
    <span
      className={`inline-flex items-center gap-2 border-2 ${color} px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em]`}
      style={{ transform: `rotate(${rotate}deg)`, borderStyle: "double" }}
    >
      <Check className="h-3 w-3" strokeWidth={3} />
      {children}
    </span>
  );
}
