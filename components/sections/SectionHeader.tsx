'use client';

import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  badge?: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
  badge,
  align = 'center',
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0 max-w-3xl ${alignmentClasses} ${className}`}>
      {badge && (
        <ScrollAnimation variant="fade" delay={0}>
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-3 ring-1 ring-cyan/20 mb-4`}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-cyan">{badge}</span>
          </div>
        </ScrollAnimation>
      )}
      <ScrollAnimation variant="fadeUp" delay={50}>
        <Heading level={2} className="text-2xl sm:text-3xl lg:text-[2.5rem]">
          {title}
        </Heading>
      </ScrollAnimation>
      {subtitle && (
        <ScrollAnimation variant="fadeUp" delay={100}>
          <Text variant="lead" className="max-w-2xl mt-3 sm:mt-4 text-base sm:text-xl" style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>
            {subtitle}
          </Text>
        </ScrollAnimation>
      )}
    </div>
  );
};
