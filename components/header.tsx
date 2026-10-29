import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Header({ locale, copy }: { locale: Locale; copy: Dictionary }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={`/${locale}`} aria-label="Safaa Elayoubi — Home">Safaa Elayoubi<span>.</span></Link>
        <nav className="navigation" aria-label={copy.navLabel}>
          <Link className="nav-home" href={`/${locale}`}>{copy.home}</Link>
          <a className="nav-contact" href="mailto:safaaelayoubi@gmail.com">{copy.contact} <span aria-hidden="true">↗</span></a>
          <div className="language-switch" aria-label={copy.language}>
            <Link href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href="/de" lang="de" aria-current={locale === "de" ? "page" : undefined}>DE</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
