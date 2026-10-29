import styles from "./section.module.css";
import shared from "./shared.module.css";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  tone?: "blue" | "cream";
  children: ReactNode;
};

export function Section({
  id,
  label,
  title,
  description,
  tone = "cream",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tone === "blue" ? styles["section-blue"] : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles["section-inner"]}>
        <div className={styles["section-heading"]}>
          <p className={shared["eyebrow"]}>{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {description && (
            <p className={styles["section-description"]}>{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
