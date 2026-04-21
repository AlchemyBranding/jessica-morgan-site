import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Jessica Morgan | Fractional CMO & Sales Leadership',
  description:
    'Senior marketing and sales leadership for ambitious, growing businesses. Fractional CMO and commercial leadership, hands-on, accountable, and results-driven.',
}

const problems = [
  'Your pipeline is inconsistent: some months are fine, others are worrying',
  'Marketing and sales aren\'t really working together',
  'You\'ve got activity but you\'re not sure what\'s actually generating results',
  'Your team is capable, but there\'s no senior person driving commercial performance',
  'Growth has plateaued and nobody has a clear answer for why',
  'You need more strategic leadership, but a full-time CMO hire isn\'t the answer yet',
]

const differentiators = [
  {
    title: 'Done the job inside real businesses',
    body: 'Not a career consultant. Years of senior in-house experience: leading real teams, owning real numbers, fixing real problems.',
  },
  {
    title: 'Commercial thinking, not marketing fluff',
    body: 'Revenue, pipeline, conversion, growth. That\'s what matters. Every decision connects back to commercial outcomes.',
  },
  {
    title: 'Executes, not just advises',
    body: 'Embedded in your business. Working with your team. Accountable for progress, not handing you a report and walking away.',
  },
  {
    title: 'Trusted personal reputation',
    body: 'Over 10,000 professionals follow my thinking on LinkedIn, built on genuine credibility, not content volume.',
  },
]

const services = [
  {
    title: 'Fractional Growth Retainer',
    tagline: 'Ongoing monthly leadership',
    description:
      'The most impactful way to work together. Dedicated time each month: senior leadership embedded in your business, driving strategy, performance, and alignment.',
    href: '/services#retainer',
    headerBg: 'bg-brand',
    headerText: 'text-white',
  },
  {
    title: '90-Day Growth Sprint',
    tagline: 'Fixed-term transformation',
    description:
      'A focused, time-bound engagement to tackle a specific commercial challenge. Fast, structured, and with clear milestones from week one.',
    href: '/services#sprint',
    headerBg: 'bg-ink',
    headerText: 'text-white',
  },
  {
    title: 'Advisory Days',
    tagline: 'Senior input on demand',
    description:
      'A half or full day of focused strategic thinking. Strategy, planning, team sessions, or problem-solving, structured to make the most of the time.',
    href: '/services#advisory',
    headerBg: 'bg-mindaro',
    headerText: 'text-ink',
  },
  {
    title: 'Growth Audit',
    tagline: 'Start with clarity',
    description:
      'A structured review of your marketing and sales function. Know exactly what\'s working, what isn\'t, and what to prioritise. The right starting point before committing to more.',
    href: '/services#audit',
    headerBg: 'bg-space-green',
    headerText: 'text-white',
  },
]

