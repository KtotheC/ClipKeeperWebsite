# 📹 ClipKeeper

**Video Downloader for GameChanger Youth Sports**

A Chrome extension that lets parents download and organize their kids' GameChanger video clips. One-click downloads, smart file naming, and batch export for entire games or seasons.

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Solution Overview](#solution-overview)
3. [How It Works Technically](#how-it-works-technically)
4. [Feature Breakdown](#feature-breakdown)
5. [User Experience Flow](#user-experience-flow)
6. [Pricing Structure](#pricing-structure)
7. [Technical Architecture](#technical-architecture)
8. [Data We Extract](#data-we-extract)
9. [File Naming Convention](#file-naming-convention)
10. [Revenue Projections](#revenue-projections)
11. [Go-To-Market Strategy](#go-to-market-strategy)
12. [Risks and Mitigations](#risks-and-mitigations)
13. [Development Roadmap](#development-roadmap)
14. [Tech Stack](#tech-stack)

---

## Problem Statement

### The Pain

GameChanger dominates youth sports (baseball, softball, basketball). Parents pay **$99/year** for Premium access to watch video clips of their kids' games. But they **cannot download these videos**.

This creates real problems:

1. **Memories held hostage** - Cancel your subscription? Lose access to years of videos.
2. **Platform risk** - If GameChanger shuts down or changes, videos are gone.
3. **Sharing limitations** - Can't easily send clips to grandparents, college coaches, or create highlight reels.
4. **No local backup** - Everything lives in GameChanger's cloud.

### Existing "Solutions" (All Bad)

- **CocoCut, FetchV** - Generic video downloaders, sketchy/malware-adjacent
- **Screen recording** - Low quality, manual, time-consuming
- **VLC network stream** - Technical, requires copying URLs manually

### Validated Demand

Reddit quote from parent:
> "I want the families on the team to be able to rely on these videos to capture valuable family memories... no one is going to feel great about doing that if they can't save a copy"

Parents are already searching for solutions and using janky workarounds.

---

## Solution Overview

ClipKeeper is a Chrome extension that:

1. **Detects** video clips on any GameChanger page
2. **Extracts** metadata (player name, play type, inning, offense/defense)
3. **Downloads** clips with one click
4. **Names files intelligently** (e.g., `Max_Jessup_Single_Inning6_Offense.ts`)
5. **Batch downloads** entire games or player-specific clips (Pro tier)

### Value Proposition

| For Parents | What They Get |
|-------------|---------------|
| Peace of mind | Videos backed up locally forever |
| Organization | Files named and sorted automatically |
| Time savings | One click vs. 50 manual downloads |
| Flexibility | Share anywhere, edit, create highlight reels |

---

## How It Works Technically

### Key Discovery: Video URLs Are Public

GameChanger uses **HLS streaming** (HTTP Live Streaming) via Amazon IVS. The video URLs are:

- **Not authenticated** - Anyone with the URL can access the video
- **Not DRM protected** - Standard HLS, no Widevine/FairPlay
- **Predictably structured** - URL pattern is consistent

### URL Structure

```
https://vod-archive.gc.com/ivs/v1/{AWS_ACCOUNT}/{TEAM_ID}/clips/{TIMESTAMP}.m3u8
```

Example:
```
https://vod-archive.gc.com/ivs/v1/376441934742/LHcRWfHXSiDk/clips/2025-11-23T20:32:07.217Z.m3u8
```

Components:
- `376441934742` - GameChanger's AWS account ID (constant)
- `LHcRWfHXSiDk` - Team/channel identifier
- `2025-11-23T20:32:07.217Z` - Clip creation timestamp (unique per clip)

### The Thumbnail Trick

Each clip has a thumbnail image with the **same timestamp**:

```
https://vod-archive.gc.com/.../clips/2025-11-23T19:36:58.214Z.jpg
```

To get the video URL, simply replace `.jpg` with `.m3u8`:

```
https://vod-archive.gc.com/.../clips/2025-11-23T19:36:58.214Z.m3u8
```

This means we can extract video URLs from the clips list page **without clicking play** on each video.

### HLS Download Process

1. Fetch the `.m3u8` manifest file
2. Parse it to get list of `.ts` segment URLs
3. Download all `.ts` segments (typically 2-10 seconds each)
4. Concatenate segments into single `.ts` file
5. Save with smart filename

**Why .ts format:**

Chrome Extension Manifest V3 has strict Content Security Policy (CSP) restrictions that prevent ffmpeg.wasm from running in-browser. The `.ts` format works reliably and plays in:
- VLC Media Player
- Windows Media Player
- Most modern video players

For social media sharing, users can convert to MP4 using free tools like VLC or online converters. Future versions may add server-side conversion.

### Clip Characteristics

- Duration: **9 seconds to 1 minute 1 second** (max)
- File size: ~3-6 MB per clip (.ts format)
- Average clip: ~30 seconds = ~3-4 MB
- Full game (130 clips): ~400-600 MB
- Processing time: ~1-3 seconds per clip (download + concatenate)

---

## Feature Breakdown

### Free Tier

| Feature | Details |
|---------|---------|
| Single clip download | One at a time |
| Basic filename | Timestamp-based: `GameChanger_2025-11-23_20-32.ts` |
| Weekly limit | 5 downloads per week |
| Inline download buttons | Download icon next to each clip on page |

### Pro Tier ($29/year)

| Feature | Details |
|---------|---------|
| Unlimited downloads | No weekly cap |
| Batch download - full game | Download all 130 clips with one click |
| Batch download - by player | Filter to "Max Jessup", download all his clips |
| Batch download - by play type | Download all Home Runs, all Strikeouts, etc. |
| Smart file naming | `Max_Jessup_Single_Inning6_Offense.ts` |
| Organized folders | Auto-sorted by player or game |
| Priority support | Email support for issues |

### Future Features (v2+)

| Feature | Details |
|---------|---------|
| Season-wide download | All games for one player across entire season |
| Google Drive backup | Auto-upload to cloud storage |
| Highlight reel builder | Select clips, auto-stitch into one video |
| Server-side MP4 conversion | Upload .ts, get back .mp4 (requires hosting) |

---

## User Experience Flow

### Free User Journey

1. **Install** extension from Chrome Web Store
2. **Navigate** to GameChanger video clips page
3. **See** download icons (⬇️) appear next to each clip
4. **Click** download on any clip
5. **File saves** to Downloads folder
6. **After 5 downloads**, see upgrade prompt

### Pro User Journey

1. **Install** extension, enter license key
2. **Navigate** to GameChanger video clips page
3. **See** enhanced UI:
   - Download icons on each clip
   - "Download All" button at top
   - "Download [Player]'s Clips" when filtered
4. **Options**:
   - Click individual download icons
   - Click "Download All Visible" for batch
   - Filter by player → "Download Max's Clips (12)"
5. **Progress bar** shows batch download status
6. **Files save** to organized folder structure

### Upgrade Trigger Points

Users see upgrade prompts when they:

1. Hit the 5/week download limit
2. Click grayed-out "Download All" button
3. Filter by player and see locked "Download All" option
4. Try to download more than 5 clips in a session

---

## Pricing Structure

### Recommended Model: Monthly + Annual

```
Free:       5 downloads/week, basic filenames
Pro Monthly: $4.99/month
Pro Annual:  $29/year (save 50%)
```

### Why This Structure

| Tier | Purpose |
|------|---------|
| Free | Proves value, builds trust, creates upgrade desire |
| Monthly | Low commitment for skeptical users, tournament-season-only parents |
| Annual | Better LTV, rewards commitment, primary revenue driver |

### Price Anchoring

- GameChanger Premium: $99/year
- ClipKeeper Pro: $29/year (29% of GC cost)
- Framing: "Less than $2.50/month to own your memories forever"

### Alternative Models Considered

**Per-Season ($14.99)**
- Pros: Feels like "buying" not "subscribing"
- Cons: Lower LTV, complex licensing

**Per-Game ($1.99)**
- Pros: Impulse purchase after great game
- Cons: Leaves money on table, friction

**Annual Only ($29)**
- Pros: Simple
- Cons: Higher barrier, loses monthly users

---

## Technical Architecture

### Chrome Extension Components

```
clipkeeper/
├── manifest.json          # Extension config (Manifest V3)
├── background.js          # Service worker - coordinates tasks
├── offscreen.html         # Offscreen document for heavy processing
├── offscreen.js           # Handles HLS download and segment concatenation
├── content.js             # Injected into web.gc.com pages
├── styles.css             # UI styling for injected elements
├── popup.html             # Extension toolbar popup
├── popup.js               # Popup logic
└── icons/                 # Extension icons
```

### How Each Component Works

**manifest.json**
- Declares permissions: `activeTab`, `storage`, `downloads`, `offscreen`
- Host permissions: `https://web.gc.com/*`, `https://vod-archive.gc.com/*`
- Registers content script for `web.gc.com`

**background.js (Service Worker)**
- Coordinates between content script and offscreen document
- Handles license validation
- Manages extension state
- **Note:** Service workers in Manifest V3 are ephemeral (die after 30 seconds of inactivity). Heavy processing must happen in offscreen document.

**offscreen.js (Offscreen Document)**
- Handles all heavy processing (survives longer than service worker)
- Fetches m3u8 manifest and .ts segments
- Concatenates segments into single .ts file
- Triggers final download via chrome.downloads API
- **Note:** ffmpeg.wasm was removed due to Chrome MV3 CSP restrictions (blob: URLs blocked)

**content.js**
- Scans page for clip cards
- Extracts metadata from DOM (player, play type, inning)
- Extracts thumbnail URL → converts to m3u8 URL
- Injects download buttons into UI
- Sends download requests to background script
- Shows progress indicators
- Handles upgrade prompts for free users

**popup.html/js**
- Shows extension status
- Displays license status (Free/Pro)
- License key input field
- Link to upgrade/purchase
- Settings and help

### Backend (Minimal)

```
backend/
├── License validation API   # Verify purchase
├── Stripe/Gumroad webhook   # Handle payments
└── Simple database          # Store license keys
```

Could be:
- Firebase Functions + Firestore
- Supabase Edge Functions
- Simple Node.js on Vercel

Or skip custom backend entirely:
- Use Gumroad/LemonSqueezy for payments
- They handle license key generation
- Extension validates against their API

### Payment Flow

**Important:** You cannot run Stripe inside a Chrome extension (CSP policies block it).

The flow must be:
1. User clicks "Upgrade to Pro" in extension popup
2. Opens new tab to your landing page
3. User pays via Stripe/Gumroad on your website
4. User receives license key (email or displayed on success page)
5. User copies license key into extension popup
6. Extension validates key against your backend or Gumroad API
7. Pro features unlocked

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     GameChanger Page                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │ Clip 1  │ │ Clip 2  │ │ Clip 3  │ │ Clip 4  │  ...      │
│  │ 📷 thumb │ │ 📷 thumb │ │ 📷 thumb │ │ 📷 thumb │           │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Content Script                             │
│  1. Find all clip cards                                      │
│  2. Extract thumbnail URLs                                   │
│  3. Extract metadata (player, play type, inning)            │
│  4. Convert .jpg → .m3u8 URLs                               │
│  5. Inject download buttons                                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼ (user clicks download)
┌─────────────────────────────────────────────────────────────┐
│                  Background Script                           │
│  1. Receive download request                                 │
│  2. Create/wake offscreen document                          │
│  3. Pass job to offscreen document                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│               Offscreen Document (Heavy Lifting)             │
│  1. Fetch m3u8 manifest                                      │
│  2. Download all .ts segments                                │
│  3. Concatenate into single .ts file                        │
│  4. Trigger chrome.downloads.download()                     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   User's Computer                            │
│  Downloads/                                                  │
│  └── Max_Jessup_Single_Inning6_Offense.ts                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Data We Extract

### From Each Clip Card

| Data Point | Source | Example |
|------------|--------|---------|
| Player name | Text in card | "Max Jessup" |
| Play type | Text in card | "Single", "Home Run", "Strikeout" |
| Inning | Text in card | "2", "5", "6" |
| Offense/Defense | Text in card | "Offense", "Defense" |
| Duration | Text in card | "1m", "51s", "1m 1s" |
| Thumbnail URL | `<img>` src or poster | `...clips/2025-11-23T19:36:58.214Z.jpg` |
| Video URL | Derived from thumbnail | `...clips/2025-11-23T19:36:58.214Z.m3u8` |

### From Page Context

| Data Point | Source | Example |
|------------|--------|---------|
| Team name | Page title/URL | "Elevate 8U" |
| Game date | Page content | "Nov 23, 2025" |
| Opponent | Page content | "vs Thunder" |
| Team ID | URL path | "LHcRWfHXSiDk" |

---

## File Naming Convention

### Sanitization Rule

The code must strip out special characters that are illegal in filenames. 

**Illegal characters:** `/ \ : * ? " < > |`

**Rules:**
- Spaces replaced with underscores `_`
- Apostrophes removed
- Slashes replaced with underscores

**Examples:**
| Raw Input | Sanitized Output |
|-----------|------------------|
| Hit/Run | `Hit_Run` |
| O'Connor | `OConnor` |
| Batter Out, Runners Advance | `Batter_Out_Runners_Advance` |

### How It Works

The extension reads the clip card label and converts it to a filename:

**What's shown on GameChanger:**
```
Single · Max Jessup
▼ 6 · Offense
```

**Becomes this filename:**
```
Max_Jessup_Single_Inning6_Offense.ts
```

The metadata is scraped directly from the DOM - player name, play type, inning, offense/defense - and concatenated into a readable filename.

### Free Tier (Basic)

Uses timestamp only (no scraping):
```
GameChanger_Clip_2025-11-23_19-36.ts
GameChanger_Clip_2025-11-23_19-38.ts
GameChanger_Clip_2025-11-23_19-42.ts
```

### Pro Tier (Smart Naming)

Reads the label and builds filename:

| Clip Card Label | Filename |
|-----------------|----------|
| Single · Max Jessup / ▼ 6 · Offense | `Max_Jessup_Single_Inning6_Offense.ts` |
| Home Run · Leo Olearain / ▲ 2 · Defense | `Leo_Olearain_Home_Run_Inning2_Defense.ts` |
| Strikeout · Finn Neff / ▲ 1 · Defense | `Finn_Neff_Strikeout_Inning1_Defense.ts` |

Pattern:
```
{PlayerName}_{PlayType}_Inning{N}_{OffenseDefense}.ts
```

### Pro Tier (Batch Download) - Future Feature

Batch downloads are planned for a future release. Individual clip downloads are available now.

---

## Revenue Projections

### Market Size

- GameChanger: 9M+ active users
- ~3M are parents (vs coaches, fans, relatives)
- 10-20% care deeply about video archiving = 300K-600K
- 5-10% would pay $29/year = 15K-60K potential customers

### TAM (Total Addressable Market)

| Scenario | Potential Customers | Annual Revenue |
|----------|---------------------|----------------|
| Conservative | 15,000 | $435,000 |
| Moderate | 35,000 | $1,015,000 |
| Optimistic | 60,000 | $1,740,000 |

### Realistic Projections

| Scenario | Installs | Conversion | Paying Users | Revenue |
|----------|----------|------------|--------------|---------|
| Modest | 2,000 | 10% | 200 | $5,800 |
| Good | 5,000 | 12% | 600 | $17,400 |
| Great | 15,000 | 15% | 2,250 | $65,250 |
| Viral | 50,000 | 15% | 7,500 | $217,500 |

### Monthly Revenue Targets

| Milestone | Paying Users | MRR |
|-----------|--------------|-----|
| Validation | 50 | $120 |
| Traction | 200 | $480 |
| Sustainable | 500 | $1,200 |
| Full-time viable | 2,000 | $4,800 |

---

## Go-To-Market Strategy

### Phase 1: Validation

**Goal:** Confirm people will pay

- Build free version with single-clip download
- Give to 5-10 travel ball parents you know
- Ask: "Would you pay $29/year for batch download + organization?"
- Watch them use it, note friction points

### Phase 2: MVP Launch

**Goal:** First paying customers

- Add Pro tier with batch download
- Integrate Gumroad/LemonSqueezy for payments
- Create simple landing page
- Soft launch to initial testers

### Phase 3: Public Launch

**Goal:** Get to 100 paying users

Distribution channels:

| Channel | Action |
|---------|--------|
| Reddit | Post on r/Homeplate, r/TravelBall, r/softballparents |
| YouTube | Tutorial: "How to Download GameChanger Videos" |
| SEO | Landing page targeting "download GameChanger video" |
| Facebook | Youth baseball parent groups (careful - some ban promos) |
| Forums | HSBaseballWeb, other baseball communities |

### Phase 4: Growth

**Goal:** Sustainable growth

- Encourage word-of-mouth (team group chats are viral)
- Partner with team photographers/videographers
- Consider Facebook/Instagram ads targeting youth sports parents
- Build email list for feature updates

### Content Marketing Ideas

| Content | Platform | Purpose |
|---------|----------|---------|
| "Why You Should Backup Your GameChanger Videos" | Blog/YouTube | SEO, awareness |
| "How to Create a Baseball Highlight Reel" | YouTube | Adjacent audience |
| "Travel Ball Parents: Don't Lose These Memories" | Facebook | Emotional appeal |
| Product demo video | Landing page | Conversion |

---

## Risks and Mitigations

### Risk 1: GameChanger Cease & Desist

**Likelihood:** Medium (if you get big enough)

**Impact:** High (could kill product)

**Mitigations:**
- No GC trademarks in product name ("ClipKeeper" not "GameChanger Downloader")
- Frame as "user's right to their own data"
- Stay small enough to avoid legal attention initially
- Consult lawyer if revenue exceeds $50K/year
- Have pivot plan ready (different sport platform)

**If C&D received:**
- Evaluate validity
- Consider compliance vs. fight
- Potentially pivot to "video organizer" that works with files user already has

### Risk 2: GameChanger Adds Native Download

**Likelihood:** Low (they're incentivized to keep data locked in)

**Impact:** High (feature parity kills value prop)

**Mitigations:**
- Move fast, capture market before they react
- Build features they won't (cross-season organization, highlight reels)
- If they add downloads, pivot to organization/editing features

### Risk 3: GameChanger Adds DRM

**Likelihood:** Low-Medium (expensive to implement)

**Impact:** Fatal (product stops working)

**Mitigations:**
- Monitor for changes
- Enjoy the ride while it lasts
- If DRM added, product dies but you've learned and earned

### Risk 4: Low Conversion Rate

**Likelihood:** Medium

**Impact:** Medium (slow growth, not death)

**Mitigations:**
- Test different pricing ($19 vs $29 vs $39)
- Improve free tier to demonstrate value
- Add more Pro features
- Better onboarding and upgrade prompts

### Risk 5: Chrome Web Store Rejection

**Likelihood:** Medium

**Impact:** High (limits distribution)

**The Problem:** Google is strict about "Video Downloaders." They ban YouTube downloaders and scrutinize similar extensions. If you market this as a "scraper" or "downloader," you might get rejected for "facilitating copyright infringement."

**Mitigations:**
- **Brand as a "manager" not a "downloader"**
  - Bad: "GameChanger Video Downloader"
  - Good: "ClipKeeper: Media Manager for Youth Sports"
- **Focus description on backup language**
  - "Back up your personal memories"
  - "Organize your family's sports clips"
  - NOT "Download content" or "Rip videos"
- Follow all Chrome extension policies
- Clear privacy policy
- No deceptive practices
- If rejected, distribute via direct download (developer mode install)

---

## Development Roadmap

### v1.0 - MVP

- [ ] Single clip download working
- [ ] Basic filename (timestamp)
- [ ] Download button injection on clip cards
- [ ] Free tier limit (5/week)
- [ ] Simple popup UI

### v1.1 - Pro Tier

- [ ] License key validation
- [ ] Batch download (all visible clips)
- [ ] Smart file naming
- [ ] Progress indicator for batch
- [ ] Upgrade prompts

### v1.2 - Polish

- [ ] Player filter detection ("Download Max's clips")
- [ ] Folder organization for batch downloads
- [ ] Improved error handling
- [ ] Better progress UI

### v2.0 - Advanced Features

- [ ] Season-wide download
- [ ] Google Drive integration
- [ ] Download history
- [ ] Highlight reel builder (stretch)

### v2.1 - Quality of Life

- [ ] Server-side MP4 conversion (requires backend)
- [ ] Custom folder naming
- [ ] Download scheduling
- [ ] Multiple quality options

---

## Tech Stack

### Extension

| Component | Technology |
|-----------|------------|
| Extension framework | Chrome Manifest V3 |
| Content script | Vanilla JavaScript |
| Background worker | Vanilla JavaScript |
| Offscreen document | Vanilla JavaScript |
| Styling | CSS (injected) |
| Settings storage | chrome.storage.local |
| Downloads | chrome.downloads API |

**Note:** ffmpeg.wasm was removed due to Chrome MV3 CSP restrictions. Videos are delivered as .ts files.

### Landing Page

| Component | Technology |
|-----------|------------|
| Framework | Next.js or plain HTML |
| Hosting | Vercel |
| Styling | Tailwind CSS |
| Analytics | Plausible or Simple Analytics |

### Payments

| Component | Technology |
|-----------|------------|
| Payment processor | Gumroad or LemonSqueezy |
| License keys | Provided by payment processor |
| Validation | Simple API call to processor |

**Note:** Payments happen on your website, not in the extension. User gets license key after purchase and enters it in the extension popup.

### Backend (Optional)

| Component | Technology |
|-----------|------------|
| Functions | Vercel Functions or Firebase |
| Database | Firestore or Supabase |
| Auth | License key only (no user accounts) |

---

## Appendix: DOM Structure Reference

### Clip Card (observed structure)

```html
<div class="clip-card" data-clip-id="...">
  <div class="thumbnail">
    <img src="https://vod-archive.gc.com/.../clips/TIMESTAMP.jpg" />
    <span class="duration">1m 1s</span>
  </div>
  <div class="clip-info">
    <span class="font-sans text-base text-gc-off-black font-semibold">
      Single · Max Jessup
    </span>
    <span class="inning">▼ 6 · Offense</span>
  </div>
  <button class="share-button">Share this clip</button>
</div>
```

### Video Player (when clip is opened)

```html
<video 
  class="Video__video" 
  src="blob:https://web.gc.com/..." 
  poster="https://vod-archive.gc.com/.../clips/TIMESTAMP.jpg"
  controls
  autoplay
  crossorigin="use-credentials"
  playsinline
></video>
```

### M3U8 Manifest (example content)

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:2.000,
segment-0.ts
#EXTINF:2.000,
segment-1.ts
#EXTINF:2.000,
segment-2.ts
...
#EXT-X-ENDLIST
```

---

## Contact & Support

[To be added]

---

## License

MIT License - Free for personal use.

---

*Last updated: November 2025*