import React from 'react';
import { Calendar, CreditCard, Lock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { HeroSection } from '@/components/features/HeroSection';
import { TrustBar } from '@/components/features/TrustBar';
import { FeatureCard } from '@/components/features/FeatureCard';
import { CaseStudySection } from '@/components/features/CaseStudySection';
import { TestimonialCard } from '@/components/features/TestimonialCard';

export default function HomePage() {
  const features = [
    {
      icon: Calendar,
      title: 'Felles Kalender',
      description: 'Full oversikt over alle lokaler. Synkroniseres automatisk med Outlook og kommunens nettsider.',
    },
    {
      icon: CreditCard,
      title: 'Automatisk Faktura',
      description: 'Direkte integrasjon med Visma og økonomisystemer. Ingen manuell oppfølging nødvendig.',
    },
    {
      icon: Lock,
      title: 'Adgangskontroll',
      description: 'Send digitale nøkler via SMS. Tilgangen slettes automatisk når bookingen er over.',
    },
  ];

  const testimonials = [
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
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* TRUST TICKER */}
      <TrustBar />

      {/* FEATURE CARDS */}
      <Section variant="default" id="features">
        <div className="text-center mb-16">
          <Heading level={2}>Alt du trenger på ett sted</Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Vi har fjernet kompleksiteten slik at du kan fokusere på innbyggerne.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* CASE STUDY / STATS */}
      <CaseStudySection />

      {/* TESTIMONIALS SECTION */}
      <Section variant="default">
        <div className="text-center mb-16">
          <Heading level={2}>Tilbakemeldinger fra sektoren</Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Vi er stolte av å levere løsninger som fungerer i hverdagen.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

