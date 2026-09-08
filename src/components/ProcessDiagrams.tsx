import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardList,
  Cloud,
  Code2,
  Eye,
  PenTool,
  Plug,
  Rocket,
  Search,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SOFTWARE_STEPS = [
  {
    icon: ClipboardList,
    title: 'Requirements',
    body: 'Sit with operators. Capture the real jobs, data, and constraints.',
  },
  {
    icon: PenTool,
    title: 'Design',
    body: 'Screens, data, and access that match how the work already happens.',
  },
  {
    icon: Code2,
    title: 'Build',
    body: 'APIs, roles, reports, and the edges other tools plug into.',
  },
  {
    icon: Cloud,
    title: 'Host',
    body: 'Cloud, security, backups, and uptime — we keep it alive.',
  },
  {
    icon: Rocket,
    title: 'Deliver',
    body: 'Go live, train the team, measure results, stay on for support.',
  },
]

const PLATFORM_MODULES = [
  { name: 'Quizzes', tag: 'Drafting eats hours', ai: true },
  { name: 'Lectures', tag: 'Repetitive prep', ai: true },
  { name: 'Reports', tag: 'Slow to summarise', ai: true },
  { name: 'Enrolment', tag: 'Already clear', ai: false },
  { name: 'Billing', tag: 'Rules-based', ai: false },
  { name: 'Rosters', tag: 'Leave as-is', ai: false },
]

const AI_FLOW = [
  { icon: Search, title: 'Find leverage', body: 'Only the slow, error-prone, or hard-to-see jobs.' },
  { icon: Plug, title: 'Wire it in', body: 'Inside the screens and stack the team already uses.' },
  { icon: Eye, title: 'People review', body: 'Operators edit, approve, and own what ships.' },
  { icon: Rocket, title: 'Production', body: 'Hosted with the rest of the platform, then measured.' },
]

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 text-muted-foreground/70 lg:px-1 lg:py-0">
      <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden />
      <ArrowRight className="hidden h-4 w-4 lg:block" aria-hidden />
    </div>
  )
}

function SoftwareDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Custom software
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          From requirements to a live, hosted product
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          This is the company: gather what the work actually needs, design it, build it, host it,
          and hand over results — not a repo and a slide deck.
        </p>
      </div>

      <div className="relative bg-muted/25 px-4 py-8 sm:px-8 sm:py-10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20 dark:opacity-10" />

        <div className="relative mx-auto flex max-w-5xl flex-col lg:flex-row lg:items-start">
          {SOFTWARE_STEPS.map((step, index) => {
            const Icon = step.icon
            const last = index === SOFTWARE_STEPS.length - 1
            return (
              <div key={step.title} className="flex flex-1 flex-col lg:flex-row lg:items-start">
                <div className="w-full">
                  <div
                    className={cn(
                      'flex items-center gap-3 rounded-xl border bg-background p-3.5 shadow-sm lg:flex-col lg:px-3 lg:py-5 lg:text-center',
                      last ? 'border-primary/45' : 'border-border',
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                        last
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-primary',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 lg:mt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <h4 className="text-sm font-bold sm:text-base">{step.title}</h4>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-sm leading-relaxed text-muted-foreground lg:text-center">
                    {step.body}
                  </p>
                </div>
                {index < SOFTWARE_STEPS.length - 1 && <Connector />}
              </div>
            )
          })}
        </div>

        <div className="relative mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:gap-3">
          <span className="rounded-full border border-border bg-background px-3 py-1">Client</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          <span className="rounded-full border border-border bg-background px-3 py-1">
            Brief & design
          </span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          <span className="rounded-full border border-border bg-background px-3 py-1">Code</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-medium text-foreground">
            Hosted in production
          </span>
        </div>
      </div>
    </div>
  )
}

function AiDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          AI integration
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          Find where it pays off, then wire it into the system
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          We do not sprinkle AI on every screen. We map the live product, mark the jobs that eat
          time or hide insight, and integrate there — with people still in charge.
        </p>
      </div>

      <div className="relative bg-muted/25 px-4 py-8 sm:px-8 sm:py-10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20 dark:opacity-10" />

        <div className="relative mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                A live platform, mapped
              </p>
              <div className="hidden items-center gap-3 text-[11px] text-muted-foreground sm:flex">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Wire AI
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  Leave as-is
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between border-b border-border px-1 pb-3">
                <span className="text-sm font-semibold">Client system</span>
                <span className="text-[11px] text-muted-foreground">LMS example</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {PLATFORM_MODULES.map((mod) => (
                  <div
                    key={mod.name}
                    className={cn(
                      'rounded-lg border p-3',
                      mod.ai
                        ? 'border-primary/45 bg-primary/10'
                        : 'border-border bg-muted/40',
                    )}
                  >
                    <p className="text-sm font-semibold">{mod.name}</p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{mod.tag}</p>
                    {mod.ai ? (
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        High leverage
                      </p>
                    ) : (
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Keep as-is
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Then integrate
            </p>
            <ol className="space-y-2">
              {AI_FLOW.map((step, index) => {
                const Icon = step.icon
                return (
                  <li key={step.title} className="flex gap-3 rounded-xl border border-border bg-background p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold">
                        <span className="mr-1.5 text-[11px] font-semibold text-muted-foreground">
                          0{index + 1}
                        </span>
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-primary" />
              AI sits inside the software. It is not the product.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProcessDiagrams() {
  return (
    <section id="how" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="section-intro">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            How we work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Build the system.
            <span className="mt-2 block text-muted-foreground">Add AI where it earns its place.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Custom software, hosting, and delivery first. AI integration is a main ability — used
            where the work is slow, repetitive, or hard to see — not the whole company.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-6 sm:mt-12 sm:space-y-8">
          <SoftwareDiagram />
          <AiDiagram />
        </div>
      </div>
    </section>
  )
}
