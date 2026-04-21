import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Jessica Morgan | Fractional CMO & Sales Leadership',
    template: '%s | Jessica Morgan',
  },
  description:
    'Senior marketing and sales leadership for ambitious, growing businesses across multiple industries. Fractional CMO and commercial leadership, hands-on, accountable, results-driven.',
  keywords: [
    'fractional CMO',
    'fractional marketing director',
    'sales leadership',
    'B2B marketing',
    'SaaS marketing',
    'tech marketing',
    'fractional chief marketing officer UK',
    'marketing strategy',
  ],
  authors: [{ name: 'Jessica Morgan' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Jessica Morgan | Fractional CMO & Sales Leadership',
    title: 'Jessica Morgan | Fractional CMO & Sales Leadership',
    description:
      'Senior marketing and sales leadership for ambitious, growing businesses. Hands-on, commercial, accountable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jessica Morgan | Fractional CMO & Sales Leadership',
    description:
      'Senior marketing and sales leadership for ambitious, growing businesses. Hands-on, commercial, accountable.',
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
