/**
 * Where every "Book a Clarity Call" button goes. Set NEXT_PUBLIC_BOOKING_URL
 * in Vercel to Jess's 30-minute Clarity Call booking page (Opus) once it is
 * live; until then the buttons fall back to the contact page. One setting, no
 * code change. Static export reads it at build time, so redeploy after
 * changing it.
 */
export const bookingHref: string =
  process.env.NEXT_PUBLIC_BOOKING_URL || '/contact'

export const bookingIsExternal = /^https?:\/\//.test(bookingHref)
