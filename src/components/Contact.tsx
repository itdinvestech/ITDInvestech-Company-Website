import { FormEvent, useState } from 'react'
import { Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { submitContactForm } from '@/lib/contactApi'

const initialForm = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  website: '',
}

export default function Contact() {
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
        message: 'Thanks — your message was sent to our team. We will reply from support@itdinvestech.co.za.',
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
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">ITD Investech</p>
          <h1 className="section-title mt-2">Contact us</h1>
          <p className="section-copy">
            Messages are delivered securely through our platform email service to
            {' '}support@itdinvestech.co.za.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:support@itdinvestech.co.za" className="hover:text-foreground">
                support@itdinvestech.co.za
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <span>South Africa</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Remote-first team serving clients across Africa</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1 block text-sm font-medium">Name</span>
              <input
                required
                className="input-field"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1 block text-sm font-medium">Email</span>
              <input
                required
                type="email"
                className="input-field"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-medium">Company</span>
              <input
                className="input-field"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-medium">Subject</span>
              <input
                required
                className="input-field"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-medium">Message</span>
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
              className={`mt-4 rounded-lg px-3 py-2 text-sm ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}>
              {feedback.message}
            </p>
          ) : null}

          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto" disabled={submitting}>
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
