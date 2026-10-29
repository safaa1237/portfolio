import type { Dictionary } from "@/lib/i18n";

export function Contact({ copy }: { copy: Dictionary["contactSection"] }) {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="eyebrow">{copy.label}</p>
        <h2>{copy.title}</h2><p className="contact-description">{copy.text}</p>
        <a className="button contact-button" href="mailto:safaaelayoubi@gmail.com">{copy.button}<span aria-hidden="true">↗</span></a>
        <div className="footer-bottom"><span>{copy.footer}</span><span>{copy.location}</span></div>
      </div>
    </footer>
  );
}
