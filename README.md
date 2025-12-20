# Digilist Landing Page

A production-grade Next.js 14 landing page built with strict adherence to Norwegian "Designsystemet" (Digdir/Aksel) and Universell Utforming (UU) accessibility standards.

## Features

- ✅ **Next.js 14 App Router** - Modern React Server Components architecture
- ✅ **TypeScript** - Strict type safety throughout
- ✅ **Tailwind CSS** - Utility-first styling with custom design tokens
- ✅ **Mobile-First** - Responsive design with 400% zoom support (WCAG compliant)
- ✅ **Accessibility (UU)** - WCAG 2.1 AA compliant with skip links, focus management, and semantic HTML
- ✅ **Modular Architecture** - Clean component structure with separation of concerns
- ✅ **Design System** - Strict adherence to Digdir color palette and typography

## Project Structure

```
digilist_landingPage/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── demo/
│   │   └── page.tsx         # Demo/Product Tour page
│   └── globals.css          # Global styles & design tokens
├── components/
│   ├── ui/                  # Atomic UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── Typography.tsx
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── SkipLink.tsx
│   └── features/            # Feature-specific components
│       ├── DashboardPreview.tsx
│       ├── TrustBar.tsx
│       ├── FeatureCard.tsx
│       ├── VideoController.tsx
│       └── TestimonialCard.tsx
├── tailwind.config.ts       # Design system tokens
└── package.json
```

## Design Tokens

### Colors
- **Navy Base**: `#1E2B3C` - Primary text color
- **Action Blue**: `#0051BE` - Primary action color
- **Interaction Hover**: `#003E91` - Hover state
- **Zebra Tint**: `#F3F4F4` - Alternating section backgrounds
- **Border Default**: `#DDE1E6` - Standard borders

### Typography
- **Font**: Inter (400, 500, 600, 700)
- **Base Size**: 18px
- **Tracking**: `-0.01em` (tight) for UI, `-0.02em` (tighter) for headings

### Spacing & Radius
- **Section Padding**: `var(--s-12)` (96px)
- **Border Radius**: 4px (strict, professional)
- **Badge Radius**: 40px

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Accessibility Features

- **Skip Link**: "Hopp til hovedinnhold" as first focusable element
- **Focus Management**: Keyboard navigation with focus trapping in mobile menu
- **Semantic HTML**: Proper heading hierarchy (h1-h6) with no skipped levels
- **ARIA Labels**: All icon-only buttons have descriptive labels
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Contrast Ratios**: WCAG 2.1 AA compliant (4.5:1 for text)
- **Zoom Support**: Layout handles 400% zoom without horizontal scrolling

## Component Usage Examples

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary">Kom i gang</Button>
<Button variant="secondary" showArrow>Les mer</Button>
```

### Section
```tsx
import { Section } from '@/components/layout';

<Section variant="zebra" id="features">
  {/* Content */}
</Section>
```

### Feature Card
```tsx
import { FeatureCard } from '@/components/features';
import { Calendar } from 'lucide-react';

<FeatureCard
  icon={Calendar}
  title="Felles Kalender"
  description="Full oversikt over alle lokaler..."
/>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Digilist
