'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Play } from 'lucide-react';

export interface VideoItem {
  title: string;
  desc: string;
  color: string;
}

export const VideoController: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'renter'>('admin');

  const adminVideos: VideoItem[] = [
    { title: "Automatisering av faktura", desc: "Fra booking til Visma med ett klikk.", color: "bg-background-light" },
    { title: "Oppsett av adgangskontroll", desc: "Hvordan koble til smartlåser.", color: "bg-zebra-tint" },
    { title: "Rapport og analyse", desc: "Se bruksmønster og varmekart.", color: "bg-background-light" }
  ];

  const renterVideos: VideoItem[] = [
    { title: "Booking på 60 sekunder", desc: "Mobilvennlig booking for innbyggere.", color: "bg-zebra-tint" },
    { title: "Min Side oversikt", desc: "Endre og avbestille reservasjoner.", color: "bg-background-light" }
  ];

  const currentVideos = activeTab === 'admin' ? adminVideos : renterVideos;

  return (
    <div className="max-w-[1140px] mx-auto px-6 -mt-20 pb-32 relative z-10">
      {/* Tabs */}
      <div className="flex justify-center mb-16">
        <div className="bg-white p-2 rounded-[8px] shadow-2xl flex gap-2 border border-border-default">
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-3 rounded-digdir font-semibold flex items-center gap-2 transition-all tracking-tight min-h-[44px] ${
              activeTab === 'admin' 
                ? 'bg-action-blue text-white shadow-md' 
                : 'bg-transparent text-text-secondary hover:bg-zebra-tint'
            }`}
            aria-pressed={activeTab === 'admin'}
            aria-label="Vis videoer for kommunen (admin)"
          >
            <Building2 size={20} aria-hidden="true" />
            For Kommunen (Admin)
          </button>
          <button
            onClick={() => setActiveTab('renter')}
            className={`px-6 py-3 rounded-digdir font-semibold flex items-center gap-2 transition-all tracking-tight min-h-[44px] ${
              activeTab === 'renter' 
                ? 'bg-action-blue text-white shadow-md' 
                : 'bg-transparent text-text-secondary hover:bg-zebra-tint'
            }`}
            aria-pressed={activeTab === 'renter'}
            aria-label="Vis videoer for innbygger (leietaker)"
          >
            <Users size={20} aria-hidden="true" />
            For Innbygger (Leietaker)
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
            <div key={idx} className="group cursor-pointer">
              {/* Video Placeholder */}
              <div className={`relative aspect-video ${video.color} rounded-[8px] border border-border-default shadow-sm overflow-hidden mb-4 group-hover:border-action-blue group-hover:shadow-lg transition-all`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-md group-hover:scale-110 transition-transform text-action-blue" aria-hidden="true">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy-base mb-2 group-hover:text-action-blue group-hover:underline decoration-2 transition-colors tracking-tight">
                {video.title}
              </h3>
              <p className="text-text-secondary tracking-tight">{video.desc}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

