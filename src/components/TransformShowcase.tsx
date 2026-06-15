import { Button } from '@/components/ui/button'
import { LiveTerminal } from '@/components/LiveTerminal'
import { RocketLaunch } from '@/components/RocketLaunch'
import { SpaceBackground } from '@/components/SpaceBackground'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

export function TransformShowcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <SpaceBackground />
      <RocketLaunch />

      <div className="container relative z-10 mx-auto px-4">
        <div className="relative mx-auto max-w-2xl space-y-6">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Let&apos;s discuss how we can create a tailored management software solution for your
              specific business needs.
            </p>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-lg">
            <LiveTerminal />
          </div>

          <div className="relative z-10 text-center">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => scrollToSection('contact')} className="rounded-full px-6">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-400 sm:text-sm">
              ✓ Free Consultation · ✓ Custom Solutions · ✓ Ongoing Support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
