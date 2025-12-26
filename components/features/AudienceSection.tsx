'use client';

import React from 'react';
import { Building2, Theater, Dumbbell, Briefcase, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const iconMap = {
  'Kommune': Building2,
  'Kulturhus': Theater,
  'Idrett/Skole': Dumbbell,
  'Bedrift': Briefcase,
};

// Single unified color scheme for all cards
const cardStyles = {
  bg: 'bg-white',
  icon: 'bg-primary',
  iconText: 'text-white',
};

export const AudienceSection: React.FC = () => {
  return (
    <Section variant="rich-primary" id="hvem-passer-det-for">
      <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title="Hvem passer det for"
          subtitle="En løsning som fungerer for alle typer organisasjoner"
          badge="For alle"
        />
        
        <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 max-w-4xl mx-auto">
          {homeContent.audienceCards.map((card) => {
            const Icon = iconMap[card.title as keyof typeof iconMap] || Building2;
            
            return (
              <div 
                key={card.title} 
                className={`
                  relative rounded-lg p-6 sm:p-8 
                  ${cardStyles.bg}
                  border-2 border-sky2/50 shadow-lg
                  hover:shadow-xl hover:-translate-y-2 hover:border-cyan
                  transition-all duration-300 ease-smooth group cursor-pointer
                  overflow-hidden
                `}
              >
                
                <div className="flex flex-col h-full relative z-10">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-xl ${cardStyles.icon}
                      flex items-center justify-center shrink-0
                      shadow-lg group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-300 ease-smooth
                    `}>
                      <Icon size={30} className={cardStyles.iconText} aria-hidden="true" />
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-navy leading-tight group-hover:text-primary transition-colors duration-180">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 mb-4">
                    <p className="text-sm sm:text-base text-navy/60 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Link indicator - always visible */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto pt-4">
                    <span>Les mer</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-180" />
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </Section>
  );
};
