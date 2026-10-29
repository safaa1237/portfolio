import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { TagList } from "./tag-list";

export function Projects({ copy }: { copy: Dictionary["projects"] }) {
  return (
    <Section id="work" label={copy.label} title={copy.title} description={copy.description}>
      <div className="card-grid project-grid">{copy.cards.map((project) => (
        <article className="content-card project-card" key={project.number}>
          <div className="project-top"><span>{project.number} /</span><span aria-hidden="true">✳</span></div>
          <p className="project-category">{project.category}</p><h3>{project.title}</h3>
          <p className="project-description">{project.text}</p><TagList items={project.tags} />
        </article>
      ))}</div>
    </Section>
  );
}
