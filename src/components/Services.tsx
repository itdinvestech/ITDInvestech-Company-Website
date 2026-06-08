import { BookOpen, Cloud, Code2, Mail } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Learning platforms',
    description: 'Multi-tenant LMS products with role-based access, academic setup, and student workflows.',
  },
  {
    icon: Code2,
    title: 'Custom applications',
    description: 'React, Django, and API-first systems tailored to your business processes.',
  },
  {
    icon: Cloud,
    title: 'Cloud hosting',
    description: 'Docker, EC2, S3, and CloudFront deployments with automated CI/CD pipelines.',
  },
  {
    icon: Mail,
    title: 'Email and integrations',
    description: 'Transactional email, payment gateways, and third-party service integrations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-muted/40 py-20">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Services</p>
        <h2 className="section-title mt-2">What we deliver</h2>
        <p className="section-copy">
          End-to-end product engineering — from discovery and design through deployment and support.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
