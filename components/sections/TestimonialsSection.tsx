import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from './SectionHeader';
import { TestimonialCard } from '@/components/features/TestimonialCard';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  variant?: 'default' | 'tinted' | 'gradient' | 'dark';
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
  variant = 'default',
  className = '',
}) => {
  return (
    <Section variant={variant} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </Section>
  );
};

