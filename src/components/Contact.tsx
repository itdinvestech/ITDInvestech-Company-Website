import { FormEvent, useRef, useState } from 'react'
import { Loader2, Mail, MapPin } from 'lucide-react'
import { submitContactForm } from '@/lib/contactApi'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const SUPPORT_EMAIL = 'support@itdinvestech.co.za'

const initialForm = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  website: '',
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref)
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setFeedback(null)

    try {
      const result = await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        honeypot: form.website.trim(),
      })

      if (!result.success) {
        throw new Error(result.errors.join(', ') || 'Could not send your message')
      }

      setForm(initialForm)
      setFeedback({
        type: 'success',
        message: `Thanks — your message was sent. We will reply from ${SUPPORT_EMAIL}.`,
      })
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Could not send your message',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className={cn('reveal', visible && 'reveal--visible')}>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-3">Tell us about your project</h2>
          <p className="section-copy">
            Send us a message and our team will get back to you shortly.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="contact-chip group">
              <span className="contact-chip__icon">
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  Email
                </span>
                <span className="block font-medium text-foreground group-hover:text-[#667eea]">
                  {SUPPORT_EMAIL}
                </span>
              </span>
            </a>

            <div className="contact-chip">
              <span className="contact-chip__icon">
                <MapPin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  Location
                </span>
                <span className="block font-medium text-foreground">
                  Remote-first team serving clients across Africa
                </span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className={cn('contact-form reveal', visible && 'reveal--visible')}
          style={{ transitionDelay: '120ms' }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm font-medium">Name</span>
              <input
                required
                className="input-field"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input
                required
                type="email"
                className="input-field"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Company</span>
              <input
                className="input-field"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Subject</span>
              <input
                required
                className="input-field"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium">Message</span>
              <textarea
                required
                rows={5}
                className="input-field"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </label>
          </div>

          <input
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            value={form.website}
            onChange={(event) => setForm({ ...form, website: event.target.value })}
          />

          {feedback ? (
            <p
              className={cn(
                'mt-4 rounded-xl px-3 py-2.5 text-sm',
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'bg-red-50 text-red-800',
              )}>
              {feedback.message}
            </p>
          ) : null}

          <button type="submit" className="btn-glow mt-6 w-full sm:w-auto" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              'Send message'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
