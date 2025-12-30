import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Card component with compound component pattern
 * Similar to @digdir/designsystemet-react Card
 * 
 * @example
 * <Card>
 *   <Card.Block>Tittel</Card.Block>
 *   <Card.Block>Innhold</Card.Block>
 *   <Card.Block>Valgfri fotnote</Card.Block>
 * </Card>
 * 
 * @example
 * <Card color="primary" hoverable>
 *   <Card.Header>Header</Card.Header>
 *   <Card.Block>Content</Card.Block>
 *   <Card.Footer>Footer</Card.Footer>
 * </Card>
 */

export type CardColor = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Card color scheme */
  color?: CardColor;
  /** Enable hover effects */
  hoverable?: boolean;
  /** Make card a clickable button */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'default' | 'gradient' | 'outlined' | 'filled';
  /** As link - wraps entire card */
  asLink?: boolean;
  /** Link href when asLink is true */
  href?: string;
}

export interface CardBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Reduces padding */
  compact?: boolean;
  /** Border bottom between blocks */
  borderBottom?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Position of media */
  position?: 'top' | 'bottom';
}

// Color mapping to design tokens
const colorStyles: Record<CardColor, { border: string; bg: string; accent: string }> = {
  neutral: {
    border: 'border-border',
    bg: 'bg-surface',
    accent: 'hover:border-navy/30',
  },
  primary: {
    border: 'border-primary/20',
    bg: 'bg-primary/5',
    accent: 'hover:border-primary',
  },
  secondary: {
    border: 'border-cyan/20',
    bg: 'bg-cyan/5',
    accent: 'hover:border-cyan',
  },
  success: {
    border: 'border-success/20',
    bg: 'bg-success/5',
    accent: 'hover:border-success',
  },
  warning: {
    border: 'border-warning/20',
    bg: 'bg-warning/5',
    accent: 'hover:border-warning',
  },
  danger: {
    border: 'border-error/20',
    bg: 'bg-error/5',
    accent: 'hover:border-error',
  },
};

/**
 * Card.Block - Content block within a card
 */
const CardBlock: React.FC<CardBlockProps> = ({
  children,
  compact = false,
  borderBottom = false,
  className = '',
  ...props
}) => {
  const paddingClass = compact ? 'px-4 py-3' : 'px-6 py-4';
  const borderClass = borderBottom ? 'border-b border-border' : '';

  return (
    <div 
      className={`${paddingClass} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card.Header - Header section of card
 */
const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`px-6 py-4 border-b border-border ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card.Footer - Footer section of card
 */
const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`px-6 py-4 border-t border-border bg-surface-2/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card.Media - Media container (images, videos)
 */
const CardMedia: React.FC<CardMediaProps> = ({
  children,
  position = 'top',
  className = '',
  ...props
}) => {
  const positionClass = position === 'top' 
    ? 'rounded-t-lg -mt-px -mx-px' 
    : 'rounded-b-lg -mb-px -mx-px';

  return (
    <div 
      className={`overflow-hidden ${positionClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Main Card component
 */
const CardRoot: React.FC<CardProps> = ({ 
  children, 
  color = 'neutral',
  hoverable = false,
  onClick,
  variant = 'default',
  asLink = false,
  href,
  className = '',
  ...props
}) => {
  const colorStyle = colorStyles[color];
  
  const variantClasses = {
    default: `bg-white border-2 border-sky2/50`,
    gradient: `bg-white border-2 border-sky2/50`,
    outlined: `bg-white/80 backdrop-blur-sm border-2 border-sky2/50`,
    filled: `${colorStyle.bg} border-2 border-sky2/50`,
  };

  const hoverClasses = hoverable 
    ? `shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-cyan cursor-pointer` 
    : 'shadow-lg';

  const baseClasses = `
    rounded-lg
    transition-all duration-300 ease-smooth
    ${variantClasses[variant]}
    ${hoverClasses}
  `.trim().replace(/\s+/g, ' ');

  const handleKeyDown = onClick ? (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  } : undefined;

  // Render as link
  if (asLink && href) {
    return (
      <a
        href={href}
        className={`block group ${baseClasses} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <div 
      className={`group ${baseClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card.Link - Link within a card
 */
export interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  showArrow?: boolean;
}

const CardLink: React.FC<CardLinkProps> = ({ 
  href = '#', 
  children, 
  showArrow = true,
  className = '',
  ...props
}) => {
  return (
    <a 
      href={href}
      className={`
        inline-flex items-center gap-2 
        text-primary font-semibold
        hover:text-cyan transition-colors duration-180
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:rounded
        ${className}
      `}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight 
          size={18} 
          className="group-hover:translate-x-1 transition-transform duration-180" 
          aria-hidden="true" 
        />
      )}
    </a>
  );
};

// Compound component export
export const Card = Object.assign(CardRoot, {
  Block: CardBlock,
  Header: CardHeader,
  Footer: CardFooter,
  Media: CardMedia,
  Link: CardLink,
});

// Named exports for backwards compatibility
export { CardLink };