const faqs = [
  {
    question: 'What does fractional actually mean?',
    answer:
      'It means I work with your business on a structured, regular basis: dedicated time, clear deliverables, real presence, without being employed full-time. You get senior leadership at a fraction of the cost of a full-time hire.',
  },
  {
    question: 'How is this different from using a marketing agency?',
    answer:
      'An agency executes tasks on your behalf. I take ownership of commercial outcomes. I work inside your business, lead your team, and make decisions, not just deliver outputs. Different job entirely.',
  },
  {
    question: 'We already have a marketing team. Is this still relevant?',
    answer:
      'Yes, this is built for exactly that situation. Your team handles execution. I provide the senior strategic and commercial leadership they\'re currently missing.',
  },
  {
    question: 'Is there a long contract involved?',
    answer:
      'No. The retainer runs on a monthly basis. If it\'s not working, you\'re not locked in.',
  },
  {
    question: 'How quickly can things get started?',
    answer:
      'Once we\'ve had a discovery call and agreed a scope, most engagements begin within two to three weeks.',
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer:
      'I work with ambitious, growth-focused businesses across multiple industries. If you\'re at the right stage of growth and have a real commercial challenge, it\'s worth having a conversation.',
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
              <p className="section-label">Fractional CMO &amp; Sales Leadership</p>
              <h1 className="text-hero font-bold text-ink mb-6">
                Senior marketing and sales leadership,{' '}
                <span className="text-brand">without the full-time hire.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                You&apos;ve got a team. What you need is someone senior enough to lead them, experienced
                enough to know what&apos;s broken, and practical enough to fix it.
              </p>
              <p className="text-base text-muted mb-10">
                Working with ambitious businesses across multiple industries. No fluff. Just results.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/services" className="btn-secondary text-sm">
                  See the services →
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">Free 30-minute call. No commitment.</p>
            </div>
            <div className="hidden lg:flex">
              <div className="relative rounded-xl overflow-hidden w-full min-h-full">
                <Image
                  src="/hero.jpg"
                  alt="Jessica Morgan, Fractional CMO and Sales Leadership"
                  fill
                  className="object-cover"
                  priority
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-ink border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">Is this you?</p>
            <h2 className="text-section font-bold text-white">Sound familiar?</h2>
            <p className="mt-4 text-white/60 text-lg">
              If any of these hit close to home, you&apos;re in the right place.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {problems.map((problem, i) => (
              <li key={i} className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-white/80 text-base leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base text-white/50 max-w-prose">
            These aren&apos;t failure points. They&apos;re the natural growing pains of a business
            that&apos;s outgrown its current commercial setup.
          </p>
        </div>
      </section>

      {/* ── WHY JESSICA ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch">

            {/* Photo */}
            <div className="order-2 lg:order-1 flex">
              <div className="relative w-full rounded-lg overflow-hidden aspect-[4/5] lg:aspect-auto">
                <Image
                  src="/jessica.jpg"
                  alt="Jessica Morgan, Fractional CMO and Sales Leadership"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="section-label">Why Jessica</p>
              <h2 className="text-section font-bold text-ink mb-6">
                I&apos;ve been inside the businesses you&apos;re running.
              </h2>
              <p className="text-muted text-base leading-relaxed mb-6">
                I&apos;m a Commercial Director and brand strategist with over a decade of experience
                aligning sales, marketing, and communications to help businesses thrive. Throughout
                my career, I&apos;ve guided companies through ambitious growth phases, rebrands, and
                team transformations, always focusing on creating cultures where people feel
                motivated, valued, and excited about what&apos;s next.
              </p>
              <p className="text-muted text-base leading-relaxed mb-6">
                I&apos;ve worked as a fractional marketing and brand consultant, partnering with
                leadership teams to refine brand identities, recruit high-performing marketing
                talent, and embed streamlined sales processes. I also co-founded Tiny Wizard Studio
                and Alchemy Branding Studio, discovering my passion for telling meaningful brand
                stories and nurturing people-first teams.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                I believe real success isn&apos;t just about meeting revenue goals. It&apos;s about
                building an environment where fresh ideas can flourish, people can grow, and
                everyone can take pride in the impact they make. If that resonates with you,
                let&apos;s connect.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {differentiators.map((d, i) => (
                  <div key={i}>
                    <div className="font-semibold text-ink text-sm mb-1">{d.title}</div>
                    <div className="text-muted text-sm leading-relaxed">{d.body}</div>
                  </div>
                ))}
              </div>

              {/* Career timeline */}
              <div className="mb-10">
                <div className="text-xs font-medium tracking-widest uppercase text-muted mb-5">
                  Career highlights
                </div>
                <div className="flex flex-col gap-0">
                  {[
                    { period: '2025 – Present', role: 'Commercial Director', org: 'Ligtas Consultancy and Training' },
                    { period: '2024 – 2025', role: 'Fractional Head of Brand & Communications', org: 'GS Verde Group' },
                    { period: '2024 – 2025', role: 'Fractional Sales & Marketing Director', org: 'Self-employed' },
                    { period: '2018 – Present', role: 'Co-Founder & Brand Strategist', org: 'Alchemy Branding Studio' },
                    { period: '2012 – 2023', role: 'Co-Founder', org: 'Tiny Wizard Studio' },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4 relative">
                      {/* Line */}
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                      </div>
                      <div className="pb-5">
                        <div className="text-xs text-muted mb-0.5">{item.period}</div>
                        <div className="text-sm font-semibold text-ink">{item.role}</div>
                        <div className="text-sm text-muted">{item.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-ink border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">What clients say</p>
            <h2 className="text-section font-bold text-white">In their own words.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dave Matthews',
                title: 'Specialist in People Services',
                img: '/testimonial-dave.jpg',
                linkedin: 'https://www.linkedin.com/in/davejmatthews/',
                quote: 'Jess has a remarkable ability to understand a brand\'s vision and translate it into effective, result-driven marketing strategies. Her attention to detail, dedication, and results-focused mindset have been invaluable to the success of our campaigns.',
              },
              {
                name: 'Lee Horton',
                title: 'CEO & Founder, Athena Security Solutions',
                img: '/testimonial-lee.jpg',
                linkedin: 'https://www.linkedin.com/in/lee-horton-5714764/',
                quote: 'Jess is an absolutely refreshing presence, effortlessly grasping the intricacies of my company within just 40 minutes of our initial meeting. Her remarkable ability to introduce groundbreaking ideas and ultimately deliver exceptional results sets her apart entirely.',
              },
              {
                name: 'Gavin Jones',
                title: 'Co-Founder, Valleys Vodka',
                img: '/testimonial-gavin.jpg',
                linkedin: 'https://www.linkedin.com/in/gavin-jones-44604b221/',
                quote: 'Jess demonstrated a deep understanding of our vision and values from the outset. Thanks to her hard work and dedication, Valleys Vodka has a strong and memorable brand presence that sets us apart in the market.',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
                <p className="text-white/80 text-base leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
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
                    <div className="text-white font-semibold text-sm group-hover:text-brand transition-colors">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="section-label">How we work together</p>
            <h2 className="text-section font-bold text-ink">Ways to work together</h2>
            <p className="mt-4 text-muted text-lg">
              There&apos;s no single way to engage. Here&apos;s how clients typically work with me.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <p className="text-sm text-muted">
            Not sure which fits?{' '}
            <Link href="/contact" className="text-brand font-medium hover:underline underline-offset-4">
              Book a discovery call →
            </Link>{' '}
            and we&apos;ll work it out.
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="section-label">Getting started</p>
            <h2 className="text-section font-bold text-ink">How it works</h2>
            <p className="mt-4 text-muted text-lg">
              No long procurement process. No lengthy proposal. Just a practical conversation and
              a clear next step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Book a discovery call',
                body: '30 minutes. Free. We talk through your business, where you are, and what\'s not working.',
                bg: 'bg-brand',
                stepColor: 'text-white/25',
                titleColor: 'text-white',
                bodyColor: 'text-white/70',
              },
              {
                step: '02',
                title: 'Get a clear recommendation',
                body: 'An honest view on which engagement makes sense, or whether now isn\'t the right time.',
                bg: 'bg-mindaro',
                stepColor: 'text-ink/20',
                titleColor: 'text-ink',
                bodyColor: 'text-ink/60',
              },
              {
                step: '03',
                title: 'Start making progress',
                body: 'If we\'re a good fit, we agree a scope and get started. Fast, clear, accountable from day one.',
                bg: 'bg-space-green',
                stepColor: 'text-white/25',
                titleColor: 'text-white',
                bodyColor: 'text-white/70',
              },
            ].map((item) => (
              <div key={item.step} className={`${item.bg} rounded-2xl px-8 py-10 flex flex-col gap-4`}>
                <div className={`text-6xl font-bold ${item.stepColor} leading-none`}>{item.step}</div>
                <div className={`font-bold ${item.titleColor} text-lg`}>{item.title}</div>
                <div className={`${item.bodyColor} text-base leading-relaxed`}>{item.body}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-10">
            <p className="section-label">Questions</p>
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
      <section className="section-padding bg-ink">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-white mb-5 max-w-2xl mx-auto">
            Not sure if this is the right fit?
            <br className="hidden sm:block" /> That&apos;s what the call is for.
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free 30-minute discovery call. We&apos;ll talk through where your business is,
            what&apos;s holding back growth, and whether working together makes sense. No pitch,
            no pressure, just an honest conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
          >
            Book a Discovery Call
          </Link>
          <p className="mt-4 text-white/50 text-sm">
            Or email directly:{' '}
            <a
              href="mailto:jessica@alchemybranding.studio"
              className="underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              jessica@alchemybranding.studio
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
