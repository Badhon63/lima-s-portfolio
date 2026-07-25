import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { StampBadge } from "./StampBadge";

const projects = [
  {
    n: "01",
    title: "PetPulse",
    desc: "Discover premium pet care, certified healthy pets for adoption, and high-quality accessories all in one trusted place.",
    tags: ["TypeScript", "Next.js", "Express", "MongoDB"],
    live: "https://petpulse-flame.vercel.app/",
    github: "https://github.com/Badhon63/petpulse",
    status: "Live",
  },
  {
    n: "02",
    title: "ProcureMind-AI",
    desc: "Automate sourcing, generate RFPs, and uncover savings with AI powered procurement agents.",
    tags: ["Artificial Intelligence", "Next.js", "Express", "MongoDB"],
    live: "https://procure-mind-ai-five.vercel.app/",
    github: "https://github.com/Badhon63/ProcureMind-AI",
    status: "Live",
  },
  {
    n: "03",
    title: "UsedBay",
    desc: "Find affordable items, save money, and reduce waste with UsedBay.",
    tags: ["Next.js", "Express", "MongoDB"],
    live: "https://used-bay.vercel.app/",
    github: "https://github.com/Badhon63/UsedBay",
    status: "Live",
  },
  {
    n: "04",
    title: "DoctorNow",
    desc: "Connect with 500+ verified doctors, book instantly, and manage appointments with ease.",
    tags: ["Next.js", "Express", "MongoDB"],
    live: "https://doctor-now-seven.vercel.app/",
    github: "https://github.com/Badhon63/doctor-now",
    status: "Live",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-dashed border-border py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Projects — the work"
            title={<>Selected clippings.</>}
          >
            A short reel of things I've made. Some polished, some studies — all
            real.
          </SectionHeader>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-primary">
                <div className="absolute right-6 top-6">
                  <StampBadge tone="secondary" rotate={6}>
                    {p.status}
                  </StampBadge>
                </div>
                <div className="font-display text-sm text-primary">
                  No. {p.n}
                </div>
                <h3 className="mt-2 font-display text-3xl leading-tight">
                  {p.title}
                </h3>
                <div className="mt-4 divider-dashed" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-border px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-4 pt-8">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Visit
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary"
                  >
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
