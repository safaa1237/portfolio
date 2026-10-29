import { en } from "./content/en";
import { de } from "./content/de";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;
export const isLocale = (value: string): value is Locale => locales.some((locale) => locale === value);

const dictionaries: Record<Locale, Dictionary> = { en, de };
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  "use cache";
  return dictionaries[locale];
}
