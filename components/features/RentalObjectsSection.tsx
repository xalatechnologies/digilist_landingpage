'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';

export interface RentalObject {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
  capacity?: string;
  colorScheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
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
      colorScheme: {
        primary: '#8B5CF6', // Purple for culture/arts
        secondary: '#C4B5FD',
        accent: '#7C3AED',
      },
    },
    {
      id: 'flytende-badstua-ulefoss',
      title: 'Flytende badstua Ulefoss',
      description: 'Velkommen til Flytende folkebadstua på Ulefoss. Badstua tilbyr en unik opplevelse med sin plassering på vannet.',
      image: '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
      location: 'Ulefoss',
      colorScheme: {
        primary: '#0EA5E9', // Blue for water/sauna
        secondary: '#BAE6FD',
        accent: '#0284C7',
      },
    },
    {
      id: 'gyllenborg-idrettshall',
      title: 'Gyllenborg idrettshall',
      description: 'Gyllenborg idrettshall er en moderne og allsidig hall i Tromsø, perfekt for ulike idrettsaktiviteter og arrangementer.',
      image: '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
      location: 'Tromsø',
      colorScheme: {
        primary: '#10B981', // Green for sports/activity
        secondary: '#A7F3D0',
        accent: '#059669',
      },
    },
  ];

  const handleCardClick = (objectId: string) => {
    // Link to SaaS application with the rental object ID
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rentalObjects.map((object) => {
          const colors = object.colorScheme || {
            primary: '#0051BE',
            secondary: '#BAE6FD',
            accent: '#003E91',
          };
          
          return <RentalObjectCard
            key={object.id}
            object={object}
            colors={colors}
            imageUrl={object.image}
            onCardClick={handleCardClick}
          />;
        })}
      </div>
    </Section>
  );
};

// Separate component to handle image state per card
const RentalObjectCard: React.FC<{
  object: RentalObject;
  colors: { primary: string; secondary: string; accent: string };
  imageUrl: string;
  onCardClick: (id: string) => void;
}> = ({ object, colors, imageUrl, onCardClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Handle image loading errors gracefully
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      onClick={() => onCardClick(object.id)}
      className="group bg-blue-50 hover:bg-blue-100 border-2 border-gray-200 rounded-digdir overflow-hidden cursor-pointer shadow-md hover:border-action-blue hover:shadow-2xl hover:-translate-y-[4px] transition-all duration-300 ease-out"
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
      {/* Image from SaaS application */}
      <div 
        className="relative w-full h-48 overflow-hidden"
        style={{
          background: imageError 
            ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
            : 'transparent',
          position: 'relative',
          minHeight: '192px',
        }}
      >
        {!imageError ? (
          <>
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={object.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={handleImageError}
                onLoad={handleImageLoad}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={false}
                priority={false}
              />
            </div>
            {/* Overlay with click indicator */}
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-white/90 rounded-digdir flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                    <ArrowRight className="text-action-blue" size={24} aria-hidden="true" />
                  </div>
                  <p className="text-xs text-white font-medium drop-shadow-lg">Klikk for å se</p>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback gradient when image fails to load */
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
              <div className="text-center p-4">
                <div 
                  className="w-16 h-16 rounded-digdir flex items-center justify-center mx-auto mb-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <ArrowRight className="text-white" size={24} aria-hidden="true" />
                </div>
                <p className="text-xs text-white font-medium drop-shadow-sm">Klikk for å se</p>
              </div>
            </div>
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 30% 50%, ${colors.secondary} 0%, transparent 50%)`,
              }}
            ></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
        <div className="flex items-start justify-between mb-3">
          <Heading level={3} className="text-gray-900 group-hover:text-action-blue transition-colors duration-300 font-semibold">
            <span className="group-hover:underline decoration-2 underline-offset-4 transition-all duration-300">
              {object.title}
            </span>
          </Heading>
          <ArrowRight 
            className="text-action-blue group-hover:translate-x-1 transition-transform duration-300 shrink-0 ml-2" 
            size={20} 
            aria-hidden="true" 
          />
        </div>
        
        {(object.location || object.capacity) && (
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-600 font-medium">
            {object.location && (
              <span>{object.location}</span>
            )}
            {object.capacity && (
              <span className="before:content-['•'] before:mr-3">{object.capacity}</span>
            )}
          </div>
        )}
        
        <Text variant="body" className="text-gray-700 leading-relaxed">
          {object.description}
        </Text>
      </div>
    </div>
  );
};

