import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free discovery call with Jessica Morgan. Fractional CMO and sales leadership for ambitious, growing businesses.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-section font-bold text-ink mb-4">Let&apos;s talk.</h1>
              <p className="text-lg text-muted leading-relaxed">
                Book a call, send a message, or connect on LinkedIn. Whatever feels easiest,
                I&apos;ll come back to you quickly.
              </p>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/contact-header.png"
                  alt="Get in touch with Jessica Morgan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ─────────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: booking CTA + contact options */}
            <div>
              {/* Book a call */}
              <div className="mb-10">
                <p className="section-label">Quickest route</p>
                <h2 className="text-subheading font-bold text-ink mb-4">
                  Book a discovery call
                </h2>
                <p className="text-muted text-base leading-relaxed mb-6">
                  The quickest way to get started is a free 30-minute call. No pitch, no
                  preparation needed on your side. Just an honest conversation about where your
                  business is and whether working together makes sense.
                </p>
                <a
                  href="mailto:jessica@alchemybranding.studio?subject=Discovery%20Call%20Request"
                  className="btn-primary"
                >
                  Book a Discovery Call
                </a>
                <p className="mt-3 text-xs text-muted">Free. 30 minutes. No obligation.</p>
              </div>

              {/* Divider */}
              <div className="border-t border-border mb-10" />

              {/* Email */}
              <div className="mb-8">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                  Email
                </div>
                <a
                  href="mailto:jessica@alchemybranding.studio"
                  className="text-base text-ink font-medium hover:text-brand transition-colors underline-offset-4 hover:underline"
                >
                  jessica@alchemybranding.studio
                </a>
                <p className="text-sm text-muted mt-1">
                  I respond to all messages within one business day.
                </p>
              </div>

              {/* LinkedIn */}
              <div className="mb-8">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/in/jessmmorgan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-ink font-medium hover:text-brand transition-colors group"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="underline-offset-4 group-hover:underline">
                    Connect on LinkedIn
                  </span>
                </a>
                <p className="text-sm text-muted mt-1">I&apos;m active on LinkedIn and happy to connect there too.</p>
              </div>

              {/* TikTok */}
              <div className="mb-8">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                  TikTok
                </div>
                <a
                  href="https://www.tiktok.com/@jessalchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-ink font-medium hover:text-brand transition-colors group"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.27 8.27 0 004.84 1.55V7a4.85 4.85 0 01-1.07-.31z" />
                  </svg>
                  <span className="underline-offset-4 group-hover:underline">@jessalchemy</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="mb-8">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/jessalchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-ink font-medium hover:text-brand transition-colors group"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="underline-offset-4 group-hover:underline">@jessalchemy</span>
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                  Location
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Based in the UK. Working with businesses across the UK and internationally.
                  <br />
                  Part of{' '}
                  <a
                    href="https://alchemybranding.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:underline underline-offset-4"
                  >
                    Alchemy Branding Studio
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <p className="section-label">Send a message</p>
              <h2 className="text-subheading font-bold text-ink mb-4">
                Prefer to write first?
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                Use the form below and I&apos;ll come back to you within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
