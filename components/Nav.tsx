'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '/', external: false },
  { label: 'Services', href: '/services', external: false },
  { label: 'About', href: '/about', external: false },
  { label: 'Brand to Scale', href: 'https://brandtoscale.com', external: true },
  { label: 'Alchemy', href: 'https://alchemybranding.studio', external: true },
  { label: 'Contact', href: '/contact', external: false },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-semibold text-ink text-base tracking-tight">Jessica Morgan</span>
            <span className="text-xs text-muted font-normal tracking-wide">Commercial Brand &amp; Marketing Consultant</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted hover:text-ink transition-colors duration-150"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-ink transition-colors duration-150"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Book a Clarity Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border py-4 flex flex-col gap-4">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink py-1"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink py-1"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm w-full text-center mt-2"
            >
              Book a Clarity Call
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
