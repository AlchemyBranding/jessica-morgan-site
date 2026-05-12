'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Replace with your Formspree endpoint: https://formspree.io/f/mkoyykpr
      const res = await fetch('https://formspree.io/f/mkoyykpr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-brand/5 border border-brand/10 rounded-lg p-8 text-center">
        <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-ink text-lg mb-2">Message sent</h3>
        <p className="text-muted text-base">
          Thanks for getting in touch. I&apos;ll come back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Your name <span className="text-muted">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-ink placeholder-muted/60 text-base focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email address <span className="text-muted">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-ink placeholder-muted/60 text-base focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company name"
          className="w-full px-4 py-3 rounded-md border border-border bg-background text-ink placeholder-muted/60 text-base focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          What&apos;s on your mind? <span className="text-muted">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about your business and what you're looking for..."
          className="w-full px-4 py-3 rounded-md border border-border bg-background text-ink placeholder-muted/60 text-base focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          Something went wrong. Please try again or email jessica@alchemybranding.studio directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-xs text-muted">
        Your details won&apos;t be shared or used for anything other than responding to your message.
      </p>
    </form>
  )
}
