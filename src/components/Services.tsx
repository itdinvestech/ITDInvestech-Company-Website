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
    <section id="services" ref={ref} className="py-20">
      <div className="section-shell">
        <div className={cn('fade-section max-w-2xl', visible && 'fade-section--visible')}>
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-3">What we deliver</h2>
          <p className="section-copy">
            End-to-end product engineering — from discovery and design through deployment and support.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={cn('service-card fade-section', visible && 'fade-section--visible')}
              style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="mb-4 inline-flex rounded-xl bg-[#667eea]/10 p-3 text-[#667eea]">
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
