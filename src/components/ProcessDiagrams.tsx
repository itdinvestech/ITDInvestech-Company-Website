import {
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
    title: 'We sit with the operators',
    body: 'The work already has a shape. We capture the jobs, the data, and the constraints before anyone draws a screen.',
  },
  {
    icon: PenTool,
    title: 'Then we design around that work',
    body: 'Screens, data, and access that match how the team already moves — not a template they have to learn around.',
  },
  {
    icon: Code2,
    title: 'We build the system',
    body: 'APIs, roles, reports, and the edges other tools plug into. One product, not a pile of disconnected apps.',
  },
  {
    icon: Cloud,
    title: 'We host it and keep it up',
    body: 'Cloud, security, backups, and uptime. The company does not hand over a repo and walk away.',
  },
  {
    icon: Rocket,
    title: 'We go live and stay on',
    body: 'Train the team, measure results, support what ships. A live product is the end of the story — until AI earns a place in it.',
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
  { icon: Plug, title: 'Wire it in', body: 'Inside the screens the team already uses.' },
  { icon: Eye, title: 'People review', body: 'Operators edit, approve, and own what ships.' },
  { icon: Rocket, title: 'Stay in production', body: 'Hosted with the rest of the platform, then measured.' },
]

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-2 rounded-xl border border-border bg-background p-3">
        <div className="flex gap-2">
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
            Operator
          </span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
            Brief
          </span>
        </div>
        <div className="h-2 w-4/5 rounded bg-muted" />
        <div className="h-2 w-3/5 rounded bg-muted" />
        <div className="h-8 rounded-lg border border-dashed border-border bg-muted/40" />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <div className="flex gap-1 border-b border-border px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2">
          <div className="col-span-1 h-14 rounded bg-muted" />
          <div className="col-span-2 space-y-1.5">
            <div className="h-2 w-2/3 rounded bg-muted" />
            <div className="h-8 rounded bg-muted/70" />
          </div>
        </div>
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="space-y-1.5 rounded-xl border border-border bg-background p-3 font-mono text-[10px] text-muted-foreground">
        <p>
          <span className="text-primary">POST</span> /api/enrol
        </p>
        <p>
          <span className="text-primary">GET</span> /reports
        </p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-2/3 rounded-full bg-primary" />
        </div>
      </div>
    )
  }
  if (index === 3) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
          <Cloud className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold">Live · 99.9%</p>
          <div className="mt-1.5 flex gap-0.5">
            {Array.from({ length: 8 }, (_, i) => (
              <span
                key={i}
                className={cn('h-4 flex-1 rounded-sm', i === 6 ? 'bg-muted' : 'bg-primary/70')}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="rounded-xl border border-primary/40 bg-primary/10 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Go live</p>
      <p className="mt-1 text-xs font-semibold">Hosted product, handed over</p>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Check className="h-3 w-3 text-primary" />
        Team trained · measured
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
        </div>

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative px-5 py-8 sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15 dark:opacity-10" />

              <ol className="relative space-y-0">
                <div
                  className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-border sm:left-[1.4rem]"
                  aria-hidden
                />
                {SOFTWARE_STEPS.map((step, index) => {
                  const Icon = step.icon
                  const last = index === SOFTWARE_STEPS.length - 1
                  return (
                    <li
                      key={step.title}
                      className={cn(
                        'relative grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,14rem)] sm:gap-8',
                        index < SOFTWARE_STEPS.length - 1 ? 'pb-10 sm:pb-12' : '',
                      )}
                    >
                      <div
                        className={cn(
                          'relative z-10 flex h-9 w-9 items-center justify-center rounded-full border sm:h-11 sm:w-11',
                          last
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-primary',
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {index === 0 ? 'Start' : last ? 'Live' : 'Then'} · 0{index + 1}
                        </p>
                        <h3 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">{step.title}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                          {step.body}
                        </p>
                      </div>
                      <div className="sm:pt-1">
                        <StepVisual index={index} />
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card sm:mt-8">
            <div className="relative px-5 py-8 sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15 dark:opacity-10" />

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Once it is live
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                  We map the product. Then we wire AI only where it pays off.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  Not every screen needs a model. The live system stays as-is where the work is
                  already clear. AI goes into the jobs that eat hours or hide insight — with people
                  still in charge.
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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
                            <p
                              className={cn(
                                'mt-2 text-[10px] font-semibold uppercase tracking-[0.14em]',
                                mod.ai ? 'text-primary' : 'text-muted-foreground',
                              )}
                            >
                              {mod.ai ? 'High leverage' : 'Keep as-is'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ol className="space-y-3">
                    {AI_FLOW.map((step, index) => {
                      const Icon = step.icon
                      return (
                        <li key={step.title} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            {index < AI_FLOW.length - 1 && (
                              <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
                            )}
                          </div>
                          <div className="min-w-0 pb-3">
                            <p className="text-sm font-bold">
                              <span className="mr-1.5 text-[11px] font-semibold text-muted-foreground">
                                Then 0{index + 1}
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
                    <li className="flex items-center gap-2 pl-12 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      AI sits inside the software. It is not the product.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
