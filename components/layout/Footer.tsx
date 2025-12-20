import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Produkt',
      links: [
        { href: '#features', label: 'Funksjoner' },
        { href: '#integrations', label: 'Integrasjoner' },
        { href: '#security', label: 'Sikkerhet' },
      ],
    },
    {
      title: 'Selskap',
      links: [
        { href: '#about', label: 'Om oss' },
        { href: '#careers', label: 'Karriere' },
        { href: '#contact', label: 'Kontakt' },
      ],
    },
    {
      title: 'Juridisk',
      links: [
        { href: '#privacy', label: 'Personvern' },
        { href: '#terms', label: 'Vilkår' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-base text-white py-16 pb-32 mt-auto" role="contentinfo">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl mb-6">
            <CheckCircle2 className="text-action-blue" aria-hidden="true" /> 
            <span>Digilist</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed tracking-tight">
            En digital tjeneste utviklet for å forenkle hverdagen i offentlig sektor.
          </p>
        </div>
        
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold mb-6 opacity-80 uppercase text-xs tracking-wider">
              {section.title}
            </h4>
            <ul className="space-y-3 text-sm opacity-70">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white hover:underline tracking-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

