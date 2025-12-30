import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'tertiary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  showArrow = false,
  disabled,
  ...props
}, ref) => {
  // Size classes
  const sizeClasses = {
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg',
  };
  
  // Variant classes (using component layer from globals.css)
  const variantClasses = {
    primary: 'btn-primary',
    gradient: 'btn-gradient',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    ghost: 'btn-ghost',
  };
  
  // Combine classes
  const buttonClasses = [
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'btn-disabled' : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <button 
      ref={ref}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight 
          size={size === 'lg' ? 20 : size === 'sm' ? 14 : 18} 
          className="ml-2 transition-transform duration-180 group-hover:translate-x-1" 
          aria-hidden="true" 
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';
