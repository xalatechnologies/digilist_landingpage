import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { CardGrid } from './CardGrid';
import type { CardItem } from './CardGrid';

export interface StandardSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: CardItem[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const StandardSection: React.FC<StandardSectionProps> = ({
  id,
  title,
  subtitle,
  items,
  variant = 'default',
  columns = 3,
  className = '',
}) => {
  return (
    <Section variant={variant} id={id} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      <CardGrid items={items} columns={columns} />
    </Section>
  );
};

