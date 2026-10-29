import type { Dictionary } from "@/lib/i18n";
import { Section } from "./section";

export function Approach({ copy }: { copy: Dictionary["approach"] }) {
  return (
    <Section id="approach" label={copy.label} title={copy.title} description={copy.description} tone="blue">
      <div className="card-grid approach-grid">{copy.cards.map((card) => (
        <article className="content-card approach-card" key={card.title}>
          <span className="approach-icon" aria-hidden="true">{card.icon}</span>
          <h3>{card.title}</h3><p>{card.text}</p>
        </article>
      ))}</div>
    </Section>
  );
}
