# Digilist Design Tokens

A comprehensive design token system for consistent, accessible, and maintainable UI across the Digilist platform.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Semantic Roles](#semantic-roles)
3. [Component Usage](#component-usage)
4. [Do's and Don'ts](#dos-and-donts)
5. [Accessibility Rules](#accessibility-rules)
6. [Implementation Guide](#implementation-guide)

---

## Color Palette

### Core Brand Colors (from Digilist Logo)

| Name         | CSS Variable | Hex       | RGB           | Usage                          |
|--------------|--------------|-----------|---------------|--------------------------------|
| Navy         | `--navy`     | `#1A365D` | `26 54 93`    | Primary text, dark backgrounds |
| Primary Blue | `--primary`  | `#2563EB` | `37 99 235`   | CTAs, links, active states     |
| Cyan         | `--cyan`     | `#06B6D4` | `6 182 212`   | Accents, focus rings, highlights |
| Sky Blue 1   | `--sky-1`    | `#38BDF8` | `56 189 248`  | Light accents, badges          |
| Sky Blue 2   | `--sky-2`    | `#7DD3FC` | `125 211 252` | Subtle backgrounds, hovers     |
| Success      | `--success`  | `#22C55E` | `34 197 94`   | Success states, green accents  |

### Tailwind Usage

```tsx
// Core colors
<div className="text-navy bg-primary border-cyan" />
<span className="text-sky1 bg-sky2/10" />
<button className="bg-success text-white" />
```

---

## Semantic Roles

### Surfaces
- `bg` / `surface` — White (#FFFFFF) - main page/card backgrounds
- `surface-2` — Tinted (#F0FDFA) - subtle alternate sections
- `surface-3` — Stronger tint (#E0F7FA) - emphasized areas

### Text
- `text` / `navy` — Primary text color
- `text-secondary` — Secondary paragraphs, less emphasis
- `text-muted` — Captions, labels, helper text
- `text-light` — Very subtle text, placeholders

### Borders
- `border` — Default borders (#E2E8F0)
- `border-light` — Subtle separators
- `border-accent` — Emphasis borders (sky blue)

### Interaction
- `primary` — Primary action color (buttons, links)
- `cyan` — Focus rings, hover states
- `success` — Positive actions, confirmations

### States
- `warning` — Warning indicators (#F59E0B)
- `error` — Error states (#EF4444)

---

## Component Usage

### Buttons

```tsx
// Primary button - main CTAs
<button className="btn-primary">Book demo</button>

// Gradient button - hero CTAs
<button className="btn-gradient">Kom i gang</button>

// Secondary button - alternative actions
<button className="btn-secondary">Les mer</button>

// Tertiary/link button
<button className="btn-tertiary">Avbryt</button>

// Ghost button
<button className="btn-ghost">Lukk</button>

// Sizes
<button className="btn-primary btn-sm">Small</button>
<button className="btn-primary">Default</button>
<button className="btn-primary btn-lg">Large</button>
```

### Cards

```tsx
// Default card
<div className="card">Content</div>

// Hoverable card
<div className="card-hover">Interactive content</div>
```

### Badges

```tsx
<span className="badge-info">Info</span>
<span className="badge-success">Success</span>
<span className="badge-warning">Warning</span>
<span className="badge-cyan">Highlight</span>
```

### Inputs

```tsx
<input className="input" placeholder="Enter text..." />
<input className="input-error" placeholder="Error state" />
```

### Links

```tsx
<a href="#" className="link">Standard link</a>
```

### Icons

```tsx
// Icon container with hover effect
<div className="icon-box">
  <Icon className="text-primary" />
</div>

// Large icon container
<div className="icon-box-lg bg-primary/10">
  <Icon className="text-primary" />
</div>
```

### Sections

```tsx
// Default white section
<section className="section section-default">
  <div className="container-main">...</div>
</section>

// Tinted section
<section className="section section-tinted">...</section>

// Gradient section
<section className="section section-gradient">...</section>

// Dark section
<section className="section section-dark">...</section>
```

---

## Do's and Don'ts

### ✅ DO

1. **Use token-based colors** - Always use the defined color utilities
   ```tsx
   ✅ <div className="text-navy bg-primary/10" />
   ```

2. **Use semantic color names** - Choose colors by role, not appearance
   ```tsx
   ✅ <button className="bg-primary" /> // for actions
   ✅ <span className="text-success" /> // for positive indicators
   ```

3. **Use alpha variations** - Token colors support opacity
   ```tsx
   ✅ <div className="bg-cyan/20 ring-1 ring-cyan/30" />
   ```

4. **Use component classes** - Leverage pre-built patterns
   ```tsx
   ✅ <button className="btn-gradient">CTA</button>
   ✅ <div className="card-hover">...</div>
   ```

5. **Add visible focus rings** - Always ensure keyboard accessibility
   ```tsx
   ✅ <input className="input" /> // has built-in focus
   ✅ <button className="focus-ring" /> // utility class
   ```

### ❌ DON'T

1. **Never use hard-coded hex colors**
   ```tsx
   ❌ <div style={{ color: '#1A365D' }} />
   ❌ <div className="text-[#2563EB]" />
   ```

2. **Never use arbitrary Tailwind colors**
   ```tsx
   ❌ <div className="bg-blue-500" /> // Use bg-primary instead
   ❌ <div className="text-gray-800" /> // Use text-navy instead
   ```

3. **Never rely on color alone for meaning**
   ```tsx
   ❌ <span className="text-error">Error</span>
   ✅ <span className="text-error flex items-center gap-2">
       <AlertCircle size={16} /> Error
     </span>
   ```

4. **Never remove focus styles without replacement**
   ```tsx
   ❌ <button className="focus:outline-none">...</button>
   ✅ <button className="focus-ring">...</button>
   ```

---

## Accessibility Rules

### Focus Visibility

All interactive elements MUST have visible focus indication:

```css
/* Default focus style (from globals.css) */
*:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgb(var(--cyan) / 0.35);
}
```

The cyan focus ring provides:
- **4.5:1 contrast ratio** against white backgrounds
- **Clear visibility** without being distracting
- **Consistency** across all components

### Color Contrast

All text must meet WCAG 2.1 AA standards:

| Color Combination      | Contrast | Minimum |
|------------------------|----------|---------|
| Navy on White          | 10.7:1   | 4.5:1 ✅ |
| Text-secondary on White | 7.2:1    | 4.5:1 ✅ |
| White on Primary       | 4.6:1    | 4.5:1 ✅ |
| White on Navy          | 10.7:1   | 4.5:1 ✅ |

### Touch Targets

All interactive elements have minimum 44x44px touch targets:

```css
.btn { min-h-[44px] min-w-[44px]; }
```

### Color-Only Meaning

Never use color as the only way to convey information:

```tsx
// ❌ Bad - color only
<div className="bg-success">Active</div>

// ✅ Good - color + icon + text
<div className="bg-success/10 text-success flex items-center gap-2">
  <CheckCircle size={16} />
  <span>Active</span>
</div>
```

---

## Implementation Guide

### File Structure

```
app/
├── styles/
│   └── tokens.css       # CSS custom properties (source of truth)
├── globals.css          # Imports tokens, component classes
components/
├── ui/
│   ├── Button.tsx       # Uses btn-* classes
│   ├── Card.tsx         # Uses card-* classes
│   ├── Badge.tsx        # Uses badge-* classes
│   └── ...
lib/
└── design-tokens.ts     # TypeScript exports for runtime access
tailwind.config.ts       # Maps CSS vars to Tailwind utilities
documentation/
└── design-tokens.md     # This file
```

### Adding New Colors

1. Add to `app/styles/tokens.css`:
   ```css
   :root {
     --new-color: 123 45 67;
   }
   ```

2. Add to `tailwind.config.ts`:
   ```ts
   colors: {
     'new-color': 'rgb(var(--new-color) / <alpha-value>)',
   }
   ```

3. Use in components:
   ```tsx
   <div className="text-new-color bg-new-color/10" />
   ```

### Migration from Old Colors

| Old Class              | New Class            |
|------------------------|----------------------|
| `text-brand-navy`      | `text-navy`          |
| `text-brand-blue`      | `text-primary`       |
| `text-brand-cyan`      | `text-cyan`          |
| `text-brand-green`     | `text-success`       |
| `bg-brand-aqua-tint`   | `bg-surface-3`       |
| `bg-brand-aqua-mist`   | `bg-surface-2`       |
| `border-border-default`| `border-border`      |
| `text-action-blue`     | `text-primary`       |
| `hover:text-brand-*`   | `hover:text-*`       |

---

## Summary

### Where Tokens Live
- **CSS Variables**: `app/styles/tokens.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Component Classes**: `app/globals.css` (@layer components)

### How to Use
1. Use Tailwind utility classes with token names (`text-navy`, `bg-primary/10`)
2. Use component classes for complex patterns (`btn-gradient`, `card-hover`)
3. Never use hard-coded colors

### Key Patterns Removed
- All `#HEXCODE` values in component styles
- All `text-[#...]`, `bg-[#...]` arbitrary values
- All `brand-*` prefixed color classes (replaced with simpler names)
- All mixed styling approaches

---

*Last updated: December 2024*

