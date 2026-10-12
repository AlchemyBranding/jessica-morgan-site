import type { Metadata } from 'next'
import Image from 'next/image'
import FAQItem from '@/components/FAQItem'
import BookingLink from '@/components/BookingLink'

/*
  Go-live copy approved by Dave and Jess on 8 Oct 2026
  (alchemy-marketing-plan/work/2026-10-website-copy/02-jmc-home.md).
  Use it word for word. Wording changes go back through the plan chat.
*/

export const metadata: Metadata = {
  title: { absolute: 'Jessica Morgan | Brand and Growth Strategist for SMEs' },
  description:
    'Brand and growth strategy for SME leadership teams. I build the foundations your brand, sales and marketing need, then stay as you grow.',
  alternates: {
    canonical: '/',
  },
}

const WORKSHOP_URL = 'https://alchemybranding.studio/brand-strategy-workshop'
const FOUNDER_STORY_URL = 'https://alchemybranding.studio/founder-shaped-business'

const problems = [
  "You've had a rebrand, but nobody knows what to do with it.",
  "You're doing plenty of marketing, and none of it feels joined up.",
  "You've hired a marketer, and they're short of direction.",
  "You don't know whether you need a hire, an agency, better systems or all three.",
  'The business has grown, but your website and marketing still describe the old one.',
  'You know something needs to change, but not what to fix first.',
]

