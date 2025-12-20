import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'zebra' | 'dark';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  id 
}) => {
  const baseStyles = "py-section";
  
  const variantStyles = {
    default: "bg-white",
    zebra: "bg-zebra-tint border-t border-border-default",
    dark: "bg-navy-base text-white",
  };

  return (
    <section 
      id={id}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

