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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui/ScrollAnimation';

const integrations = [
  {
    icon: Calendar,
    title: 'Outlook-kalender',
    description: 'Synkronisering med Outlook for automatisk kalenderoppdatering',
    color: 'primary',
  },
  {
    icon: FileText,
    title: 'Visma',
    description: 'Direkte integrasjon eller filoverføring for fakturering',
    color: 'cyan',
  },
  {
    icon: Folder,
    title: 'Acos Websak',
    description: 'Integrasjon med Acos for dokumenthåndtering',
    color: 'success',
  },
  {
    icon: Ticket,
    title: 'Billettsystem',
    description: 'Kobling til billettsystemer for arrangementer',
    color: 'primary',
  },
  {
    icon: Lock,
    title: 'Låssystem (RCO)',
    description: 'Integrasjon med låssystemer for automatisk adgang',
    color: 'cyan',
  },
  {
    icon: Globe,
    title: 'Nettside-modul',
    description: 'Embed eller widget for booking på kommunens nettside',
    color: 'success',
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-primary/10',
    icon: 'text-primary',
    activeBg: 'bg-primary',
    border: 'border-primary/20',
    hoverBorder: 'hover:border-primary',
  },
  cyan: {
    bg: 'bg-cyan/10',
    icon: 'text-cyan',
    activeBg: 'bg-cyan',
    border: 'border-cyan/20',
    hoverBorder: 'hover:border-cyan',
  },
  success: {
    bg: 'bg-success/10',
    icon: 'text-success',
    activeBg: 'bg-success',
    border: 'border-success/20',
    hoverBorder: 'hover:border-success',
  },
};

export const IntegrationShowcase: React.FC = () => {
  return (
    <Section variant="rich-primary" id="integrasjoner">
      <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Left - Header and CTA */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionHeader 
              title="Integrasjoner" 
              subtitle="Kobles sømløst til systemene du allerede bruker"
              align="left"
            />
            
            <div className="space-y-3 mb-8">
              {[
                'Ingen dobbeltføring',
                'Automatisk dataflyt',
                'Enkelt å sette opp',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <span className="text-navy/70">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/funksjonalitet#integrasjoner">
              <Button variant="gradient" className="group">
                Se alle integrasjoner
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right - Integration cards grid */}
        <div className="lg:col-span-8">
          <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {integrations.map((integration, idx) => {
              const colors = colorClasses[integration.color as keyof typeof colorClasses];
              const Icon = integration.icon;
              
              return (
                <div
                  key={idx}
                  className={`
                    flex items-start gap-4 p-5 rounded-xl
                    bg-white border-2 border-sky2/50 hover:border-cyan
                    shadow-lg hover:shadow-xl hover:-translate-y-2
                    transition-all duration-300 ease-smooth cursor-pointer group
                  `}
                >
                  <div className={`
                    w-12 h-12 rounded-xl ${colors.bg} 
                    flex items-center justify-center shrink-0 shadow-lg
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth
                  `}>
                    <Icon size={24} className={colors.icon} />
                  </div>
                  <div>
                    <Heading level={4} className="text-base font-bold text-navy mb-1 group-hover:text-primary transition-colors">
                      {integration.title}
                    </Heading>
                    <Text variant="body" className="text-sm text-navy/60">
                      {integration.description}
                    </Text>
                  </div>
                </div>
              );
            })}
          </StaggerAnimation>
        </div>
        </div>
      </div>
    </Section>
  );
};

