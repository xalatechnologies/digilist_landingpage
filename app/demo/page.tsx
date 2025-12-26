'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin,
  PlayCircle,
  Shield,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';

const demoFeatures = [
  {
    icon: PlayCircle,
    title: "Live gjennomgang",
    description: "Se systemet i aksjon med ekte data og scenarier",
  },
  {
    icon: Users,
    title: "Tilpasset din organisasjon",
    description: "Vi fokuserer på funksjonene som er viktigst for deg",
  },
  {
    icon: MessageSquare,
    title: "Svar på alle spørsmål",
    description: "Få svar på tekniske og praktiske spørsmål",
  },
  {
    icon: Zap,
    title: "Rask oppstart",
    description: "Lær hvordan du kommer i gang på få dager",
  },
];

const demoAgenda = [
  "Introduksjon og kartlegging av behov",
  "Gjennomgang av bookingflyt for innbyggere",
  "Administrasjonsgrensesnitt og rapportering",
  "Integrasjoner med eksisterende systemer",
  "Spørsmål og diskusjon om implementering",
  "Neste steg og prisindikasjon",
];

const applicationImages = [
  {
    src: "/images/utleieobjekter/kipo-kultursal.jpg",
    alt: "Digilist Dashboard",
    title: "Dashboard",
    isLarge: true,
  },
  {
    src: "/images/utleieobjekter/gyllenborg-idrettshall.jpg",
    alt: "Booking Interface",
    title: "Booking",
    isLarge: false,
  },
  {
    src: "/images/utleieobjekter/flytende-badstua-ulefoss.jpg",
    alt: "Calendar View",
    title: "Kalender",
    isLarge: false,
  },
  // Add more application screenshots here
  // Example:
  // {
  //   src: "/images/app/admin-panel.jpg",
  //   alt: "Admin Panel",
  //   title: "Admin",
  //   isLarge: false,
  // },
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    organizationType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION - Split Layout */}
      <section className="relative overflow-hidden bg-sky2/10">
        
        <div className="relative max-w-[1400px] mx-auto px-6 pt-8 pb-12 md:pt-12 md:pb-16">
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
                <span className="text-sm font-medium text-navy">Uforpliktende demo</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              >
              <Heading level={1} className="mb-6 text-3xl sm:text-4xl md:text-5xl text-navy">
                Book en demo av Digilist
          </Heading>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              >
              <Text variant="lead" className="mb-6 text-base sm:text-lg md:text-xl text-navy/70">
                Se hvordan Digilist kan forenkle booking og utleie for din organisasjon. 
                Vi tilpasser demoen til dine behov.
          </Text>
              </motion.div>
              
              {/* Feature badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
                className="flex flex-nowrap gap-2 justify-center lg:justify-start mb-8 overflow-x-auto"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border shadow-sm whitespace-nowrap shrink-0"
                >
                  <Clock size={14} className="text-cyan" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">30-45 minutter</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border shadow-sm whitespace-nowrap shrink-0"
                >
                  <Shield size={14} className="text-success" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">Ingen forpliktelser</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border shadow-sm whitespace-nowrap shrink-0"
                >
                  <Users size={14} className="text-primary" aria-hidden="true" />
                  <span className="text-xs font-medium text-navy">Tilpasset demo</span>
                </motion.span>
              </motion.div>
            </div>
            
            {/* Right - Application Images Gallery */}
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
                
                {/* Image Gallery Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Main large image */}
                  <div className="col-span-2 relative rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 group">
                    <img 
                      src="/images/utleieobjekter/kipo-kultursal.jpg" 
                      alt="Digilist Dashboard"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="px-2 py-0.5 bg-success/90 rounded text-xs font-medium text-white flex items-center gap-1">
                          <PlayCircle size={10} />
                          Gratis demo
                        </div>
                      </div>
                      <p className="text-base font-bold text-white">Se Digilist i aksjon</p>
                      <p className="text-xs text-white/80">Tilpasset din organisasjon</p>
                    </div>
                  </div>
                  
                  {/* Smaller images */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20 group">
                    <img 
                      src="/images/utleieobjekter/gyllenborg-idrettshall.jpg" 
                      alt="Digilist Booking Interface"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20 group">
                    <img 
                      src="/images/utleieobjekter/flytende-badstua-ulefoss.jpg" 
                      alt="Digilist Calendar View"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - Improved Structure */}
      <Section variant="rich-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-12">
            
            {/* LEFT: Form (Sticky) */}
            <div className="lg:col-span-5 order-1 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-sky2/50 shadow-lg relative overflow-hidden">
                {isSubmitted ? (
                  <div className="text-center py-8 relative z-10">
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-success" size={40} aria-hidden="true" />
                    </div>
                    <Heading level={3} className="mb-3 text-xl sm:text-2xl text-navy">
                      Takk for din interesse!
                    </Heading>
                    <Text variant="body" className="text-navy/60 mb-6">
                      Vi har mottatt din forespørsel og vil kontakte deg innen 1 arbeidsdag 
                      for å avtale tidspunkt for demo.
                    </Text>
                    <Button 
                      variant="secondary" 
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto"
                    >
                      Send ny forespørsel
                    </Button>
                  </div>
                ) : (
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-medium mb-4">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        Svar innen 24 timer
                      </div>
                      <Heading level={3} className="mb-2 text-xl sm:text-2xl text-navy">
                        Book din demo
                      </Heading>
                      <Text variant="body" className="text-navy/60 text-sm">
                        Fyll ut skjemaet, så kontakter vi deg
                      </Text>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                          Navn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input"
                          placeholder="Ditt navn"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                          E-post *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          placeholder="din@epost.no"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="+47 XXX XX XXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-navy mb-1.5">
                          Organisasjon *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="input"
                          placeholder="Organisasjonsnavn"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organizationType" className="block text-sm font-medium text-navy mb-1.5">
                          Type organisasjon *
                        </label>
                        <select
                          id="organizationType"
                          name="organizationType"
                          required
                          value={formData.organizationType}
                          onChange={handleChange}
                          className="input bg-white"
                        >
                          <option value="">Velg type</option>
                          <option value="kommune">Kommune</option>
                          <option value="kulturhus">Kulturhus</option>
                          <option value="idrett">Idrettsanlegg</option>
                          <option value="skole">Skole</option>
                          <option value="bedrift">Bedrift</option>
                          <option value="annet">Annet</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                          Hva ønsker du å se?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="input resize-none"
                          placeholder="Fortell oss litt om dine behov..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="gradient"
                        size="lg" 
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sender...' : 'Book demo nå'}
                        {!isSubmitting && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
            </Button>
                      
                      <p className="text-xs text-navy/50 text-center">
                        Ved å sende inn godtar du vår{' '}
                        <a href="/personvern" className="text-primary hover:underline">personvernerklæring</a>.
                      </p>
                    </form>
                  </div>
                )}
                </div>
              </div>
            </div>
            
            {/* RIGHT: Info Cards (Wider) */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              {/* What to expect - Feature Cards */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Zap className="text-white" size={20} />
                  </div>
                  <Heading level={3} className="text-xl sm:text-2xl text-navy">
                    Hva du kan forvente
                  </Heading>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {demoFeatures.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={idx}
                        className="group p-5 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                          <Icon className="text-white" size={22} aria-hidden="true" />
                        </div>
                        <h4 className="font-bold text-navy text-base mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-navy/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
            </div>
            
            {/* Demo Agenda - Timeline Style */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-success flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <Heading level={3} className="text-xl sm:text-2xl text-navy">
                  Typisk agenda (30-45 min)
                </Heading>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan to-success hidden sm:block" />
                
                <div className="space-y-4">
                  {demoAgenda.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                        <span className="text-xs font-bold text-white">{idx + 1}</span>
                      </div>
                      <div className="flex-1 p-4 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth cursor-pointer overflow-hidden">
                        <span className="text-sm font-medium text-navy">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Info - Horizontal Cards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <Heading level={3} className="text-xl sm:text-2xl text-navy">
                  Eller kontakt oss direkte
                </Heading>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="mailto:demo@digilist.no"
                  className="group p-5 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth text-center cursor-pointer overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                    <Mail className="text-white" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy/50 mb-1">E-post</p>
                  <p className="font-semibold text-navy group-hover:text-primary transition-colors text-sm">demo@digilist.no</p>
                </a>
                <a 
                  href="tel:+4722334455"
                  className="group p-5 rounded-xl bg-white border-2 border-sky2/50 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan transition-all duration-300 ease-smooth text-center cursor-pointer overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-success flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-smooth">
                    <Phone className="text-white" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy/50 mb-1">Telefon</p>
                  <p className="font-semibold text-navy group-hover:text-primary transition-colors text-sm">+47 22 33 44 55</p>
                </a>
                <div className="group p-5 rounded-xl bg-white border-2 border-sky2/50 shadow-lg text-center overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <MapPin className="text-white" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-xs text-navy/50 mb-1">Lokasjon</p>
                  <p className="font-semibold text-navy text-sm">Oslo, Norge</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Section>
    </div>
  );
}
