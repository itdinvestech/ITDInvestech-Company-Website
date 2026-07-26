import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from '@/lib/contactApi'
import { Loader2, Mail, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'

const EMAIL_ADDRESSES = [
  { label: 'General enquiries', address: 'info@itdinvestech.co.za' },
  { label: 'Support', address: 'support@itdinvestech.co.za' },
] as const

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    honeypot: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFeedback(null)
    setSubmitting(true)

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        subject: formData.subject,
        message: formData.message,
        honeypot: formData.honeypot,
      })

      if (result.success) {
        setFeedback({
          type: 'success',
          text: 'Thank you for your message. We will get back to you soon.',
        })
        setFormData({ name: '', email: '', company: '', subject: '', message: '', honeypot: '' })
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
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-25 dark:opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4 sm:space-y-6">
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
                  Mon-Fri, 9am-6pm SAST
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border/80 bg-card lg:col-span-2">
            <CardHeader className="p-5 pb-4 sm:p-6">
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
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

                <div className="grid gap-4 sm:grid-cols-2">
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

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

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
                    'Send Message'
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
