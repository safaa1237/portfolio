import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { TagList } from "./tag-list";

export function Experience({ copy }: { copy: Dictionary["experience"] }) {
  return (
    <Section id="experience" label={copy.label} title={copy.title} description={copy.description} tone="blue">
      <div className="experience-list">{copy.roles.map((role) => (
        <article className="experience-item" key={role.company}>
          <div className="experience-title"><h3>{role.company}</h3><p>{role.role}</p></div>
          <div className="experience-detail"><p>{role.text}</p><TagList items={role.tags} /></div>
          <div className="experience-meta"><span>{role.dates}</span><span>{role.location}</span></div>
        </article>
      ))}</div>
    </Section>
  );
}
