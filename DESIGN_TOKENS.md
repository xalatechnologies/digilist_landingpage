# Design Tokens

> **Note**: This documentation has been moved.
> 
> Please see [documentation/design-tokens.md](./documentation/design-tokens.md) for the complete design token system documentation.

## Quick Reference

### Token System Location

| File | Purpose |
|------|---------|
| `app/styles/tokens.css` | CSS custom properties (source of truth) |
| `tailwind.config.ts` | Tailwind utility mappings |
| `app/globals.css` | Component classes, imports |
| `lib/design-tokens.ts` | TypeScript runtime access |

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1A365D` | Primary text, dark backgrounds |
| `primary` | `#2563EB` | CTAs, links, active states |
| `cyan` | `#06B6D4` | Accents, focus rings |
| `sky1` | `#38BDF8` | Light accents |
| `sky2` | `#7DD3FC` | Subtle backgrounds |
| `success` | `#22C55E` | Success states |

### Quick Start

```tsx
// Use token-based Tailwind classes
<button className="btn-gradient">Primary CTA</button>
<button className="btn-secondary">Secondary</button>
<div className="card-hover">Interactive card</div>
<span className="badge-success">Active</span>
<input className="input" placeholder="Enter text..." />
```

For full documentation, see [documentation/design-tokens.md](./documentation/design-tokens.md).
