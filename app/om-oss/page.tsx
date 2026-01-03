'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Accessibility, 
  Lightbulb, 
  Users, 
  Headphones, 
  Palette,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { aboutContent } from '@/lib/aboutContent';


const valueIcons = {
  heart: Heart,
  shield: Shield,
  accessibility: Accessibility,
  lightbulb: Lightbulb,
};

const teamIcons = [Users, Headphones, Palette];

// Image mapping for values
const valueImages = [
  '/images/utleieobjekter/kipo-kultursal.jpg',
  '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
];

// Image mapping for team members
const teamImages = [
  '/images/utleieobjekter/kipo-kultursal.jpg',
  '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
  '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
];

export default function OmOssPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION - Split Layout */}
      <section className="relative overflow-hidden bg-white">
        
        <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-cyan/20 shadow-sm mb-6"
              >
                <Sparkles size={16} className="text-cyan" />
                <span className="text-sm font-medium text-navy">Om Digilist</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Heading level={1} className="mb-6 text-3xl sm:text-4xl md:text-5xl text-navy">
                  {aboutContent.hero.title}
                </Heading>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Text variant="lead" className="mb-6 text-base sm:text-lg md:text-xl text-navy/70">
                  {aboutContent.hero.subtitle}
                </Text>
                <Text variant="body" className="text-navy/60 max-w-2xl mb-8">
                  {aboutContent.hero.description}
                </Text>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              >
                <Link href="/demo">
                  <button className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto group bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth">
                    Book demo
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/funksjonalitet">
                  <button className="btn btn-lg w-full sm:w-auto border-2 border-cyan text-cyan hover:bg-cyan/5 transition-all duration-180 ease-smooth">
                    Se funksjoner
                  </button>
                </Link>
              </motion.div>
            </div>
            
            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                
                {/* Main image */}
                <div className="relative rounded-md overflow-hidden shadow-2xl ring-1 ring-white/20 max-w-[500px]">
                  <img 
                    src="/images/utleieobjekter/gyllenborg-idrettshall.jpg" 
                    alt="Om Digilist"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-cyan/90 rounded text-xs font-medium text-white flex items-center gap-1">
                        <Heart size={12} />
                        Norsk selskap
                      </div>
                    </div>
                    <p className="text-lg font-bold text-white">Bygget for norske kommuner</p>
                    <p className="text-sm text-white/80">Av nordmenn, for nordmenn</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION - Split Layout */}
      <ScrollAnimation variant="fadeUp" delay={100}>
        <Section variant="default" className="bg-white">
        <div className="bg-white rounded-md p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 max-w-[500px]">
                <img 
                  src="/images/utleieobjekter/kipo-kultursal.jpg" 
                  alt="Vår visjon"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-1 bg-cyan/90 rounded text-xs font-medium text-white flex items-center gap-1">
                      <Lightbulb size={12} />
                      Vår visjon
                    </div>
                  </div>
                  <p className="text-lg font-bold text-white">{aboutContent.mission.quote}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Mission Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 text-cyan text-xs font-medium mb-6">
              <Lightbulb size={14} />
              Vår visjon
            </div>
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
              {aboutContent.mission.title}
            </Heading>
            <Text variant="lead" className="mb-6 text-base sm:text-lg text-navy/70">
              {aboutContent.mission.description}
            </Text>
            
            {/* Key points */}
            <div className="space-y-4">
              {['Enkel booking for alle', 'Norsk selskap', 'Bygget for offentlig sektor'].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-navy font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Section>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* VALUES SECTION - Modern Layout with Images */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <Heart size={16} />
                Verdier
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                Våre verdier
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                Prinsippene som styrer alt vi gjør
              </Text>
            </div>
            
            {/* Unique Modern Layout - Cards between image cards */}
            <div className="space-y-6 lg:space-y-8">
              {/* First value with image */}
              {(() => {
                const value = aboutContent.values[0];
                const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Heart;
                const imageSrc = valueImages[0];
                
                return (
                  <div
                    key={0}
                    className="group relative overflow-hidden rounded-md bg-gradient-to-br from-white via-cyan/5 to-white border border-sky2/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-smooth"
                  >
                    <div className="flex flex-col lg:flex lg:flex-row">
                      {/* Image Section - 50% width on large screens */}
                      <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                        <Image
                          src={imageSrc}
                          alt={value.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent z-10" />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                            {value.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content Section - 50% width on large screens */}
                      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-md bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon size={28} className="text-white" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4 group-hover:text-cyan transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
              
              {/* Third and fourth values in 2-column grid without images - Between image cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {aboutContent.values.slice(2).map((value, idx) => {
                  const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Heart;
                  
                  return (
                    <div
                      key={idx + 2}
                      className="group relative overflow-hidden rounded-md bg-white border border-sky2/20 shadow-lg hover:shadow-xl hover:border-cyan/50 transition-all duration-300 ease-smooth cursor-pointer h-full flex flex-col"
                    >
                      <div className="p-6 sm:p-8 flex flex-col h-full">
                        {/* Header with icon and title */}
                        <div className="flex items-start gap-4 mb-6 flex-shrink-0">
                          <div className="w-16 h-16 rounded-md bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon size={28} className="text-white" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-navy leading-tight group-hover:text-cyan transition-colors duration-300">
                              {value.title}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-base text-navy/70 leading-relaxed flex-1">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Second value with image */}
              {(() => {
                const value = aboutContent.values[1];
                const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Heart;
                const imageSrc = valueImages[1];
                
                return (
                  <div
                    key={1}
                    className="group relative overflow-hidden rounded-md bg-gradient-to-br from-white via-cyan/5 to-white border border-sky2/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-smooth"
                  >
                    <div className="flex flex-col lg:flex lg:flex-row-reverse">
                      {/* Image Section - 50% width on large screens */}
                      <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                        <Image
                          src={imageSrc}
                          alt={value.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent z-10" />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                            {value.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content Section - 50% width on large screens */}
                      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-md bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon size={28} className="text-white" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4 group-hover:text-cyan transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </Section>
        {/* Bottom dividing line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* TEAM SECTION - Modern Cards with Images */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <Users size={16} />
                Teamet
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                {aboutContent.team.title}
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                {aboutContent.team.subtitle}
              </Text>
            </div>
            
            {/* Team Cards with Images */}
            <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {aboutContent.team.members.map((member, idx) => {
                const Icon = teamIcons[idx] || Users;
                const imageSrc = teamImages[idx] || teamImages[0];
                
                return (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-md bg-white border border-sky2/20 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-cyan/50 transition-all duration-300 ease-smooth cursor-pointer h-full flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                      <Image
                        src={imageSrc}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 group-hover:text-cyan transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-cyan mb-4">
                        {member.role}
                      </p>
                      <p className="text-base text-navy/70 leading-relaxed flex-1">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </StaggerAnimation>
          </div>
        </Section>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* HISTORY SECTION - Modern Paragraph Layout with Images */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <Sparkles size={16} />
                Historie
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                Vår historie
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                Fra idé til ledende bookingløsning
              </Text>
            </div>
            
            {/* Modern Story Layout with Images */}
            <div className="max-w-6xl mx-auto">
              {/* First Section - Image + Opening Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
                {/* First Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-md overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                    <div className="relative h-80 sm:h-96 lg:h-[500px]">
                      <Image
                        src="/images/utleieobjekter/kipo-kultursal.jpg"
                        alt="Digilist historie"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Opening Story */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg sm:text-xl text-navy/70 leading-relaxed">
                      <span className="font-bold text-navy">{aboutContent.milestones[0].year}</span> markerte starten på vår reise. <span className="font-semibold text-cyan">{aboutContent.milestones[0].title}</span> – Digilist ble grunnlagt med et klart mål: å forenkle booking for kommuner og gjøre det enklere for alle å få tilgang til lokaler og ressurser.
                    </p>
                    
                    <p className="text-lg sm:text-xl text-navy/70 leading-relaxed">
                      <span className="font-bold text-navy">{aboutContent.milestones[1].year}</span> var året vi tok våre første skritt ut i markedet. <span className="font-semibold text-cyan">{aboutContent.milestones[1].title}</span> – vi lanserte vår første versjon med kulturhus og idrettsanlegg som pilotkunder. Dette ga oss verdifull tilbakemelding og muligheten til å forbedre løsningen basert på reelle brukerbehov.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Second Section - Second Image + Continuation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
                {/* Continuation Story */}
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg sm:text-xl text-navy/70 leading-relaxed">
                      <span className="font-bold text-navy">{aboutContent.milestones[2].year}</span> representerte et viktig milepæl i vår utvikling. <span className="font-semibold text-cyan">{aboutContent.milestones[2].title}</span> – vi oppnådde ISO 27001 og ISO 27701 sertifisering for sikkerhet og personvern. Dette bekreftet vårt engasjement for å levere en trygg og pålitelig løsning.
                    </p>
                    
                    <p className="text-lg sm:text-xl text-navy/70 leading-relaxed">
                      <span className="font-bold text-navy">{aboutContent.milestones[3].year}</span> var året for <span className="font-semibold text-cyan">{aboutContent.milestones[3].title}</span>. Vi utvidet til over 30 kommuner og kulturhus over hele landet, og vår plattform ble en integrert del av daglig drift for mange organisasjoner.
                    </p>
                    
                    <p className="text-lg sm:text-xl text-navy/70 leading-relaxed">
                      I <span className="font-bold text-navy">{aboutContent.milestones[4].year}</span> fortsatte vi innovasjonen med <span className="font-semibold text-cyan">{aboutContent.milestones[4].title}</span>. Vi lanserte Visma, Acos og RCO-integrasjoner for sømløs drift, noe som gjorde det enda enklere for våre kunder å integrere Digilist i deres eksisterende systemer.
                    </p>
                  </div>
                </div>
                
                {/* Second Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-md overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                    <div className="relative h-80 sm:h-96 lg:h-[500px]">
                      <Image
                        src="/images/utleieobjekter/gyllenborg-idrettshall.jpg"
                        alt="Digilist vekst"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Bottom dividing line */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>
    </div>
  );
}
