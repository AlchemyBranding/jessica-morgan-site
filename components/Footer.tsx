import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-content py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-semibold text-ink text-base mb-1">Jessica Morgan</div>
            <div className="text-sm text-muted mb-3">Commercial Brand &amp; Marketing Consultant</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Brand, marketing and commercial clarity for founder-led businesses.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://alchemybranding.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
                aria-label="Alchemy Branding Studio"
              >
                <span className="text-xs text-muted group-hover:text-ink transition-colors">Part of</span>
                <Image
                  src="/alchemy__master_dusk.png"
                  alt="Alchemy Branding Studio"
                  width={100}
                  height={24}
                  className="opacity-50 group-hover:opacity-80 transition-opacity invert"
                />
              </a>
              <a
                href="https://www.iod.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
                aria-label="Institute of Directors"
              >
                <span className="text-xs text-muted group-hover:text-ink transition-colors">Member of</span>
                <Image
                  src="/IOD.png"
                  alt="Institute of Directors"
                  width={80}
                  height={80}
                  className="opacity-60 group-hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Navigation</div>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '/', external: false },
                { label: 'Services', href: '/services', external: false },
                { label: 'Contact', href: '/contact', external: false },
                { label: 'Brand to Scale', href: 'https://www.brandtoscale.co.uk', external: true },
                { label: 'Alchemy', href: 'https://alchemybranding.studio', external: true },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-muted mb-4">Get in Touch</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="text-sm text-muted hover:text-ink transition-colors">
                Book a Clarity Call
              </Link>
              <a
                href="mailto:jessica@alchemybranding.studio"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                jessica@alchemybranding.studio
              </a>
              <a
                href="https://www.linkedin.com/in/jessmmorgan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@jessalchemy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.27 8.27 0 004.84 1.55V7a4.85 4.85 0 01-1.07-.31z" />
                </svg>
                TikTok @jessalchemy
              </a>
              <a
                href="https://www.instagram.com/jessalchemy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram @jessalchemy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Jessica Morgan. All rights reserved.</span>
          <span>Based in the UK. Working with businesses across the UK and internationally.</span>
        </div>
      </div>
    </footer>
  )
}
