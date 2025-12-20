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
        // Digdir Design System Colors
        'navy-base': '#1E2B3C',
        'action-blue': '#0051BE',
        'interaction-hover': '#003E91',
        'zebra-tint': '#F3F4F4',
        'section-light': '#F0F7FA', // Light blue-grey for section backgrounds (Norwegian gov style)
        'card-bg': '#FAFBFC', // Very subtle off-white for cards (Norwegian gov style)
        'border-default': '#DDE1E6',
        'text-secondary': '#545E6B',
        'text-muted': '#64748B',
        'background-light': '#EEF2FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'digdir': '4px',
        'badge': '40px',
      },
      spacing: {
        'section': 'var(--s-12)',
      },
      transitionProperty: {
        'digdir': 'border-color, transform, box-shadow, color, text-decoration',
      },
    },
  },
  plugins: [],
}
export default config

