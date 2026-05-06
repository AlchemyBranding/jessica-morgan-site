import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three ways to work with Jessica Morgan: Brand & Commercial Clarity Workshop, Brand-to-Market Deployment, and Fractional Brand & Marketing Support.',
}

const services = [
  {
    id: 'clarity',
    badge: 'Best starting point',
    title: 'Brand & Commercial Clarity Workshop',
    tagline: 'Find the gaps, sharpen the message and leave with a practical plan.',
    forWho:
      'For founder-led businesses that know something needs to change, but are not sure where to start. This is a focused strategy session with you and your senior team to uncover what is working, what is missing and what needs fixing across your brand, message, marketing activity and commercial customer journey.',
    includes: [
      'Pre-session review of your current brand, website, content and customer touchpoints',
      'Workshop with founders, Managing Directors or the senior leadership team',
      'Positioning, audience and message exploration',
      'Review of where your brand is showing up well, and where it is falling flat',
      'Discussion around marketing gaps, team capability, tools, content and next hires',
      'Clear written summary with recommended priorities and next steps',
    ],
    outcomes:
      'You leave with a sharper view of what your business needs next. Not a fluffy brand chat. A practical commercial direction you can act on in-house, with your existing partners, or with support from me and Alchemy.',
    cta: 'Book a clarity workshop',
    bannerBg: 'bg-brand',
    bannerText: 'text-white',
    bannerMuted: 'text-white/70',
    bannerBadge: 'border-white/40 text-white',
    bannerDivider: 'border-white/20',
    bodyBg: 'bg-surface',
  },
  {
    id: 'deployment',
    badge: null,
    title: 'Brand-to-Market Deployment',
    tagline: 'Turn the strategy into words, content and customer-facing activity.',
    forWho:
      'For businesses that have done the brand work, or know they need clearer messaging, but have not yet turned it into useful content, website copy, campaigns or internal guidance. This is ideal after a rebrand, repositioning project, strategy workshop or launch of a new offer.',
    includes: [
      'Review of your brand strategy, guidelines and current messaging',
      'Website copy direction and key page structure',
      'Content pillars and campaign themes',
      'Practical messaging for LinkedIn, email, proposals and sales conversations',
      'Internal guidance so your team knows how to use the brand day to day',
      'Optional content and creative delivery through Alchemy Branding Studio',
    ],
    outcomes:
      'Your brand stops sitting in a document and starts showing up properly across your website, content, sales materials and customer journey.',
    cta: 'Talk about deployment support',
    bannerBg: 'bg-curious-blue',
    bannerText: 'text-white',
    bannerMuted: 'text-white/60',
    bannerBadge: 'border-white/30 text-white',
    bannerDivider: 'border-white/20',
    bodyBg: 'bg-background',
  },
  {
    id: 'fractional',
    badge: null,
    title: 'Fractional Brand & Marketing Support',
    tagline: 'Regular senior support without hiring full-time too soon.',
    forWho:
      'For growing businesses that need senior brand and marketing direction, but are not ready for a full-time hire. This usually works best at around one day a week, with the option to increase support for heavier projects and reduce it as the right people and processes are put in place.',
    includes: [
      'Regular senior brand and marketing support',
      'Founder or MD sounding-board sessions',
      'Marketing planning and prioritisation',
      'Support for current marketing staff or external suppliers',
      'Content, campaign and website direction',
      'Guidance on first or next marketing hires',
      'Review of tools, systems, AI use and proposal processes',
      'Clear monthly priorities and progress check-ins',
    ],
    outcomes:
      'You get more structure, better decisions and a clearer path towards building the right internal function. The aim is not to make you dependent on me. It is to help you build the right foundations, people and process so, eventually, you do not need me in the same way.',
    cta: 'Discuss fractional support',
    bannerBg: 'bg-mindaro',
    bannerText: 'text-navy',
    bannerMuted: 'text-navy/60',
    bannerBadge: 'border-navy/30 text-navy',
    bannerDivider: 'border-navy/20',
    bodyBg: 'bg-surface',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Working together</p>
              <h1 className="text-section font-bold text-ink mb-5">
                Support for the messy middle of brand, marketing and commercial growth.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-4">
                Most businesses I work with are not starting from scratch. They have ambition,
                ideas, maybe a small team, maybe a new brand, maybe no marketing function at all.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-4">
                What they are missing is structure.
              </p>
              <p className="text-base text-muted leading-relaxed mb-6">
                I help founders and Managing Directors work out what is needed, what is missing and
                what to do next, then support the work through consultancy, fractional input or
                agency-backed delivery.
              </p>
              <p className="text-base text-muted">
                Not sure where to start?{' '}
                <Link
                  href="/contact"
                  className="text-brand font-medium hover:underline underline-offset-4"
                >
                  That is usually what the first conversation is for →
                </Link>
              </p>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/services-header.png"
                  alt="Ways to work with Jessica Morgan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK-PICK OVERVIEW ──────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <p className="section-label">Find your fit</p>
            <h2 className="text-section font-bold text-ink">Where do you need support?</h2>
            <p className="mt-3 text-muted text-base leading-relaxed">
              Start with the option that sounds closest to where you are now. We can shape the
              right scope from there.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-200"
              >
                {/* Coloured header */}
                <div className={`${service.bannerBg} px-6 py-5`}>
                  {service.badge && (
                    <span className={`inline-block text-xs font-medium tracking-widest uppercase border px-2.5 py-0.5 rounded-full mb-3 ${service.bannerBadge}`}>
                      {service.badge}
                    </span>
                  )}
                  <h3 className={`font-bold text-base leading-snug ${service.bannerText}`}>{service.title}</h3>
                </div>
                {/* Body */}
                <div className="bg-background flex flex-col flex-1 px-6 py-8 gap-4">
                  <p className="text-sm text-muted leading-relaxed flex-1">{service.tagline}</p>
                  <span className="text-sm font-medium text-brand group-hover:underline underline-offset-4">
                    See what is included →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="border-b border-border">

          {/* Coloured banner */}
          <div className={`${service.bannerBg}`}>
            <div className="container-content">

              {/* Top: badge + title + tagline */}
              <div className="pt-12 md:pt-16 pb-8">
                {service.badge && (
                  <span className={`inline-block text-xs font-medium tracking-widest uppercase border px-3 py-1 rounded-full mb-4 ${service.bannerBadge}`}>
                    {service.badge}
                  </span>
                )}
                <h2 className={`text-section font-bold ${service.bannerText} mb-3`}>{service.title}</h2>
                <p className={`text-xl ${service.bannerMuted} max-w-xl leading-relaxed`}>{service.tagline}</p>
              </div>

              {/* Who it's for */}
              <div className={`border-t ${service.bannerDivider} pt-6 pb-12`}>
                <p className={`text-xs font-medium tracking-widest uppercase ${service.bannerMuted} mb-2`}>Who it&apos;s for</p>
                <p className={`text-base ${service.bannerMuted} max-w-2xl leading-relaxed`}>{service.forWho}</p>
              </div>

            </div>
          </div>

          {/* Content — includes + outcomes + CTA */}
          <div className={`${service.bodyBg} section-padding`}>
            <div className="container-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                {/* Left: what's included */}
                <div>
                  <div className="text-xs font-medium tracking-widest uppercase text-muted mb-5">
                    What&apos;s included
                  </div>
                  <ul className="flex flex-col gap-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 flex-shrink-0 w-4 h-4 text-brand"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base text-ink leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: what changes + CTA */}
                <div className="flex flex-col gap-6">
                  <div className="bg-brand/5 border border-brand/10 rounded-xl p-6">
                    <div className="text-xs font-medium tracking-widest uppercase text-brand mb-3">
                      What changes
                    </div>
                    <p className="text-base text-ink leading-relaxed">{service.outcomes}</p>
                  </div>
                  <div>
                    <Link href="/contact" className="btn-primary">
                      {service.cta}
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── NOT SURE WHERE TO START ───────────────────────────────────── */}
      <section className="section-padding bg-brand">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-navy mb-4 max-w-xl mx-auto">
            Not sure which is right for you?
          </h2>
          <p className="text-navy/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Most clients start with either a Brand &amp; Commercial Clarity Workshop or a clarity
            conversation. Both give you a clearer view of what you need before you commit to a
            bigger piece of work.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
          >
            Book a Clarity Call
          </Link>
          <p className="mt-4 text-navy/50 text-sm">Free. 30 minutes. No obligation.</p>
        </div>
      </section>
    </>
  )
}
