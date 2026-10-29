import type { Dictionary } from "../i18n";

export const de: Dictionary = {
  navLabel: "Hauptnavigation", home: "Start", contact: "Kontakt aufnehmen", language: "Sprache",
  nav: { approach: "Ansatz", skills: "Skills", experience: "Erfahrung", work: "Projekte" },
  eyebrow: "Software Engineer · Systemarchitektin · KI-begeisterte Entwicklerin", greeting: "Hi, ich bin Safaa.", headline: "Mehr Raum schaffen", headlineEnd: "für bessere Arbeit.",
  intro: "Ich gestalte durchdachte Systeme und KI-gestützte Workflows, die Raum für sinnvolle Lösungen schaffen. Von skalierbarer Architektur bis zu LLM-gestützten Tools verbinde ich die einzelnen Bausteine.",
  work: "Meine Arbeit entdecken", philosophy: "Meine Philosophie", cardLine1: "Weniger Routine.", cardLine2: "Mehr gestalten.", cardFooter: "Architektur + KI + menschliche Neugier",
  quote: { label: "safaa@workspace ~", text: "Ein Softwaresystem ist für einen Engineer, was ein Gemälde für einen Künstler ist." },
  approach: {
    label: "01 / Mein Ansatz", title: "Bessere Tools, bessere Arbeitstage.", description: "Durchdachte Automatisierung schafft Teams mehr Zeit für Gestaltung, Zusammenarbeit und wichtige Herausforderungen.",
    cards: [
      { icon: "✳", title: "KI im Arbeitsalltag", text: "Praktische agentische Workflows, MCP-Integrationen und Projektwissen dort, wo Teams es brauchen." },
      { icon: "⌘", title: "Solide Grundlagen", text: "Skalierbare Systeme, klare Schnittstellen und zuverlässige Cloud-Infrastruktur, die sich gemeinsam mit KI weiterentwickeln können." },
      { icon: "♡", title: "Der Mensch im Mittelpunkt", text: "Eine bessere Developer Experience und mehr Raum für durchdachte Entscheidungen." },
    ],
  },
  skills: {
    label: "02 / Was ich mitbringe", title: "Skills & Tools", description: "Mein Werkzeugkasten für vernetzte Systeme, nützliche Produkte und bessere Zusammenarbeit.",
    groups: [
      { title: "Systemarchitektur", items: ["Verteilte Systeme", "Microservices", "Systemintegration", "Cloud-Architektur"] },
      { title: "KI-Engineering", items: ["LLM APIs", "MCP", "RAG", "Agentische Workflows", "Tool Calling"] },
      { title: "Full-Stack-Entwicklung", items: ["TypeScript", "React", "Next.js", "Java", "Python", "Spring Boot", "NestJS"] },
      { title: "Cloud & Delivery", items: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"] },
      { title: "Daten & Observability", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Grafana", "Prometheus"] },
    ],
  },
  experience: {
    label: "03 / Mein Werdegang", title: "Berufserfahrung", description: "Von der Produktentwicklung bis zur Gestaltung der Systeme und Workflows dahinter.",
    roles: [
      { company: "Netlight", role: "Consultant", dates: "Juni 2026 – heute", location: "München, Deutschland", text: "Arbeit an Cloud-nativen Anwendungen, Architektur und KI-gestützten Engineering-Workflows in Kundenprojekten.", tags: ["Next.js", "TypeScript", "Kubernetes", "MCP"] },
      { company: "CHECK24", role: "Software Engineer", dates: "Juli 2023 – heute", location: "München, Deutschland", text: "Entwicklung von Integrationen für den Kundenservice, Echtzeit-Synchronisation und Monitoring für zuverlässige Systeme.", tags: ["Spring Boot", "React", "Redis", "Grafana"] },
      { company: "Norwegian Refugee Council", role: "Consultant", dates: "Juli 2022 – Juni 2023", location: "Oslo, Norwegen", text: "Entwicklung einer Lösung zur Spendenplanung für über 5.000 monatliche Spendende mit Anbindung von Zahlungs- und CRM-Plattformen.", tags: ["Python", "React", "Stripe", "Salesforce"] },
      { company: "EMAX", role: "Software Engineer", dates: "Juni 2021 – Juli 2022", location: "München, Deutschland", text: "Entwicklung eines E-Commerce-Analyse-Tools zum Vergleich und zur Prognose von Verkaufszahlen anhand von Produktdaten.", tags: ["React", "Puppeteer", "MongoDB", "Redshift"] },
    ],
  },
  projects: {
    label: "04 / Ausgewählte Arbeit", title: "Was ich entwickelt habe", description: "Einblicke in meine Arbeit an KI, Produkten und den Systemen, die sie verbinden.",
    cards: [
      { number: "01", category: "KI & Developer Experience", title: "KI-gestützte Workflows", text: "Integration von LLM-Tools und MCP-basierten Workflows, um Projektwissen zugänglich zu machen und Entwicklungsprozesse zu vereinfachen.", tags: ["MCP", "LLMs", "Agentische Workflows"] },
      { number: "02", category: "Produkt & Zahlungen", title: "Spendenplanung", text: "Entwicklung einer Planungslösung, die Salesforce, Stripe und PayPal für wiederkehrende Spenden verbindet.", tags: ["Python", "React", "Payments"] },
      { number: "03", category: "Systeme & Infrastruktur", title: "Echtzeit-Synchronisation", text: "Entwicklung eines Dienstes, der Statusänderungen mit Redis und Server-Sent Events systemübergreifend synchronisiert.", tags: ["Redis", "SSE", "Integration"] },
    ],
  },
  contactSection: { label: "05 / Sag Hallo", title: "Lass uns etwas Sinnvolles schaffen.", text: "Du hast ein Projekt, eine Idee oder eine spannende Möglichkeit? Ich freue mich, davon zu hören.", button: "Schreib mir", location: "In München, Deutschland", footer: "Mit Bedacht entwickelt von Safaa Elayoubi." },
};
