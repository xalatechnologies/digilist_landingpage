import React from 'react';
import Image from 'next/image';

/**
 * Logo Configuration
 * ------------------
 * The logo shows "D" icon + "igilist" text = "Digilist"
 */
const LOGO_CONFIG = {
  imagePath: '/logo.png',
  brandName: 'Digilist',
  // The text to show after the D logo
  textSuffix: 'igilist',
};

export interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'default' | 'icon-only' | 'text-only';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 32,
  variant = 'default' 
}) => {
  // Calculate text size - make it larger and more readable
  const textSize = size * 0.65;

  if (variant === 'text-only') {
    return (
      <div className={`flex items-center ${className}`}>
        <span 
          className="font-extrabold text-navy-base tracking-tight"
          style={{ fontSize: `${size * 0.7}px` }}
        >
          {LOGO_CONFIG.brandName}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {/* D Logo */}
      <Image
        src={LOGO_CONFIG.imagePath}
        alt={`${LOGO_CONFIG.brandName} logo`}
        width={size * 4}
        height={size}
        className="flex-shrink-0 object-contain"
        style={{ height: size, width: 'auto' }}
        priority
      />
      {/* "igilist" text - directly next to D logo */}
      {variant !== 'icon-only' && (
        <span 
          className="font-extrabold text-navy-base tracking-tight leading-none"
          style={{ 
            fontSize: `${textSize}px`,
            marginLeft: '-6px',
          }}
        >
          {LOGO_CONFIG.textSuffix}
        </span>
      )}
    </div>
  );
};

