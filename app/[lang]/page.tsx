import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = await getDictionary(lang);
  return <><Header locale={lang} copy={copy} /><Hero copy={copy} /></>;
}
