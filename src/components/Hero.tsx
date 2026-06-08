import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

const HEADER_OFFSET = 72

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offset = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-gradient-subtle" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 left-0 h-96 w-96 animate-pulse-slow rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl" />
        <div
          className="absolute top-1/4 right-0 h-80 w-80 animate-pulse-slow rounded-full bg-gradient-to-br from-blue-500/25 to-cyan-500/25 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-72 w-72 animate-pulse-slow rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in items-center rounded-full border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-background/80">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse text-primary" />
            <span>Engineering the future of business software</span>
          </div>

          <h1 className="animate-slide-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Transform Your Business with{' '}
            <span className="animate-gradient inline-block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom Management Software
            </span>
          </h1>

          <p className="animate-slide-up stagger-1 mx-auto mb-10 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            We build production-grade platforms — from{' '}
            <span className="font-semibold text-foreground">School Management Systems</span> and{' '}
            <span className="font-semibold text-foreground">Medical Practice Software</span> to{' '}
            <span className="font-semibold text-foreground">Inventory</span> and{' '}
            <span className="font-semibold text-foreground">Real Estate</span> solutions — with
            cloud delivery, GraphQL APIs, and enterprise polish.
          </p>

          <div className="animate-slide-up stagger-2 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="group relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Explore Services
            </Button>
          </div>

          <div className="animate-fade-in stagger-3 mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {[
              { value: '25+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '6', label: 'Team Members' },
              { value: '🇿🇦→🇳🇱', label: 'SA to NL' },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default transition-transform duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
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
