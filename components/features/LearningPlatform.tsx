'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  CreditCard, 
  Lock, 
  BookOpen, 
  Play, 
  Clock,
  Settings,
  BarChart3,
  X,
  LucideIcon
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

export interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: LucideIcon;
  categoryColor: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: 'calendar-overview',
    title: 'Oversikt over kalendersystemet',
    description: 'Forstå hvordan Digilist kalender fungerer og integrerer med eksisterende systemer som Outlook.',
    category: 'Felles Kalender',
    categoryIcon: Calendar,
    categoryColor: 'bg-blue-500',
    duration: '5 min',
  },
  {
    id: 'calendar-setup',
    title: 'Oppsett og konfigurasjon',
    description: 'Slik setter du opp kalenderen for første gang og kobler til eksterne systemer.',
    category: 'Felles Kalender',
    categoryIcon: Calendar,
    categoryColor: 'bg-blue-500',
    duration: '8 min',
  },
  {
    id: 'invoice-process',
    title: 'Automatisk fakturering',
    description: 'Forstå hvordan automatisk fakturering fungerer i Digilist fra booking til betaling.',
    category: 'Automatisk Faktura',
    categoryIcon: CreditCard,
    categoryColor: 'bg-green-500',
    duration: '6 min',
  },
  {
    id: 'visma-integration',
    title: 'Visma-integrasjon',
    description: 'Slik kobler du Digilist til ditt Visma-system for automatisk fakturaoverføring.',
    category: 'Automatisk Faktura',
    categoryIcon: CreditCard,
    categoryColor: 'bg-green-500',
    duration: '10 min',
  },
  {
    id: 'digital-keys',
    title: 'Digitale nøkler',
    description: 'Lær hvordan digitale nøkler fungerer og sendes automatisk til leietakere via SMS.',
    category: 'Adgangskontroll',
    categoryIcon: Lock,
    categoryColor: 'bg-purple-500',
    duration: '7 min',
  },
  {
    id: 'smartlock-setup',
    title: 'Oppsett av smartlåser',
    description: 'Slik kobler du smartlåser til Digilist-systemet for automatisk adgangskontroll.',
    category: 'Adgangskontroll',
    categoryIcon: Lock,
    categoryColor: 'bg-purple-500',
    duration: '9 min',
  },
  {
    id: 'booking-process',
    title: 'Bookingprosessen',
    description: 'Forstå hele bookingflyten fra søknad til godkjenning for både utleiere og leietakere.',
    category: 'Booking og Reservasjoner',
    categoryIcon: BookOpen,
    categoryColor: 'bg-orange-500',
    duration: '8 min',
  },
  {
    id: 'reports-overview',
    title: 'Rapporter og analyse',
    description: 'Se hvilke rapporter som er tilgjengelige og hvordan du analyserer bruksmønstre.',
    category: 'Rapporter og Analyse',
    categoryIcon: BarChart3,
    categoryColor: 'bg-indigo-500',
    duration: '5 min',
  },
  {
    id: 'settings-basic',
    title: 'Grunnleggende innstillinger',
    description: 'Sett opp systemet for første gang med organisasjonsinformasjon og brukerrettigheter.',
    category: 'Innstillinger',
    categoryIcon: Settings,
    categoryColor: 'bg-gray-600',
    duration: '12 min',
  },
];

