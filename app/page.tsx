import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Jessica Morgan | Commercial Brand & Marketing Consultant',
  description:
    'Commercial brand and marketing consultancy for founder-led businesses that need clarity, structure and senior support before hiring full-time.',
  alternates: {
    canonical: '/',
  },
}

const problems = [
  'Your website no longer explains the business you have become.',
  'You have a new brand, but no clear plan for how to use it.',
  'You are creating bits of activity, but none of it feels joined up.',
  'You do not know if you need a marketing hire, an agency, better systems or all three.',
  'Your small team needs direction, but not another pile of tasks.',
  'You know something needs to change, but you cannot yet see what to fix first.',
]

const differentiators = [
  {
    title: 'Founder-side experience',
    body: 'I have been the person building the team, managing the pressure and trying to make the plan work in real life.',
  },
  {
    title: 'Brand thinking with commercial sense',
    body: 'I help turn positioning, message and customer understanding into practical marketing activity.',
  },
  {
    title: 'Support for small teams',
    body: 'I can work with founders, Managing Directors, junior marketers, external suppliers or no internal marketing person at all.',
  },
  {
    title: 'Built to become internal',
    body: 'The aim is not to make you dependent on me. It is to help you build the right foundations, people and process over time.',
  },
]

const services = [
  {
    title: 'Brand & Commercial Clarity Workshop',
    tagline: 'Find the gaps and leave with a plan',
    description:
      'Find the gaps, sharpen the message and leave with a practical plan.',
    href: '/services#clarity',
    headerBg: 'bg-brand',
    headerText: 'text-white',
  },
  {
    title: 'Brand-to-Market Deployment',
    tagline: 'Turn strategy into activity',
    description:
      'Turn your brand strategy into website copy, content, campaigns and useful activity.',
    href: '/services#deployment',
    headerBg: 'bg-curious-blue',
    headerText: 'text-white',
  },
  {
    title: 'Fractional Brand & Marketing Support',
    tagline: 'Ongoing senior direction',
    description:
      'Ongoing senior input for founders, Managing Directors and small teams that need direction without a full-time hire.',
    href: '/services#fractional',
    headerBg: 'bg-mindaro',
    headerText: 'text-navy',
  },
]

