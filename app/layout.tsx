import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export const metadata: Metadata = {
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    title: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    description:
      'Commercial brand and marketing consultancy for founder-led businesses. Clarity, structure and senior support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
    description:
      'Commercial brand and marketing consultancy for founder-led businesses. Clarity, structure and senior support.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="flex flex-col min-h-screen">
        <ScrollAnimations />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
