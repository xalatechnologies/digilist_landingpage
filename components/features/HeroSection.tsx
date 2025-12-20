import React from 'react';
import { Building2, Calendar, Users, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography';
import { Text } from '@/components/ui/Typography';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-background-light via-white to-white pt-16 pb-24 md:pt-20 md:pb-32 border-b border-border-default">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6">Nyhet: Versjon 2.0</Badge>
            
            <Heading level={1} className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
              Automatiser utleie av{' '}
              <span className="text-action-blue">kommunale lokaler</span>
            </Heading>
            
            <Text variant="lead" className="mb-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Det komplette operativsystemet for norske kommuner. 
              Håndter booking, betaling og adgangskontroll uten manuelt arbeid.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg">
                Kom i gang
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                showArrow
              >
                Slik fungerer det
              </Button>
            </div>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-default">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Calendar className="text-action-blue" size={20} aria-hidden="true" />
                  <span className="text-2xl font-bold text-navy-base">100%</span>
                </div>
                <p className="text-sm text-text-secondary">Automatisert</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Building2 className="text-action-blue" size={20} aria-hidden="true" />
                  <span className="text-2xl font-bold text-navy-base">50+</span>
                </div>
                <p className="text-sm text-text-secondary">Kommuner</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="text-action-blue" size={20} aria-hidden="true" />
                  <span className="text-2xl font-bold text-navy-base">3M+</span>
                </div>
                <p className="text-sm text-text-secondary">Innbyggere</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Preview */}
          <div className="relative lg:pl-8 flex justify-center lg:justify-end">
            {/* Mobile Phone Frame */}
            <div className="relative w-[280px] md:w-[320px]">
              {/* Phone Outer Frame */}
              <div className="relative bg-navy-base rounded-[32px] p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="bg-white rounded-[24px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-4 pt-3 pb-2 flex items-center justify-between">
                    <div className="text-[10px] font-semibold text-navy-base">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                      <div className="w-1 h-1 rounded-full bg-navy-base" aria-hidden="true"></div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-action-blue px-4 py-3">
                    <h3 className="text-white font-bold text-sm tracking-tight">Ledige lokaler</h3>
                  </div>
                  
                  {/* Hall List */}
                  <div className="px-4 py-3 space-y-3 max-h-[480px] overflow-y-auto">
                    {/* Hall 1 */}
                    <div className="bg-card-bg border border-border-default rounded-digdir p-3 hover:border-action-blue transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-navy-base text-sm tracking-tight">Idrettshallen</h4>
                          <p className="text-xs text-text-secondary mt-1">250 m² • Håndballbane</p>
                        </div>
                        <span className="text-xs font-semibold text-action-blue bg-action-blue/10 px-2 py-1 rounded-digdir">
                          Ledig
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs text-text-muted">I dag 14:00-18:00</div>
                      </div>
                    </div>
                    
                    {/* Hall 2 */}
                    <div className="bg-card-bg border border-border-default rounded-digdir p-3 hover:border-action-blue transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-navy-base text-sm tracking-tight">Møtesal A</h4>
                          <p className="text-xs text-text-secondary mt-1">80 m² • Konferanse</p>
                        </div>
                        <span className="text-xs font-semibold text-[#27C93F] bg-[#27C93F]/10 px-2 py-1 rounded-digdir">
                          Booket
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs text-text-muted">I dag 10:00-12:00</div>
                      </div>
                    </div>
                    
                    {/* Hall 3 */}
                    <div className="bg-card-bg border border-border-default rounded-digdir p-3 hover:border-action-blue transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-navy-base text-sm tracking-tight">Kultursalen</h4>
                          <p className="text-xs text-text-secondary mt-1">150 m² • Scene & publikum</p>
                        </div>
                        <span className="text-xs font-semibold text-action-blue bg-action-blue/10 px-2 py-1 rounded-digdir">
                          Ledig
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs text-text-muted">I morgen 09:00-17:00</div>
                      </div>
                    </div>
                    
                    {/* Hall 4 */}
                    <div className="bg-card-bg border border-border-default rounded-digdir p-3 hover:border-action-blue transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-navy-base text-sm tracking-tight">Gymnastikksal</h4>
                          <p className="text-xs text-text-secondary mt-1">120 m² • Trening</p>
                        </div>
                        <span className="text-xs font-semibold text-action-blue bg-action-blue/10 px-2 py-1 rounded-digdir">
                          Ledig
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs text-text-muted">I dag 16:00-20:00</div>
                      </div>
                    </div>
                    
                    {/* Hall 5 */}
                    <div className="bg-card-bg border border-border-default rounded-digdir p-3 hover:border-action-blue transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-navy-base text-sm tracking-tight">Biblioteket</h4>
                          <p className="text-xs text-text-secondary mt-1">60 m² • Lesing & møter</p>
                        </div>
                        <span className="text-xs font-semibold text-[#27C93F] bg-[#27C93F]/10 px-2 py-1 rounded-digdir">
                          Booket
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs text-text-muted">I dag 13:00-15:00</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="bg-zebra-tint border-t border-border-default px-4 py-2 flex items-center justify-around">
                    <div className="text-action-blue text-xs font-semibold">Hjem</div>
                    <div className="text-text-muted text-xs">Søk</div>
                    <div className="text-text-muted text-xs">Min side</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-action-blue/10 rounded-full blur-2xl -z-10" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-background-light rounded-full blur-2xl -z-10" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

