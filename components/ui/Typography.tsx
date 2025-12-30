import React from 'react';

/**
 * Heading sizes based on design tokens
 * Use data-size attribute for semantic sizing
 */
export type HeadingSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic level (h1-h6) for accessibility */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual size - decoupled from semantic level */
  size?: HeadingSize;
  children: React.ReactNode;
}

/**
 * Heading component with design token support
 * 
 * @example
 * <Heading size="2xl">Hero Title</Heading>
 * <Heading level={2} size="lg">Section Title</Heading>
 * <Heading level={3} size="md">Card Title</Heading>
 */
export const Heading: React.FC<HeadingProps> = ({ 
  level, 
  size,
  children, 
  className = '', 
  ...props 
}) => {
  // Base styles using design tokens
  const baseStyles = "font-bold text-navy";
  
  // Size styles using CSS custom properties
  const sizeStyles: Record<HeadingSize, string> = {
    '2xl': 'text-heading-2xl leading-heading-2xl tracking-heading-2xl',
    'xl': 'text-heading-xl leading-heading-xl tracking-heading-xl',
    'lg': 'text-heading-lg leading-heading-lg tracking-heading-lg',
    'md': 'text-heading-md leading-heading-md tracking-heading-md',
    'sm': 'text-heading-sm leading-heading-sm tracking-heading-sm',
    'xs': 'text-heading-xs leading-heading-xs tracking-heading-xs',
    '2xs': 'text-heading-2xs leading-heading-2xs tracking-heading-2xs',
  };

  // Fallback legacy level styles (when no size is provided)
  const levelStyles: Record<number, string> = {
    1: "text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] tracking-[-0.03em]",
    2: "text-2xl sm:text-3xl md:text-[2.5rem] leading-[1.15] tracking-[-0.025em] mb-4",
    3: "text-xl sm:text-2xl leading-[1.2] tracking-[-0.02em] mb-3",
    4: "text-lg sm:text-xl leading-[1.3] tracking-[-0.015em] mb-2",
    5: "text-base sm:text-lg leading-[1.4] mb-2",
    6: "text-sm sm:text-base leading-[1.5] mb-2",
  };

  // Determine the visual size to apply
  const visualStyles = size 
    ? sizeStyles[size] 
    : (level ? levelStyles[level] : levelStyles[2]);

  const combinedClassName = `${baseStyles} ${visualStyles} ${className}`;
  
  // Determine semantic level (defaults based on size if level not provided)
  const semanticLevel = level || (size ? getSemanaticLevelFromSize(size) : 2);
  
  const Tag = `h${semanticLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  return (
    <Tag 
      className={combinedClassName} 
      data-size={size}
      {...(props as React.HTMLAttributes<HTMLHeadingElement>)}
    >
      {children}
    </Tag>
  );
};

// Helper to get sensible semantic level from visual size
function getSemanaticLevelFromSize(size: HeadingSize): 1 | 2 | 3 | 4 | 5 | 6 {
  const sizeToLevel: Record<HeadingSize, 1 | 2 | 3 | 4 | 5 | 6> = {
    '2xl': 1,
    'xl': 1,
    'lg': 2,
    'md': 3,
    'sm': 4,
    'xs': 5,
    '2xs': 6,
  };
  return sizeToLevel[size];
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  size,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "tracking-tight";
  
  // Variant styles using design token colors
  const variantStyles = {
    body: "text-navy leading-relaxed",
    lead: "text-navy/70 leading-relaxed",
    small: "text-navy/60",
    muted: "text-muted",
  };

  // Size styles
  const sizeStyles = {
    lg: "text-lg",      // 18px
    md: "text-base",    // 16px  
    sm: "text-sm",      // 14px
    xs: "text-xs",      // 12px
  };

  const textSize = size ? sizeStyles[size] : (variant === 'lead' ? 'text-xl' : 'text-base');

  return (
    <p 
      className={`${baseStyles} ${textSize} ${variantStyles[variant]} ${className}`} 
      data-size={size}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Label component for form labels
 * Similar to @digdir/designsystemet-react Label
 * 
 * @example
 * <Label>Fødselsnummer (11 sifre)</Label>
 * <Label htmlFor="email" size="md">E-postadresse</Label>
 * <Label size="sm" weight="regular">Hjelpetekst</Label>
 */
export type LabelSize = 'lg' | 'md' | 'sm' | 'xs';
export type LabelWeight = 'medium' | 'regular';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  /** Size of the label text */
  size?: LabelSize;
  /** Font weight */
  weight?: LabelWeight;
  /** Shows required indicator (*) */
  required?: boolean;
  /** Optional description below label */
  description?: string;
  /** Spacing below label */
  spacing?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = 'sm',
  weight = 'medium',
  required = false,
  description,
  spacing = true,
  className = '',
  ...props
}) => {
  const sizeStyles: Record<LabelSize, string> = {
    lg: 'text-base',
    md: 'text-sm',
    sm: 'text-sm',
    xs: 'text-xs',
  };

  const weightStyles: Record<LabelWeight, string> = {
    medium: 'font-medium',
    regular: 'font-normal',
  };

  return (
    <div className={spacing ? 'mb-1.5' : ''}>
      <label
        htmlFor={htmlFor}
        className={`block ${sizeStyles[size]} ${weightStyles[weight]} text-navy ${className}`}
        data-size={size}
        {...props}
      >
        {children}
        {required && <span className="text-error ml-0.5" aria-hidden="true">*</span>}
      </label>
      {description && (
        <p className="text-xs text-muted mt-0.5">{description}</p>
      )}
    </div>
  );
};

/**
 * Paragraph component for body text with semantic sizing
 * Similar to @digdir/designsystemet-react Paragraph
 * 
 * @example
 * <Paragraph size="lg">Large paragraph text</Paragraph>
 * <Paragraph>Default paragraph text</Paragraph>
 * <Paragraph size="sm" short>Short line length</Paragraph>
 * <Paragraph spacing>With bottom margin</Paragraph>
 */
export type ParagraphSize = 'lg' | 'md' | 'sm' | 'xs';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  /** Text size */
  size?: ParagraphSize;
  /** Shorter line length for better readability (max-width) */
  short?: boolean;
  /** Add bottom margin for spacing between paragraphs */
  spacing?: boolean;
  /** Muted/secondary text color */
  muted?: boolean;
  /** As prop for polymorphic rendering */
  as?: 'p' | 'span' | 'div';
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'md',
  short = false,
  spacing = false,
  muted = false,
  as: Component = 'p',
  className = '',
  ...props
}) => {
  const sizeStyles: Record<ParagraphSize, string> = {
    lg: 'text-lg leading-relaxed',
    md: 'text-base leading-relaxed',
    sm: 'text-sm leading-normal',
    xs: 'text-xs leading-normal',
  };

  const colorStyle = muted ? 'text-muted' : 'text-navy/80';
  const shortStyle = short ? 'max-w-prose' : '';
  const spacingStyle = spacing ? 'mb-4' : '';

  return (
    <Component 
      className={`${sizeStyles[size]} ${colorStyle} ${shortStyle} ${spacingStyle} ${className}`}
      data-size={size}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ErrorMessage component for form validation
 * 
 * @example
 * <ErrorMessage>Dette feltet er påkrevd</ErrorMessage>
 */
export interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p 
      className={`text-sm text-error mt-1 flex items-center gap-1 ${className}`}
      role="alert"
      {...props}
    >
      <svg 
        className="w-4 h-4 shrink-0" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
          clipRule="evenodd" 
        />
      </svg>
      {children}
    </p>
  );
};
