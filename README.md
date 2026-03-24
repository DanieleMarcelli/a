# Arredamenti – Luxury Italian Furniture Website

A complete Next.js 14 website for an Italian luxury furniture showroom. Built with production-quality code, premium typography, Framer Motion animations, and a full design system.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Fonts**: Cormorant Garamond (Serif/Italic) + DM Sans (Body)
- **Icons**: Lucide React

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts, header, footer, custom cursor
  page.tsx            # Home page
  not-found.tsx       # 404 page
  collezioni/
    page.tsx          # Collections grid with filter bar
  prodotto/[slug]/
    page.tsx          # Product detail page (dynamic)
  showroom/
    page.tsx          # About / Showroom page
  contatti/
    page.tsx          # Contact page

components/
  layout/
    Header.tsx        # Transparent→bone scroll header, mobile overlay menu
    Footer.tsx        # 3-col footer
  ui/
    CustomCursor.tsx  # Small dot + follower circle cursor
    ScrollProgress.tsx # Gold progress bar at top
    RevealOnScroll.tsx # Fade+slide-up on scroll enter
    CountUp.tsx       # Animated number counter
    PageTransition.tsx # Page enter/exit animation
  home/
    Hero.tsx          # Full-viewport split hero with parallax
    CollectionsTeaser.tsx  # Asymmetric grid of 3 categories
    BrandStatement.tsx     # Quote + animated stats
    FeaturedProducts.tsx   # 2×2 product grid
    ShowroomCTA.tsx        # Dark section CTA strip
  collections/
    CollectionsGrid.tsx    # Filterable product grid with AnimatePresence
  product/
    ImageGallery.tsx       # Main image + thumbnails, keyboard navigable
    ProductInfo.tsx        # Sticky info panel
    ContactModal.tsx       # Modal with contact form
    RelatedProducts.tsx    # Horizontal scroll on mobile
  contact/
    ContactForm.tsx        # React Hook Form + Zod validated form

lib/
  products.ts         # Mock product data (10 products, 3 categories)

styles/
  globals.css         # Design system variables, utility classes

public/
  robots.txt
  sitemap.xml
```

## Design System

```css
--color-bone: #F5F0E8        /* Background */
--color-bone-dark: #EDE7D9   /* Alt background */
--color-charcoal: #1A1A1A    /* Dark sections */
--color-warm-mid: #8C7B6B    /* Body text, labels */
--color-gold: #B8963E        /* Accent, CTAs */
--color-line: #DDD5C8        /* Borders, dividers */
--color-ink: #2D2926         /* Headlines */
```

**Typography**:
- Headlines: Cormorant Garamond Italic, `-0.04em` tracking
- Body: DM Sans, `1.7` line-height
- Display sizes: `clamp(3rem, 8vw, 8rem)`

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home with hero, collections teaser, brand statement, featured products, showroom CTA |
| `/collezioni` | All products with Ambiente/Stile/Materiale filter |
| `/prodotto/[slug]` | Product detail with gallery, materials, dimensions, contact modal |
| `/showroom` | Story, team, map, opening hours |
| `/contatti` | Contact form with validation + success state |

## Performance Notes

- All images use `next/image` with blur placeholder, explicit dimensions
- Fonts loaded via `next/font/google` for optimal performance
- Static params generated for all product pages
- Semantic HTML throughout (nav, main, article, section, aside, footer)
- ARIA labels on all interactive elements
- Open Graph meta tags on every page

## Customization

1. **Brand colors**: Edit CSS variables in `styles/globals.css`
2. **Products**: Edit `lib/products.ts` to add/modify products
3. **Contact form**: Connect `onSubmit` in `ContactForm.tsx` to your backend
4. **Map**: Replace the Google Maps iframe src in `app/showroom/page.tsx`
5. **Images**: Replace Unsplash URLs with your own showroom photos
