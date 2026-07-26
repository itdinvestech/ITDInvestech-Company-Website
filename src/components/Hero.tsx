import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const STATS = [
  { value: '25+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '6', label: 'Team Members' },
  { value: 'SA → NL', label: 'International Reach' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-24 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-15" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs backdrop-blur-sm sm:mb-8 sm:px-4 sm:text-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
            <span>Engineering the future of business software</span>
          </div>

          <h1 className="animate-slide-up mb-5 text-3xl font-bold tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
            Transform Your Business with{' '}
            <span className="inline-block bg-gradient-to-r from-primary via-blue-600 to-blue-500 bg-clip-text text-transparent dark:via-blue-400 dark:to-blue-300">
              Custom Management Software
            </span>
          </h1>

          <p className="animate-slide-up stagger-1 mx-auto mb-8 max-w-3xl text-base text-muted-foreground sm:mb-10 sm:text-xl">
            We build production-grade platforms — from{' '}
            <span className="font-semibold text-foreground">School Management Systems</span> and{' '}
            <span className="font-semibold text-foreground">Medical Practice Software</span> to{' '}
            <span className="font-semibold text-foreground">Inventory</span>,{' '}
            <span className="font-semibold text-foreground">Real Estate</span>, and{' '}
            <span className="font-semibold text-foreground">Recruitment</span> solutions — with
            cloud delivery, GraphQL APIs, and enterprise polish.
          </p>

          <div className="animate-slide-up stagger-2 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>

          <div className="animate-fade-in stagger-3 mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-card/50 px-3 py-4 sm:border-0 sm:bg-transparent sm:p-0">
                <div className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
