# Setup, Conversion Essentials & Launch Checklist

---

## Stage 9: Conversion Essentials

### 1. Discovery Call Booking (Calendly)

Replace the placeholder link in two places:

- `app/contact/page.tsx` — the "Book a Discovery Call" `<a href>` tag
- Any external linking from LinkedIn or email signatures

**Recommended:** Calendly (free tier works). Set up a 30-minute event type called "Discovery Call".

```
https://calendly.com/[your-handle]/discovery-call
```

### 2. Contact Form (Formspree)

The form is wired and ready. You just need a Formspree endpoint.

1. Create a free account at https://formspree.io
2. Create a new form
3. Copy your form endpoint ID (looks like `xpwzabcd`)
4. In `components/ContactForm.tsx`, replace:

```ts
'https://formspree.io/f/YOUR_FORM_ID'
```

with your actual endpoint, e.g.:

```ts
'https://formspree.io/f/xpwzabcd'
```

Formspree free tier: 50 submissions/month. Paid plans from $10/month if needed.

### 3. Analytics

**Option A — Google Analytics 4 (free)**

Add this to `app/layout.tsx` inside the `<head>`, after installing `@next/third-parties`:

```bash
npm install @next/third-parties
```

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// Inside <html>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

**Option B — Plausible (recommended for privacy-first)**

Plausible is cleaner, GDPR-compliant by default, and doesn't require a cookie banner.
Add via script tag or the `next-plausible` package. $9/month.

### 4. SEO

Already in place:
- `metadata` on every page (title, description, OG tags, Twitter card)
- `sitemap.ts` — auto-generates `/sitemap.xml`
- `robots.ts` — auto-generates `/robots.txt`
- Semantic HTML throughout (`h1`, `h2`, `nav`, `main`, `footer`)

**Action needed:** Update the domain in `app/sitemap.ts` and `app/robots.ts` before going live.

### 5. Jessica's Photo

In `app/page.tsx`, find the photo placeholder section and replace with:

```tsx
import Image from 'next/image'

<div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden">
  <Image
    src="/jessica.jpg"
    alt="Jessica Morgan"
    fill
    className="object-cover"
    priority
  />
</div>
```

Place `jessica.jpg` in the `/public/` folder. Recommended: 800×1000px minimum, WebP or high-quality JPEG.

### 6. LinkedIn Link

Update the LinkedIn URL in two places:
- `components/Footer.tsx`
- `app/contact/page.tsx`

Replace `https://linkedin.com/in/jessicamorgan` with Jessica's actual LinkedIn URL.

### 7. Email Address

Replace `jessica@[yourdomain].com` in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/page.tsx` (final CTA section)

### 8. Domain

Update the base URL in:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (OpenGraph `url` field if added)

### 9. Favicon

Add to `/public/`:
- `favicon.ico` (32×32)
- `icon.png` (512×512, for PWA/Apple)

Reference in `app/layout.tsx` metadata:

```ts
icons: {
  icon: '/icon.png',
  shortcut: '/favicon.ico',
}
```

### 10. Social Proof Placeholder

When testimonials or case study references are available (without fake content), add a "What clients say" section to the home page between the Why Jessica and Services sections. Structure suggestion:

```tsx
<blockquote>
  <p>"Quote here."</p>
  <cite>Name, Title, Company</cite>
</blockquote>
```

---

## Stage 10: Launch Checklist

### Content & Copy
- [ ] Replace all `[yourdomain].com` email placeholders with real address
- [ ] Replace Calendly placeholder URL with real booking link
- [ ] Replace LinkedIn URL with real profile link
- [ ] Add Jessica's photo (remove placeholder box)
- [ ] Review all copy — especially hero headline, bio, and service descriptions
- [ ] Confirm UK spelling throughout (no US spellings slipped in)

### Forms & CTAs
- [ ] Set up Formspree account and replace `YOUR_FORM_ID`
- [ ] Test contact form end-to-end (submit → receive email)
- [ ] Test Calendly booking link opens correctly
- [ ] Test all nav CTA buttons link to `/contact`
- [ ] Test "Find out more" links on service cards go to correct service anchors

### Mobile & Responsive
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check nav hamburger menu opens/closes correctly
- [ ] Check hero text is readable at 375px width
- [ ] Check all buttons are minimum 44px tap target
- [ ] Check services page stacks correctly on mobile

### SEO & Metadata
- [ ] Update domain in `sitemap.ts` and `robots.ts`
- [ ] Verify `<title>` and `<meta description>` on all three pages in browser
- [ ] Add favicon and icon files to `/public/`
- [ ] Check OG tags render correctly (use opengraph.xyz to preview)
- [ ] Submit sitemap to Google Search Console after launch

### Analytics
- [ ] Set up GA4 or Plausible account
- [ ] Add tracking script to `layout.tsx`
- [ ] Confirm pageview fires on navigation between pages
- [ ] Set up a goal/event for form submission confirmation

### Performance
- [ ] Run Lighthouse audit (target: 90+ on Performance, Accessibility, SEO)
- [ ] Confirm images are optimised (WebP, correct dimensions)
- [ ] Check no layout shift on page load (CLS)
- [ ] Verify fonts load without visible flash

### Deployment (Vercel)
- [ ] Push repo to GitHub (or GitLab/Bitbucket)
- [ ] Connect repo to Vercel (https://vercel.com/new)
- [ ] Add custom domain in Vercel dashboard
- [ ] Update DNS records with your registrar (A record or CNAME)
- [ ] Confirm HTTPS is active on custom domain
- [ ] Confirm `next build` completes without errors before going live

### Legal Basics
- [ ] Add a short Privacy Policy page if collecting email addresses via form
- [ ] If using GA4 (not Plausible), add a cookie consent banner
- [ ] Confirm footer copyright year is correct (`{new Date().getFullYear()}` — auto-updates)

### Final Checks
- [ ] Open the live URL in an incognito window
- [ ] Click every link on every page
- [ ] Submit the contact form with real data — confirm receipt
- [ ] Book a test call through Calendly — confirm it arrives
- [ ] Share URL with one trusted person for a fresh-eyes review
- [ ] Announce on LinkedIn

---

## Quick Deploy

```bash
# Install dependencies
npm install

# Run locally
npm run dev       # http://localhost:3000

# Build for production
npm run build

# Deploy to Vercel (one-time setup)
npx vercel        # follow prompts, connect to GitHub for auto-deploys
```
