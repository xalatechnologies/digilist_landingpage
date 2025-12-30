import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'info' | 'success' | 'warning' | 'cyan' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'info',
  className = '' 
}) => {
  // Variant classes using token-based component layer
  const variantClasses = {
    default: 'badge-info',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    cyan: 'badge-cyan',
    dark: 'badge bg-navy/80 text-white ring-1 ring-white/20',
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
