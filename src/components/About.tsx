import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const highlights = [
  'Custom software development',
  'Cloud deployment on AWS',
  'Product design and UX',
  'Ongoing support and enhancements',
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref)

  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={cn('reveal', visible && 'reveal--visible')}>
          <p className="eyebrow">About us</p>
          <h2 className="section-title mt-3">
            Technology partner for schools, startups, and enterprises
          </h2>
          <p className="section-copy">
            We build reliable digital products — from learning management systems and admin portals
            to customer-facing websites and integrations — with a focus on clean architecture,
            secure deployments, and long-term maintainability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={item}
              className={cn(
                'feature-card reveal',
                visible && 'reveal--visible',
              )}
              style={{ transitionDelay: `${index * 90}ms` }}>
              <CheckCircle2 className="mb-3 h-5 w-5 text-[#667eea]" />
              <p className="font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
