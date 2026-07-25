import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const education = [
  { year: "2022 - Present", title: "BSc in Computer Science & Engineering", place: "University of Information Technology & Sciences (UITS)", note: "Focus on web systems, algorithms, and human-centered software." },
  { year: "2019 - 2021", title: "Higher Secondary Certificate (HSC)", place: "—", note: "Science group. Groundwork in mathematics and physics." },
  { year: "2017 - 2019", title: "Secondary School Certificate (SSC)", place: "—", note: "Where the first HTML file was written, out of pure curiosity." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-dashed border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="About — the maker" title={<>A student, quietly building.</>}>
            I'm Lima — a Computer Science student and aspiring frontend developer from Bangladesh.
            I like small details, tactile interfaces, and interfaces that respect the reader.
          </SectionHeader>
        </Reveal>
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal delay={100}>
            <div className="border border-border bg-card p-8">
              <span className="eyebrow">Notes to self</span>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
                <li>— Ship small, ship often, ship kind.</li>
                <li>— Typography carries most of the design.</li>
                <li>— If it doesn't load, it doesn't exist.</li>
                <li>— Accessibility is not a checkbox; it's a habit.</li>
              </ul>
              <div className="mt-8 divider-dashed" />
              <p className="mt-6 font-display text-lg italic text-primary">
                "Build like the reader is standing next to you."
              </p>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">Timeline — education</span></Reveal>
            <ol className="mt-6 space-y-8 border-l border-dashed border-border pl-8">
              {education.map((e, i) => (
                <Reveal key={e.title} delay={i * 120} as="li" className="relative">
                  <span className="absolute -left-[38px] top-2 h-2 w-2 rounded-full bg-primary" />
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.year}</div>
                  <h3 className="mt-2 font-display text-xl">{e.title}</h3>
                  <div className="text-sm text-primary">{e.place}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
