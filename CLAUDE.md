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
# Local development (stored in .env.local, gitignored)
SUPABASE_ACCESS_TOKEN=   # For Supabase CLI commands
```

## Supabase Configuration

- **Project Ref:** `usvlgqtbvsnuiefvpoda`
- **Edge Functions URL:** `https://usvlgqtbvsnuiefvpoda.supabase.co/functions/v1`

### Edge Function Secrets (managed via Supabase)
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret
- `STRIPE_MONTHLY_PRICE_ID` - Stripe price ID for monthly plan
- `STRIPE_YEARLY_PRICE_ID` - Stripe price ID for yearly plan

### Supabase CLI Commands
```bash
# List secrets
SUPABASE_ACCESS_TOKEN=$(grep SUPABASE_ACCESS_TOKEN .env.local | cut -d '=' -f2) npx supabase secrets list --project-ref usvlgqtbvsnuiefvpoda

# Set a secret
SUPABASE_ACCESS_TOKEN=$(grep SUPABASE_ACCESS_TOKEN .env.local | cut -d '=' -f2) npx supabase secrets set SECRET_NAME="value" --project-ref usvlgqtbvsnuiefvpoda
```

## What NOT to Build

- User authentication/login
- Dashboard or account pages
- License key validation

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
