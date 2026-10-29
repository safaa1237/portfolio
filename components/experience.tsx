import styles from "./experience.module.css";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { RevealGrid } from "./reveal-grid";
import { TagList } from "./tag-list";

export function Experience({ copy }: { copy: Dictionary["experience"] }) {
  return (
    <Section
      id="experience"
      label={copy.label}
      title={copy.title}
      description={copy.description}
      tone="blue"
    >
      <RevealGrid className={styles["experience-list"]}>
        {copy.roles.map((role) => (
          <article className={styles["experience-item"]} key={role.company}>
            <div className={styles["experience-title"]}>
              <h3>{role.company}</h3>
              <p>{role.role}</p>
            </div>
            <div className={styles["experience-detail"]}>
              <p>{role.text}</p>
              <TagList items={role.tags} />
            </div>
            <div className={styles["experience-meta"]}>
              <span>{role.dates}</span>
              <span>{role.location}</span>
            </div>
          </article>
        ))}
      </RevealGrid>
    </Section>
  );
}
