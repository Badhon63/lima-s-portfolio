import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { StampBadge } from "./StampBadge";

const projects = [
  { n: "01", title: "Field Journal", desc: "A minimalist writing app with dashed dividers, warm typography, and offline notes.", tags: ["Next.js", "Tailwind", "IndexedDB"], live: "#", github: "#", status: "Live" },
  { n: "02", title: "Kettle", desc: "A tiny weather widget with hand-drawn icons and a barometric mood ring.", tags: ["React", "TypeScript", "Framer Motion"], live: "#", github: "#", status: "Live" },
  { n: "03", title: "Foliage", desc: "A plant-care reminder built as a coursework project — SMS + local storage.", tags: ["Node.js", "Express", "MongoDB"], live: "#", github: "#", status: "Live" },
  { n: "04", title: "Portfolio v1", desc: "My first portfolio site — a scrappy, honest first attempt still online.", tags: ["HTML", "CSS", "Vercel"], live: "https://badhon-s-portfolio.vercel.app/", github: "https://github.com/Badhon63/Badhon-s-portfolio", status: "Live" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-dashed border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Projects — the work" title={<>Selected clippings.</>}>
            A short reel of things I've made. Some polished, some studies — all real.
          </SectionHeader>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-primary">
                <div className="absolute right-6 top-6">
                  <StampBadge tone="secondary" rotate={6}>{p.status}</StampBadge>
                </div>
                <div className="font-display text-sm text-primary">No. {p.n}</div>
                <h3 className="mt-2 font-display text-3xl leading-tight">{p.title}</h3>
                <div className="mt-4 divider-dashed" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="border border-border px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70">{t}</li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-4 pt-8">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline">
                    <ExternalLink className="h-3.5 w-3.5" /> Visit
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary">
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
