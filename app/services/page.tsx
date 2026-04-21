import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four ways to work with Jessica Morgan: fractional growth retainer, 90-day sprint, advisory days, and growth audit. Senior commercial leadership for ambitious businesses across multiple industries.',
}

const services = [
  {
    id: 'retainer',
    badge: 'Most popular',
    title: 'Fractional Growth Retainer',
    tagline: 'The ongoing commercial leadership layer your business needs.',
    forWho:
      'Businesses with an existing marketing or sales team who need senior leadership to drive performance, create alignment, and build a scalable commercial function.',
    includes: [
      'Dedicated time each month: structured, consistent, and accountable',
      'Full ownership of marketing and sales strategy',
      'Active leadership of your existing team',
      'Pipeline and lead generation improvement',
      'Sales and marketing alignment',
      'CRM, reporting, and performance frameworks',
      'Board-level commercial input if required',
      'Regular progress reviews with clear metrics',
    ],
    outcomes:
      'You stop operating without senior commercial direction. Your team has leadership. Your pipeline becomes more predictable. Marketing and sales stop operating as separate units. Growth becomes something you manage, not something that just happens.',
    bannerBg: 'bg-brand',
    bannerText: 'text-white',
    bannerMuted: 'text-white/70',
    bannerBadge: 'border-white/40 text-white',
    bodyBg: 'bg-surface',
  },
  {
    id: 'sprint',
    badge: null,
    title: '90-Day Growth Sprint',
    tagline: 'A focused intervention when you need faster results.',
    forWho:
      'Businesses with a specific commercial challenge: a pipeline problem, a conversion gap, a launch, a market entry. If you need a structured, time-bound engagement to tackle it properly, this is it.',
    includes: [
      'Discovery and diagnosis in week one',
      'A clear 90-day plan with defined milestones',
      'Hands-on involvement in execution throughout',
      'Weekly check-ins and progress tracking',
      'End-of-sprint review with a clear handover plan',
    ],
    outcomes:
      'A defined problem gets properly addressed. Your team gains clarity, momentum, and a system they can continue using after the sprint ends.',
    bannerBg: 'bg-ink',
    bannerText: 'text-white',
    bannerMuted: 'text-white/60',
    bannerBadge: 'border-white/30 text-white',
    bodyBg: 'bg-background',
  },
  {
    id: 'advisory',
    badge: null,
    title: 'Advisory Days',
    tagline: 'Senior thinking when you need it, without ongoing commitment.',
    forWho:
      'Founders, MDs, or leadership teams who need focused senior input on a specific problem: strategy, planning, team development, a decision they\'re stuck on, or a workshop for their commercial team.',
    includes: [
      'Half-day or full-day sessions, in-person or remote',
      'Pre-session briefing to ensure time is used well',
      'Structured agenda co-created with you',
      'Clear outputs and next steps from every session',
      'Follow-up summary delivered within 48 hours',
    ],
    outcomes:
      'You get unstuck. Decisions that have been sitting get made. Your team leaves with clarity and direction.',
    bannerBg: 'bg-mindaro',
    bannerText: 'text-ink',
    bannerMuted: 'text-ink/60',
    bannerBadge: 'border-ink/30 text-ink',
    bodyBg: 'bg-surface',
  },
  {
    id: 'audit',
    badge: 'Good starting point',
    title: 'Growth Audit',
    tagline: 'Start with clarity. Know exactly what to fix and in what order.',
    forWho:
      'Businesses that suspect something is off in their marketing or sales function but aren\'t sure exactly what. A sensible starting point before committing to a longer engagement.',
    includes: [
      'Structured review of your marketing and sales function',
      'Lead generation and pipeline analysis',
      'Conversion and CRM review',
      'Team and process assessment',
      'Clear written output: what\'s working, what isn\'t, and a prioritised action plan',
    ],
    outcomes:
      'You stop guessing. You get a clear picture of where the gaps are, what matters most, and what to do next. Many clients use the audit to define the scope of a retainer or sprint.',
    bannerBg: 'bg-space-green',
    bannerText: 'text-white',
    bannerMuted: 'text-white/60',
    bannerBadge: 'border-white/30 text-white',
    bodyBg: 'bg-background',
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
                Ways to work with me
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Every business is at a different stage with different pressures. Here are the four
                ways clients engage, from a one-off audit to ongoing fractional leadership.
              </p>
              <p className="text-base text-muted">
                Not sure where to start?{' '}
                <Link
                  href="/contact"
                  className="text-brand font-medium hover:underline underline-offset-4"
                >
                  Book a discovery call →
                </Link>{' '}
                and we&apos;ll figure it out together.
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

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="border-b border-border">

          {/* Coloured banner */}
          <div className={`${service.bannerBg} py-12 md:py-16`}>
            <div className="container-content">
              {service.badge && (
                <span className={`inline-block text-xs font-medium tracking-widest uppercase border px-3 py-1 rounded-full mb-4 ${service.bannerBadge}`}>
                  {service.badge}
                </span>
              )}
              <h2 className={`text-subheading font-bold ${service.bannerText} mb-3`}>{service.title}</h2>
              <p className={`text-xl ${service.bannerMuted} max-w-xl leading-relaxed`}>{service.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className={`${service.bodyBg} section-padding`}>
            <div className="container-content">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* Left: who it's for + CTA */}
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-28">
                    <div className="mb-6">
                      <div className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
                        Who it&apos;s for
                      </div>
                      <p className="text-base text-ink leading-relaxed">{service.forWho}</p>
                    </div>
                    <Link href="/contact" className="btn-primary">
                      Book a Discovery Call
                    </Link>
                  </div>
                </div>

                {/* Right: includes + outcomes */}
                <div className="lg:col-span-7">
                  <div className="mb-8">
                    <div className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
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

                  <div className="bg-brand/5 border border-brand/10 rounded-lg p-6">
                    <div className="text-xs font-medium tracking-widest uppercase text-brand mb-3">
                      What changes
                    </div>
                    <p className="text-base text-ink leading-relaxed">{service.outcomes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── NOT SURE WHERE TO START ───────────────────────────────────── */}
      <section className="section-padding bg-ink">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-white mb-4 max-w-xl mx-auto">
            Not sure which is right for you?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Most clients start with either a Growth Audit or a discovery conversation. Both give
            you clarity without requiring a big commitment upfront.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
          >
            Book a Discovery Call
          </Link>
          <p className="mt-4 text-white/50 text-sm">Free. 30 minutes. No obligation.</p>
        </div>
      </section>
    </>
  )
}
