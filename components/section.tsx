import type { ReactNode } from "react";

type SectionProps = { id: string; label: string; title: string; description?: string; tone?: "blue" | "cream"; children: ReactNode };

export function Section({ id, label, title, description, tone = "cream", children }: SectionProps) {
  return (
    <section id={id} className={`section section-${tone}`} aria-labelledby={`${id}-title`}>
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {description && <p className="section-description">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
