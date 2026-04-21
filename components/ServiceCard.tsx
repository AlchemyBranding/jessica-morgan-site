import Link from 'next/link'

interface ServiceCardProps {
  title: string
  tagline: string
  description: string
  href?: string
  headerBg?: string
  headerText?: string
}

export default function ServiceCard({
  title,
  tagline,
  description,
  href = '/services',
  headerBg = 'bg-ink',
  headerText = 'text-white',
}: ServiceCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className={`${headerBg} px-6 py-5`}>
        <div className={`font-bold ${headerText} text-lg mb-1`}>{title}</div>
        <div className={`text-sm font-medium ${headerText} opacity-75`}>{tagline}</div>
      </div>
      <div className="bg-surface px-6 py-5 flex flex-col gap-4 flex-1">
        <p className="text-muted text-sm leading-relaxed flex-1">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-3 transition-all duration-150"
        >
          Find out more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
