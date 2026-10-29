import styles from "./contact.module.css";
import shared from "./shared.module.css";
import type { Dictionary } from "@/lib/i18n";

export function Contact({ copy }: { copy: Dictionary["contactSection"] }) {
  return (
    <footer id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-inner"]}>
        <p className={shared["eyebrow"]}>{copy.label}</p>
        <h2>{copy.title}</h2>
        <p className={styles["contact-description"]}>{copy.text}</p>
        <a
          className={shared["button"] + " " + styles["contact-button"]}
          href="mailto:safaaelayoubi@gmail.com"
        >
          {copy.button}
          <span aria-hidden="true">↗</span>
        </a>
        <div className={styles["footer-bottom"]}>
          <span>{copy.footer}</span>
          <span>{copy.location}</span>
        </div>
      </div>
    </footer>
  );
}
