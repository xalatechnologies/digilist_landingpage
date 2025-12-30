'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';

export interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  variant?: 'default' | 'tinted' | 'gradient' | 'rich-primary' | 'rich-cyan' | 'rich-sky';
  className?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  className = '',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <Section variant={variant} className={className}>
      <div className="text-center px-4 sm:px-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface ring-1 ring-cyan/20 shadow-sm mb-6">
          <Sparkles size={16} className="text-cyan" />
          <span className="text-sm font-medium text-navy">Kom i gang i dag</span>
        </div>
        
        <Heading level={2} className="mb-4 sm:mb-6">
          {title}
        </Heading>
        <Text variant="lead" className="max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-xl">
          {description}
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={onPrimaryClick} 
            className="w-full sm:w-auto"
          >
            {primaryCta}
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={onSecondaryClick} 
            className="w-full sm:w-auto"
          >
            {secondaryCta}
          </Button>
        </div>
        
        {/* Trust indicator */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-text-muted">Gratis demo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-sm text-text-muted">Ingen binding</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
