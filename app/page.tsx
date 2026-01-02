import React from 'react';
import { HeroSection } from '@/components/features/HeroSection';
import { TrustBar } from '@/components/features/TrustBar';
import { AudienceSection } from '@/components/features/AudienceSection';
import { FeatureGroupsSection } from '@/components/features/FeatureGroupsSection';
import { HowItWorksSection } from '@/components/features/HowItWorksSection';
import { OperationsTabsSection } from '@/components/features/OperationsTabsSection';
import { ImageShowcase } from '@/components/features/ImageShowcase';
import { IntegrationShowcase } from '@/components/features/IntegrationShowcase';
import { 
  CategorySection, 
  CtaSection 
} from '@/components/sections';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST BAR */}
      <ScrollAnimation variant="fadeUp" delay={100}>
        <TrustBar />
      </ScrollAnimation>

      {/* 3. HVEM PASSER DET FOR */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <AudienceSection />
      </ScrollAnimation>

      {/* 4. FUNKSJONER - 4 grupper */}
      <ScrollAnimation variant="fadeUp" delay={200}>
        <FeatureGroupsSection />
      </ScrollAnimation>

      {/* 5. KRAVDEKNING PÅ 60 SEKUNDER */}
      <ScrollAnimation variant="scale" delay={100}>
        <CategorySection
          id="kravdekning"
          title={homeContent.publicSectorRequirements.title}
          subtitle={homeContent.publicSectorRequirements.subtitle}
          categories={homeContent.publicSectorRequirements.categories}
          variant="default"
          columns={3}
          image="/images/utleieobjekter/flytende-badstua-ulefoss.jpg"
          imageAlt="Offentlig sektor løsning"
        />
      </ScrollAnimation>

      {/* 6. SLIK FUNGERER DET - 4 steg */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <HowItWorksSection />
      </ScrollAnimation>

      {/* 6.5. IMAGE SHOWCASE */}
      <ScrollAnimation variant="fadeLeft" delay={100}>
        <ImageShowcase
          variant="left"
          sectionVariant="default"
          badge="Se det i praksis"
          title="Fra kultursal til idrettshall"
          description="Digilist gir deg full oversikt over alle utleieobjekter. Se tilgjengelighet i sanntid, administrer bookinger enkelt, og la brukerne selv finne og booke ledige lokaler."
          features={[
            'Visuell kalender med drag-and-drop',
            'Automatiske bekreftelser og påminnelser',
            'Integrert betalingsløsning',
            'Rapporter og statistikk',
          ]}
          image="/images/utleieobjekter/kipo-kultursal.jpg"
          imageAlt="Kultursal booking eksempel"
          ctaText="Se demo"
          ctaHref="/demo"
        />
      </ScrollAnimation>

      {/* 7. INTEGRASJONER */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <IntegrationShowcase />
      </ScrollAnimation>

      {/* 8. TRYGG DRIFT - Tabs */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <OperationsTabsSection />
      </ScrollAnimation>

      {/* 9. SLUTT-CTA */}
      <ScrollAnimation variant="scale" delay={100}>
        <CtaSection
          title={homeContent.cta.final.title}
          description={homeContent.cta.final.description}
          primaryCta={homeContent.cta.final.primary}
          variant="default"
          className="bg-white"
          primaryHref="/demo"
        />
      </ScrollAnimation>
    </div>
  );
}
