import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import { Lora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import CookieConsent from '@/components/CookieConsent'

const satoshi = localFont({
  src: [
    { path: './fonts/satoshi-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/satoshi-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/satoshi-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/satoshi-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const siteUrl = 'https://www.jessicamorganconsulting.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    template: '%s | Jessica Morgan',
  },
  description:
    'Commercial brand and marketing consultancy for founder-led businesses that need clarity, structure and senior support before hiring full-time.',
  keywords: [
    'commercial brand consultant',
    'marketing consultant UK',
    'fractional marketing director',
    'brand strategy',
    'founder-led business',
    'brand and marketing clarity',
    'fractional brand support',
    'marketing foundations',
  ],
  authors: [{ name: 'Jessica Morgan' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    title: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    description:
      'Commercial brand and marketing consultancy for founder-led businesses. Clarity, structure and senior support.',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Jessica Morgan — Commercial Brand & Marketing Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    description:
      'Commercial brand and marketing consultancy for founder-led businesses. Clarity, structure and senior support.',
    images: ['/hero.jpg'],
  },
  verification: {
    google: 'UHdxRJXvn03PxGysfhgVuoDs8RzjZLElq4Bk1OKx3Rw',
  },
  icons: {
    icon: '/Favicon.png',
    apple: '/Favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jessica Morgan',
  jobTitle: 'Commercial Brand & Marketing Consultant',
  description:
    'Commercial brand and marketing consultancy for founder-led businesses that need clarity, structure and senior support before hiring full-time.',
  url: siteUrl,
  image: `${siteUrl}/jessica.jpg`,
  email: 'jessica@alchemybranding.studio',
  sameAs: [
    'https://www.linkedin.com/in/jessmmorgan/',
    'https://www.tiktok.com/@jessalchemy',
    'https://www.instagram.com/jessalchemy',
    'https://alchemybranding.studio',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Alchemy Branding Studio',
    url: 'https://alchemybranding.studio',
  },
  knowsAbout: [
    'Brand Strategy',
    'Commercial Marketing',
    'Fractional Marketing',
    'Founder-led Business',
    'Brand Consultancy',
    'Marketing Foundations',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${satoshi.variable} ${lora.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollAnimations />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
