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
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <RocketLaunch />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 xl:grid-cols-2 xl:gap-14">
          <div className="space-y-8">
            <div className="text-center xl:text-left">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
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
                  className="rounded-full border-white/20 bg-white/5 px-8 text-lg text-white hover:bg-white/10 hover:text-white"
                >
                  View Pricing
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-400">
                ✓ Free Consultation &nbsp; ✓ Custom Solutions &nbsp; ✓ Ongoing Support
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl xl:max-w-none">
              <LiveTerminal />
            </div>
          </div>

          <TechCapabilities embedded />
        </div>
      </div>
    </section>
  )
}