const faqs = [
  {
    question: 'What does fractional actually mean?',
    answer:
      'It means you get senior brand and marketing support on a regular, structured basis without hiring someone full-time. This might be one day a week, a few days a month, or a more involved project that reduces over time as your team and systems develop.',
  },
  {
    question: 'Is this the same as hiring a CMO?',
    answer:
      'No. I am not positioning this as a corporate CMO role. I work best with founder-led businesses that need senior thinking, clearer structure and practical support before they are ready for a full-time senior hire.',
  },
  {
    question: 'Is this sales coaching?',
    answer:
      'No. I do not offer sales coaching. I can help make sure your brand, messaging, content, tools and customer journey support sales conversations more effectively, but I am not coming in to coach your sales team.',
  },
  {
    question: 'We do not have a marketing person. Can you still help?',
    answer:
      'Yes. That is often the right time to start. I can help you work out what you need, what should be handled by suppliers, what can wait, and what your first or next marketing hire should look like.',
  },
  {
    question: 'We already have a small team. Is this still relevant?',
    answer:
      'Yes. A small team can be capable and committed, but still need direction, prioritisation, better briefs and senior support. I can work alongside them without taking over.',
  },
  {
    question: 'Where does Alchemy fit in?',
    answer:
      'Alchemy Branding Studio is the delivery partner behind this work. If you need content, website copy, campaigns, social media or creative support after the strategy is clear, that work can be supported through Alchemy.',
  },
  {
    question: 'What is Brand to Scale?',
    answer:
      'Brand to Scale is my podcast and thought platform. It is where I share conversations and ideas about the real work behind building brands, teams and businesses that last.',
  },
  {
    question: 'Do you manage PPC or paid ads?',
    answer:
      'No. PPC management is not part of this offer. If paid media is needed, I can help you understand the role it should play and what kind of specialist support to look for.',
  },
  {
    question: 'Do you promise growth or revenue increases?',
    answer:
      'No, and I would be wary of anyone who does. What I can help build is clearer positioning, stronger marketing foundations, better use of brand, better systems and a more practical route to action. Those things support growth, but they do not magically guarantee it.',
  },
  {
    question: 'Where do we start?',
    answer:
      'Most clients start with a Brand & Commercial Clarity Workshop or a clarity call. The first step is working out what the real gap is, before anyone rushes into more activity.',
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
              {/* Mobile: small portrait image floated right, hidden on desktop */}
              <div className="float-right ml-5 mb-3 w-32 sm:w-40 rounded-xl overflow-hidden lg:hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/hero.jpg"
                    alt="Jessica Morgan, Commercial Brand & Marketing Consultant"
                    fill
                    className="object-cover"
                    priority
                    sizes="160px"
                  />
                </div>
              </div>
              <p className="section-label">Commercial Brand &amp; Marketing Consultancy</p>
              <h1 className="text-hero font-bold text-ink mb-6">
                Brand and marketing clarity for{' '}
                <span className="text-brand">founder-led businesses.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-6 max-w-2xl">
                You might have a new brand you are not sure how to use, a small team that needs
                direction, no marketing function at all, or a website that no longer reflects the
                business you have become.
              </p>
              <p className="text-base text-muted mb-10 max-w-2xl">
                I help founders and Managing Directors work out what is missing, what matters most
                and what needs to happen next, then support the work through clear strategy,
                practical planning and agency-backed delivery where needed.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Clarity Call
                </Link>
                <Link href="/services" className="btn-secondary text-sm">
                  Explore ways to work together →
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">Free 30-minute call. No pressure, no awkward pitch.</p>
            </div>
            {/* Desktop: full-height image column */}
            <div className="hidden lg:flex">
              <div className="relative rounded-xl overflow-hidden w-full min-h-full">
                <Image
                  src="/hero.jpg"
                  alt="Jessica Morgan, Commercial Brand & Marketing Consultant"
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

      {/* ── SOUND FAMILIAR ───────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-brand mb-4">Is this where things feel stuck?</p>
            <h2 className="text-section font-bold text-ink">Sound familiar?</h2>
            <p className="mt-4 text-muted text-lg">
              These are usually signs that the business has not failed. It has simply outgrown the
              way it currently explains itself, markets itself or supports sales conversations.
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
            These are not failure points. They are growing pains. The trick is not letting them
            become expensive habits.
          </p>
        </div>
      </section>

      {/* ── WAYS TO WORK WITH ME ─────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="section-label">Working together</p>
            <h2 className="text-section font-bold text-ink">Ways to work with me</h2>
            <p className="mt-4 text-muted text-lg">
              Most businesses I work with sit somewhere between &ldquo;we know we need better brand
              and marketing support&rdquo; and &ldquo;we are not ready to hire a senior person
              full-time&rdquo;. These three routes are built for that middle stage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <p className="text-sm text-muted">
            Start with the option that sounds closest to where you are now.{' '}
            <Link href="/contact" className="text-brand font-medium hover:underline underline-offset-4">
              We can shape the right scope from there →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ─────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch">

            {/* Photo */}
            <div className="order-2 lg:order-1 flex">
              <div className="relative w-full rounded-lg overflow-hidden aspect-[4/5] lg:aspect-auto">
                <Image
                  src="/jessica.jpg"
                  alt="Jessica Morgan, Commercial Brand & Marketing Consultant"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="section-label">Why work with me?</p>
              <h2 className="text-section font-bold text-ink mb-6">
                I know what happens when a business outgrows the way it used to explain itself.
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                I am a Commercial Director, brand strategist and business builder with over a decade
                of experience across brand, communications, marketing structure, creative teams and
                founder-led growth.
              </p>
              <p className="text-muted text-base leading-relaxed mb-5">
                I have built a business, closed one, co-founded Alchemy Branding Studio and worked
                inside leadership teams through rebrands, team changes, new hires and commercial
                pressure. So I do not look at brand or marketing as isolated jobs. I look at how
                they support the whole business.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                That usually means asking better questions. What are we known for? Who are we trying
                to reach? Does the website help or hinder? What content do we actually need? Who
                should we hire next? Which tools will make life easier, not noisier? Because most
                growing businesses do not need more random activity. They need clearer decisions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {differentiators.map((d, i) => (
                  <div key={i}>
                    <div className="font-semibold text-ink text-sm mb-1">{d.title}</div>
                    <div className="text-muted text-sm leading-relaxed">{d.body}</div>
                  </div>
                ))}
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
                <div className="text-xs font-medium tracking-widest uppercase text-brand">{t.label}</div>
                <p className="text-muted text-base leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ────────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="section-label">Connected support</p>
            <h2 className="text-section font-bold text-ink">Strategy, support and delivery under one roof.</h2>
            <p className="mt-4 text-muted text-lg">
              My consultancy work sits alongside Alchemy Branding Studio and Brand to Scale.
              Different doors, same house. Each one supports founders and growing businesses in a
              different way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                bg: 'bg-brand',
                textColor: 'text-white',
                mutedColor: 'text-white/70',
                title: 'Jessica Morgan Consultancy',
                body: 'For commercial brand and marketing clarity, senior sounding-board support, workshops and practical planning.',
                href: null,
                cta: null,
              },
              {
                bg: 'bg-curious-blue',
                textColor: 'text-white',
                mutedColor: 'text-white/70',
                title: 'Alchemy Branding Studio',
                body: 'For brand identity, website copy, content, social media, campaigns and creative delivery when the strategy needs turning into real work.',
                href: 'https://alchemybranding.studio',
                cta: 'Explore Alchemy',
              },
              {
                bg: 'bg-mindaro',
                textColor: 'text-navy',
                mutedColor: 'text-navy/60',
                title: 'Brand to Scale',
                body: 'The podcast and content platform where I talk about the honest, useful and sometimes messy side of building brands, teams and businesses.',
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

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-content">
          <div className="max-w-prose mb-12">
            <p className="section-label">Getting started</p>
            <h2 className="text-section font-bold text-ink">How it works</h2>
            <p className="mt-4 text-muted text-lg">
              No heavy process. No 40-page proposal that nobody wants to read. Just a useful
              conversation, a clear view of the problem and a sensible next step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Book a clarity call',
                body: '30 minutes. Free. We will talk through where the business is now, what is working, what feels stuck and what you are trying to change.',
                bg: 'bg-brand',
                stepColor: 'text-white/25',
                titleColor: 'text-white',
                bodyColor: 'text-white/70',
              },
              {
                step: '02',
                title: 'Work out the right starting point',
                body: 'I will give you an honest view on where I can help, where I cannot, and which type of support makes the most sense.',
                bg: 'bg-mindaro',
                stepColor: 'text-navy/20',
                titleColor: 'text-navy',
                bodyColor: 'text-navy/60',
              },
              {
                step: '03',
                title: 'Agree the next move',
                body: 'If there is a fit, we agree the scope, rhythm and priorities. Then we get moving with clear actions from day one.',
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
            Book a Clarity Call
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-background border-b border-border">
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
      <section className="section-padding bg-brand">
        <div className="container-content text-center">
          <h2 className="text-section font-bold text-navy mb-3 max-w-2xl mx-auto">
            Not sure which is right for you?
          </h2>
          <p className="text-navy/80 text-xl font-medium mb-6">That is exactly what the call is for.</p>
          <p className="text-navy/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We will talk through where the business is now, what is getting in the way and whether
            working together makes sense. No pressure. No performance. Just a useful conversation.
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
