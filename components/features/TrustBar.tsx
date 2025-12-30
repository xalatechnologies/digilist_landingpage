'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Heading, Text } from '@/components/ui/Typography';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

export const TrustBar: React.FC = () => {
  if (!homeContent.partners || homeContent.partners.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <Heading level={2} className="mb-3 text-2xl md:text-3xl text-navy">
            Partnere
          </Heading>
          <Text variant="body" className="text-base text-navy/70 max-w-2xl mx-auto">
            Vi samarbeider med ledende teknologipartnere
          </Text>
        </div>
        
        <StaggerAnimation staggerDelay={0.1} className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {homeContent.partners.map((partner) => {
            const isExternal = partner.url && partner.url.startsWith('http');
            
            if (isExternal) {
              return (
                <a
                  key={partner.id}
                  href={partner.url}
                  className="group flex items-center gap-2 px-5 py-3 bg-white rounded-lg border-2 border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-1 transition-all duration-300 ease-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-base font-semibold text-navy group-hover:text-primary transition-colors duration-180">
                    {partner.name}
                  </span>
                  <ExternalLink size={16} className="text-cyan group-hover:text-primary transition-colors duration-180" />
                </a>
              );
            }
            
            return (
              <Link
                key={partner.id}
                href={partner.url || '#'}
                className="group flex items-center gap-2 px-5 py-3 bg-white rounded-lg border-2 border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-1 transition-all duration-300 ease-smooth"
              >
                <span className="text-base font-semibold text-navy group-hover:text-primary transition-colors duration-180">
                  {partner.name}
                </span>
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </div>
  );
};
