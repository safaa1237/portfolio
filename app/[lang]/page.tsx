import { notFound } from "next/navigation";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PhilosophyQuote } from "@/components/philosophy-quote";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = await getDictionary(lang);
  return (
    <>
      <Header locale={lang} copy={copy} />
      <main>
        <Hero copy={copy} />
        <Approach copy={copy.approach} />
        <PhilosophyQuote copy={copy.quote} />
        <Skills copy={copy.skills} />
        <Experience copy={copy.experience} />
        <Projects copy={copy.projects} />
      </main>
      <Contact copy={copy.contactSection} />
    </>
  );
}
