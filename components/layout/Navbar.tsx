'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Menu, X, Info, Settings, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scroll on body
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/om-oss', label: 'Om oss', icon: Info },
    { href: '/funksjonalitet', label: 'Funksjonalitet', icon: Settings },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav 
      className={`
        sticky top-0 z-50 w-full transition-all duration-180 ease-smooth
        ${isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-soft border-b border-border-light' 
          : 'bg-surface-2 border-b border-border'}
      `}
      role="navigation"
      aria-label="Hovednavigasjon"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center h-[80px]">
          
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center cursor-pointer group relative focus-ring rounded-lg"
            aria-label="Digilist - Gå til forsiden"
          >
            <Logo size={52} className="group-hover:opacity-90 transition-all duration-180" />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/5 rounded-lg transition-colors duration-180" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-md
                    text-base font-medium transition-all duration-180 ease-smooth
                    min-h-[44px] relative overflow-hidden group focus-ring
                    ${isActive(link.href) 
                      ? 'text-primary bg-primary/5' 
                      : 'text-navy hover:text-primary hover:bg-surface-3'}
                  `}
                >
                  <Icon size={18} className="transition-transform duration-180 group-hover:scale-110" aria-hidden="true" />
                  <span>{link.label}</span>
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan rounded-full" />
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button with gradient */}
            <Link
              href="/demo"
              className="btn-gradient ml-4 group"
            >
              <PlayCircle size={20} className="transition-transform duration-180 group-hover:scale-110" aria-hidden="true" />
              <span className="ml-2">Book Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            ref={firstFocusableRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              md:hidden min-h-[44px] min-w-[44px] 
              flex items-center justify-center rounded-lg
              transition-all duration-300 ease-smooth focus-ring
              relative overflow-hidden group
              ${isMobileMenuOpen 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-navy hover:bg-primary/10 hover:text-primary'}
            `}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
            {!isMobileMenuOpen && (
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-navy/40 backdrop-blur-sm z-[45]"
              style={{ top: '80px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              id="mobile-menu"
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300
              }}
              className="md:hidden fixed right-0 w-[75%] max-w-[320px] bg-white shadow-2xl z-[50] flex flex-col overflow-hidden"
              style={{ top: '80px', bottom: 0, height: 'calc(100vh - 80px)' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobil meny"
            >
              {/* Decorative gradient bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-cyan to-success" />
              
              {/* Header with close button */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-border-light shrink-0">
                <h2 className="text-base font-bold text-navy">Meny</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-navy hover:bg-surface-3 transition-colors duration-200 focus-ring shrink-0"
                  aria-label="Lukk meny"
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-5">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isLinkActive = isActive(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.08,
                          duration: 0.25
                        }}
                      >
                        <Link 
                          href={link.href}
                          className={`
                            flex items-center gap-3 px-4 py-3.5 rounded-lg
                            transition-all duration-200 ease-smooth group focus-ring
                            relative
                            ${isLinkActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-navy hover:bg-surface-3'}
                          `}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {/* Active indicator */}
                          {isLinkActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                          )}
                          
                          <div 
                            className={`
                              w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                              transition-all duration-200
                              ${isLinkActive
                                ? 'bg-primary text-white'
                                : 'bg-surface-3 text-cyan group-hover:bg-cyan group-hover:text-white'}
                            `}
                          >
                            <Icon size={20} aria-hidden="true" />
                          </div>
                          
                          <span className="text-base font-medium flex-1 truncate">{link.label}</span>
                          
                          <ArrowRight 
                            size={16} 
                            className={`
                              text-navy/30 transition-all duration-200 shrink-0
                              ${isLinkActive ? 'text-primary' : 'group-hover:text-primary group-hover:translate-x-0.5'}
                            `}
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Mobile CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="mt-6 pt-6 border-t border-border-light"
                >
                  <Link
                    href="/demo"
                    className="btn-gradient w-full text-base justify-center py-3.5 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <PlayCircle size={20} aria-hidden="true" />
                    <span className="ml-2 font-semibold">Book Demo</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
