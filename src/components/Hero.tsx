import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const STATS = [
  { value: 'Software', label: 'Platforms built for operators' },
  { value: 'AI inside', label: 'Wired into client systems' },
  { value: '25+', label: 'Projects in production' },
  { value: 'SA → NL', label: 'Built here, used abroad' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[38%] h-40 bg-gradient-to-r from-transparent via-primary/25 to-transparent blur-3xl dark:via-primary/35" />
        <div className="absolute inset-0 grid-pattern opacity-20 dark:opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[52rem] text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Custom software · AI integration
          </div>

          <h1 className="text-[2.35rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Software that works.
            <span className="mt-2 block bg-gradient-to-r from-primary via-blue-600 to-blue-500 bg-clip-text text-transparent dark:via-blue-400 dark:to-blue-300">
              AI that lives inside it.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl">
            ITDInvestech builds and modernises client software — then integrates AI into those
            systems so teams generate, score, analyse, and connect tools without leaving the work
            they already do.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="h-12 w-full rounded-md px-7 text-sm font-semibold sm:w-auto"
            >
              Get started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('ai')}
              className="h-12 w-full rounded-md px-7 text-sm font-semibold sm:w-auto"
            >
              What AI integration means
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card px-4 py-5 text-center sm:py-6">
              <div className="text-lg font-bold tracking-tight sm:text-xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
