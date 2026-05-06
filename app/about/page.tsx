import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jess Morgan is a Commercial Brand & Marketing Consultant, Commercial Director and Co-Founder of Alchemy Branding Studio. She helps founders and Managing Directors find the gaps in their brand and marketing setup.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch">

            {/* Photo */}
            <div className="hidden lg:flex">
              <div className="relative w-full rounded-xl overflow-hidden min-h-[500px]">
                <Image
                  src="/jessica.jpg"
                  alt="Jessica Morgan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-label">About</p>
              <h1 className="text-hero font-bold text-ink mb-6">
                I help businesses work out what their brand and marketing needs next.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-5">
                I am a Commercial Director, brand strategist and business builder with over a
                decade of experience across brand, communications, marketing structure, creative
                teams and founder-led growth.
              </p>
              <p className="text-base text-muted leading-relaxed mb-5">
                I have built a business, closed one, co-founded Alchemy Branding Studio and worked
                inside leadership teams through rebrands, team changes, new hires and commercial
                pressure. So I do not look at brand or marketing as isolated jobs. I look at how
                they support the whole business.
              </p>
              <p className="text-base text-muted leading-relaxed mb-5">
                That usually means asking better questions. What are we known for? Who are we trying
                to reach? Does the website help or hinder? What content do we actually need? Who
                should we hire next? Which tools will make life easier, not noisier?
              </p>
              <p className="text-base text-muted leading-relaxed mb-8">
                Because most growing businesses do not need more random activity. They need clearer
                decisions.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Clarity Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <p className="section-label">Background</p>
            <h2 className="text-section font-bold text-ink">Experience at a glance</h2>
          </div>
          <div className="max-w-2xl">
            <div className="flex flex-col gap-0 mb-10">
              {[
                { period: '2025 – Present', role: 'Commercial Director', org: 'Ligtas Consultancy & Training', detail: 'Leading brand, marketing, commercial systems, team structure and business growth projects.' },
                { period: '2024 – 2025', role: 'Fractional Head of Brand & Communications', org: 'GS Verde Group', detail: 'Supporting brand, communications and market positioning.' },
                { period: '2024 – 2025', role: 'Fractional Sales & Marketing Director', org: null, detail: 'Working inside growing businesses to strengthen teams, systems and strategy.' },
                { period: '2022 – Present', role: 'Co-Founder & Brand Strategist', org: 'Alchemy Branding Studio', detail: 'Building brand strategy, messaging and content direction for ambitious businesses.' },
                { period: '2012 – 2023', role: 'Co-Founder', org: 'Tiny Wizard Studio', detail: 'Built and led a creative agency for over a decade.' },
              ].map((item, i, arr) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs text-muted mb-0.5">{item.period}</div>
                    <div className="text-sm font-semibold text-ink">
                      {item.role}
                      {item.org && <span className="font-normal text-muted">, {item.org}</span>}
                    </div>
                    <div className="text-sm text-muted mt-1 leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-muted italic mb-8">
              The short version? I have built, led, fixed and grown brand and marketing functions
              from the inside.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Clarity Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-navy mb-4 max-w-xl mx-auto">
            Want to know more?
          </h2>
          <p className="text-navy/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free clarity call and we will talk through where your business is and whether
            working together makes sense.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Clarity Call
          </Link>
          <p className="mt-4 text-navy/60 text-sm">Free 30-minute call. No obligation.</p>
        </div>
      </section>
    </>
  )
}
