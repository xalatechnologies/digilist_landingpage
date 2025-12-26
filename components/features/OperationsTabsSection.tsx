'use client';

import React, { useState } from 'react';
import { Shield, Eye, Headphones } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { PointList } from '@/components/sections/PointList';
import { homeContent } from '@/lib/homeContent';

const iconMap = [Shield, Eye, Headphones];

export const OperationsTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section variant="rich-sky" id="trygg-drift">
      <div className="bg-cyan/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title="Trygg drift"
          subtitle="Sikkerhet, tilgjengelighet og support på høyt nivå"
        />
        
        <div className="mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-surface p-1.5 rounded-md shadow-soft flex gap-2 ring-1 ring-border">
              {homeContent.operationsTabs.map((tab, idx) => {
                const Icon = iconMap[idx] || Shield;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all duration-180 ease-smooth tracking-tight min-h-[44px] focus-ring ${
                      activeTab === idx 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-transparent text-text-secondary hover:text-navy hover:bg-surface-2'
                    }`}
                    aria-pressed={activeTab === idx}
                    aria-label={`Vis ${tab.title}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <PointList
              points={homeContent.operationsTabs[activeTab]?.points || []}
              columns={1}
              showCard={true}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
