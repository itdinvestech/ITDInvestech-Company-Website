import { Button } from '@/components/ui/button'
import { IndustryMarquee } from '@/components/IndustryMarquee'
import { useSiteTabs } from '@/components/SiteTabs'
import { WHATSAPP_HREF } from '@/lib/site'
import { ArrowRight, ExternalLink } from 'lucide-react'

const PROOF = [
  {
    href: 'https://lms-demo.itdinvestech.co.za/',
    label: 'Live school platform',
  },
  {
    href: 'https://drmetuseplasticsurgeon.co.za/',
    label: 'Live clinic site, Sandton',
  },
  {
    href: 'https://searchbox.itdinvestech.co.za/',
    label: 'Live hiring platform',
  },
]

export function Hero() {
  const { openTab } = useSiteTabs()

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

          <ul className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            {PROOF.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-2 text-[13px] font-medium transition-[transform,background-color] duration-150 ease-out hover:bg-card active:scale-[0.97] motion-reduce:active:scale-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  {item.label}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <Button
              size="lg"
              onClick={() => openTab('contact')}
              className="h-12 w-full px-7 text-[15px] sm:w-auto"
            >
              Book a 20-minute call
              <ArrowRight className="ml-0.5 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-12 w-full px-7 text-[15px] sm:w-auto">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <IndustryMarquee />
    </section>
  )
}
