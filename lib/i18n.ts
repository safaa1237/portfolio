export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.some((locale) => locale === value);

const dictionaries = {
  en: {
    navLabel: "Main navigation", home: "Home", contact: "Get in touch",
    eyebrow: "Software engineer · AI-minded builder", greeting: "Hi, I’m Safaa.", headline: "Let’s make space", headlineEnd: "for better work.",
    intro: "I build thoughtful software and AI-assisted workflows that take care of the repetitive stuff, so engineers can focus on solving meaningful problems.",
    work: "Explore my work", philosophy: "A little philosophy", cardLine1: "Less boilerplate.", cardLine2: "More building.", cardFooter: "AI + engineering + human curiosity", scroll: "A little more about me", language: "Language",
  },
  de: {
    navLabel: "Hauptnavigation", home: "Start", contact: "Kontakt aufnehmen",
    eyebrow: "Software Engineer · KI-begeisterte Entwicklerin", greeting: "Hi, ich bin Safaa.", headline: "Mehr Raum schaffen", headlineEnd: "für bessere Arbeit.",
    intro: "Ich entwickle durchdachte Software und KI-gestützte Workflows, die repetitive Aufgaben übernehmen – damit sich Entwicklerinnen und Entwickler auf sinnvolle Lösungen konzentrieren können.",
    work: "Meine Arbeit entdecken", philosophy: "Meine Philosophie", cardLine1: "Weniger Routine.", cardLine2: "Mehr gestalten.", cardFooter: "KI + Engineering + menschliche Neugier", scroll: "Mehr über mich", language: "Sprache",
  },
};
export type Dictionary = (typeof dictionaries)[Locale];
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  "use cache";
  return dictionaries[locale];
}
