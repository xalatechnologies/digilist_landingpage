'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CreditCard, Shield, Palette, Check, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

const groupIcons = [Calendar, CreditCard, Shield, Palette];

export const FeatureGroupsSection: React.FC = () => {
  return (
    <Section variant="default" className="bg-white" id="funksjoner">
      <div className="relative">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/20 ring-1 ring-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-cyan">Komplett løsning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-navy mb-3 sm:mb-4">
            Funksjoner
          </h2>
          <p className="text-base sm:text-xl text-navy/70 max-w-2xl mx-auto">
            Alt du trenger for å administrere bookinger, ressurser og arrangementer
          </p>
        </div>
        
        {/* 2x2 Grid Layout */}
        <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12 items-stretch">
          {homeContent.featureGroups.map((group, groupIdx) => {
            const Icon = groupIcons[groupIdx] || Calendar;
            
            return (
              <div 
                key={group.title} 
                className="
                  bg-white
                  rounded-lg border border-sky2/20 p-6 sm:p-8
                  shadow-lg hover:shadow-xl hover:border-cyan/50
                  transition-all duration-300 ease-smooth group cursor-pointer
                  overflow-hidden h-full flex flex-col
                "
              >
                {/* Header with icon and title */}
                <div className="flex items-start gap-3 mb-6 flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                    <Icon className="text-cyan" size={20} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg sm:text-xl font-bold text-navy leading-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>
                
                {/* Feature list */}
                <ul className="grid grid-cols-1 gap-3 flex-1">
                  {group.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2.5 text-navy"
                    >
                      <div className="w-4 h-4 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                        <Check 
                          className="text-cyan" 
                          size={12} 
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-base text-navy/70 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group"
          >
            Se alle funksjoner i detalj
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
};
