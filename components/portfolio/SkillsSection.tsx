import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript / TypeScript", level: 82 },
      { name: "C / C++", level: 70 },
      { name: "Python", level: 65 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React & Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 60 },
      { name: "MongoDB", level: 55 },
      { name: "PostgreSQL", level: 50 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function Bar({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm text-foreground/90">{name}</span>
          <span className="font-display text-xs text-primary">{level}%</span>
        </div>
        <div className="h-0.75 w-full bg-border/60">
          <div
            className="h-full origin-left bg-primary"
            style={{
              transform: `scaleX(${level / 100})`,
              transition: "transform 900ms cubic-bezier(0.2,0.7,0.2,1)",
            }}
          />
        </div>
      </div>
    </Reveal>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-dashed border-border py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Skills — the toolkit"
            title={<>Instruments in the drawer.</>}
          >
            A working set of tools I reach for. Percentages are honest, not
            aspirational.
          </SectionHeader>
        </Reveal>
        <div className="grid gap-14 md:grid-cols-2">
          {groups.map((g, gi) => (
            <div key={g.name}>
              <Reveal delay={gi * 80}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-display text-2xl italic text-primary">
                    {gi + 1}.
                  </span>
                  <h3 className="font-display text-2xl">{g.name}</h3>
                </div>
              </Reveal>
              <div className="space-y-5">
                {g.skills.map((s, i) => (
                  <Bar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={i * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
