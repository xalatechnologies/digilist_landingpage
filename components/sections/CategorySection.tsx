'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { Shield, FileText, Headphones, CheckCircle2 } from 'lucide-react';
import type { CategoryItem } from './CategoryCardGrid';
import { CategoryCardGrid } from './CategoryCardGrid';

export interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  categories: CategoryItem[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark' | 'rich-sky';
  columns?: 1 | 2 | 3;
  className?: string;
  image?: string;
  imageAlt?: string;
}

const tabConfig = [
  { 
    id: 0, 
    icon: Shield, 
    label: 'Autentisering',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'ID-porten, SSO, MFA',
    image: '/images/utleieobjekter/kipo-kultursal.jpg',
  },
  { 
    id: 1, 
    icon: FileText, 
    label: 'Dokumentasjon',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'WCAG, GDPR, DPA',
    image: '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  },
  { 
    id: 2, 
    icon: Headphones, 
    label: 'Drift',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    preview: 'Support, vedlikehold',
    image: '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
  },
];

export const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  subtitle,
  categories,
  variant = 'default',
  columns = 3,
  className = '',
  image,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // If no image flag, use simple grid layout
  if (!image) {
    return (
      <Section variant={variant} id={id} className={className}>
        <div className="bg-success/5 rounded-lg p-6 sm:p-8 md:p-10">
          <SectionHeader title={title} subtitle={subtitle} />
          <CategoryCardGrid categories={categories} columns={columns} />
        </div>
      </Section>
    );
  }

  const activeCategory = categories[activeTab];
  const activeConfig = tabConfig[activeTab];
  const Icon = activeConfig.icon;

  return (
    <Section variant="default" className="bg-white" id={id} className={className}>
      <div className="relative">
        <SectionHeader title={title} subtitle={subtitle} />
        
        {/* Category tabs - Selectable options */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {tabConfig.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-lg
                    transition-all duration-300 cursor-pointer min-h-[60px]
                    ${isActive 
                      ? 'bg-cyan text-white shadow-lg shadow-cyan/20' 
                      : 'bg-white text-navy border border-sky2/20 hover:border-cyan/50 hover:shadow-md'
                    }
                  `}
                  aria-pressed={isActive}
                  aria-label={`Velg ${tab.label}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : 'bg-cyan/10'}`}>
                    <TabIcon size={20} className={isActive ? 'text-white' : 'text-cyan'} strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <div className={`text-base font-bold ${isActive ? 'text-white' : 'text-navy'}`}>{tab.label}</div>
                    <div className={`text-xs mt-0.5 ${isActive ? 'text-white/90' : 'text-navy/60'}`}>{tab.preview}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      
      {/* Content Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-sky2/20 shadow-lg p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-16 h-16 rounded-lg ${activeConfig.bgColor} flex items-center justify-center`}>
              <Icon size={32} className={activeConfig.iconColor} strokeWidth={2} />
            </div>
            <Heading level={3} className="text-2xl sm:text-3xl text-navy font-bold">
              {activeCategory.category}
            </Heading>
          </div>
          <ul className="space-y-5">
            {activeCategory.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 size={22} className="text-cyan mt-0.5 shrink-0" strokeWidth={2.5} />
                <Text variant="body" className="text-base text-navy/80 leading-relaxed">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </Section>
  );
};

