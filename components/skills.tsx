import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { TagList } from "./tag-list";

export function Skills({ copy }: { copy: Dictionary["skills"] }) {
  return (
    <Section id="skills" label={copy.label} title={copy.title} description={copy.description}>
      <div className="card-grid skills-grid">{copy.groups.map((group, index) => (
        <article className="content-card skills-card" key={group.title}>
          <span className="card-index">0{index + 1} /</span><h3>{group.title}</h3><TagList items={group.items} />
        </article>
      ))}</div>
    </Section>
  );
}
