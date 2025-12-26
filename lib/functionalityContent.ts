/**
 * Content configuration for Funksjonalitet (Functionality) page
 * Detailed feature breakdown for the booking system
 */

export interface FeatureDetail {
  title: string;
  description: string;
  benefits: string[];
}

export interface FeatureCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  features: FeatureDetail[];
}

export interface TechSpec {
  category: string;
  specs: string[];
}

export interface UseCaseItem {
  title: string;
  description: string;
  features: string[];
}

export const functionalityContent = {
  hero: {
    title: "Komplett funksjonalitet for moderne booking",
    subtitle: "Alt du trenger for å administrere lokaler, ressurser og arrangementer – i én løsning.",
    description: "Fra enkel rombestilling til kompleks sesongplanlegging med integrasjoner, betaling og rapportering.",
  },

  highlights: [
    {
      number: "100%",
      label: "Skybasert",
      description: "Ingen installasjon nødvendig",
    },
    {
      number: "24/7",
      label: "Tilgjengelig",
      description: "Alltid oppdatert og tilgjengelig",
    },
    {
      number: "WCAG",
      label: "Universell utforming",
      description: "Tilgjengelig for alle brukere",
    },
    {
      number: "GDPR",
      label: "Personvern",
      description: "Fullt EU/EØS-kompatibel",
    },
  ],

  categories: [
    {
      id: "booking",
      title: "Booking og kalender",
      subtitle: "Effektiv ressursplanlegging og tilgjengelighet",
      icon: "calendar",
      features: [
        {
          title: "Sanntids kalendervisning",
          description: "Se tilgjengelighet for alle lokaler og ressurser i sanntid. Dra-og-slipp for enkel administrasjon.",
          benefits: [
            "Visuell oversikt over alle bookinger",
            "Filter per lokale, ressurstype eller periode",
            "Mobilvennlig kalendervisning",
          ],
        },
        {
          title: "Intern og ekstern booking",
          description: "Støtt både interne reservasjoner og offentlige søknader fra innbyggere og organisasjoner.",
          benefits: [
            "Separate bookingflyter for interne og eksterne",
            "Prioritering av interne bookinger",
            "BankID-autentisering for sikker pålogging",
          ],
        },
        {
          title: "Sesongleie og gjentakende bookinger",
          description: "Enkeltarrangementer, ukentlige møter, sesongbasert leie – alt håndteres fleksibelt.",
          benefits: [
            "Gjentakende bookinger med konfigurerbar frekvens",
            "Sesongleie med fast pris og periode",
            "Automatisk konflikthåndtering",
          ],
        },
        {
          title: "Ressurs og utstyr",
          description: "Koble utstyr og tilleggstjenester til lokaler. Alt booket sammen.",
          benefits: [
            "Definer avhengigheter mellom rom og utstyr",
            "Automatisk tillegg av obligatorisk utstyr",
            "Separate priser for utstyr og tjenester",
          ],
        },
      ],
    },
    {
      id: "payment",
      title: "Betaling og økonomi",
      subtitle: "Automatisert fakturering og økonomistyring",
      icon: "creditCard",
      features: [
        {
          title: "Fleksible betalingsmetoder",
          description: "Støtte for Vipps, kortbetaling, faktura og manuell håndtering.",
          benefits: [
            "Vipps-integrasjon for rask betaling",
            "Kortbetaling via sikker gateway",
            "Faktura for bedrifter og organisasjoner",
          ],
        },
        {
          title: "Automatisk fakturering",
          description: "Generer fakturagrunnlag automatisk basert på bookinger og eksporter til økonomisystem.",
          benefits: [
            "Visma-integrasjon (fil og Enterprise)",
            "Automatisk momsberegning",
            "Periodisk fakturering for faste leietakere",
          ],
        },
        {
          title: "Prissetting og rabatter",
          description: "Konfigurerbare priser per lokale, tid, kundegruppe og sesong.",
          benefits: [
            "Differensierte priser for ulike kundegrupper",
            "Rabattkoder og kampanjer",
            "Sesongbasert prising",
          ],
        },
        {
          title: "Avbestilling og refusjon",
          description: "Konfigurerbare avbestillingsregler med automatisk håndtering.",
          benefits: [
            "Frister per lokale og bookingtype",
            "Automatisk gebyrberegning",
            "Enkel refusjonsprosess",
          ],
        },
      ],
    },
    {
      id: "admin",
      title: "Administrasjon og kontroll",
      subtitle: "Full oversikt og kontroll over alle prosesser",
      icon: "shield",
      features: [
        {
          title: "Rolle og tilgangskontroll",
          description: "Fleksibelt rollesystem for administratorer, saksbehandlere og brukere.",
          benefits: [
            "Definer egne roller med spesifikke rettigheter",
            "Begrens tilgang per lokale eller avdeling",
            "Audit-logg for alle handlinger",
          ],
        },
        {
          title: "Godkjenningsflyt",
          description: "Konfigurerbar godkjenningsprosess med automatiske regler.",
          benefits: [
            "Auto-godkjenning basert på kriterier",
            "Manuell godkjenning for spesielle tilfeller",
            "E-postvarsling ved nye søknader",
          ],
        },
        {
          title: "Brønnøysund-verifisering",
          description: "Automatisk verifisering av organisasjoner mot Brønnøysundregistrene.",
          benefits: [
            "Validering av organisasjonsnummer",
            "Hent offisielle data automatisk",
            "Sikre at kun gyldige organisasjoner booker",
          ],
        },
        {
          title: "Rapportering og statistikk",
          description: "Omfattende rapporter for rombruk, økonomi og besøksstatistikk.",
          benefits: [
            "Eksport til Excel og PDF",
            "Rapporter per periode, lokale eller kunde",
            "Dashboard med nøkkeltall",
          ],
        },
      ],
    },
    {
      id: "customization",
      title: "Tilpasning og kommunikasjon",
      subtitle: "Gjør løsningen til din egen",
      icon: "palette",
      features: [
        {
          title: "Branding og profil",
          description: "Tilpass utseende med logo, farger og fonter som matcher din organisasjon.",
          benefits: [
            "Eget domene og logo",
            "Kulturprofil-tilpasning",
            "Konsistent merkevareopplevelse",
          ],
        },
        {
          title: "Tilpassbare bookingskjemaer",
          description: "Rediger felter, nedtrekkslister og valideringer etter behov.",
          benefits: [
            "Egendefinerte felter per lokaletype",
            "Obligatoriske og valgfrie felter",
            "Betinget visning basert på valg",
          ],
        },
        {
          title: "E-postmaler og varsler",
          description: "Redigerbare bekreftelser, påminnelser og varsler for alle stadier.",
          benefits: [
            "Maler per bookingtype og arrangementstype",
            "Automatiske påminnelser før arrangement",
            "Norsk og engelsk språkstøtte",
          ],
        },
        {
          title: "Innbyggerportal",
          description: "Egen portal for innbyggere med oversikt over egne bookinger.",
          benefits: [
            "Min side med bookinghistorikk",
            "Enkel avbestilling og endring",
            "Favorittlokaler og hurtigbooking",
          ],
        },
      ],
    },
  ] as FeatureCategory[],

  integrations: {
    title: "Integrasjoner",
    subtitle: "Kobles sømløst til systemene du allerede bruker",
    groups: [
      {
        id: "calendar",
        title: "Kalender & Kommunikasjon",
        icon: "calendar",
        items: [
          {
            title: "Outlook/Microsoft 365",
            description: "Synkroniser bookinger automatisk med Outlook-kalender.",
            icon: "calendar",
          },
          {
            title: "Nettside-modul",
            description: "Embed booking på din nettside med widget eller iFrame.",
            icon: "globe",
          },
        ],
      },
      {
        id: "finance",
        title: "Økonomi & Betaling",
        icon: "creditCard",
        items: [
          {
            title: "Visma",
            description: "Fil-eksport eller direkte Enterprise-integrasjon for fakturering.",
            icon: "fileText",
          },
          {
            title: "Vipps",
            description: "Rask og enkel betaling med Vipps for sluttbrukere.",
            icon: "smartphone",
          },
        ],
      },
      {
        id: "archive",
        title: "Arkiv & Billetter",
        icon: "folder",
        items: [
          {
            title: "Acos Websak",
            description: "Integrasjon med Acos for arkiv og dokumenthåndtering.",
            icon: "folder",
          },
          {
            title: "Billettsystem",
            description: "Kobling til billettsystemer for arrangementer med billettsalg.",
            icon: "ticket",
          },
        ],
      },
      {
        id: "security",
        title: "Sikkerhet & Tilgang",
        icon: "shield",
        items: [
          {
            title: "Låssystem (RCO)",
            description: "Automatisk tilgang via integrasjon med RCO låssystem.",
            icon: "lock",
          },
          {
            title: "BankID",
            description: "Sikker autentisering for innbyggere og organisasjoner.",
            icon: "shield",
          },
        ],
      },
    ],
  },

  techSpecs: {
    title: "Tekniske spesifikasjoner",
    subtitle: "Bygget for sikkerhet, ytelse og tilgjengelighet",
    specs: [
      {
        category: "Sikkerhet",
        specs: [
          "ISO 27001-sertifisert informasjonssikkerhet",
          "ISO 27701-sertifisert personvernledelse",
          "TLS 1.2+ kryptering i transit",
          "AES-256 kryptering av data i hvile",
          "Penetrasjonstesting årlig",
        ],
      },
      {
        category: "Personvern",
        specs: [
          "GDPR-kompatibel",
          "Data lagret i EU/EØS",
          "Databehandleravtale (DPA)",
          "Rett til innsyn og sletting",
          "Automatisk dataminimering",
        ],
      },
      {
        category: "Tilgjengelighet",
        specs: [
          "WCAG 2.1 AA-kompatibel",
          "Tastaturnavigasjon",
          "Skjermleser-støtte",
          "Høy kontrast-modus",
          "Responsivt design",
        ],
      },
      {
        category: "Drift og support",
        specs: [
          "99.9% oppetidsgaranti (SLA)",
          "Daglig backup med 30 dagers retensjon",
          "24/7 overvåking",
          "Opplæring og onboarding inkludert",
        ],
      },
    ] as TechSpec[],
  },

  useCases: {
    title: "Passer for din organisasjon",
    subtitle: "Se hvordan Digilist løser utfordringer for ulike sektorer",
    items: [
      {
        title: "Kommune",
        description: "Automatiser utleie av kommunale lokaler med full kontroll og rapportering.",
        features: [
          "Brønnøysund-verifisering",
          "Visma-integrasjon",
          "GDPR-kompatibel",
          "UU-tilpasset",
        ],
      },
      {
        title: "Kulturhus",
        description: "Administrer saler, scener og utstyr med booking, betaling og billettsalg.",
        features: [
          "Billettsystem-integrasjon",
          "Utstyrsbooking",
          "Sesongplanlegging",
          "Publikumsportal",
        ],
      },
      {
        title: "Idrettsanlegg",
        description: "Enkel booking for idrettslag med sesongleie og timebasert utleie.",
        features: [
          "Sesongleie",
          "Gjentakende bookinger",
          "Låssystem-integrasjon",
          "Treningsgrupper",
        ],
      },
      {
        title: "Bedrift",
        description: "Profesjonell møteromsbooking med Outlook-integrasjon og besøksregistrering.",
        features: [
          "Outlook-synkronisering",
          "Besøksregistrering",
          "Catering-bestilling",
          "Intern fakturering",
        ],
      },
    ] as UseCaseItem[],
  },

  cta: {
    title: "Se funksjonaliteten i praksis",
    description: "Book en uforpliktende demo og la oss vise deg hvordan Digilist kan forenkle din hverdag.",
    primaryCta: "Book demo",
    secondaryCta: "Ta kontakt",
  },
};

