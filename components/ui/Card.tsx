import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverable = false,
  onClick 
}) => {
  const baseStyles = "border border-border-default rounded-digdir p-8";
  const bgStyle = { backgroundColor: '#FAFBFC' };
  const hoverStyles = hoverable 
    ? "group cursor-pointer hover:border-action-blue hover:shadow-xl hover:-translate-y-[4px] transition-all duration-300 ease-out"
    : "";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={bgStyle}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export interface CardLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const CardLink: React.FC<CardLinkProps> = ({ 
  href = '#', 
  children, 
  className = '' 
}) => {
  return (
    <a 
      href={href}
      className={`flex items-center gap-2 text-action-blue font-bold tracking-tight mt-auto pt-6 group-hover:text-interaction-hover transition-colors duration-300 ${className}`}
    >
      {children}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
    </a>
  );
};

