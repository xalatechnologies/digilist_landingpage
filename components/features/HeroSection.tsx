import React from 'react';
import Link from 'next/link';
import { Building2, Calendar, Users, ArrowRight, Dumbbell, UsersRound, Theater, BookOpen, Presentation, Clock } from 'lucide-react';
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
              <Link href="/demo">
                <Button 
                  variant="secondary" 
                  size="lg"
                  showArrow
                >
                  Slik fungerer det
                </Button>
              </Link>
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
            <div className="relative w-[280px] md:w-[320px] group">
              {/* Phone Outer Frame */}
              <div className="relative bg-navy-base rounded-[32px] p-2 shadow-2xl transition-all duration-300 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer shake-on-hover">
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
                    <h3 className="text-white font-bold text-sm tracking-tight mb-0.5">Ledige lokaler</h3>
                    <p className="text-white/70 text-[8px] font-medium tracking-tight">developed by Xala tech</p>
                  </div>
                  
                  {/* Hall List */}
                  <div className="px-4 py-3 space-y-3 max-h-[480px] overflow-y-auto">
                    {/* Hall 1 */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-action-blue hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                          <Dumbbell className="text-white" size={20} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2.5">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm tracking-tight mb-1">Idrettshallen</h4>
                              <p className="text-xs text-gray-600">250 m² • Håndballbane</p>
                            </div>
                            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0 ml-2 border border-blue-100">
                              Ledig
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                            <Clock className="text-gray-400" size={12} aria-hidden="true" />
                            <span className="text-xs text-gray-500 font-medium">I dag 14:00-18:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hall 2 */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                          <Presentation className="text-white" size={20} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2.5">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm tracking-tight mb-1">Møtesal A</h4>
                              <p className="text-xs text-gray-600">80 m² • Konferanse</p>
                            </div>
                            <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full shrink-0 ml-2 border border-green-100">
                              Booket
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                            <Clock className="text-gray-400" size={12} aria-hidden="true" />
                            <span className="text-xs text-gray-500 font-medium">I dag 10:00-12:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hall 3 */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-pink-400 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                          <Theater className="text-white" size={20} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2.5">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm tracking-tight mb-1">Kultursalen</h4>
                              <p className="text-xs text-gray-600">150 m² • Scene & publikum</p>
                            </div>
                            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0 ml-2 border border-blue-100">
                              Ledig
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                            <Clock className="text-gray-400" size={12} aria-hidden="true" />
                            <span className="text-xs text-gray-500 font-medium">I morgen 09:00-17:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hall 4 */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                          <UsersRound className="text-white" size={20} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2.5">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm tracking-tight mb-1">Gymnastikksal</h4>
                              <p className="text-xs text-gray-600">120 m² • Trening</p>
                            </div>
                            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0 ml-2 border border-blue-100">
                              Ledig
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                            <Clock className="text-gray-400" size={12} aria-hidden="true" />
                            <span className="text-xs text-gray-500 font-medium">I dag 16:00-20:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hall 5 */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                          <BookOpen className="text-white" size={20} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2.5">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm tracking-tight mb-1">Biblioteket</h4>
                              <p className="text-xs text-gray-600">60 m² • Lesing & møter</p>
                            </div>
                            <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full shrink-0 ml-2 border border-green-100">
                              Booket
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100">
                            <Clock className="text-gray-400" size={12} aria-hidden="true" />
                            <span className="text-xs text-gray-500 font-medium">I dag 13:00-15:00</span>
                          </div>
                        </div>
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

