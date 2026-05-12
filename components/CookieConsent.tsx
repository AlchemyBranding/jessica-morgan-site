'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-2CE4X1B4L1'

export default function CookieConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored as 'accepted' | 'declined')
    } else {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setConsent('declined')
    setVisible(false)
  }

  return (
    <>
      {/* Google Analytics — only loads after explicit consent */}
      {consent === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border shadow-lg">
          <div className="container-content py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              This site uses cookies to understand how visitors use it. No personal data is
              collected without your consent.
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={decline}
                className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
