'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { Card } from '@/components/ui/Card';
import { Heading, Text } from '@/components/ui/Typography';
import { Key, FileText, Settings, CheckCircle2 } from 'lucide-react';
import type { CategoryItem } from './CategoryCardGrid';
import { CategoryCardGrid } from './CategoryCardGrid';

export interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  categories: CategoryItem[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark';
  columns?: 1 | 2 | 3;
  className?: string;
  image?: string;
  imageAlt?: string;
}

const tabConfig = [
  { 
    id: 0, 
    icon: Key, 
    label: 'Autentisering',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
    activeBg: 'bg-primary',
    image: '/images/utleieobjekter/kipo-kultursal.jpg',
  },
  { 
    id: 1, 
    icon: FileText, 
    label: 'Dokumentasjon',
    bgColor: 'bg-cyan/10',
    iconColor: 'text-cyan',
    activeBg: 'bg-cyan',
    image: '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  },
  { 
    id: 2, 
    icon: Settings, 
    label: 'Drift',
    bgColor: 'bg-success/10',
    iconColor: 'text-success',
    activeBg: 'bg-success',
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
        <div className="bg-success/5 rounded-2xl p-6 sm:p-8 md:p-10">
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
    <Section variant={variant} id={id} className={className}>
      <div className="bg-success/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader title={title} subtitle={subtitle} />
        
        {/* Category tabs - Compact cards */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {/* Tab 1: Autentisering */}
        <button
          onClick={() => setActiveTab(0)}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg
            transition-all duration-200 cursor-pointer
            ${activeTab === 0 
              ? 'bg-primary text-white shadow-lg' 
              : 'bg-white shadow-lg border-2 border-sky2/50 hover:shadow-xl hover:-translate-y-2 hover:border-cyan'
            }
          `}
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeTab === 0 ? 'bg-white/20' : 'bg-primary/10'}`}>
            <Key size={18} className={activeTab === 0 ? 'text-white' : 'text-primary'} />
          </div>
          <div className="text-left">
            <div className={`text-sm font-bold ${activeTab === 0 ? 'text-white' : 'text-navy'}`}>Autentisering</div>
            <div className={`text-xs ${activeTab === 0 ? 'text-white/70' : 'text-navy/50'}`}>ID-porten, SSO, MFA</div>
          </div>
        </button>

        {/* Tab 2: Dokumentasjon */}
        <button
          onClick={() => setActiveTab(1)}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg
            transition-all duration-200 cursor-pointer
            ${activeTab === 1 
              ? 'bg-cyan text-white shadow-lg' 
              : 'bg-white shadow-lg border-2 border-sky2/50 hover:shadow-xl hover:-translate-y-2 hover:border-cyan'
            }
          `}
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeTab === 1 ? 'bg-white/20' : 'bg-cyan/10'}`}>
            <FileText size={18} className={activeTab === 1 ? 'text-white' : 'text-cyan'} />
          </div>
          <div className="text-left">
            <div className={`text-sm font-bold ${activeTab === 1 ? 'text-white' : 'text-navy'}`}>Dokumentasjon</div>
            <div className={`text-xs ${activeTab === 1 ? 'text-white/70' : 'text-navy/50'}`}>WCAG, GDPR, DPA</div>
          </div>
        </button>

        {/* Tab 3: Drift */}
        <button
          onClick={() => setActiveTab(2)}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg
            transition-all duration-200 cursor-pointer
            ${activeTab === 2 
              ? 'bg-success text-white shadow-lg' 
              : 'bg-white shadow-lg border-2 border-sky2/50 hover:shadow-xl hover:-translate-y-2 hover:border-cyan'
            }
          `}
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${activeTab === 2 ? 'bg-white/20' : 'bg-success/10'}`}>
            <Settings size={18} className={activeTab === 2 ? 'text-white' : 'text-success'} />
          </div>
          <div className="text-left">
            <div className={`text-sm font-bold ${activeTab === 2 ? 'text-white' : 'text-navy'}`}>Drift</div>
            <div className={`text-xs ${activeTab === 2 ? 'text-white/70' : 'text-navy/50'}`}>Support, vedlikehold</div>
          </div>
        </button>
      </div>
      
      {/* Split layout: Card on left, Image on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left - Category Card */}
        <Card variant="gradient" className="bg-white">
          <Card.Block className="py-8 px-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl ${activeConfig.bgColor} flex items-center justify-center shadow-sm`}>
                <Icon size={28} className={activeConfig.iconColor} />
              </div>
              <Heading level={3} className="text-xl sm:text-2xl text-navy">
                {activeCategory.category}
              </Heading>
            </div>
            <ul className="space-y-4">
              {activeCategory.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className={`${activeConfig.iconColor} mt-0.5 shrink-0`} />
                  <Text variant="body" className="text-base text-navy/70">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Card.Block>
        </Card>
        
        {/* Right - Image */}
        <div className="relative hidden lg:block h-full">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
            <img 
              src={activeConfig.image} 
              alt={activeCategory.category}
              className="w-full h-full min-h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
};

