import type { Dictionary } from "@/lib/i18n";

export function Hero({ copy }: { copy: Dictionary }) {
  return (
    <main id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</p>
        <h1>{copy.greeting}<br /><em>{copy.headline}</em><br />{copy.headlineEnd}</h1>
        <p className="hero-description">{copy.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:safaaelayoubi@gmail.com">{copy.contact}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-art" aria-label={copy.philosophy}>
        <span className="art-sparkle art-sparkle-top" aria-hidden="true">✳</span>
        <div className="philosophy-card">
          <span className="card-star" aria-hidden="true">✦</span>
          <p className="eyebrow">{copy.philosophy}</p>
          <p className="card-heading">{copy.cardLine1}<br />{copy.cardLine2} <span aria-hidden="true">✳</span></p>
          <p className="card-caption">{copy.cardFooter}</p>
        </div>
        <span className="art-sparkle art-sparkle-bottom" aria-hidden="true">✧</span>
      </div>
    </main>
  );
}
