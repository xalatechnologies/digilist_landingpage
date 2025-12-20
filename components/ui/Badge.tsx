import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-badge text-xs font-bold shadow-sm mb-4 tracking-wide uppercase";
  
  const variants = {
    default: "bg-white text-action-blue border border-action-blue/20",
    dark: "bg-white/10 text-white border border-white/20"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

