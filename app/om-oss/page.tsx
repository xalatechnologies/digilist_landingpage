'use client';

import React from 'react';
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
  Quote,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Button } from '@/components/ui/Button';
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

export default function OmOssPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION - Split Layout */}
      <section className="relative overflow-hidden bg-sky2/10">
        
        <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                    Book demo
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/funksjonalitet">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Se funksjoner
                  </Button>
                </Link>
              </motion.div>
              
              {/* Stats as badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {aboutContent.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-sm border border-border shadow-sm whitespace-nowrap shrink-0"
                  >
                    <span className="text-xs font-bold text-primary">{stat.number}</span>
                    <span className="text-xs font-medium text-navy">{stat.label}</span>
                  </motion.div>
                ))}
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 max-w-[500px]">
                  <img 
                    src="/images/utleieobjekter/gyllenborg-idrettshall.jpg" 
                    alt="Om Digilist"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-primary/90 rounded text-xs font-medium text-white flex items-center gap-1">
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
        <Section variant="rich-primary">
        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Mission Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Lightbulb size={14} />
              Vår visjon
            </div>
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl text-navy mb-6">
              {aboutContent.mission.title}
            </Heading>
            <Text variant="lead" className="mb-6 text-base sm:text-lg text-navy/70">
              {aboutContent.mission.description}
            </Text>
            
            {/* Key points */}
            <div className="space-y-4">
              {['Enkel booking for alle', 'Norsk selskap', 'Bygget for offentlig sektor'].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-navy font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Quote Card */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden">
              <Quote className="text-primary/20 mb-4" size={48} aria-hidden="true" />
              <blockquote>
                <Text variant="lead" className="text-navy font-semibold italic text-xl sm:text-2xl leading-relaxed mb-6">
                  &ldquo;{aboutContent.mission.quote}&rdquo;
                </Text>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-navy">Digilist Team</p>
                  <p className="text-sm text-navy/60">Vår filosofi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Section>
      </ScrollAnimation>

      {/* VALUES SECTION - Horizontal Cards */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="rich-cyan">
        <div className="bg-cyan/5 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 text-cyan text-xs font-medium mb-4">
            <Heart size={14} />
            Verdier
          </div>
          <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4">
            Våre verdier
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-navy/70">
            Prinsippene som styrer alt vi gjør
          </Text>
        </div>
        
        <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutContent.values.map((value, idx) => {
            const Icon = valueIcons[value.icon as keyof typeof valueIcons] || Heart;
            const colors = ['bg-primary', 'bg-cyan', 'bg-success', 'bg-primary'];
            return (
              <div 
                key={idx} 
                className="group flex gap-5 p-6 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${colors[idx % colors.length]} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth`}>
                  <Icon size={26} className="text-white" aria-hidden="true" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-navy/60 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            );
            })}
        </StaggerAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* TEAM SECTION - Modern Cards */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="rich-sky">
        <div className="bg-success/5 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-medium mb-4">
            <Users size={14} />
            Teamet
          </div>
          <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4">
            {aboutContent.team.title}
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-navy/70">
            {aboutContent.team.subtitle}
          </Text>
        </div>
        
        <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutContent.team.members.map((member, idx) => {
            const Icon = teamIcons[idx] || Users;
            const colors = ['bg-primary', 'bg-cyan', 'bg-success'];
            return (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-6 border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden h-full"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-20 h-20 rounded-2xl ${colors[idx % colors.length]} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth`}>
                    <Icon size={36} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-navy/60 leading-relaxed flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            );
            })}
        </StaggerAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* TIMELINE SECTION - Alternating Layout */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="gradient">
        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Sparkles size={14} />
            Historie
          </div>
          <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4">
            Vår historie
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-navy/70">
            Fra idé til ledende bookingløsning
          </Text>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Alternating timeline */}
          <div className="hidden md:block relative">
            {/* Center timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            
            <div className="space-y-12">
              {aboutContent.milestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                const colors = ['bg-primary', 'bg-cyan', 'bg-success', 'bg-primary'];
                const bgColor = colors[idx % colors.length];
                
                return (
                  <div key={idx} className="relative">
                    {/* Center dot with year */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth`}>
                        <span className="text-lg font-bold text-white">{milestone.year}</span>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`flex ${isLeft ? 'justify-start pr-[calc(50%+48px)]' : 'justify-end pl-[calc(50%+48px)]'}`}>
                      <div className="group relative w-full bg-white rounded-xl p-6 border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden">
                        {/* Decorative accent line */}
                        <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-1 h-full ${bgColor} rounded-full`} />
                        
                        <div className={`${isLeft ? 'pr-4' : 'pl-4'}`}>
                          <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-base text-navy/60 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                        
                        {/* Arrow pointing to center */}
                        <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-3' : '-left-3'} w-6 h-6 bg-white rotate-45 border-r border-b border-border`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile: Vertical timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              <div className="space-y-8">
                {aboutContent.milestones.map((milestone, idx) => {
                  const colors = ['bg-primary', 'bg-cyan', 'bg-success', 'bg-primary'];
                  const bgColor = colors[idx % colors.length];
                  
                  return (
                    <div key={idx} className="relative flex gap-6 group">
                      {/* Year badge */}
                      <div className={`relative z-10 w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth`}>
                        <span className="text-xs font-bold text-white">{milestone.year}</span>
                      </div>
                      
                      <div className="flex-1 bg-white rounded-xl p-5 border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden">
                        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-navy/60 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </Section>
      </ScrollAnimation>
    </div>
  );
}
