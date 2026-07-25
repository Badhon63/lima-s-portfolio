export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-baseline font-display text-[28px] font-bold leading-none text-primary ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
      aria-label="Lima — home"
    >
      <span className="italic">L</span>
      <span className="text-foreground">.</span>
    </a>
  );
}
