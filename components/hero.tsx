import styles from "./hero.module.css";
import shared from "./shared.module.css";
import type { Dictionary } from "@/lib/i18n";

export function Hero({ copy }: { copy: Dictionary }) {
  return (
    <section id="home" className={styles["hero"]}>
      <div>
        <p className={shared["eyebrow"]}>
          <span className={styles["eyebrow-dot"]} />
          {copy.eyebrow}
        </p>
        <h1>
          {copy.greeting}
          <br />
          <em>{copy.headline}</em>
          <br />
          {copy.headlineEnd}
        </h1>
        <p className={styles["hero-description"]}>{copy.intro}</p>
        <div className={styles["hero-actions"]}>
          <a
            className={shared["button"] + " " + shared["button-primary"]}
            href="#work"
          >
            {copy.work}
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className={shared["button"] + " " + shared["button-outline"]}
            href="#contact"
          >
            {copy.contact}
          </a>
        </div>
      </div>
      <div className={styles["hero-art"]} aria-label={copy.philosophy}>
        <span
          className={styles["art-sparkle"] + " " + styles["art-sparkle-top"]}
          aria-hidden="true"
        >
          ✳
        </span>
        <div className={styles["philosophy-card"]}>
          <span className={styles["card-star"]} aria-hidden="true">
            ✦
          </span>
          <p className={shared["eyebrow"]}>{copy.philosophy}</p>
          <p className={styles["card-heading"]}>
            {copy.cardLine1}
            <br />
            {copy.cardLine2} <span aria-hidden="true">✳</span>
          </p>
          <p className={styles["card-caption"]}>{copy.cardFooter}</p>
        </div>
        <span
          className={styles["art-sparkle"] + " " + styles["art-sparkle-bottom"]}
          aria-hidden="true"
        >
          ✧
        </span>
      </div>
    </section>
  );
}
