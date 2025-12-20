import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  showArrow = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-digdir focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action-blue tracking-tight min-h-[44px] min-w-[44px]";
  
  const sizeStyles = {
    default: "px-6 py-3",
    lg: "px-8 py-4 text-base",
  };
  
  const variants = {
    primary: "bg-action-blue text-white hover:bg-interaction-hover shadow-sm hover:-translate-y-[1px]",
    secondary: "bg-white text-navy-base border border-border-default hover:bg-zebra-tint hover:border-navy-base",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white/10",
    ghost: "bg-transparent text-navy-base hover:text-action-blue hover:bg-zebra-tint"
  };
  
  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={18} className="ml-2" aria-hidden="true" />}
    </button>
  );
};

