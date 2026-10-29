import type { Dictionary } from "@/lib/i18n";
import styles from "./philosophy-quote.module.css";

export function PhilosophyQuote({ copy }: { copy: Dictionary["quote"] }) {
  return (
    <section className={styles.section} aria-label={copy.label}>
      <div className={styles.panel}>
        <div className={styles.prompt} aria-hidden="true"><span>›_</span> {copy.label}</div>
        <blockquote className={styles.quote}>“{copy.text}”</blockquote>
        <span className={styles.sparkle} aria-hidden="true">✳</span>
      </div>
    </section>
  );
}
