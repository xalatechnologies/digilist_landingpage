'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';
import { getCategoryColors, type ColorScheme } from '@/lib/design-tokens';

export interface RentalObject {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
  capacity?: string;
  colorScheme?: ColorScheme;
}

export const RentalObjectsSection: React.FC = () => {
  const saasAppUrl = process.env.NEXT_PUBLIC_SAAS_APP_URL || 'https://app.digilist.no';
  
  const rentalObjects: RentalObject[] = [
    {
      id: 'kipo-kultursal',
      title: 'KIPO kultursal',
      description: 'KIPO er en moderne kultursal på Askøy med 339 seter. En moderne og godt utstyrt sal som passer perfekt for kulturelle arrangementer, konserter, forestillinger og møter.',
      image: '/images/utleieobjekter/kipo-kultursal.jpg',
      location: 'Askøy',
      capacity: '339 seter',
      colorScheme: 'culture',
    },
    {
      id: 'flytende-badstua-ulefoss',
      title: 'Flytende badstua Ulefoss',
      description: 'Velkommen til Flytende folkebadstua på Ulefoss. Badstua tilbyr en unik opplevelse med sin plassering på vannet.',
      image: '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
      location: 'Ulefoss',
      colorScheme: 'water',
    },
    {
      id: 'gyllenborg-idrettshall',
      title: 'Gyllenborg idrettshall',
      description: 'Gyllenborg idrettshall er en moderne og allsidig hall i Tromsø, perfekt for ulike idrettsaktiviteter og arrangementer.',
      image: '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
      location: 'Tromsø',
      colorScheme: 'sports',
    },
  ];

  const handleCardClick = (objectId: string) => {
    if (typeof window !== 'undefined') {
      window.open(`${saasAppUrl}/utleieobjekter/${objectId}`, '_blank');
    }
  };

  return (
    <Section variant="default" id="utleieobjekter">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Sjekk ut utleieobjektene i Digilist
        </Heading>
        <Text variant="lead" className="max-w-2xl mx-auto">
          Utforsk våre ledige lokaler og book direkte i applikasjonen vår.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rentalObjects.map((object) => {
          return (
            <RentalObjectCard
              key={object.id}
              object={object}
              colorScheme={object.colorScheme || 'default'}
              imageUrl={object.image}
              onCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </Section>
  );
};

// Separate component to handle image state per card
const RentalObjectCard: React.FC<{
  object: RentalObject;
  colorScheme: ColorScheme;
  imageUrl: string;
  onCardClick: (id: string) => void;
}> = ({ object, colorScheme, imageUrl, onCardClick }) => {
  const colors = getCategoryColors(colorScheme);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
    setImageLoading(true);
  }, [imageUrl]);
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    setImageLoading(false);
  };
  
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageLoading(false);
  };

  return (
    <div
      onClick={() => onCardClick(object.id)}
      className="group bg-gradient-to-br from-white to-sky2/20 border-2 border-sky2/50 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:border-cyan hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-smooth"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCardClick(object.id);
        }
      }}
      aria-label={`Se detaljer for ${object.title}`}
    >
      {/* Image */}
      <div 
        className="relative w-full h-48 overflow-hidden bg-surface-2"
        style={imageError ? {
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
        } : {}}
      >
        {!imageError ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-border to-border-light animate-pulse flex items-center justify-center">
                <div className="text-text-muted text-sm">Laster bilde...</div>
              </div>
            )}
            
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={object.title}
                fill
                className={`object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={true}
                priority={false}
              />
            </div>
            
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-180 pointer-events-none z-10">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-surface/90 rounded-md flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                    <ArrowRight className="text-primary" size={24} aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-medium drop-shadow-lg">Klikk for å se</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-2 backdrop-blur-sm bg-white/30">
                  <ArrowRight className="text-white" size={24} aria-hidden="true" />
                </div>
                <p className="text-xs text-white font-medium drop-shadow-sm">Klikk for å se</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Heading level={3} className="text-navy group-hover:text-primary transition-colors duration-180 font-semibold">
            <span className="group-hover:underline decoration-2 underline-offset-4">
              {object.title}
            </span>
          </Heading>
          <ArrowRight 
            className="text-cyan group-hover:translate-x-1 transition-transform duration-180 shrink-0 ml-2" 
            size={20} 
            aria-hidden="true" 
          />
        </div>
        
        {(object.location || object.capacity) && (
          <div className="flex items-center gap-3 mb-3 text-sm text-navy/60 font-medium">
            {object.location && <span>{object.location}</span>}
            {object.capacity && <span className="before:content-['•'] before:mr-3">{object.capacity}</span>}
          </div>
        )}
        
        <Text variant="body" className="leading-relaxed text-navy/70">
          {object.description}
        </Text>
      </div>
    </div>
  );
};
