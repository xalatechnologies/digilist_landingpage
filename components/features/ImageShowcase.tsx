'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui/ScrollAnimation';
import Link from 'next/link';

interface ImageShowcaseProps {
  variant?: 'left' | 'right';
  sectionVariant?: 'default' | 'tinted' | 'gradient' | 'alt' | 'rich-primary' | 'rich-cyan' | 'rich-sky';
  badge?: string;
  title: string;
  description: string;
  features?: string[];
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
}

export const ImageShowcase: React.FC<ImageShowcaseProps> = ({
  variant = 'left',
  sectionVariant = 'default',
  badge,
  title,
  description,
  features = [],
  image,
  imageAlt,
  ctaText,
  ctaHref = '/demo',
}) => {
  const imageContent = (
    <ScrollAnimation variant={variant === 'left' ? 'fadeRight' : 'fadeLeft'} delay={200}>
      <div className="relative group">
        {/* Main image container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
          {/* Image with taller aspect ratio to maintain height */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-navy/10" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );

  const textContent = (
    <ScrollAnimation variant={variant === 'left' ? 'fadeLeft' : 'fadeRight'} delay={100}>
      <div>
        {badge && (
          <ScrollAnimation variant="fade" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
          </ScrollAnimation>
        )}
        
        <Heading level={2} className="mb-6 text-2xl sm:text-3xl md:text-4xl text-navy">
          {title}
        </Heading>
        
        <Text variant="body" className="text-navy/70 mb-8 text-lg leading-relaxed">
          {description}
        </Text>
        
        {features.length > 0 && (
          <StaggerAnimation staggerDelay={0.1} className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-success" />
                </div>
                <span className="text-navy">{feature}</span>
              </div>
            ))}
          </StaggerAnimation>
        )}
        
        {ctaText && (
          <ScrollAnimation variant="scale" delay={300}>
            <Link href={ctaHref}>
              <Button variant="gradient" size="lg" className="group">
                {ctaText}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollAnimation>
        )}
      </div>
    </ScrollAnimation>
  );

  return (
    <Section variant={sectionVariant} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {variant === 'left' ? (
          <>
            <div className="order-2 lg:order-1 lg:col-span-5">{imageContent}</div>
            <div className="order-1 lg:order-2 lg:col-span-7">{textContent}</div>
          </>
        ) : (
          <>
            <div className="lg:col-span-7">{textContent}</div>
            <div className="lg:col-span-5">{imageContent}</div>
          </>
        )}
      </div>
    </Section>
  );
};

