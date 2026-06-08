import { useRef } from 'react'
import { BookOpen, Cloud, Code2, Mail } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

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
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref)

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-24">
      <div className="section-band absolute inset-0 -z-10" aria-hidden="true" />
      <div className="section-shell">
        <div className={cn('reveal max-w-2xl', visible && 'reveal--visible')}>
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-3">What we deliver</h2>
          <p className="section-copy">
            End-to-end product engineering — from discovery and design through deployment and support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={cn('service-card reveal group', visible && 'reveal--visible')}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[#667eea]/15 to-[#764ba2]/10 p-3 text-[#667eea] transition group-hover:scale-110">
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
