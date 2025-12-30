'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Play } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export interface VideoItem {
  title: string;
  desc: string;
  color: string;
}

export const VideoController: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'renter'>('admin');

  const adminVideos: VideoItem[] = [
    { title: "Automatisering av faktura", desc: "Fra booking til Visma med ett klikk.", color: "bg-gradient-to-br from-blue-50 to-blue-100" },
    { title: "Oppsett av adgangskontroll", desc: "Hvordan koble til smartlåser.", color: "bg-gradient-to-br from-gray-50 to-gray-100" },
    { title: "Rapport og analyse", desc: "Se bruksmønster og varmekart.", color: "bg-gradient-to-br from-green-50 to-green-100" }
  ];

  const renterVideos: VideoItem[] = [
    { title: "Booking på 60 sekunder", desc: "Mobilvennlig booking for innbyggere.", color: "bg-gradient-to-br from-purple-50 to-purple-100" },
    { title: "Min Side oversikt", desc: "Endre og avbestille reservasjoner.", color: "bg-gradient-to-br from-amber-50 to-amber-100" }
  ];

  const currentVideos = activeTab === 'admin' ? adminVideos : renterVideos;

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">
          Velg visning
        </Heading>
        <Text variant="lead" className="max-w-2xl mx-auto text-text-secondary">
          Se hvordan Digilist fungerer for både kommunen og innbyggerne.
        </Text>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1.5 rounded-digdir shadow-md flex gap-2 border-2 border-gray-200">
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-3 rounded-digdir font-semibold flex items-center gap-2 transition-all tracking-tight min-h-[44px] ${
              activeTab === 'admin' 
                ? 'bg-action-blue text-white shadow-sm' 
                : 'bg-transparent text-text-secondary hover:text-navy-base hover:bg-zebra-tint'
            }`}
            aria-pressed={activeTab === 'admin'}
            aria-label="Vis videoer for kommunen (admin)"
          >
            <Building2 size={18} aria-hidden="true" />
            For Kommunen
          </button>
          <button
            onClick={() => setActiveTab('renter')}
            className={`px-6 py-3 rounded-digdir font-semibold flex items-center gap-2 transition-all tracking-tight min-h-[44px] ${
              activeTab === 'renter' 
                ? 'bg-action-blue text-white shadow-sm' 
                : 'bg-transparent text-text-secondary hover:text-navy-base hover:bg-zebra-tint'
            }`}
            aria-pressed={activeTab === 'renter'}
            aria-label="Vis videoer for innbygger (leietaker)"
          >
            <Users size={18} aria-hidden="true" />
            For Innbygger
          </button>
        </div>
      </div>

      {/* Video Grid with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentVideos.map((video, idx) => (
            <Card key={idx} hoverable variant="gradient" className="cursor-pointer">
              <Card.Block>
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-surface-2 to-sky2/30 rounded-lg border-2 border-sky2/50 overflow-hidden mb-4 group-hover:border-cyan transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform text-primary" aria-hidden="true">
                      <Play size={40} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <Heading level={3} className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {video.title}
                </Heading>
                <Text variant="body" className="text-navy/70 tracking-tight">
                  {video.desc}
                </Text>
              </Card.Block>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

