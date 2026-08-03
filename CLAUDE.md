# Deployment

Git push to `main` on `github.com/AlchemyBranding/jessica-morgan-site` → Vercel auto-deploys. Confirmed working 2026-07-30. Framework: Next.js 14 with `output: 'export'` (static export) — this means `next.config.js`'s `headers()` function does **not** apply at request time; headers must go through `vercel.json` instead (there's a reason both files exist here, don't try to consolidate into just `next.config.js`).

# Security headers (added 2026-07-30, live)

`vercel.json` CSP. **`script-src` uses `'unsafe-inline'`, not hashes — this was a deliberate fallback, not an oversight.** Next.js's App Router injects React hydration payloads (`self.__next_f.push(...)`) as inline `<script>` tags on every page, with different content per route and build-specific chunk hashes that change on every deploy. A hash-only CSP was tried first and would have silently broken hydration site-wide after deploy — cookie-consent buttons, the contact form's submit handler, etc. — while the page would still *look* fine. Don't "tighten" `script-src` back to hash-only without solving that (moving off static export to get per-request nonces is the real fix, if it's ever worth doing).

Also allowlisted: `googletagmanager.com` (GA, loaded via `next/script` post-consent in `CookieConsent.tsx`) and `formspree.io` (the contact form posts there). Verified live: clicking "Accept" on the cookie banner correctly injects the GA script and populates `dataLayer` — confirms hydration and consent flow both still work under this CSP.
