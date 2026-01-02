'use client';

import React, { useState } from 'react';
import { Shield, Eye, Headphones, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Text } from '@/components/ui/Typography';
import { homeContent } from '@/lib/homeContent';

const iconMap = [Shield, Eye, Headphones];

export const OperationsTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section variant="default" className="bg-white" id="trygg-drift">
      <div className="relative">
        <SectionHeader
          title="Trygg drift"
          subtitle="Sikkerhet, tilgjengelighet og support på høyt nivå"
        />
        
        <div className="mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex gap-3">
              {homeContent.operationsTabs.map((tab, idx) => {
                const Icon = iconMap[idx] || Shield;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`
                      px-6 py-3 rounded-lg font-semibold flex items-center gap-2 
                      transition-all duration-300 ease-smooth min-h-[44px] focus-ring
                      ${isActive 
                        ? 'bg-cyan text-white shadow-lg' 
                        : 'bg-white text-navy border border-sky2/20 hover:border-cyan/50 hover:shadow-md'
                      }
                    `}
                    aria-pressed={isActive}
                    aria-label={`Vis ${tab.title}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content - 2 columns */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {homeContent.operationsTabs[activeTab]?.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-cyan mt-0.5 shrink-0" strokeWidth={2.5} />
                  <Text variant="body" className="text-base text-navy/80 leading-relaxed flex-1">
                    {point}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