export const LearningPlatform: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set((videos || []).map(v => v.category)));
  
  const filteredVideos = useMemo(() => {
    if (!videos || videos.length === 0) {
      return [];
    }
    if (!selectedCategory) {
      return videos;
    }
    return videos.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);
  
  const handleCategoryClick = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  // Safety check after hooks
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <Text variant="body" className="text-text-secondary">
          Ingen videoer tilgjengelig.
        </Text>
      </div>
    );
  }

  // Ensure categories and filteredVideos are valid
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <Text variant="body" className="text-text-secondary">
          Ingen kategorier tilgjengelig.
        </Text>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-16 pb-8 border-b border-gray-200">
        <Heading level={2} className="mb-6 text-3xl md:text-4xl font-bold text-navy-base">
          Læringsmoduler
        </Heading>
        <Text variant="lead" className="max-w-3xl mx-auto text-text-secondary text-lg leading-relaxed">
          Utforsk våre omfattende læringsressurser organisert etter funksjonalitet. 
          Hver video inneholder detaljerte forklaringer og praktiske eksempler.
        </Text>
      </div>

      {/* Category Filter Section */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => handleCategoryClick(null)}
            className={`px-5 py-3 rounded-digdir font-semibold text-sm transition-all min-h-[44px] ${
              selectedCategory === null
                ? 'bg-green-600 text-white shadow-lg hover:bg-green-700'
                : 'bg-white text-navy-base border-2 border-gray-200 hover:border-green-500 hover:bg-green-50'
            }`}
          >
            Alle kategorier
          </button>
          {categories && categories.length > 0 && categories.map((category) => {
            const categoryVideo = videos?.find(v => v.category === category);
            if (!categoryVideo) return null;
            const CategoryIcon = categoryVideo.categoryIcon;
            if (!CategoryIcon) return null;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-3 rounded-digdir font-semibold text-sm transition-all flex items-center gap-2 min-h-[44px] ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg hover:bg-green-700'
                    : 'bg-white text-navy-base border-2 border-gray-200 hover:border-green-500 hover:bg-green-50'
                }`}
              >
                <CategoryIcon size={18} aria-hidden="true" />
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="max-w-md mx-auto">
              <Text variant="body" className="text-text-secondary text-lg">
                Ingen videoer funnet i denne kategorien.
              </Text>
            </div>
          </div>
        ) : (
          filteredVideos.map((video) => {
            const CategoryIcon = video.categoryIcon;
            return (
              <Card
                key={video.id}
                hoverable
                variant="gradient"
                onClick={() => setSelectedVideo(video)}
                className="cursor-pointer overflow-hidden h-full flex flex-col"
              >
                <Card.Block className="flex flex-col h-full">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-surface-2 to-surface-3 rounded-lg mb-5 overflow-hidden border-2 border-sky2/50 group-hover:border-cyan transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl text-primary group-hover:scale-105 transition-transform">
                        <Play size={40} fill="currentColor" />
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="cyan" 
                        className="text-xs bg-white/95 backdrop-blur-sm shadow-sm"
                      >
                        <CategoryIcon size={14} className="mr-1.5" aria-hidden="true" />
                        <span className="font-medium">{video.category}</span>
                      </Badge>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-navy/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium shadow-lg">
                        <Clock size={14} aria-hidden="true" />
                        {video.duration}
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="flex-1 flex flex-col">
                    <Heading level={3} className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {video.title}
                    </Heading>
                    <Text variant="body" className="text-base text-navy/70 leading-relaxed flex-1">
                      {video.description}
                    </Text>
                  </div>
                </Card.Block>
              </Card>
            );
          })
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <Card.Block className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-0 right-0 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-surface-2 transition-colors"
                    aria-label="Lukk video"
                  >
                    <X size={20} className="text-navy" aria-hidden="true" />
                  </button>

                  {/* Video Player */}
                  <div className="relative aspect-video bg-gradient-to-br from-surface-2 to-surface-3 rounded-lg mb-6 overflow-hidden border-2 border-border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl text-primary">
                        <Play size={48} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-sm font-semibold text-navy">
                          {selectedVideo.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="px-2 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-primary to-cyan p-2 rounded-lg">
                        {(() => {
                          const Icon = selectedVideo.categoryIcon;
                          return <Icon className="text-white" size={20} aria-hidden="true" />;
                        })()}
                      </div>
                      <div>
                        <Badge variant="cyan" className="text-xs mb-1">
                          {selectedVideo.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Clock size={14} aria-hidden="true" />
                          <span>{selectedVideo.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Heading level={2} className="text-2xl font-bold text-navy mb-3">
                      {selectedVideo.title}
                    </Heading>
                    
                    <Text variant="lead" className="text-navy/70 leading-relaxed">
                      {selectedVideo.description}
                    </Text>
                  </div>
                </Card.Block>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
