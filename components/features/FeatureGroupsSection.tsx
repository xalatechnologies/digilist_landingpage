'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CreditCard, Shield, Palette, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const groupIcons = [Calendar, CreditCard, Shield, Palette];

export const FeatureGroupsSection: React.FC = () => {
  return (
    <Section variant="rich-cyan" id="funksjoner">
      <div className="bg-cyan/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title="Funksjoner"
          subtitle="Alt du trenger for å administrere bookinger, ressurser og arrangementer"
          badge="Komplett løsning"
        />
        
        {/* 2x2 Grid Layout */}
        <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12 items-stretch">
          {homeContent.featureGroups.map((group, groupIdx) => {
            const Icon = groupIcons[groupIdx] || Calendar;
            
            return (
              <div 
                key={group.title} 
                className="
                  bg-white
                  rounded-xl border-2 border-sky2/50 p-6 sm:p-8 
                  shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan
                  transition-all duration-300 ease-smooth group cursor-pointer
                  overflow-hidden h-full flex flex-col
                "
              >
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                    <Icon className="text-white" size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy group-hover:text-primary transition-colors duration-180">
                      {group.title}
                    </h3>
                    <p className="text-sm text-navy/60 mt-1 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-cyan" />
                      {group.items.length} funksjoner
                    </p>
                  </div>
                </div>
                
                {/* Feature list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                  {group.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2.5 text-navy group/item"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                        <Check 
                          className="text-cyan" 
                          size={14} 
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm sm:text-base font-medium group-hover/item:text-primary transition-colors duration-180">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </StaggerAnimation>
        
        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link 
            href="/funksjonalitet"
            className="btn-gradient rounded-lg group"
          >
            Se alle funksjoner i detalj
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
};
