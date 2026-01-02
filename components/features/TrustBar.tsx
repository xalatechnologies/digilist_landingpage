'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Heading, Text } from '@/components/ui/Typography';
import { homeContent } from '@/lib/homeContent';

export const TrustBar: React.FC = () => {
  if (!homeContent.partners || homeContent.partners.length === 0) {
    return null;
  }

  // Duplicate partners multiple times for seamless infinite scroll
  const duplicatedPartners = [...homeContent.partners, ...homeContent.partners, ...homeContent.partners];

  return (
    <div className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <Heading level={2} className="mb-3 text-2xl md:text-3xl text-navy">
            Partnere
          </Heading>
          <Text variant="body" className="text-base text-navy/70 max-w-2xl mx-auto">
            Vi samarbeider med ledende teknologipartnere
          </Text>
        </div>
        
        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden mask-gradient">
          <div className="flex gap-3 sm:gap-4 animate-scroll">
            {duplicatedPartners.map((partner, index) => {
              const isExternal = partner.url && partner.url.startsWith('http');
              
              const badgeContent = (
                <div className="group flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0 whitespace-nowrap">
                  <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors duration-180">
                    {partner.name}
                  </span>
                  {isExternal && (
                    <ExternalLink size={14} className="text-cyan group-hover:text-primary transition-colors duration-180 shrink-0" />
                  )}
                </div>
              );

              if (isExternal) {
                return (
                  <a
                    key={`${partner.id}-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    {badgeContent}
                  </a>
                );
              }
              
              return (
                <Link
                  key={`${partner.id}-${index}`}
                  href={partner.url || '#'}
                  className="shrink-0"
                >
                  {badgeContent}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
