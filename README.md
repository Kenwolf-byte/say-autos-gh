# SAY-AUTOS GH

> **A cinematic landing page for SAY-AUTOS GH — Premium Car Rental, Sales & Import, Awoshie, Ghana.**

A sleek, modern, single-page React application built with Vite, featuring liquid-glass design, Framer Motion animations, looping background videos with custom crossfade, and a carousel of real car images.

---

## Preview

```
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Vite | ^6.1.0 |
| React | ^19.0.0 |
| TypeScript | ~5.7.2 |
| Tailwind CSS | ^4.0.0 |
| Motion (Framer Motion) | ^11.15.0 |
| Lucide React | ^0.460.0 |

**Fonts:**
- **Instrument Serif** (headings, always italic)
- **Barlow** (body, 300–600)

---

## Project Structure

```
say-autos-gh/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/                         # Static assets (videos, images, logo)
│   ├── say-autos-logo.jpg          # Company logo
│   ├── hero_video.mp4              # Hero background video
│   ├── Cinematic_aerial.mp4        # Services background video
│   ├── hyundai-tucson.jpg          # Car image 1
│   ├── benz-c300.jpg               # Car image 2
│   ├── honda-civic.jpg             # Car image 3
│   └── hyundai-santa-fe.jpg        # Car image 4
└── src/
    ├── main.tsx                    # App entry point
    ├── App.tsx                     # Root component (renders Navbar + all sections)
    ├── index.css                   # Global styles + liquid-glass CSS
    └── components/
        ├── Navbar.tsx              # Fixed top navigation (always clickable)
        ├── HeroSection.tsx         # Full-viewport hero with video
        ├── FleetSection.tsx        # Car carousel + thumbnail grid
        ├── ServicesSection.tsx     # 5 service cards with video background
        ├── AboutSection.tsx        # Company story + stats
        ├── ContactSection.tsx      # CTA with WhatsApp & phone
        ├── FadingVideo.tsx         # Custom rAF crossfade video component
        ├── BlurText.tsx            # Word-by-word blur-in animation
        └── FadeIn.tsx              # Reusable blur-in entrance animation
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport cinematic video background, liquid-glass navbar, animated headline, CTAs, stats cards (15+ Years / 500+ Customers), featured fleet names |
| **Fleet** | Interactive carousel with 4 real car images, dot navigation, thumbnail grid, "Book This Car" WhatsApp buttons per vehicle |
| **Services** | 5 liquid-glass cards: Import, Rentals, Sales, Tracking, Repairs — each with icon, tags, and description |
| **About** | Company story (15+ years), mission statement, 4 stats cards |
| **Contact** | "Ready to Ride?" CTA with WhatsApp & Call buttons, location footer |

---

## Getting Started

### Prerequisites
- Node.js 18+ (recommend 20+)
- npm

### Install & Run

```bash
cd "D:\Projects\React Project\say-autos-gh"
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

---

## Customization Guide

### 1. Change the WhatsApp Number

The WhatsApp number is currently set to a placeholder `+233000000000`. **You must replace this** with your real number across these files:

- `src/components/Navbar.tsx` (line ~22)
- `src/components/HeroSection.tsx` (line ~17)
- `src/components/FleetSection.tsx` (line ~25)
- `src/components/ContactSection.tsx` (line ~8)

**Format:** Use only digits, no `+` sign. Example: `233244123456`.

**To change the pre-written message**, edit the `encodeURIComponent(...)` string in each file.

### 2. Change the Phone Number

- `src/components/ContactSection.tsx` (line ~20): `href="tel:+233000000000"`

### 3. Replace Car Images

Drop your own images into `public/` and update the filenames in:

- `src/components/FleetSection.tsx` (lines ~8–27, the `cars` array)
- `src/components/AboutSection.tsx` (if you add team/facility photos)

**Recommended image size:** 800x500px (4:3 aspect ratio), 80–200KB each.

### 4. Replace Background Videos

Drop your own `.mp4` files into `public/` and update the paths in:

- `src/components/HeroSection.tsx`: `src="/hero_video.mp4"`
- `src/components/ServicesSection.tsx`: `src="/Cinematic_aerial.mp4"`

**Video guidelines:**
- Use **H.264 / AVC** encoding for broad browser compatibility
- Keep under **5MB** for fast loading
- Use **muted, autoplay, loop** (the `FadingVideo` component handles this)
- Dark, moody scenes work best for contrast with the glass UI

### 5. Change Brand Colors

Edit `src/index.css` to update the liquid-glass gradients:

```css
--color-brand-blue: #1B6FFF;   /* Primary blue */
--color-brand-gold: #D4A417;   /* Accent gold */
```

The `liquid-glass`, `liquid-glass-strong`, and `liquid-glass-gold` classes use these colors in their gradient borders.

### 6. Add a New Section

1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add it between existing sections (e.g., after `<FleetSection />`)

### 7. Update SEO / Meta Tags

Edit `index.html` to update:

```html
<title>SAY-AUTOS GH | Premium Car Rental, Sales & Import — Awoshie, Ghana</title>
<meta name="description" content="...">
```

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Liquid-Glass UI** | Subtle glassmorphism with animated gradient borders using `backdrop-filter` and `mask-composite` |
| **Custom Video Crossfade** | `FadingVideo` component uses `requestAnimationFrame` for smooth JS-driven opacity fades (no CSS transitions) with manual loop via `ended` event |
| **BlurText Animation** | Word-by-word blur-in entrance using Framer Motion `useInView` and staggered keyframes |
| **Fixed Navbar** | `z-index: 2147483647` — always on top, clickable everywhere, logo scrolls to top |
| **WhatsApp Integration** | Every "Book" / "Contact" button opens WhatsApp with a pre-written message |
| **Responsive** | Mobile-first Tailwind CSS, grid breakpoints at `md` (768px) and `lg` (1024px) |
| **Zero-Config Build** | Vite handles everything — no manual webpack or babel setup |

---

## Troubleshooting

### Navbar not clickable when scrolled down

The navbar is rendered at root level with `z-index: 2147483647`. If you still experience issues, check that no parent element has `overflow: hidden` or `transform` applied at a higher level in the DOM tree.

### Videos not loading / black screen

- Ensure `.mp4` files are in the `public/` folder (not `src/`)
- Use H.264 encoding (not H.265/HEVC) for maximum browser compatibility
- Check the browser console for CORS errors (should not happen with local files)

### WhatsApp link not opening

- The `wa.me` URL requires the phone number **without** the `+` prefix
- Use `https://wa.me/233XXXXXXXXX` (not `+233XXXXXXXXX`)
- Ensure you're on a device with WhatsApp installed or use WhatsApp Web

### Fonts not loading

Fonts are loaded from Google Fonts CDN in `index.html`. If offline, the fallback `ui-serif` / `ui-sans-serif` will display. For offline use, download the font files and reference them locally.

---

## License

Proprietary. All rights reserved. © SAY-AUTOS GH 2025.

---

## Contact

- **Location:** Awoshie, Ghana
- **Services:** Car Import, Rental, Sales, GPS Tracking, Repairs & Service
- **Fleet:** Hyundai Tucson, Mercedes-Benz C300, Honda Civic, Hyundai Santa Fe

---

*Built with React, Vite, Tailwind CSS, and Motion.*
