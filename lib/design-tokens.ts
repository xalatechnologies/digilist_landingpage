/**
 * Digilist Design Tokens - TypeScript Runtime Access
 * 
 * This file provides TypeScript access to design tokens for cases where
 * CSS classes aren't applicable (e.g., dynamic styles, SVG fills, charts).
 * 
 * For standard usage, prefer Tailwind classes from tokens.css:
 *   - text-navy, bg-primary, border-cyan, etc.
 * 
 * Palette (from Digilist logo):
 * - Deep Navy: #1A365D
 * - Primary Blue: #2563EB
 * - Cyan: #06B6D4
 * - Sky Blue 1: #38BDF8
 * - Sky Blue 2: #7DD3FC
 * - Green: #22C55E
 */

export const tokens = {
  // ============================================
  // CORE PALETTE
  // ============================================
  colors: {
    navy: '#1A365D',
    primary: '#2563EB',
    cyan: '#06B6D4',
    sky1: '#38BDF8',
    sky2: '#7DD3FC',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',

    // Surfaces
    bg: '#FFFFFF',
    surface: '#FFFFFF',
    surface2: '#F0FDFA',
    surface3: '#E0F7FA',

    // Borders
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    borderAccent: '#BAE6FD',

    // Text
    text: '#1A365D',
    textSecondary: '#475569',
    textMuted: '#64748B',
    textLight: '#94A3B8',

    // Third-party brands (use only for those specific brands)
    vipps: '#FF5B24',
    microsoft: '#0078D4',
  },

  // ============================================
  // RADIUS
  // ============================================
  radius: {
    sm: '10px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    full: '9999px',
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    xs: '0 1px 2px rgb(26 54 93 / 0.05)',
    sm: '0 2px 4px rgb(26 54 93 / 0.06)',
    soft: '0 10px 30px rgb(26 54 93 / 0.10)',
    lift: '0 16px 50px rgb(26 54 93 / 0.14)',
    glow: '0 0 20px rgb(6 182 212 / 0.30)',
    glowStrong: '0 0 40px rgb(6 182 212 / 0.45)',
  },

  // ============================================
  // MOTION
  // ============================================
  motion: {
    ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    easeBounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    dur1: '120ms',
    dur2: '180ms',
    dur3: '300ms',
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    section: '6rem',
    sectionSm: '4rem',
    container: '1140px',
  },
} as const;

// ============================================
// CATEGORY COLORS (for rental object types)
// ============================================
export type ColorScheme = 'culture' | 'water' | 'sports' | 'default';

const categoryColors = {
  culture: {
    primary: '#8B5CF6',
    secondary: '#C4B5FD',
    accent: '#7C3AED',
    light: '#F5F3FF',
  },
  water: {
    primary: tokens.colors.cyan,
    secondary: '#A5F3FC',
    accent: '#0891B2',
    light: tokens.colors.surface3,
  },
  sports: {
    primary: tokens.colors.success,
    secondary: '#BBF7D0',
    accent: '#16A34A',
    light: '#DCFCE7',
  },
  default: {
    primary: tokens.colors.primary,
    secondary: tokens.colors.sky2,
    accent: '#1D4ED8',
    light: '#EFF6FF',
  },
};

export const getCategoryColors = (scheme: ColorScheme) => {
  return categoryColors[scheme];
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a color value from the tokens
 */
export const getColor = (color: keyof typeof tokens.colors): string => {
  return tokens.colors[color];
};

/**
 * Create a CSS variable reference for use in inline styles
 */
export const cssVar = (name: string, fallback?: string): string => {
  return fallback ? `var(--${name}, ${fallback})` : `var(--${name})`;
};

// Legacy export for backwards compatibility during migration
export const designTokens = {
  colors: {
    brand: {
      navy: tokens.colors.navy,
      blue: tokens.colors.primary,
      cyan: tokens.colors.cyan,
      sky: tokens.colors.sky1,
      skyLight: tokens.colors.sky2,
      green: tokens.colors.success,
    },
    navyBase: tokens.colors.navy,
    actionBlue: tokens.colors.primary,
    accentCyan: tokens.colors.cyan,
    vipps: { DEFAULT: tokens.colors.vipps },
    microsoft: { DEFAULT: tokens.colors.microsoft },
    category: categoryColors,
  },
};

export default tokens;
