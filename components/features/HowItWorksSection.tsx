'use client';

import React from 'react';
import { FileText, CheckCircle2, Mail, BarChart3 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Card } from '@/components/ui/Card';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const iconMap = [FileText, CheckCircle2, Mail, BarChart3];

export const HowItWorksSection: React.FC = () => {
  return (
    <Section variant="gradient" id="slik-fungerer-det">
      <div className="bg-sky2/10 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title="Slik fungerer det"
          subtitle="Fire enkle steg fra søknad til oppfølging"
        />
        
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {homeContent.howItWorks.map((step, idx) => {
            const Icon = iconMap[idx] || FileText;
            return (
              <Card key={idx} hoverable className="h-full">
                <Card.Block>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                      <Icon size={28} className="text-white" aria-hidden="true" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-primary mb-2">Steg {idx + 1}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-180">{step.title}</h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </Card.Block>
              </Card>
            );
          })}
        </StaggerAnimation>
      </div>
    </Section>
  );
};
