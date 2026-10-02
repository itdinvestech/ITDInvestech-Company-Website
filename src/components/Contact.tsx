import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useSiteTabs } from '@/components/SiteTabs'
import { submitContactForm } from '@/lib/contactApi'
import { NEED_OPTIONS, WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Loader2, Mail, Phone } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'

const EMAIL_ADDRESSES = [
  { label: 'General enquiries', address: 'info@itdinvestech.co.za' },
  { label: 'Support', address: 'support@itdinvestech.co.za' },
] as const

export function Contact() {
  const { intent, intentKey } = useSiteTabs()
  const [need, setNeed] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    if (intent) setNeed(intent)
  }, [intent, intentKey])

  const needOptions = need && !(NEED_OPTIONS as readonly string[]).includes(need)
    ? [need, ...NEED_OPTIONS]
    : [...NEED_OPTIONS]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFeedback(null)

    if (!need) {
      setFeedback({ type: 'error', text: 'Choose what you need.' })
      return
    }

    setSubmitting(true)

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        subject: need,
        message: formData.message,
        honeypot: formData.honeypot,
      })

      if (result.success) {
        setFeedback({
          type: 'success',
          text: 'We reply the same business day to set a time.',
        })
        setNeed('')
        setFormData({ name: '', email: '', company: '', message: '', honeypot: '' })
        return
      }

      setFeedback({
        type: 'error',
        text: result.errors.join(' ') || 'Unable to send your message. Please try again.',
      })
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error instanceof Error ? error.message : 'Unable to send your message. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container relative z-10 mx-auto px-4">
        <div className="section-intro mb-12 sm:mb-16">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="display text-3xl sm:text-5xl">Book a 20-minute call</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us what you run. We reply the same business day.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-6 sm:space-y-8">
            <Card className="border border-border/80 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
              <CardHeader className="p-5 sm:p-6">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-5 pb-5 sm:px-6 sm:pb-6">
                {EMAIL_ADDRESSES.map((entry) => (
                  <CardDescription key={entry.address} className="block text-sm sm:text-base">
                    <span className="text-muted-foreground">{entry.label}: </span>
                    <a
                      href={`mailto:${entry.address}`}
                      className="break-all text-foreground transition-colors hover:text-primary"
                    >
                      {entry.address}
                    </a>
                  </CardDescription>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-border/80 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
              <CardHeader className="p-5 sm:p-6">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <CardDescription className="text-sm sm:text-base">
                  <a href="tel:+27647848610" className="text-foreground transition-colors hover:text-primary">
                    +27 64 784 8610
                  </a>
                  <br />
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    WhatsApp
                  </a>
                  <br />
                  Mon-Fri, 9am-6pm SAST
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border/80 bg-card lg:col-span-2">
            <CardHeader className="p-5 pb-4 sm:p-6">
              <CardTitle>Book a 20-minute call</CardTitle>
              <CardDescription>Tell us what you run. We reply the same business day.</CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.co.za"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <fieldset className="space-y-2">
                  <legend className="text-sm font-medium">What do you need?</legend>
                  <div className="flex flex-wrap gap-2">
                    {needOptions.map((option) => {
                      const selected = need === option
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setNeed(option)}
                          className={cn(
                            'rounded-full border px-3 py-1.5 text-left text-[13px] font-medium transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.97] motion-reduce:active:scale-100',
                            selected
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-background text-foreground hover:border-primary/40',
                          )}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                    required
                    minLength={10}
                  />
                </div>

                {feedback && (
                  <p
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      feedback.type === 'success'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                        : 'border-destructive/30 bg-destructive/10 text-destructive'
                    }`}
                    role="status"
                  >
                    {feedback.text}
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request the call'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
