/**
 * Where every "Book a Clarity Call" button goes: Jess's 30-minute Clarity Call
 * booking page in Opus. utm_source=website tells Opus the booking came from
 * the site. NEXT_PUBLIC_BOOKING_URL in Vercel overrides it; static export
 * reads it at build time, so redeploy after changing it.
 */
export const bookingHref: string =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  'https://opus.alchemybranding.studio/book/clarity-call?utm_source=website'

export const bookingIsExternal = /^https?:\/\//.test(bookingHref)
