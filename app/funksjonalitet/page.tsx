'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
                  <button className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto group bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth">
                    Book demo
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
              
              {/* Highlight badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
                className="flex flex-wrap gap-2 sm:gap-3 max-w-md"
              >
                {functionalityContent.highlights.map((highlight, idx) => {
                  const Icon = highlightIcons[idx] || Cloud;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-cyan/10 border border-cyan/20 shadow-sm whitespace-nowrap"
                    >
                      <Icon size={14} className="text-cyan" />
                      <span className="text-xs sm:text-sm font-medium text-navy">{highlight.number}</span>
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
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan/10 rounded-full blur-2xl" />
                
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
                                ? 'bg-gradient-to-r from-cyan to-cyan/80 text-white' 
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

      {/* FEATURE CATEGORIES - Modern Layout */}
      <ScrollAnimation variant="fadeUp" delay={100}>
        <Section variant="default" className="bg-white" id="funksjoner">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <Sparkles size={16} />
                Funksjoner
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                Alle funksjoner
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                Oppdag alle verktøy og funksjoner som forenkler din booking
              </Text>
            </div>
            
            {/* Modern Sidebar + Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-3">
                <div className="sticky top-24 space-y-2">
                  {functionalityContent.categories.map((category, idx) => {
                    const Icon = categoryIcons[category.icon as keyof typeof categoryIcons] || Calendar;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(idx)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-all duration-300 ease-smooth text-left group ${
                          activeCategory === idx
                            ? 'bg-cyan text-white shadow-lg'
                            : 'bg-white text-navy border border-sky2/20 shadow-md hover:shadow-lg hover:border-cyan/50 hover:text-cyan'
                        }`}
                      >
                        <Icon size={20} aria-hidden="true" />
                        <span className="text-sm sm:text-base">{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="lg:col-span-9">
                <ScrollAnimation variant="scale" delay={150}>
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                        {functionalityContent.categories[activeCategory].title}
                      </h3>
                      <p className="text-base sm:text-lg text-navy/70">
                        {functionalityContent.categories[activeCategory].subtitle}
                      </p>
                    </div>
                    
                    {/* Features Grid */}
                    <StaggerAnimation staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {functionalityContent.categories[activeCategory].features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="group relative p-6 sm:p-8 rounded-md bg-white border border-sky2/20 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-cyan/50 transition-all duration-300 ease-smooth cursor-pointer overflow-hidden h-full flex flex-col"
                        >
                          {/* Icon Badge */}
                          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="text-white" size={24} aria-hidden="true" />
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-xl sm:text-2xl font-bold text-navy mb-3 group-hover:text-cyan transition-colors duration-300">
                            {feature.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-base text-navy/70 mb-6 leading-relaxed flex-shrink-0">
                            {feature.description}
                          </p>
                          
                          {/* Benefits List */}
                          <ul className="space-y-3 flex-1">
                            {feature.benefits.map((benefit, benefitIdx) => (
                              <li key={benefitIdx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                                  <ChevronRight className="text-cyan" size={12} aria-hidden="true" />
                                </div>
                                <span className="text-base text-navy leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Decorative accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </StaggerAnimation>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </Section>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* VISUAL SHOWCASE - Modern Image Feature Section */}
      <ScrollAnimation variant="fadeLeft" delay={100}>
        <Section variant="default" className="bg-white relative overflow-hidden">
          <div className="relative">
            {/* Modern Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Image with Overlay Content */}
              <div className="relative order-2 lg:order-1 group">
                <div className="relative rounded-md overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                    <img 
                      src="/images/utleieobjekter/kipo-kultursal.jpg" 
                      alt="Kultursal booking eksempel"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
                    
                    {/* Top Right Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/95 backdrop-blur-sm rounded-md px-3 py-2 shadow-lg border border-cyan/20">
                        <span className="text-sm font-semibold text-cyan">100%</span>
                        <span className="text-xs text-navy/70 ml-1">Skybasert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-4">
                  <Calendar size={16} className="text-cyan" />
                  <span className="text-sm font-medium text-cyan">Enkel booking</span>
                </div>
                
                {/* Heading */}
                <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                  Se hvordan det fungerer i praksis
                </Heading>
                
                {/* Description */}
                <Text variant="body" className="text-lg sm:text-xl text-navy/70 mb-8 leading-relaxed">
                  Fra kulturhus til idrettshaller – Digilist tilpasser seg dine behov. 
                  Våre kunder sparer i snitt 10 timer per uke på administrasjon.
                </Text>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle2, text: 'Automatisk kalendersynkronisering' },
                    { icon: CheckCircle2, text: 'Selvbetjent booking for brukere' },
                    { icon: CheckCircle2, text: 'Sanntidsoversikt over alle lokaler' },
                    { icon: CheckCircle2, text: 'Integrert fakturering og betaling' },
                  ].map((item, idx) => (
                    <div key={idx} className="group/item p-4 rounded-md bg-white border border-sky2/20 hover:border-cyan/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-md bg-cyan/10 flex items-center justify-center shrink-0 group-hover/item:bg-cyan group-hover/item:scale-110 transition-all duration-300">
                          <item.icon size={18} className="text-cyan group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-sm sm:text-base text-navy leading-relaxed group-hover/item:text-cyan transition-colors flex-1 min-w-0 break-words">
                          {item.text}
                        </span>
                      </div>
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

      {/* INTEGRATIONS - Image in Center with Cards on Sides */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white" id="integrasjoner">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <Globe size={16} />
                Integrasjoner
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                {functionalityContent.integrations.title}
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                {functionalityContent.integrations.subtitle}
              </Text>
            </div>
            
            {/* Modern Horizontal Cards with Images */}
            <StaggerAnimation staggerDelay={0.1} className="space-y-6 lg:space-y-8">
              {functionalityContent.integrations.groups.map((group, groupIdx) => {
                const GroupIcon = integrationIcons[group.icon as keyof typeof integrationIcons] || Globe;
                const images = [
                  '/images/utleieobjekter/kipo-kultursal.jpg',
                  '/images/utleieobjekter/gyllenborg-idrettshall.jpg',
                  '/images/utleieobjekter/flytende-badstua-ulefoss.jpg',
                  '/images/utleieobjekter/kipo-kultursal.jpg',
                ];
                const imageSrc = images[groupIdx % images.length];
                
                return (
                  <div 
                    key={group.id}
                    className="group relative rounded-md bg-white border border-sky2/20 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-cyan/50 transition-all duration-300 overflow-hidden"
                  >
                    {/* Horizontal Layout: Image + Content */}
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section - Left */}
                      <div className="relative w-full lg:w-2/5 h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-navy/10 z-10" />
                        <Image
                          src={imageSrc}
                          alt={group.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent z-10" />
                        
                        {/* Title on Image */}
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-2">
                            {group.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content Section - Right */}
                      <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
                        <div className="space-y-4">
                          {group.items.map((integration, idx) => {
                            const Icon = integrationIcons[integration.icon as keyof typeof integrationIcons] || Globe;
                            return (
                              <div 
                                key={idx}
                                className="group/item p-4 rounded-md bg-white hover:bg-cyan/5 transition-all duration-300 cursor-pointer"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-md bg-cyan/10 flex items-center justify-center shrink-0 group-hover/item:bg-cyan group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                                    <Icon 
                                      className="text-cyan group-hover/item:text-white transition-colors" 
                                      size={18} 
                                      aria-hidden="true" 
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-base font-semibold text-navy mb-1.5 group-hover/item:text-cyan transition-colors">
                                      {integration.title}
                                    </h4>
                                    <p className="text-sm text-navy/70 leading-relaxed">
                                      {integration.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </StaggerAnimation>
          </div>
        </Section>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* TECH SPECS - Modern Layout */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white" id="teknisk">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
                <ShieldCheck size={16} />
                Teknisk
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
                {functionalityContent.techSpecs.title}
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-lg sm:text-xl text-navy/70">
                {functionalityContent.techSpecs.subtitle}
              </Text>
            </div>
            
            {/* Unique Magazine-Style Asymmetric Layout */}
            <div className="relative space-y-6 lg:space-y-8">
              {/* First card - Full width hero */}
              {functionalityContent.techSpecs.specs.slice(0, 1).map((spec, idx) => {
                const Icon = techSpecIcons[spec.category as keyof typeof techSpecIcons] || Shield;
                return (
                  <div 
                    key={idx} 
                    className="group relative rounded-md bg-gradient-to-br from-cyan/5 via-white to-cyan/5 border-2 border-cyan/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-cyan/50 transition-all duration-500 ease-smooth cursor-pointer overflow-hidden"
                  >
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                        {/* Large Icon */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shrink-0">
                          <Icon className="text-white" size={40} aria-hidden="true" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-6 group-hover:text-cyan transition-colors duration-300">
                            {spec.category}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {spec.specs.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-3 group/item">
                                <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan transition-colors duration-300">
                                  <CheckCircle2 className="text-cyan group-hover/item:text-white transition-colors" size={16} aria-hidden="true" />
                                </div>
                                <span className="text-base text-navy/70 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
              
              {/* Second and third cards - Side by side with equal heights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {functionalityContent.techSpecs.specs.slice(1, 3).map((spec, idx) => {
                  const Icon = techSpecIcons[spec.category as keyof typeof techSpecIcons] || Shield;
                  return (
                    <div 
                      key={idx + 1} 
                      className="group relative rounded-md bg-white border-2 border-sky2/20 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-cyan/50 transition-all duration-300 ease-smooth cursor-pointer overflow-hidden h-full flex flex-col"
                    >
                      {/* Icon positioned absolutely */}
                      <div className="absolute top-6 right-6 z-10">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan/20 to-cyan/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
                          <Icon className="text-cyan" size={28} aria-hidden="true" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 pt-16 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-navy mb-6 group-hover:text-cyan transition-colors duration-300 pr-20">
                          {spec.category}
                        </h3>
                        <div className="space-y-3 flex-1">
                          {spec.specs.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-3 group/item">
                              <div className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan transition-colors duration-300">
                                <CheckCircle2 className="text-cyan group-hover/item:text-white transition-colors" size={14} aria-hidden="true" />
                              </div>
                              <span className="text-sm text-navy/70 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Decorative accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
              
              {/* Fourth card - Same style as first card (hero) */}
              {functionalityContent.techSpecs.specs.slice(3).map((spec, idx) => {
                const Icon = techSpecIcons[spec.category as keyof typeof techSpecIcons] || Shield;
                return (
                  <div 
                    key={idx + 3} 
                    className="group relative rounded-md bg-gradient-to-br from-cyan/5 via-white to-cyan/5 border-2 border-cyan/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-cyan/50 transition-all duration-500 ease-smooth cursor-pointer overflow-hidden"
                  >
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
                        {/* Large Icon */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shrink-0">
                          <Icon className="text-white" size={40} aria-hidden="true" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-6 group-hover:text-cyan transition-colors duration-300">
                            {spec.category}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {spec.specs.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-3 group/item">
                                <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan transition-colors duration-300">
                                  <CheckCircle2 className="text-cyan group-hover/item:text-white transition-colors" size={16} aria-hidden="true" />
                                </div>
                                <span className="text-base text-navy/70 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* USE CASES - With Images */}
      <ScrollAnimation variant="fadeUp" delay={150}>
        <Section variant="default" className="bg-white" id="bruksomrader">
        <div className="bg-white rounded-md p-6 sm:p-8 md:p-10">
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
                  rounded-md overflow-hidden
                  bg-white
                  border border-sky2/20 shadow-lg
                  hover:shadow-xl hover:-translate-y-1 hover:border-cyan/50
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
                        className="px-3 py-1.5 text-xs font-medium text-navy/60"
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
      {/* Bottom dividing line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent mt-12 sm:mt-16" />
      </ScrollAnimation>

      {/* CTA SECTION */}
      <ScrollAnimation variant="scale" delay={100}>
        <Section variant="default" className="bg-white">
        <div className="bg-white rounded-md p-6 sm:p-8 md:p-10">
        <div className="text-center px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan/20 shadow-sm mb-6">
            <Sparkles size={16} className="text-cyan" />
            <span className="text-sm font-medium text-navy">Kom i gang</span>
          </div>
          <Heading level={2} className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy">
            {functionalityContent.cta.title}
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-xl text-navy/70">
            {functionalityContent.cta.description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/demo">
              <button className="btn text-white font-bold shadow-soft btn-lg w-full sm:w-auto group bg-cyan hover:bg-cyan/90 hover:shadow-lift focus-visible:ring-4 focus-visible:ring-cyan/35 transition-all duration-180 ease-smooth">
                {functionalityContent.cta.primaryCta}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
        </div>
      </Section>
      </ScrollAnimation>
    </div>
  );
}
