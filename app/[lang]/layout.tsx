import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  title: "Safaa Elayoubi | Software Engineer & System Architect",
  description: "System architecture, thoughtful software and AI-assisted workflows by Safaa Elayoubi.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <html lang={lang}><body>{children}</body></html>;
}
