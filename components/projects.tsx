import styles from "./projects.module.css";
import shared from "./shared.module.css";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { RevealGrid } from "./reveal-grid";
import { TagList } from "./tag-list";

export function Projects({ copy }: { copy: Dictionary["projects"] }) {
  return (
    <Section
      id="work"
      label={copy.label}
      title={copy.title}
      description={copy.description}
    >
      <RevealGrid className={shared["card-grid"] + " " + styles["project-grid"]}>
        {copy.cards.map((project) => (
          <article
            className={shared["content-card"] + " " + styles["project-card"]}
            key={project.number}
          >
            <div className={styles["project-top"]}>
              <span>{project.number} /</span>
              <span aria-hidden="true">✳</span>
            </div>
            <p className={styles["project-category"]}>{project.category}</p>
            <h3>{project.title}</h3>
            <p className={styles["project-description"]}>{project.text}</p>
            <TagList items={project.tags} />
          </article>
        ))}
      </RevealGrid>
    </Section>
  );
}
