'use client';

import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/ui/Typography';
import { StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { homeContent } from '@/lib/homeContent';

export const TrustBar: React.FC = () => {
  if (!homeContent.partners || homeContent.partners.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-sky2/8 via-surface-2 to-primary/3 py-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <Heading level={2} className="mb-2">
            Partnere
          </Heading>
          <p className="text-text-secondary text-base">
            Vi samarbeider med ledende teknologipartnere
          </p>
        </div>
        
        <StaggerAnimation staggerDelay={0.1} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {homeContent.partners.map((partner) => {
            const isExternal = partner.url && partner.url.startsWith('http');
            
            if (isExternal) {
              return (
                <a
                  key={partner.id}
                  href={partner.url}
                  className="link text-lg font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {partner.name}
                </a>
              );
            }
            
            return (
              <Link
                key={partner.id}
                href={partner.url || '#'}
                className="link text-lg font-semibold"
              >
                {partner.name}
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </div>
  );
};
