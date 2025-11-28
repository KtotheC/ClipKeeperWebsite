# CLAUDE.md - ClipKeeper Website

## Project Overview

Marketing website for ClipKeeper, a Chrome extension that helps parents download and organize their kids' GameChanger youth sports video clips.

**Goal:** A polished one-page marketing site that looks like a VC-backed startup.
**Anti-goal:** No backend logic, dashboards, login forms, or user accounts.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (gentle fade-in animations)
- **Hosting:** Vercel
- **Forms:** Email waitlist collection (no payment processing yet)

## Site Structure

### Single-Page App (SPA) with Anchor Sections

Navigation links scroll to sections (`#features`, `#how-it-works`, `#pricing`, `#faq`):

1. **Hero Section**
   - Headline about owning your memories
   - "Install Free" CTA button (links to Chrome Web Store)
   - Screenshot/demo of extension in action

2. **Features Section** (`#features`)
   - One-click downloads
   - Smart file naming
   - Batch downloads (Pro)
   - Works with any GameChanger video

3. **How It Works Section** (`#how-it-works`)
   - Step 1: Install the extension
   - Step 2: Go to GameChanger
   - Step 3: Click download on any clip
   - Visual walkthrough with screenshots

4. **Pricing Section** (`#pricing`)
   - **Free Card:** 5 downloads/week, basic filenames → "Install Now" button
   - **Pro Card:** Unlimited + batch + smart naming → "Join Waitlist" button (email capture)
   - Price anchoring: "$29/year - less than $2.50/month"

5. **FAQ Section** (`#faq`)
   - What file format are downloads?
   - Why .ts instead of .mp4?
   - Is this legal?
   - What if GameChanger changes something?
   - How do I get support?

6. **Footer**
   - Links to Privacy Policy, Chrome Web Store
   - Contact email
   - Copyright

### Separate Pages (for SEO)

- `/blog/how-to-download-gamechanger-video` - Full tutorial with embedded YouTube video
- `/privacy` - Privacy policy (required for Chrome Web Store)

## File Structure

```
clipkeeper-website/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main SPA landing page
│   ├── blog/
│   │   └── how-to-download-gamechanger-video/
│   │       └── page.tsx        # SEO blog post
│   └── privacy/
│       └── page.tsx            # Privacy policy
├── components/
│   ├── Navbar.tsx              # Sticky nav with anchor links
│   ├── Hero.tsx                # Hero section
│   ├── Features.tsx            # Features grid
│   ├── HowItWorks.tsx          # Step-by-step walkthrough
│   ├── Pricing.tsx             # Free vs Pro cards
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── Footer.tsx              # Footer
│   └── WaitlistForm.tsx        # Email capture component
├── public/
│   ├── screenshots/            # Extension screenshots
│   ├── favicon.ico
│   └── og-image.png            # Social sharing image
├── styles/
│   └── globals.css             # Tailwind imports
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Design Guidelines

### Visual Style
- Clean, modern, trustworthy
- Primary color: Green (matches extension's download buttons)
- White/light gray backgrounds
- Gentle Framer Motion fade-in animations on scroll
- Screenshots of the actual extension working

### Copy Tone
- Speak to parents ("your kid's highlights", "family memories")
- Emphasize ownership and backup ("own your videos forever")
- Simple, non-technical language
- Avoid terms like "scraper" or "rip" - use "download" and "backup"

### Mobile First
- Responsive design
- Touch-friendly CTAs
- Collapsible mobile nav

## SEO Strategy

### Target Keywords
- "download gamechanger video"
- "gamechanger video downloader"
- "save gamechanger clips"
- "gamechanger backup"

### Meta Tags
- Unique title/description per page
- OpenGraph tags for social sharing
- Structured data for FAQ section

## Email Waitlist

Simple form collecting:
- Email address only

**Storage:** JSON file (`data/waitlist.json`) via API route
- API route: `app/api/waitlist/route.ts`
- Appends email + timestamp to JSON array
- Simple and sufficient for <100 signups

Trigger: "Join Waitlist" button on Pro pricing card

## Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy (via Vercel)
git push  # Auto-deploys on Vercel
```

## Environment Variables

```env
# None required for MVP
# Future: STRIPE_*, EMAIL_SERVICE_API_KEY
```

## What NOT to Build

- User authentication/login
- Dashboard or account pages
- Stripe integration (just waitlist for now)
- License key validation
- Any backend API routes (except simple email collection)

## Reference

See `PRD.md` for full product context including:
- Chrome extension architecture
- Pricing strategy rationale
- Target market analysis
- Risk assessment

## Chrome Web Store Link

TBD - will be added once extension is published

## Contact

TBD - support email
