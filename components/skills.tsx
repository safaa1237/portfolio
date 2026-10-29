import styles from "./skills.module.css";
import shared from "./shared.module.css";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { RevealGrid } from "./reveal-grid";
import { TagList } from "./tag-list";

export function Skills({ copy }: { copy: Dictionary["skills"] }) {
  return (
    <Section
      id="skills"
      label={copy.label}
      title={copy.title}
      description={copy.description}
    >
      <RevealGrid className={shared["card-grid"] + " " + styles["skills-grid"]}>
        {copy.groups.map((group) => (
          <article className={styles["skill-card"]} key={group.title}>
            <h3>{group.title}</h3>
            <TagList items={group.items} showIcons />
          </article>
        ))}
      </RevealGrid>
    </Section>
  );
}
