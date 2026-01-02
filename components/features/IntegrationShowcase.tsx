'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Heading, Text } from '@/components/ui/Typography';
import { 
  Calendar, 
  FileText, 
  Folder, 
  Ticket, 
  Lock, 
  Globe,
} from 'lucide-react';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';

const integrations = [
  {
    icon: Calendar,
    title: 'Outlook-kalender',
    description: 'Synkronisering med Outlook for automatisk kalenderoppdatering',
  },
  {
    icon: FileText,
    title: 'Visma',
    description: 'Direkte integrasjon eller filoverføring for fakturering',
  },
  {
    icon: Folder,
    title: 'Acos Websak',
    description: 'Integrasjon med Acos for dokumenthåndtering',
  },
  {
    icon: Ticket,
    title: 'Billettsystem',
    description: 'Kobling til billettsystemer for arrangementer',
  },
  {
    icon: Lock,
    title: 'Låssystem (RCO)',
    description: 'Integrasjon med låssystemer for automatisk adgang',
  },
  {
    icon: Globe,
    title: 'Nettside-modul',
    description: 'Embed eller widget for booking på kommunens nettside',
  },
];

export const IntegrationShowcase: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="integrasjoner">
      <div className="relative">
        <SectionHeader 
          title="Integrasjoner" 
          subtitle="Integrer med de systemene du allerede bruker for en sømløs arbeidsflyt"
        />
        
        {/* Call-to-action buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            'Ingen dobbeltføring',
            'Automatisk dataflyt',
            'Enkelt å sette opp',
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full bg-cyan text-white text-sm font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
        
        {/* Integration cards grid - 2x3 */}
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {integrations.map((integration, idx) => {
            const Icon = integration.icon;
            
            return (
              <div
                key={idx}
                className="
                  flex flex-col gap-3 p-5 rounded-lg
                  bg-white border border-sky2/20 shadow-md
                  hover:border-cyan/50 hover:shadow-lg
                  transition-all duration-300 ease-smooth cursor-pointer group
                  h-full
                "
              >
                <div className="flex items-start gap-3">
                  <div className="
                    w-12 h-12 rounded-lg bg-cyan/10
                    flex items-center justify-center shrink-0
                    group-hover:bg-cyan/20 transition-all duration-300
                  ">
                    <Icon size={24} className="text-cyan" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <Heading level={4} className="text-base font-bold text-navy mb-1.5 group-hover:text-primary transition-colors">
                      {integration.title}
                    </Heading>
                  </div>
                </div>
                <div className="pl-[60px]">
                  <Text variant="body" className="text-sm text-navy/70 leading-relaxed">
                    {integration.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </Section>
  );
};

