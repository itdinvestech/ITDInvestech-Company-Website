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
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 h-64 w-64 animate-float-slower rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 animate-float-slow rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-2xl" />
      </div>

      <RocketLaunch />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 xl:grid-cols-2 xl:gap-14">
          <div className="relative space-y-8">
            <div className="relative z-10 text-center xl:pl-28 xl:text-left">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Let&apos;s discuss how we can create a tailored management software solution for your
                specific business needs. Our team has the experience and expertise to bring your vision
                to life.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center xl:justify-start">
                <Button onClick={scrollToContact} size="lg" className="rounded-full px-8 text-lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-lg"
                >
                  View Pricing
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                ✓ Free Consultation &nbsp; ✓ Custom Solutions &nbsp; ✓ Ongoing Support
              </p>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-xl xl:max-w-none">
              <LiveTerminal />
            </div>
          </div>

          <TechCapabilities embedded />
        </div>
      </div>
    </section>
  )
}
