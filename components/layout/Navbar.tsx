'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlayCircle, Menu, X, Info, Settings } from 'lucide-react';
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
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
              flex items-center justify-center rounded-md
              transition-all duration-180 ease-smooth focus-ring
              ${isMobileMenuOpen 
                ? 'bg-navy text-white' 
                : 'text-navy hover:bg-surface-3'}
            `}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        className={`
          md:hidden fixed inset-0 top-[80px] z-40 
          transition-all duration-180 ease-smooth
          ${isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil meny"
      >
        {/* Backdrop */}
        <div 
          className={`
            absolute inset-0 bg-navy/20 backdrop-blur-sm
            transition-opacity duration-180
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`
            absolute top-0 right-0 w-[85%] max-w-[320px] h-full
            bg-surface shadow-lift
            transform transition-transform duration-180 ease-smooth
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Decorative gradient bar */}
          <div className="h-1 bg-gradient-button" />
          
          <div className="px-6 py-8">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`
                      flex items-center gap-4 px-4 py-4 rounded-md
                      transition-all duration-180 ease-smooth group focus-ring
                      ${isActive(link.href)
                        ? 'bg-gradient-to-r from-primary/10 to-cyan/10 text-primary'
                        : 'text-navy hover:bg-surface-3'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`
                      w-10 h-10 rounded-md flex items-center justify-center
                      transition-all duration-180 ease-smooth
                      ${isActive(link.href)
                        ? 'bg-primary text-white'
                        : 'bg-surface-3 text-cyan group-hover:bg-cyan group-hover:text-white'}
                    `}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-border-light">
              <Link
                href="/demo"
                className="btn-gradient w-full text-lg justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PlayCircle size={24} aria-hidden="true" />
                <span className="ml-2">Book Demo</span>
              </Link>
            </div>
            
            {/* Brand accent */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-cyan" />
              <div className="w-2 h-2 rounded-full bg-success" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
