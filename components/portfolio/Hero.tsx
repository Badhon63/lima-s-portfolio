"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { StampBadge } from "./StampBadge";

const roles = [
  "full stack applications",
  "scalable web experiences",
  "clean user interfaces",
  "thoughtful digital products",
];

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length)
          setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((n) => n + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="eyebrow">Field Note No. 01</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="italic text-primary">Lima</span>.
            <br />
            <span className="text-foreground/90">
              I build{" "}
              <span className="text-secondary">
                {typed}
                <span className="ml-0.5 inline-block h-[0.9em] w-0.5 translate-y-1 bg-primary" />
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Computer Science student at UITS, learning the craft one interface
            at a time. I care about details, calm typography, and code that
            feels handwritten.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See the work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Lima_Resume.pdf"
              download="Lima_Resume.pdf"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <StampBadge>Available for Work</StampBadge>
          </div>
          <div className="mt-14 divider-dashed" />
          <dl className="mt-6 grid max-w-lg grid-cols-3 gap-6 text-sm">
            {[
              ["12+", "Projects"],
              ["3rd", "Year CSE"],
              ["Inf.", "Cups of tea"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-primary">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 border border-dashed border-primary/40" />
          <div className="relative aspect-4/5 border-2 border-primary bg-card px-3 pt-3">
            <img
              src="/profile.png"
              alt=""
              className="block max-h-full max-w-full object-contain mx-auto translate-x-4 "
            />
            <div className="pointer-events-none absolute -bottom-4 -right-4">
              <StampBadge tone="secondary" rotate={8}>
                Est. 2003
              </StampBadge>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="eyebrow">Portrait</span>
          </div>
        </div>
      </div>
    </section>
  );
}
