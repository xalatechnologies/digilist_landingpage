/**
 * Unified content configuration for Home landing page
 * Single source of truth for all landing page content
 */

export interface CardItem {
  title: string;
  description: string;
}

export interface CategoryItem {
  category: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Partner {
  id: string;
  name: string;
  url: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureGroup {
  title: string;
  items: CardItem[];
}

export interface Step {
  title: string;
  description: string;
}

export interface TabContent {
  title: string;
  points: string[];
}

export const homeContent = {
  hero: {
    title: "Bookingsystem for lokaler, ressurser og arrangementer",
    subtitle: "For kommuner, kulturhus, idrettslag, skoler, bedrifter og organisasjoner. SaaS-løsning med betaling, kalender og rapportering.",
    languages: "Norsk og engelsk. Mobil og desktop.",
    ctaPrimary: "Book demo",
    ctaSecondary: "Se funksjoner",
  },

  partners: [
    { id: 'xala', name: 'Xala Technologies', url: 'https://xala.no' },
    { id: 'billisim', name: 'Billisim', url: '#' },
    { id: 'commitcare', name: 'CommitCare', url: '#' },
    { id: 'norchain', name: 'NorChain', url: '#' },
  ],

  audienceCards: [
    {
      title: "Kommune",
      description: "Automatiser utleie av kommunale lokaler med full kontroll og rapportering.",
    },
    {
      title: "Kulturhus",
      description: "Administrer saler, scener og arrangementer med booking og betaling.",
    },
    {
      title: "Idrett/Skole",
      description: "Enkel booking av idrettsanlegg, klasserom og møterom.",
    },
    {
      title: "Bedrift",
      description: "Profesjonell løsning for bedriftslokaler og konferanserom.",
    },
  ] as AudienceCard[],

  featureGroups: [
    {
      title: "Booking og tilgjengelighet",
      items: [
        {
          title: "Kalender og ressursplanlegging",
          description: "Flere saler og utstyr i samme oversikt. Sanntids tilgjengelighet.",
        },
        {
          title: "Intern og ekstern booking",
          description: "Støtt både interne reservasjoner og offentlige søknader. BankID for autentisering.",
        },
        {
          title: "Sesongleie og gjentakende",
          description: "Enkeltarrangement, møter, sesongleie og gjentakende bookinger.",
        },
      ],
    },
    {
      title: "Økonomi og betingelser",
      items: [
        {
          title: "Betaling og fakturagrunnlag",
          description: "Automatisk fakturering med Vipps og eksport til økonomisystem.",
        },
        {
          title: "Avbestilling og frister",
          description: "Konfigurerbare avbestillingsregler og frister per lokale.",
        },
        {
          title: "Tilleggstjenester",
          description: "Legg til lyd, matservering eller andre tjenester med automatisk fakturering.",
        },
      ],
    },
    {
      title: "Administrasjon og kontroll",
      items: [
        {
          title: "Rolle og tilgang",
          description: "Fleksible roller og tilgangskontroll for administratorer og brukere.",
        },
        {
          title: "Rapportering og eksport",
          description: "Rombruk, økonomi, besøksstatistikk. Eksport til Excel per arrangement/kunde.",
        },
        {
          title: "Brønnøysund-verifisering",
          description: "Automatisk verifisering av organisasjoner via Brønnøysund.",
        },
      ],
    },
    {
      title: "Tilpasning og kommunikasjon",
      items: [
        {
          title: "Tilpasning og branding",
          description: "Logo, farger, font. Kulturprofil som passer din organisasjon.",
        },
        {
          title: "Rediger bookingsiden",
          description: "Tilpass felter, nedtrekk, flervalg og skjemaer.",
        },
        {
          title: "Maler og kommunikasjon",
          description: "Redigerbare bekreftelser og påminnelser per arrangementstype. Norsk og engelsk.",
        },
      ],
    },
  ] as FeatureGroup[],

  howItWorks: [
    {
      title: "Søknad",
      description: "Innbygger eller organisasjon sender søknad via nettsiden.",
    },
    {
      title: "Godkjenning",
      description: "Administrator godkjenner eller avslår søknaden basert på regler.",
    },
    {
      title: "Bekreftelse",
      description: "Automatisk bekreftelse sendes med detaljer og betalingsinformasjon.",
    },
    {
      title: "Oppfølging",
      description: "Rapportering, fakturering og oppfølging skjer automatisk.",
    },
  ] as Step[],

  publicSectorRequirements: {
    title: "Klar for anskaffelse i offentlig sektor",
    subtitle: "Alle krav dekket for kommuner og kulturhus",
    categories: [
      {
        category: "Autentisering og tilgang",
        items: [
          "ID-porten (støtte/roadmap)",
          "SSO (Single Sign-On)",
          "MFA (Multi-Factor Authentication)",
          "BankID for innbyggere",
        ],
      },
      {
        category: "Dokumentasjon og compliance",
        items: [
          "UU-dokumentasjon (WCAG 2.1 AA)",
          "GDPR-dokumentasjon",
          "Databehandleravtale (DPA)",
          "ROS i samarbeid før produksjon",
        ],
      },
      {
        category: "Drift og ansvar",
        items: [
          "Totalansvar for drift og vedlikehold",
          "Rutiner for kvalitetskontroll",
          "Videreutvikling og oppdateringer",
          "Support på norsk",
        ],
      },
    ],
  },

  integrations: [
    {
      title: "Outlook-kalender",
      description: "Synkronisering med Outlook for automatisk kalenderoppdatering",
    },
    {
      title: "Visma (fil/Enterprise)",
      description: "Direkte integrasjon eller filoverføring for fakturering",
    },
    {
      title: "Acos Websak",
      description: "Integrasjon med Acos for dokumenthåndtering",
    },
    {
      title: "Billettsystem",
      description: "Kobling til billettsystemer for arrangementer",
    },
    {
      title: "Låssystem (RCO)",
      description: "Integrasjon med låssystemer for automatisk adgang",
    },
    {
      title: "Nettside-modul",
      description: "Embed eller widget for booking på kommunens nettside",
    },
  ],

  operationsTabs: [
    {
      title: "Sikkerhet og personvern",
      points: [
        "ISMS: ISO 27001. Personvernledelse: ISO 27701.",
        "GDPR + norsk personvernlov",
        "Data i EU/EØS",
        "Kryptering i transit (TLS 1.2+) og i hvile",
        "Varsling ved sikkerhetshendelser uten ugrunnet opphold",
        "ROS i samarbeid før produksjon",
        "Logg: hvor, retention, tilgjengeliggjøring",
        "Backup: hyppighet, retention, gjenoppretting",
        "Dataeierskap + uttrekk ved kontraktslutt",
        "Databehandleravtale før behandling starter",
        "Filopplasting: antivirus + tillatte formater",
      ],
    },
    {
      title: "Universell utforming",
      points: [
        "WCAG 2.1 AA som mål",
        "Tastaturnavigasjon og fokus",
        "Kontrast og lesbarhet",
        "Skjermleser-støtte",
        "Responsivt for mobil og desktop",
      ],
    },
    {
      title: "Drift, opplæring og support",
      points: [
        "Support på norsk",
        "Opplæringsplan og oppstart",
        "Release- og oppdateringsrutiner",
        "Kvalitetskontroll og videreutvikling",
        "Totalansvar for drift og vedlikehold",
      ],
    },
  ] as TabContent[],


  testimonials: [
    {
      quote: "Endelig et system som snakker med smartlåsene våre. Vi slipper å dele ut fysiske nøkler, og alt går automatisk.",
      author: "Ingrid Solberg",
      role: "Eiendomssjef, Drammen",
    },
    {
      quote: "Frivillige lag og foreninger elsker løsningen. De ser ledig tid med en gang og får svar på søknaden umiddelbart.",
      author: "Petter Nilsen",
      role: "Kulturkonsulent, Lillestrøm",
    },
    {
      quote: "Integrasjonen mot Visma Enterprise fungerte smertefritt. Fakturering tar nå minutter i stedet for dager.",
      author: "Marit Eide",
      role: "Økonomisjef, Bærum",
    },
  ],

  cta: {
    midPage: {
      title: "Book demo",
      description: "Vi viser flyten for innbygger, organisasjon og administrasjon.",
      primary: "Book demo",
      secondary: "Ta kontakt",
    },
    final: {
      title: "Klar til å komme i gang?",
      description: "Book en demo eller ta kontakt for å se hvordan Digilist kan hjelpe din organisasjon.",
      primary: "Book demo",
      secondary: "Ta kontakt",
    },
  },
};

