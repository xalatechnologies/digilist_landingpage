'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dumbbell, Presentation, Theater, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';
import { homeContent } from '@/lib/homeContent';

/**
 * Device Screenshot Component with fallback
 */
const DeviceScreenshot: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}> = ({ src, alt, className = '', placeholder = 'Screenshot' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky2/10 to-primary/5 ${className}`}>
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
            <Presentation className="text-primary/50" size={24} />
          </div>
          <p className="text-sm text-navy/50 font-medium">{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky2/10 to-primary/5 ${className}`}>
          <div className="animate-pulse text-navy/30 text-xs">Loading...</div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        sizes="100vw"
        priority
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

/**
 * Hero Section with brand-consistent design tokens
 * Uses CSS variables from tokens.css via Tailwind utilities
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm ring-1 ring-cyan/20 shadow-sm mb-6"
            >
              <Sparkles size={16} className="text-cyan" />
              <span className="text-sm font-medium text-navy">Smart booking. Enkelt for alle.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Heading level={1} className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
                {homeContent.hero.subtitle}
              </Heading>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Text variant="body" className="mb-8 text-base text-navy/70 max-w-xl mx-auto lg:mx-0">
                {homeContent.hero.description}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href="/demo">
                <Button variant="gradient" size="lg" className="group">
                  Mer om DigiList
                </Button>
              </Link>
            </motion.div>

            {/* Trust & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="pt-8 border-t border-border"
            >
              <p className="text-sm font-semibold text-navy mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <Shield size={16} className="text-cyan" />
                Sikkerhet & Sertifisering
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-nowrap justify-center lg:justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-1 px-1"
              >
                {/* Vipps - uses brand color */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-vipps/10 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" className="fill-vipps"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-vipps group-hover:text-vipps/80 transition-colors duration-180">Vipps</span>
                </motion.div>
                
                {/* BankID */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-navy/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="11" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="32" height="16" rx="2" className="fill-navy"/>
                      <rect x="4" y="6" width="8" height="6" rx="1" fill="white" opacity="0.3"/>
                      <rect x="4" y="14" width="12" height="2" rx="1" fill="white" opacity="0.5"/>
                      <rect x="4" y="17" width="8" height="2" rx="1" fill="white" opacity="0.5"/>
                      <circle cx="28" cy="10" r="3" className="fill-success"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-navy group-hover:text-primary transition-colors duration-180">BankID</span>
                </motion.div>
                
                {/* GDPR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield size={12} className="text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-semibold text-primary group-hover:text-primary/80 transition-colors duration-180">GDPR</span>
                </motion.div>
                
                {/* ISO 27001 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="14" className="fill-primary"/>
                      <text x="14" y="18" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="0.5">ISO</text>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">27001</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
                
                {/* ISO 27701 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="14" r="14" className="fill-primary"/>
                      <text x="14" y="18" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="0.5">ISO</text>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">27701</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
                
                {/* Microsoft - uses their brand colors */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="group flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-md border border-sky2/50 shadow-sm hover:shadow-md hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 ease-smooth cursor-pointer shrink-0"
                >
                  <div className="w-5 h-5 rounded bg-surface-2 flex items-center justify-center shrink-0">
                    <svg width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="9" height="9" fill="#F25022"/>
                      <rect x="11" y="0" width="9" height="9" fill="#7FBA00"/>
                      <rect x="0" y="11" width="9" height="9" fill="#00A4EF"/>
                      <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                    </svg>
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="text-[11px] font-semibold text-navy leading-tight group-hover:text-primary transition-colors duration-180 whitespace-nowrap">Microsoft</span>
                    <span className="text-[9px] text-navy/60 whitespace-nowrap">Sertifisert</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative lg:pl-8 flex justify-center lg:justify-end min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Mobile-only view */}
            <div className="relative w-[280px] md:w-[320px] lg:hidden group mx-auto">
              <div className="relative bg-gradient-navy rounded-[32px] p-2 shadow-lift transition-all duration-300 group-hover:shadow-glow-strong cursor-pointer">
                <div className="bg-surface rounded-[24px] overflow-hidden">
                  <div className="bg-surface px-4 pt-3 pb-2 flex items-center justify-between">
                    <div className="text-[10px] font-semibold text-navy">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-navy" />
                      <div className="w-1 h-1 rounded-full bg-navy" />
                      <div className="w-1 h-1 rounded-full bg-navy" />
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] bg-surface">
                    <DeviceScreenshot
                      src="/images/screenshots/mobile-app.png"
                      alt="Digilist mobile application"
                      placeholder="Mobile Screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
                    
            {/* Desktop view - three devices with 3D effects */}
            <div className="relative w-full max-w-[700px] h-[600px] hidden lg:block overflow-visible perspective-1000">
              {/* Laptop Mockup with 3D */}
              <div className="absolute left-0 top-0 w-[400px] xl:w-[500px] z-10 transform rotate-[-2deg] hover:rotate-0 transition-all duration-300 group">
                <div className="relative" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                  {/* Laptop Screen */}
                  <div className="relative" style={{ transform: 'rotateX(-5deg)', transformOrigin: 'bottom' }}>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-2 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-300">
                      <div className="bg-gray-700 rounded-t-lg px-3 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-[10px] text-gray-300 text-center">
                          digilist.no
                        </div>
                      </div>
                      <div className="bg-surface rounded-b-lg overflow-hidden h-[400px] relative">
                        <DeviceScreenshot
                          src="/images/screenshots/desktop-app.png"
                          alt="Digilist desktop application"
                          placeholder="Desktop Screenshot"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Laptop Hinge */}
                  <div className="h-1 bg-gray-950 mx-12 -mt-1"></div>
                  {/* Laptop Keyboard Base */}
                  <div className="relative -mt-1" style={{ transform: 'rotateX(10deg)', transformOrigin: 'top' }}>
                    <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-2.5">
                      <div className="h-10 bg-gray-800/30 rounded flex items-center justify-center">
                        <div className="w-3/4 h-1 bg-gray-700/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    
              {/* iPad Mockup with 3D */}
              <div className="absolute left-[240px] xl:left-[300px] top-8 w-[220px] xl:w-[280px] z-20 transform rotate-[3deg] hover:rotate-0 transition-all duration-300 group" style={{ perspective: '1000px' }}>
                <div style={{ transformStyle: 'preserve-3d' }}>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[20px] p-2 shadow-[0_15px_50px_rgba(0,0,0,0.25)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-300" style={{ transform: 'rotateX(-3deg)' }}>
                    <div className="bg-surface rounded-[16px] overflow-hidden h-[380px] relative">
                      <DeviceScreenshot
                        src="/images/screenshots/tablet-app.png"
                        alt="Digilist tablet application"
                        placeholder="Tablet Screenshot"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup with 3D */}
              <div className="absolute left-[360px] xl:left-[450px] top-16 w-[160px] xl:w-[200px] z-30 transform rotate-[-4deg] hover:rotate-0 transition-all duration-300 group" style={{ perspective: '1000px' }}>
                <div style={{ transformStyle: 'preserve-3d' }}>
                  <div className="relative bg-gradient-navy rounded-[24px] p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-pointer" style={{ transform: 'rotateX(-2deg)' }}>
                    <div className="bg-surface rounded-[20px] overflow-hidden">
                      <div className="bg-surface px-3 pt-2 pb-1.5 flex items-center justify-between">
                        <div className="text-[8px] font-semibold text-navy">9:41</div>
                        <div className="flex gap-0.5">
                          <div className="w-0.5 h-0.5 rounded-full bg-navy" />
                          <div className="w-0.5 h-0.5 rounded-full bg-navy" />
                          <div className="w-0.5 h-0.5 rounded-full bg-navy" />
                        </div>
                      </div>
                      <div className="relative w-full h-[320px] bg-surface">
                        <DeviceScreenshot
                          src="/images/screenshots/mobile-app.png"
                          alt="Digilist mobile application"
                          placeholder="Mobile Screenshot"
                        />
                      </div>
                      <div className="bg-surface-2 border-t border-border-light px-3 py-1.5 flex items-center justify-around">
                        <div className="text-primary text-[8px] font-semibold">Hjem</div>
                        <div className="text-muted text-[8px]">Søk</div>
                        <div className="text-muted text-[8px]">Min side</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow effects */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};
