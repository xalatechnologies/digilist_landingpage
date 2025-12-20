'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckCircle2, PlayCircle, Menu, X, Building2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isMobileMenuOpen]);

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

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-white border-b border-border-default"
      role="navigation"
      aria-label="Hovednavigasjon"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex justify-between items-center h-[84px]">
          
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center cursor-pointer group"
            aria-label="Digilist - Gå til forsiden"
          >
            <Logo size={32} className="group-hover:opacity-90 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#utleieobjekter"
              className="flex items-center gap-2 text-base font-medium text-navy-base hover:text-action-blue hover:underline underline-offset-4 decoration-2 transition-all tracking-tight min-h-[44px]"
            >
              <Building2 size={18} aria-hidden="true" />
              Se utleieobjekter
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/demo"
              className={`flex items-center gap-2 text-base font-medium transition-all tracking-tight min-h-[44px] hover:underline underline-offset-4 decoration-2 ${
                pathname === '/demo' ? 'text-action-blue' : 'text-navy-base hover:text-action-blue'
              }`}
            >
              <PlayCircle size={20} aria-hidden="true" />
              Se demo
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 text-base font-medium text-navy-base hover:text-action-blue hover:underline underline-offset-4 decoration-2 transition-all tracking-tight min-h-[44px]"
            >
              <LogIn size={18} aria-hidden="true" />
              Logg inn
            </Link>
            <Button variant="primary" className="py-2.5 px-5 text-base">
              Book møte
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            ref={firstFocusableRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-navy-base min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden absolute top-[84px] w-full bg-white border-b border-border-default p-4 flex flex-col gap-4 shadow-xl"
          role="menu"
        >
          <a 
            href="#utleieobjekter"
            className="flex items-center gap-2 font-medium text-navy-base min-h-[44px]"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Building2 size={18} aria-hidden="true" />
            Se utleieobjekter
          </a>
          <Link 
            href="/demo"
            className="flex items-center gap-2 font-medium text-action-blue min-h-[44px]"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <PlayCircle size={18} aria-hidden="true" /> Se demo
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 font-medium text-navy-base min-h-[44px]"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <LogIn size={18} aria-hidden="true" />
            Logg inn
          </Link>
          <Button 
            ref={lastFocusableRef}
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book møte
          </Button>
        </div>
      )}
    </nav>
  );
};

