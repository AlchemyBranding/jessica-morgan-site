import Link from 'next/link'
import { bookingHref, bookingIsExternal } from '@/lib/booking'

interface BookingLinkProps {
  className?: string
  children?: React.ReactNode
}

/** The "Book a Clarity Call" button, pointed at the booking page. */
export default function BookingLink({
  className = 'btn-primary',
  children = 'Book a Clarity Call',
}: BookingLinkProps) {
  if (bookingIsExternal) {
    return (
      <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={bookingHref} className={className}>
      {children}
    </Link>
  )
}
