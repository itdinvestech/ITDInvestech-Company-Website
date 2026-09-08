import { Button } from '@/components/ui/button'
import { LiveTerminal } from '@/components/LiveTerminal'
import { TechCapabilities } from '@/components/TechCapabilities'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

export function TransformShowcase() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50 dark:from-muted/20 dark:to-muted/20" />
        <div className="absolute inset-0 dot-pattern opacity-25 dark:opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="relative space-y-8">
            <div className="relative z-10 text-center xl:text-left">
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to build, host, and ship?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Bring a new platform or an existing system. We deliver the software — and integrate
                AI where it earns its place.
              </p>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-lg xl:max-w-none">
              <LiveTerminal />
            </div>

            <div className="relative z-10 text-center xl:text-left">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center xl:justify-start">
                <Button onClick={() => scrollToSection('contact')} className="rounded-full px-6">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  View Pricing
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
                Free consultation · Custom software · Hosting · AI when it counts
              </p>
            </div>
          </div>

          <TechCapabilities embedded />
        </div>
      </div>
    </section>
  )
}
