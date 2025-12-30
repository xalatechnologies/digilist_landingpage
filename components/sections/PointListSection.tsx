import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { PointList } from './PointList';

export interface PointListSectionProps {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark';
  columns?: 1 | 2;
  className?: string;
}

export const PointListSection: React.FC<PointListSectionProps> = ({
  id,
  title,
  subtitle,
  points,
  variant = 'default',
  columns = 2,
  className = '',
}) => {
  return (
    <Section variant={variant} id={id} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      <PointList points={points} columns={columns} />
    </Section>
  );
};

