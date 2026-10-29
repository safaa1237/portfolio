import styles from "./approach.module.css";
import shared from "./shared.module.css";
import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";
import { RevealGrid } from "./reveal-grid";

export function Approach({ copy }: { copy: Dictionary["approach"] }) {
  return (
    <Section
      id="approach"
      label={copy.label}
      title={copy.title}
      description={copy.description}
      tone="blue"
    >
      <RevealGrid
        className={shared["card-grid"] + " " + styles["approach-grid"]}
      >
        {copy.cards.map((card) => (
          <article
            className={shared["content-card"] + " " + styles["approach-card"]}
            key={card.title}
          >
            <span className={styles["approach-icon"]} aria-hidden="true">
              {card.icon}
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </RevealGrid>
    </Section>
  );
}
