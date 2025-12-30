import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ============================================
        // CORE PALETTE (from CSS tokens)
        // ============================================
        'navy': 'rgb(var(--navy) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'cyan': 'rgb(var(--cyan) / <alpha-value>)',
        'sky1': 'rgb(var(--sky-1) / <alpha-value>)',
        'sky2': 'rgb(var(--sky-2) / <alpha-value>)',
        'success': 'rgb(var(--success) / <alpha-value>)',

        // ============================================
        // SEMANTIC SURFACES
        // ============================================
        'bg': 'rgb(var(--bg) / <alpha-value>)',
        'surface': 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        'surface-3': 'rgb(var(--surface-3) / <alpha-value>)',
        'border': 'rgb(var(--border) / <alpha-value>)',
        'border-light': 'rgb(var(--border-light) / <alpha-value>)',
        'border-accent': 'rgb(var(--border-accent) / <alpha-value>)',

        // ============================================
        // TEXT COLORS
        // ============================================
        'text': 'rgb(var(--text) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-light': 'rgb(var(--text-light) / <alpha-value>)',

        // ============================================
        // INTERACTION
        // ============================================
        'focus': 'rgb(var(--focus) / <alpha-value>)',
        'link': 'rgb(var(--link) / <alpha-value>)',
        'hover-bg': 'rgb(var(--hover-bg) / <alpha-value>)',

        // ============================================
        // STATE COLORS
        // ============================================
        'warning': 'rgb(var(--warning) / <alpha-value>)',
        'error': 'rgb(var(--error) / <alpha-value>)',

        // ============================================
        // THIRD-PARTY BRANDS
        // ============================================
        'vipps': 'rgb(var(--vipps) / <alpha-value>)',
        'bankid': 'rgb(var(--bankid) / <alpha-value>)',
        'microsoft': 'rgb(var(--microsoft) / <alpha-value>)',

        // ============================================
        // CATEGORY COLORS (for rental objects)
        // ============================================
        'category': {
          'culture': {
            primary: '#8B5CF6',
            secondary: '#C4B5FD',
            accent: '#7C3AED',
            light: '#F5F3FF',
          },
          'water': {
            primary: 'rgb(var(--cyan))',
            secondary: '#A5F3FC',
            accent: '#0891B2',
            light: '#E0F7FA',
          },
          'sports': {
            primary: 'rgb(var(--success))',
            secondary: '#BBF7D0',
            accent: '#16A34A',
            light: '#DCFCE7',
          },
          'default': {
            primary: 'rgb(var(--primary))',
            secondary: '#BAE6FD',
            accent: '#1D4ED8',
            light: '#EFF6FF',
          },
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        base: ['18px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        // Heading sizes from design tokens
        'heading-2xl': 'var(--heading-2xl-size)',
        'heading-xl': 'var(--heading-xl-size)',
        'heading-lg': 'var(--heading-lg-size)',
        'heading-md': 'var(--heading-md-size)',
        'heading-sm': 'var(--heading-sm-size)',
        'heading-xs': 'var(--heading-xs-size)',
        'heading-2xs': 'var(--heading-2xs-size)',
        // Body sizes
        'body-lg': 'var(--body-lg-size)',
        'body-md': 'var(--body-md-size)',
        'body-sm': 'var(--body-sm-size)',
        'body-xs': 'var(--body-xs-size)',
      },

      lineHeight: {
        'heading-2xl': 'var(--heading-2xl-line-height)',
        'heading-xl': 'var(--heading-xl-line-height)',
        'heading-lg': 'var(--heading-lg-line-height)',
        'heading-md': 'var(--heading-md-line-height)',
        'heading-sm': 'var(--heading-sm-line-height)',
        'heading-xs': 'var(--heading-xs-line-height)',
        'heading-2xs': 'var(--heading-2xs-line-height)',
      },

      letterSpacing: {
        'heading-2xl': 'var(--heading-2xl-letter-spacing)',
        'heading-xl': 'var(--heading-xl-letter-spacing)',
        'heading-lg': 'var(--heading-lg-letter-spacing)',
        'heading-md': 'var(--heading-md-letter-spacing)',
        'heading-sm': 'var(--heading-sm-letter-spacing)',
        'heading-xs': 'var(--heading-xs-letter-spacing)',
        'heading-2xs': 'var(--heading-2xs-letter-spacing)',
      },

      borderRadius: {
        'sm': 'var(--r-sm)',
        'md': 'var(--r-md)',
        'lg': 'var(--r-lg)',
        'xl': 'var(--r-xl)',
        'full': 'var(--r-full)',
      },

      spacing: {
        'section': 'var(--s-section)',
        'section-sm': 'var(--s-section-sm)',
        // Design system spacing (ds-size-*)
        'ds-0': 'var(--ds-size-0)',
        'ds-1': 'var(--ds-size-1)',
        'ds-2': 'var(--ds-size-2)',
        'ds-3': 'var(--ds-size-3)',
        'ds-4': 'var(--ds-size-4)',
        'ds-5': 'var(--ds-size-5)',
        'ds-6': 'var(--ds-size-6)',
        'ds-8': 'var(--ds-size-8)',
        'ds-10': 'var(--ds-size-10)',
        'ds-12': 'var(--ds-size-12)',
        'ds-16': 'var(--ds-size-16)',
        'ds-20': 'var(--ds-size-20)',
        'ds-24': 'var(--ds-size-24)',
      },

      maxWidth: {
        'container': 'var(--s-container)',
      },

      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'soft': 'var(--shadow-soft)',
        'lift': 'var(--shadow-lift)',
        'glow': 'var(--shadow-glow)',
        'glow-strong': 'var(--shadow-glow-strong)',
      },

      transitionTimingFunction: {
        'smooth': 'var(--ease)',
        'bounce': 'var(--ease-bounce)',
      },

      transitionDuration: {
        '120': 'var(--dur-1)',
        '180': 'var(--dur-2)',
        '300': 'var(--dur-3)',
      },

      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgb(var(--surface-2)) 0%, rgb(var(--surface-3)) 50%, rgb(var(--sky-2) / 0.3) 100%)',
        'gradient-section': 'linear-gradient(180deg, rgb(var(--bg)) 0%, rgb(var(--surface-2)) 50%, rgb(var(--surface-3)) 100%)',
        'gradient-button': 'linear-gradient(135deg, rgb(var(--primary)) 0%, rgb(var(--cyan)) 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgb(var(--cyan)) 0%, rgb(var(--success)) 100%)',
        'gradient-navy': 'linear-gradient(135deg, rgb(var(--navy)) 0%, rgb(45 74 111) 100%)',
      },

      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-3px) rotate(-2deg)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(3px) rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: 'var(--shadow-glow)' },
          '50%': { boxShadow: 'var(--shadow-glow-strong)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.3s var(--ease) forwards',
      },
    },
  },
  plugins: [],
}

export default config
