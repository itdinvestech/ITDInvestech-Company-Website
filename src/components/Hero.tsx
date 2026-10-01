import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { IndustryMarquee } from '@/components/IndustryMarquee'
import { scrollToSection } from '@/lib/utils'

const STATS = [
  { value: 'Build', label: 'Custom software for operators' },
  { value: 'Host', label: 'Cloud, security, uptime' },
  { value: 'Deliver', label: 'Live systems, real results' },
  { value: 'AI', label: 'Integrated where it pays off' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.14),transparent_62%)]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[46rem] text-center">
          <p className="eyebrow mb-6">Custom software, hosting, and delivery</p>

          <h1 className="display text-[2.5rem] sm:text-6xl lg:text-[4.5rem]">
            Custom software,
            <span className="mt-1 block text-primary">hosted and delivered.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg sm:leading-relaxed">
            ITDInvestech designs, builds, and hosts platforms for clients — then keeps them in
            production. One of our main abilities is integrating AI into those systems where it
            actually changes the work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="h-12 w-full px-7 text-[15px] sm:w-auto"
            >
              Get started
              <ArrowRight className="ml-0.5 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('how')}
              className="h-12 w-full px-7 text-[15px] sm:w-auto"
            >
              See how we work
            </Button>
          </div>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-[17px] font-semibold tracking-[-0.02em]">{stat.value}</dt>
              <dd className="mt-1 text-[13px] leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <IndustryMarquee />
    </section>
  )
}
