'use client';

import React from 'react';
import { Building2, Theater, Dumbbell, Briefcase } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const iconMap = {
  'Kommuner': Building2,
  'Kulturhus': Theater,
  'Idrettslag': Dumbbell,
  'Bedrifter': Briefcase,
};

// Enhanced color scheme with gradients for each card type
const cardConfigs = [
  {
    title: 'Kommuner',
    iconBg: 'bg-gradient-to-br from-primary to-primary/80',
    accentBg: 'bg-primary/5',
    borderColor: 'border-primary/30',
    hoverBorder: 'hover:border-primary',
    glowColor: 'group-hover:shadow-primary/20',
  },
  {
    title: 'Kulturhus',
    iconBg: 'bg-gradient-to-br from-cyan to-cyan/80',
    accentBg: 'bg-cyan/5',
    borderColor: 'border-cyan/30',
    hoverBorder: 'hover:border-cyan',
    glowColor: 'group-hover:shadow-cyan/20',
  },
  {
    title: 'Idrettslag',
    iconBg: 'bg-gradient-to-br from-sky to-sky/80',
    accentBg: 'bg-sky/5',
    borderColor: 'border-sky/30',
    hoverBorder: 'hover:border-sky',
    glowColor: 'group-hover:shadow-sky/20',
  },
  {
    title: 'Bedrifter',
    iconBg: 'bg-gradient-to-br from-navy to-navy/80',
    accentBg: 'bg-navy/5',
    borderColor: 'border-navy/30',
    hoverBorder: 'hover:border-navy',
    glowColor: 'group-hover:shadow-navy/20',
  },
];

export const AudienceSection: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="hvem-passer-det-for">
      <div className="relative">
        <SectionHeader
          title="En plattform. Mange bruksområder"
          subtitle="Tilpasset kommuner, kulturhus, skoler, idrett og bedrifter"
          badge="For alle"
        />
        
        <StaggerAnimation 
          staggerDelay={0.1} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {homeContent.audienceCards.map((card) => {
            const Icon = iconMap[card.title as keyof typeof iconMap] || Building2;
            
            return (
              <div 
                key={card.title} 
                className="
                  relative rounded-lg p-6 sm:p-8
                  bg-transparent border border-sky2/20
                  hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/20
                  transition-all duration-300 ease-smooth group cursor-pointer
                  flex flex-col items-center text-center
                "
              >
                {/* Icon */}
                <div className="
                  w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-cyan/10
                  flex items-center justify-center mb-4
                  group-hover:bg-cyan/20 group-hover:scale-110
                  transition-all duration-300 ease-smooth
                ">
                  <Icon size={32} className="text-cyan" strokeWidth={2} aria-hidden="true" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-navy leading-tight group-hover:text-primary transition-colors duration-180">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </Section>
  );
};
