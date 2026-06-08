import { Button } from '@/components/ui/button'
import { LiveTerminal } from '@/components/LiveTerminal'
import { RocketLaunch } from '@/components/RocketLaunch'
import { TechCapabilities } from '@/components/TechCapabilities'
import { ArrowRight } from 'lucide-react'

const HEADER_OFFSET = 72

export function TransformShowcase() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (!element) return

    const offset = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 h-64 w-64 animate-float-slower rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 animate-float-slow rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-2xl" />
      </div>

      <RocketLaunch />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:gap-10">
          <div className="relative space-y-6">
            <div className="relative z-10 text-center xl:pl-24 xl:text-left">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your Business?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Let&apos;s discuss how we can create a tailored management software solution for your
                specific business needs.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center xl:justify-start">
                <Button onClick={scrollToContact} className="rounded-full px-6">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={scrollToContact} variant="outline" className="rounded-full px-6">
                  View Pricing
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
                ✓ Free Consultation · ✓ Custom Solutions · ✓ Ongoing Support
              </p>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-lg xl:max-w-none">
              <LiveTerminal />
            </div>
          </div>

          <TechCapabilities embedded />
        </div>
      </div>
    </section>
  )
}