const faqs = [
  {
    question: 'Is this the same as hiring a head of marketing?',
    answer:
      "No. I'm a brand strategist and a sales and marketing consultant, not a marketer. I build the foundations and guide the people doing the work. When you need a specialist, we bring someone trusted in from our network.",
  },
  {
    question: "We don't have a marketing person. Can you still help?",
    answer:
      "Yes. The workshop doesn't assume you have a team. The strategy recommends what to do next, whether that's with your people, with my guidance, or delivered by Alchemy.",
  },
  {
    question: 'Where do we start?',
    answer:
      "With a Clarity Call. Thirty minutes, free. If the workshop is the right next step, I'll say so. If it isn't, I'll say that too.",
  },
  {
    question: 'What is Brand to Scale?',
    answer: 'My podcast. Founders and operators on what actually helps a business grow.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-background section-padding border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
            <div>
              <p className="section-label">
                Brand and growth strategist. Strategic partner to SME leadership teams.
              </p>
              {/* On mobile: inner grid puts h1 and image side-by-side at equal height.
                  On desktop: display:contents dissolves the wrapper so h1 flows normally. */}
              <div className="grid grid-cols-[1fr_auto] items-stretch gap-4 mb-6 lg:contents">
                <h1 className="text-hero font-bold text-ink lg:mb-6">
                  Growth stalls without foundations.{' '}
                  <span className="text-brand">I build them with you, and stay as you grow.</span>
                </h1>
                <div className="w-40 sm:w-52 flex lg:hidden">
                  <div className="relative rounded-xl overflow-hidden flex-1">
                    <Image
                      src="/hero.jpg"
                      alt="Jessica Morgan, brand and growth strategist"
                      fill
                      className="object-cover object-top scale-125"
                      priority
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
                I help leadership teams work out the strategy behind their brand, sales and
                marketing, then put it to work.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <BookingLink />
                <a href="#how-i-work" className="btn-secondary text-sm">
                  How I work →
                </a>
              </div>
              <p className="mt-4 text-xs text-muted">Free 30-minute call. No pitch.</p>
            </div>
            {/* Desktop: full-height image column */}
            <div className="hidden lg:flex">
              <div className="relative rounded-xl overflow-hidden w-full min-h-full">
                <Image
                  src="/hero.jpg"
                  alt="Jessica Morgan, brand and growth strategist"
                  fill
                  className="object-cover object-top scale-125"
                  priority
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOUND FAMILIAR ───────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <h2 className="text-section font-bold text-ink">Sound familiar?</h2>
            <p className="mt-4 text-muted text-lg">
              When marketing isn&apos;t working, it&apos;s rarely the marketing. Usually nobody
              has written down how the business is positioned, who it&apos;s for, or how it
              should sound. So everyone is working from a guess.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {problems.map((problem, i) => (
              <li key={i} className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-muted text-base leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base text-muted max-w-prose">
            If that sounds familiar, the business has usually grown faster than its brand.
            That&apos;s fixable.
          </p>
        </div>
      </section>

      {/* ── HOW I WORK ───────────────────────────────────────────────── */}
      <section id="how-i-work" className="section-padding bg-background border-b border-border scroll-mt-24">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <h2 className="text-section font-bold text-ink">How I work</h2>
            <p className="mt-4 text-muted text-lg">Every engagement starts in the same place.</p>
          </div>

          <ol className="grid grid-cols-1 gap-6 max-w-4xl">
            <li className="rounded-2xl bg-brand px-8 py-10">
              <h3 className="font-bold text-white text-xl mb-4">
                1. The Brand &amp; Growth Workshop
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                One day with you and the people who run the business with you. We work out how
                you&apos;re positioned, who you&apos;re for, what you turn down, and how your brand
                should sound. Within two weeks you get a full brand strategy, and my recommendation
                for what happens next.
              </p>
              <a
                href={WORKSHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                About the workshop →
              </a>
            </li>

            <li className="rounded-2xl bg-white/5 border border-white/10 px-8 py-10">
              <h3 className="font-bold text-ink text-xl mb-4">
                2. Then, if you want me alongside you: ongoing support
              </h3>
              <p className="text-muted text-base leading-relaxed mb-6">
                Some businesses take the strategy and run with it. Others want help putting it to
                work. There are two levels of monthly support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="font-semibold text-ink mb-2">Guide.</div>
                  <p className="text-muted text-base leading-relaxed">
                    For businesses with one marketer or a small team. I meet your team each month,
                    set the priorities, coach the person doing the marketing, and help with the
                    bigger decisions.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-ink mb-2">Partner.</div>
                  <p className="text-muted text-base leading-relaxed">
                    For bigger or growing teams. More of my time, with more of your people. That
                    might mean working with your heads of sales and marketing. Or, if you&apos;re
                    still building the team, working with your leadership team and helping you hire
                    your first marketer.
                  </p>
                </div>
              </div>
              <p className="text-muted text-base leading-relaxed">
                Both are monthly support with a three-month minimum. We agree which suits you at
                the end of the workshop.
              </p>
            </li>

            <li className="rounded-2xl bg-white/5 border border-white/10 px-8 py-10">
              <h3 className="font-bold text-ink text-xl mb-4">3. And when the work needs doing</h3>
              <p className="text-muted text-base leading-relaxed">
                Alchemy Branding Studio, which I co-founded with Dave Morgan, builds what the
                strategy calls for: identity, website, content, social and animation. One team,
                from the thinking to the finished work.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── WHAT I DO ────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <h2 className="text-section font-bold text-ink">What I do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <p className="text-muted text-base leading-relaxed">
              <strong className="text-ink font-semibold">What I work on:</strong> brand and
              marketing strategy, sales strategy, content plans, and the systems and processes that
              help your team deliver them.
            </p>
            <p className="text-muted text-base leading-relaxed">
              <strong className="text-ink font-semibold">When you need a specialist:</strong> we
              work with a trusted network of partners, so when something needs a specialist, we
              bring the right person into the room. Design, websites, content and animation come
              from Alchemy.
            </p>
            <p className="text-muted text-base leading-relaxed">
              <strong className="text-ink font-semibold">What I won&apos;t promise:</strong> sales
              figures. Those depend on your team and your market. What I build is a brand and growth
              engine designed to attract the right leads, from the right audience, at the right
              price.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ─────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch">

            {/* Photo */}
            <div className="order-2 lg:order-1 flex">
              <div className="relative w-full rounded-lg overflow-hidden aspect-[4/5] lg:aspect-auto">
                <Image
                  src="/jessica.jpg"
                  alt="Jessica Morgan, brand and growth strategist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-section font-bold text-ink mb-6">Why work with me</h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                Dave and I built our first studio, Tiny Wizard, to a team of 12: animators,
                copywriters, designers, project managers, and people in marketing and business
                development. We also closed it. That taught me more about growing a business than
                anything since.
              </p>
              <p className="text-muted text-base leading-relaxed mb-5">
                Since then I&apos;ve worked with leadership teams in security, recruitment,
                healthcare, health and safety, water management and professional services, building
                the strategy that gets brand, sales and marketing pulling in the same direction. Dave
                and I co-founded Alchemy Branding Studio to deliver it.
              </p>
              <p className="text-muted text-base leading-relaxed mb-5">
                At Tiny Wizard we made the mistake I now help other founders avoid. We hired a
                marketing manager without giving her the plan, systems, processes and clear KPIs she
                needed to succeed. Then we hired a business development manager without giving him
                the positioning, information and sales language he needed to do the job well. Both
                were good at their jobs. Neither had what they needed, because the plan only existed
                in our heads.{' '}
                <a
                  href={FOUNDER_STORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-medium hover:underline underline-offset-4"
                >
                  Dave tells the full story here →
                </a>
              </p>
              <p className="text-muted text-base leading-relaxed">
                So I don&apos;t look at brand or marketing on their own. I work alongside MDs and
                leadership teams on the commercial side of the business: brand, sales and marketing,
                and how they support the whole business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">What clients say</p>
            <h2 className="text-section font-bold text-ink">Trusted by founders, leaders and growing teams.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'Brand strategy and campaign direction',
                name: 'Dave Matthews',
                title: 'Specialist in People Services',
                img: '/testimonial-dave.jpg',
                linkedin: 'https://www.linkedin.com/in/davejmatthews/',
                quote: 'Jess has a remarkable ability to understand a brand\'s vision and translate it into effective, result-driven marketing strategies. Her attention to detail, dedication, and results-focused mindset have been invaluable to the success of our campaigns.',
              },
              {
                label: 'Commercial clarity and fresh thinking',
                name: 'Lee Horton',
                title: 'CEO & Founder, Athena Security Solutions',
                img: '/testimonial-lee.jpg',
                linkedin: 'https://www.linkedin.com/in/lee-horton-5714764/',
                quote: 'Jess is an absolutely refreshing presence, effortlessly grasping the intricacies of my company within just 40 minutes of our initial meeting. Her remarkable ability to introduce groundbreaking ideas and ultimately deliver exceptional results sets her apart entirely.',
              },
              {
                label: 'Brand position and market presence',
                name: 'Gavin Jones',
                title: 'Co-Founder, Valleys Vodka',
                img: '/testimonial-gavin.jpg',
                linkedin: 'https://www.linkedin.com/in/gavin-jones-44604b221/',
                quote: 'Jess demonstrated a deep understanding of our vision and values from the outset. Thanks to her hard work and dedication, Valleys Vodka has a strong and memorable brand presence that sets us apart in the market.',
              },
              {
                label: 'Google review',
                name: 'Ashley Williams',
                title: '',
                img: '',
                linkedin: '',
                quote: 'Jess has been fantastic in providing marketing & comms direction and delivery. From the off, she got to know the business, worked with existing stakeholders and carefully got to work delivering a transformation in our brand. Look forward to what comes next as the journey is only just beginning...',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
                <div className="text-xs font-medium tracking-widest uppercase text-brand">{t.label}</div>
                <p className="text-muted text-base leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                {t.linkedin ? (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                      <Image
                        src={t.img}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="text-ink font-semibold text-sm group-hover:text-brand transition-colors">{t.name}</div>
                      <div className="text-muted text-xs">{t.title}</div>
                    </div>
                  </a>
                ) : (
                  <div className="text-ink font-semibold text-sm">{t.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PART OF ALCHEMY ───────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <h2 className="text-section font-bold text-ink">Part of Alchemy</h2>
            <p className="mt-4 text-muted text-lg">
              Jessica Morgan Consulting is part of Alchemy Branding Studio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                bg: 'bg-curious-blue',
                textColor: 'text-white',
                mutedColor: 'text-white/70',
                title: 'Alchemy Branding Studio',
                body: 'Runs the Brand & Growth Workshop, which I facilitate, and delivers the work the strategy calls for.',
                href: 'https://alchemybranding.studio',
                cta: 'Explore Alchemy',
              },
              {
                bg: 'bg-brand',
                textColor: 'text-white',
                mutedColor: 'text-white/70',
                title: 'Jessica Morgan Consulting',
                body: 'My ongoing support for leadership teams: Guide and Partner.',
                href: null,
                cta: null,
              },
              {
                bg: 'bg-mindaro',
                textColor: 'text-navy',
                mutedColor: 'text-navy/60',
                title: 'Brand to Scale',
                body: 'My podcast: honest conversations about building brands, teams and businesses.',
                href: 'https://www.brandtoscale.co.uk',
                cta: 'Listen to Brand to Scale',
              },
            ].map((card) => (
              <div key={card.title} className={`${card.bg} rounded-2xl px-8 py-10 flex flex-col gap-4`}>
                <div className={`font-bold text-lg ${card.textColor}`}>{card.title}</div>
                <p className={`text-base leading-relaxed flex-1 ${card.mutedColor}`}>{card.body}</p>
                {card.href && card.cta && (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium underline underline-offset-4 ${card.textColor} hover:opacity-80 transition-opacity`}
                  >
                    {card.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <h2 className="text-section font-bold text-ink">Common questions</h2>
          </div>
          <div className="max-w-3xl border-t border-border">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-navy mb-3 max-w-2xl mx-auto">
            Not sure where to start?
          </h2>
          <p className="text-navy/80 text-xl font-medium mb-8">That&apos;s exactly what the call is for.</p>
          <BookingLink className="inline-flex items-center justify-center bg-navy text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5" />
          <p className="mt-4 text-navy/60 text-sm">Free. 30 minutes. No obligation.</p>
        </div>
      </section>
    </>
  )
}
