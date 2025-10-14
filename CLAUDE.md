# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **real estate property listing website** built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The application displays property listings with filtering capabilities, property detail pages, blog functionality, and authentication support.

**Working Directory:** `/package/` (all code is in this subdirectory)

## Development Commands

All commands must be run from the `/package` directory:

```bash
cd package

# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Architecture

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **React:** v19
- **TypeScript:** v5
- **Styling:** Tailwind CSS with custom extended config
- **Authentication:** NextAuth.js (Google & GitHub OAuth)
- **Animations:** AOS (Animate On Scroll)
- **UI Components:** Custom components with react-slick for carousels
- **Content:** MDX files for blog posts (in `/markdown/blogs/`)

### App Structure (App Router)

```
src/app/
├── (site)/                    # Route group for main site
│   ├── (auth)/               # Authentication pages (login, register)
│   ├── blogs/                # Blog listing and [slug] for individual posts
│   ├── contact/              # Contact page
│   ├── documentation/        # Documentation page
│   └── properties/
│       └── properties-list/  # Property listing and [slug] for details
├── api/                      # API routes
│   ├── auth/                 # NextAuth configuration
│   ├── layoutdata/           # Layout/navigation data
│   ├── pagedata/             # Static page data
│   └── propertydata/         # Property listings (hardcoded array)
├── components/               # React components organized by feature
│   ├── home/                # Homepage sections (hero, calculator, etc.)
│   ├── layout/              # Header, Footer
│   ├── shared/              # Reusable components (features, blog)
│   └── documentation/       # Documentation components
├── types/                    # TypeScript type definitions
│   ├── property/            # Property and filter types
│   ├── data/                # Blog and breadcrumb types
│   └── layout/              # Menu types
├── provider/                 # SessionProviderComp wrapper
├── globals.css              # Global styles
├── layout.tsx               # Root layout with providers
└── page.tsx                 # Homepage
```

### Key Architectural Patterns

**1. Context API for State Management**
- `PropertyContext` (`src/context-api/PropertyContext.tsx`) manages global property state
- Handles property filtering logic (location, category, beds, garages, price, etc.)
- Fetches properties from `/api/propertydata` on mount
- Provides `properties`, `filters`, `setFilters`, and `updateFilter` to all components

**2. API Routes as Data Layer**
- Properties are hardcoded in `/api/propertydata/route.ts` (18 properties total)
- Each property has: id, title, price, category (apartment/villa/office/shop/house/warehouse), location, beds, bathrooms, garages, living area, tag (Buy/Sell), status, slug
- Blog data would be fetched from MDX files in `/markdown/blogs/`

**3. Provider Composition**
Root layout wraps app with multiple providers in this order:
- `AppContextProvider` (Property filtering state)
- `SessionProviderComp` (NextAuth session)
- `ThemeProvider` (next-themes for dark mode)
- `Aoscompo` (AOS animations)

**4. Component Organization**
- **Home components:** Feature-specific (hero, calculator, property-list, testimonials)
- **Shared components:** Reusable across pages (features, blog cards)
- **Layout components:** Header and Footer with navigation

**5. Styling System**
- Tailwind with custom extended config at `src/utils/extendedConfig.ts`
- Custom colors: primary (#2F73F2), secondary, midnight_text, darkmode themes
- Custom spacing, shadows, and responsive breakpoints
- Dark mode support via `class` strategy

**6. File-Based Routing**
- `/` → Homepage with property listings
- `/properties/properties-list` → All properties page
- `/properties/properties-list/[slug]` → Individual property details
- `/blogs` → Blog listing
- `/blogs/[slug]` → Individual blog post (MDX)
- `/contact` → Contact form
- `/documentation` → Template documentation

## Environment Variables

Required in `/package/.env`:

```
GOOGLE_CLIENT_ID=           # Google OAuth client ID
GOOGLE_CLIENT_SECRET=       # Google OAuth secret
NEXTAUTH_SECRET=            # Random string for JWT encryption
NEXTAUTH_URL=               # App URL (http://localhost:3000 in dev)
GITHUB_ID=                  # GitHub OAuth app ID
GITHUB_SECRET=              # GitHub OAuth secret
GENERATE_SOURCEMAP=false    # Disable sourcemaps in production
```

## Property Data Structure

Properties in `/api/propertydata/route.ts` follow this TypeScript interface:

```typescript
{
  id: string
  property_img: string          // Path to image in /public
  property_title: string
  property_price: string
  category: 'apartment' | 'villa' | 'office' | 'shop' | 'house' | 'warehouse'
  category_img: string          // SVG icon path
  rooms: number
  bathrooms: number
  location: string              // US states
  livingArea: string            // e.g., "85m²"
  tag: 'Buy' | 'Sell'
  check: boolean                // Featured flag
  status: 'Buy' | 'Rent'
  type: 'Apartment' | 'House' | 'Commercial'
  beds: number
  garages: number
  region: 'north' | 'south' | 'east' | 'west' | 'central'
  name: string
  slug: string                  // URL-friendly identifier
}
```

## Filtering Logic

The PropertyContext applies filters client-side:
- **keyword:** Searches property titles (case-insensitive)
- **location:** Exact match on location field
- **tag:** Buy/Sell filter
- **status:** Buy/Rent filter
- **category:** apartment, villa, office, etc.
- **beds:** Exact number of bedrooms
- **garages:** Exact number of garages

Filters are applied reactively when `filters` state changes.

## Adding New Features

**Adding a new property:**
1. Add to the `property` array in `/api/propertydata/route.ts`
2. Place property image in `/public/images/properties/`
3. Ensure unique `id` and `slug`

**Creating a new page:**
1. Add folder in `/src/app/(site)/your-page/`
2. Create `page.tsx` with default export
3. Update navigation in Header component

**Adding a blog post:**
1. Create `.mdx` file in `/markdown/blogs/`
2. Include frontmatter (title, date, author, excerpt, image)
3. Use utility in `/src/utils/markdown.ts` to parse

**Modifying theme colors:**
1. Edit `src/utils/extendedConfig.ts`
2. Colors are used throughout components via Tailwind classes

## Authentication Flow

- NextAuth configured in `/api/auth/[...nextauth]/`
- Supports Google and GitHub OAuth providers
- Session managed via `SessionProviderComp` wrapper
- Access session in components with `useSession()` hook

## Design Assets

Figma design file link available in `/Property Figma File/figma link.txt`

## Important Notes

- The actual codebase is in `/package/` subdirectory, not root
- Property data is currently hardcoded; no database integration
- Blog posts use MDX format for rich content
- Dark mode implemented but may need theme consistency checks
- AOS animations initialized globally via utils
