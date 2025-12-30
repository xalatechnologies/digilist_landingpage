/**
 * Content configuration for Om oss (About us) page
 * Single source of truth for about page content
 */

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export const aboutContent = {
  hero: {
    title: "Vi forenkler booking for alle",
    subtitle: "Digilist er utviklet for å gjøre utleie og booking enkelt, trygt og effektivt – for både utleiere og leietakere.",
    description: "Fra kommunale kulturhus til private idrettsanlegg – vi leverer en moderne SaaS-løsning som sparer tid, reduserer feil og gir full kontroll.",
  },

  mission: {
    title: "Vår misjon",
    description: "Vi tror at alle fortjener enkel tilgang til lokaler og ressurser. Vår misjon er å digitalisere og forenkle bookingprosessen slik at flere kan delta i kultur, idrett og samfunnsliv.",
    quote: "Teknologi skal fjerne barrierer, ikke skape dem.",
  },

  stats: [
    { number: "50+", label: "Kunder" },
    { number: "10 000+", label: "Bookinger per måned" },
    { number: "99.9%", label: "Oppetid" },
  ] as Stat[],

  values: [
    {
      title: "Brukervennlighet",
      description: "Alt vi lager skal være intuitivt og enkelt å bruke – for alle aldersgrupper og tekniske nivåer.",
      icon: "heart",
    },
    {
      title: "Sikkerhet",
      description: "ISO 27001/27701-sertifisert. GDPR-kompatibel. Data lagres trygt i EU/EØS.",
      icon: "shield",
    },
    {
      title: "Tilgjengelighet",
      description: "WCAG 2.1 AA-kompatibel. Universell utforming er ikke et tillegg – det er grunnmuren.",
      icon: "accessibility",
    },
    {
      title: "Innovasjon",
      description: "Vi utvikler kontinuerlig nye funksjoner basert på tilbakemeldinger fra våre kunder.",
      icon: "lightbulb",
    },
  ] as Value[],

  team: {
    title: "Teamet bak Digilist",
    subtitle: "Et dedikert team med erfaring fra offentlig sektor, teknologi og brukeropplevelse.",
    members: [
      {
        name: "Utviklingsteam",
        role: "Produktutvikling",
        description: "Erfarne utviklere med fokus på kvalitet, sikkerhet og brukervennlighet.",
      },
      {
        name: "Supportteam",
        role: "Kundeservice",
        description: "Rask responstid og personlig oppfølging.",
      },
      {
        name: "Designteam",
        role: "UX/UI Design",
        description: "Fokus på universell utforming og intuitive brukeropplevelser.",
      },
    ] as TeamMember[],
  },

  milestones: [
    {
      year: "2020",
      title: "Oppstart",
      description: "Digilist ble grunnlagt med mål om å forenkle booking for kommuner.",
    },
    {
      year: "2021",
      title: "Første kunder",
      description: "Lansering av første versjon med kulturhus og idrettsanlegg som pilotkunder.",
    },
    {
      year: "2022",
      title: "ISO-sertifisering",
      description: "Oppnådde ISO 27001 og ISO 27701 sertifisering for sikkerhet og personvern.",
    },
    {
      year: "2023",
      title: "Nasjonal vekst",
      description: "Utvidet til over 30 kommuner og kulturhus over hele landet.",
    },
    {
      year: "2024",
      title: "Nye integrasjoner",
      description: "Lansering av Visma, Acos og RCO-integrasjoner for sømløs drift.",
    },
  ] as Milestone[],

  partners: {
    title: "Våre partnere",
    subtitle: "Vi samarbeider med ledende teknologileverandører for å gi deg den beste løsningen.",
  },

  cta: {
    title: "Klar for å komme i gang?",
    description: "Book en uforpliktende demo og se hvordan Digilist kan hjelpe din organisasjon.",
    primaryCta: "Book demo",
    secondaryCta: "Ta kontakt",
  },
};

