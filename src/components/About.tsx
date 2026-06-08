import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref)

  return (
    <section id="about" ref={ref} className="section-band py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className={cn('fade-section', visible && 'fade-section--visible')}>
          <p className="eyebrow">About us</p>
          <h2 className="section-title mt-3">Technology partner for schools, startups, and enterprises</h2>
          <p className="section-copy">
            We build reliable digital products — from learning management systems and admin portals
            to customer-facing websites and integrations — with a focus on clean architecture,
            secure deployments, and long-term maintainability.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Custom software development',
            'Cloud deployment on AWS',
            'Product design and UX',
            'Ongoing support and enhancements',
          ].map((item, index) => (
            <div
              key={item}
              className={cn('feature-card fade-section', visible && 'fade-section--visible')}
              style={{ transitionDelay: `${index * 80}ms` }}>
              <p className="font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
