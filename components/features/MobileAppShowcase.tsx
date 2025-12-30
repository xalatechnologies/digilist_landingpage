'use client';

import React from 'react';
import { ArrowRight, Menu, ChevronLeft } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';

export const MobileAppShowcase: React.FC = () => {
  return (
    <Section variant="tinted" id="app-showcase">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left">
          <Heading level={2} className="mb-6">
            En moderne og brukervennlig løsning
          </Heading>
          <Text variant="lead" className="mb-8 max-w-xl mx-auto lg:mx-0">
            Digilist leverer et moderne og intuitivt brukergrensesnitt som gir enkel oversikt over alle bookinger og deres status. Både utleiere og leietakere kan redigere informasjon, utføre betalinger, skrive notater, rapportere avvik og kommunisere gjennom en integrert meldingsdialog.
          </Text>
          <div className="flex justify-center lg:justify-start">
            <Button variant="primary" size="lg">
              Mer om Digilist
              <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Right Column: Mobile Phone Mockups */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px] h-[500px]">
            {/* Phone 1: Search Screen (Front) */}
            <div className="absolute left-0 top-0 w-[200px] md:w-[240px] z-30 transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative bg-navy-base rounded-[24px] p-1.5 shadow-2xl">
                <div className="bg-white rounded-[20px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-3 pt-2 pb-1.5 flex items-center justify-between">
                    <div className="text-[8px] font-semibold text-navy-base">9:41</div>
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-border-default">
                    <div className="text-xs font-bold text-navy-base tracking-tight">digilist</div>
                    <Menu size={14} className="text-navy-base" aria-hidden="true" />
                  </div>
                  
                  {/* Search Screen Content */}
                  <div className="px-3 py-4 space-y-3">
                    <div className="bg-zebra-tint rounded-digdir px-3 py-2 text-[10px] text-text-secondary">
                      Søk bookinger
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 border-b border-border-default">
                        <div>
                          <div className="text-[10px] font-bold text-navy-base">Curlinghall</div>
                          <div className="text-[8px] text-text-secondary">25.08.23 - 28.08.23</div>
                        </div>
                        <ChevronLeft size={12} className="text-text-muted rotate-180" aria-hidden="true" />
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border-default">
                        <div>
                          <div className="text-[10px] font-bold text-navy-base">Begby ungdomsskole</div>
                          <div className="text-[8px] text-text-secondary">01.09.23 - 05.09.23</div>
                        </div>
                        <ChevronLeft size={12} className="text-text-muted rotate-180" aria-hidden="true" />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <div className="text-[10px] font-bold text-navy-base">Borg curlinghall</div>
                          <div className="text-[8px] text-text-secondary">10.09.23 - 12.09.23</div>
                        </div>
                        <ChevronLeft size={12} className="text-text-muted rotate-180" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2: Booking Detail Screen (Middle, slightly behind) */}
            <div className="absolute left-[140px] md:left-[180px] top-8 w-[200px] md:w-[240px] z-20 transform rotate-[4deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative bg-navy-base rounded-[24px] p-1.5 shadow-2xl">
                <div className="bg-white rounded-[20px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-3 pt-2 pb-1.5 flex items-center justify-between">
                    <div className="text-[8px] font-semibold text-navy-base">9:41</div>
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-border-default">
                    <ChevronLeft size={14} className="text-navy-base" aria-hidden="true" />
                    <div className="text-xs font-bold text-navy-base tracking-tight">digilist</div>
                    <Menu size={14} className="text-navy-base" aria-hidden="true" />
                  </div>
                  
                  {/* Booking Detail Content */}
                  <div className="px-3 py-4">
                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-navy-base mb-1">Alfheim gymsal</h3>
                      <div className="text-[8px] text-text-secondary space-y-0.5">
                        <div>Booking ID: manuell</div>
                        <div className="text-action-blue font-medium">Denne booking er ikke betalt</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['Behandle booking', 'Oversikt', 'Logg', 'Notat', 'Rapporter avvik', 'Send melding', 'Kvittering'].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1.5 border-b border-border-default">
                          <span className="text-[9px] text-navy-base">{item}</span>
                          <ChevronLeft size={10} className="text-text-muted rotate-180" aria-hidden="true" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 3: Overview Screen (Right, further behind) */}
            <div className="absolute left-[280px] md:left-[360px] top-16 w-[200px] md:w-[240px] z-10 transform rotate-[8deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative bg-navy-base rounded-[24px] p-1.5 shadow-2xl">
                <div className="bg-white rounded-[20px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-3 pt-2 pb-1.5 flex items-center justify-between">
                    <div className="text-[8px] font-semibold text-navy-base">9:41</div>
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-navy-base" aria-hidden="true"></div>
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-border-default">
                    <ChevronLeft size={14} className="text-navy-base" aria-hidden="true" />
                    <div className="text-xs font-bold text-navy-base tracking-tight">digilist</div>
                    <Menu size={14} className="text-navy-base" aria-hidden="true" />
                  </div>
                  
                  {/* Overview Content */}
                  <div className="px-3 py-4">
                    <h3 className="text-xs font-bold text-navy-base mb-4">Oversikt</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[9px] font-semibold text-text-secondary mb-2">Tidspunkt og formål</div>
                        <div className="text-[8px] text-navy-base space-y-1">
                          <div>25.08.2023</div>
                          <div>14:00 - 18:00</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] font-semibold text-text-secondary mb-2">Leietaker</div>
                        <div className="text-[8px] text-navy-base">
                          <div>Navn: IL Ørn</div>
                          <div>E-post: kontakt@ilorn.no</div>
                        </div>
                      </div>
                      <div className="pt-2 space-y-1.5">
                        <button className="w-full bg-action-blue text-white text-[9px] py-1.5 rounded-digdir font-semibold">
                          Rediger leietaker
                        </button>
                        <button className="w-full border border-border-default text-navy-base text-[9px] py-1.5 rounded-digdir font-semibold">
                          Avbryt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

