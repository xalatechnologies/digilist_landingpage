'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  CreditCard, 
  Shield, 
  Palette, 
  CheckCircle2,
  ChevronRight,
  FileText,
  Folder,
  Ticket,
  Lock,
  Globe,
  Smartphone,
  Building2,
  Theater,
  Dumbbell,
  Briefcase,
  Cloud,
  Clock,
  Accessibility,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Settings,
  Headphones
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui/ScrollAnimation';
import { functionalityContent } from '@/lib/functionalityContent';

const categoryIcons = {
  calendar: Calendar,
  creditCard: CreditCard,
  shield: Shield,
  palette: Palette,
};

const integrationIcons = {
  calendar: Calendar,
  fileText: FileText,
  folder: Folder,
  ticket: Ticket,
  lock: Lock,
  globe: Globe,
  shield: Shield,
  smartphone: Smartphone,
  creditCard: CreditCard,
};

const useCaseIcons = {
  Kommune: Building2,
  Kulturhus: Theater,
  Idrettsanlegg: Dumbbell,
  Bedrift: Briefcase,
};

const highlightIcons = [Cloud, Clock, Accessibility, ShieldCheck];

const techSpecIcons = {
  'Sikkerhet': ShieldCheck,
  'Personvern': Lock,
  'Tilgjengelighet': Accessibility,
  'Drift og support': Settings,
};

