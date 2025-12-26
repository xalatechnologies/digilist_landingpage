'use client';

import React from 'react';
import { CreditCard, FileText, Lightbulb, Settings, LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { FeatureBlobCard } from './FeatureBlobCard';

export const FeatureOverviewSection: React.FC = () => {
  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    blobColor: string;
  }> = [
    {
      icon: CreditCard,
      title: 'Enkel betaling',
      description: 'Leietaker betaler enkelt med kort, Vipps eller faktura',
      blobColor: 'blob-blue',
    },
    {
      icon: FileText,
      title: 'Bedre kontroll',
      description: 'Utleier får oversikt over alle leietakere og bookinger',
      blobColor: 'blob-green',
    },
    {
      icon: Lightbulb,
      title: 'Brukes til hva som helst',
      description: 'Det er bare fantasien som setter begrensninger',
      blobColor: 'blob-purple',
    },
    {
      icon: Settings,
      title: 'Automatiserte prosesser',
      description: 'Alle prosesser kan gjøres 100% automatisert',
      blobColor: 'blob-amber',
    },
  ];

  return (
    <Section variant="tinted" id="feature-overview">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        {features.map((feature, idx) => (
          <FeatureBlobCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            blobColor={feature.blobColor}
          />
        ))}
      </div>
    </Section>
  );
};

