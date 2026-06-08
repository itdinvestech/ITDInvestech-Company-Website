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
    <section id="contact" className="pt-20 pb-20 sm:pt-24 sm:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/60 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 via-purple-500/10 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-transparent blur-2xl animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                  <Mail className="h-6 w-6 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {EMAIL_ADDRESSES.map((entry) => (
                  <CardDescription key={entry.address} className="text-base block">
                    <span className="text-muted-foreground">{entry.label}: </span>
                    <a
                      href={`mailto:${entry.address}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {entry.address}
                    </a>
                  </CardDescription>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
                  <Phone className="h-6 w-6 text-primary mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="tel:+27647848610" className="hover:text-primary transition-colors">
                    +27 64 784 8610
                  </a>
                  <br />
                  Mon-Fri, 9am-6pm SAST
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border-2 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 pb-4">
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
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
                    className={`text-sm rounded-lg px-3 py-2 ${
                      feedback.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
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
