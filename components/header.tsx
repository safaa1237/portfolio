import styles from "./header.module.css";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Header({ locale, copy }: { locale: Locale; copy: Dictionary }) {
  const links = [
    ["approach", copy.nav.approach],
    ["skills", copy.nav.skills],
    ["experience", copy.nav.experience],
    ["work", copy.nav.work],
  ];
  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-inner"]}>
        <Link className={styles["brand"]} href={`/${locale}#home`}>
          Safaa Elayoubi<span>.</span>
        </Link>
        <nav className={styles["navigation"]} aria-label={copy.navLabel}>
          <div className={styles["section-links"]}>
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <a className={styles["nav-contact"]} href="#contact">
            {copy.contact} <span aria-hidden="true">↗</span>
          </a>
          <div className={styles["language-switch"]} aria-label={copy.language}>
            <Link
              href="/en"
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/de"
              lang="de"
              aria-current={locale === "de" ? "page" : undefined}
            >
              DE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
