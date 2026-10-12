import type { Metadata } from 'next'
import Image from 'next/image'
import BookingLink from '@/components/BookingLink'

/*
  Go-live copy approved by Dave and Jess on 8 Oct 2026
  (alchemy-marketing-plan/work/2026-10-website-copy/03-jmc-services.md).
  Use it word for word. No prices for Guide or Partner anywhere; the workshop
  price lives on the Alchemy workshop page only.
*/

export const metadata: Metadata = {
  title: { absolute: 'Brand and Growth Strategy for SMEs | Jessica Morgan Consulting' },
  description:
    'Start with the Brand & Growth Workshop, then Guide or Partner if you want me alongside you. Strategy for SME leadership teams.',
  alternates: {
    canonical: '/services',
  },
}

const WORKSHOP_URL = 'https://alchemybranding.studio/brand-strategy-workshop'

const workshopFor = [
  "You've rebranded, but the new brand isn't being used properly.",
  "You're starting a new business and want to get it right from the start.",
  'The business has grown, and the brand no longer reflects what you’ve become.',
  'You know something needs to change, but not what to fix first.',
]

const workshopSteps = [
  'We research the business beforehand, and use the Clarity Call to shape the questions.',
  'One day with you and the people who run the business with you.',
  "Within two weeks: a full brand strategy. Positioning, who you're for and who you're not, messaging, tone of voice, values, and a plan for putting it to work.",
  'We go through it together on a call, and agree what happens next.',
]

const workshopRoutes = [
  'You take it from here, with a follow-up at 90 days.',
  'Guide or Partner, below.',
  'Alchemy delivers it.',
]

const guide = [
  'A monthly session with your team to set the priorities.',
  'Coaching for the person doing the marketing.',
  'Help with the bigger decisions.',
]

const partner = [
  'Everything in Guide.',
  'Working with your heads of sales and marketing.',
  "Or, if you're still building the team, working with your leadership team and helping you hire your first marketer.",
]

const forBoth = [
  'Monthly support, with a three-month minimum.',
  "What I work on is agreed once I'm in the business and can see the problem: brand and marketing strategy, sales strategy, content plans, and the systems and processes that help your team deliver them.",
  'When something needs a specialist, we bring someone trusted in from our network of partners. Design, websites, content and animation come from Alchemy.',
]

function NumberedList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-4">
          <span
            className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              dark ? 'bg-white/20 text-white' : 'bg-brand text-white'
            }`}
          >
            {i + 1}
          </span>
          <span className={`text-base leading-relaxed ${dark ? 'text-white/80' : 'text-muted'}`}>
            {item}
          </span>
        </li>
      ))}
    </ol>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-section font-serif font-normal text-ink mb-5">How we work together</h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Every business I work with starts in the same place: the Brand &amp; Growth
                Workshop. What happens after depends on what the workshop shows, and what your team
                needs.
              </p>
              <BookingLink />
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/services-header.jpg"
                  alt="Ways to work with Jessica Morgan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 1: THE WORKSHOP ─────────────────────────────────────── */}
      <section id="workshop" className="section-padding bg-surface border-b border-border scroll-mt-24">
        <div className="container-content">
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="bg-brand px-8 py-10">
              <p className="text-sm font-medium tracking-widest uppercase text-white/70 mb-3">Step 1</p>
              <h2 className="text-section font-serif font-normal text-white">The Brand &amp; Growth Workshop</h2>
            </div>
            <div className="bg-background px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <p className="text-ink font-semibold mb-4">
                    Who it&apos;s for: leadership teams at one of these points:
                  </p>
                  <NumberedList items={workshopFor} />
                </div>
                <div>
                  <h3 className="text-ink font-serif font-normal text-lg mb-3">
                    Why start here, even if you think you know what you need
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-4">
                    Most businesses come to me with a fix in mind: a new website, a rebrand, more
                    content. Sometimes they&apos;re right. More often the real problem sits
                    underneath: nobody has agreed how the business is positioned, who it&apos;s for,
                    or how it should sound. Build on top of that and you pay twice. Once for the
                    work, and again to fix it.
                  </p>
                  <p className="text-muted text-base leading-relaxed">
                    The workshop is one day. It means whatever comes next, whether you run it, I
                    guide it or Alchemy builds it, starts from decisions rather than a guess.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-ink font-semibold mb-4">What happens:</p>
                  <NumberedList items={workshopSteps} />
                </div>
                <div>
                  <p className="text-ink font-semibold mb-4">
                    What it leads to: one of three routes, and you choose once you&apos;ve seen the
                    strategy.
                  </p>
                  <NumberedList items={workshopRoutes} />
                </div>
                <a
                  href={WORKSHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-brand font-medium hover:underline underline-offset-4"
                >
                  More about the workshop →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 2: ONGOING SUPPORT ──────────────────────────────────── */}
      <section id="support" className="section-padding bg-background border-b border-border scroll-mt-24">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <p className="section-label">Step 2, if you want me alongside you</p>
            <h2 className="text-section font-serif font-normal text-ink">Ongoing support</h2>
            <p className="mt-4 text-muted text-lg">
              Some businesses take the strategy and run with it. Others want help putting it to
              work. There are two levels of monthly support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl bg-curious-blue px-8 py-10">
              <h3 className="font-serif font-normal text-white text-2xl mb-2">Guide</h3>
              <p className="text-white/70 text-base mb-6">For businesses with one marketer or a small team.</p>
              <NumberedList items={guide} dark />
            </div>
            <div className="rounded-2xl bg-space-green px-8 py-10">
              <h3 className="font-serif font-normal text-white text-2xl mb-2">Partner</h3>
              <p className="text-white/70 text-base mb-6">
                For bigger or growing teams. More of my time, with more of your people.
              </p>
              <NumberedList items={partner} dark />
            </div>
          </div>
          <div className="max-w-3xl">
            <p className="text-ink font-semibold mb-4">For both:</p>
            <NumberedList items={forBoth} />
            <p className="mt-8 text-muted text-base leading-relaxed mb-8">
              We agree which suits you, and the cost, at the end of the workshop.
            </p>
            <BookingLink />
          </div>
        </div>
      </section>

      {/* ── STEP 3: ALCHEMY ──────────────────────────────────────────── */}
      <section id="alchemy" className="section-padding bg-surface border-b border-border scroll-mt-24">
        <div className="container-content">
          <div className="max-w-prose">
            <p className="section-label">Step 3, when the work needs doing</p>
            <h2 className="text-section font-serif font-normal text-ink mb-5">Alchemy</h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Alchemy Branding Studio delivers what the strategy calls for: identity, website,
              content, social and animation. Dave runs delivery; I stay involved in the strategy.
            </p>
            <a
              href="https://alchemybranding.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-medium hover:underline underline-offset-4"
            >
              Explore Alchemy →
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand">
        <div className="container-content text-center">
          <h2 className="text-section font-serif font-normal text-navy mb-3 max-w-2xl mx-auto">
            Not sure which is right for you?
          </h2>
          <p className="text-navy/80 text-xl font-medium mb-8">
            Most people aren&apos;t, at the start. That&apos;s what the call is for.
          </p>
          <BookingLink className="inline-flex items-center justify-center bg-navy text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150" />
          <p className="mt-4 text-navy/60 text-sm">Free. 30 minutes. No obligation.</p>
        </div>
      </section>
    </>
  )
}