export default function FunksjonalitetPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION - Split Layout */}
      <section className="relative overflow-hidden bg-sky2/10">
        
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
                <span className="text-sm font-medium text-navy">Komplett løsning</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Heading level={1} className="mb-6 text-3xl sm:text-4xl md:text-5xl text-navy">
                  {functionalityContent.hero.title}
                </Heading>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Text variant="lead" className="mb-6 text-base sm:text-lg md:text-xl text-navy/70">
                  {functionalityContent.hero.subtitle}
                </Text>
                <Text variant="body" className="text-navy/60 max-w-2xl mb-8">
                  {functionalityContent.hero.description}
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
              >
                <Link href="/demo">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                    Book demo
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              
              {/* Highlight badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
                className="grid grid-cols-2 gap-2 max-w-md"
              >
                {functionalityContent.highlights.map((highlight, idx) => {
                  const Icon = highlightIcons[idx] || Cloud;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-md border border-border shadow-sm whitespace-nowrap shrink-0"
                    >
                      <Icon size={14} className="text-primary" />
                      <span className="text-xs font-medium text-navy">{highlight.number}</span>
                      <span className="text-xs text-navy/60">{highlight.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Right - Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                
                {/* Main dashboard mockup */}
                <div className="relative bg-gradient-to-br from-navy to-navy/90 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-navy/50 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-white/50">
                        app.digilist.no/bookinger
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-6">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { label: 'Aktive bookinger', value: '24' },
                        { label: 'Denne uken', value: '156' },
                        { label: 'Kapasitet', value: '78%' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/50">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar preview */}
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-white">Desember 2025</span>
                        <div className="flex gap-1">
                          <ChevronRight size={14} className="text-white/50 rotate-180" />
                          <ChevronRight size={14} className="text-white/50" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map((d, i) => (
                          <div key={i} className="text-white/40 py-1">{d}</div>
                        ))}
                        {[...Array(31)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`py-1 rounded ${
                              [5, 12, 18, 19, 25].includes(i + 1) 
                                ? 'bg-gradient-to-r from-primary to-cyan text-white' 
                                : 'text-white/60 hover:bg-white/10'
                            }`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Booking list preview */}
                    <div className="space-y-2">
                      {[
                        { time: '09:00', title: 'Møterom A', status: 'confirmed' },
                        { time: '14:00', title: 'Kultursal', status: 'pending' },
                      ].map((booking, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2">
                          <div className={`w-2 h-2 rounded-full ${booking.status === 'confirmed' ? 'bg-success' : 'bg-yellow-400'}`} />
                          <span className="text-xs text-white/50">{booking.time}</span>
                          <span className="text-sm text-white">{booking.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE CATEGORIES - Tabbed Navigation */}
      <ScrollAnimation variant="fadeUp" delay={100}>
        <Section variant="rich-primary" id="funksjoner">
        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
          <SectionHeader
            title="Alle funksjoner"
            subtitle="Oppdag alle verktøy og funksjoner som forenkler din booking"
            badge="Funksjoner"
          />
          
          {/* Category Tabs */}
        <StaggerAnimation staggerDelay={0.1} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          {functionalityContent.categories.map((category, idx) => {
            const Icon = categoryIcons[category.icon as keyof typeof categoryIcons] || Calendar;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ease-smooth min-h-[44px] ${
                  activeCategory === idx
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-navy border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan hover:text-primary'
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </StaggerAnimation>

        {/* Active Category Content */}
        <ScrollAnimation variant="scale" delay={150}>
          <div className="rounded-lg p-3 sm:p-4">
            
            <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-12 items-stretch">
              {functionalityContent.categories[activeCategory].features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden h-full flex flex-col"
              >
                <h4 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={14} aria-hidden="true" />
                  </div>
                  {feature.title}
                </h4>
                <p className="text-sm text-navy/60 mb-4 leading-relaxed flex-shrink-0">
                  {feature.description}
                </p>
                <ul className="space-y-2 flex-1">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="text-cyan shrink-0 mt-0.5" size={14} aria-hidden="true" />
                      <span className="text-navy">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </StaggerAnimation>
          </div>
        </ScrollAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* VISUAL SHOWCASE - Image Feature Section */}
      <ScrollAnimation variant="fadeLeft" delay={100}>
        <Section variant="rich-cyan" className="relative overflow-hidden">
        <div className="bg-cyan/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-cyan/10 to-success/20" />
              
              {/* Image placeholder with actual rental object */}
              <div className="relative aspect-[4/3]">
                <img 
                  src="/images/utleieobjekter/kipo-kultursal.jpg" 
                  alt="Kultursal booking eksempel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calendar size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Enkel booking</span>
            </div>
            <Heading level={2} className="mb-6 text-2xl sm:text-3xl md:text-4xl text-navy">
              Se hvordan det fungerer i praksis
            </Heading>
            <Text variant="body" className="text-navy/70 mb-8 text-lg">
              Fra kulturhus til idrettshaller – Digilist tilpasser seg dine behov. 
              Våre kunder sparer i snitt 10 timer per uke på administrasjon.
            </Text>
            
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: 'Automatisk kalendersynkronisering' },
                { icon: CheckCircle2, text: 'Selvbetjent booking for brukere' },
                { icon: CheckCircle2, text: 'Sanntidsoversikt over alle lokaler' },
                { icon: CheckCircle2, text: 'Integrert fakturering og betaling' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <item.icon size={14} className="text-success" />
                  </div>
                  <span className="text-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Section>
      </ScrollAnimation>

      {/* INTEGRATIONS */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="rich-sky" id="integrasjoner">
        <div className="bg-success/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title={functionalityContent.integrations.title}
          subtitle={functionalityContent.integrations.subtitle}
          badge="Integrasjoner"
        />
        
        {/* Integration Groups */}
        <StaggerAnimation staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {functionalityContent.integrations.groups.map((group) => {
            const GroupIcon = integrationIcons[group.icon as keyof typeof integrationIcons] || Globe;
            return (
              <div 
                key={group.id}
                className="
                  rounded-lg overflow-hidden
                  bg-white
                  border-2 border-sky2/50 shadow-lg
                  hover:shadow-xl hover:-translate-y-2 hover:border-cyan
                  transition-all duration-300 ease-smooth cursor-pointer overflow-hidden
                "
              >
                {/* Group Header */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="
                      w-10 h-10 rounded-lg bg-primary
                      flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth
                    ">
                      <GroupIcon className="text-white" size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{group.title}</h3>
                  </div>
                </div>
                
                {/* Group Items */}
                <div className="p-4 sm:p-5 space-y-4">
                  {group.items.map((integration, idx) => {
                    const Icon = integrationIcons[integration.icon as keyof typeof integrationIcons] || Globe;
                    return (
                      <div 
                        key={idx}
                        className="
                          flex items-start gap-3 p-3 rounded-lg
                          bg-white/50 hover:bg-white
                          border border-sky2/30 hover:border-sky2/60
                          shadow-sm hover:shadow-md hover:-translate-y-1
                          transition-all duration-300 ease-smooth group/item cursor-pointer
                        "
                      >
                        <div className="
                          w-10 h-10 rounded-lg bg-primary/10
                          flex items-center justify-center shrink-0 shadow-lg
                          group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-cyan
                          group-hover/item:scale-110 group-hover/item:rotate-3
                          transition-all duration-300 ease-smooth
                        ">
                          <Icon 
                            className="text-primary group-hover/item:text-white transition-colors duration-200" 
                            size={18} 
                            aria-hidden="true" 
                          />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-navy group-hover/item:text-primary transition-colors duration-180">
                            {integration.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-navy/60 leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* TECH SPECS */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="rich-primary" id="teknisk">
        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title={functionalityContent.techSpecs.title}
          subtitle={functionalityContent.techSpecs.subtitle}
          badge="Teknisk"
        />
        
        <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {functionalityContent.techSpecs.specs.map((spec, idx) => {
            const Icon = techSpecIcons[spec.category as keyof typeof techSpecIcons] || Shield;
            const colors = ['bg-primary', 'bg-cyan', 'bg-success', 'bg-primary'];
            return (
            <div 
              key={idx} 
              className="
                rounded-lg p-6 sm:p-8
                bg-white
                border-2 border-sky2/50 shadow-lg
                hover:shadow-xl hover:-translate-y-2 hover:border-cyan 
                transition-all duration-300 ease-smooth
                group cursor-pointer overflow-hidden
                h-full flex flex-col
              "
            >
              <h3 className="text-lg font-bold text-navy mb-4 pb-3 border-b-2 border-sky2/50 group-hover:text-primary transition-colors duration-180 flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${colors[idx % colors.length]} flex items-center justify-center`}>
                  <Icon className="text-white" size={14} aria-hidden="true" />
                </div>
                {spec.category}
              </h3>
              <ul className="space-y-3 flex-1">
                {spec.specs.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-cyan shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    <span className="text-navy/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </StaggerAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* USE CASES - With Images */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="gradient" id="bruksomrader">
        <div className="bg-cyan/5 rounded-2xl p-6 sm:p-8 md:p-10">
        <SectionHeader
          title={functionalityContent.useCases.title}
          subtitle={functionalityContent.useCases.subtitle}
          badge="Bruksområder"
        />
        
        <StaggerAnimation staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {functionalityContent.useCases.items.map((useCase, idx) => {
            const Icon = useCaseIcons[useCase.title as keyof typeof useCaseIcons] || Building2;
            const images = [
              '/images/utleieobjekter/kipo-kultursal.jpg',
              '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
              '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
              '/images/utleieobjekter/kipo-kultursal.jpg',
            ];
            
            return (
              <div 
                key={idx} 
                className="
                  rounded-xl overflow-hidden
                  bg-white
                  border-2 border-sky2/50 shadow-lg
                  hover:shadow-xl hover:-translate-y-2 hover:border-cyan
                  transition-all duration-300 ease-smooth group cursor-pointer overflow-hidden
                "
              >
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={images[idx % images.length]} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="
                      w-12 h-12 rounded-xl bg-primary
                      flex items-center justify-center
                      shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth
                    ">
                      <Icon className="text-white" size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {useCase.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6">
                  <p className="text-sm text-navy mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIdx) => (
                      <span 
                        key={featureIdx}
                        className="px-3 py-1.5 text-xs font-medium bg-sky2/10 text-navy/60 rounded-full border border-sky2/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
        </div>
      </Section>
      </ScrollAnimation>

      {/* CTA SECTION */}
      <ScrollAnimation variant="scale" delay={100}>
        <Section variant="gradient">
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="text-center px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan/20 shadow-sm mb-6">
            <Sparkles size={16} className="text-cyan" />
            <span className="text-sm font-medium text-navy">Kom i gang</span>
          </div>
          <Heading level={2} className="mb-4 sm:mb-6 text-navy">
            {functionalityContent.cta.title}
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-xl text-navy/70">
            {functionalityContent.cta.description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/demo">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto group">
                {functionalityContent.cta.primaryCta}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-navy/50">Gratis demo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-cyan" />
              <span className="text-sm text-navy/50">Ingen binding</span>
            </div>
          </div>
        </div>
        </div>
      </Section>
      </ScrollAnimation>
    </div>
  );
}
