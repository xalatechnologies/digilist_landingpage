import React from 'react';

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
  const iconSize = size;
  const textSize = size * 0.75;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Modern building with digital calendar */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Main building structure */}
        <rect
          x="5"
          y="11"
          width="22"
          height="19"
          rx="2"
          fill="#0051BE"
          className="transition-colors duration-300"
        />
        
        {/* Building entrance/base */}
        <rect
          x="12"
          y="26"
          width="8"
          height="4"
          rx="1"
          fill="#003E91"
        />
        
        {/* Windows/rooms - organized grid */}
        <rect x="8" y="15" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="11.5" y="15" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="15" y="15" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="18.5" y="15" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="22" y="15" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        
        <rect x="8" y="18.5" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="11.5" y="18.5" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="15" y="18.5" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="18.5" y="18.5" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="22" y="18.5" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        
        <rect x="8" y="22" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="11.5" y="22" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="15" y="22" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="18.5" y="22" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        <rect x="22" y="22" width="2.5" height="2.5" rx="0.3" fill="white" opacity="0.9" />
        
        {/* Calendar/booking badge - top right */}
        <rect
          x="19"
          y="4"
          width="9"
          height="9"
          rx="1.5"
          fill="#10B981"
        />
        {/* Calendar header */}
        <rect
          x="19"
          y="4"
          width="9"
          height="3"
          rx="1.5"
          fill="#059669"
        />
        {/* Calendar grid lines */}
        <line x1="21.5" y1="7" x2="21.5" y2="13" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="24" y1="7" x2="24" y2="13" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="26.5" y1="7" x2="26.5" y2="13" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="19" y1="9.5" x2="28" y2="9.5" stroke="white" strokeWidth="0.5" opacity="0.4" />
        {/* Calendar dots */}
        <circle cx="21" cy="11" r="0.8" fill="white" />
        <circle cx="24" cy="11" r="0.8" fill="white" />
        <circle cx="26.5" cy="11" r="0.8" fill="white" />
        
        {/* Connection line from calendar to building */}
        <line
          x1="23.5"
          y1="13"
          x2="23.5"
          y2="11"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Logo Text */}
      {variant !== 'icon-only' && (
        <span 
          className={`font-extrabold text-navy-base tracking-tighter transition-colors duration-300 ${
            variant === 'text-only' ? 'text-xl' : ''
          }`}
          style={variant === 'default' ? { fontSize: `${textSize}px` } : {}}
        >
          Digilist
        </span>
      )}
    </div>
  );
};

